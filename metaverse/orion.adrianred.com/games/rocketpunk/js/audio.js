/**
 * Simple Audio Manager for game sound effects
 */

const AudioManager = {
    sounds: {},
    enabled: true,
    volume: 0.5,
    
    init() {
        // Initialize sound paths
        const soundPaths = {
            shoot: 'audio/shoot.wav',
            //explode: 'audio/explode.mp3',
            enemyDeath: 'audio/enemy_death.wav',
            powerup: 'audio/powerup.wav'
        };
        
        // Create audio elements
        for (const [name, path] of Object.entries(soundPaths)) {
            this.sounds[name] = new Audio(path);
            this.sounds[name].volume = this.volume;
        }
        
        return this;
    },
    
    play(name) {
        if (!this.enabled || !this.sounds[name]) return;
        
        try {
            const sound = this.sounds[name];
            // Clone the audio element to allow overlapping sounds
            if (['shoot', 'explode', 'enemyDeath'].includes(name)) {
                const clone = sound.cloneNode();
                clone.volume = this.volume;
                clone.play().catch(e => console.error('Audio error:', e));
            } else {
                // For non-overlapping sounds
                sound.currentTime = 0;
                sound.play().catch(e => console.error('Audio error:', e));
            }
        } catch (e) {
            console.error('Failed to play sound:', name, e);
        }
    },
    
    setVolume(vol) {
        this.volume = Math.max(0, Math.min(1, vol));
        Object.values(this.sounds).forEach(sound => {
            sound.volume = this.volume;
        });
    },
    
    toggle() {
        this.enabled = !this.enabled;
        
        // When disabling audio, stop all currently playing sounds
        for (const soundName in this.sounds) {
            const sound = this.sounds[soundName];
            sound.muted = !this.enabled;
            if (!this.enabled) {
                sound.pause();
                sound.currentTime = 0;
            }
        }
        
        return this.enabled;
    }
};

// Initialize audio manager
window.audioManager = AudioManager.init();
 