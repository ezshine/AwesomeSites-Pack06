/**
 * Main game logic
 */

class Game {
    constructor() {
        // Canvas setup
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.setupCanvas();
        
        // Game state
        this.player = null;
        this.enemies = [];
        this.projectiles = [];
        this.enemyProjectiles = [];
        this.particles = [];
        this.explosions = [];
        this.level = null;
        this.currentLevelIndex = 0;
        this.gameRunning = false;
        this.gameWonState = false;
        this.isPaused = false;
        
        // Game transition state
        this.isTransitioning = false;
        this.entryDirection = null;
        this.previousLevelIndex = -1;
        this.cinematicMode = false;
        this.cinematicTarget = null;
        
        // Wall visibility
        this.showWalls = false;
        
        // Input tracking
        this.keys = {};
        this.mouseX = 0;
        this.mouseY = 0;
        this.mouseDown = false;
        this.leftStick = { x: 0, y: 0 };
        this.rightStick = { x: 0, y: 0, active: false };
        
        // FPS limiting
        this.fps = 61;
        this.frameInterval = 1000 / this.fps;
        this.lastTime = 0;
        this.lastTimeForDelta = 0;
        
        // Screen shake
        this.shakeDuration = 0;
        this.shakeMagnitude = 0;
        this.shakeTimer = 0;

        // Touch controls state
        this.joystickManagerLeft = null;
        this.joystickManagerRight = null;
        this.leftJoystickZone = null;
        this.rightJoystickZone = null;

        // Bind event handlers
        this.bindEventListeners();
        
        // Setup the initial screen state before the game starts
        this.setupInitialState();
        
        // Ensure canvas is properly set up after a short delay
        setTimeout(() => {
            this.setupCanvas();
        }, 100);
        
    }
    
    setupCanvas() {
        // Set canvas size to match container
        const container = document.querySelector('.game-container');
        // console.log('Container dimensions:', container?.clientWidth, 'x', container?.clientHeight);
        
        if (container && container.clientWidth > 0 && container.clientHeight > 0) {
            this.canvas.width = container.clientWidth;
            this.canvas.height = container.clientHeight;
            // console.log('Canvas dimensions set to:', this.canvas.width, 'x', this.canvas.height);
        } else {
            // console.log('Container not ready, using fallback dimensions');
            this.canvas.width = 800;
            this.canvas.height = 600;
        }

        if (this.level) {
            this.level.onResize();
        }
    }
    
    initTouchControls() {
        if (!isTouchDevice()) return;

        // Create and store zones and joystick managers
        this.leftJoystickZone = document.createElement('div');
        this.leftJoystickZone.style.position = 'absolute';
        this.leftJoystickZone.style.left = '0';
        this.leftJoystickZone.style.top = '0';
        this.leftJoystickZone.style.width = '50vw';
        this.leftJoystickZone.style.height = '100dvh';
        this.leftJoystickZone.style.zIndex = '10';
        document.body.appendChild(this.leftJoystickZone);

        this.rightJoystickZone = document.createElement('div');
        this.rightJoystickZone.style.position = 'absolute';
        this.rightJoystickZone.style.right = '0';
        this.rightJoystickZone.style.top = '0';
        this.rightJoystickZone.style.width = '50vw';
        this.rightJoystickZone.style.height = '100dvh';
        this.rightJoystickZone.style.zIndex = '10';
        document.body.appendChild(this.rightJoystickZone);

        this.joystickManagerLeft = nipplejs.create({
            zone: this.leftJoystickZone,
            mode: 'static',
            position: { left: '80px', bottom: '80px' },
            color: 'rgba(255, 255, 255, 0.5)',
            restJoystick: true,
            restOpacity: 0.5,
            lockX: false,
            lockY: false,
            catchDistance: 50,
            threshold: 0.1 // Deadzone setting
        });

        this.joystickManagerLeft.on('move', (evt, data) => {
            const angle = data.angle.radian;
            const distance = data.distance;
            const maxDistance = 50; 
            const normalizedDistance = Math.min(distance, maxDistance) / maxDistance;
            
            this.leftStick.x = Math.cos(angle) * normalizedDistance;
            this.leftStick.y = Math.sin(angle) * normalizedDistance;

            if (this.player) {
                // Invert Y-axis for movement
                this.player.analogMove.x = this.leftStick.x;
                this.player.analogMove.y = -this.leftStick.y;
            }
        });

        this.joystickManagerLeft.on('end', () => {
            this.leftStick.x = 0;
            this.leftStick.y = 0;
            if (this.player) {
                this.player.moveUp = false;
                this.player.moveDown = false;
                this.player.moveLeft = false;
                this.player.moveRight = false;
                this.player.analogMove.x = 0;
                this.player.analogMove.y = 0;
            }
        });

        this.joystickManagerRight = nipplejs.create({
            zone: this.rightJoystickZone,
            mode: 'static',
            position: { right: '80px', bottom: '80px' },
            color: 'rgba(255, 255, 255, 0.5)',
            restJoystick: true,
            restOpacity: 0.5,
            lockX: false,
            lockY: false,
            catchDistance: 50,
            threshold: 0.1 // Deadzone setting
        });

        this.joystickManagerRight.on('move', (evt, data) => {
            const angle = data.angle.radian;
            this.rightStick.x = Math.cos(angle);
            // Invert Y-axis for aiming
            this.rightStick.y = -Math.sin(angle);
            this.rightStick.active = true;
        });

        this.joystickManagerRight.on('end', () => {
            this.rightStick.active = false;
        });
    }

    destroyTouchControls() {
        if (this.joystickManagerLeft) {
            this.joystickManagerLeft.destroy();
            this.joystickManagerLeft = null;
        }
        if (this.joystickManagerRight) {
            this.joystickManagerRight.destroy();
            this.joystickManagerRight = null;
        }
        if (this.leftJoystickZone) {
            this.leftJoystickZone.remove();
            this.leftJoystickZone = null;
        }
        if (this.rightJoystickZone) {
            this.rightJoystickZone.remove();
            this.rightJoystickZone = null;
        }
    }

    bindEventListeners() {
        // Keyboard controls
        window.addEventListener('keydown', (e) => {
            const key = e.key.toLowerCase();
            this.keys[key] = true;
            
            // Update player movement flags
            if (this.player) {
                this.player.moveUp = this.keys['w'] || this.keys['arrowup'];
                this.player.moveDown = this.keys['s'] || this.keys['arrowdown'];
                this.player.moveLeft = this.keys['a'] || this.keys['arrowleft'];
                this.player.moveRight = this.keys['d'] || this.keys['arrowright'];
            }
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
            
            // Update player movement flags
            if (this.player) {
                this.player.moveUp = this.keys['w'] || this.keys['arrowup'];
                this.player.moveDown = this.keys['s'] || this.keys['arrowdown'];
                this.player.moveLeft = this.keys['a'] || this.keys['arrowleft'];
                this.player.moveRight = this.keys['d'] || this.keys['arrowright'];
            }
        });
        
        // Mouse controls
        this.canvas.addEventListener('mousemove', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        });
        
        this.canvas.addEventListener('mousedown', () => {
            this.mouseDown = true;
        });
        
        this.canvas.addEventListener('mouseup', () => {
            this.mouseDown = false;
        });
        
        // Prevent context menu on right-click
        this.canvas.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            this.setupCanvas();
        });
        
        // Add transition-end listener for the world
        const world = document.getElementById('world');
        world.addEventListener('transitionend', () => {
            this.finalizeLevelTransition();
        });
        
        const levelInfo = document.getElementById('levelInfo');
        if (levelInfo) {
            levelInfo.addEventListener('touchstart', () => {
                if (isTouchDevice() && this.player) {
                    this.player.godMode = !this.player.godMode;
                    this.showWalls = this.player.godMode; // Link wall visibility to god mode
                    levelInfo.style.color = this.player.godMode ? 'lime' : 'white';
                }
            });
        }

        const startScreen = document.getElementById('startScreen');
        
        // Start game on screen click
        world.addEventListener('click', () => {
            if (!startScreen.classList.contains('hidden')) {
                startScreen.classList.add('hidden');
                document.getElementById('top-ui-container').classList.remove('hidden');
                document.body.classList.add('game-active');
                this.init();
            }
        });
        
        // Restart button
        document.getElementById('restartButton').addEventListener('click', () => {
            this.restart();
        });
    }

    setupInitialState() {
        // Set the background for the start screen to level 1
        const firstLevel = LEVELS[0];
        
        this.startScreenImage = new Image();
        this.startScreenImage.onload = () => {
        };
        this.startScreenImage.onerror = () => {
            console.error('Failed to load start screen image:', this.startScreenImage.src);
        };
        this.startScreenImage.src = firstLevel.backgroundImage;
        
        // Set the previews to level 2
        const secondLevel = LEVELS[1];
        const previewDivs = document.querySelectorAll('.level-preview');
        previewDivs.forEach(div => {
            div.style.backgroundImage = `url('${secondLevel.backgroundImage}')`;
            div.style.display = 'block';
        });
    }
    
    init() {
        // Create player at center of screen
        this.player = new Player(this.canvas.width / 2, this.canvas.height / 2);
        
        // Reset arrays
        this.enemies = [];
        this.projectiles = [];
        this.enemyProjectiles = [];
        this.particles = [];
        this.explosions = [];
        
        // Reset pause state
        this.isPaused = false;
        
        // Start at level 0
        this.startLevel(0);
        
        // Start game loop
        this.gameRunning = true;
        this.initTouchControls();
        //this.gameLoop();
    }
    
    startLevel(levelIndex) {
        if (levelIndex >= LEVELS.length) {
            this.gameWon();
            return;
        }
        
        // Create new level, passing the entry direction to block the return door
        this.currentLevelIndex = levelIndex;
        this.level = new Level(this, levelIndex, this.entryDirection);
        
        // Clear enemies and projectiles
        this.enemies = [];
        this.projectiles = [];
        this.enemyProjectiles = [];
        
        // Reset pause state for new level
        this.isPaused = false;
        
        // Update UI
        document.getElementById('currentLevel').textContent = levelIndex + 1;
        document.getElementById('startScreen').style.backgroundImage = `url('${this.level.config.backgroundImage}')`;
        
        this.updatePreviews();

        // Reposition player based on entry direction for level transitions
        if (this.entryDirection && this.player) {
            const padding = 160; // Distance from the edge
            let startX, startY;

            switch (this.entryDirection) {
                case 'top': // Entered top door, so appear at BOTTOM of new level
                    startX = this.canvas.width / 2;
                    startY = this.canvas.height - padding;
                    break;
                case 'bottom': // Entered bottom door, so appear at TOP of new level
                    startX = this.canvas.width / 2;
                    startY = padding;
                    break;
                case 'left': // Entered left door, so appear at RIGHT of new level
                    startX = this.canvas.width - padding;
                    startY = this.canvas.height / 2;
                    break;
                case 'right': // Entered right door, so appear at LEFT of new level
                    startX = padding;
                    startY = this.canvas.height / 2;
                    break;
            }
            this.player.x = startX;
            this.player.y = startY;
            
            this.cinematicMode = true;
            this.cinematicTarget = { x: this.canvas.width / 2, y: this.canvas.height / 2 };
        }
        this.entryDirection = null; // Reset for next time

        // Play level start sound if not the first level
        if (levelIndex > 0) {
            window.audioManager.play('levelComplete');
        }
    }

    updatePreviews() {
        const previewDivs = document.querySelectorAll('.level-preview');
        const nextLevelIndex = this.currentLevelIndex + 1;
    
        // Set default previews to the next level, if one exists.
        if (nextLevelIndex < LEVELS.length) {
            const nextLevel = LEVELS[nextLevelIndex];
            previewDivs.forEach(div => {
                div.style.backgroundImage = `url('${nextLevel.backgroundImage}')`;
                div.style.display = 'block';
            });
        } else {
            // This is the last level, so hide all previews by default.
            previewDivs.forEach(div => {
                div.style.display = 'none';
            });
        }
    
        // If coming from a previous level via a horizontal door,
        // override one of the previews to show the previous level.
        if (this.previousLevelIndex !== -1) {
            const prevLevel = LEVELS[this.previousLevelIndex];
            let previewToUpdate = null;
    
            if (this.entryDirection === 'right') { // Came from right, show prev on the left
                previewToUpdate = document.getElementById('preview-1-0');
            } else if (this.entryDirection === 'left') { // Came from left, show prev on the right
                previewToUpdate = document.getElementById('preview-1-2');
            }
    
            if (previewToUpdate) {
                previewToUpdate.style.backgroundImage = `url('${prevLevel.backgroundImage}')`;
                previewToUpdate.style.display = 'block';
            }
        }
    }
    
    update(timestamp) {
        if (!this.gameRunning || this.isPaused) return;

        let dt;
        let canUpdate = false;

        if (isTouchDevice()) {
            const elapsed = timestamp - this.lastTime;
            if (elapsed > this.frameInterval) {
                this.lastTime = timestamp - (elapsed % this.frameInterval);
                dt = 1 / this.fps;
                canUpdate = true;
            }
        } else {
            if (this.lastTimeForDelta === 0) {
                this.lastTimeForDelta = timestamp;
                return; // skip first frame to avoid large dt
            }
            const elapsed = timestamp - this.lastTimeForDelta;
            dt = elapsed / 1000;
            this.lastTimeForDelta = timestamp;
            dt = Math.min(dt, 1 / 30);
            canUpdate = true;
        }

        if (!canUpdate) {
            return;
        }

        if (this.isTransitioning) {
            return; // Don't update game logic during pan
        }

        if (this.cinematicMode) {
            this.updateCinematic(dt);
            return;
        }
        
        // Update player
        if (this.player) {
            this.player.update(this, dt);
            
            // Handle shooting
            if (this.mouseDown) {
                this.player.shoot(this);
            }

            if (this.rightStick.active) {
                // Aim towards the stick direction
                const angle = Math.atan2(this.rightStick.y, this.rightStick.x);
                this.player.rotation = angle;
                this.player.shoot(this);
            }
        }
        
        // Update level
        if (this.level) {
            this.level.update(dt);
        }
        
        // Update projectiles and check for collisions
        this.updateProjectiles(dt);
        
        // Update enemy projectiles
        this.updateEnemyProjectiles(dt);
        
        // Update enemies
        this.updateEnemies(dt);
        
        // Update particles
        this.updateParticles(dt);
        
        // Update explosions
        this.updateExplosions(dt);
    }
    
    togglePause() {
        if (!this.gameRunning) return; // Can't pause if game isn't running
        
        this.isPaused = !this.isPaused;
        
        if (this.isPaused) {
            // console.log('Game paused');
        } else {
            // console.log('Game resumed');
        }
    }

    forceLevelEnd() {
        if (!this.gameRunning || this.isTransitioning) return;
        
        this.enemies = [];
        
        if (this.level) {
            this.level.currentWave = this.level.config.waves; 
            this.level.allEnemiesDefeated = true;
            this.level.doors.forEach(door => door.isOpen = true);
        }
    }

    killAllEnemies(isPowerUp = false) {
        if (!this.gameRunning || this.isTransitioning) return;

        // Filter for enemies on screen
        const onScreenEnemies = this.enemies.filter(enemy => 
            enemy && enemy.x > 0 && enemy.x < this.canvas.width &&
            enemy.y > 0 && enemy.y < this.canvas.height
        );

        if (isPowerUp) {
            this.triggerScreenShake(30, 40); // magnitude, duration in frames
        }

        // Create explosions for each on-screen enemy
        onScreenEnemies.forEach((enemy, index) => {
            const scale = isPowerUp ? 2 : 1;
            createExplosion(this, enemy.x, enemy.y, scale);
            setTimeout(() => {
                window.audioManager.play('enemyDeath');
            }, index * 100); // Stagger sound playback
        });
        
        if (onScreenEnemies.length > 0) {
            window.audioManager.play('explode');
        }

        // Remove only the on-screen enemies from the main array
        this.enemies = this.enemies.filter(enemy => 
            enemy && !(enemy.x > 0 && enemy.x < this.canvas.width &&
              enemy.y > 0 && enemy.y < this.canvas.height)
        );
    }

    triggerScreenShake(magnitude, duration) {
        this.shakeMagnitude = magnitude;
        this.shakeDuration = duration;
        this.shakeTimer = duration;
    }

    initiateLevelTransition(direction) {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        this.previousLevelIndex = this.currentLevelIndex;
        this.nextLevelIndex = this.level.levelIndex + 1;
        this.entryDirection = direction; // Remember which door was entered

        const world = document.getElementById('world');
        const scale = isTouchDevice() ? ' scale(0.6)' : '';
        let transform = 'translate(-50%, -50%)';
        switch (direction) {
            case 'top':    transform += ' translateY(33.333%)'; break;
            case 'bottom': transform += ' translateY(-33.333%)'; break;
            case 'left':   transform += ' translateX(33.333%)'; break;
            case 'right':  transform += ' translateX(-33.333%)'; break;
        }
        world.style.transform = transform + scale;
    }

    finalizeLevelTransition() {
        if (!this.isTransitioning) return;

        const world = document.getElementById('world');
        const scale = isTouchDevice() ? ' scale(0.6)' : '';
        
        // Disable transition and snap back
        world.style.transition = 'none';
        world.style.transform = 'translate(-50%, -50%)' + scale;
        
        // Force the browser to apply the snap-back before re-enabling transitions
        world.offsetHeight; // This is a trick to trigger a browser reflow

        // Re-enable transitions for the next move
        world.style.transition = 'transform 0.8s cubic-bezier(0.45, 0, 0.55, 1)';
        
        this.startLevel(this.nextLevelIndex);
        this.isTransitioning = false;
    }

    updateCinematic(dt) {
        if (!this.cinematicTarget || !this.player) {
            this.cinematicMode = false;
            return;
        }

        const dx = this.cinematicTarget.x - this.player.x;
        const dy = this.cinematicTarget.y - this.player.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        const speed = this.player.speed * dt * 60; // Adjust for dt

        if (distance < speed) {
            this.player.x = this.cinematicTarget.x;
            this.player.y = this.cinematicTarget.y;
            this.cinematicMode = false;
            this.player.isMoving = false;
        } else {
            const angle = Math.atan2(dy, dx);
            this.player.x += Math.cos(angle) * speed;
            this.player.y += Math.sin(angle) * speed;
            this.player.rotation = angle;
            this.player.isMoving = true;
        }
    }

    updateProjectiles(dt) {
        for (let i = this.projectiles.length - 1; i >= 0; i--) {
            const projectile = this.projectiles[i];
            
            // Skip if projectile is null or undefined
            if (!projectile) {
                this.projectiles.splice(i, 1);
                continue;
            }
            
            // Update projectile position
            const shouldRemove = projectile.update(this, dt);
            
            if (shouldRemove) {
                this.projectiles.splice(i, 1);
                continue;
            }
            
            // Check collision with enemies
            for (let j = this.enemies.length - 1; j >= 0; j--) {
                const enemy = this.enemies[j];
                
                // Skip if enemy is null or undefined
                if (!enemy) {
                    this.enemies.splice(j, 1);
                    continue;
                }
                
                if (checkCircleCollision(
                    { x: projectile.x, y: projectile.y, radius: projectile.radius },
                    { x: enemy.x, y: enemy.y, radius: enemy.radius }
                )) {
                    // Enemy hit
                    const killed = enemy.takeDamage(projectile.damage);
                    
                    if (killed) {
                        // Create gore effect
                        createGoreEffect(this, enemy.x, enemy.y, 30);
                        
                        // Play enemy death sound
                        window.audioManager.play('enemyDeath');
                        
                        // Remove enemy
                        this.enemies.splice(j, 1);
                    } else {
                        // Enemy hurt but not killed
                        createGoreEffect(this, projectile.x, projectile.y, 10);
                    }
                    
                    // If it's a rocket, create explosion
                    if (projectile.type === 'rocket') {
                        createExplosion(this, projectile.x, projectile.y);
                        window.audioManager.play('explode');
                        
                        // Rocket explosion damage to nearby enemies
                        const explosionRadius = 60;
                        for (let k = this.enemies.length - 1; k >= 0; k--) {
                            const nearbyEnemy = this.enemies[k];
                            
                            // Skip if nearby enemy is null or undefined
                            if (!nearbyEnemy) {
                                this.enemies.splice(k, 1);
                                continue;
                            }
                            
                            const dist = distance(projectile.x, projectile.y, nearbyEnemy.x, nearbyEnemy.y);
                            
                            if (dist < explosionRadius) {
                                // Calculate damage falloff based on distance
                                const damageMultiplier = 1 - (dist / explosionRadius);
                                const explosionDamage = projectile.damage * damageMultiplier * 0.5;
                                
                                const nearbyKilled = nearbyEnemy.takeDamage(explosionDamage);
                                
                                if (nearbyKilled) {
                                    // Create gore effect
                                    createGoreEffect(this, nearbyEnemy.x, nearbyEnemy.y, 30);
                                    
                                    // Play enemy death sound
                                    window.audioManager.play('enemyDeath');
                                    
                                    // Remove enemy
                                    this.enemies.splice(k, 1);
                                }
                            }
                        }
                    }
                    
                    // Remove projectile
                    this.projectiles.splice(i, 1);
                    break;
                }
            }
        }
    }
    
    updateEnemyProjectiles(dt) {
        for (let i = this.enemyProjectiles.length - 1; i >= 0; i--) {
            const projectile = this.enemyProjectiles[i];
            
            // Skip if projectile is null or undefined
            if (!projectile) {
                this.enemyProjectiles.splice(i, 1);
                continue;
            }
            
            // Update projectile position
            const shouldRemove = projectile.update(this, dt);
            
            if (shouldRemove) {
                this.enemyProjectiles.splice(i, 1);
                continue;
            }
            
            // Check collision with player
            if (this.player && checkCircleCollision(
                { x: projectile.x, y: projectile.y, radius: projectile.radius },
                { x: this.player.x, y: this.player.y, radius: this.player.radius }
            )) {
                // Player hit
                const died = this.player.takeDamage(projectile.damage);
                
                // Play player hit sound
                window.audioManager.play('playerHit');
                
                if (died) {
                    this.gameOver();
                }
                
                // Create blood effect
                createGoreEffect(this, projectile.x, projectile.y, 15);
                
                // Remove projectile
                this.enemyProjectiles.splice(i, 1);
            }
        }
    }
    
    updateEnemies(dt) {
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const enemy = this.enemies[i];
            
            // Skip if enemy is null or undefined
            if (!enemy) {
                this.enemies.splice(i, 1);
                continue;
            }
            
            enemy.update(this, dt);
        }
    }
    
    updateParticles(dt) {
        const dtMultiplier = dt * 60;
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const particle = this.particles[i];
            
            // Skip if particle is null or undefined
            if (!particle) {
                this.particles.splice(i, 1);
                continue;
            }
            
            // Update position
            particle.x += particle.vx * dtMultiplier;
            particle.y += particle.vy * dtMultiplier;
            
            if (particle.type === 'trail') {
                // Trail particles slow down and shrink
                particle.vx *= (1 - (1 - 0.95) * dtMultiplier);
                particle.vy *= (1 - (1 - 0.95) * dtMultiplier);
                if (particle.size > 0.2) {
                    particle.size *= (1 - (1 - 0.95) * dtMultiplier);
                }
            } else {
                // Apply gravity and friction for other particles
                particle.vy += 0.05 * dtMultiplier;
                particle.vx *= (1 - (1 - 0.98) * dtMultiplier);
                particle.vy *= (1 - (1 - 0.98) * dtMultiplier);
            }
            
            // Decay lifetime
            particle.lifetime -= 1 * dtMultiplier;
            
            if (particle.lifetime <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }
    
    updateExplosions(dt) {
        const dtMultiplier = dt * 60;
        for (let i = this.explosions.length - 1; i >= 0; i--) {
            const explosion = this.explosions[i];
            
            // Skip if explosion is null or undefined
            if (!explosion) {
                this.explosions.splice(i, 1);
                continue;
            }
            
            // Expand radius
            explosion.radius += 3 * dtMultiplier;
            
            // Fade out
            explosion.opacity -= 0.05 * dtMultiplier;
            
            if (explosion.opacity <= 0 || explosion.radius >= explosion.maxRadius) {
                this.explosions.splice(i, 1);
            }
        }
    }
    
    draw() {
        this.ctx.save();
        
        // If transitioning, we still want to draw the last frame of the game
        if (this.isTransitioning) {
            // But we don't need to do anything extra, just let it draw below
        }

        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Apply screen shake
        if (this.shakeTimer > 0) {
            const progress = this.shakeTimer / this.shakeDuration;
            const currentMagnitude = this.shakeMagnitude * progress;
            const x = (Math.random() - 0.5) * currentMagnitude;
            const y = (Math.random() - 0.5) * currentMagnitude;
            this.ctx.translate(x, y);
            this.shakeTimer--;
        }

        // Draw level background and decorations
        if (this.level) {
            // console.log('Drawing level background');
            this.level.draw(this.ctx);
        } else if (this.startScreenImage && this.startScreenImage.complete) {
            // console.log('Drawing start screen image:', this.startScreenImage.src);
            this.ctx.drawImage(this.startScreenImage, 0, 0, this.canvas.width, this.canvas.height);
        } else {
            // console.log('No level or start screen image - drawing fallback background');
            // Draw a fallback background
            this.ctx.fillStyle = '#222222';
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        }
        
        // Draw particles (behind other elements)
        this.drawParticles();
        
        // Draw explosions
        this.drawExplosions();
        
        // Draw enemies
        for (let i = 0; i < this.enemies.length; i++) {
            const enemy = this.enemies[i];
            if (enemy) {
                enemy.draw(this.ctx, this);
            }
        }
        
        // Draw projectiles
        for (let i = 0; i < this.projectiles.length; i++) {
            const projectile = this.projectiles[i];
            if (projectile) {
                projectile.draw(this.ctx);
            }
        }
        
        // Draw enemy projectiles
        for (let i = 0; i < this.enemyProjectiles.length; i++) {
            const enemyProjectile = this.enemyProjectiles[i];
            if (enemyProjectile) {
                enemyProjectile.draw(this.ctx);
            }
        }
        
        // Draw player
        if (this.player) {
            this.player.draw(this.ctx);
        }
        
        // Draw blood splatter effect over everything
        this.drawBloodSplatter();
        
        // Draw pause overlay if game is paused
        if (this.isPaused && this.gameRunning) {
            this.drawPauseOverlay();
        }
        
        this.ctx.restore();
    }
    
    drawParticles() {
        for (let i = 0; i < this.particles.length; i++) {
            const particle = this.particles[i];
            
            // Skip if particle is null or undefined
            if (!particle) {
                continue;
            }
            
            // Calculate opacity based on lifetime
            const opacity = particle.lifetime / particle.maxLifetime;
            this.ctx.globalAlpha = opacity;

            if (particle.type === 'trail' && particle.sprite && particle.sprite.complete) {
                this.ctx.save();
                this.ctx.translate(particle.x, particle.y);
                this.ctx.rotate(particle.rotation);
                const size = particle.size;
                this.ctx.drawImage(particle.sprite, -size / 2, -size / 2, size, size);
                this.ctx.restore();
            } else if (particle.color) {
                this.ctx.fillStyle = particle.color;
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }
        
        // Reset global alpha
        this.ctx.globalAlpha = 1;
    }
    
    drawExplosions() {
        for (let i = 0; i < this.explosions.length; i++) {
            const explosion = this.explosions[i];
            
            // Skip if explosion is null or undefined
            if (!explosion) {
                continue;
            }
            
            // Create gradient
            const gradient = this.ctx.createRadialGradient(
                explosion.x, explosion.y, 0,
                explosion.x, explosion.y, explosion.radius
            );
            
            gradient.addColorStop(0, `rgba(255, 200, 0, ${explosion.opacity})`);
            gradient.addColorStop(0.5, `rgba(255, 100, 0, ${explosion.opacity * 0.5})`);
            gradient.addColorStop(1, `rgba(255, 0, 0, 0)`);
            
            this.ctx.fillStyle = gradient;
            this.ctx.beginPath();
            this.ctx.arc(explosion.x, explosion.y, explosion.radius, 0, Math.PI * 2);
            this.ctx.fill();
        }
    }
    
    drawBloodSplatter() {
        // Blood splatter effect for excessive gore
        for (let i = 0; i < this.particles.length; i++) {
            const particle = this.particles[i];
            
            // Skip if particle is null or undefined
            if (!particle) {
                continue;
            }
            
            if (Math.random() < 0.2 && particle.lifetime < particle.maxLifetime * 0.8) {
                this.ctx.fillStyle = 'rgba(150, 0, 0, 0.1)';
                this.ctx.beginPath();
                this.ctx.arc(particle.x, particle.y, particle.size * 1.5, 0, Math.PI * 2);
                this.ctx.fill();
            }
        }
    }
    
    drawPauseOverlay() {
        this.ctx.save();
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.font = 'bold 100px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillStyle = 'white';
        this.ctx.strokeStyle = 'black';
        this.ctx.lineWidth = 5;

        this.ctx.strokeText('PAUSED', this.canvas.width / 2, this.canvas.height / 2);
        this.ctx.fillText('PAUSED', this.canvas.width / 2, this.canvas.height / 2);

        this.ctx.restore();
    }
    
    gameOver() {
        this.gameRunning = false;
        this.isPaused = false; // Reset pause state
        document.getElementById('gameOverScreen').classList.remove('hidden');
        document.body.classList.remove('game-active');
        window.audioManager.play('gameOver');

        // Despawn entities
        this.enemies = [];
        this.player = null;
    }
    
    gameWon() {
        this.gameRunning = false;
        this.isPaused = false; // Reset pause state
        this.gameWonState = true;
        
        // Show game won screen
        const gameOverScreen = document.getElementById('gameOverScreen');
        gameOverScreen.classList.remove('hidden');
        
        // Change title to "You Won!"
        gameOverScreen.querySelector('h2').textContent = "YOU SURVIVED!";
        
        // Play victory sound
        window.audioManager.play('victory');
    }
    
    restart() {
        const gameOverScreen = document.getElementById('gameOverScreen');
        gameOverScreen.classList.add('hidden');
        // Reset the title to the default "GAME OVER"
        gameOverScreen.querySelector('h2').textContent = "GAME OVER";
        document.body.classList.add('game-active');
        
        this.gameWonState = false;
        this.isPaused = false; // Reset pause state
        
        // Ensure game state is properly reset before reinitializing
        this.gameRunning = false;
        this.enemies = [];
        this.projectiles = [];
        this.enemyProjectiles = [];
        this.particles = [];
        this.explosions = [];
        this.player = null;

        // Reset stick state and destroy controls
        this.leftStick = { x: 0, y: 0 };
        this.rightStick = { x: 0, y: 0, active: false };
        if (this.player) {
            this.player.analogMove = { x: 0, y: 0 };
            this.player.isMoving = false;
        }
        this.destroyTouchControls();
        
        // Small delay to ensure all updates are complete before reinitializing
        setTimeout(() => {
            this.init();
        }, 16); // One frame at 60fps
    }
}