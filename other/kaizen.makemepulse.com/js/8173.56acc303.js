(self["webpackChunkgl_starter"]=self["webpackChunkgl_starter"]||[]).push([[8173],{87584:function(t,e,i){var o=function(t){var e="";return e+="#pragma SLOT version\n\n#pragma SLOT definitions\n\n#pragma SLOT precision\n\n"+i(87426)()+"\n\n#pragma SLOT pf\n\n\n\n// MATH\n// =========\n#define saturate(x) clamp( x, 0.0, 1.0 )\n#define sdot( a, b ) saturate( dot(a,b) )\n\n\n\n//                MAIN\n// ===================\n\nvoid main( void ){\n\n  #pragma SLOT f\n\n vec3 _baseColor = vec3(1.0);\n  #if HAS_baseColor\n    _baseColor *= baseColor();\n  #endif\n  #if HAS_baseColorFactor\n    _baseColor *= baseColorFactor();\n  #endif\n\n\n\n  //\n  #ifdef HAS_vertexColor\n  #if HAS_vertexColor\n    _baseColor *= vertexColor();\n  #endif\n  #endif\n\n  FragColor.xyz = _baseColor;\n \n\n  float _alpha = 1.0;\n  #if HAS_alpha\n    _alpha *= alpha();\n  #endif\n  #if HAS_alphaFactor\n    _alpha *= alphaFactor();\n  #endif\n\n\n  #if alphaMode( MASK )\n    if( _alpha < alphaCutoff() ) discard;\n    FragColor.a = 1.0;\n  #elif alphaMode( BLEND )\n    FragColor.a = _alpha;\n  #else\n    FragColor.a = 1.0;\n  #endif\n\n\n  #pragma SLOT postf_linear\n  #pragma SLOT postf\n\n}",e};o.toString=o,t.exports=o,o.onHmr=function(){}},52303:function(t,e,i){var o=function(t){var e="";return e+="#pragma SLOT version\n\n#pragma SLOT definitions\n\n\n#ifndef hasNormals\n  #define hasNormals 0\n#endif \n#ifndef hasTangents\n  #define hasTangents 0\n#endif \n\n#if hasTangents && !hasNormals \n  #pragma error tan but no nrm\n  error\n#endif\n\n#pragma SLOT precision\n\n"+i(16067)()+"\n\n#pragma SLOT pv\n\n\nIN vec3 aPosition;\n\n\n// uniform mat4 uMVP;\nuniform mat4 uWorldMatrix;\nuniform mat4 uVP;\n\n\n\n\nstruct VertexData {\n  highp vec3 position;\n  highp vec3 worldPos;\n  #if hasNormals\n    vec3 normal;\n  #endif\n  #if hasTangents\n    vec3 tangent;\n  #endif\n  mat4 worldMatrix;\n};\n\n\nvoid InitVertexData( out VertexData vertex ){\n\n  vertex.position = aPosition;\n  #if hasNormals\n    vertex.normal = vec3(0.0);\n  #endif\n  #if hasTangents\n    vertex.tangent = vec3(0.0);\n  #endif\n\n  vertex.worldMatrix = uWorldMatrix;\n   \n}\n\n\nvoid main( void ){\n\n  #pragma SLOT v\n\n  VertexData vertex;\n  InitVertexData( vertex );\n\n  #pragma SLOT vertex_warp\n\n  vec4 worldPos = vertex.worldMatrix * vec4( vertex.position, 1.0 );\n  vertex.worldPos.xyz = worldPos.xyz / worldPos.w;\n\n  #pragma SLOT vertex_warp_world\n\n  gl_Position     = uVP * vec4( vertex.worldPos, 1.0 );\n  \n  #pragma SLOT postv\n}",e};o.toString=o,t.exports=o,o.onHmr=function(){}},40037:function(t){var e=function(t){var e="";return e+="","pf"===t.slot&&(e+="\n    IN mediump vec2 vTexCoord0;\n    IN vec3 vPos;\n    IN float distD;\n    IN float distN;\n"),e+="\n\n","postf"===t.slot&&(e+="\n    float fn = mod(-uTime() * 0.3 + vTexCoord0.y+ uColor().r * uColor().b * 2., 1.);\n    vec4 col = texture2D(noisecolor, vec2(fract(vTexCoord0.x + sin((uTime() * 0.3 + vTexCoord0.y) * 0.4)), fract(fn * 0.2)));\n    FragColor.rgb = uColor();\n\n    float alpha = mix(1.0, smoothstep(0.0, 0.1, vTexCoord0.y) * smoothstep(1., 0.95, vTexCoord0.y) * distD, uMixBorder()) * distN;\n    float n = mix(clamp(floor((col.r * col.b * 4.)), 0., 1.), 1.0, (step(0.25, vTexCoord0.x)) * (1. - step(0.75, vTexCoord0.x)) * (uMixBorder()));\n    alpha *= n;\n    FragColor.a =  alpha * uAlpha();\n"),e+="\n\n",e};e.toString=e,t.exports=e,e.onHmr=function(){}},87038:function(t){var e=function(t){var e="";return e+="","pv"===t.slot&&(e+="\n    OUT mediump vec2 vTexCoord0;\n    OUT vec3 vPos;\n    OUT float distD;\n    OUT float distN;\n    uniform vec3 trailPosition[200]; \n    uniform mat4 uViewMatrix;\n    // uniform sampler2D tex_basecolor;\n"),e+="\n\n","postv"===t.slot&&(e+="\n    vTexCoord0 = aTexCoord0;\n    vPos = vertex.position + vec3(0., 0., 0.5); \n    // vec4 col = texture2D(tex_basecolor, vec2(vertex.position.x, vertex.position.z));\n    int id = int(vTexCoord0.y * 200.);\n    float perc = float(id) / 200.;\n    float nperc = float(id + 1) / 200.;\n    float pperc = float(id - 1) / 200.;\n    vec3 offset = uOffset();\n    // vec3 npos = trailPosition[min(id + 1, 100 - 1)];\n    vec3 npos = trailPosition[id + 1];\n    vec3 ppos = trailPosition[id - 1];\n    vec3 pos = trailPosition[id];\n\n    pos.y += perc * offset.y;\n    ppos.y += pperc * offset.y;\n    npos.y += nperc * offset.y;\n\n    pos.z += perc * offset.z;\n    ppos.z += pperc * offset.z;\n    npos.z += nperc * offset.z;\n    \n    vec4 currentProjected = vertex.worldMatrix * uVP * vec4( pos, 1.0 );\n    vec4 nextProjected = vertex.worldMatrix * uVP * vec4( npos, 1.0 );\n    vec2 currentScreen = currentProjected.xy / currentProjected.w;\n    vec2 nextScreen = nextProjected.xy / nextProjected.w;\n    vec2 sub = normalize(nextScreen - currentScreen);\n\n    if(id > 95) {\n        vec4 prevProjected = vertex.worldMatrix * uVP * vec4( ppos, 1.0 );\n        vec2 prevScreen = prevProjected.xy / prevProjected.w;\n        sub = normalize(currentScreen - prevScreen);\n    }\n\n    distN = smoothstep(uSpeedThreshold() - 0.01, uSpeedThreshold(), distance(pos, npos)) * smoothstep(uSpeedThreshold() - 0.01, uSpeedThreshold(), distance(pos, ppos));\n\n    vec2 normal = vec2(-sub.y, sub.x);\n    distD = smoothstep(0.0, 0.1, uSpeed());\n    normal *= (thickness() * distD)/2.0;\n\n    vec4 proj = vertex.worldMatrix * vec4( pos, 1.0 );\n    vertex.worldPos.xyz = proj.xyz / proj.w;\n    float border = mix(1.0, smoothstep(0., 0.1, vTexCoord0.y) * smoothstep(1., 0.9, vTexCoord0.y), uMixBorder());\n    gl_Position = uVP * vec4(vertex.worldPos.xyz, 1.0) + uViewMatrix * vec4(vertex.position.x * normal * border, 0., 1.0);\n"),e+="\n\n",e};e.toString=e,t.exports=e,e.onHmr=function(){}},33695:function(t,e,i){"use strict";i.d(e,{Z:function(){return x}});var o=i(63887),s=i(52303),r=i.n(s),n=i(87584),a=i.n(n),l=i(4378),h=i(96323),d=i(49500),f=i(48612),c=i(24033),p=i(41863),u=i(93497),_=i(65497);const m=o.mat4.create(),v="unlit";class x extends l.Z{constructor(t="unlit-pass"){super({uid:v,vert:r()(),frag:a()()});const e=this.inputs;e.add(this.version=new p.Z("100")),e.add(this.precision=new u.Z("highp")),e.add(this.shaderid=new h.Z("id_"+v,!0)),e.add(this.baseColor=new d.ZP("baseColor",3,d.Ho.FRAGMENT,_.u.SRGB)),e.add(this.baseColorFactor=new d.ZP("baseColorFactor",3,d.Ho.FRAGMENT,_.u.SRGB)),e.add(this.alpha=new d.ZP("alpha",1)),e.add(this.alphaFactor=new d.ZP("alphaFactor",1)),e.add(this.alphaCutoff=new d.ZP("alphaCutoff",1)),e.add(this.alphaMode=new c.Z("alphaMode",f.r)),e.add(this.doubleSided=new h.Z("doubleSided",!1))}setLightSetup(t){}prepare(t,e,i){t.uMVP&&(i.modelViewProjectionMatrix(m,e._wmatrix),t.uMVP(m)),t.uWorldMatrix&&t.uWorldMatrix(e._wmatrix),t.uVP&&t.uVP(i._viewProj)}}},18173:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return B}});var o=i(18082),s=i(33695),r=i(61987),n=i(94292),a=i(63887),l=i(15415),h=i(79763),d=i(87038),f=i.n(d),c=i(40037),p=i.n(c),u=i(76879),_=i(49500),m=i(1517);const v=(0,u.Z)(p()),x=(0,u.Z)(f());class g extends h.Z{constructor(t){super(!0,!0),this.thicknessV=.13,this.timeV=1,this.addChild(this.time=new _.ZP("uTime",1,_.Ho.ALL)),this.addChild(this.thickness=new _.ZP("thickness",1,_.Ho.VERTEX)),this.addChild(this.speed=new _.ZP("uSpeed",1,_.Ho.ALL)),this.addChild(this.noiseInput=new _.ZP("noise",4,_.Ho.FRAGMENT)),this.addChild(this.alpha=new _.ZP("uAlpha",1,_.Ho.FRAGMENT)),this.addChild(this.color=new _.ZP("uColor",3,_.Ho.FRAGMENT)),this.addChild(this.speedThreshold=new _.ZP("uSpeedThreshold",1,_.Ho.VERTEX)),this.addChild(this.mixBorder=new _.ZP("uMixBorder",1,_.Ho.ALL)),this.addChild(this.offset=new _.ZP("uOffset",3,_.Ho.VERTEX)),this.offsetU=this.offset.attachUniform(),this.offsetU.set(0,0,0),this.thicknessU=this.thickness.attachUniform(),this.thicknessU.set(this.thicknessV),this.speedU=this.speed.attachUniform(),this.speedThresholdU=this.speedThreshold.attachUniform(),this.mixBorderU=this.mixBorder.attachUniform(),this.alphaU=this.alpha.attachUniform(),this.alphaU.set(1),this.speedThresholdU.set(.03),this.mixBorderU.set(1),this.colorU=this.color.attachUniform();const e=m.ZP.create("aTexCoord0");this.noiseInput.attachSampler("noisecolor",e).set(t),this.timeV=10*Math.random(),this.timeU=this.time.attachUniform()}_genCode(t){t.add("pv",x({slot:"pv"})),t.add("postv",x({slot:"postv"})),t.add("pf",v({slot:"pf"})),t.add("postf",v({slot:"postf"}))}dispose(){}}var P=i(21370),w=i(5839);const C=200,T=a.vec3.create();class M{constructor(t,e,i,n,h={}){this._renderer=t,this._mesh=e,this.noiseTex=i,this.index=n,this.opts=h,this.active=!1,this._trailBuffer=[],this._trailPositions=[],this._trailPositionsCopy=[],this._countImages=0,this._followSave=a.vec3.create(),this._followLerp=a.vec3.create(),this._bufferSize=20,this._drawImageFrameElapsed=12,this._node=new r.Z,this._drawImageFrameElapsed=5+Math.round(3*Math.random()),this._bufferSize=h.trailDistance+Math.round(Math.random()*h.trailDistance),this._gltfMaterial=new o.Z(this._renderer.gl,"trailMat"+n);const d=new s.Z("color");d.alphaMode.set("BLEND"),d.mask=w.Z.BLENDED,this._gltfMaterial.mask=w.Z.BLENDED,d.glconfig.enableBlend(),d.glconfig.blendFunc(this._renderer.gl.SRC_ALPHA,this._renderer.gl.ONE_MINUS_SRC_ALPHA),d.glconfig.depthMask(!1),d.glconfig.enableDepthTest(!1),d.mask=l.Z.getRenderConfig().blendedMask,this._gltfMaterial.addPass(d),this._trailChunk=new g(this.noiseTex);const f=this._gltfMaterial.getPass("color");f.pass.inputs.add(this._trailChunk),this._prg=f.getProgram()}get trailChunk(){return this._trailChunk}async load(){}setActive(t,e={}){const i={color:[1,1,1],thickness:.02,trailDistance:20,offset:[.07,.07,.07],drawImageFrameElapsed:12,speedThreshold:.03,mixBorder:1};e.color||(e.color=i.color),e.thickness||(e.thickness=i.thickness),e.trailDistance||0===e.trailDistance||(e.trailDistance=i.trailDistance),e.offset||(e.offset=i.offset),e.drawImageFrameElapsed||(e.drawImageFrameElapsed=i.drawImageFrameElapsed),e.speedThreshold||(e.speedThreshold=i.speedThreshold),e.mixBorder||0===e.mixBorder||(e.mixBorder=i.mixBorder),this._drawImageFrameElapsed=1===e.drawImageFrameElapsed?1:e.drawImageFrameElapsed+Math.round(3*Math.random()),this.opts=e,this._bufferSize=e.trailDistance+Math.round(Math.random()*e.trailDistance),this._offset=a.vec3.create(),a.vec3.set(this._offset,(2*Math.random()-1)*this.opts.offset[0],(2*Math.random()-1)*this.opts.offset[1],(2*Math.random()-1)*this.opts.offset[2]),this._followNode=t,t.updateWorldMatrix();for(let o=0;o<C;o++)this._trailPositions[3*o+0]=t.position[0],this._trailPositions[3*o+1]=t.position[1],this._trailPositions[3*o+2]=t.position[2],o<this._bufferSize&&(this._trailBuffer[3*o+0]=t.position[0],this._trailBuffer[3*o+1]=t.position[1],this._trailBuffer[3*o+2]=t.position[2]);this._trailPositionsCopy=[...this._trailPositions],a.vec3.copy(this._followSave,t.position),a.vec3.copy(this._followLerp,t.position),this._trailChunk.colorU.set(e.color[0],e.color[1],e.color[2]),this._trailChunk.thicknessV=e.thickness+Math.random()*e.thickness,this._trailChunk.thicknessU.set(this._trailChunk.thicknessV),this._trailChunk.speedThresholdU.set(e.speedThreshold),this._trailChunk.mixBorderU.set(e.mixBorder),this.active=!0}setInactive(){this.active=!1,this._followNode=null,this._trailPositions=this._trailBuffer=this._trailPositionsCopy=[];const t=this._gltfMaterial.getPass("color");t.pass.inputs.remove(this._trailChunk)}syncWithObject(){if(!this._followNode||!this.active)return;this._followNode.updateWorldMatrix();const t=a.vec3.fromValues(this._followNode._wmatrix[12],this._followNode._wmatrix[13],this._followNode._wmatrix[14]);for(let e=0;e<C;e++)this._trailPositions[3*e+0]=t[0],this._trailPositions[3*e+1]=t[1],this._trailPositions[3*e+2]=t[2],e<this._bufferSize&&(this._trailBuffer[3*e+0]=t[0],this._trailBuffer[3*e+1]=t[1],this._trailBuffer[3*e+2]=t[2]);a.vec3.copy(this._followSave,t),a.vec3.copy(this._followLerp,t),this._trailPositionsCopy=[...this._trailPositions]}preRender(){if(!this.active)return;a.vec3.set(this._followSave,this._followNode._wmatrix[12],this._followNode._wmatrix[13],this._followNode._wmatrix[14]),a.vec3.lerp(this._followLerp,this._followLerp,this._followSave,.2),this._trailBuffer.pop(),this._trailBuffer.pop(),this._trailBuffer.pop(),this._trailBuffer.unshift(this._followLerp[2]+this._offset[0]+.01*Math.cos(.005*P.Z.scaledTime)),this._trailBuffer.unshift(this._followLerp[1]+this._offset[1]+.01*Math.sin(.005*P.Z.scaledTime)),this._trailBuffer.unshift(this._followLerp[0]+this._offset[2]+.01*Math.sin(.005*P.Z.scaledTime));const t=a.vec3.distance(this._followNode.position,T),e=this._trailPositions.pop(),i=this._trailPositions.pop(),o=this._trailPositions.pop();a.vec3.set(T,o,i,e),this._trailPositions.unshift(this._trailBuffer[this._trailBuffer.length-3+2]),this._trailPositions.unshift(this._trailBuffer[this._trailBuffer.length-3+1]),this._trailPositions.unshift(this._trailBuffer[this._trailBuffer.length-3+0]),(this._drawImageFrameElapsed<=1||this._countImages%this._drawImageFrameElapsed===0)&&(this._trailChunk.speedU.set(t),this._trailChunk.timeV+=.002*P.Z.scaledDt,this._trailChunk.timeU.set(this._trailChunk.timeV),this._trailPositionsCopy=[...this._trailPositions]),this._countImages++}render(t){if(!this.active)return;const e=this._renderer.gl,i=this._mesh.mesh.primitives,o=n.Z.get(e);for(let s=0;s<i.length;s++){const e=i[s],r=this._gltfMaterial;if(!r.hasPass(t.pass)||0===(r.mask&t.mask)||1===t.mask)continue;const n=r.getPass(t.pass);0!==(n.pass.mask&t.mask)&&(n.prepare(this._node,t.camera),o.push(n.pass.glconfig),r.glconfig&&o.push(r.glconfig),t.glConfig&&o.push(t.glConfig),o.apply(),this.drawCall(t.camera,n.getProgram(),e),o.pop(),r.glconfig&&o.pop(),t.glConfig&&o.pop())}}drawCall(t,e,i){e.trailPosition&&e.trailPosition(this._trailPositionsCopy),e.uViewMatrix&&e.uViewMatrix(this._renderer.camera.lens.getProjection()),i.bindVao(e),i.render(),i.unbindVao()}}var S=i(61221),b=i(14888);const k="trail/Trail.glb";class B{constructor(t,e){this._renderer=t,this.renderAbove=!1,this._matOverride=new b.Z,this._trailPool=[],this._trailResource=new S.ZP(k,this._renderer.gl,{defaultTextureFilter:this._renderer.gl.LINEAR_MIPMAP_LINEAR,extensions:[this._matOverride]}),this._noiseTex=e.get("fractalNoise").texture}async load(){this._trailGltf=await this._trailResource.load()}onLoaded(){this._trailPool=[]}get trailPool(){return this._trailPool}addTrail(t,e){const i=new M(this._renderer,this._trailGltf.renderables[0],this._noiseTex,this._trailPool.length);return this._trailPool.push(i),i.setActive(t,e),i}removeAll(){for(const t of this._trailPool)t.setInactive();this._trailPool=[]}removeTrail(t){t.setInactive(),this._trailPool.splice(t.index,1)}syncAllWithNode(){for(const t of this._trailPool)t.syncWithObject()}syncWithNode(t){t.syncWithObject()}preRender(){for(const t of this._trailPool)t.preRender()}render(t){for(const e of this._trailPool)e.render(t)}}},76879:function(t,e,i){"use strict";i.d(e,{Z:function(){return s},d:function(){return r}});var o=i(29845);function s(t){return t}function r(t,e,i,s,r){return new o.Z(t,e(r),i(r),s)}}}]);
//# sourceMappingURL=8173.56acc303.js.map