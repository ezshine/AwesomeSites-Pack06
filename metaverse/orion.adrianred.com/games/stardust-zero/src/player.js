import { game, restartGame, levelUp } from './game.js';
import { initAudio, playSound } from './audio.js';
import { fireProjectile } from './entities/projectiles.js';
import { tunnel } from './tunnel.js';
import { POWERUP_CONFIG, CONFIG, LEVEL_COLOR_PALETTE } from './config.js';
import { updateUi, toggleHud } from './ui.js';
import { mouse, width, height } from './globals.js';
import { isTouchDevice } from './utils.js';

export const camera = {
    x: 0,
    y: 0,
    z: 0,
    fov: CONFIG.CAMERA_FOV,
    speed: CONFIG.PLAYER_SPEED,
    clipNear: 0,
    clipFar: CONFIG.RENDER_DISTANCE_SEGMENTS
};

export function getHighlightedPathIndex(source = mouse) {
    let mouseAngle = Math.atan2(source.y, source.x);
    if (mouseAngle < 0) {
        mouseAngle += Math.PI * 2;
    }
    return Math.round((mouseAngle / (Math.PI * 2)) * tunnel.pointsPerSegment) % tunnel.pointsPerSegment;
}

function handleMouseMove(event) {
    mouse.x = event.clientX - width / 2;
    mouse.y = event.clientY - height / 2;
}

function handleClick() {
    if (!game.acceptingInput) return;

    if (game.isGameOver) {
        restartGame();
        return;
    }
    initAudio();
    fireProjectile(getHighlightedPathIndex());
}

function handleRightClick(event) {
    event.preventDefault();
    if (game.multiShotCharges > 0) {
        game.isMultiShotActive = !game.isMultiShotActive;
        updateUi();
    }
}

export function addInputListeners() {
    if (!isTouchDevice()) {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);
    }
    window.addEventListener('contextmenu', handleRightClick);
}

export function initTouchControls() {
    if (!isTouchDevice()) return;

    const leftZone = document.createElement('div');
    leftZone.style.position = 'absolute';
    leftZone.style.left = '0';
    leftZone.style.top = '0';
    leftZone.style.width = '50vw';
    leftZone.style.height = '100%';
    document.body.appendChild(leftZone);

    const rightZone = document.createElement('div');
    rightZone.style.position = 'absolute';
    rightZone.style.right = '0';
    rightZone.style.top = '0';
    rightZone.style.width = '50vw';
    rightZone.style.height = '100%';
    document.body.appendChild(rightZone);

    const joystickManager = nipplejs.create({
        zone: leftZone,
        mode: 'static',
        position: { left: '80px', bottom: '80px' },
        color: 'white'
    });

    joystickManager.on('move', (evt, data) => {
        const angle = data.angle.radian;
        const distance = data.distance;
        const maxDistance = 50; // nipplejs's default joystick size/2
        const normalizedDistance = Math.min(distance, maxDistance) / maxDistance;
        
        const moveX = Math.cos(angle) * normalizedDistance;
        const moveY = Math.sin(angle) * normalizedDistance;

        // Invert Y because screen coordinates are opposite to joystick
        mouse.x = moveX * (width / 2);
        mouse.y = -moveY * (height / 2);
    });

    joystickManager.on('end', () => {
        // Reset mouse position when stick is released
        mouse.x = 0;
        mouse.y = 0;
    });

    document.body.addEventListener('touchstart', (event) => {
        // Ignore taps on the joystick
        if (leftZone.contains(event.target)) {
            return;
        }

        if (!game.acceptingInput) return;

        if (game.isGameOver) {
            restartGame();
            return;
        }
        initAudio();
        fireProjectile(getHighlightedPathIndex());
    }, { passive: true });
}

export function updateCamera(source, dt) {
    camera.z += camera.speed * dt;
    
    const currentTotalLength = tunnel.segments * tunnel.segmentLength;
    if (camera.z >= currentTotalLength) {
        camera.z -= currentTotalLength;
    } else if (camera.z < 0) {
        camera.z += currentTotalLength;
    }

    const currentSegmentIndex = Math.floor(camera.z / tunnel.segmentLength) % tunnel.segments;
    const nextSegmentIndex = (currentSegmentIndex + 1) % tunnel.segments;
    const segmentT = (camera.z % tunnel.segmentLength) / tunnel.segmentLength;
    
    const currentSegment = tunnel.path[currentSegmentIndex];
    const nextSegment = tunnel.path[nextSegmentIndex];

    if (currentSegment && nextSegment) {
        const pathX = currentSegment.x + (nextSegment.x - currentSegment.x) * segmentT;
        const pathY = currentSegment.y + (nextSegment.y - currentSegment.y) * segmentT;
        
        const lerpFactor = 1 - Math.pow(1 - 0.08, dt);
        camera.x += (pathX - camera.x) * lerpFactor;
        camera.y += (pathY - camera.y) * lerpFactor;
    }
} 