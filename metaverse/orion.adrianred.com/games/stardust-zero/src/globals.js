export const canvas = document.getElementById('tunnelCanvas');
export const ctx = canvas.getContext('2d');

export let width, height;

export function setDimensions(w, h) {
    width = w;
    height = h;
    canvas.width = w;
    canvas.height = h;
}

export const mouse = { x: 0, y: 0 };

export let noise;
export function setNoise(n) {
    noise = n;
} 