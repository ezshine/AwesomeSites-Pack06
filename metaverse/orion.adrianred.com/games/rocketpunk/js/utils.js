/**
 * Utility functions for the game
 */

// Calculate distance between two points
function distance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// Generate a random integer between min and max (inclusive)
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Calculate angle between two points in radians
function calculateAngle(x1, y1, x2, y2) {
    return Math.atan2(y2 - y1, x2 - x1);
}

// Convert radians to degrees
function radToDeg(rad) {
    return rad * 180 / Math.PI;
}

// Check collision between two rectangles
function checkRectCollision(rect1, rect2) {
    return (
        rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.y + rect1.height > rect2.y
    );
}

// Check collision between two circles
function checkCircleCollision(circle1, circle2) {
    return distance(circle1.x, circle1.y, circle2.x, circle2.y) < (circle1.radius + circle2.radius);
}

// LINE/CIRCLE
function lineCircle(x1, y1, x2, y2, cx, cy, r) {

    // is either end INSIDE the circle?
    let inside1 = pointCircle(x1, y1, cx, cy, r);
    let inside2 = pointCircle(x2, y2, cx, cy, r);
    if (inside1 || inside2) return true;
  
    // get length of the line
    let len = distance(x1, y1, x2, y2);
  
    // get dot product of the line and circle
    let dot = (((cx - x1) * (x2 - x1)) + ((cy - y1) * (y2 - y1))) / Math.pow(len, 2);
  
    // find the closest point on the line
    let closestX = x1 + (dot * (x2 - x1));
    let closestY = y1 + (dot * (y2 - y1));
  
    // is this point actually on the line segment?
    let onSegment = linePoint(x1, y1, x2, y2, closestX, closestY);
    if (!onSegment) return false;
  
    // get distance to closest point
    let d = distance(closestX, closestY, cx, cy);
  
    if (d <= r) {
      return true;
    }
    return false;
}
  
  
// POINT/CIRCLE
function pointCircle(px, py, cx, cy, r) {
    let d = distance(px, py, cx, cy);
    if (d <= r) {
      return true;
    }
    return false;
}
  
  
// LINE/POINT
function linePoint(x1, y1, x2, y2, px, py) {
  
    let d1 = distance(px, py, x1, y1);
    let d2 = distance(px, py, x2, y2);
  
    let lineLen = distance(x1, y1, x2, y2);
  
    let buffer = 0.1;
  
    if (d1 + d2 >= lineLen - buffer && d1 + d2 <= lineLen + buffer) {
      return true;
    }
    return false;
}

// Create gore particle effect
function createGoreEffect(game, x, y, count = 20) {
    for (let i = 0; i < count; i++) {
        const speed = randomInt(1, 5);
        const angle = Math.random() * Math.PI * 2;
        const size = randomInt(2, 5);
        const lifetime = randomInt(30, 60);
        
        game.particles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            size: size,
            color: '#FF0000',
            lifetime: lifetime,
            maxLifetime: lifetime
        });
    }
}

// Create explosion effect
function createExplosion(game, x, y, scale = 1) {
    game.explosions.push({
        x: x,
        y: y,
        radius: 10 * scale,
        maxRadius: 60 * scale,
        opacity: 1
    });
    
    // Create many particles
    createGoreEffect(game, x, y, 30 * scale);
}

function isTouchDevice() {
    return (('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0) ||
           (navigator.msMaxTouchPoints > 0));
} 