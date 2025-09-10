import { CONFIG } from './config.js';
import { ctx, width, height, noise } from './globals.js';
import { camera } from './player.js';
import { isPathHighlighted, lerpHue, isTouchDevice } from './utils.js';

export const tunnel = {
    segments: 10000,
    pointsPerSegment: CONFIG.INITIAL_POINTS_PER_SEGMENT,
    segmentLength: CONFIG.INITIAL_SEGMENT_LENGTH,
    radius: CONFIG.INITIAL_TUNNEL_RADIUS,
    path: [],
    hue: CONFIG.INITIAL_HUE,
    hueSpeed: 0.5,
    rainbowEffect: CONFIG.INITIAL_RAINBOW_EFFECT,
    rainbowStrip: CONFIG.INITIAL_RAINBOW_STRIP,
    isTransitioning: false,
    transitionProgress: 0,
    transitionDuration: CONFIG.TRANSITION_DURATION,
    oldHue: 0,
};

export function generateTunnelPath() {
    tunnel.path = [];
    const turnFactor = isTouchDevice() ? CONFIG.TUNNEL_TURN_FACTOR_TOUCH : CONFIG.TUNNEL_TURN_FACTOR_DESKTOP;
    for (let i = 0; i < tunnel.segments; i++) {
        const angle = i * 0.1;
        const x = noise.noise2D(i * 0.01, 1) * 500 * turnFactor;
        const y = noise.noise2D(i * 0.01, 2) * 500 * turnFactor;
        const radius = CONFIG.INITIAL_TUNNEL_RADIUS;
        const z = i * tunnel.segmentLength;
        const radiusNoise = tunnel.radius * (1 + noise.noise2D(i * 0.02, 3) * 0.2);
        
        tunnel.path.push({ x: x, y: y, z: z, radius: radiusNoise });
    }
}

export function project(x, y, z) {
    const scale = camera.fov / (camera.fov + z);
    return {
        x: width / 2 + x * scale,
        y: height / 2 + y * scale,
        scale: scale
    };
}

export function drawTunnel(highlightedPathIndex) {
    if (tunnel.rainbowEffect) {
        tunnel.hue = (tunnel.hue + tunnel.hueSpeed) % 360;
    }

    for (let i = Math.floor(camera.z / tunnel.segmentLength); i < Math.floor(camera.z / tunnel.segmentLength) + camera.clipFar; i++) {
        const segmentIndex = i % tunnel.segments;

        if (!tunnel.path[segmentIndex]) continue;

        const segment = tunnel.path[segmentIndex];
        const camDist = segment.z - camera.z;

        if (camDist < camera.clipNear) continue;

        const p = project(segment.x - camera.x, segment.y - camera.y, camDist);
        const radius = segment.radius * p.scale;
        
        const opacity = 1 - (camDist / (camera.clipFar * tunnel.segmentLength));
        const dotSize = p.scale * CONFIG.TUNNEL_DOT_SIZE; 

        for (let j = 0; j < tunnel.pointsPerSegment; j++) {
            const angle = (j / tunnel.pointsPerSegment) * Math.PI * 2;
            const x = p.x + Math.cos(angle) * radius;
            const y = p.y + Math.sin(angle) * radius;
            
            const lightness = 65;
            let baseHue;

            if (tunnel.isTransitioning) {
                const progress = tunnel.transitionProgress / tunnel.transitionDuration;
                baseHue = lerpHue(tunnel.oldHue, tunnel.hue, progress);
            } else {
                baseHue = tunnel.hue;
            }

            let hue;
            if (tunnel.rainbowStrip) {
                hue = (baseHue + (j / tunnel.pointsPerSegment) * 360) % 360;
            } else if (tunnel.rainbowEffect) {
                hue = baseHue + i * 2;
            } else {
                hue = baseHue;
            }

            const isHighlighted = isPathHighlighted(j, highlightedPathIndex);

            const color = isHighlighted
                ? `hsla(0, 0%, 100%, ${opacity})`
                : `hsla(${hue}, 100%, ${lightness}%, ${opacity})`;

            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(x, y, dotSize, 0, Math.PI * 2);
            ctx.fill();
        }
    }
} 