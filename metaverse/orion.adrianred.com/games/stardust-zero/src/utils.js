import { game } from './game.js';
import { tunnel } from './tunnel.js';

export function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function isPathHighlighted(pathIndex, highlightedPathIndex) {
    if (game.isMultiShotActive) {
        return pathIndex === highlightedPathIndex ||
               pathIndex === (highlightedPathIndex - 1 + tunnel.pointsPerSegment) % tunnel.pointsPerSegment ||
               pathIndex === (highlightedPathIndex + 1) % tunnel.pointsPerSegment ||
               pathIndex === (highlightedPathIndex - 2 + tunnel.pointsPerSegment) % tunnel.pointsPerSegment ||
               pathIndex === (highlightedPathIndex + 2) % tunnel.pointsPerSegment;
    }
    return pathIndex === highlightedPathIndex;
}

export function lerpHue(a, b, t) {
    const d = b - a;
    if (d > 180) {
        b -= 360;
    } else if (d < -180) {
        b += 360;
    }
    return (a + (b - a) * t + 360) % 360;
}

export function isTouchDevice() {
    return (('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0) ||
           (navigator.msMaxTouchPoints > 0));
} 