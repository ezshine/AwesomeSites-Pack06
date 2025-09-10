/**
 * Game Objects
 */

// Player class
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.speed = 5;
        this.rotation = 0; // Rotation in radians
        this.health = 3; // The player can take 3 hits
        this.weapon = "rocket";
        this.lastShot = 0;
        this.shootCooldown = 500; // milliseconds
        this.radius = 15;
        this.invulnerable = false;
        this.invulnerabilityTime = 0;
        this.moveUp = false;
        this.moveDown = false;
        this.moveLeft = false;
        this.moveRight = false;
        this.analogMove = { x: 0, y: 0 };
        this.godMode = false;
        
        // Sprite properties
        this.sprites = {
            idle: new Image(),
            move1: new Image(),
            shooting: new Image(),
            muzzleFlash1: new Image(),
            muzzleFlash2: new Image()
        };
        this.sprites.idle.src = 'assets/player-01.png';
        this.sprites.move1.src = 'assets/player-02.png';
        this.sprites.shooting.src = 'assets/player-03.png';
        this.sprites.muzzleFlash1.src = 'assets/shoot1.png';
        this.sprites.muzzleFlash2.src = 'assets/shoot2.png';
        
        this.isMoving = false;
        this.isShooting = false;
        this.animationFrame = 0;
        this.animationTimer = 0;
        this.animationSpeed = 10; // Frames to wait before switching
        
        // Muzzle flash animation state
        this.muzzleFlashActive = false;
        this.muzzleFlashTimer = 0;
        this.muzzleFlashDuration = 3; // Show each flash frame for 3 game loops

        // Power-up state
        this.powerUpState = {
            type: null,
            timer: 0,
            duration: 10000 // 10 seconds
        };
        this.shootCooldownDefault = this.shootCooldown;
    }

    update(game, dt) {
        const dtMultiplier = dt * 60;

        // Handle power-up timer
        if (this.powerUpState.type) {
            this.powerUpState.timer -= dt * 1000;
            if (this.powerUpState.timer <= 0) {
                this.removePowerUp();
            }
        }

        // Movement
        let dx = 0;
        let dy = 0;

        if (this.analogMove.x !== 0 || this.analogMove.y !== 0) {
            dx = this.analogMove.x * this.speed * dtMultiplier;
            dy = this.analogMove.y * this.speed * dtMultiplier;
            this.isMoving = true;
        } else {
            this.isMoving = this.moveUp || this.moveDown || this.moveLeft || this.moveRight;

            if (this.moveUp) dy -= this.speed * dtMultiplier;
            if (this.moveDown) dy += this.speed * dtMultiplier;
            if (this.moveLeft) dx -= this.speed * dtMultiplier;
            if (this.moveRight) dx += this.speed * dtMultiplier;

            // Normalize diagonal movement
            if (dx !== 0 && dy !== 0) {
                const factor = (1 / Math.sqrt(2));
                dx *= factor;
                dy *= factor;
            }
        }

        if (game.level && game.level.walls && !game.level.allEnemiesDefeated) {
            this.x += dx;
            for (const wall of game.level.walls) {
                if (lineCircle(wall.x1, wall.y1, wall.x2, wall.y2, this.x, this.y, this.radius)) {
                    this.x -= dx;
                    break;
                }
            }
            this.y += dy;
            for (const wall of game.level.walls) {
                if (lineCircle(wall.x1, wall.y1, wall.x2, wall.y2, this.x, this.y, this.radius)) {
                    this.y -= dy;
                    break;
                }
            }
        } else {
            this.x += dx;
            this.y += dy;
        }

        // Update rotation based on mouse position
        if (game.mouseX !== undefined && game.mouseY !== undefined) {
            this.rotation = calculateAngle(this.x, this.y, game.mouseX, game.mouseY);
        }

        // Handle invulnerability
        if (this.invulnerable) {
            if (Date.now() > this.invulnerabilityTime) {
                this.invulnerable = false;
            }
        }
        
        // Reset shooting flag
        if (Date.now() - this.lastShot > this.shootCooldown / 2) {
            this.isShooting = false;
        }

        // Animation timers
        if (this.isMoving) {
            this.animationTimer += dtMultiplier;
            if (this.animationTimer > this.animationSpeed) {
                this.animationTimer = 0;
                this.animationFrame = (this.animationFrame + 1) % 2;
            }
        }

        if (this.muzzleFlashActive) {
            this.muzzleFlashTimer += dtMultiplier;
            if (this.muzzleFlashTimer / this.muzzleFlashDuration >= 2) {
                this.muzzleFlashActive = false;
            }
        }
    }

    shoot(game) {
        const now = Date.now();
        
        // Check cooldown
        if (now - this.lastShot < this.shootCooldown) {
            return;
        }
        
        this.lastShot = now;
        this.isShooting = true;
        
        // Trigger the muzzle flash animation
        this.muzzleFlashActive = true;
        this.muzzleFlashTimer = 0;

        // Create projectile based on weapon type
        if (this.weapon === "rocket") {
            const speed = 7;
            const damage = 40;
            const baseAngle = this.rotation;

            // Handle triple shot power-up
            if (this.powerUpState.type === 'triple-shot') {
                const spread = Math.PI / 12; // 15 degrees spread
                const angles = [baseAngle - spread, baseAngle, baseAngle + spread];

                angles.forEach(angle => {
                    const velocityX = Math.cos(angle) * speed;
                    const velocityY = Math.sin(angle) * speed;
                    game.projectiles.push(new Projectile(
                        this.x, this.y, velocityX, velocityY, damage, "rocket", 10
                    ));
                });
            } else {
                // Standard single shot
                const velocityX = Math.cos(baseAngle) * speed;
                const velocityY = Math.sin(baseAngle) * speed;
                game.projectiles.push(new Projectile(
                    this.x, this.y, velocityX, velocityY, damage, "rocket", 10
                ));
            }
            
            // Play shoot sound
            if (window.audioManager) {
                window.audioManager.play('shoot');
            }
        }
    }

    takeDamage(amount) {
        if (this.invulnerable || this.godMode) return;
        
        this.health -= 1; // Always lose 1 health per hit
        
        // Make player temporarily invulnerable
        this.invulnerable = true;
        this.invulnerabilityTime = Date.now() + 1000; // 1 second of invulnerability
        
        return this.health <= 0;
    }

    draw(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation - Math.PI / 2); // Adjust rotation for top-down sprites
        
        // Flashing effect when invulnerable or god mode is active
        if ((this.invulnerable && Math.floor(Date.now() / 100) % 2 === 0) || this.godMode) {
            ctx.globalAlpha = 0.5;
        }
        
        // Determine which sprite to draw
        let currentSprite = this.sprites.idle;
        if (this.isShooting) {
            currentSprite = this.sprites.shooting;
        } else if (this.isMoving) {
            currentSprite = this.animationFrame === 0 ? this.sprites.idle : this.sprites.move1;
        }
        
        if (currentSprite.complete) {
            const w = this.radius * 2.5;
            const h = this.radius * 2.5;
            ctx.drawImage(currentSprite, -w / 2, -h / 2, w, h);
        }
        
        // Draw muzzle flash animation
        if (this.muzzleFlashActive) {
            const frame = Math.floor(this.muzzleFlashTimer / this.muzzleFlashDuration);
            const flashSprite = frame === 0 ? this.sprites.muzzleFlash1 : this.sprites.muzzleFlash2;

            if (flashSprite.complete) {
                const flashWidth = this.radius * 3;
                const flashHeight = this.radius * 3;
                
                // "Front" is in the positive Y direction in the player's rotated coordinate space.
                const muzzleOffsetY = this.radius * 1.5;
                
                // Center the flash sprite on the offset point.
                ctx.drawImage(flashSprite, -flashWidth / 2, muzzleOffsetY - flashHeight / 2, flashWidth, flashHeight);
            }
        }
        
        ctx.restore();

        // Draw health bar
        const healthBarWidth = this.radius * 2.5;
        const barHeight = 5;
        const barY = this.y - this.radius - 20;
        const barX = this.x - healthBarWidth / 2;

        // Draw Power-up Timer Bar
        if (this.powerUpState.type && this.powerUpState.timer > 0) {
            const powerUpRemaining = this.powerUpState.timer / this.powerUpState.duration;
            const powerUpBarWidth = powerUpRemaining * healthBarWidth;
            const powerUpBarY = barY - barHeight - 2; // Position it above the health bar
            
            // Background of the timer bar
            ctx.fillStyle = '#333';
            ctx.fillRect(barX, powerUpBarY, healthBarWidth, barHeight);

            // The actual timer bar
            ctx.fillStyle = '#6D5ACF';
            ctx.fillRect(barX, powerUpBarY, powerUpBarWidth, barHeight);
        }

        // Draw the health bar background
        ctx.fillStyle = '#333'; // Dark grey background
        ctx.fillRect(barX, barY, healthBarWidth, barHeight);

        // Draw the health segments
        const segmentWidth = (healthBarWidth / 3);
        for (let i = 0; i < this.health; i++) {
            ctx.fillStyle = '#00FF00'; // Green
            ctx.fillRect(barX + i * segmentWidth, barY, segmentWidth - 1, barHeight); // -1 for spacing
        }
    }

    applyPowerUp(type, game) {
        if (type === 'nuke') {
            game.killAllEnemies(true); // true indicates it's a power-up nuke
            return;
        }

        this.powerUpState.type = type;
        this.powerUpState.timer = this.powerUpState.duration;

        if (type === 'double-fire') {
            this.shootCooldown = this.shootCooldownDefault / 2;
        }
    }

    removePowerUp() {
        if (this.powerUpState.type === 'double-fire') {
            this.shootCooldown = this.shootCooldownDefault;
        }
        this.powerUpState.type = null;
        this.powerUpState.timer = 0;
    }
}

// Enemy class
class Enemy {
    constructor(x, y, type = 'basic') {
        this.x = x;
        this.y = y;
        this.type = type;
        this.radius = 15;
        this.health = 100;
        this.speed = 2;
        this.damage = 10;
        this.attackCooldown = 1000;
        this.lastAttack = 0;
        
        // Sprite properties
        this.sprites = {
            idle: new Image(),
            move: new Image()
        };
        this.sprites.idle.src = 'assets/enemy-a-01.png';
        this.sprites.move.src = 'assets/enemy-a-02.png';
        
        this.animationFrame = 0;
        this.animationTimer = 0;
        this.animationSpeed = 15;
        
        // Set enemy properties based on type
        switch (type) {
            case 'basic':
                this.health = 50;
                break;
            case 'shooter':
                this.health = 60;
                this.attackCooldown = 2000;
                break;
            case 'tank':
                this.health = 200;
                this.radius = 25;
                this.speed = 1;
                this.damage = 25;
                this.attackCooldown = 2500; // Slower but powerful shots
                break;
        }
    }

    update(game, dt) {
        const dtMultiplier = dt * 60;
        // Move towards player
        const angle = calculateAngle(this.x, this.y, game.player.x, game.player.y);
        this.x += Math.cos(angle) * this.speed * dtMultiplier;
        this.y += Math.sin(angle) * this.speed * dtMultiplier;
        
        // Animation
        this.animationTimer += dtMultiplier;
        if (this.animationTimer > this.animationSpeed) {
            this.animationTimer = 0;
            this.animationFrame = (this.animationFrame + 1) % 2;
        }

        // For shooter enemies, shoot at player occasionally
        if (this.type === 'shooter') {
            const now = Date.now();
            if (now - this.lastAttack > this.attackCooldown) {
                this.lastAttack = now;
                
                const speed = 3;
                const velocityX = Math.cos(angle) * speed;
                const velocityY = Math.sin(angle) * speed;
                
                game.enemyProjectiles.push(new Projectile(
                    this.x, this.y, velocityX, velocityY, 15, 'enemy', 5, '#ec40bb'
                ));
            }
        }
        
        // For tank enemies, shoot at player occasionally
        if (this.type === 'tank') {
            const now = Date.now();
            if (now - this.lastAttack > this.attackCooldown) {
                this.lastAttack = now;
                
                const speed = 2; // Slower projectile
                const velocityX = Math.cos(angle) * speed;
                const velocityY = Math.sin(angle) * speed;
                
                game.enemyProjectiles.push(new Projectile(
                    this.x, this.y, velocityX, velocityY, 30, 'enemy', 10, '#ba52f5' // Larger, purple projectile
                ));
            }
        }
        
        // Check collision with player
        if (checkCircleCollision(this, game.player)) {
            if (Date.now() - this.lastAttack > this.attackCooldown) {
                this.lastAttack = Date.now();
                const died = game.player.takeDamage(this.damage);
                
                // Create blood effect on collision
                createGoreEffect(game, this.x, this.y, 15);
                
                if (died) {
                    game.gameOver();
                }
            }
        }
    }

    takeDamage(amount) {
        this.health -= amount;
        return this.health <= 0;
    }

    draw(ctx, game) {
        const currentSprite = this.animationFrame === 0 ? this.sprites.idle : this.sprites.move;
        
        ctx.save();
        ctx.translate(this.x, this.y);
        const angle = calculateAngle(this.x, this.y, game.player.x, game.player.y);
        ctx.rotate(angle - Math.PI / 2); // Adjust for sprite orientation
        
        // Apply color filter based on enemy type
        if (this.type === 'shooter') {
            ctx.filter = 'hue-rotate(300deg)'; // Red -> Pink-ish
        } else if (this.type === 'tank') {
            ctx.filter = 'hue-rotate(270deg)'; // Red -> Purple
        }
        
        if (currentSprite.complete) {
            const w = this.radius * 2.5;
            const h = this.radius * 2.5;
            ctx.drawImage(currentSprite, -w / 2, -h / 2, w, h);
        }
        
        ctx.restore();
        
        // Draw health bar
        const healthBarWidth = this.radius * 2;
        const maxHealth = this.type === 'tank' ? 200 : (this.type === 'shooter' ? 60 : 50);
        const currentHealthWidth = (this.health / maxHealth) * healthBarWidth;
        
        ctx.fillStyle = '#333';
        ctx.fillRect(this.x - this.radius, this.y - this.radius - 10, healthBarWidth, 5);
        
        ctx.fillStyle = '#00FF00';
        ctx.fillRect(this.x - this.radius, this.y - this.radius - 10, currentHealthWidth, 5);
    }
}

// Projectile class
class Projectile {
    constructor(x, y, vx, vy, damage, type, radius, color = '#FF00FF') {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.damage = damage;
        this.type = type;
        this.radius = radius;
        this.rotation = Math.atan2(vy, vx);
        this.color = color;

        if (this.type === 'rocket') {
            this.sprite = new Image();
            this.sprite.src = 'assets/rocket.png';
            this.trailSprite = new Image();
            this.trailSprite.src = 'assets/shoot1.png';
            this.lastTrailEmit = 0;
            this.trailCooldown = 30; // Emit particles every 30ms
        }
    }

    update(game, dt) {
        const dtMultiplier = dt * 60;
        this.x += this.vx * dtMultiplier;
        this.y += this.vy * dtMultiplier;

        // Emit trail particles for rockets
        if (this.type === 'rocket') {
            const now = Date.now();
            if (now - this.lastTrailEmit > this.trailCooldown) {
                this.lastTrailEmit = now;
                const life = 20 + Math.random() * 20;
                const size = this.radius * (0.5 + Math.random() * 0.5);
                const speedFactor = 0.1;
                const vx = -this.vx * speedFactor + (Math.random() - 0.5) * 1.5;
                const vy = -this.vy * speedFactor + (Math.random() - 0.5) * 1.5;
                
                game.particles.push({
                    x: this.x,
                    y: this.y,
                    vx: vx,
                    vy: vy,
                    lifetime: life,
                    maxLifetime: life,
                    size: size,
                    sprite: this.trailSprite,
                    type: 'trail',
                    rotation: Math.random() * Math.PI * 2,
                });
            }
        }

        // Return true if projectile is out of bounds
        return (
            this.x < -this.radius ||
            this.y < -this.radius ||
            this.x > game.canvas.width + this.radius ||
            this.y > game.canvas.height + this.radius
        );
    }

    draw(ctx) {
        if (this.type === 'rocket' && this.sprite.complete) {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation - Math.PI / 2);
            const w = this.radius * 2.5;
            const h = this.radius * 2.5;
            ctx.drawImage(this.sprite, -w / 2, -h / 2, w, h);
            ctx.restore();
        } else if (this.type === 'enemy') {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

class PowerUp {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.size = 40;
        this.radius = 20;
        this.sprite = new Image();
        this.rotation = 0;
        this.rotationSpeed = 0.02;

        // Vertical bobbing animation
        this.bobbingAngle = 0;
        this.bobbingSpeed = 0.05; // Speed of the bobbing
        this.bobbingAmount = 5; // Pixels to move up and down

        switch (type) {
            case 'double-fire': this.sprite.src = 'assets/double-fire.png'; break;
            case 'triple-shot': this.sprite.src = 'assets/triple-shot.png'; break;
            case 'nuke': this.sprite.src = 'assets/nuke.png'; break;
        }
    }

    update(dt) {
        const dtMultiplier = dt * 60;
        if (this.type === 'triple-shot' || this.type === 'double-fire') {
            // Bobbing animation
            this.bobbingAngle += this.bobbingSpeed * dtMultiplier;
            this.yOffset = Math.sin(this.bobbingAngle) * this.bobbingAmount;
        } else {
            // Original rotation for other power-ups
            this.rotation += this.rotationSpeed * dtMultiplier;
        }
    }

    draw(ctx) {
        ctx.save();
        if (this.type === 'triple-shot' || this.type === 'double-fire') {
            ctx.translate(this.x, this.y + this.yOffset);
        } else {
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation);
        }

        if (this.sprite.src) {
            ctx.drawImage(this.sprite, -this.size / 2, -this.size / 2, this.size, this.size);
        } else {
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        }
        ctx.restore();
    }
} 