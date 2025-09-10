import { stars } from '../entities.js';
import { ctx, width, height } from '../globals.js';
import { camera } from '../player.js';

const NUM_STARS = 500;

export function initStars() {
    stars.length = 0; // Clear existing stars
    for (let i = 0; i < NUM_STARS; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            z: Math.random() * width,
            alpha: Math.random()
        });
    }
}

export function drawStars() {
    for (const star of stars) {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        const size = (1 - star.z / width) * 2;
        ctx.beginPath();
        ctx.arc(star.x, star.y, size, 0, Math.PI * 2);
        ctx.fill();
    }
}

export function updateStars(dt) {
    for (const star of stars) {
        if (star.alpha < 1) {
            star.alpha += 0.015 * dt;
        }

        const dx = star.x - width / 2;
        const dy = star.y - height / 2;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance === 0) continue;

        const speed = (1 - star.z / width) * (camera.speed * 0.1);

        star.x += (dx / distance) * speed * dt;
        star.y += (dy / distance) * speed * dt;

        if (star.x < 0 || star.x > width || star.y < 0 || star.y > height) {
            const angle = Math.random() * Math.PI * 2;
            const spawnRadius = 150 + Math.random() * 100;
            star.x = width / 2 + Math.cos(angle) * spawnRadius;
            star.y = height / 2 + Math.sin(angle) * spawnRadius;
            star.z = Math.random() * width;
            star.alpha = 0;
        }
    }
} 