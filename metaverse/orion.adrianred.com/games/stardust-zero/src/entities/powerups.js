import { camera } from '../player.js';
import { POWERUP_CONFIG, CONFIG } from '../config.js';
import { tunnel, project } from '../tunnel.js';
import { isPathHighlighted } from '../utils.js';
import { ctx } from '../globals.js';
import { powerups } from '../entities.js';
import { game } from '../game.js';

export function spawnPowerup() {
    if (Math.random() < POWERUP_CONFIG.spawnChance && game.isSpawningAllowed) {
        const pathIndex = Math.floor(Math.random() * tunnel.pointsPerSegment);
        const z = camera.z + (camera.clipFar - 5) * tunnel.segmentLength;
        powerups.push({ pathIndex, z, alpha: 0 });
    }
}

export function drawPowerups(highlightedPathIndex) {
    for (const p_up of powerups) {
        const camDist = p_up.z - camera.z;
        if (camDist < camera.clipNear) continue;

        const currentSegmentIndex = Math.floor(p_up.z / tunnel.segmentLength);
        const nextSegmentIndex = currentSegmentIndex + 1;

        const currentSegment = tunnel.path[currentSegmentIndex % tunnel.segments];
        const nextSegment = tunnel.path[nextSegmentIndex % tunnel.segments];

        if (!currentSegment || !nextSegment) continue;

        const segmentT = (p_up.z % tunnel.segmentLength) / tunnel.segmentLength;
        const pathX = currentSegment.x + (nextSegment.x - currentSegment.x) * segmentT;
        const pathY = currentSegment.y + (nextSegment.y - currentSegment.y) * segmentT;
        const pathRadius = currentSegment.radius + (nextSegment.radius - currentSegment.radius) * segmentT;

        const p = project(pathX - camera.x, pathY - camera.y, camDist);
        const radius = pathRadius * p.scale;
        
        const angle = (p_up.pathIndex / tunnel.pointsPerSegment) * Math.PI * 2;
        const x = p.x + Math.cos(angle) * radius;
        const y = p.y + Math.sin(angle) * radius;
        
        const size = p.scale * POWERUP_CONFIG.size;

        ctx.fillStyle = `hsla(${game.powerupHue}, 100%, 70%, ${p_up.alpha})`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();

        if (isPathHighlighted(p_up.pathIndex, highlightedPathIndex)) {
            ctx.lineWidth = p.scale * CONFIG.ENEMY_HIGHLIGHT_BORDER_WIDTH;
            ctx.strokeStyle = 'black';
            ctx.stroke();
        }
    }
}

export function updatePowerups(dt) {
    for (let i = powerups.length - 1; i >= 0; i--) {
        const p_up = powerups[i];
        
        if (p_up.alpha < 1) {
            p_up.alpha = Math.min(1, p_up.alpha + CONFIG.FADE_IN_SPEED * dt);
        }

        p_up.z -= POWERUP_CONFIG.speed * dt;

        if (p_up.z < camera.z) {
            powerups.splice(i, 1);
        }
    }
} 