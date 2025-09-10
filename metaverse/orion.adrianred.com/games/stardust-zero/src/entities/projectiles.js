import { camera } from '../player.js';
import { CONFIG, POWERUP_CONFIG } from '../config.js';
import { tunnel, project } from '../tunnel.js';
import { game, levelUp } from '../game.js';
import { playSound } from '../audio.js';
import { updateUi } from '../ui.js';
import { createExplosion } from './particles.js';
import { enemies, projectiles, powerups } from '../entities.js';
import { ctx } from '../globals.js';

export function fireProjectile(highlightedPathIndex) {
    if (game.isMultiShotActive) {
        projectiles.push({ pathIndex: (highlightedPathIndex - 2 + tunnel.pointsPerSegment) % tunnel.pointsPerSegment, z: camera.z });
        projectiles.push({ pathIndex: (highlightedPathIndex - 1 + tunnel.pointsPerSegment) % tunnel.pointsPerSegment, z: camera.z });
        projectiles.push({ pathIndex: highlightedPathIndex, z: camera.z });
        projectiles.push({ pathIndex: (highlightedPathIndex + 1) % tunnel.pointsPerSegment, z: camera.z });
        projectiles.push({ pathIndex: (highlightedPathIndex + 2) % tunnel.pointsPerSegment, z: camera.z });
        game.multiShotCharges--;
        if (game.multiShotCharges <= 0) {
            game.isMultiShotActive = false;
        }
    } else {
        projectiles.push({ pathIndex: highlightedPathIndex, z: camera.z });
    }
    playSound('shoot');
}

export function drawProjectiles() {
    for (const projectile of projectiles) {
        const camDist = projectile.z - camera.z;
        if (camDist < camera.clipNear) continue;

        const currentSegmentIndex = Math.floor(projectile.z / tunnel.segmentLength);
        const nextSegmentIndex = currentSegmentIndex + 1;

        const currentSegment = tunnel.path[currentSegmentIndex % tunnel.segments];
        const nextSegment = tunnel.path[nextSegmentIndex % tunnel.segments];

        if (!currentSegment || !nextSegment) continue;

        const segmentT = (projectile.z % tunnel.segmentLength) / tunnel.segmentLength;
        const pathX = currentSegment.x + (nextSegment.x - currentSegment.x) * segmentT;
        const pathY = currentSegment.y + (nextSegment.y - currentSegment.y) * segmentT;
        const pathRadius = currentSegment.radius + (nextSegment.radius - currentSegment.radius) * segmentT;

        const p = project(pathX - camera.x, pathY - camera.y, camDist);
        const radius = pathRadius * p.scale;

        const angle = (projectile.pathIndex / tunnel.pointsPerSegment) * Math.PI * 2;
        const x = p.x + Math.cos(angle) * radius;
        const y = p.y + Math.sin(angle) * radius;
        
        const dotSize = p.scale * CONFIG.TUNNEL_DOT_SIZE;

        ctx.fillStyle = `rgba(0, 0, 0, 1)`;
        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fill();
    }
}

export function updateProjectiles(dt) {
    for (let i = projectiles.length - 1; i >= 0; i--) {
        const projectile = projectiles[i];
        projectile.z += game.projectileSpeed * dt;

        if (projectile.z > camera.z + camera.clipFar * tunnel.segmentLength) {
            projectiles.splice(i, 1);
            continue;
        }

        let projectileHit = false;

        // Check for enemy collision
        for (let j = enemies.length - 1; j >= 0; j--) {
            const enemy = enemies[j];
            if (projectile.pathIndex === enemy.pathIndex && Math.abs(projectile.z - enemy.z) < tunnel.segmentLength) {
                if (game.isMultiShotActive && enemy.type === 'tank') {
                    enemy.health = 0;
                } else {
                    enemy.health--;
                }
                projectiles.splice(i, 1);
                projectileHit = true;

                if (enemy.health <= 0) {
                    createExplosion(enemy);
                    enemies.splice(j, 1);
                    game.score += enemy.type === 'tank' ? CONFIG.SCORE_PER_TANK : CONFIG.SCORE_PER_GRUNT;
                    game.enemiesDestroyedThisLevel++;
                    if (game.enemiesDestroyedThisLevel >= game.enemiesForNextLevel) {
                        levelUp();
                    }
                    playSound('hit');
                } else {
                    playSound('hit');
                }
                break; 
            }
        }

        if (projectileHit) {
            updateUi();
            continue;
        }

        // If no enemy was hit, check for power-up collision
        for (let j = powerups.length - 1; j >= 0; j--) {
            const p_up = powerups[j];
            if (projectile.pathIndex === p_up.pathIndex && Math.abs(projectile.z - p_up.z) < tunnel.segmentLength) {
                powerups.splice(j, 1);
                projectiles.splice(i, 1);
                game.multiShotCharges += POWERUP_CONFIG.charges;
                updateUi();
                playSound('powerup');
                break;
            }
        }
    }
} 