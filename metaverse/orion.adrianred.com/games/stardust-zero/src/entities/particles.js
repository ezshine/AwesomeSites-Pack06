import { ctx } from '../globals.js';
import { particles } from '../entities.js';
import { CONFIG } from '../config.js';
import { camera } from '../player.js';
import { tunnel, project } from '../tunnel.js';

export function createExplosion(enemy) {
    const segmentIndex = Math.floor(enemy.z / tunnel.segmentLength) % tunnel.segments;
    if (!tunnel.path[segmentIndex]) return;

    const segment = tunnel.path[segmentIndex];
    const camDist = enemy.z - camera.z;

    if (camDist < camera.clipNear) return;

    const p = project(segment.x - camera.x, segment.y - camera.y, camDist);
    const radius = segment.radius * p.scale;
    const angle = (enemy.pathIndex / tunnel.pointsPerSegment) * Math.PI * 2;
    const x = p.x + Math.cos(angle) * radius;
    const y = p.y + Math.sin(angle) * radius;

    const numParticles = enemy.type === 'tank' ? CONFIG.PARTICLES_PER_TANK : CONFIG.PARTICLES_PER_GRUNT;
    const baseColor = enemy.type === 'tank' ? 30 : 0; // Hue for orange/red

    for (let i = 0; i < numParticles; i++) {
        const colorVariation = (Math.random() - 0.5) * 20;
        const color = `hsla(${baseColor + colorVariation}, 100%, 70%, 1)`;
        particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * CONFIG.EXPLOSION_VELOCITY * p.scale,
            vy: (Math.random() - 0.5) * CONFIG.EXPLOSION_VELOCITY * p.scale,
            alpha: 1,
            size: (Math.random() * CONFIG.PARTICLE_SIZE_RANDOMNESS + CONFIG.PARTICLE_MIN_SIZE) * p.scale, 
            color: color
        });
    }
}

export function updateParticles(dt) {
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        
        p.alpha -= CONFIG.PARTICLE_FADE_SPEED * dt;

        const friction = Math.pow(CONFIG.PARTICLE_FRICTION, dt);
        p.vx *= friction;
        p.vy *= friction;

        if (p.alpha <= 0) {
            particles.splice(i, 1);
        }
    }
}

export function drawParticles() {
    for (const p of particles) {
        const newColor = p.color.replace('1)', `${p.alpha})`);
        ctx.fillStyle = newColor;
        ctx.fillRect(p.x, p.y, p.size, p.size);
    }
} 