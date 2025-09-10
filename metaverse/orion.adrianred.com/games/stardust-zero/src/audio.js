let audioCtx;
const soundBuffers = {};

export function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
}

export function getAudioCtx() {
    return audioCtx;
}

async function loadSound(url) {
    if (soundBuffers[url]) {
        if (soundBuffers[url] instanceof Promise) {
            return await soundBuffers[url];
        }
        return soundBuffers[url];
    }

    const promise = fetch(url)
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer));
    soundBuffers[url] = promise;

    try {
        const buffer = await promise;
        soundBuffers[url] = buffer;
        return buffer;
    } catch (error) {
        console.error(`Error loading sound ${url}:`, error);
        delete soundBuffers[url];
        return null;
    }
}

export function playSound(type) {
    if (!audioCtx) return;

    const sounds = {
        shoot: { url: 'audio/laserShoot.mp3', gain: 0.5 },
        hit: { url: 'audio/hitHurt.mp3', gain: 0.5 },
        destroy: { type: 'sawtooth', freq: 220, gain: 0.3, decay: 0.5 },
        powerup: { url: 'audio/powerUp.mp3', gain: 0.5 },
        levelUp: { url: 'audio/nextLevel.mp3', gain: 0.5 },
        damage: { type: 'sawtooth', freq: 110, gain: 0.4, decay: 0.4 }
    };

    const sound = sounds[type];
    if (!sound) return;

    if (sound.url) {
        loadSound(sound.url).then(buffer => {
            if (buffer) {
                const source = audioCtx.createBufferSource();
                source.buffer = buffer;
                const gainNode = audioCtx.createGain();
                gainNode.gain.value = sound.gain || 1.0;
                source.connect(gainNode);
                gainNode.connect(audioCtx.destination);
                source.start(0);
            }
        });
        return;
    }

    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    const now = audioCtx.currentTime;

    oscillator.type = sound.type;
    oscillator.frequency.setValueAtTime(sound.freq, now);
    gainNode.gain.setValueAtTime(sound.gain, now);
    
    if (sound.rampTo) {
        oscillator.frequency.linearRampToValueAtTime(sound.rampTo, now + 0.5);
    }
    
    gainNode.gain.exponentialRampToValueAtTime(0.0001, now + sound.decay);
    
    oscillator.start(now);
    oscillator.stop(now + sound.decay);
} 