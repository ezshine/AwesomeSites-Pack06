import{a5 as R,A as T,r as i,m as P,b1 as w,ac as B,s as L,C as m,o as M,B as O,c as N,e as Y,G as v,H as D}from"./BNj6qnUa.js";import{c as b,a as G,v as I}from"./JCfvn4Yu.js";const z=`
precision highp float;
varying vec2 fragmentCoordinates;
uniform vec2 iResolution;
uniform float iTime;
uniform vec2 iMouse;
uniform float preloaderYOffset;
uniform float iPortfolioScrollPercentage;

// Configuration
#define NOISE_STRENGTH 0.1
#define SPECULAR_STRENGTH 0.35
#define ANIMATION_SPEED 0.9
#define DEPTH 20.
#define SEGMENT_QUALITY 6.

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
    
    for (int i = 0; i < 40; i++) {
        if (blob(o + d * t) < 30.) {
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
    gl_FragColor += vec4(.15, 0.05, .38, 0.) * 1.2;

    // Specular
    gl_FragColor += c * SPECULAR_STRENGTH * vec4(.40, 0.6, 0.89, 1);

    // Brightness
    gl_FragColor *= t * .02;
    
    // Apply greyscale to top 80% of the viewport
    float normalizedY = gl_FragCoord.y / iResolution.y;
    // if (normalizedY > 0.5) {  // Top 90%
        float gray = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
        gl_FragColor.rgb = vec3(gray);
        gl_FragColor.rgb *= 0.4;  // Maintain the darker greyscale look from original
        
        // Apply stronger noise to greyscale area
        vec2 ps = vec2(1.0) / iResolution.xy;
        vec2 uv = fragmentCoordinates * ps * 1.0;
        float seed = dot(uv * vec2(1000.), vec2(12, 52));
        float noise = fract(sin(seed) * 43758.5453 + t);
        noise = gaussian(noise, float(0.0), float(0.5) * float(0.5));
        vec3 grain = vec3(noise) * (1.0 - gl_FragColor.rgb);
        gl_FragColor.rgb -= grain * NOISE_STRENGTH * 150.0;
    // }
    
    // Alpha
    float brightness = dot(gl_FragColor.rgb, vec3(0.299, 0.587, 0.114));
    float alpha = 0.005 + (0.2 * smoothstep(0.0, 0.1, brightness));
    gl_FragColor.a *= alpha;
}
`,U=["width","height"],W={__name:"MobileBackground",setup(q){let e=null,t=null,l=null;const o={time:null,resolution:null,position:null,mouse:null,preloaderYOffset:null,portfolioScrollPercentage:null};let n=0,s=Date.now();const{width:r,height:c}=R(),{x:h,y:S}=T();i(h.value),i(S.value);let d=i(2);const _=P("portfolioScrollPercentage",()=>0);w();const f=i(null),A=B(f),a=L();let E=m(()=>a.path==="/"||a.path==="/portfolio"||a.path==="/explore"?!0:!!(a.path.startsWith("/portfolio/")&&A.value===!0)),y=m(()=>a.path==="/"?{width:`${r.value}px`}:{});const x=()=>{if(e=document.getElementById("hero-canvas").getContext("webgl"),!e)return;const g=b(e,e.VERTEX_SHADER,I),C=b(e,e.FRAGMENT_SHADER,z);t=G(e,g,C),o.position=e.getAttribLocation(t,"position"),l=e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,l);const F=new Float32Array([-1,-1,1,-1,-1,1,1,-1,1,1,-1,1]);e.bufferData(e.ARRAY_BUFFER,F,e.STATIC_DRAW),o.time=e.getUniformLocation(t,"iTime"),o.resolution=e.getUniformLocation(t,"iResolution"),o.mouse=e.getUniformLocation(t,"iMouse"),o.preloaderYOffset=e.getUniformLocation(t,"preloaderYOffset"),o.portfolioScrollPercentage=e.getUniformLocation(t,"iPortfolioScrollPercentage")},u=()=>{if(E.value===!1&&n!==0){requestAnimationFrame(u);return}Date.now()-s>1e3/120&&(e.viewport(0,0,r.value,c.value),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.DEPTH_TEST),f.value.width=r.value,e.useProgram(t),e.enableVertexAttribArray(o.position),e.bindBuffer(e.ARRAY_BUFFER,l),e.vertexAttribPointer(o.position,2,e.FLOAT,!1,0,0),n++,e.uniform1f(o.time,n*.01),e.uniform2f(o.resolution,r.value,c.value),e.uniform1f(o.preloaderYOffset,d.value),e.uniform1f(o.portfolioScrollPercentage,_.value),e.drawArrays(e.TRIANGLES,0,6),s=Date.now()-s%(1e3/120)),requestAnimationFrame(u)};return M(()=>{x(),requestAnimationFrame(u),O.to(d,{duration:10,value:0,ease:"expo.out"})}),(p,g)=>(N(),Y("canvas",{id:"hero-canvas",class:"hero-canvas--mobile",ref_key:"canvas",ref:f,width:v(r),height:v(c),style:D(v(y))},null,12,U))}};export{W as default};
