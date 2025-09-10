import { CONFIG, LEVEL_COLOR_PALETTE, NOISE_SEED } from './config.js';
import { ctx, width, height, setDimensions, setNoise, canvas } from './globals.js';
import { tunnel, generateTunnelPath, drawTunnel } from './tunnel.js';
import { camera, addInputListeners, updateCamera, getHighlightedPathIndex, initTouchControls } from './player.js';
import { spawnEnemy, drawEnemies, updateEnemies } from './entities/enemies.js';
import { spawnPowerup, drawPowerups, updatePowerups } from './entities/powerups.js';
import { drawProjectiles, updateProjectiles, fireProjectile } from './entities/projectiles.js';
import { drawParticles, updateParticles } from './entities/particles.js';
import { initStars, drawStars, updateStars } from './entities/stars.js';
import { createAllUi, showHud } from './ui.js';
import { shuffleArray, isTouchDevice } from './utils.js';
import { game, restartGame } from './game.js';
import { enemies } from './entities/enemies.js';

let isGameStarted = false;
const aiMouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
let aiLockedTarget = null;
const aiShotsFired = new WeakMap();

let lastTime = 0;
let gameTime = 0;

function init() {
    setNoise(new SimplexNoise(NOISE_SEED));
    tunnel.hue = LEVEL_COLOR_PALETTE[0];
    
    resize();
    
    addInputListeners();
    window.addEventListener('resize', resize);
    
    generateTunnelPath();

    const startSegment = tunnel.path[0];
    if (startSegment) {
        camera.x = startSegment.x;
        camera.y = startSegment.y;
    }
    
    setInterval(() => {
        if (document.hidden) return;
        spawnEnemy();
        spawnPowerup();
    }, 2000);

    createAllUi();
    initStars();
    animate();
}

function startGame() {
    isGameStarted = true;
    document.getElementById('start-screen').style.display = 'none';
    document.body.classList.add('game-started');
    initTouchControls();
    showHud();

    restartGame(true);

    setTimeout(() => {
        addInputListeners();
        game.acceptingInput = true;
    }, 100);
}

function updateAI(dt) {
    const radius = Math.min(width, height) * 0.3;

    if (aiLockedTarget && !enemies.includes(aiLockedTarget)) {
        aiLockedTarget = null;
    }

    if (!aiLockedTarget) {
        let nearestEnemy = null;
        let minDistance = Infinity;

        for (const enemy of enemies) {
            const distance = enemy.z - camera.z;
            if (distance > 0 && distance < minDistance) {
                minDistance = distance;
                nearestEnemy = enemy;
            }
        }
        aiLockedTarget = nearestEnemy;
    }

    if (aiLockedTarget) {
        const segmentIndex = Math.floor(aiLockedTarget.z / tunnel.segmentLength) % tunnel.segments;
        if (tunnel.path[segmentIndex]) {
            const angle = (aiLockedTarget.pathIndex / tunnel.pointsPerSegment) * Math.PI * 2;
            const enemyRadius = tunnel.path[segmentIndex].radius;
            aiMouse.targetX = Math.cos(angle) * enemyRadius;
            aiMouse.targetY = Math.sin(angle) * enemyRadius;
        } else {
            aiLockedTarget = null;
        }

        if (aiLockedTarget) {
            const shotsRequired = aiLockedTarget.health;
            const shotsFired = aiShotsFired.get(aiLockedTarget) || 0;

            if (shotsFired < shotsRequired) {
                const highlightedPathIndex = getHighlightedPathIndex(aiMouse);
                const distanceToTarget = Math.abs(aiMouse.x - aiMouse.targetX) + Math.abs(aiMouse.y - aiMouse.targetY);

                if (highlightedPathIndex === aiLockedTarget.pathIndex && distanceToTarget < 50) {
                    fireProjectile(highlightedPathIndex);
                    aiShotsFired.set(aiLockedTarget, shotsFired + 1);
                }
            }
        }
    } else {
        const timeFactor = gameTime * 0.0005;
        aiMouse.targetX = Math.cos(timeFactor) * Math.sin(timeFactor * 0.7) * radius;
        aiMouse.targetY = Math.sin(timeFactor) * Math.cos(timeFactor * 0.5) * radius;
    }

    aiMouse.x += (aiMouse.targetX - aiMouse.x) * 0.1 * dt;
    aiMouse.y += (aiMouse.targetY - aiMouse.y) * 0.1 * dt;
}

function resize() {
    setDimensions(window.innerWidth, window.innerHeight);
    initStars();
}

function update(dt) {
    if (!isGameStarted) {
        updateAI(dt);
        game.godMode = true;
    }
    updateCamera(isGameStarted ? undefined : aiMouse, dt);
    updateEnemies(dt);
    updateProjectiles(dt);
    updateStars(dt);
    updateParticles(dt);
    updatePowerups(dt);

    game.powerupHue = (game.powerupHue + 2 * dt) % 360;

    if (tunnel.isTransitioning) {
        if (tunnel.transitionProgress === 0) {
            game.speedBeforeWarp = camera.speed;
        }

        tunnel.transitionProgress += dt;
        const progress = tunnel.transitionProgress / tunnel.transitionDuration;
        const pulse = Math.sin(progress * Math.PI);
        camera.fov = CONFIG.CAMERA_FOV + pulse * CONFIG.WARP_FOV_BOOST;
        camera.speed = game.speedBeforeWarp + pulse * CONFIG.WARP_SPEED_BOOST;

        if (tunnel.transitionProgress >= tunnel.transitionDuration) {
            tunnel.isTransitioning = false;
            camera.fov = CONFIG.CAMERA_FOV;
            camera.speed = game.speedBeforeWarp;
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, width, height);
    const highlightedPathIndex = getHighlightedPathIndex(isGameStarted ? undefined : aiMouse);
    drawStars();
    drawTunnel(highlightedPathIndex);
    drawEnemies(highlightedPathIndex);
    drawProjectiles();
    drawParticles();
    drawPowerups(highlightedPathIndex);
    drawVignette();
}

function drawVignette() {
    const vignetteStrength = isTouchDevice() ? 0.5 : 1;
    const gradient = ctx.createRadialGradient(width / 2, height / 2, width / 20, width / 2, height / 2, width);
    gradient.addColorStop(0, 'rgba(0,0,0,0)');
    gradient.addColorStop(1, `rgba(0,0,0,${vignetteStrength})`);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
}

function animate(currentTime) {
    requestAnimationFrame(animate);

    if (!lastTime) {
        lastTime = currentTime;
        return;
    }

    const deltaTime = currentTime - lastTime;
    lastTime = currentTime;
    gameTime += deltaTime;

    const cappedDeltaTime = Math.min(deltaTime, 50);
    const dt = cappedDeltaTime / (1000 / 60);

    if (game.isGameOver) {
        ctx.clearRect(0, 0, width, height);
        updateStars(dt);
        updateCamera(true, dt); // Update camera to follow tunnel center
        drawStars();
        drawTunnel();
        drawVignette();
    } else {
        update(dt);
        draw();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const startScreen = document.getElementById('start-screen');
    startScreen.addEventListener('click', startGame, { once: true });

    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/simplex-noise/2.4.0/simplex-noise.min.js';
    script.onload = init;
    document.head.appendChild(script);
}); 