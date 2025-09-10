export const enemies = [];
export const projectiles = [];
export const powerups = [];
export const particles = [];
export const stars = [];

export function clearAllEntities() {
    enemies.length = 0;
    projectiles.length = 0;
    powerups.length = 0;
    particles.length = 0;
    // Stars are not cleared on restart, they are reset separately.
} 