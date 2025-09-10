/**
 * Level definitions
 */

class Door {
    constructor(x, y, width, height, nextLevel, direction, isBlocked = false) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.nextLevel = nextLevel;
        this.isOpen = false;
        this.direction = direction;
        this.isBlocked = isBlocked;
        this.pulseTimer = 0;
    }
    
    update(dt) {
        if (this.isOpen && !this.isBlocked) {
            // Pulsating effect when door is open
            this.pulseTimer += dt;
            this.pulsate = Math.sin(this.pulseTimer * 10) * 5;
        }
    }
    
    draw(ctx, game) {
        // Doors are now invisible but still functional for level completion
        if (game && game.showWalls) {
            ctx.save();
            ctx.strokeStyle = 'yellow';
            ctx.lineWidth = 2;
            ctx.strokeRect(this.x, this.y, this.width, this.height);
            ctx.restore();
        }
        
        // Draw arrow indicators when doors are open
        if (this.isOpen && !this.isBlocked) {
            this.drawArrow(ctx);
        }
    }
    
    drawArrow(ctx) {
        ctx.save();
        
        // Set arrow properties based on door direction
        let arrowX, arrowY, arrowRotation, arrowColor;
        const arrowSize = 20;
        const fadeIntensity = 0.7 + 0.3 * Math.sin(Date.now() / 200); // Pulsating effect
        
        switch (this.direction) {
            case 'top':
                arrowX = this.x + this.width / 2;
                arrowY = this.y + this.height + 15;
                arrowRotation = 0; // Pointing down
                arrowColor = `rgba(255, 0, 0, ${fadeIntensity})`; // Red
                break;
            case 'bottom':
                arrowX = this.x + this.width / 2;
                arrowY = this.y - 15;
                arrowRotation = Math.PI; // Pointing up
                arrowColor = `rgba(255, 0, 0, ${fadeIntensity})`; // Red
                break;
            case 'left':
                arrowX = this.x + this.width + 15;
                arrowY = this.y + this.height / 2;
                arrowRotation = -Math.PI / 2; // Pointing right (fixed direction)
                arrowColor = `rgba(255, 0, 0, ${fadeIntensity})`; // Red
                break;
            case 'right':
                arrowX = this.x - 15;
                arrowY = this.y + this.height / 2;
                arrowRotation = Math.PI / 2; // Pointing left (fixed direction)
                arrowColor = `rgba(255, 0, 0, ${fadeIntensity})`; // Red
                break;
        }
        
        // Draw the arrow
        ctx.translate(arrowX, arrowY);
        ctx.rotate(arrowRotation);
        ctx.fillStyle = arrowColor;
        ctx.strokeStyle = `rgba(200, 0, 0, ${fadeIntensity})`; // Red outline
        ctx.lineWidth = 2;
        
        // Draw arrow shape
        ctx.beginPath();
        ctx.moveTo(0, -arrowSize / 2);
        ctx.lineTo(arrowSize / 2, arrowSize / 2);
        ctx.lineTo(0, arrowSize / 3);
        ctx.lineTo(-arrowSize / 2, arrowSize / 2);
        ctx.closePath();
        
        ctx.fill();
        ctx.stroke();
        
        ctx.restore();
    }
}

// Level configuration
const LEVELS = [
    // Level 1
    {
        name: "Training Arena",
        background: "#222222",
        backgroundImage: "assets/level-01.jpg",
        enemyTypes: ['basic'],
        maxEnemies: 5,
        enemySpawnRate: 1250, // ms between spawns
        waves: 3,
        enemiesPerWave: 5,
        // Door configuration - customize these values as needed
        doors: {
            // Current default values - feel free to adjust these
            width: 100,        // Width of vertical doors (left/right)
            height: 100,      // Height of horizontal doors (top/bottom)
            // Custom positions (optional - if not specified, uses default centered positions)
            top: { x: 0, y: 40 },      // null = use default centered position
            bottom: { x: 0, y: 0 },   // null = use default centered position  
            left: { x: 40, y: 0, w: 20, h: 100 },     // null = use default centered position
            right: { x: -40, y: 0, w: 20, h: 100 }     // null = use default centered position
        }
    },
    
    // Level 2
    {
        name: "Shooter's Hall",
        background: "#331111",
        backgroundImage: "assets/level-02.jpg",
        enemyTypes: ['basic', 'shooter'],
        maxEnemies: 10,
        enemySpawnRate: 1000,
        waves: 4,
        enemiesPerWave: 5,
        doors: {
            width: 100,
            height: 100,
            top: { x: 0, y: 20, w: 160, h: 100 },      // null = use default centered position
            bottom: { x: 0, y: -10, w: 130, h: 100 },   // null = use default centered position  
            left: { x: 40, y: 0, w: 20, h: 100 },     // null = use default centered position
            right: { x: -40, y: 0, w: 20, h: 100 }     // null = use default centered position
        }
    },
    
    // Level 3
    {
        name: "Tank Grounds",
        background: "#113322",
        backgroundImage: "assets/level-03.jpg",
        enemyTypes: ['basic', 'shooter', 'tank'],
        maxEnemies: 15,
        enemySpawnRate: 750,
        waves: 5,
        enemiesPerWave: 5,
        doors: {
            width: 100,
            height: 100,
            top: { x: 0, y: 20, w: 120, h: 120 },      // null = use default centered position
            bottom: { x: 0, y: -20, w: 100, h: 100 },   // null = use default centered position  
            left: { x: 40, y: 0, w: 20, h: 100 },     // null = use default centered position
            right: { x: -40, y: 0, w: 20, h: 100 }     // null = use default centered position
        }
    },
    
    // Level 4 - Final
    {
        name: "Survival Arena",
        background: "#111133",
        backgroundImage: "assets/level-04.jpg",
        enemyTypes: ['basic', 'shooter', 'tank'],
        maxEnemies: 20,
        enemySpawnRate: 500,
        waves: 6,
        enemiesPerWave: 5,
        doors: {
            width: 100,
            height: 100,
            top: { x: 0, y: 40, w: 100, h: 100 },      // null = use default centered position
            bottom: { x: 0, y: -20, w: 100, h: 100 },   // null = use default centered position  
            left: { x: 40, y: 0, w: 20, h: 100 },     // null = use default centered position
            right: { x: -40, y: 0, w: 20, h: 100 }     // null = use default centered position
        }
    }
];

// Level class - handles level-specific logic
class Level {
    constructor(game, levelIndex, entryDirection = null) {
        this.game = game;
        this.levelIndex = levelIndex;
        this.config = LEVELS[levelIndex];

        this.designWidth = 800;
        this.designHeight = 600;
        this.updateScale();

        this.currentWave = 0;
        this.enemiesSpawned = 0;
        this.timeSinceLastSpawn = 0;
        
        this.doors = [];
        this.walls = [];
        this.createDoors(entryDirection);

        this.powerUp = null;
        this.spawnPowerUp();

        this.completed = false;
        this.allEnemiesDefeated = false;
        
        // Load the single background image for the canvas
        this.backgroundImage = new Image();
        this.backgroundImage.src = this.config.backgroundImage;
        
        // Update level display
        document.getElementById('currentLevel').textContent = levelIndex + 1;
    }

    updateScale() {
        this.scaleX = this.game.canvas.width / this.designWidth;
        this.scaleY = this.game.canvas.height / this.designHeight;
    }

    _getDoorPosition(doorType, defaultX, defaultY) {
        const doorConfig = this.config.doors || {};
        const customPos = doorConfig[doorType];
        
        let finalX = defaultX;
        let finalY = defaultY;

        if (customPos) {
            if (customPos.x !== null && typeof customPos.x !== 'undefined') {
                const scaledX = customPos.x * this.scaleX;
                if (doorType === 'left') {
                    finalX = scaledX; // Absolute position from left
                } else {
                    finalX += scaledX; // Offset from default
                }
            }
            
            if (customPos.y !== null && typeof customPos.y !== 'undefined') {
                const scaledY = customPos.y * this.scaleY;
                if (doorType === 'top') {
                    finalY = scaledY; // Absolute position from top
                } else {
                    finalY += scaledY; // Offset from default
                }
            }
        }
        
        return { x: finalX, y: finalY };
    }

    createWalls() {
        if (this.doors.length < 4) {
            this.walls = [];
            return;
        };

        const topDoor = this.doors[0];
        const bottomDoor = this.doors[1];
        const leftDoor = this.doors[2];
        const rightDoor = this.doors[3];

        const p1 = { x: leftDoor.x + leftDoor.width, y: topDoor.y + topDoor.height };
        const p2 = { x: rightDoor.x, y: topDoor.y + topDoor.height };
        const p3 = { x: rightDoor.x, y: bottomDoor.y };
        const p4 = { x: leftDoor.x + leftDoor.width, y: bottomDoor.y };

        this.walls = [
            { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y }, // Top
            { x1: p2.x, y1: p2.y, x2: p3.x, y2: p3.y }, // Right
            { x1: p3.x, y1: p3.y, x2: p4.x, y2: p4.y }, // Bottom
            { x1: p4.x, y1: p4.y, x2: p1.x, y2: p1.y }  // Left
        ];
    }
    
    // Helper function to get door dimensions with custom override
    getDoorDimensions(doorType) {
        const doorConfig = this.config.doors || {};
        const doorWidth = (doorConfig.width || 40) * this.scaleX;
        const doorHeight = (doorConfig.height || 100) * this.scaleY;
        
        let finalWidth = doorWidth;
        let finalHeight = doorHeight;
        
        const customPos = doorConfig[doorType];
        if (customPos) {
            // Override width if specified
            if (customPos.w !== null && customPos.w !== undefined) {
                finalWidth = customPos.w * this.scaleX;
            }
            // Override height if specified
            if (customPos.h !== null && customPos.h !== undefined) {
                finalHeight = customPos.h * this.scaleY;
            }
        }
        
        return { width: finalWidth, height: finalHeight };
    }
    
    update(dt) {
        // Check if level is completed
        if (this.completed) {
            return;
        }
        
        // Check if all waves have been spawned and all enemies defeated
        if (this.currentWave >= this.config.waves && this.game.enemies.length === 0 && !this.allEnemiesDefeated) {
            this.allEnemiesDefeated = true;
            
            // If it's the final level, trigger the win condition
            if (this.levelIndex >= LEVELS.length - 1) {
                this.game.gameWon();
                return; // Stop further processing
            }

            // Otherwise, open the doors for the next level
            this.doors.forEach(door => {
                // Don't open a blocked door
                if (!door.isBlocked) {
                    door.isOpen = true;
                }
            });
            
        }
        
        // Spawn enemies if needed
        this.spawnEnemiesIfNeeded(dt);
        
        // Update doors
        this.doors.forEach(door => door.update(dt));
        
        // Check player collision with open door
        for (const door of this.doors) {
            if (door.isOpen && !door.isBlocked && checkRectCollision(
                { 
                    x: this.game.player.x - this.game.player.radius, 
                    y: this.game.player.y - this.game.player.radius,
                    width: this.game.player.radius * 2,
                    height: this.game.player.radius * 2
                },
                door
            )) {
                this.game.initiateLevelTransition(door.direction);
                this.completed = true; // Prevent re-triggering
                break; 
            }
        }

        // Check for power-up collision
        if (this.powerUp && checkCircleCollision(this.game.player, this.powerUp)) {
            this.game.player.applyPowerUp(this.powerUp.type, this.game);
            this.powerUp = null;
            window.audioManager.play('powerup');
        }

        if (this.powerUp) {
            this.powerUp.update(dt);
        }
    }
    
    spawnEnemiesIfNeeded(dt) {
        this.timeSinceLastSpawn += dt * 1000;
        
        // If we haven't spawned all enemies for this wave and spawn cooldown has passed
        if (
            this.currentWave < this.config.waves && 
            this.enemiesSpawned < this.config.enemiesPerWave &&
            this.timeSinceLastSpawn >= this.config.enemySpawnRate &&
            this.game.enemies.length < this.config.maxEnemies
        ) {
            this.spawnEnemy();
            this.enemiesSpawned++;
            this.timeSinceLastSpawn = 0;
            
            // Check if wave is complete
            if (this.enemiesSpawned >= this.config.enemiesPerWave) {
                this.currentWave++;
                this.enemiesSpawned = 0;
            }
        }
    }
    
    spawnEnemy() {
        // Choose spawn position from one of the doors
        let x, y;
        const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
        
        const canvasWidth = this.game.canvas.width;
        const canvasHeight = this.game.canvas.height;
        
        // Helper function to get door position with custom override
        const getDoorPosition = (doorType, defaultX, defaultY) => {
            return this._getDoorPosition(doorType, defaultX, defaultY);
        };
        
        switch (side) {
            case 0: // Top door
                const topDims = this.getDoorDimensions('top');
                const topPos = getDoorPosition('top', canvasWidth / 2 - topDims.height / 2, 0);
                x = topPos.x + topDims.height / 2; // Center of the door horizontally
                y = topPos.y + topDims.width / 2; // Center of the door vertically
                // If door is above screen, spawn at top edge
                if (y < 0) y = -30;
                break;
            case 1: // Right door
                const rightDims = this.getDoorDimensions('right');
                const rightPos = getDoorPosition('right', canvasWidth - rightDims.width, canvasHeight / 2 - rightDims.height / 2);
                x = rightPos.x + rightDims.width / 2; // Center of the door horizontally
                y = rightPos.y + rightDims.height / 2; // Center of the door vertically
                // If door is to the right of screen, spawn at right edge
                if (x > canvasWidth) x = canvasWidth + 30;
                break;
            case 2: // Bottom door
                const bottomDims = this.getDoorDimensions('bottom');
                const bottomPos = getDoorPosition('bottom', canvasWidth / 2 - bottomDims.height / 2, canvasHeight - bottomDims.width);
                x = bottomPos.x + bottomDims.height / 2; // Center of the door horizontally
                y = bottomPos.y + bottomDims.width / 2; // Center of the door vertically
                // If door is below screen, spawn at bottom edge
                if (y > canvasHeight) y = canvasHeight + 30;
                break;
            case 3: // Left door
                const leftDims = this.getDoorDimensions('left');
                const leftPos = getDoorPosition('left', 0, canvasHeight / 2 - leftDims.height / 2);
                x = leftPos.x + leftDims.width / 2; // Center of the door horizontally
                y = leftPos.y + leftDims.height / 2; // Center of the door vertically
                // If door is to the left of screen, spawn at left edge
                if (x < 0) x = -30;
                break;
        }
        
        // Choose enemy type based on level config
        const availableTypes = this.config.enemyTypes;
        const randomType = availableTypes[Math.floor(Math.random() * availableTypes.length)];
        
        // Create and add enemy
        const enemy = new Enemy(x, y, randomType);
        this.game.enemies.push(enemy);
    }
    
    draw(ctx) {
        // Draw background specific to level
        if (this.backgroundImage.complete) {
            ctx.drawImage(this.backgroundImage, 0, 0, this.game.canvas.width, this.game.canvas.height);
        } else {
            ctx.fillStyle = this.config.background;
            ctx.fillRect(0, 0, this.game.canvas.width, this.game.canvas.height);
        }
        
        // Draw doors
        this.doors.forEach(door => door.draw(ctx, this.game));

        // Draw walls if enabled
        this.drawWalls(ctx);

        // Draw power-up
        if (this.powerUp) {
            this.powerUp.draw(ctx);
        }
    }

    drawWalls(ctx) {
        if (!this.game.showWalls) return;

        ctx.save();
        ctx.strokeStyle = 'red';
        ctx.lineWidth = 5; // Make walls thicker for better visibility
        this.walls.forEach(wall => {
            ctx.beginPath();
            ctx.moveTo(wall.x1, wall.y1);
            ctx.lineTo(wall.x2, wall.y2);
            ctx.stroke();
        });
        ctx.restore();
    }

    createDoors(entryDirection) {
        this.doors = [];
        
        // Get door configuration from level config, with defaults
        const doorConfig = this.config.doors || {};
        const doorWidth = doorConfig.width || 40;      // Default: 40
        const doorHeight = doorConfig.height || 100;   // Default: 100
        
        const nextLevel = this.levelIndex + 1;
        const canvasWidth = this.game.canvas.width;
        const canvasHeight = this.game.canvas.height;

        // Determine which door to block
        let blockedDoor = null;
        if (entryDirection === 'left') {
            blockedDoor = 'right';
        } else if (entryDirection === 'right') {
            blockedDoor = 'left';
        }

        // Helper function to get door position with custom override
        const getDoorPosition = (doorType, defaultX, defaultY) => {
            return this._getDoorPosition(doorType, defaultX, defaultY);
        };

        // Top door (horizontal) - centered horizontally, at top
        const topDims = this.getDoorDimensions('top');
        const topPos = this._getDoorPosition('top', canvasWidth / 2 - topDims.height / 2, 0);
        this.doors.push(new Door(topPos.x, topPos.y, topDims.height, topDims.width, nextLevel, 'top', blockedDoor === 'top'));
        
        // Bottom door (horizontal) - centered horizontally, at bottom
        const bottomDims = this.getDoorDimensions('bottom');
        const bottomPos = this._getDoorPosition('bottom', canvasWidth / 2 - bottomDims.height / 2, canvasHeight - bottomDims.width);
        this.doors.push(new Door(bottomPos.x, bottomPos.y, bottomDims.height, bottomDims.width, nextLevel, 'bottom', blockedDoor === 'bottom'));
        
        // Left door (vertical) - at left, centered vertically
        const leftDims = this.getDoorDimensions('left');
        const leftPos = this._getDoorPosition('left', 0, canvasHeight / 2 - leftDims.height / 2);
        this.doors.push(new Door(leftPos.x, leftPos.y, leftDims.width, leftDims.height, nextLevel, 'left', blockedDoor === 'left'));
        
        // Right door (vertical) - at right, centered vertically
        const rightDims = this.getDoorDimensions('right');
        const rightPos = this._getDoorPosition('right', canvasWidth - rightDims.width, canvasHeight / 2 - rightDims.height / 2);
        this.doors.push(new Door(rightPos.x, rightPos.y, rightDims.width, rightDims.height, nextLevel, 'right', blockedDoor === 'right'));
    
        this.createWalls();
    }

    spawnPowerUp() {
        const powerUpTypes = ['double-fire', 'triple-shot', 'nuke'];
        const type = powerUpTypes[Math.floor(Math.random() * powerUpTypes.length)];
        
        // Spawn in a random location within the center 80% of the screen
        const padding = 0.2;
        const x = randomInt(this.game.canvas.width * padding, this.game.canvas.width * (1 - padding));
        const y = randomInt(this.game.canvas.height * padding, this.game.canvas.height * (1 - padding));

        this.powerUp = new PowerUp(x, y, type);
    }

    onResize() {
        this.updateScale();
        // Recalculate door positions and sizes using custom config
        const doorConfig = this.config.doors || {};
        const doorWidth = doorConfig.width || 40;      // Default: 40
        const doorHeight = doorConfig.height || 100;   // Default: 100
        const canvasWidth = this.game.canvas.width;
        const canvasHeight = this.game.canvas.height;

        // Top door
        const topDims = this.getDoorDimensions('top');
        const topPos = this._getDoorPosition('top', canvasWidth / 2 - topDims.height / 2, 0);
        this.doors[0].x = topPos.x;
        this.doors[0].y = topPos.y;
        this.doors[0].width = topDims.height; // Top door uses height for width
        this.doors[0].height = topDims.width;  // Top door uses width for height
        
        // Bottom door
        const bottomDims = this.getDoorDimensions('bottom');
        const bottomPos = this._getDoorPosition('bottom', canvasWidth / 2 - bottomDims.height / 2, canvasHeight - bottomDims.width);
        this.doors[1].x = bottomPos.x;
        this.doors[1].y = bottomPos.y;
        this.doors[1].width = bottomDims.height; // Bottom door uses height for width
        this.doors[1].height = bottomDims.width; // Bottom door uses width for height
        
        // Left door
        const leftDims = this.getDoorDimensions('left');
        const leftPos = this._getDoorPosition('left', 0, canvasHeight / 2 - leftDims.height / 2);
        this.doors[2].x = leftPos.x;
        this.doors[2].y = leftPos.y;
        this.doors[2].width = leftDims.width;
        this.doors[2].height = leftDims.height;
        
        // Right door
        const rightDims = this.getDoorDimensions('right');
        const rightPos = this._getDoorPosition('right', canvasWidth - rightDims.width, canvasHeight / 2 - rightDims.height / 2);
        this.doors[3].x = rightPos.x;
        this.doors[3].y = rightPos.y;
        this.doors[3].width = rightDims.width;
        this.doors[3].height = rightDims.height;

        this.createWalls();
    }
} 