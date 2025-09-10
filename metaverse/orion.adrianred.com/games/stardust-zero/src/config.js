export const CONFIG = {
    // Player & Camera
    PLAYER_SPEED: 15,                   // Base speed of the camera moving through the tunnel.
    PLAYER_SPEED_INCREASE_PER_LEVEL: 2, // How much the player's speed increases each level.
    PROJECTILE_SPEED: 50,               // How fast projectiles travel down the tunnel.
    PROJECTILE_SPEED_INCREASE_PER_LEVEL: 1, // How much the projectile's speed increases each level.
    CAMERA_FOV: 120,                    // Camera's field of view. Affects the perspective distortion.
    RENDER_DISTANCE_SEGMENTS: 50,       // How many tunnel segments are rendered ahead of the player.

    // Tunnel
    TUNNEL_DOT_SIZE: 200,               // Visual size of the dots that make up the tunnel walls.
    INITIAL_POINTS_PER_SEGMENT: 30,     // Number of points in each ring of the tunnel at the start.
    INITIAL_SEGMENT_LENGTH: 150,        // Length of each tunnel segment at the start. Affects turn smoothness.
    INITIAL_TUNNEL_RADIUS: 2000,        // The starting radius of the tunnel.
    INITIAL_HUE: 280,                   // The starting color (hue) of the tunnel.
    INITIAL_RAINBOW_EFFECT: false,      // Whether the rainbow color cycling effect is on by default.
    INITIAL_RAINBOW_STRIP: false,       // Whether the rainbow strip effect is on by default.

    // Tunnel Generation
    TUNNEL_TURN_FACTOR_DESKTOP: 6,      // How sharp the tunnel's turns are on desktop. Higher is sharper.
    TUNNEL_TURN_FACTOR_TOUCH: 4,        // How sharp the tunnel's turns are on touch devices. Higher is sharper.

    // Enemies
    ENEMY_SIZE_GRUNT: 100,              // Visual size of the smaller 'grunt' enemies.
    ENEMY_SIZE_TANK: 200,               // Visual size of the larger 'tank' enemies.
    ENEMY_SPEED: 5,                     // How fast enemies move toward the player.
    ENEMY_HIGHLIGHT_BORDER_WIDTH: 50,   // Width of the black border when targeting an enemy.
    MAX_ENEMIES: 10,                    // The maximum number of enemies that can be on screen at once.
    TANK_SPAWN_CHANCE: 0.25,            // 25% chance that a spawning enemy will be a 'tank'.
    MIN_LEVEL_FOR_TANKS: 2,             // The level at which tanks will start appearing.
    LEVEL_SPAWN_DELAY: 2000,            // (in ms) Delay before enemies start spawning after a level up.
    FADE_IN_SPEED: 0.01,                // How quickly enemies and powerups fade in (higher is faster).

    // Scoring & Levels
    SCORE_PER_GRUNT: 10,                // Points awarded for destroying a grunt.
    SCORE_PER_TANK: 25,                 // Points awarded for destroying a tank.
    ENEMIES_TO_LEVEL_UP_INITIAL: 10,    // Enemies to destroy to reach level 2.
    ENEMIES_TO_LEVEL_UP_INCREASE: 1,    // How many more enemies are required for each subsequent level.
    LEVEL_DIFFICULTY_PPS_INCREASE: 0,   // How many points are added to each segment on level up (increases density).
    LEVEL_DIFFICULTY_SL_DECREASE: 0,    // How much segment length is reduced on level up (increases speed/tightness).
    MAX_POINTS_PER_SEGMENT: 70,         // The maximum number of points per segment, for performance/visuals.
    MIN_SEGMENT_LENGTH: 40,             // The minimum length of a segment, for performance/visuals.

    // Effects & Transitions
    TRANSITION_DURATION: 150,            // How many frames the level-up warp transition lasts.
    WARP_SPEED_BOOST: 50,               // Temporary speed boost during the level-up warp.
    WARP_FOV_BOOST: 50,                // Temporary FOV boost during the level-up warp.
    PARTICLES_PER_GRUNT: 100,            // Number of particles in a grunt's explosion.
    PARTICLES_PER_TANK: 200,            // Number of particles in a tank's explosion.
    EXPLOSION_VELOCITY: 100,             // How fast explosion particles travel outwards.
    PARTICLE_SIZE_RANDOMNESS: 50,       // Randomness factor for particle size.
    PARTICLE_MIN_SIZE: 8,               // Minimum size of an explosion particle.
    PARTICLE_FADE_SPEED: 0.02,          // How quickly particles fade away.
    PARTICLE_FRICTION: 0.98,            // Slowdown factor for particle movement (lower is faster).
};

export const POWERUP_CONFIG = {
    size: 200,          // Visual size of the power-up.
    speed: 10,          // How fast power-ups move toward the player.
    spawnChance: 0.1,   // Chance to spawn a power-up every 2 seconds.
    charges: 3          // How many multi-shot charges a power-up gives.
};

// A predefined, vibrant color palette for levels, specified in HSL hue values (0-360).
export const LEVEL_COLOR_PALETTE = [
    255, // Dark Purple 
    0, // Red
    20, // Orange
    90, // Light Green
    135, // Green
    195, // Light Blue
    240, // Dark Blue
    270, // Light Purple
];

// A seed for the noise generator to create the same tunnel path every time.
export const NOISE_SEED = 'your-secret-seed'; 