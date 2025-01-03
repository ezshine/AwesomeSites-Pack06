const o=(e,a,t)=>{const r=e.createShader(a);if(e.shaderSource(r,t),e.compileShader(r),e.getShaderParameter(r,e.COMPILE_STATUS))return r;e.deleteShader(r)},c=(e,a,t)=>{const r=e.createProgram();if(e.attachShader(r,a),e.attachShader(r,t),e.linkProgram(r),e.getProgramParameter(r,e.LINK_STATUS))return r;e.deleteProgram(r)},n=`
attribute vec4 position;
varying vec2 fragmentCoordinates;

void main() {
    gl_Position = vec4(position.xy, 0.0, 1.0);
    fragmentCoordinates = position.xy * 1.;
}
`;export{c as a,o as c,n as v};
