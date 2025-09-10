import { CONFIG, LEVEL_COLOR_PALETTE, NOISE_SEED } from './config.js';
import { canvas, setNoise } from './globals.js';
import { tunnel, generateTunnelPath } from './tunnel.js';
import { camera } from './player.js';
import { updateUi, showGameOverScreen, hideGameOverScreen, hideHud, showHud } from './ui.js';
import { playSound } from './audio.js';
import { shuffleArray, isTouchDevice } from './utils.js';
import { clearAllEntities } from './entities.js';
import { enemies, projectiles, powerups, particles } from './entities.js';

export const game = {
    score: 0,
    lives: 3,
    level: 1,
    enemiesDestroyedThisLevel: 0,
    enemiesForNextLevel: CONFIG.ENEMIES_TO_LEVEL_UP_INITIAL,
    multiShotCharges: 0,
    isMultiShotActive: false,
    isSpawningAllowed: false,
    isGameOver: false,
    godMode: false,
    shuffledPalette: [],
    powerupHue: 0,
    acceptingInput: true,
    colorPaletteIndex: 0,
    projectileSpeed: CONFIG.PROJECTILE_SPEED,
    speedBeforeWarp: 0
};

export function levelUp() {
    game.level++;
    game.enemiesDestroyedThisLevel = 0;
    game.enemiesForNextLevel += CONFIG.ENEMIES_TO_LEVEL_UP_INCREASE;
    camera.speed += CONFIG.PLAYER_SPEED_INCREASE_PER_LEVEL;
    game.projectileSpeed += CONFIG.PROJECTILE_SPEED_INCREASE_PER_LEVEL;

    if (game.level % 10 === 0) {
        tunnel.rainbowEffect = true;
    } else {
        tunnel.rainbowEffect = false;
    }

    game.colorPaletteIndex = (game.colorPaletteIndex + 1) % LEVEL_COLOR_PALETTE.length;
    tunnel.oldHue = tunnel.hue;
    tunnel.hue = LEVEL_COLOR_PALETTE[game.colorPaletteIndex];

    enemies.length = 0; // Clear all existing enemies

    tunnel.isTransitioning = true;
    tunnel.transitionProgress = 0;
    
    game.isSpawningAllowed = false;
    setTimeout(() => {
        game.isSpawningAllowed = true;
    }, CONFIG.LEVEL_SPAWN_DELAY);

    tunnel.pointsPerSegment = Math.min(CONFIG.MAX_POINTS_PER_SEGMENT, tunnel.pointsPerSegment + CONFIG.LEVEL_DIFFICULTY_PPS_INCREASE);
    tunnel.segmentLength = Math.max(CONFIG.MIN_SEGMENT_LENGTH, tunnel.segmentLength - CONFIG.LEVEL_DIFFICULTY_SL_DECREASE);
    
    updateUi();
    generateTunnelPath();
    playSound('levelUp');
}

export function gameOver() {
    game.isGameOver = true;
    document.body.classList.remove('game-started');
    hideHud();
    showGameOverScreen();
}

export function restartGame(isInitialStart = false) {
    hideGameOverScreen();
    showHud();
    if (isTouchDevice()) {
        document.body.classList.add('game-started');
    }

    Object.assign(game, {
        score: 0,
        lives: 3,
        level: 1,
        enemiesDestroyedThisLevel: 0,
        enemiesForNextLevel: CONFIG.ENEMIES_TO_LEVEL_UP_INITIAL,
        multiShotCharges: 0,
        isMultiShotActive: false,
        isSpawningAllowed: true,
        isGameOver: false,
        godMode: false,
        powerupHue: 0,
        acceptingInput: isInitialStart ? false : true,
    });
    
    // Set initial tunnel state first
    Object.assign(tunnel, {
        pointsPerSegment: CONFIG.INITIAL_POINTS_PER_SEGMENT,
        segmentLength: CONFIG.INITIAL_SEGMENT_LENGTH,
        radius: CONFIG.INITIAL_TUNNEL_RADIUS,
        hue: isInitialStart ? 255 : CONFIG.INITIAL_HUE,
        rainbowEffect: CONFIG.INITIAL_RAINBOW_EFFECT,
        rainbowStrip: CONFIG.INITIAL_RAINBOW_STRIP,
        isTransitioning: false,
        transitionProgress: 0
    });
    
    generateTunnelPath();

    const startSegment = tunnel.path[0];
    Object.assign(camera, { 
        x: startSegment.x, 
        y: startSegment.y, 
        z: 0, 
        fov: CONFIG.CAMERA_FOV, 
        speed: CONFIG.PLAYER_SPEED 
    });
    
    setNoise(new SimplexNoise(NOISE_SEED));
    
    clearAllEntities();
    
    updateUi();
} 