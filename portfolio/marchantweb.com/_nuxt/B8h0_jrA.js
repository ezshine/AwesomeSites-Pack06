import{a5 as L,A as H,r as n,m as B,b1 as I,ac as U,s as O,C,J as Y,o as M,B as z,c as q,e as W,G as p,H as k}from"./BNj6qnUa.js";import{c as b,a as $,v as V}from"./JCfvn4Yu.js";import{u as X}from"./CGa80CBI.js";const Q=`

      precision highp float;
varying vec2 fragmentCoordinates;
uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;
uniform float preloaderYOffset;
uniform float iPortfolioScrollPercentage;
uniform vec4 iGreyscaleCells[100];
uniform vec4 iNoDrawCells[100];
uniform bool iHomePage;

// Configuration
#define NOISE_STRENGTH 0.1
#define SPECULAR_STRENGTH 0.25
#define ANIMATION_SPEED 0.5
#define DEPTH 30.
#define SEGMENT_QUALITY 5.

// Shape Definition
float blob(vec3 q) {
    float f = DEPTH;
    f *= (cos(q.z * 1.1)) * (atan(q.x) + 0.5) * (cos(q.z * cos(q.z * 20.)) + 1.0) + cos(q.z * 12. + iTime * ANIMATION_SPEED) * cos(q.x) * sin(q.y) * ((1.5));
    return f;
}

// Gaussian Noise Effect
float gaussian(float z, float u, float o) {
    return (1.0 / (o * sqrt(12.))) * exp(-(((z - u) * (z - u)) / (1.5 * (o * o))));
}

// Output
void main(void) {

    // No Draw Cells
    bool isDiscarded = false;
    for (int i = 0; i < 20; i++) {
        vec4 cell = iNoDrawCells[i];
        if (gl_FragCoord.x >= cell.x * iResolution.x && 
            gl_FragCoord.x <= (cell.x + cell.z) * iResolution.x &&
            gl_FragCoord.y >= (1.0 - cell.y - cell.w) * iResolution.y && 
            gl_FragCoord.y <= (1.0 - cell.y) * iResolution.y) {
            isDiscarded = true;
        }
    }
    
    if(!isDiscarded){

    // Initial Color Gradient
    float mixFactor = gl_FragCoord.x / iResolution.x;
    vec3 leftSide = vec3(.023, .035, .192);
    vec3 rightSide = vec3(.03, .015, .2);
    vec3 gradientColor = mix(leftSide, rightSide, mixFactor);
    gl_FragColor = vec4(gradientColor, 1.0);


    // Shape Definition
    vec2 p = -3. + 1.6 * fragmentCoordinates;
    vec3 o = vec3(p.x + 14. - ((1.0 - iMouse.x) * 0.5) + ((iPortfolioScrollPercentage * 5.0)), p.y + 2.7 - (iMouse.y * 0.15) + (preloaderYOffset * 3.0), -0.35);
    vec3 d = vec3(p.x * 8. + ((1.0 - iMouse.x) * 0.5), p.y + 0.5 + ((1.0 - iMouse.y) * 0.25), 0.8)/140.;
    vec4 c = vec4(0.);
    float t = 0.;
    for (int i = 0; i < 40; i++)
    {
        if (blob(o + d * t) < 30.)
        {
            vec3 e = vec3(.1, .0, 2.);
            vec3 n = vec3(.0);
            n.x = blob(o + d * t) - blob(vec3(o + d * t + e.xyy));
            n.y = blob(o + d * t) - blob(vec3(o + d * t + e.yxy));
            n.z = blob(o + d * t) - blob(vec3(o + d * t + e.yxx)) + 1.0;
            n = normalize(n);
            c += max(dot(vec3(0.2 + (preloaderYOffset) + (iMouse.x * 0.1), 1.5, -1.), n), .0) + min(dot(vec3(3., 10.2, -11.), n), .1) * 0.14;
            break;
        }
        t += SEGMENT_QUALITY;
    }

    // Base Color "Filter"
    if(iHomePage){
        gl_FragColor += vec4(.15, 0.05, .38, 0.) * 0.9;
    }else{
         gl_FragColor += vec4(.15, 0.05, .38, 0.) * 1.2;
    }

    // Specular
    gl_FragColor += c * SPECULAR_STRENGTH * vec4(.40, 0.6, 0.89, 1);

    // Brightness
    if(iHomePage){
        gl_FragColor *= t * .03;
    }else{
        gl_FragColor *= t * .02;
    }
    
    // Greyscale Cells
    bool isInGreyscaleCell = false;
    for (int i = 0; i < 20; i++) {
        vec4 cell = iGreyscaleCells[i];
        if (gl_FragCoord.x >= cell.x * iResolution.x && 
            gl_FragCoord.x <= (cell.x + cell.z) * iResolution.x &&
            gl_FragCoord.y >= (1.0 - cell.y - cell.w) * iResolution.y && 
            gl_FragCoord.y <= (1.0 - cell.y) * iResolution.y) {
            isInGreyscaleCell = true;
            break;
        }
    }
    
    // Homepage Yellow "Bar"
    bool isYellowBar = false;
    if (gl_FragCoord.y < 650. && gl_FragCoord.y > 500. && iHomePage) {
        isYellowBar = true;
    }
    if (isInGreyscaleCell) {
        float gray = dot(gl_FragColor.rgb, vec3(0.299, 0.287, 0.114));
        gl_FragColor.rgb = vec3(gray);
        
        // Orange effect
        if (isYellowBar) {
            vec3 topColor = vec3(1.0, 0.784, 0.055); // The color you're using for the effect
            vec3 bottomColor = gl_FragColor.rgb; // The current fragment color
            
            // Calculate color dodge
            vec3 dodgeColor = (bottomColor * 0.3) / (1.0 - (topColor));
            
            // Create the final blend color based on the topColor's alpha
            vec3 blendedColor = mix(bottomColor, dodgeColor, 1.0);
            
            // Apply the blended result, ensuring values are within the valid range
            gl_FragColor.rgb = clamp(blendedColor, 0.05, 1.0);
        } else {
            if(!iHomePage){
                gl_FragColor.rgb *= 0.4;
            }else{
                gl_FragColor.rgb *= 0.5;
            }
        }
    }

    // Noise
    vec2 ps = vec2(1.0) / iResolution.xy;
    vec2 uv = fragmentCoordinates * ps * 1.0;
    float seed = dot(uv * vec2(isInGreyscaleCell ? 1000. : 5.), vec2(12, 52));
    float noise = fract(sin(seed) * 43758.5453 + t);
    noise = gaussian(noise, float(0.0), float(0.5) * float(0.5));
    vec3 grain = vec3(noise) * (1.0 - gl_FragColor.rgb);
    if (isInGreyscaleCell && (!isYellowBar)) {
        if(iHomePage){
            gl_FragColor.rgb -= grain * NOISE_STRENGTH * 30.0;
        }else{
            gl_FragColor.rgb -= grain * NOISE_STRENGTH * 150.0;
        }
    }
    
    // Alpha
    float brightness = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
    float alpha = 0.005 + (0.2 * smoothstep(0.0, 0.1, brightness));
    gl_FragColor.a *= alpha;
    
    }else{
        gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
    }
}
`,J=["width","height"],oe={__name:"WebGLBackground",setup(j){let e=null,r=null,s=null;const l={time:null,resolution:null,position:null,mouse:null,initialXOffset:null,iGreyscaleCells:null,iNoDrawCells:null,iHomePage:null};let c=0,f=Date.now();const{width:h,height:g}=L(),{x,y:F}=H();n(x.value),n(F.value);let y=n(2);const S=B("portfolioScrollPercentage",()=>0);I();const u=n(null),R=U(u),a=O();let w=C(()=>a.path==="/"||a.path==="/portfolio"||a.path==="/explore"?!0:!!(a.path.startsWith("/portfolio/")&&R.value===!0)),E=C(()=>a.path==="/"?{transform:`translate3d(${P.value}px, 0, 0)`,width:`${d.value}px`}:{}),A=C(()=>a.path==="/");const{containerWidth:d,fragmentShaderGreyscaleCoordinates:T,fragmentShaderNoDrawCoordinates:G}=Y(),{cellX:P}=X("x0-y0__x0-y0"),D=structuredClone(d.value),N=()=>{if(e=document.getElementById("hero-canvas").getContext("webgl"),!e)return;const v=b(e,e.VERTEX_SHADER,V),t=b(e,e.FRAGMENT_SHADER,Q);r=$(e,v,t),l.position=e.getAttribLocation(r,"position"),s=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,s);const i=new Float32Array([-1,-1,1,-1,-1,1,1,-1,1,1,-1,1]);e.bufferData(e.ARRAY_BUFFER,i,e.STATIC_DRAW),l.time=e.getUniformLocation(r,"iTime"),l.resolution=e.getUniformLocation(r,"iResolution"),l.mouse=e.getUniformLocation(r,"iMouse"),l.preloaderYOffset=e.getUniformLocation(r,"preloaderYOffset"),l.portfolioScrollPercentage=e.getUniformLocation(r,"iPortfolioScrollPercentage"),l.iGreyscaleCells=e.getUniformLocation(r,"iGreyscaleCells"),l.iNoDrawCells=e.getUniformLocation(r,"iNoDrawCells"),l.iHomePage=e.getUniformLocation(r,"iHomePage")},m=()=>{if(w.value===!1&&c!==0){requestAnimationFrame(m);return}if(Date.now()-f>1e3/120){e.viewport(0,0,h.value,g.value),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.DEPTH_TEST),u.value.width=d.value,e.useProgram(r),e.enableVertexAttribArray(l.position),e.bindBuffer(e.ARRAY_BUFFER,s),e.vertexAttribPointer(l.position,2,e.FLOAT,!1,0,0),c++,e.uniform1f(l.time,c*.01),e.uniform2f(l.resolution,h.value,g.value),e.uniform1f(l.preloaderYOffset,y.value),e.uniform1f(l.portfolioScrollPercentage,S.value),e.uniform1f(l.iHomePage,A.value?1:0);const t=T.value;for(let o=0;o<100;o++)o<t.length?e.uniform4f(e.getUniformLocation(r,`iGreyscaleCells[${o}]`),t[o].x,t[o].y,t[o].width,t[o].height):e.uniform4f(e.getUniformLocation(r,`iGreyscaleCells[${o}]`),0,0,0,0);const i=G.value;for(let o=0;o<100;o++)o<i.length?e.uniform4f(e.getUniformLocation(r,`iNoDrawCells[${o}]`),i[o].x,i[o].y,i[o].width,i[o].height):e.uniform4f(e.getUniformLocation(r,`iNoDrawCells[${o}]`),0,0,0,0);e.drawArrays(e.TRIANGLES,0,6),f=Date.now()-f%(1e3/120)}requestAnimationFrame(m)};return M(()=>{N(),requestAnimationFrame(m),z.to(y,{duration:10,value:0,ease:"expo.out"})}),(_,v)=>(q(),W("canvas",{id:"hero-canvas",ref_key:"canvas",ref:u,width:p(D),height:p(g),style:k(p(E))},null,12,J))}};export{oe as default};
