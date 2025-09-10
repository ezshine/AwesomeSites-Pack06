/**
 * WebGL shader setup and rendering
 */

class Shader {
    constructor() {
        this.canvas = document.getElementById('shaderCanvas');
        this.gl = this.canvas.getContext('webgl');
        
        if (!this.gl) {
            console.error("WebGL not supported!");
            return;
        }

        this.vertexShaderSource = `
            attribute vec2 a_position;
            varying vec2 v_texCoord;
            void main() {
                gl_Position = vec4(a_position, 0, 1);
                v_texCoord = a_position * vec2(0.5, -0.5) + 0.5;
            }
        `;

        this.fragmentShaderSource = `
            precision mediump float;
            varying vec2 v_texCoord;
            uniform sampler2D u_texture;
            uniform vec2 iResolution;
            uniform float iTime;
            uniform float u_scanline_strength;

            vec2 curve(vec2 uv) {
                uv = (uv - 0.5) * 2.0;
                //uv *= 1.1;	
                //uv.x *= 1.0 + pow((abs(uv.y) / 5.0), 2.0);
                //uv.y *= 1.0 + pow((abs(uv.x) / 4.0), 2.0);
                uv  = (uv / 2.0) + 0.5;
               //uv = uv * 0.92 + 0.04;
                return uv;
            }

            void main() {
                vec2 q = v_texCoord;
                vec2 uv = q;
                uv = curve(uv);
                
                vec3 oricol = texture2D(u_texture, q).xyz;
                vec3 col;
                
                float x = sin(0.3 * iTime + uv.y * 21.0) * sin(0.7 * iTime + uv.y * 29.0) * sin(0.3 + 0.33 * iTime + uv.y * 31.0) * 0.0017;

                col.r = texture2D(u_texture, vec2(x + uv.x + 0.001, uv.y + 0.001)).x + 0.05;
                col.g = texture2D(u_texture, vec2(x + uv.x + 0.000, uv.y - 0.002)).y + 0.05;
                col.b = texture2D(u_texture, vec2(x + uv.x - 0.002, uv.y + 0.000)).z + 0.05;
                
                col.r += 0.08 * texture2D(u_texture, 0.75 * vec2(x + 0.025, -0.027) + vec2(uv.x + 0.001, uv.y + 0.001)).x;
                col.g += 0.05 * texture2D(u_texture, 0.75 * vec2(x + -0.022, -0.02) + vec2(uv.x + 0.000, uv.y - 0.002)).y;
                col.b += 0.08 * texture2D(u_texture, 0.75 * vec2(x + -0.02, -0.018) + vec2(uv.x - 0.002, uv.y + 0.000)).z;

                col = clamp(col * 0.6 + 0.4 * col * col * 1.0, 0.0, 1.0);

                float vig = (0.0 + 1.0 * 16.0 * uv.x * uv.y * (1.0 - uv.x) * (1.0 - uv.y));
                col *= vec3(pow(vig, 0.3));

                col *= vec3(0.95, 1.05, 0.95);
                col *= 2.8;

                float scans = clamp( 0.35+0.35*sin(-3.5*iTime+uv.y*iResolution.y*1.5), 0.0, 1.0);
                
                float s = pow(scans, 1.7);
                col = col * vec3(0.4 + u_scanline_strength * s);

                col *= 1.0 + 0.01 * sin(110.0 * iTime);
                if (uv.x < 0.0 || uv.x > 1.0)
                    col *= 0.0;
                if (uv.y < 0.0 || uv.y > 1.0)
                    col *= 0.0;
                
                col *= 1.0 - 0.65 * vec3(clamp((mod(gl_FragCoord.x, 2.0) - 1.0) * 2.0, 0.0, 1.0));
                
                float comp = smoothstep(0.1, 0.9, sin(iTime));
            
                //col = mix(col, oricol, comp);

                gl_FragColor = vec4(col, 1.0);
            }
        `;

        this.program = this.createProgram(this.vertexShaderSource, this.fragmentShaderSource);
        this.positionAttributeLocation = this.gl.getAttribLocation(this.program, "a_position");
        this.resolutionUniformLocation = this.gl.getUniformLocation(this.program, "iResolution");
        this.timeUniformLocation = this.gl.getUniformLocation(this.program, "iTime");
        this.textureUniformLocation = this.gl.getUniformLocation(this.program, "u_texture");
        this.scanlineStrengthUniformLocation = this.gl.getUniformLocation(this.program, "u_scanline_strength");

        this.positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, new Float32Array([
            -1, -1,
             1, -1,
            -1,  1,
            -1,  1,
             1, -1,
             1,  1,
        ]), this.gl.STATIC_DRAW);

        this.texture = this.createTexture();
        
        this.animateScanline = !isTouchDevice();

        window.addEventListener('resize', this.resize.bind(this));
        this.resize();
    }

    createShader(type, source) {
        const shader = this.gl.createShader(type);
        this.gl.shaderSource(shader, source);
        this.gl.compileShader(shader);
        const success = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
        if (success) {
            return shader;
        }
        console.error(this.gl.getShaderInfoLog(shader));
        this.gl.deleteShader(shader);
    }

    createProgram(vertexShaderSource, fragmentShaderSource) {
        const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentShaderSource);
        const program = this.gl.createProgram();
        this.gl.attachShader(program, vertexShader);
        this.gl.attachShader(program, fragmentShader);
        this.gl.linkProgram(program);
        const success = this.gl.getProgramParameter(program, this.gl.LINK_STATUS);
        if (success) {
            return program;
        }
        console.error(this.gl.getProgramInfoLog(program));
        this.gl.deleteProgram(program);
    }

    createTexture() {
        const texture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, texture);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, this.gl.LINEAR);
        return texture;
    }

    updateTexture(sourceCanvas) {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, sourceCanvas);
    }

    resize() {
        this.canvas.width = this.canvas.clientWidth;
        this.canvas.height = this.canvas.clientHeight;
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
    }

    render(game, timestamp) {
        // Update and draw the game on its own canvas
        game.update(timestamp);
        game.draw();

        // Update the texture with the game canvas content
        this.updateTexture(game.canvas);

        this.gl.clearColor(0, 0, 0, 0);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);

        this.gl.useProgram(this.program);
        this.gl.enableVertexAttribArray(this.positionAttributeLocation);
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.positionBuffer);
        this.gl.vertexAttribPointer(this.positionAttributeLocation, 2, this.gl.FLOAT, false, 0, 0);

        this.gl.uniform2f(this.resolutionUniformLocation, this.gl.canvas.width, this.gl.canvas.height);
        
        if (this.animateScanline) {
            this.gl.uniform1f(this.timeUniformLocation, timestamp / 1000.0);
        } else {
            this.gl.uniform1f(this.timeUniformLocation, 0.0);
        }

        const scanlineStrength = isTouchDevice() ? 0.35 : 0.7;
        this.gl.uniform1f(this.scanlineStrengthUniformLocation, scanlineStrength);
        
        this.gl.activeTexture(this.gl.TEXTURE0);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        this.gl.uniform1i(this.textureUniformLocation, 0);

        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

        requestAnimationFrame((ts) => this.render(game, ts));
    }
}

window.addEventListener('load', () => {
    const game = new Game();
    const shader = new Shader();
    shader.render(game, 0);
    
    // Temporary: Run game without shader
    //function gameLoop(timestamp) {
      //  game.update(timestamp);
      //  game.draw();
      //  requestAnimationFrame(gameLoop);
   // }
    //requestAnimationFrame(gameLoop);
});
