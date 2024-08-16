import{_ as Z}from"./4V-YWko9.js";import{_ as Q}from"./CpY-ecYb.js";import{d as F,a2 as pe,a3 as ve,a4 as fe,S as re,s as B,l as le,z as ee,k as te,C as _e,a5 as he,q as oe,B as q,$ as ne,D as xe,o as $,c as D,O as A,w as v,E as h,b as e,G as a,H as r,K as b,L as x,n as ce,I as L,J as j,j as ue,Z as ge,a6 as we,a7 as ye,a8 as be,a9 as ke,aa as ze,ab as Ce,ac as ae,U as Pe,ad as Ie,ae as $e,af as Me,ag as Se,ah as Re,t as Ee,P as Le,r as H,ai as Be,f as se,m as De,y as ie,aj as J,a1 as de,ak as Te,al as Ve}from"./CmfzVdrr.js";import We from"./Ccpt04WP.js";const Oe={id:"header",ref:"headerEl"},je={class:ce(["flex"])},Ae={class:"flex"},Fe=F({__name:"Header",setup(V){const o=pe(),{height:P}=ve(o),l=fe("--space-header");re(P,C=>{l.value=`${Math.round(C)}px`});const{firstNavigation:c,mainTitle:u,artworkTitle:I,artworkInfo:g,menu:S}=B(le()),{currentRoomSlug:k,skippable:d,current:z}=B(ee()),{name:m,surname:T}=te("artists","michael-schindhelm"),{sound:s}=B(_e()),p=he(),i=oe(),n=q(()=>ne()(i)),w=["slug-room"],M=["slug-room-artwork","slug-map"],y=["slug","slug-room","slug-map"],G=["slug-room-artwork"],U=["slug-room","slug-map"],X=["index","slug"],K=["slug","slug-room","slug-map"];async function W(){n.value==="slug-room-artwork"?await L(j()({name:"slug-room",params:{slug:i.params.slug,room:k.value}})):c.value?await L(j()({name:"slug",params:{slug:i.params.slug}})):p.go(-1)}async function R(){switch(n.value){case"slug-map":c.value?await L(j()({name:"slug",params:{slug:i.params.slug}})):p.go(-1);break;default:await L(j()({name:"slug-map"}));break}}async function O(){i.params.slug==="about"?c.value?await L("/"):p.go(-1):await L(j()({name:"slug",params:{slug:"about"}}))}return xe("Escape",()=>{switch(n.value){case"slug-map":R();break;case"slug":i.params.slug==="about"&&O();break;case"slug-room-artwork":W();break}}),(C,E)=>{const _=Z,t=Q;return $(),D("header",Oe,[A("div",je,[v(a(_,{class:"home",theme:"button",background:"blue",icon:{name:"home"},url:"/",external:!0,target:"_self"},null,512),[[h,w.includes(e(n))]]),v(a(_,{class:"close-button",onClick:W,theme:"button",background:"grey",icon:{name:"cross"}},{default:r(()=>[b(x(C.$t("close_cta")),1)]),_:1},512),[[h,M.includes(e(n))]]),v(a(t,{class:"main-title",theme:"boxed",background:e(n)==="slug"?"blue":"yellow",tag:"h1",typo:"button"},{default:r(()=>[b(x(e(u)),1)]),_:1},8,["background"]),[[h,y.includes(e(n))]]),v(a(_,{class:"artwork-title",onClick:E[0]||(E[0]=f=>g.value=!e(g)),theme:"button",background:"white",typo:"button",icon:{name:e(g)?"minus":"plus"},active:e(g)},{default:r(()=>[b(x(e(I)),1)]),_:1},8,["icon","active"]),[[h,G.includes(e(n))]]),a(_,{class:"sound-toggle",onClick:E[1]||(E[1]=f=>s.value=!e(s)),theme:"button",background:"black",icon:{name:e(s)?"unmute":"mute"},align:"end"},{default:r(()=>[b(x(e(s)?C.$t("unmute_cta"):C.$t("mute_cta")),1)]),_:1},8,["icon"]),v(a(_,{class:"about",theme:"button",background:"grey",full:!0,onClick:O,icon:{name:e(i).params.slug==="about"?"minus":"plus"},align:"start",active:e(i).params.slug==="about"},{default:r(()=>[b(x(e(i).params.slug==="about"?C.$t("close_cta"):"About"),1)]),_:1},8,["icon","active"]),[[h,K.includes(e(n))]]),v(a(_,{class:"map-toggle",onClick:R,theme:"button",background:"white",icon:{name:"map"},active:e(n)==="slug-map"},{default:r(()=>[b(x(C.$t("map_cta")),1)]),_:1},8,["active"]),[[h,U.includes(e(n))]])]),v(A("div",Ae,[a(t,{theme:"boxed",background:"grey",typo:"button"},{default:r(()=>[b(x(`${C.$t("project_by")} ${e(m)} ${e(T)}`),1)]),_:1})],512),[[h,X.includes(e(n))]])],512)}}}),Ne=ue(Fe,[["__scopeId","data-v-3660231e"]]),He={id:"footer",class:"flex"},qe=F({__name:"Footer",setup(V){const o=te("site");return(P,l)=>{const c=Q,u=Z;return $(),D("footer",He,[a(c,{background:"blue",theme:"boxed",typo:"button"},{default:r(()=>[b(x(e(o).place.full),1)]),_:1}),a(u,{background:"grey",theme:"button",full:!0,icon:{name:"arrow"},url:e(o).place.link},{default:r(()=>[b(x(e(o).place.short),1)]),_:1},8,["url"])])}}}),Ge={id:"splash-cloud"},Ue=`
  uniform float size;
  uniform float u_time;

  #include <common>
  #include <color_pars_vertex>

  vec3 hashVec3(vec3 p) {
    p *= 91336.0;
    p = fract(p * vec3(0.1031, 0.1030, 0.0973));
    p += dot(p, p.yzx + vec3(19.19, 19.20, 19.21));
    return fract((p.x + p.y + p.z) * p) - vec3(0.5, 0.5, 0.5);
  }

  vec3 mod289(vec3 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 mod289(vec4 x) {
    return x - floor(x * (1.0 / 289.0)) * 289.0;
  }

  vec4 permute(vec4 x) {
      return mod289(((x*34.0)+1.0)*x);
  }

  vec4 taylorInvSqrt(vec4 r)
  {
    return 1.79284291400159 - 0.85373472095314 * r;
  }

  float remap(float value, float low1, float high1, float low2, float high2) {
    return clamp(low2 + (value - low1) * (high2 - low2) / (high1 - low1), low2, high2);
  }

  float snoise(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 =   v - i + dot(i, C.xxx) ;
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    float time = u_time * 1.5;

    #include <color_vertex>

    vColor *= 1.5;

    #include <begin_vertex>

    #include <project_vertex>

    vec4 vertex = vec4(position, 1.0);
    vec3 hashVector = hashVec3(vertex.xyz);

    // Anti moirè
    vertex.xyz += hashVector * 0.007;

    float bannerWindIntensity = remap(vertex.z, 0.9, 10.0, 0.0, 1.0);
    bannerWindIntensity = pow(bannerWindIntensity, 0.5);
    bannerWindIntensity = sin((bannerWindIntensity - 0.25) * 6.28318530718) * 0.5 + 0.5;

    float windIntensity = sin(time * 0.2 - vertex.x * 0.1) + 1.5;
    float wind1 = sin(time + windIntensity + vertex.z * 0.4 - vertex.x * 0.4 - vertex.y) * 0.5 + 0.3;
    float wind2 = snoise(vertex.xyz + time * 0.5 + windIntensity);
    float wind3 = snoise(vertex.xyz * 4.0 - time * 0.34122) * (0.2 + wind2);
    float wind4 = snoise(vertex.xyz * 3.0 - time * 0.4131) * (0.2 + wind1);

    // Banner
    float isBanner = normal.y;
    float isCorrugated = normal.z;
    float bannerOffset1 = wind1 * bannerWindIntensity * windIntensity * 0.2;
    float bannerOffset2 = wind2 * (windIntensity - 0.3) * isCorrugated * 0.045;
    vertex.x += (bannerOffset1 + bannerOffset2) * isBanner;
    vColor *= 1.0 - bannerOffset1 * 0.5 + bannerOffset2 * 7.0 * isBanner;
    vertex.xyz += hashVector * 0.03 * isBanner;

    // Foliage
    float isFoliage = normal.x;
    vertex.x += (wind3 * 0.3 + wind1 * 0.5) * windIntensity * isFoliage * 0.3;
    vertex.z += (wind4 * 0.03) * windIntensity * isFoliage;

    gl_Position = projectionMatrix * modelViewMatrix * vertex;

    gl_PointSize = size;

    // Fade
    vColor *= min(u_time * 0.5, 1.0);
  }
`,Xe=`
  #include <common>
  #include <color_pars_fragment>

  void main() {
    float u = 2.0 * gl_PointCoord.x - 1.0;
    float v = 2.0 * gl_PointCoord.y - 1.0;
    float cc = u*u + v*v;
    if(cc > 1.0){
      discard;
    }

    gl_FragColor = vec4( vColor, 1.0 );

    #include <colorspace_fragment>
  }
`,Ke=F({__name:"SplashCloud",props:{url:{},active:{type:Boolean}},async setup(V){let o,P;const{lowPerformanceDevice:l,isMacIntel:c}=B(ee()),u=V;let I=0,g=0,S=0,k=!1;c.value=([o,P]=ge(()=>we()),o=await o,P(),o);const d=new ye,z=c.value?new be({antialias:!0,powerPreference:"high-performance"}):new ke({antialias:!0,powerPreference:"high-performance"}),m=new ze(50,window.innerWidth/window.innerHeight,.1,1e3),T=new Re;let s,p;const i=new Ce;let n=new ae,w=new ae,M=!0;const y=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);Pe(()=>{G()});function G(){var t;z.outputColorSpace=Ie,R(),(t=document.querySelector("#splash-cloud"))==null||t.appendChild(z.domElement),E(),U()}function U(){i.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.7/"),i.preload(),i.load(u.url,function(t){W(),s=new $e(t,new Me({vertexColors:!0})),X(),i.dispose()},function(t){},function(t){console.error("An error happened while loading:"+t)})}function X(){d.add(s),s.rotateX(-Math.PI/2),s.position.set(0,0,0),p=s.material,p.size=2.5,y&&(p.size*=.5),p.sizeAttenuation=!1,p.onBeforeCompile=function(t){t.uniforms.u_time={value:0},p.userData.uniforms=t.uniforms,t.vertexShader=Ue,t.fragmentShader=Xe,T.start()}}function K(t){S<100?(S+=1,1e3/t<50&&(g+=1)):k||(k=!0,g>=50&&(l.value=!0),R())}function W(t){if(requestAnimationFrame(W),t&&I&&K(t-I),!M)return;w.lerp(n,.03),y&&w.set(0,-.5);let f=T.getElapsedTime();if(s){p.userData.uniforms&&(p.userData.uniforms.u_time.value=f),s.rotation.set(-Math.PI/2,0,_(m.aspect,.5,2,-Math.PI*.2,0));const Y=_(w.y,-1,1,Math.PI*.2,0),N=_(w.x,-1,1,-Math.PI*.13,Math.PI*.05);s.rotation.x+=Y,s.rotation.z+=N,s.rotation.x+=Math.sin(f*.2)*.1,s.rotation.z+=Math.sin(f*.2+1.5)*.05}z.render(d,m),I=t}function R(){z.setSize(window.innerWidth,window.innerHeight);let t=y?Math.min(window.devicePixelRatio,2):1;k&&(l.value||c.value?t=1:t=Math.min(window.devicePixelRatio,2)),z.setPixelRatio(t);const f=window.innerWidth/window.innerHeight;m.aspect=f,m.position.set(0,0,_(f,.5,2,12,9)),m.fov=_(f,.5,2,60,50),m.updateProjectionMatrix(),z.render(d,m)}function O(t){n.x=t.clientX/window.innerWidth*2-1,n.y=-(t.clientY/window.innerHeight)*2+1,w||(w=n.clone())}function C(){M=!1,window.removeEventListener("resize",R),window.removeEventListener("mousemove",O)}function E(){M=!0,window.addEventListener("resize",R),window.addEventListener("mousemove",O)}Se(()=>{u.active?E():C()});function _(t,f,Y,N,me){return N+(me-N)*((t-f)/(Y-f))}return(t,f)=>($(),D("div",Ge))}}),Ye={id:"splash"},Je=["src"],Ze={class:"exhibition-title"},Qe={class:"hint typo-button"},et=F({__name:"Splash",setup(V){const o=te("exhibitions","the-end-of-aging"),{isLoading:P,computedProgress:l,entered:c}=B(Ee()),u=Le();async function I(){await u.value.play(),l.value===0&&await L(o.rooms[0].url.current),u.value.remove(),re(l,d=>{d===1&&(c.value=!0)},{immediate:!0})}const g=oe(),S=q(()=>ne()(g)),k=q(()=>(S.value!=="slug"||!g.params.slug)&&!c.value);return(d,z)=>{const m=We,T=Ke,s=de,p=Q,i=Z,n=H("self"),w=H("pad"),M=H("lay");return v(($(),D("div",Ye,[v(A("audio",{src:"silence"in d?d.silence:e(Be),ref_key:"audio",ref:u,loop:"true","x-webkit-airplay":"deny",controls:"false",disableRemotePlayback:"true",preload:"auto"},null,8,Je),[[h,!1]]),a(J,{name:"fade"},{default:r(()=>{var y;return[(y=e(o).splash)!=null&&y.url?v(($(),se(m,De({key:0},e(o).splash,{lazy:!1,theme:"cover"}),null,16)),[[h,e(P)||e(l)>0]]):ie("",!0)]}),_:1}),a(s,null,{default:r(()=>[a(J,{name:"fade"},{default:r(()=>{var y;return[(y=e(o).splashCloud)!=null&&y.high?($(),se(T,{key:0,url:e(o).splashCloud.high.url,active:e(k)},null,8,["url","active"])):ie("",!0)]}),_:1})]),_:1}),v(($(),D("div",{class:"intro flex",onClick:I},[A("div",Ze,[a(p,{theme:"boxed",background:"yellow",tag:"h2",typo:"button"},{default:r(()=>[b(x(e(o).title),1)]),_:1})]),a(i,{theme:"button",background:"progress",icon:{name:"arrow"},progress:e(l)*100,disabled:e(l)>0&&e(l)<1},{default:r(()=>[b(x(d.$t(`${e(o).slug}_cta`)),1)]),_:1},8,["progress","disabled"])])),[[n,["center",d.$mq.s?"center":"start"]],[w,"s"]]),a(J,{name:"fade"},{default:r(()=>[v(($(),D("div",Qe,[A("div",null,x(d.$t("hint")),1)])),[[n,["end"]],[w,"s"],[h,e(l)>0],[M,{align:"center"}]])]),_:1})])),[[M,{dir:"o"}],[h,e(k)]])}}}),tt=F({__name:"default",setup(V){const{onUi:o}=B(le()),{transitioning:P}=B(ee()),{idle:l}=Te(2e3),c=oe(),u=q(()=>ne()(c));return(I,g)=>{const S=Ne,k=de,d=qe,z=et,m=H("pad");return $(),D("div",{id:"default-layout",class:ce([e(u),{hidden:e(l)&&!e(o)&&e(u)!=="slug"||e(P)}])},[a(k,null,{default:r(()=>[v(a(S,null,null,512),[[m,{top:"s"}]])]),_:1}),v(a(d,null,null,512),[[h,e(u)==="slug"],[m,"s"]]),a(z),Ve(I.$slots,"default",{},void 0)],2)}}}),it=ue(tt,[["__scopeId","data-v-74689a6b"]]);export{it as default};
