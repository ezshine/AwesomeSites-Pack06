import { camera } from '../player.js';
import { CONFIG } from '../config.js';
import { tunnel, project } from '../tunnel.js';
import { game, gameOver } from '../game.js';
import { isPathHighlighted } from '../utils.js';
import { ctx } from '../globals.js';
import { enemies } from '../entities.js';
import { updateUi } from '../ui.js';
import { playSound } from '../audio.js';

export { enemies };

export function drawEnemies(highlightedPathIndex) {
    for (const enemy of enemies) {
        const camDist = enemy.z - camera.z;
        if (camDist < camera.clipNear) continue;

        const currentSegmentIndex = Math.floor(enemy.z / tunnel.segmentLength);
        const nextSegmentIndex = currentSegmentIndex + 1;

        const currentSegment = tunnel.path[currentSegmentIndex % tunnel.segments];
        const nextSegment = tunnel.path[nextSegmentIndex % tunnel.segments];

        if (!currentSegment || !nextSegment) continue;

        const segmentT = (enemy.z % tunnel.segmentLength) / tunnel.segmentLength;
        const pathX = currentSegment.x + (nextSegment.x - currentSegment.x) * segmentT;
        const pathY = currentSegment.y + (nextSegment.y - currentSegment.y) * segmentT;
        const pathRadius = currentSegment.radius + (nextSegment.radius - currentSegment.radius) * segmentT;

        const p = project(pathX - camera.x, pathY - camera.y, camDist);
        const radius = pathRadius * p.scale;
        
        const angle = (enemy.pathIndex / tunnel.pointsPerSegment) * Math.PI * 2;
        const x = p.x + Math.cos(angle) * radius;
        const y = p.y + Math.sin(angle) * radius;
        
        const dotSize = p.scale * (enemy.type === 'tank' ? CONFIG.ENEMY_SIZE_TANK : CONFIG.ENEMY_SIZE_GRUNT);

        const enemyHue = 0; // Red
        const tunnelHue = tunnel.hue;
        const hueDifference = Math.min(Math.abs(tunnelHue - enemyHue), 360 - Math.abs(tunnelHue - enemyHue));
        
        let finalEnemyColor;
        if (hueDifference < 45) { // If tunnel color is too close to red...
            finalEnemyColor = `hsla(180, 100%, 50%, ${enemy.alpha})`; // ...use a high-contrast color instead (Cyan).
        } else {
            finalEnemyColor = `hsla(0, 100%, 50%, ${enemy.alpha})`; // Default Red.
        }

        ctx.fillStyle = finalEnemyColor;
        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fill();

        if (isPathHighlighted(enemy.pathIndex, highlightedPathIndex)) {
            ctx.lineWidth = p.scale * CONFIG.ENEMY_HIGHLIGHT_BORDER_WIDTH;
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }
    }
}

export function updateEnemies(dt) {
    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        
        if (enemy.alpha < 1) {
            enemy.alpha = Math.min(1, enemy.alpha + CONFIG.FADE_IN_SPEED * dt);
        }

        enemy.z -= CONFIG.ENEMY_SPEED * dt;

        if (enemy.z < camera.z) {
            enemies.splice(i, 1);
            if (!game.godMode) {
                game.lives--;
                playSound('damage');
                updateUi();
                if (game.lives <= 0) {
                    gameOver();
                }
            }
        }
    }
}

export function spawnEnemy() {
    if (enemies.length > CONFIG.MAX_ENEMIES || !game.isSpawningAllowed) return;

    const pathIndex = Math.floor(Math.random() * tunnel.pointsPerSegment);
    const z = camera.z + (camera.clipFar - 5) * tunnel.segmentLength;

    let type = 'grunt';
    if (game.level >= CONFIG.MIN_LEVEL_FOR_TANKS && Math.random() < CONFIG.TANK_SPAWN_CHANCE) {
        type = 'tank';
    }

    const enemy = {
        pathIndex,
        z,
        type,
        health: type === 'tank' ? 2 : 1,
        alpha: 0,
        targeted: false,
    };

    enemies.push(enemy);
} 