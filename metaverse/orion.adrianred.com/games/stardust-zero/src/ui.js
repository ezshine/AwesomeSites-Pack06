import { game } from './game.js';
import { tunnel } from './tunnel.js';
import { isTouchDevice } from './utils.js';
import { playSound } from './audio.js';

let scoreElement, livesElement, levelElement, multiShotChargesElement, gameOverElement, multiShotButton;
const hudElements = [];
let isHudVisible = true;
let hudContainer;

function createUiElement(id) {
    const el = document.createElement('div');
    el.id = id;
    hudContainer.appendChild(el);
    return el;
}

export function createAllUi() {
    hudContainer = document.createElement('div');
    hudContainer.id = 'hud-container';
    document.body.appendChild(hudContainer);

    levelElement = createUiElement('level');
    scoreElement = createUiElement('score');
    livesElement = createUiElement('lives');
    multiShotChargesElement = createUiElement('multi-shot-charges');
    
    hudElements.push(levelElement, scoreElement, livesElement, multiShotChargesElement);

    if (isTouchDevice()) {
        multiShotButton = document.createElement('div');
        multiShotButton.id = 'multi-shot-button';
        document.body.appendChild(multiShotButton);

        multiShotButton.addEventListener('touchstart', (e) => {
            e.preventDefault();
            e.stopPropagation();
            if (game.multiShotCharges > 0) {
                game.isMultiShotActive = !game.isMultiShotActive;
                updateUi();
            }
        }, { passive: false });
    }
    
    updateUi();
    hideHud();
}

export function showHud() {
    if (hudContainer) hudContainer.style.display = 'block';
}

export function hideHud() {
    if (hudContainer) hudContainer.style.display = 'none';
}

export function updateUi() {
    scoreElement.textContent = `Score: ${game.score}`;
    livesElement.textContent = `Lives: ${game.lives}`;
    levelElement.textContent = `Level: ${game.level}`;
    multiShotChargesElement.textContent = `Multi-Shot: ${game.multiShotCharges}`;

    if (isTouchDevice() && multiShotButton) {
        if (game.multiShotCharges > 0) {
            multiShotButton.style.display = 'flex';
            multiShotButton.textContent = game.multiShotCharges;
            multiShotButton.style.opacity = game.isMultiShotActive ? '1' : '0.5';
        } else {
            multiShotButton.style.display = 'none';
        }
    }
}

export function showGameOverScreen() {
    gameOverElement = document.createElement('div');
    gameOverElement.id = 'gameOverScreen';
    
    const gameOverText = document.createElement('div');
    gameOverText.id = 'game-over-text';
    gameOverText.textContent = 'GAME OVER';
    gameOverElement.appendChild(gameOverText);

    const restartText = document.createElement('div');
    restartText.id = 'restart-text';
    restartText.textContent = 'CLICK TO RESTART';
    gameOverElement.appendChild(restartText);

    document.body.appendChild(gameOverElement);
}

export function toggleHud() {
    isHudVisible = !isHudVisible;
    for (const el of hudElements) {
        el.style.display = isHudVisible ? 'block' : 'none';
    }
}

export function hideGameOverScreen() {
    if (gameOverElement) {
        gameOverElement.remove();
        gameOverElement = null;
    }
} 