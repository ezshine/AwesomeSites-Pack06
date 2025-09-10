(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="164",Au=0,Xo=1,fu=2,Kc=1,pu=2,Oi=3,Xi=0,ti=1,qt=2,Vi=0,ts=1,Gs=2,Yo=3,Ko=4,mu=5,yn=100,gu=101,Eu=102,vu=103,xu=104,yu=200,Cu=201,_u=202,Mu=203,Ao=204,fo=205,Iu=206,Su=207,wu=208,Tu=209,bu=210,Bu=211,Ru=212,Du=213,Pu=214,Lu=0,Nu=1,Uu=2,jr=3,Fu=4,Ou=5,Qu=6,ku=7,Jc=0,Gu=1,zu=2,ln=0,Hu=1,Vu=2,Wu=3,qu=4,Xu=5,jc=6,Yu=7,Jo="attached",Ku="detached",Zc=300,Mn=301,rs=302,as=303,po=304,aa=306,os=1e3,vi=1001,Zr=1002,Qt=1003,$c=1004,Ps=1005,Et=1006,Wr=1007,si=1008,Rt=1009,Ju=1010,ju=1011,eh=1012,th=1013,ls=1014,kt=1015,Ft=1016,ih=1017,nh=1018,Xs=1020,Zu=35902,$u=1021,ed=1022,Bt=1023,td=1024,id=1025,is=1026,zs=1027,an=1028,sh=1029,Zn=1030,rh=1031,ah=1033,pa=33776,qr=33777,ma=33778,Xr=33779,mo=35840,jo=35841,go=35842,Zo=35843,Eo=36196,vo=37492,xo=37496,yo=37808,$o=37809,el=37810,tl=37811,$r=37812,il=37813,nl=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,hl=37821,Yr=36492,ul=36494,dl=36495,nd=36283,Al=36284,fl=36285,pl=36286,Hs=2300,cs=2301,ga=2302,ml=2400,gl=2401,El=2402,sd=2500,rd=0,oh=1,Co=2,ad=3200,od=3201,lh=0,ld=1,mi="",dt="srgb",wt="srgb-linear",oa="display-p3",Ys="display-p3-linear",ea="linear",xt="srgb",ta="rec709",ia="p3",Tn=7680,vl=519,cd=512,hd=513,ud=514,ch=515,dd=516,Ad=517,fd=518,pd=519,_o=35044,xl="300 es",Gi=2e3,na=2001;class Sn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,a=n.length;s<a;s++)n[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let yl=1234567;const Ns=Math.PI/180,hs=180/Math.PI;function xi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[r&255]+Vt[r>>8&255]+Vt[r>>16&255]+Vt[r>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function Dt(r,e,t){return Math.max(e,Math.min(t,r))}function Do(r,e){return(r%e+e)%e}function md(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function gd(r,e,t){return r!==e?(t-r)/(e-r):0}function Us(r,e,t){return(1-t)*r+t*e}function Ed(r,e,t,i){return Us(r,e,1-Math.exp(-t*i))}function vd(r,e=1){return e-Math.abs(Do(r,e*2)-e)}function xd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function yd(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Cd(r,e){return r+Math.floor(Math.random()*(e-r+1))}function _d(r,e){return r+Math.random()*(e-r)}function Md(r){return r*(.5-Math.random())}function Id(r){r!==void 0&&(yl=r);let e=yl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sd(r){return r*Ns}function wd(r){return r*hs}function Td(r){return(r&r-1)===0&&r!==0}function bd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Bd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Rd(r,e,t,i,n){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+i)/2),h=a((e+i)/2),u=s((e-i)/2),d=a((e-i)/2),A=s((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":r.set(o*h,l*u,l*d,o*c);break;case"YZY":r.set(l*d,o*h,l*u,o*c);break;case"ZXZ":r.set(l*u,l*d,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*A,o*c);break;case"YXY":r.set(l*A,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*A,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function gi(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function At(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const zi={DEG2RAD:Ns,RAD2DEG:hs,generateUUID:xi,clamp:Dt,euclideanModulo:Do,mapLinear:md,inverseLerp:gd,lerp:Us,damp:Ed,pingpong:vd,smoothstep:xd,smootherstep:yd,randInt:Cd,randFloat:_d,randFloatSpread:Md,seededRandom:Id,degToRad:Sd,radToDeg:wd,isPowerOfTwo:Td,ceilPowerOfTwo:bd,floorPowerOfTwo:Bd,setQuaternionFromProperEuler:Rd,normalize:At,denormalize:gi};class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*n+e.x,this.y=s*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,i,n,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c)}set(e,t,i,n,s,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],A=i[5],g=i[8],E=n[0],p=n[3],m=n[6],C=n[1],x=n[4],I=n[7],L=n[2],b=n[5],B=n[8];return s[0]=a*E+o*C+l*L,s[3]=a*p+o*x+l*b,s[6]=a*m+o*I+l*B,s[1]=c*E+h*C+u*L,s[4]=c*p+h*x+u*b,s[7]=c*m+h*I+u*B,s[2]=d*E+A*C+g*L,s[5]=d*p+A*x+g*b,s[8]=d*m+A*I+g*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+n*s*c-n*a*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*s,A=c*s-a*l,g=t*u+i*d+n*A;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/g;return e[0]=u*E,e[1]=(n*c-h*i)*E,e[2]=(o*i-n*a)*E,e[3]=d*E,e[4]=(h*t-n*l)*E,e[5]=(n*s-o*t)*E,e[6]=A*E,e[7]=(i*l-c*t)*E,e[8]=(a*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ea.makeScale(e,t)),this}rotate(e){return this.premultiply(Ea.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ea.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ea=new We;function hh(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Vs(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dd(){const r=Vs("canvas");return r.style.display="block",r}const Cl={};function uh(r){r in Cl||(Cl[r]=!0,console.warn(r))}const _l=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ml=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),cr={[wt]:{transfer:ea,primaries:ta,toReference:r=>r,fromReference:r=>r},[dt]:{transfer:xt,primaries:ta,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Ys]:{transfer:ea,primaries:ia,toReference:r=>r.applyMatrix3(Ml),fromReference:r=>r.applyMatrix3(_l)},[oa]:{transfer:xt,primaries:ia,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ml),fromReference:r=>r.applyMatrix3(_l).convertLinearToSRGB()}},Pd=new Set([wt,Ys]),ut={enabled:!0,_workingColorSpace:wt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Pd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=cr[e].toReference,n=cr[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return cr[r].primaries},getTransfer:function(r){return r===mi?ea:cr[r].transfer}};function ns(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function va(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let bn;class Ld{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bn===void 0&&(bn=Vs("canvas")),bn.width=e.width,bn.height=e.height;const i=bn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let a=0;a<s.length;a++)s[a]=ns(s[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ns(t[i]/255)*255):t[i]=ns(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Nd=0;class dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=xi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?s.push(xa(n[a].image)):s.push(xa(n[a]))}else s=xa(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function xa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Ld.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ud=0;class It extends Sn{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,i=vi,n=vi,s=Et,a=si,o=Bt,l=Rt,c=It.DEFAULT_ANISOTROPY,h=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=xi(),this.name="",this.source=new dh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case os:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case os:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=Zc;It.DEFAULT_ANISOTROPY=1;class pt{constructor(e=0,t=0,i=0,n=1){pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],A=l[5],g=l[9],E=l[2],p=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-E)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+E)<.1&&Math.abs(g+p)<.1&&Math.abs(c+A+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,I=(A+1)/2,L=(m+1)/2,b=(h+d)/4,B=(u+E)/4,G=(g+p)/4;return x>I&&x>L?x<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(x),n=b/i,s=B/i):I>L?I<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(I),i=b/n,s=G/n):L<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(L),i=B/s,n=G/s),this.set(i,n,s,t),this}let C=Math.sqrt((p-g)*(p-g)+(u-E)*(u-E)+(d-h)*(d-h));return Math.abs(C)<.001&&(C=1),this.x=(p-g)/C,this.y=(u-E)/C,this.z=(d-h)/C,this.w=Math.acos((c+A+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fd extends Sn{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new It(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,s=this.textures.length;n<s;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jt extends Fd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ah extends It{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fh extends It{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Qt,this.minFilter=Qt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,a,o){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[a+0],A=s[a+1],g=s[a+2],E=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=A,e[t+2]=g,e[t+3]=E;return}if(u!==E||l!==d||c!==A||h!==g){let p=1-o;const m=l*d+c*A+h*g+u*E,C=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const L=Math.sqrt(x),b=Math.atan2(L,m*C);p=Math.sin(p*b)/L,o=Math.sin(o*b)/L}const I=o*C;if(l=l*p+d*I,c=c*p+A*I,h=h*p+g*I,u=u*p+E*I,p===1-o){const L=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=L,c*=L,h*=L,u*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,a){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[a],d=s[a+1],A=s[a+2],g=s[a+3];return e[t]=o*g+h*u+l*A-c*d,e[t+1]=l*g+h*d+c*u-o*A,e[t+2]=c*g+h*A+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),u=o(s/2),d=l(i/2),A=l(n/2),g=l(s/2);switch(a){case"XYZ":this._x=d*h*u+c*A*g,this._y=c*A*u-d*h*g,this._z=c*h*g+d*A*u,this._w=c*h*u-d*A*g;break;case"YXZ":this._x=d*h*u+c*A*g,this._y=c*A*u-d*h*g,this._z=c*h*g-d*A*u,this._w=c*h*u+d*A*g;break;case"ZXY":this._x=d*h*u-c*A*g,this._y=c*A*u+d*h*g,this._z=c*h*g+d*A*u,this._w=c*h*u-d*A*g;break;case"ZYX":this._x=d*h*u-c*A*g,this._y=c*A*u+d*h*g,this._z=c*h*g-d*A*u,this._w=c*h*u+d*A*g;break;case"YZX":this._x=d*h*u+c*A*g,this._y=c*A*u+d*h*g,this._z=c*h*g-d*A*u,this._w=c*h*u-d*A*g;break;case"XZY":this._x=d*h*u-c*A*g,this._y=c*A*u-d*h*g,this._z=c*h*g+d*A*u,this._w=c*h*u+d*A*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){const A=.5/Math.sqrt(d+1);this._w=.25/A,this._x=(h-l)*A,this._y=(s-c)*A,this._z=(a-n)*A}else if(i>o&&i>u){const A=2*Math.sqrt(1+i-o-u);this._w=(h-l)/A,this._x=.25*A,this._y=(n+a)/A,this._z=(s+c)/A}else if(o>u){const A=2*Math.sqrt(1+o-i-u);this._w=(s-c)/A,this._x=(n+a)/A,this._y=.25*A,this._z=(l+h)/A}else{const A=2*Math.sqrt(1+u-i-o);this._w=(a-n)/A,this._x=(s+c)/A,this._y=(l+h)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+n*c-s*l,this._y=n*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-n*o,this._w=a*h-i*o-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+n*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=n,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const A=1-t;return this._w=A*a+t*this._w,this._x=A*i+t*this._x,this._y=A*n+t*this._y,this._z=A*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class M{constructor(e=0,t=0,i=0){M.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*i),h=2*(o*t-s*n),u=2*(s*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-s*u,this.z=n+l*u+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-s*o,this.y=s*a-i*l,this.z=i*o-n*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ya.copy(this).projectOnVector(e),this.sub(ya)}reflect(e){return this.sub(ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ya=new M,Il=new lt;class ri{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hi):hi.fromBufferAttribute(s,a),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),hr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hr.copy(i.boundingBox)),hr.applyMatrix4(e.matrixWorld),this.union(hr)}const n=e.children;for(let s=0,a=n.length;s<a;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(xs),ur.subVectors(this.max,xs),Bn.subVectors(e.a,xs),Rn.subVectors(e.b,xs),Dn.subVectors(e.c,xs),Ki.subVectors(Rn,Bn),Ji.subVectors(Dn,Rn),hn.subVectors(Bn,Dn);let t=[0,-Ki.z,Ki.y,0,-Ji.z,Ji.y,0,-hn.z,hn.y,Ki.z,0,-Ki.x,Ji.z,0,-Ji.x,hn.z,0,-hn.x,-Ki.y,Ki.x,0,-Ji.y,Ji.x,0,-hn.y,hn.x,0];return!Ca(t,Bn,Rn,Dn,ur)||(t=[1,0,0,0,1,0,0,0,1],!Ca(t,Bn,Rn,Dn,ur))?!1:(dr.crossVectors(Ki,Ji),t=[dr.x,dr.y,dr.z],Ca(t,Bn,Rn,Dn,ur))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new M,new M,new M,new M,new M,new M,new M,new M],hi=new M,hr=new ri,Bn=new M,Rn=new M,Dn=new M,Ki=new M,Ji=new M,hn=new M,xs=new M,ur=new M,dr=new M,un=new M;function Ca(r,e,t,i,n){for(let s=0,a=r.length-3;s<=a;s+=3){un.fromArray(r,s);const o=n.x*Math.abs(un.x)+n.y*Math.abs(un.y)+n.z*Math.abs(un.z),l=e.dot(un),c=t.dot(un),h=i.dot(un);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Od=new ri,ys=new M,_a=new M;class _i{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Od.setFromPoints(e).getCenter(i);let n=0;for(let s=0,a=e.length;s<a;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(ys,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(_a)),this.expandByPoint(ys.copy(e.center).sub(_a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pi=new M,Ma=new M,Ar=new M,ji=new M,Ia=new M,fr=new M,Sa=new M;class Ks{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pi.copy(this.origin).addScaledVector(this.direction,t),Pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ma.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),ji.copy(this.origin).sub(Ma);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ar),o=ji.dot(this.direction),l=-ji.dot(Ar),c=ji.lengthSq(),h=Math.abs(1-a*a);let u,d,A,g;if(h>0)if(u=a*l-o,d=a*o-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const E=1/h;u*=E,d*=E,A=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=s,u=Math.max(0,-(a*d+o)),A=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(a*d+o)),A=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*s+o)),d=u>0?-s:Math.min(Math.max(-s,-l),s),A=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),A=d*(d+2*l)+c):(u=Math.max(0,-(a*s+o)),d=u>0?s:Math.min(Math.max(-s,-l),s),A=-u*u+d*(d+2*l)+c);else d=a>0?-s:s,u=Math.max(0,-(a*d+o)),A=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(Ma).addScaledVector(Ar,d),A}intersectSphere(e,t){Pi.subVectors(e.center,this.origin);const i=Pi.dot(this.direction),n=Pi.dot(Pi)-i*i,s=e.radius*e.radius;if(n>s)return null;const a=Math.sqrt(s-n),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>n||((s>i||isNaN(i))&&(i=s),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Pi)!==null}intersectTriangle(e,t,i,n,s){Ia.subVectors(t,e),fr.subVectors(i,e),Sa.crossVectors(Ia,fr);let a=this.direction.dot(Sa),o;if(a>0){if(n)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ji.subVectors(this.origin,e);const l=o*this.direction.dot(fr.crossVectors(ji,fr));if(l<0)return null;const c=o*this.direction.dot(Ia.cross(ji));if(c<0||l+c>a)return null;const h=-o*ji.dot(Sa);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,i,n,s,a,o,l,c,h,u,d,A,g,E,p){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,s,a,o,l,c,h,u,d,A,g,E,p)}set(e,t,i,n,s,a,o,l,c,h,u,d,A,g,E,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=A,m[7]=g,m[11]=E,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Pn.setFromMatrixColumn(e,0).length(),s=1/Pn.setFromMatrixColumn(e,1).length(),a=1/Pn.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=a*h,A=a*u,g=o*h,E=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=A+g*c,t[5]=d-E*c,t[9]=-o*l,t[2]=E-d*c,t[6]=g+A*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,A=l*u,g=c*h,E=c*u;t[0]=d+E*o,t[4]=g*o-A,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=A*o-g,t[6]=E+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,A=l*u,g=c*h,E=c*u;t[0]=d-E*o,t[4]=-a*u,t[8]=g+A*o,t[1]=A+g*o,t[5]=a*h,t[9]=E-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,A=a*u,g=o*h,E=o*u;t[0]=l*h,t[4]=g*c-A,t[8]=d*c+E,t[1]=l*u,t[5]=E*c+d,t[9]=A*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,A=a*c,g=o*l,E=o*c;t[0]=l*h,t[4]=E-d*u,t[8]=g*u+A,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=A*u+g,t[10]=d-E*u}else if(e.order==="XZY"){const d=a*l,A=a*c,g=o*l,E=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+E,t[5]=a*h,t[9]=A*u-g,t[2]=g*u-A,t[6]=o*h,t[10]=E*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Qd,e,kd)}lookAt(e,t,i){const n=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Zi.crossVectors(i,ii),Zi.lengthSq()===0&&(Math.abs(i.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Zi.crossVectors(i,ii)),Zi.normalize(),pr.crossVectors(ii,Zi),n[0]=Zi.x,n[4]=pr.x,n[8]=ii.x,n[1]=Zi.y,n[5]=pr.y,n[9]=ii.y,n[2]=Zi.z,n[6]=pr.z,n[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],A=i[13],g=i[2],E=i[6],p=i[10],m=i[14],C=i[3],x=i[7],I=i[11],L=i[15],b=n[0],B=n[4],G=n[8],S=n[12],y=n[1],O=n[5],X=n[9],P=n[13],j=n[2],K=n[6],oe=n[10],ie=n[14],V=n[3],le=n[7],re=n[11],Te=n[15];return s[0]=a*b+o*y+l*j+c*V,s[4]=a*B+o*O+l*K+c*le,s[8]=a*G+o*X+l*oe+c*re,s[12]=a*S+o*P+l*ie+c*Te,s[1]=h*b+u*y+d*j+A*V,s[5]=h*B+u*O+d*K+A*le,s[9]=h*G+u*X+d*oe+A*re,s[13]=h*S+u*P+d*ie+A*Te,s[2]=g*b+E*y+p*j+m*V,s[6]=g*B+E*O+p*K+m*le,s[10]=g*G+E*X+p*oe+m*re,s[14]=g*S+E*P+p*ie+m*Te,s[3]=C*b+x*y+I*j+L*V,s[7]=C*B+x*O+I*K+L*le,s[11]=C*G+x*X+I*oe+L*re,s[15]=C*S+x*P+I*ie+L*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],A=e[14],g=e[3],E=e[7],p=e[11],m=e[15];return g*(+s*l*u-n*c*u-s*o*d+i*c*d+n*o*A-i*l*A)+E*(+t*l*A-t*c*d+s*a*d-n*a*A+n*c*h-s*l*h)+p*(+t*c*u-t*o*A-s*a*u+i*a*A+s*o*h-i*c*h)+m*(-n*o*h-t*l*u+t*o*d+n*a*u-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],A=e[11],g=e[12],E=e[13],p=e[14],m=e[15],C=u*p*c-E*d*c+E*l*A-o*p*A-u*l*m+o*d*m,x=g*d*c-h*p*c-g*l*A+a*p*A+h*l*m-a*d*m,I=h*E*c-g*u*c+g*o*A-a*E*A-h*o*m+a*u*m,L=g*u*l-h*E*l-g*o*d+a*E*d+h*o*p-a*u*p,b=t*C+i*x+n*I+s*L;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/b;return e[0]=C*B,e[1]=(E*d*s-u*p*s-E*n*A+i*p*A+u*n*m-i*d*m)*B,e[2]=(o*p*s-E*l*s+E*n*c-i*p*c-o*n*m+i*l*m)*B,e[3]=(u*l*s-o*d*s-u*n*c+i*d*c+o*n*A-i*l*A)*B,e[4]=x*B,e[5]=(h*p*s-g*d*s+g*n*A-t*p*A-h*n*m+t*d*m)*B,e[6]=(g*l*s-a*p*s-g*n*c+t*p*c+a*n*m-t*l*m)*B,e[7]=(a*d*s-h*l*s+h*n*c-t*d*c-a*n*A+t*l*A)*B,e[8]=I*B,e[9]=(g*u*s-h*E*s-g*i*A+t*E*A+h*i*m-t*u*m)*B,e[10]=(a*E*s-g*o*s+g*i*c-t*E*c-a*i*m+t*o*m)*B,e[11]=(h*o*s-a*u*s-h*i*c+t*u*c+a*i*A-t*o*A)*B,e[12]=L*B,e[13]=(h*E*n-g*u*n+g*i*d-t*E*d-h*i*p+t*u*p)*B,e[14]=(g*o*n-a*E*n-g*i*l+t*E*l+a*i*p-t*o*p)*B,e[15]=(a*u*n-h*o*n+h*i*l-t*u*l-a*i*d+t*o*d)*B,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*a,0,c*l-n*o,h*l+n*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,a){return this.set(1,i,s,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,u=o+o,d=s*c,A=s*h,g=s*u,E=a*h,p=a*u,m=o*u,C=l*c,x=l*h,I=l*u,L=i.x,b=i.y,B=i.z;return n[0]=(1-(E+m))*L,n[1]=(A+I)*L,n[2]=(g-x)*L,n[3]=0,n[4]=(A-I)*b,n[5]=(1-(d+m))*b,n[6]=(p+C)*b,n[7]=0,n[8]=(g+x)*B,n[9]=(p-C)*B,n[10]=(1-(d+E))*B,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Pn.set(n[0],n[1],n[2]).length();const a=Pn.set(n[4],n[5],n[6]).length(),o=Pn.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],ui.copy(this);const c=1/s,h=1/a,u=1/o;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=u,ui.elements[9]*=u,ui.elements[10]*=u,t.setFromRotationMatrix(ui),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,n,s,a,o=Gi){const l=this.elements,c=2*s/(t-e),h=2*s/(i-n),u=(t+e)/(t-e),d=(i+n)/(i-n);let A,g;if(o===Gi)A=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===na)A=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=A,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,a,o=Gi){const l=this.elements,c=1/(t-e),h=1/(i-n),u=1/(a-s),d=(t+e)*c,A=(i+n)*h;let g,E;if(o===Gi)g=(a+s)*u,E=-2*u;else if(o===na)g=s*u,E=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-A,l[2]=0,l[6]=0,l[10]=E,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pn=new M,ui=new Le,Qd=new M(0,0,0),kd=new M(1,1,1),Zi=new M,pr=new M,ii=new M,Sl=new Le,wl=new lt;class Zt{constructor(e=0,t=0,i=0,n=Zt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],A=n[10];switch(t){case"XYZ":this._y=Math.asin(Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,A),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,A),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,A),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,A),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Dt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(o,A));break;case"XZY":this._z=Math.asin(-Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Sl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sl,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wl.setFromEuler(this),this.setFromQuaternion(wl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zt.DEFAULT_ORDER="XYZ";class Po{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gd=0;const Tl=new M,Ln=new lt,Li=new Le,mr=new M,Cs=new M,zd=new M,Hd=new lt,bl=new M(1,0,0),Bl=new M(0,1,0),Rl=new M(0,0,1),Dl={type:"added"},Vd={type:"removed"},Nn={type:"childadded",child:null},wa={type:"childremoved",child:null};class Ye extends Sn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=xi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ye.DEFAULT_UP.clone();const e=new M,t=new Zt,i=new lt,n=new M(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Le},normalMatrix:{value:new We}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=Ye.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ln.setFromAxisAngle(e,t),this.quaternion.multiply(Ln),this}rotateOnWorldAxis(e,t){return Ln.setFromAxisAngle(e,t),this.quaternion.premultiply(Ln),this}rotateX(e){return this.rotateOnAxis(bl,e)}rotateY(e){return this.rotateOnAxis(Bl,e)}rotateZ(e){return this.rotateOnAxis(Rl,e)}translateOnAxis(e,t){return Tl.copy(e).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bl,e)}translateY(e){return this.translateOnAxis(Bl,e)}translateZ(e){return this.translateOnAxis(Rl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?mr.copy(e):mr.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(Cs,mr,this.up):Li.lookAt(mr,Cs,this.up),this.quaternion.setFromRotationMatrix(Li),n&&(Li.extractRotation(n.matrixWorld),Ln.setFromRotationMatrix(Li),this.quaternion.premultiply(Ln.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dl),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Vd),wa.child=e,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dl),Nn.child=e,this.dispatchEvent(Nn),Nn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,a=n.length;s<a;s++){const o=n[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxGeometryCount=this._maxGeometryCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));n.material=o}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),A=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),A.length>0&&(i.animations=A),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}Ye.DEFAULT_UP=new M(0,1,0);Ye.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ye.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new M,Ni=new M,Ta=new M,Ui=new M,Un=new M,Fn=new M,Pl=new M,ba=new M,Ba=new M,Ra=new M;class Ei{constructor(e=new M,t=new M,i=new M){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),di.subVectors(e,t),n.cross(di);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){di.subVectors(n,t),Ni.subVectors(i,t),Ta.subVectors(e,t);const a=di.dot(di),o=di.dot(Ni),l=di.dot(Ta),c=Ni.dot(Ni),h=Ni.dot(Ta),u=a*c-o*o;if(u===0)return s.set(0,0,0),null;const d=1/u,A=(c*l-o*h)*d,g=(a*h-o*l)*d;return s.set(1-A-g,g,A)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,i,n,s,a,o,l){return this.getBarycoord(e,t,i,n,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ui.x),l.addScaledVector(a,Ui.y),l.addScaledVector(o,Ui.z),l)}static isFrontFacing(e,t,i,n){return di.subVectors(i,t),Ni.subVectors(e,t),di.cross(Ni).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),di.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ei.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ei.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,s){return Ei.getInterpolation(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Ei.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ei.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let a,o;Un.subVectors(n,i),Fn.subVectors(s,i),ba.subVectors(e,i);const l=Un.dot(ba),c=Fn.dot(ba);if(l<=0&&c<=0)return t.copy(i);Ba.subVectors(e,n);const h=Un.dot(Ba),u=Fn.dot(Ba);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Un,a);Ra.subVectors(e,s);const A=Un.dot(Ra),g=Fn.dot(Ra);if(g>=0&&A<=g)return t.copy(s);const E=A*c-l*g;if(E<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Fn,o);const p=h*g-A*u;if(p<=0&&u-h>=0&&A-g>=0)return Pl.subVectors(s,n),o=(u-h)/(u-h+(A-g)),t.copy(n).addScaledVector(Pl,o);const m=1/(p+E+d);return a=E*m,o=d*m,t.copy(i).addScaledVector(Un,a).addScaledVector(Fn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$i={h:0,s:0,l:0},gr={h:0,s:0,l:0};function Da(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class we{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=ut.workingColorSpace){if(e=Do(e,1),t=Dt(t,0,1),i=Dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Da(a,s,e+1/3),this.g=Da(a,s,e),this.b=Da(a,s,e-1/3)}return ut.toWorkingColorSpace(this,n),this}setStyle(e,t=dt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dt){const i=ph[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ns(e.r),this.g=ns(e.g),this.b=ns(e.b),this}copyLinearToSRGB(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dt){return ut.fromWorkingColorSpace(Wt.copy(this),e),Math.round(Dt(Wt.r*255,0,255))*65536+Math.round(Dt(Wt.g*255,0,255))*256+Math.round(Dt(Wt.b*255,0,255))}getHexString(e=dt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(Wt.copy(this),t);const i=Wt.r,n=Wt.g,s=Wt.b,a=Math.max(i,n,s),o=Math.min(i,n,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=dt){ut.fromWorkingColorSpace(Wt.copy(this),e);const t=Wt.r,i=Wt.g,n=Wt.b;return e!==dt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL($i),this.setHSL($i.h+e,$i.s+t,$i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL($i),e.getHSL(gr);const i=Us($i.h,gr.h,t),n=Us($i.s,gr.s,t),s=Us($i.l,gr.l,t);return this.setHSL(i,n,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*n,this.g=s[1]*t+s[4]*i+s[7]*n,this.b=s[2]*t+s[5]*i+s[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wt=new we;we.NAMES=ph;let Wd=0;class yi extends Sn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=xi(),this.name="",this.type="Material",this.blending=ts,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ao,this.blendDst=fo,this.blendEquation=yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new we(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tn,this.stencilZFail=Tn,this.stencilZPass=Tn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ts&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ao&&(i.blendSrc=this.blendSrc),this.blendDst!==fo&&(i.blendDst=this.blendDst),this.blendEquation!==yn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tn&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Tn&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Tn&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=n(e.textures),a=n(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ei extends yi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new we(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.combine=Jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ki=qd();function qd(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:a,offsetTable:o}}function Xd(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=Dt(r,-65504,65504),ki.floatView[0]=r;const e=ki.uint32View[0],t=e>>23&511;return ki.baseTable[t]+((e&8388607)>>ki.shiftTable[t])}function Yd(r){const e=r>>10;return ki.uint32View[0]=ki.mantissaTable[ki.offsetTable[e]+(r&1023)]+ki.exponentTable[e],ki.floatView[0]}const Ll={toHalfFloat:Xd,fromHalfFloat:Yd},bt=new M,Er=new Ae;class Gt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return uh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),n=At(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=At(t,this.array),i=At(i,this.array),n=At(n,this.array),s=At(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_o&&(e.usage=this.usage),e}}class mh extends Gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gh extends Gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class zt extends Gt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Kd=0;const oi=new Le,Pa=new Ye,On=new M,ni=new ri,_s=new ri,Ut=new M;class $t extends Sn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=xi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hh(e)?gh:mh)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,i){return oi.makeTranslation(e,t,i),this.applyMatrix4(oi),this}scale(e,t,i){return oi.makeScale(e,t,i),this.applyMatrix4(oi),this}lookAt(e){return Pa.lookAt(e),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(On).negate(),this.translate(On.x,On.y,On.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];ni.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _i);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){const i=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_s.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(ni.min,_s.min),ni.expandByPoint(Ut),Ut.addVectors(ni.max,_s.max),ni.expandByPoint(Ut)):(ni.expandByPoint(_s.min),ni.expandByPoint(_s.max))}ni.getCenter(i);let n=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(Ut));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ut.fromBufferAttribute(o,c),l&&(On.fromBufferAttribute(e,c),Ut.add(On)),n=Math.max(n,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let G=0;G<i.count;G++)o[G]=new M,l[G]=new M;const c=new M,h=new M,u=new M,d=new Ae,A=new Ae,g=new Ae,E=new M,p=new M;function m(G,S,y){c.fromBufferAttribute(i,G),h.fromBufferAttribute(i,S),u.fromBufferAttribute(i,y),d.fromBufferAttribute(s,G),A.fromBufferAttribute(s,S),g.fromBufferAttribute(s,y),h.sub(c),u.sub(c),A.sub(d),g.sub(d);const O=1/(A.x*g.y-g.x*A.y);isFinite(O)&&(E.copy(h).multiplyScalar(g.y).addScaledVector(u,-A.y).multiplyScalar(O),p.copy(u).multiplyScalar(A.x).addScaledVector(h,-g.x).multiplyScalar(O),o[G].add(E),o[S].add(E),o[y].add(E),l[G].add(p),l[S].add(p),l[y].add(p))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let G=0,S=C.length;G<S;++G){const y=C[G],O=y.start,X=y.count;for(let P=O,j=O+X;P<j;P+=3)m(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const x=new M,I=new M,L=new M,b=new M;function B(G){L.fromBufferAttribute(n,G),b.copy(L);const S=o[G];x.copy(S),x.sub(L.multiplyScalar(L.dot(S))).normalize(),I.crossVectors(b,S);const O=I.dot(l[G])<0?-1:1;a.setXYZW(G,x.x,x.y,x.z,O)}for(let G=0,S=C.length;G<S;++G){const y=C[G],O=y.start,X=y.count;for(let P=O,j=O+X;P<j;P+=3)B(e.getX(P+0)),B(e.getX(P+1)),B(e.getX(P+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,A=i.count;d<A;d++)i.setXYZ(d,0,0,0);const n=new M,s=new M,a=new M,o=new M,l=new M,c=new M,h=new M,u=new M;if(e)for(let d=0,A=e.count;d<A;d+=3){const g=e.getX(d+0),E=e.getX(d+1),p=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,E),a.fromBufferAttribute(t,p),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(E,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,A=t.count;d<A;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let A=0,g=0;for(let E=0,p=l.length;E<p;E++){o.isInterleavedBufferAttribute?A=l[E]*o.data.stride+o.offset:A=l[E]*h;for(let m=0;m<h;m++)d[g++]=c[A++]}return new Gt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],A=e(d,i);l.push(A)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const A=c[u];h.push(A.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,A=u.length;d<A;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nl=new Le,dn=new Ks,vr=new _i,Ul=new M,Qn=new M,kn=new M,Gn=new M,La=new M,xr=new M,yr=new Ae,Cr=new Ae,_r=new Ae,Fl=new M,Ol=new M,Ql=new M,Mr=new M,Ir=new M;class Mt extends Ye{constructor(e=new $t,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(s&&o){xr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],u=s[l];h!==0&&(La.fromBufferAttribute(u,e),a?xr.addScaledVector(La,h):xr.addScaledVector(La.sub(t),h))}t.add(xr)}return t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vr.copy(i.boundingSphere),vr.applyMatrix4(s),dn.copy(e.ray).recast(e.near),!(vr.containsPoint(dn.origin)===!1&&(dn.intersectSphere(vr,Ul)===null||dn.origin.distanceToSquared(Ul)>(e.far-e.near)**2))&&(Nl.copy(s).invert(),dn.copy(e.ray).applyMatrix4(Nl),!(i.boundingBox!==null&&dn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,dn)))}_computeIntersections(e,t,i){let n;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,A=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,E=d.length;g<E;g++){const p=d[g],m=a[p.materialIndex],C=Math.max(p.start,A.start),x=Math.min(o.count,Math.min(p.start+p.count,A.start+A.count));for(let I=C,L=x;I<L;I+=3){const b=o.getX(I),B=o.getX(I+1),G=o.getX(I+2);n=Sr(this,m,e,i,c,h,u,b,B,G),n&&(n.faceIndex=Math.floor(I/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,A.start),E=Math.min(o.count,A.start+A.count);for(let p=g,m=E;p<m;p+=3){const C=o.getX(p),x=o.getX(p+1),I=o.getX(p+2);n=Sr(this,a,e,i,c,h,u,C,x,I),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,E=d.length;g<E;g++){const p=d[g],m=a[p.materialIndex],C=Math.max(p.start,A.start),x=Math.min(l.count,Math.min(p.start+p.count,A.start+A.count));for(let I=C,L=x;I<L;I+=3){const b=I,B=I+1,G=I+2;n=Sr(this,m,e,i,c,h,u,b,B,G),n&&(n.faceIndex=Math.floor(I/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,A.start),E=Math.min(l.count,A.start+A.count);for(let p=g,m=E;p<m;p+=3){const C=p,x=p+1,I=p+2;n=Sr(this,a,e,i,c,h,u,C,x,I),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function Jd(r,e,t,i,n,s,a,o){let l;if(e.side===ti?l=i.intersectTriangle(a,s,n,!0,o):l=i.intersectTriangle(n,s,a,e.side===Xi,o),l===null)return null;Ir.copy(o),Ir.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Ir);return c<t.near||c>t.far?null:{distance:c,point:Ir.clone(),object:r}}function Sr(r,e,t,i,n,s,a,o,l,c){r.getVertexPosition(o,Qn),r.getVertexPosition(l,kn),r.getVertexPosition(c,Gn);const h=Jd(r,e,t,i,Qn,kn,Gn,Mr);if(h){n&&(yr.fromBufferAttribute(n,o),Cr.fromBufferAttribute(n,l),_r.fromBufferAttribute(n,c),h.uv=Ei.getInterpolation(Mr,Qn,kn,Gn,yr,Cr,_r,new Ae)),s&&(yr.fromBufferAttribute(s,o),Cr.fromBufferAttribute(s,l),_r.fromBufferAttribute(s,c),h.uv1=Ei.getInterpolation(Mr,Qn,kn,Gn,yr,Cr,_r,new Ae)),a&&(Fl.fromBufferAttribute(a,o),Ol.fromBufferAttribute(a,l),Ql.fromBufferAttribute(a,c),h.normal=Ei.getInterpolation(Mr,Qn,kn,Gn,Fl,Ol,Ql,new M),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new M,materialIndex:0};Ei.getNormal(Qn,kn,Gn,u.normal),h.face=u}return h}class wi extends $t{constructor(e=1,t=1,i=1,n=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:a};const o=this;n=Math.floor(n),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,A=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new zt(c,3)),this.setAttribute("normal",new zt(h,3)),this.setAttribute("uv",new zt(u,2));function g(E,p,m,C,x,I,L,b,B,G,S){const y=I/B,O=L/G,X=I/2,P=L/2,j=b/2,K=B+1,oe=G+1;let ie=0,V=0;const le=new M;for(let re=0;re<oe;re++){const Te=re*O-P;for(let Ue=0;Ue<K;Ue++){const qe=Ue*y-X;le[E]=qe*C,le[p]=Te*x,le[m]=j,c.push(le.x,le.y,le.z),le[E]=0,le[p]=0,le[m]=b>0?1:-1,h.push(le.x,le.y,le.z),u.push(Ue/B),u.push(1-re/G),ie+=1}}for(let re=0;re<G;re++)for(let Te=0;Te<B;Te++){const Ue=d+Te+K*re,qe=d+Te+K*(re+1),J=d+(Te+1)+K*(re+1),fe=d+(Te+1)+K*re;l.push(Ue,qe,fe),l.push(qe,J,fe),V+=6}o.addGroup(A,V,S),A+=V,d+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function us(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Kt(r){const e={};for(let t=0;t<r.length;t++){const i=us(r[t]);for(const n in i)e[n]=i[n]}return e}function jd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Eh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const _n={clone:us,merge:Kt};var Zd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class St extends yi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=us(e.uniforms),this.uniformsGroups=jd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class vh extends Ye{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const en=new M,kl=new Ae,Gl=new Ae;class Jt extends vh{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){en.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(en.x,en.y).multiplyScalar(-e/en.z),en.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(en.x,en.y).multiplyScalar(-e/en.z)}getViewSize(e,t){return this.getViewBounds(e,kl,Gl),t.subVectors(Gl,kl)}setViewOffset(e,t,i,n,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*n/l,t-=a.offsetY*i/c,n*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const zn=-90,Hn=1;class eA extends Ye{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new Jt(zn,Hn,e,t);n.layers=this.layers,this.add(n);const s=new Jt(zn,Hn,e,t);s.layers=this.layers,this.add(s);const a=new Jt(zn,Hn,e,t);a.layers=this.layers,this.add(a);const o=new Jt(zn,Hn,e,t);o.layers=this.layers,this.add(o);const l=new Jt(zn,Hn,e,t);l.layers=this.layers,this.add(l);const c=new Jt(zn,Hn,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,s),e.setRenderTarget(i,1,n),e.render(t,a),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(u,d,A),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class xh extends It{constructor(e,t,i,n,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Mn,super(e,t,i,n,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tA extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new xh(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Et}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new wi(5,5,5),s=new St({name:"CubemapFromEquirect",uniforms:us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ti,blending:Vi});s.uniforms.tEquirect.value=t;const a=new Mt(n,s),o=t.minFilter;return t.minFilter===si&&(t.minFilter=Et),new eA(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(s)}}const Na=new M,iA=new M,nA=new We;class vn{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Na.subVectors(i,t).cross(iA.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Na),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||nA.getNormalMatrix(e),n=this.coplanarPoint(Na).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const An=new _i,wr=new M;class Js{constructor(e=new vn,t=new vn,i=new vn,n=new vn,s=new vn,a=new vn){this.planes=[e,t,i,n,s,a]}set(e,t,i,n,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gi){const i=this.planes,n=e.elements,s=n[0],a=n[1],o=n[2],l=n[3],c=n[4],h=n[5],u=n[6],d=n[7],A=n[8],g=n[9],E=n[10],p=n[11],m=n[12],C=n[13],x=n[14],I=n[15];if(i[0].setComponents(l-s,d-c,p-A,I-m).normalize(),i[1].setComponents(l+s,d+c,p+A,I+m).normalize(),i[2].setComponents(l+a,d+h,p+g,I+C).normalize(),i[3].setComponents(l-a,d-h,p-g,I-C).normalize(),i[4].setComponents(l-o,d-u,p-E,I-x).normalize(),t===Gi)i[5].setComponents(l+o,d+u,p+E,I+x).normalize();else if(t===na)i[5].setComponents(o,u,E,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),An.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),An.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(An)}intersectsSprite(e){return An.center.set(0,0,0),An.radius=.7071067811865476,An.applyMatrix4(e.matrixWorld),this.intersectsSphere(An)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(wr.x=n.normal.x>0?e.max.x:e.min.x,wr.y=n.normal.y>0?e.max.y:e.min.y,wr.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yh(){let r=null,e=!1,t=null,i=null;function n(s,a){t(s,a),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function sA(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),o.onUploadCallback();let A;if(c instanceof Float32Array)A=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?A=r.HALF_FLOAT:A=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)A=r.SHORT;else if(c instanceof Uint32Array)A=r.UNSIGNED_INT;else if(c instanceof Int32Array)A=r.INT;else if(c instanceof Int8Array)A=r.BYTE;else if(c instanceof Uint8Array)A=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)A=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:A,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(r.bindBuffer(c,o),u.count===-1&&d.length===0&&r.bufferSubData(c,0,h),d.length!==0){for(let A=0,g=d.length;A<g;A++){const E=d[A];r.bufferSubData(c,E.start*h.BYTES_PER_ELEMENT,h,E.start,E.count)}l.clearUpdateRanges()}u.count!==-1&&(r.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:s,update:a}}class js extends $t{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,u=e/o,d=t/l,A=[],g=[],E=[],p=[];for(let m=0;m<h;m++){const C=m*d-a;for(let x=0;x<c;x++){const I=x*u-s;g.push(I,-C,0),E.push(0,0,1),p.push(x/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let C=0;C<o;C++){const x=C+c*m,I=C+c*(m+1),L=C+1+c*(m+1),b=C+1+c*m;A.push(x,I,b),A.push(I,L,b)}this.setIndex(A),this.setAttribute("position",new zt(g,3)),this.setAttribute("normal",new zt(E,3)),this.setAttribute("uv",new zt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.widthSegments,e.heightSegments)}}var rA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AA=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,fA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,pA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,EA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_A=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,MA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,SA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,wA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,TA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,bA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,BA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,RA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,PA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NA="gl_FragColor = linearToOutputTexel( gl_FragColor );",UA=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,FA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,OA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,QA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,VA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,WA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,YA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,KA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ZA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$A=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,af=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,of=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Af=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ef=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,yf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,_f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,If=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ff=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Of=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,zf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Xf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$f=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ep=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ap=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Ap=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_p=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Mp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Sp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,wp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Np=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:rA,alphahash_pars_fragment:aA,alphamap_fragment:oA,alphamap_pars_fragment:lA,alphatest_fragment:cA,alphatest_pars_fragment:hA,aomap_fragment:uA,aomap_pars_fragment:dA,batching_pars_vertex:AA,batching_vertex:fA,begin_vertex:pA,beginnormal_vertex:mA,bsdfs:gA,iridescence_fragment:EA,bumpmap_pars_fragment:vA,clipping_planes_fragment:xA,clipping_planes_pars_fragment:yA,clipping_planes_pars_vertex:CA,clipping_planes_vertex:_A,color_fragment:MA,color_pars_fragment:IA,color_pars_vertex:SA,color_vertex:wA,common:TA,cube_uv_reflection_fragment:bA,defaultnormal_vertex:BA,displacementmap_pars_vertex:RA,displacementmap_vertex:DA,emissivemap_fragment:PA,emissivemap_pars_fragment:LA,colorspace_fragment:NA,colorspace_pars_fragment:UA,envmap_fragment:FA,envmap_common_pars_fragment:OA,envmap_pars_fragment:QA,envmap_pars_vertex:kA,envmap_physical_pars_fragment:jA,envmap_vertex:GA,fog_vertex:zA,fog_pars_vertex:HA,fog_fragment:VA,fog_pars_fragment:WA,gradientmap_pars_fragment:qA,lightmap_pars_fragment:XA,lights_lambert_fragment:YA,lights_lambert_pars_fragment:KA,lights_pars_begin:JA,lights_toon_fragment:ZA,lights_toon_pars_fragment:$A,lights_phong_fragment:ef,lights_phong_pars_fragment:tf,lights_physical_fragment:nf,lights_physical_pars_fragment:sf,lights_fragment_begin:rf,lights_fragment_maps:af,lights_fragment_end:of,logdepthbuf_fragment:lf,logdepthbuf_pars_fragment:cf,logdepthbuf_pars_vertex:hf,logdepthbuf_vertex:uf,map_fragment:df,map_pars_fragment:Af,map_particle_fragment:ff,map_particle_pars_fragment:pf,metalnessmap_fragment:mf,metalnessmap_pars_fragment:gf,morphinstance_vertex:Ef,morphcolor_vertex:vf,morphnormal_vertex:xf,morphtarget_pars_vertex:yf,morphtarget_vertex:Cf,normal_fragment_begin:_f,normal_fragment_maps:Mf,normal_pars_fragment:If,normal_pars_vertex:Sf,normal_vertex:wf,normalmap_pars_fragment:Tf,clearcoat_normal_fragment_begin:bf,clearcoat_normal_fragment_maps:Bf,clearcoat_pars_fragment:Rf,iridescence_pars_fragment:Df,opaque_fragment:Pf,packing:Lf,premultiplied_alpha_fragment:Nf,project_vertex:Uf,dithering_fragment:Ff,dithering_pars_fragment:Of,roughnessmap_fragment:Qf,roughnessmap_pars_fragment:kf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:zf,shadowmap_vertex:Hf,shadowmask_pars_fragment:Vf,skinbase_vertex:Wf,skinning_pars_vertex:qf,skinning_vertex:Xf,skinnormal_vertex:Yf,specularmap_fragment:Kf,specularmap_pars_fragment:Jf,tonemapping_fragment:jf,tonemapping_pars_fragment:Zf,transmission_fragment:$f,transmission_pars_fragment:ep,uv_pars_fragment:tp,uv_pars_vertex:ip,uv_vertex:np,worldpos_vertex:sp,background_vert:rp,background_frag:ap,backgroundCube_vert:op,backgroundCube_frag:lp,cube_vert:cp,cube_frag:hp,depth_vert:up,depth_frag:dp,distanceRGBA_vert:Ap,distanceRGBA_frag:fp,equirect_vert:pp,equirect_frag:mp,linedashed_vert:gp,linedashed_frag:Ep,meshbasic_vert:vp,meshbasic_frag:xp,meshlambert_vert:yp,meshlambert_frag:Cp,meshmatcap_vert:_p,meshmatcap_frag:Mp,meshnormal_vert:Ip,meshnormal_frag:Sp,meshphong_vert:wp,meshphong_frag:Tp,meshphysical_vert:bp,meshphysical_frag:Bp,meshtoon_vert:Rp,meshtoon_frag:Dp,points_vert:Pp,points_frag:Lp,shadow_vert:Np,shadow_frag:Up,sprite_vert:Fp,sprite_frag:Op},Ce={common:{diffuse:{value:new we(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new we(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new we(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new we(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Ii={basic:{uniforms:Kt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Kt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new we(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Kt([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new we(0)},specular:{value:new we(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Kt([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new we(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Kt([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new we(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Kt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Kt([Ce.points,Ce.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Kt([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Kt([Ce.common,Ce.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Kt([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Kt([Ce.sprite,Ce.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Kt([Ce.common,Ce.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Kt([Ce.lights,Ce.fog,{color:{value:new we(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};Ii.physical={uniforms:Kt([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new we(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new we(0)},specularColor:{value:new we(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const Tr={r:0,b:0,g:0},fn=new Zt,Qp=new Le;function kp(r,e,t,i,n,s,a){const o=new we(0);let l=s===!0?0:1,c,h,u=null,d=0,A=null;function g(C){let x=C.isScene===!0?C.background:null;return x&&x.isTexture&&(x=(C.backgroundBlurriness>0?t:e).get(x)),x}function E(C){let x=!1;const I=g(C);I===null?m(o,l):I&&I.isColor&&(m(I,1),x=!0);const L=r.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil)}function p(C,x){const I=g(x);I&&(I.isCubeTexture||I.mapping===aa)?(h===void 0&&(h=new Mt(new wi(1,1,1),new St({name:"BackgroundCubeMaterial",uniforms:us(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,b,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),fn.copy(x.backgroundRotation),fn.x*=-1,fn.y*=-1,fn.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(fn.y*=-1,fn.z*=-1),h.material.uniforms.envMap.value=I,h.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(fn)),h.material.toneMapped=ut.getTransfer(I.colorSpace)!==xt,(u!==I||d!==I.version||A!==r.toneMapping)&&(h.material.needsUpdate=!0,u=I,d=I.version,A=r.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new Mt(new js(2,2),new St({name:"BackgroundMaterial",uniforms:us(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ut.getTransfer(I.colorSpace)!==xt,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||d!==I.version||A!==r.toneMapping)&&(c.material.needsUpdate=!0,u=I,d=I.version,A=r.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function m(C,x){C.getRGB(Tr,Eh(r)),i.buffers.color.setClear(Tr.r,Tr.g,Tr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(C,x=1){o.set(C),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,m(o,l)},render:E,addToRenderList:p}}function Gp(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=d(null);let s=n,a=!1;function o(y,O,X,P,j){let K=!1;const oe=u(P,X,O);s!==oe&&(s=oe,c(s.object)),K=A(y,P,X,j),K&&g(y,P,X,j),j!==null&&e.update(j,r.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,I(y,O,X,P),j!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return r.createVertexArray()}function c(y){return r.bindVertexArray(y)}function h(y){return r.deleteVertexArray(y)}function u(y,O,X){const P=X.wireframe===!0;let j=i[y.id];j===void 0&&(j={},i[y.id]=j);let K=j[O.id];K===void 0&&(K={},j[O.id]=K);let oe=K[P];return oe===void 0&&(oe=d(l()),K[P]=oe),oe}function d(y){const O=[],X=[],P=[];for(let j=0;j<t;j++)O[j]=0,X[j]=0,P[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:X,attributeDivisors:P,object:y,attributes:{},index:null}}function A(y,O,X,P){const j=s.attributes,K=O.attributes;let oe=0;const ie=X.getAttributes();for(const V in ie)if(ie[V].location>=0){const re=j[V];let Te=K[V];if(Te===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Te=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Te=y.instanceColor)),re===void 0||re.attribute!==Te||Te&&re.data!==Te.data)return!0;oe++}return s.attributesNum!==oe||s.index!==P}function g(y,O,X,P){const j={},K=O.attributes;let oe=0;const ie=X.getAttributes();for(const V in ie)if(ie[V].location>=0){let re=K[V];re===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(re=y.instanceColor));const Te={};Te.attribute=re,re&&re.data&&(Te.data=re.data),j[V]=Te,oe++}s.attributes=j,s.attributesNum=oe,s.index=P}function E(){const y=s.newAttributes;for(let O=0,X=y.length;O<X;O++)y[O]=0}function p(y){m(y,0)}function m(y,O){const X=s.newAttributes,P=s.enabledAttributes,j=s.attributeDivisors;X[y]=1,P[y]===0&&(r.enableVertexAttribArray(y),P[y]=1),j[y]!==O&&(r.vertexAttribDivisor(y,O),j[y]=O)}function C(){const y=s.newAttributes,O=s.enabledAttributes;for(let X=0,P=O.length;X<P;X++)O[X]!==y[X]&&(r.disableVertexAttribArray(X),O[X]=0)}function x(y,O,X,P,j,K,oe){oe===!0?r.vertexAttribIPointer(y,O,X,j,K):r.vertexAttribPointer(y,O,X,P,j,K)}function I(y,O,X,P){E();const j=P.attributes,K=X.getAttributes(),oe=O.defaultAttributeValues;for(const ie in K){const V=K[ie];if(V.location>=0){let le=j[ie];if(le===void 0&&(ie==="instanceMatrix"&&y.instanceMatrix&&(le=y.instanceMatrix),ie==="instanceColor"&&y.instanceColor&&(le=y.instanceColor)),le!==void 0){const re=le.normalized,Te=le.itemSize,Ue=e.get(le);if(Ue===void 0)continue;const qe=Ue.buffer,J=Ue.type,fe=Ue.bytesPerElement,pe=J===r.INT||J===r.UNSIGNED_INT||le.gpuType===th;if(le.isInterleavedBufferAttribute){const ge=le.data,ke=ge.stride,ze=le.offset;if(ge.isInstancedInterleavedBuffer){for(let z=0;z<V.locationSize;z++)m(V.location+z,ge.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let z=0;z<V.locationSize;z++)p(V.location+z);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let z=0;z<V.locationSize;z++)x(V.location+z,Te/V.locationSize,J,re,ke*fe,(ze+Te/V.locationSize*z)*fe,pe)}else{if(le.isInstancedBufferAttribute){for(let ge=0;ge<V.locationSize;ge++)m(V.location+ge,le.meshPerAttribute);y.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ge=0;ge<V.locationSize;ge++)p(V.location+ge);r.bindBuffer(r.ARRAY_BUFFER,qe);for(let ge=0;ge<V.locationSize;ge++)x(V.location+ge,Te/V.locationSize,J,re,Te*fe,Te/V.locationSize*ge*fe,pe)}}else if(oe!==void 0){const re=oe[ie];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(V.location,re);break;case 3:r.vertexAttrib3fv(V.location,re);break;case 4:r.vertexAttrib4fv(V.location,re);break;default:r.vertexAttrib1fv(V.location,re)}}}}C()}function L(){G();for(const y in i){const O=i[y];for(const X in O){const P=O[X];for(const j in P)h(P[j].object),delete P[j];delete O[X]}delete i[y]}}function b(y){if(i[y.id]===void 0)return;const O=i[y.id];for(const X in O){const P=O[X];for(const j in P)h(P[j].object),delete P[j];delete O[X]}delete i[y.id]}function B(y){for(const O in i){const X=i[O];if(X[y.id]===void 0)continue;const P=X[y.id];for(const j in P)h(P[j].object),delete P[j];delete X[y.id]}}function G(){S(),a=!0,s!==n&&(s=n,c(s.object))}function S(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:G,resetDefaultState:S,dispose:L,releaseStatesOfGeometry:b,releaseStatesOfProgram:B,initAttributes:E,enableAttribute:p,disableUnusedAttributes:C}}function zp(r,e,t){let i;function n(c){i=c}function s(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(r.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let A=0;A<u;A++)this.render(c[A],h[A]);else{d.multiDrawArraysWEBGL(i,c,0,h,0,u);let A=0;for(let g=0;g<u;g++)A+=h[g];t.update(A,i,1)}}function l(c,h,u,d){if(u===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{A.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let E=0;E<u;E++)g+=h[E];for(let E=0;E<d.length;E++)t.update(g,i,d[E])}}this.setMode=n,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Hp(r,e,t,i){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(b){return!(b!==Bt&&i.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const B=b===Ft&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Rt&&i.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==kt&&!B)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),E=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=A>0,L=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:A,maxTextureSize:g,maxCubemapSize:E,maxAttributes:p,maxVertexUniforms:m,maxVaryings:C,maxFragmentUniforms:x,vertexTextures:I,maxSamples:L}}function Vp(r){const e=this;let t=null,i=0,n=!1,s=!1;const a=new vn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const A=u.length!==0||d||i!==0||n;return n=d,i=u.length,A},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,A){const g=u.clippingPlanes,E=u.clipIntersection,p=u.clipShadows,m=r.get(u);if(!n||g===null||g.length===0||s&&!p)s?h(null):c();else{const C=s?0:i,x=C*4;let I=m.clippingState||null;l.value=I,I=h(g,d,x,A);for(let L=0;L!==x;++L)I[L]=t[L];m.clippingState=I,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=C}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,A,g){const E=u!==null?u.length:0;let p=null;if(E!==0){if(p=l.value,g!==!0||p===null){const m=A+E*4,C=d.matrixWorldInverse;o.getNormalMatrix(C),(p===null||p.length<m)&&(p=new Float32Array(m));for(let x=0,I=A;x!==E;++x,I+=4)a.copy(u[x]).applyMatrix4(C,o),a.normal.toArray(p,I),p[I+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,p}}function Wp(r){let e=new WeakMap;function t(a,o){return o===as?a.mapping=Mn:o===po&&(a.mapping=rs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===as||o===po)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new tA(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",n),t(c.texture,a.mapping)}else return null}}return a}function n(a){const o=a.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class la extends vh{constructor(e=-1,t=1,i=1,n=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $n=4,zl=[.125,.215,.35,.446,.526,.582],Cn=20,Ua=new la,Hl=new we;let Fa=null,Oa=0,Qa=0,ka=!1;const xn=(1+Math.sqrt(5))/2,Vn=1/xn,Vl=[new M(-xn,Vn,0),new M(xn,Vn,0),new M(-Vn,0,xn),new M(Vn,0,xn),new M(0,xn,-Vn),new M(0,xn,Vn),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)];class Wl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fa,Oa,Qa),this._renderer.xr.enabled=ka,e.scissorTest=!1,br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Mn||e.mapping===rs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fa=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Qa=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Ft,format:Bt,colorSpace:wt,depthBuffer:!1},n=ql(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ql(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(s)),this._blurMaterial=Xp(s,e,t)}return n}_compileMaterial(e){const t=new Mt(this._lodPlanes[0],e);this._renderer.compile(t,Ua)}_sceneToCubeUV(e,t,i,n){const o=new Jt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Hl),h.toneMapping=ln,h.autoClear=!1;const A=new ei({name:"PMREM.Background",side:ti,depthWrite:!1,depthTest:!1}),g=new Mt(new wi,A);let E=!1;const p=e.background;p?p.isColor&&(A.color.copy(p),e.background=null,E=!0):(A.color.copy(Hl),E=!0);for(let m=0;m<6;m++){const C=m%3;C===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):C===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;br(n,C*x,m>2?x:0,x,x),h.setRenderTarget(n),E&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Mn||e.mapping===rs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xl());const s=n?this._cubemapMaterial:this._equirectMaterial,a=new Mt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;br(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Ua)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let s=1;s<n;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Vl[(n-s-1)%Vl.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,n,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,n,"latitudinal",s),this._halfBlur(a,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Mt(this._lodPlanes[n],c),d=c.uniforms,A=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*A):2*Math.PI/(2*Cn-1),E=s/g,p=isFinite(s)?1+Math.floor(h*E):Cn;p>Cn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cn}`);const m=[];let C=0;for(let B=0;B<Cn;++B){const G=B/E,S=Math.exp(-G*G/2);m.push(S),B===0?C+=S:B<p&&(C+=2*S)}for(let B=0;B<m.length;B++)m[B]=m[B]/C;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;const I=this._sizeLods[n],L=3*I*(n>x-$n?n-x+$n:0),b=4*(this._cubeSize-I);br(t,L,b,3*I,2*I),l.setRenderTarget(t),l.render(u,Ua)}}function qp(r){const e=[],t=[],i=[];let n=r;const s=r-$n+1+zl.length;for(let a=0;a<s;a++){const o=Math.pow(2,n);t.push(o);let l=1/o;a>r-$n?l=zl[a-r+$n-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],A=6,g=6,E=3,p=2,m=1,C=new Float32Array(E*g*A),x=new Float32Array(p*g*A),I=new Float32Array(m*g*A);for(let b=0;b<A;b++){const B=b%3*2/3-1,G=b>2?0:-1,S=[B,G,0,B+2/3,G,0,B+2/3,G+1,0,B,G,0,B+2/3,G+1,0,B,G+1,0];C.set(S,E*g*b),x.set(d,p*g*b);const y=[b,b,b,b,b,b];I.set(y,m*g*b)}const L=new $t;L.setAttribute("position",new Gt(C,E)),L.setAttribute("uv",new Gt(x,p)),L.setAttribute("faceIndex",new Gt(I,m)),e.push(L),n>$n&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function ql(r,e,t){const i=new jt(r,e,t);return i.texture.mapping=aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function br(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function Xp(r,e,t){const i=new Float32Array(Cn),n=new M(0,1,0);return new St({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Xl(){return new St({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Yl(){return new St({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Lo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Yp(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===as||l===po,h=l===Mn||l===rs;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Wl(r)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const A=o.image;return c&&A&&A.height>0||h&&A&&n(A)?(t===null&&(t=new Wl(r)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",s),u.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Kp(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Jp(r,e,t,i){const n={},s=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const E=d.morphAttributes[g];for(let p=0,m=E.length;p<m;p++)e.remove(E[p])}d.removeEventListener("dispose",a),delete n[d.id];const A=s.get(d);A&&(e.remove(A),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],r.ARRAY_BUFFER);const A=u.morphAttributes;for(const g in A){const E=A[g];for(let p=0,m=E.length;p<m;p++)e.update(E[p],r.ARRAY_BUFFER)}}function c(u){const d=[],A=u.index,g=u.attributes.position;let E=0;if(A!==null){const C=A.array;E=A.version;for(let x=0,I=C.length;x<I;x+=3){const L=C[x+0],b=C[x+1],B=C[x+2];d.push(L,b,b,B,B,L)}}else if(g!==void 0){const C=g.array;E=g.version;for(let x=0,I=C.length/3-1;x<I;x+=3){const L=x+0,b=x+1,B=x+2;d.push(L,b,b,B,B,L)}}else return;const p=new(hh(d)?gh:mh)(d,1);p.version=E;const m=s.get(u);m&&e.remove(m),s.set(u,p)}function h(u){const d=s.get(u);if(d){const A=u.index;A!==null&&d.version<A.version&&c(u)}else c(u);return s.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function jp(r,e,t){let i;function n(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,A){r.drawElements(i,A,s,d*a),t.update(A,i,1)}function c(d,A,g){g!==0&&(r.drawElementsInstanced(i,A,s,d*a,g),t.update(A,i,g))}function h(d,A,g){if(g===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let p=0;p<g;p++)this.render(d[p]/a,A[p]);else{E.multiDrawElementsWEBGL(i,A,0,s,d,0,g);let p=0;for(let m=0;m<g;m++)p+=A[m];t.update(p,i,1)}}function u(d,A,g,E){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<d.length;m++)c(d[m]/a,A[m],E[m]);else{p.multiDrawElementsInstancedWEBGL(i,A,0,s,d,0,E,0,g);let m=0;for(let C=0;C<g;C++)m+=A[C];for(let C=0;C<E.length;C++)t.update(m,i,E[C])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Zp(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function $p(r,e,t){const i=new WeakMap,n=new pt;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==u){let y=function(){G.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var A=y;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,E=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],C=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let I=0;g===!0&&(I=1),E===!0&&(I=2),p===!0&&(I=3);let L=o.attributes.position.count*I,b=1;L>e.maxTextureSize&&(b=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const B=new Float32Array(L*b*4*u),G=new Ah(B,L,b,u);G.type=kt,G.needsUpdate=!0;const S=I*4;for(let O=0;O<u;O++){const X=m[O],P=C[O],j=x[O],K=L*b*4*O;for(let oe=0;oe<X.count;oe++){const ie=oe*S;g===!0&&(n.fromBufferAttribute(X,oe),B[K+ie+0]=n.x,B[K+ie+1]=n.y,B[K+ie+2]=n.z,B[K+ie+3]=0),E===!0&&(n.fromBufferAttribute(P,oe),B[K+ie+4]=n.x,B[K+ie+5]=n.y,B[K+ie+6]=n.z,B[K+ie+7]=0),p===!0&&(n.fromBufferAttribute(j,oe),B[K+ie+8]=n.x,B[K+ie+9]=n.y,B[K+ie+10]=n.z,B[K+ie+11]=j.itemSize===4?n.w:1)}}d={count:u,texture:G,size:new Ae(L,b)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const E=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",E),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function em(r,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);if(n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;n.get(d)!==c&&(d.update(),n.set(d,c))}return u}function a(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Ch extends It{constructor(e,t,i,n,s,a,o,l,c,h){if(h=h!==void 0?h:is,h!==is&&h!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===is&&(i=ls),i===void 0&&h===zs&&(i=Xs),super(null,n,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Qt,this.minFilter=l!==void 0?l:Qt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _h=new It,Mh=new Ch(1,1);Mh.compareFunction=ch;const Ih=new Ah,Sh=new fh,wh=new xh,Kl=[],Jl=[],jl=new Float32Array(16),Zl=new Float32Array(9),$l=new Float32Array(4);function ps(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=Kl[n];if(s===void 0&&(s=new Float32Array(n),Kl[n]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Pt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function Lt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function ca(r,e){let t=Jl[e];t===void 0&&(t=new Int32Array(e),Jl[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function tm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function im(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2fv(this.addr,e),Lt(t,e)}}function nm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;r.uniform3fv(this.addr,e),Lt(t,e)}}function sm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4fv(this.addr,e),Lt(t,e)}}function rm(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;$l.set(i),r.uniformMatrix2fv(this.addr,!1,$l),Lt(t,i)}}function am(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;Zl.set(i),r.uniformMatrix3fv(this.addr,!1,Zl),Lt(t,i)}}function om(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;jl.set(i),r.uniformMatrix4fv(this.addr,!1,jl),Lt(t,i)}}function lm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function cm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2iv(this.addr,e),Lt(t,e)}}function hm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3iv(this.addr,e),Lt(t,e)}}function um(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4iv(this.addr,e),Lt(t,e)}}function dm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Am(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;r.uniform2uiv(this.addr,e),Lt(t,e)}}function fm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;r.uniform3uiv(this.addr,e),Lt(t,e)}}function pm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;r.uniform4uiv(this.addr,e),Lt(t,e)}}function mm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);const s=this.type===r.SAMPLER_2D_SHADOW?Mh:_h;t.setTexture2D(e||s,n)}function gm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Sh,n)}function Em(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||wh,n)}function vm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Ih,n)}function xm(r){switch(r){case 5126:return tm;case 35664:return im;case 35665:return nm;case 35666:return sm;case 35674:return rm;case 35675:return am;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return um;case 5125:return dm;case 36294:return Am;case 36295:return fm;case 36296:return pm;case 35678:case 36198:case 36298:case 36306:case 35682:return mm;case 35679:case 36299:case 36307:return gm;case 35680:case 36300:case 36308:case 36293:return Em;case 36289:case 36303:case 36311:case 36292:return vm}}function ym(r,e){r.uniform1fv(this.addr,e)}function Cm(r,e){const t=ps(e,this.size,2);r.uniform2fv(this.addr,t)}function _m(r,e){const t=ps(e,this.size,3);r.uniform3fv(this.addr,t)}function Mm(r,e){const t=ps(e,this.size,4);r.uniform4fv(this.addr,t)}function Im(r,e){const t=ps(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Sm(r,e){const t=ps(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function wm(r,e){const t=ps(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Tm(r,e){r.uniform1iv(this.addr,e)}function bm(r,e){r.uniform2iv(this.addr,e)}function Bm(r,e){r.uniform3iv(this.addr,e)}function Rm(r,e){r.uniform4iv(this.addr,e)}function Dm(r,e){r.uniform1uiv(this.addr,e)}function Pm(r,e){r.uniform2uiv(this.addr,e)}function Lm(r,e){r.uniform3uiv(this.addr,e)}function Nm(r,e){r.uniform4uiv(this.addr,e)}function Um(r,e,t){const i=this.cache,n=e.length,s=ca(t,n);Pt(i,s)||(r.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==n;++a)t.setTexture2D(e[a]||_h,s[a])}function Fm(r,e,t){const i=this.cache,n=e.length,s=ca(t,n);Pt(i,s)||(r.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Sh,s[a])}function Om(r,e,t){const i=this.cache,n=e.length,s=ca(t,n);Pt(i,s)||(r.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||wh,s[a])}function Qm(r,e,t){const i=this.cache,n=e.length,s=ca(t,n);Pt(i,s)||(r.uniform1iv(this.addr,s),Lt(i,s));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Ih,s[a])}function km(r){switch(r){case 5126:return ym;case 35664:return Cm;case 35665:return _m;case 35666:return Mm;case 35674:return Im;case 35675:return Sm;case 35676:return wm;case 5124:case 35670:return Tm;case 35667:case 35671:return bm;case 35668:case 35672:return Bm;case 35669:case 35673:return Rm;case 5125:return Dm;case 36294:return Pm;case 36295:return Lm;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Um;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Qm}}class Gm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=xm(t.type)}}class zm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=km(t.type)}}class Hm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,a=n.length;s!==a;++s){const o=n[s];o.setValue(e,t[o.id],i)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function ec(r,e){r.seq.push(e),r.map[e.id]=e}function Vm(r,e,t){const i=r.name,n=i.length;for(Ga.lastIndex=0;;){const s=Ga.exec(i),a=Ga.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){ec(t,c===void 0?new Gm(o,r,e):new zm(o,r,e));break}else{let u=t.map[o];u===void 0&&(u=new Hm(o),ec(t,u)),t=u}}}class Kr{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),a=e.getUniformLocation(t,s.name);Vm(s,a,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const a=e[n];a.id in t&&i.push(a)}return i}}function tc(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Wm=37297;let qm=0;function Xm(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=n;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function Ym(r){const e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(r);let i;switch(e===t?i="":e===ia&&t===ta?i="LinearDisplayP3ToLinearSRGB":e===ta&&t===ia&&(i="LinearSRGBToLinearDisplayP3"),r){case wt:case Ys:return[i,"LinearTransferOETF"];case dt:case oa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function ic(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+Xm(r.getShaderSource(e),a)}else return n}function Km(r,e){const t=Ym(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Jm(r,e){let t;switch(e){case Hu:t="Linear";break;case Vu:t="Reinhard";break;case Wu:t="OptimizedCineon";break;case qu:t="ACESFilmic";break;case jc:t="AgX";break;case Yu:t="Neutral";break;case Xu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function jm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ls).join(`
`)}function Zm(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $m(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ls(r){return r!==""}function nc(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sc(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mo(r){return r.replace(eg,ig)}const tg=new Map;function ig(r,e){let t=Ve[e];if(t===void 0){const i=tg.get(e);if(i!==void 0)t=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Mo(t)}const ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rc(r){return r.replace(ng,sg)}function sg(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function ac(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Kc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Oi&&(e="SHADOWMAP_TYPE_VSM"),e}function ag(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Mn:case rs:e="ENVMAP_TYPE_CUBE";break;case aa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function og(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case rs:e="ENVMAP_MODE_REFRACTION";break}return e}function lg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Jc:e="ENVMAP_BLENDING_MULTIPLY";break;case Gu:e="ENVMAP_BLENDING_MIX";break;case zu:e="ENVMAP_BLENDING_ADD";break}return e}function cg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function hg(r,e,t,i){const n=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=rg(t),c=ag(t),h=og(t),u=lg(t),d=cg(t),A=jm(t),g=Zm(s),E=n.createProgram();let p,m,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ls).join(`
`),m.length>0&&(m+=`
`)):(p=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ls).join(`
`),m=[ac(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ln?"#define TONE_MAPPING":"",t.toneMapping!==ln?Ve.tonemapping_pars_fragment:"",t.toneMapping!==ln?Jm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Km("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ls).join(`
`)),a=Mo(a),a=nc(a,t),a=sc(a,t),o=Mo(o),o=nc(o,t),o=sc(o,t),a=rc(a),o=rc(o),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,p=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=C+p+a,I=C+m+o,L=tc(n,n.VERTEX_SHADER,x),b=tc(n,n.FRAGMENT_SHADER,I);n.attachShader(E,L),n.attachShader(E,b),t.index0AttributeName!==void 0?n.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(E,0,"position"),n.linkProgram(E);function B(O){if(r.debug.checkShaderErrors){const X=n.getProgramInfoLog(E).trim(),P=n.getShaderInfoLog(L).trim(),j=n.getShaderInfoLog(b).trim();let K=!0,oe=!0;if(n.getProgramParameter(E,n.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,E,L,b);else{const ie=ic(n,L,"vertex"),V=ic(n,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(E,n.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+X+`
`+ie+`
`+V)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(P===""||j==="")&&(oe=!1);oe&&(O.diagnostics={runnable:K,programLog:X,vertexShader:{log:P,prefix:p},fragmentShader:{log:j,prefix:m}})}n.deleteShader(L),n.deleteShader(b),G=new Kr(n,E),S=$m(n,E)}let G;this.getUniforms=function(){return G===void 0&&B(this),G};let S;this.getAttributes=function(){return S===void 0&&B(this),S};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=n.getProgramParameter(E,Wm)),y},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qm++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=L,this.fragmentShader=b,this}let ug=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(n)===!1&&(a.add(n),n.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ag(e),t.set(e,i)),i}}class Ag{constructor(e){this.id=ug++,this.code=e,this.usedTimes=0}}function fg(r,e,t,i,n,s,a){const o=new Po,l=new dg,c=new Set,h=[],u=n.logarithmicDepthBuffer,d=n.vertexTextures;let A=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,y,O,X,P){const j=X.fog,K=P.geometry,oe=S.isMeshStandardMaterial?X.environment:null,ie=(S.isMeshStandardMaterial?t:e).get(S.envMap||oe),V=ie&&ie.mapping===aa?ie.image.height:null,le=g[S.type];S.precision!==null&&(A=n.getMaxPrecision(S.precision),A!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",A,"instead."));const re=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Te=re!==void 0?re.length:0;let Ue=0;K.morphAttributes.position!==void 0&&(Ue=1),K.morphAttributes.normal!==void 0&&(Ue=2),K.morphAttributes.color!==void 0&&(Ue=3);let qe,J,fe,pe;if(le){const ot=Ii[le];qe=ot.vertexShader,J=ot.fragmentShader}else qe=S.vertexShader,J=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),pe=l.getFragmentShaderID(S);const ge=r.getRenderTarget(),ke=P.isInstancedMesh===!0,ze=P.isBatchedMesh===!0,z=!!S.map,at=!!S.matcap,De=!!ie,nt=!!S.aoMap,Oe=!!S.lightMap,Ke=!!S.bumpMap,He=!!S.normalMap,Ze=!!S.displacementMap,Ct=!!S.emissiveMap,R=!!S.metalnessMap,_=!!S.roughnessMap,Y=S.anisotropy>0,se=S.clearcoat>0,ce=S.dispersion>0,ue=S.iridescence>0,Be=S.sheen>0,Me=S.transmission>0,_e=Y&&!!S.anisotropyMap,Ge=se&&!!S.clearcoatMap,Ee=se&&!!S.clearcoatNormalMap,Re=se&&!!S.clearcoatRoughnessMap,$e=ue&&!!S.iridescenceMap,Fe=ue&&!!S.iridescenceThicknessMap,ye=Be&&!!S.sheenColorMap,Ne=Be&&!!S.sheenRoughnessMap,Xe=!!S.specularMap,ct=!!S.specularColorMap,Pe=!!S.specularIntensityMap,N=Me&&!!S.transmissionMap,ae=Me&&!!S.thicknessMap,F=!!S.gradientMap,xe=!!S.alphaMap,Ie=S.alphaTest>0,et=!!S.alphaHash,mt=!!S.extensions;let _t=ln;S.toneMapped&&(ge===null||ge.isXRRenderTarget===!0)&&(_t=r.toneMapping);const Nt={shaderID:le,shaderType:S.type,shaderName:S.name,vertexShader:qe,fragmentShader:J,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:pe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:A,batching:ze,instancing:ke,instancingColor:ke&&P.instanceColor!==null,instancingMorph:ke&&P.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ge===null?r.outputColorSpace:ge.isXRRenderTarget===!0?ge.texture.colorSpace:wt,alphaToCoverage:!!S.alphaToCoverage,map:z,matcap:at,envMap:De,envMapMode:De&&ie.mapping,envMapCubeUVHeight:V,aoMap:nt,lightMap:Oe,bumpMap:Ke,normalMap:He,displacementMap:d&&Ze,emissiveMap:Ct,normalMapObjectSpace:He&&S.normalMapType===ld,normalMapTangentSpace:He&&S.normalMapType===lh,metalnessMap:R,roughnessMap:_,anisotropy:Y,anisotropyMap:_e,clearcoat:se,clearcoatMap:Ge,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Re,dispersion:ce,iridescence:ue,iridescenceMap:$e,iridescenceThicknessMap:Fe,sheen:Be,sheenColorMap:ye,sheenRoughnessMap:Ne,specularMap:Xe,specularColorMap:ct,specularIntensityMap:Pe,transmission:Me,transmissionMap:N,thicknessMap:ae,gradientMap:F,opaque:S.transparent===!1&&S.blending===ts&&S.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ie,alphaHash:et,combine:S.combine,mapUv:z&&E(S.map.channel),aoMapUv:nt&&E(S.aoMap.channel),lightMapUv:Oe&&E(S.lightMap.channel),bumpMapUv:Ke&&E(S.bumpMap.channel),normalMapUv:He&&E(S.normalMap.channel),displacementMapUv:Ze&&E(S.displacementMap.channel),emissiveMapUv:Ct&&E(S.emissiveMap.channel),metalnessMapUv:R&&E(S.metalnessMap.channel),roughnessMapUv:_&&E(S.roughnessMap.channel),anisotropyMapUv:_e&&E(S.anisotropyMap.channel),clearcoatMapUv:Ge&&E(S.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&E(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&E(S.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&E(S.iridescenceMap.channel),iridescenceThicknessMapUv:Fe&&E(S.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&E(S.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&E(S.sheenRoughnessMap.channel),specularMapUv:Xe&&E(S.specularMap.channel),specularColorMapUv:ct&&E(S.specularColorMap.channel),specularIntensityMapUv:Pe&&E(S.specularIntensityMap.channel),transmissionMapUv:N&&E(S.transmissionMap.channel),thicknessMapUv:ae&&E(S.thicknessMap.channel),alphaMapUv:xe&&E(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(He||Y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!K.attributes.uv&&(z||xe),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Ue,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&O.length>0,shadowMapType:r.shadowMap.type,toneMapping:_t,useLegacyLights:r._useLegacyLights,decodeVideoTexture:z&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===xt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===qt,flipSided:S.side===ti,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:mt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:mt&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function m(S){const y=[];if(S.shaderID?y.push(S.shaderID):(y.push(S.customVertexShaderID),y.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)y.push(O),y.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(C(y,S),x(y,S),y.push(r.outputColorSpace)),y.push(S.customProgramCacheKey),y.join()}function C(S,y){S.push(y.precision),S.push(y.outputColorSpace),S.push(y.envMapMode),S.push(y.envMapCubeUVHeight),S.push(y.mapUv),S.push(y.alphaMapUv),S.push(y.lightMapUv),S.push(y.aoMapUv),S.push(y.bumpMapUv),S.push(y.normalMapUv),S.push(y.displacementMapUv),S.push(y.emissiveMapUv),S.push(y.metalnessMapUv),S.push(y.roughnessMapUv),S.push(y.anisotropyMapUv),S.push(y.clearcoatMapUv),S.push(y.clearcoatNormalMapUv),S.push(y.clearcoatRoughnessMapUv),S.push(y.iridescenceMapUv),S.push(y.iridescenceThicknessMapUv),S.push(y.sheenColorMapUv),S.push(y.sheenRoughnessMapUv),S.push(y.specularMapUv),S.push(y.specularColorMapUv),S.push(y.specularIntensityMapUv),S.push(y.transmissionMapUv),S.push(y.thicknessMapUv),S.push(y.combine),S.push(y.fogExp2),S.push(y.sizeAttenuation),S.push(y.morphTargetsCount),S.push(y.morphAttributeCount),S.push(y.numDirLights),S.push(y.numPointLights),S.push(y.numSpotLights),S.push(y.numSpotLightMaps),S.push(y.numHemiLights),S.push(y.numRectAreaLights),S.push(y.numDirLightShadows),S.push(y.numPointLightShadows),S.push(y.numSpotLightShadows),S.push(y.numSpotLightShadowsWithMaps),S.push(y.numLightProbes),S.push(y.shadowMapType),S.push(y.toneMapping),S.push(y.numClippingPlanes),S.push(y.numClipIntersection),S.push(y.depthPacking)}function x(S,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),S.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),S.push(o.mask)}function I(S){const y=g[S.type];let O;if(y){const X=Ii[y];O=_n.clone(X.uniforms)}else O=S.uniforms;return O}function L(S,y){let O;for(let X=0,P=h.length;X<P;X++){const j=h[X];if(j.cacheKey===y){O=j,++O.usedTimes;break}}return O===void 0&&(O=new hg(r,y,S,s),h.push(O)),O}function b(S){if(--S.usedTimes===0){const y=h.indexOf(S);h[y]=h[h.length-1],h.pop(),S.destroy()}}function B(S){l.remove(S)}function G(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:I,acquireProgram:L,releaseProgram:b,releaseShaderCache:B,programs:h,dispose:G}}function pg(){let r=new WeakMap;function e(s){let a=r.get(s);return a===void 0&&(a={},r.set(s,a)),a}function t(s){r.delete(s)}function i(s,a,o){r.get(s)[a]=o}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function mg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function oc(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function lc(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function a(u,d,A,g,E,p){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:A,groupOrder:g,renderOrder:u.renderOrder,z:E,group:p},r[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=A,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=E,m.group=p),e++,m}function o(u,d,A,g,E,p){const m=a(u,d,A,g,E,p);A.transmission>0?i.push(m):A.transparent===!0?n.push(m):t.push(m)}function l(u,d,A,g,E,p){const m=a(u,d,A,g,E,p);A.transmission>0?i.unshift(m):A.transparent===!0?n.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||mg),i.length>1&&i.sort(d||oc),n.length>1&&n.sort(d||oc)}function h(){for(let u=e,d=r.length;u<d;u++){const A=r[u];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:o,unshift:l,finish:h,sort:c}}function gg(){let r=new WeakMap;function e(i,n){const s=r.get(i);let a;return s===void 0?(a=new lc,r.set(i,[a])):n>=s.length?(a=new lc,s.push(a)):a=s[n],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Eg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new we};break;case"SpotLight":t={position:new M,direction:new M,color:new we,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new we,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new we,groundColor:new we};break;case"RectAreaLight":t={color:new we,position:new M,halfWidth:new M,halfHeight:new M};break}return r[e.id]=t,t}}}function vg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let xg=0;function yg(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Cg(r){const e=new Eg,t=vg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new M);const n=new M,s=new Le,a=new Le;function o(c,h){let u=0,d=0,A=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let g=0,E=0,p=0,m=0,C=0,x=0,I=0,L=0,b=0,B=0,G=0;c.sort(yg);const S=h===!0?Math.PI:1;for(let O=0,X=c.length;O<X;O++){const P=c[O],j=P.color,K=P.intensity,oe=P.distance,ie=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=j.r*K*S,d+=j.g*K*S,A+=j.b*K*S;else if(P.isLightProbe){for(let V=0;V<9;V++)i.probe[V].addScaledVector(P.sh.coefficients[V],K);G++}else if(P.isDirectionalLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*S),P.castShadow){const le=P.shadow,re=t.get(P);re.shadowBias=le.bias,re.shadowNormalBias=le.normalBias,re.shadowRadius=le.radius,re.shadowMapSize=le.mapSize,i.directionalShadow[g]=re,i.directionalShadowMap[g]=ie,i.directionalShadowMatrix[g]=P.shadow.matrix,x++}i.directional[g]=V,g++}else if(P.isSpotLight){const V=e.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(j).multiplyScalar(K*S),V.distance=oe,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,i.spot[p]=V;const le=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,le.updateMatrices(P),P.castShadow&&B++),i.spotLightMatrix[p]=le.matrix,P.castShadow){const re=t.get(P);re.shadowBias=le.bias,re.shadowNormalBias=le.normalBias,re.shadowRadius=le.radius,re.shadowMapSize=le.mapSize,i.spotShadow[p]=re,i.spotShadowMap[p]=ie,L++}p++}else if(P.isRectAreaLight){const V=e.get(P);V.color.copy(j).multiplyScalar(K),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=V,m++}else if(P.isPointLight){const V=e.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity*S),V.distance=P.distance,V.decay=P.decay,P.castShadow){const le=P.shadow,re=t.get(P);re.shadowBias=le.bias,re.shadowNormalBias=le.normalBias,re.shadowRadius=le.radius,re.shadowMapSize=le.mapSize,re.shadowCameraNear=le.camera.near,re.shadowCameraFar=le.camera.far,i.pointShadow[E]=re,i.pointShadowMap[E]=ie,i.pointShadowMatrix[E]=P.shadow.matrix,I++}i.point[E]=V,E++}else if(P.isHemisphereLight){const V=e.get(P);V.skyColor.copy(P.color).multiplyScalar(K*S),V.groundColor.copy(P.groundColor).multiplyScalar(K*S),i.hemi[C]=V,C++}}m>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ce.LTC_FLOAT_1,i.rectAreaLTC2=Ce.LTC_FLOAT_2):(i.rectAreaLTC1=Ce.LTC_HALF_1,i.rectAreaLTC2=Ce.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=A;const y=i.hash;(y.directionalLength!==g||y.pointLength!==E||y.spotLength!==p||y.rectAreaLength!==m||y.hemiLength!==C||y.numDirectionalShadows!==x||y.numPointShadows!==I||y.numSpotShadows!==L||y.numSpotMaps!==b||y.numLightProbes!==G)&&(i.directional.length=g,i.spot.length=p,i.rectArea.length=m,i.point.length=E,i.hemi.length=C,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=L+b-B,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=B,i.numLightProbes=G,y.directionalLength=g,y.pointLength=E,y.spotLength=p,y.rectAreaLength=m,y.hemiLength=C,y.numDirectionalShadows=x,y.numPointShadows=I,y.numSpotShadows=L,y.numSpotMaps=b,y.numLightProbes=G,i.version=xg++)}function l(c,h){let u=0,d=0,A=0,g=0,E=0;const p=h.matrixWorldInverse;for(let m=0,C=c.length;m<C;m++){const x=c[m];if(x.isDirectionalLight){const I=i.directional[u];I.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),I.direction.sub(n),I.direction.transformDirection(p),u++}else if(x.isSpotLight){const I=i.spot[A];I.position.setFromMatrixPosition(x.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(x.matrixWorld),n.setFromMatrixPosition(x.target.matrixWorld),I.direction.sub(n),I.direction.transformDirection(p),A++}else if(x.isRectAreaLight){const I=i.rectArea[g];I.position.setFromMatrixPosition(x.matrixWorld),I.position.applyMatrix4(p),a.identity(),s.copy(x.matrixWorld),s.premultiply(p),a.extractRotation(s),I.halfWidth.set(x.width*.5,0,0),I.halfHeight.set(0,x.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const I=i.point[d];I.position.setFromMatrixPosition(x.matrixWorld),I.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const I=i.hemi[E];I.direction.setFromMatrixPosition(x.matrixWorld),I.direction.transformDirection(p),E++}}}return{setup:o,setupView:l,state:i}}function cc(r){const e=new Cg(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(h){e.setup(t,h)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function _g(r){let e=new WeakMap;function t(n,s=0){const a=e.get(n);let o;return a===void 0?(o=new cc(r),e.set(n,[o])):s>=a.length?(o=new cc(r),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class Mg extends yi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ig extends yi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tg(r,e,t){let i=new Js;const n=new Ae,s=new Ae,a=new pt,o=new Mg({depthPacking:od}),l=new Ig,c={},h=t.maxTextureSize,u={[Xi]:ti,[ti]:Xi,[qt]:qt},d=new St({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Sg,fragmentShader:wg}),A=d.clone();A.defines.HORIZONTAL_PASS=1;const g=new $t;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Mt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let m=this.type;this.render=function(b,B,G){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const S=r.getRenderTarget(),y=r.getActiveCubeFace(),O=r.getActiveMipmapLevel(),X=r.state;X.setBlending(Vi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const P=m!==Oi&&this.type===Oi,j=m===Oi&&this.type!==Oi;for(let K=0,oe=b.length;K<oe;K++){const ie=b[K],V=ie.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const le=V.getFrameExtents();if(n.multiply(le),s.copy(V.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/le.x),n.x=s.x*le.x,V.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/le.y),n.y=s.y*le.y,V.mapSize.y=s.y)),V.map===null||P===!0||j===!0){const Te=this.type!==Oi?{minFilter:Qt,magFilter:Qt}:{};V.map!==null&&V.map.dispose(),V.map=new jt(n.x,n.y,Te),V.map.texture.name=ie.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const re=V.getViewportCount();for(let Te=0;Te<re;Te++){const Ue=V.getViewport(Te);a.set(s.x*Ue.x,s.y*Ue.y,s.x*Ue.z,s.y*Ue.w),X.viewport(a),V.updateMatrices(ie,Te),i=V.getFrustum(),I(B,G,V.camera,ie,this.type)}V.isPointLightShadow!==!0&&this.type===Oi&&C(V,G),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(S,y,O)};function C(b,B){const G=e.update(E);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,A.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,A.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new jt(n.x,n.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(B,null,G,d,E,null),A.uniforms.shadow_pass.value=b.mapPass.texture,A.uniforms.resolution.value=b.mapSize,A.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(B,null,G,A,E,null)}function x(b,B,G,S){let y=null;const O=G.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(O!==void 0)y=O;else if(y=G.isPointLight===!0?l:o,r.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0){const X=y.uuid,P=B.uuid;let j=c[X];j===void 0&&(j={},c[X]=j);let K=j[P];K===void 0&&(K=y.clone(),j[P]=K,B.addEventListener("dispose",L)),y=K}if(y.visible=B.visible,y.wireframe=B.wireframe,S===Oi?y.side=B.shadowSide!==null?B.shadowSide:B.side:y.side=B.shadowSide!==null?B.shadowSide:u[B.side],y.alphaMap=B.alphaMap,y.alphaTest=B.alphaTest,y.map=B.map,y.clipShadows=B.clipShadows,y.clippingPlanes=B.clippingPlanes,y.clipIntersection=B.clipIntersection,y.displacementMap=B.displacementMap,y.displacementScale=B.displacementScale,y.displacementBias=B.displacementBias,y.wireframeLinewidth=B.wireframeLinewidth,y.linewidth=B.linewidth,G.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const X=r.properties.get(y);X.light=G}return y}function I(b,B,G,S,y){if(b.visible===!1)return;if(b.layers.test(B.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&y===Oi)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld);const P=e.update(b),j=b.material;if(Array.isArray(j)){const K=P.groups;for(let oe=0,ie=K.length;oe<ie;oe++){const V=K[oe],le=j[V.materialIndex];if(le&&le.visible){const re=x(b,le,S,y);b.onBeforeShadow(r,b,B,G,P,re,V),r.renderBufferDirect(G,null,P,re,b,V),b.onAfterShadow(r,b,B,G,P,re,V)}}}else if(j.visible){const K=x(b,j,S,y);b.onBeforeShadow(r,b,B,G,P,K,null),r.renderBufferDirect(G,null,P,K,b,null),b.onAfterShadow(r,b,B,G,P,K,null)}}const X=b.children;for(let P=0,j=X.length;P<j;P++)I(X[P],B,G,S,y)}function L(b){b.target.removeEventListener("dispose",L);for(const G in c){const S=c[G],y=b.target.uuid;y in S&&(S[y].dispose(),delete S[y])}}}function bg(r){function e(){let N=!1;const ae=new pt;let F=null;const xe=new pt(0,0,0,0);return{setMask:function(Ie){F!==Ie&&!N&&(r.colorMask(Ie,Ie,Ie,Ie),F=Ie)},setLocked:function(Ie){N=Ie},setClear:function(Ie,et,mt,_t,Nt){Nt===!0&&(Ie*=_t,et*=_t,mt*=_t),ae.set(Ie,et,mt,_t),xe.equals(ae)===!1&&(r.clearColor(Ie,et,mt,_t),xe.copy(ae))},reset:function(){N=!1,F=null,xe.set(-1,0,0,0)}}}function t(){let N=!1,ae=null,F=null,xe=null;return{setTest:function(Ie){Ie?pe(r.DEPTH_TEST):ge(r.DEPTH_TEST)},setMask:function(Ie){ae!==Ie&&!N&&(r.depthMask(Ie),ae=Ie)},setFunc:function(Ie){if(F!==Ie){switch(Ie){case Lu:r.depthFunc(r.NEVER);break;case Nu:r.depthFunc(r.ALWAYS);break;case Uu:r.depthFunc(r.LESS);break;case jr:r.depthFunc(r.LEQUAL);break;case Fu:r.depthFunc(r.EQUAL);break;case Ou:r.depthFunc(r.GEQUAL);break;case Qu:r.depthFunc(r.GREATER);break;case ku:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}F=Ie}},setLocked:function(Ie){N=Ie},setClear:function(Ie){xe!==Ie&&(r.clearDepth(Ie),xe=Ie)},reset:function(){N=!1,ae=null,F=null,xe=null}}}function i(){let N=!1,ae=null,F=null,xe=null,Ie=null,et=null,mt=null,_t=null,Nt=null;return{setTest:function(ot){N||(ot?pe(r.STENCIL_TEST):ge(r.STENCIL_TEST))},setMask:function(ot){ae!==ot&&!N&&(r.stencilMask(ot),ae=ot)},setFunc:function(ot,ai,Ot){(F!==ot||xe!==ai||Ie!==Ot)&&(r.stencilFunc(ot,ai,Ot),F=ot,xe=ai,Ie=Ot)},setOp:function(ot,ai,Ot){(et!==ot||mt!==ai||_t!==Ot)&&(r.stencilOp(ot,ai,Ot),et=ot,mt=ai,_t=Ot)},setLocked:function(ot){N=ot},setClear:function(ot){Nt!==ot&&(r.clearStencil(ot),Nt=ot)},reset:function(){N=!1,ae=null,F=null,xe=null,Ie=null,et=null,mt=null,_t=null,Nt=null}}}const n=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],A=null,g=!1,E=null,p=null,m=null,C=null,x=null,I=null,L=null,b=new we(0,0,0),B=0,G=!1,S=null,y=null,O=null,X=null,P=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,oe=0;const ie=r.getParameter(r.VERSION);ie.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(ie)[1]),K=oe>=1):ie.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),K=oe>=2);let V=null,le={};const re=r.getParameter(r.SCISSOR_BOX),Te=r.getParameter(r.VIEWPORT),Ue=new pt().fromArray(re),qe=new pt().fromArray(Te);function J(N,ae,F,xe){const Ie=new Uint8Array(4),et=r.createTexture();r.bindTexture(N,et),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let mt=0;mt<F;mt++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(ae,0,r.RGBA,1,1,xe,0,r.RGBA,r.UNSIGNED_BYTE,Ie):r.texImage2D(ae+mt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ie);return et}const fe={};fe[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),fe[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),fe[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),s.setClear(1),a.setClear(0),pe(r.DEPTH_TEST),s.setFunc(jr),Ke(!1),He(Xo),pe(r.CULL_FACE),nt(Vi);function pe(N){c[N]!==!0&&(r.enable(N),c[N]=!0)}function ge(N){c[N]!==!1&&(r.disable(N),c[N]=!1)}function ke(N,ae){return h[N]!==ae?(r.bindFramebuffer(N,ae),h[N]=ae,N===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ae),N===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ae),!0):!1}function ze(N,ae){let F=d,xe=!1;if(N){F=u.get(ae),F===void 0&&(F=[],u.set(ae,F));const Ie=N.textures;if(F.length!==Ie.length||F[0]!==r.COLOR_ATTACHMENT0){for(let et=0,mt=Ie.length;et<mt;et++)F[et]=r.COLOR_ATTACHMENT0+et;F.length=Ie.length,xe=!0}}else F[0]!==r.BACK&&(F[0]=r.BACK,xe=!0);xe&&r.drawBuffers(F)}function z(N){return A!==N?(r.useProgram(N),A=N,!0):!1}const at={[yn]:r.FUNC_ADD,[gu]:r.FUNC_SUBTRACT,[Eu]:r.FUNC_REVERSE_SUBTRACT};at[vu]=r.MIN,at[xu]=r.MAX;const De={[yu]:r.ZERO,[Cu]:r.ONE,[_u]:r.SRC_COLOR,[Ao]:r.SRC_ALPHA,[bu]:r.SRC_ALPHA_SATURATE,[wu]:r.DST_COLOR,[Iu]:r.DST_ALPHA,[Mu]:r.ONE_MINUS_SRC_COLOR,[fo]:r.ONE_MINUS_SRC_ALPHA,[Tu]:r.ONE_MINUS_DST_COLOR,[Su]:r.ONE_MINUS_DST_ALPHA,[Bu]:r.CONSTANT_COLOR,[Ru]:r.ONE_MINUS_CONSTANT_COLOR,[Du]:r.CONSTANT_ALPHA,[Pu]:r.ONE_MINUS_CONSTANT_ALPHA};function nt(N,ae,F,xe,Ie,et,mt,_t,Nt,ot){if(N===Vi){g===!0&&(ge(r.BLEND),g=!1);return}if(g===!1&&(pe(r.BLEND),g=!0),N!==mu){if(N!==E||ot!==G){if((p!==yn||x!==yn)&&(r.blendEquation(r.FUNC_ADD),p=yn,x=yn),ot)switch(N){case ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gs:r.blendFunc(r.ONE,r.ONE);break;case Yo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ko:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Gs:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Yo:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ko:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,C=null,I=null,L=null,b.set(0,0,0),B=0,E=N,G=ot}return}Ie=Ie||ae,et=et||F,mt=mt||xe,(ae!==p||Ie!==x)&&(r.blendEquationSeparate(at[ae],at[Ie]),p=ae,x=Ie),(F!==m||xe!==C||et!==I||mt!==L)&&(r.blendFuncSeparate(De[F],De[xe],De[et],De[mt]),m=F,C=xe,I=et,L=mt),(_t.equals(b)===!1||Nt!==B)&&(r.blendColor(_t.r,_t.g,_t.b,Nt),b.copy(_t),B=Nt),E=N,G=!1}function Oe(N,ae){N.side===qt?ge(r.CULL_FACE):pe(r.CULL_FACE);let F=N.side===ti;ae&&(F=!F),Ke(F),N.blending===ts&&N.transparent===!1?nt(Vi):nt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),n.setMask(N.colorWrite);const xe=N.stencilWrite;a.setTest(xe),xe&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ct(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?pe(r.SAMPLE_ALPHA_TO_COVERAGE):ge(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(N){S!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),S=N)}function He(N){N!==Au?(pe(r.CULL_FACE),N!==y&&(N===Xo?r.cullFace(r.BACK):N===fu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ge(r.CULL_FACE),y=N}function Ze(N){N!==O&&(K&&r.lineWidth(N),O=N)}function Ct(N,ae,F){N?(pe(r.POLYGON_OFFSET_FILL),(X!==ae||P!==F)&&(r.polygonOffset(ae,F),X=ae,P=F)):ge(r.POLYGON_OFFSET_FILL)}function R(N){N?pe(r.SCISSOR_TEST):ge(r.SCISSOR_TEST)}function _(N){N===void 0&&(N=r.TEXTURE0+j-1),V!==N&&(r.activeTexture(N),V=N)}function Y(N,ae,F){F===void 0&&(V===null?F=r.TEXTURE0+j-1:F=V);let xe=le[F];xe===void 0&&(xe={type:void 0,texture:void 0},le[F]=xe),(xe.type!==N||xe.texture!==ae)&&(V!==F&&(r.activeTexture(F),V=F),r.bindTexture(N,ae||fe[N]),xe.type=N,xe.texture=ae)}function se(){const N=le[V];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ce(){try{r.compressedTexImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{r.compressedTexImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Be(){try{r.texSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Me(){try{r.texSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ge(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ee(){try{r.texStorage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Re(){try{r.texStorage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $e(){try{r.texImage2D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Fe(){try{r.texImage3D.apply(r,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ye(N){Ue.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),Ue.copy(N))}function Ne(N){qe.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),qe.copy(N))}function Xe(N,ae){let F=l.get(ae);F===void 0&&(F=new WeakMap,l.set(ae,F));let xe=F.get(N);xe===void 0&&(xe=r.getUniformBlockIndex(ae,N.name),F.set(N,xe))}function ct(N,ae){const xe=l.get(ae).get(N);o.get(ae)!==xe&&(r.uniformBlockBinding(ae,xe,N.__bindingPointIndex),o.set(ae,xe))}function Pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},V=null,le={},h={},u=new WeakMap,d=[],A=null,g=!1,E=null,p=null,m=null,C=null,x=null,I=null,L=null,b=new we(0,0,0),B=0,G=!1,S=null,y=null,O=null,X=null,P=null,Ue.set(0,0,r.canvas.width,r.canvas.height),qe.set(0,0,r.canvas.width,r.canvas.height),n.reset(),s.reset(),a.reset()}return{buffers:{color:n,depth:s,stencil:a},enable:pe,disable:ge,bindFramebuffer:ke,drawBuffers:ze,useProgram:z,setBlending:nt,setMaterial:Oe,setFlipSided:Ke,setCullFace:He,setLineWidth:Ze,setPolygonOffset:Ct,setScissorTest:R,activeTexture:_,bindTexture:Y,unbindTexture:se,compressedTexImage2D:ce,compressedTexImage3D:ue,texImage2D:$e,texImage3D:Fe,updateUBOMapping:Xe,uniformBlockBinding:ct,texStorage2D:Ee,texStorage3D:Re,texSubImage2D:Be,texSubImage3D:Me,compressedTexSubImage2D:_e,compressedTexSubImage3D:Ge,scissor:ye,viewport:Ne,reset:Pe}}function Bg(r,e,t,i,n,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ae,h=new WeakMap;let u;const d=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,_){return A?new OffscreenCanvas(R,_):Vs("canvas")}function E(R,_,Y){let se=1;const ce=Ct(R);if((ce.width>Y||ce.height>Y)&&(se=Y/Math.max(ce.width,ce.height)),se<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ue=Math.floor(se*ce.width),Be=Math.floor(se*ce.height);u===void 0&&(u=g(ue,Be));const Me=_?g(ue,Be):u;return Me.width=ue,Me.height=Be,Me.getContext("2d").drawImage(R,0,0,ue,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+ue+"x"+Be+")."),Me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Qt&&R.minFilter!==Et}function m(R){r.generateMipmap(R)}function C(R,_,Y,se,ce=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue=_;if(_===r.RED&&(Y===r.FLOAT&&(ue=r.R32F),Y===r.HALF_FLOAT&&(ue=r.R16F),Y===r.UNSIGNED_BYTE&&(ue=r.R8)),_===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ue=r.R8UI),Y===r.UNSIGNED_SHORT&&(ue=r.R16UI),Y===r.UNSIGNED_INT&&(ue=r.R32UI),Y===r.BYTE&&(ue=r.R8I),Y===r.SHORT&&(ue=r.R16I),Y===r.INT&&(ue=r.R32I)),_===r.RG&&(Y===r.FLOAT&&(ue=r.RG32F),Y===r.HALF_FLOAT&&(ue=r.RG16F),Y===r.UNSIGNED_BYTE&&(ue=r.RG8)),_===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ue=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ue=r.RG16UI),Y===r.UNSIGNED_INT&&(ue=r.RG32UI),Y===r.BYTE&&(ue=r.RG8I),Y===r.SHORT&&(ue=r.RG16I),Y===r.INT&&(ue=r.RG32I)),_===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ue=r.RGB9_E5),_===r.RGBA){const Be=ce?ea:ut.getTransfer(se);Y===r.FLOAT&&(ue=r.RGBA32F),Y===r.HALF_FLOAT&&(ue=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ue=Be===xt?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ue=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ue=r.RGB5_A1)}return(ue===r.R16F||ue===r.R32F||ue===r.RG16F||ue===r.RG32F||ue===r.RGBA16F||ue===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function x(R,_){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Qt&&R.minFilter!==Et?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function I(R){const _=R.target;_.removeEventListener("dispose",I),b(_),_.isVideoTexture&&h.delete(_)}function L(R){const _=R.target;_.removeEventListener("dispose",L),G(_)}function b(R){const _=i.get(R);if(_.__webglInit===void 0)return;const Y=R.source,se=d.get(Y);if(se){const ce=se[_.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&B(R),Object.keys(se).length===0&&d.delete(Y)}i.remove(R)}function B(R){const _=i.get(R);r.deleteTexture(_.__webglTexture);const Y=R.source,se=d.get(Y);delete se[_.__cacheKey],a.memory.textures--}function G(R){const _=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(_.__webglFramebuffer[se]))for(let ce=0;ce<_.__webglFramebuffer[se].length;ce++)r.deleteFramebuffer(_.__webglFramebuffer[se][ce]);else r.deleteFramebuffer(_.__webglFramebuffer[se]);_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer[se])}else{if(Array.isArray(_.__webglFramebuffer))for(let se=0;se<_.__webglFramebuffer.length;se++)r.deleteFramebuffer(_.__webglFramebuffer[se]);else r.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&r.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&r.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let se=0;se<_.__webglColorRenderbuffer.length;se++)_.__webglColorRenderbuffer[se]&&r.deleteRenderbuffer(_.__webglColorRenderbuffer[se]);_.__webglDepthRenderbuffer&&r.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const Y=R.textures;for(let se=0,ce=Y.length;se<ce;se++){const ue=i.get(Y[se]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(Y[se])}i.remove(R)}let S=0;function y(){S=0}function O(){const R=S;return R>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+n.maxTextures),S+=1,R}function X(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function P(R,_){const Y=i.get(R);if(R.isVideoTexture&&He(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){const se=R.image;if(se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(Y,R,_);return}}t.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+_)}function j(R,_){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){Ue(Y,R,_);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+_)}function K(R,_){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){Ue(Y,R,_);return}t.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+_)}function oe(R,_){const Y=i.get(R);if(R.version>0&&Y.__version!==R.version){qe(Y,R,_);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+_)}const ie={[os]:r.REPEAT,[vi]:r.CLAMP_TO_EDGE,[Zr]:r.MIRRORED_REPEAT},V={[Qt]:r.NEAREST,[$c]:r.NEAREST_MIPMAP_NEAREST,[Ps]:r.NEAREST_MIPMAP_LINEAR,[Et]:r.LINEAR,[Wr]:r.LINEAR_MIPMAP_NEAREST,[si]:r.LINEAR_MIPMAP_LINEAR},le={[cd]:r.NEVER,[pd]:r.ALWAYS,[hd]:r.LESS,[ch]:r.LEQUAL,[ud]:r.EQUAL,[fd]:r.GEQUAL,[dd]:r.GREATER,[Ad]:r.NOTEQUAL};function re(R,_){if(_.type===kt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Et||_.magFilter===Wr||_.magFilter===Ps||_.magFilter===si||_.minFilter===Et||_.minFilter===Wr||_.minFilter===Ps||_.minFilter===si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ie[_.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ie[_.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ie[_.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,V[_.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,V[_.minFilter]),_.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,le[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Qt||_.minFilter!==Ps&&_.minFilter!==si||_.type===kt&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function Te(R,_){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",I));const se=_.source;let ce=d.get(se);ce===void 0&&(ce={},d.set(se,ce));const ue=X(_);if(ue!==R.__cacheKey){ce[ue]===void 0&&(ce[ue]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ce[ue].usedTimes++;const Be=ce[R.__cacheKey];Be!==void 0&&(ce[R.__cacheKey].usedTimes--,Be.usedTimes===0&&B(_)),R.__cacheKey=ue,R.__webglTexture=ce[ue].texture}return Y}function Ue(R,_,Y){let se=r.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(se=r.TEXTURE_2D_ARRAY),_.isData3DTexture&&(se=r.TEXTURE_3D);const ce=Te(R,_),ue=_.source;t.bindTexture(se,R.__webglTexture,r.TEXTURE0+Y);const Be=i.get(ue);if(ue.version!==Be.__version||ce===!0){t.activeTexture(r.TEXTURE0+Y);const Me=ut.getPrimaries(ut.workingColorSpace),_e=_.colorSpace===mi?null:ut.getPrimaries(_.colorSpace),Ge=_.colorSpace===mi||Me===_e?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let Ee=E(_.image,!1,n.maxTextureSize);Ee=Ze(_,Ee);const Re=s.convert(_.format,_.colorSpace),$e=s.convert(_.type);let Fe=C(_.internalFormat,Re,$e,_.colorSpace,_.isVideoTexture);re(se,_);let ye;const Ne=_.mipmaps,Xe=_.isVideoTexture!==!0,ct=Be.__version===void 0||ce===!0,Pe=ue.dataReady,N=x(_,Ee);if(_.isDepthTexture)Fe=r.DEPTH_COMPONENT16,_.type===kt?Fe=r.DEPTH_COMPONENT32F:_.type===ls?Fe=r.DEPTH_COMPONENT24:_.type===Xs&&(Fe=r.DEPTH24_STENCIL8),ct&&(Xe?t.texStorage2D(r.TEXTURE_2D,1,Fe,Ee.width,Ee.height):t.texImage2D(r.TEXTURE_2D,0,Fe,Ee.width,Ee.height,0,Re,$e,null));else if(_.isDataTexture)if(Ne.length>0){Xe&&ct&&t.texStorage2D(r.TEXTURE_2D,N,Fe,Ne[0].width,Ne[0].height);for(let ae=0,F=Ne.length;ae<F;ae++)ye=Ne[ae],Xe?Pe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ye.width,ye.height,Re,$e,ye.data):t.texImage2D(r.TEXTURE_2D,ae,Fe,ye.width,ye.height,0,Re,$e,ye.data);_.generateMipmaps=!1}else Xe?(ct&&t.texStorage2D(r.TEXTURE_2D,N,Fe,Ee.width,Ee.height),Pe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee.width,Ee.height,Re,$e,Ee.data)):t.texImage2D(r.TEXTURE_2D,0,Fe,Ee.width,Ee.height,0,Re,$e,Ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Xe&&ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,N,Fe,Ne[0].width,Ne[0].height,Ee.depth);for(let ae=0,F=Ne.length;ae<F;ae++)ye=Ne[ae],_.format!==Bt?Re!==null?Xe?Pe&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,Ee.depth,Re,ye.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ae,Fe,ye.width,ye.height,Ee.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?Pe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ae,0,0,0,ye.width,ye.height,Ee.depth,Re,$e,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ae,Fe,ye.width,ye.height,Ee.depth,0,Re,$e,ye.data)}else{Xe&&ct&&t.texStorage2D(r.TEXTURE_2D,N,Fe,Ne[0].width,Ne[0].height);for(let ae=0,F=Ne.length;ae<F;ae++)ye=Ne[ae],_.format!==Bt?Re!==null?Xe?Pe&&t.compressedTexSubImage2D(r.TEXTURE_2D,ae,0,0,ye.width,ye.height,Re,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,ae,Fe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?Pe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,ye.width,ye.height,Re,$e,ye.data):t.texImage2D(r.TEXTURE_2D,ae,Fe,ye.width,ye.height,0,Re,$e,ye.data)}else if(_.isDataArrayTexture)Xe?(ct&&t.texStorage3D(r.TEXTURE_2D_ARRAY,N,Fe,Ee.width,Ee.height,Ee.depth),Pe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,Re,$e,Ee.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,Ee.width,Ee.height,Ee.depth,0,Re,$e,Ee.data);else if(_.isData3DTexture)Xe?(ct&&t.texStorage3D(r.TEXTURE_3D,N,Fe,Ee.width,Ee.height,Ee.depth),Pe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,Re,$e,Ee.data)):t.texImage3D(r.TEXTURE_3D,0,Fe,Ee.width,Ee.height,Ee.depth,0,Re,$e,Ee.data);else if(_.isFramebufferTexture){if(ct)if(Xe)t.texStorage2D(r.TEXTURE_2D,N,Fe,Ee.width,Ee.height);else{let ae=Ee.width,F=Ee.height;for(let xe=0;xe<N;xe++)t.texImage2D(r.TEXTURE_2D,xe,Fe,ae,F,0,Re,$e,null),ae>>=1,F>>=1}}else if(Ne.length>0){if(Xe&&ct){const ae=Ct(Ne[0]);t.texStorage2D(r.TEXTURE_2D,N,Fe,ae.width,ae.height)}for(let ae=0,F=Ne.length;ae<F;ae++)ye=Ne[ae],Xe?Pe&&t.texSubImage2D(r.TEXTURE_2D,ae,0,0,Re,$e,ye):t.texImage2D(r.TEXTURE_2D,ae,Fe,Re,$e,ye);_.generateMipmaps=!1}else if(Xe){if(ct){const ae=Ct(Ee);t.texStorage2D(r.TEXTURE_2D,N,Fe,ae.width,ae.height)}Pe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Re,$e,Ee)}else t.texImage2D(r.TEXTURE_2D,0,Fe,Re,$e,Ee);p(_)&&m(se),Be.__version=ue.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function qe(R,_,Y){if(_.image.length!==6)return;const se=Te(R,_),ce=_.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+Y);const ue=i.get(ce);if(ce.version!==ue.__version||se===!0){t.activeTexture(r.TEXTURE0+Y);const Be=ut.getPrimaries(ut.workingColorSpace),Me=_.colorSpace===mi?null:ut.getPrimaries(_.colorSpace),_e=_.colorSpace===mi||Be===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,_.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,_.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ge=_.isCompressedTexture||_.image[0].isCompressedTexture,Ee=_.image[0]&&_.image[0].isDataTexture,Re=[];for(let F=0;F<6;F++)!Ge&&!Ee?Re[F]=E(_.image[F],!0,n.maxCubemapSize):Re[F]=Ee?_.image[F].image:_.image[F],Re[F]=Ze(_,Re[F]);const $e=Re[0],Fe=s.convert(_.format,_.colorSpace),ye=s.convert(_.type),Ne=C(_.internalFormat,Fe,ye,_.colorSpace),Xe=_.isVideoTexture!==!0,ct=ue.__version===void 0||se===!0,Pe=ce.dataReady;let N=x(_,$e);re(r.TEXTURE_CUBE_MAP,_);let ae;if(Ge){Xe&&ct&&t.texStorage2D(r.TEXTURE_CUBE_MAP,N,Ne,$e.width,$e.height);for(let F=0;F<6;F++){ae=Re[F].mipmaps;for(let xe=0;xe<ae.length;xe++){const Ie=ae[xe];_.format!==Bt?Fe!==null?Xe?Pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe,0,0,Ie.width,Ie.height,Fe,Ie.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe,Ne,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?Pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe,0,0,Ie.width,Ie.height,Fe,ye,Ie.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe,Ne,Ie.width,Ie.height,0,Fe,ye,Ie.data)}}}else{if(ae=_.mipmaps,Xe&&ct){ae.length>0&&N++;const F=Ct(Re[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,N,Ne,F.width,F.height)}for(let F=0;F<6;F++)if(Ee){Xe?Pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Re[F].width,Re[F].height,Fe,ye,Re[F].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ne,Re[F].width,Re[F].height,0,Fe,ye,Re[F].data);for(let xe=0;xe<ae.length;xe++){const et=ae[xe].image[F].image;Xe?Pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe+1,0,0,et.width,et.height,Fe,ye,et.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe+1,Ne,et.width,et.height,0,Fe,ye,et.data)}}else{Xe?Pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,0,0,Fe,ye,Re[F]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,0,Ne,Fe,ye,Re[F]);for(let xe=0;xe<ae.length;xe++){const Ie=ae[xe];Xe?Pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe+1,0,0,Fe,ye,Ie.image[F]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+F,xe+1,Ne,Fe,ye,Ie.image[F])}}}p(_)&&m(r.TEXTURE_CUBE_MAP),ue.__version=ce.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function J(R,_,Y,se,ce,ue){const Be=s.convert(Y.format,Y.colorSpace),Me=s.convert(Y.type),_e=C(Y.internalFormat,Be,Me,Y.colorSpace);if(!i.get(_).__hasExternalTextures){const Ee=Math.max(1,_.width>>ue),Re=Math.max(1,_.height>>ue);ce===r.TEXTURE_3D||ce===r.TEXTURE_2D_ARRAY?t.texImage3D(ce,ue,_e,Ee,Re,_.depth,0,Be,Me,null):t.texImage2D(ce,ue,_e,Ee,Re,0,Be,Me,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ke(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,se,ce,i.get(Y).__webglTexture,0,Oe(_)):(ce===r.TEXTURE_2D||ce>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,se,ce,i.get(Y).__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function fe(R,_,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,R),_.depthBuffer&&!_.stencilBuffer){let se=r.DEPTH_COMPONENT24;if(Y||Ke(_)){const ce=_.depthTexture;ce&&ce.isDepthTexture&&(ce.type===kt?se=r.DEPTH_COMPONENT32F:ce.type===ls&&(se=r.DEPTH_COMPONENT24));const ue=Oe(_);Ke(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ue,se,_.width,_.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,ue,se,_.width,_.height)}else r.renderbufferStorage(r.RENDERBUFFER,se,_.width,_.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,R)}else if(_.depthBuffer&&_.stencilBuffer){const se=Oe(_);Y&&Ke(_)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,se,r.DEPTH24_STENCIL8,_.width,_.height):Ke(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,se,r.DEPTH24_STENCIL8,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,_.width,_.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,R)}else{const se=_.textures;for(let ce=0;ce<se.length;ce++){const ue=se[ce],Be=s.convert(ue.format,ue.colorSpace),Me=s.convert(ue.type),_e=C(ue.internalFormat,Be,Me,ue.colorSpace),Ge=Oe(_);Y&&Ke(_)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ge,_e,_.width,_.height):Ke(_)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ge,_e,_.width,_.height):r.renderbufferStorage(r.RENDERBUFFER,_e,_.width,_.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(R,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),P(_.depthTexture,0);const se=i.get(_.depthTexture).__webglTexture,ce=Oe(_);if(_.depthTexture.format===is)Ke(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,se,0);else if(_.depthTexture.format===zs)Ke(_)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0,ce):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function ge(R){const _=i.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!_.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");pe(_.__webglFramebuffer,R)}else if(Y){_.__webglDepthbuffer=[];for(let se=0;se<6;se++)t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer[se]),_.__webglDepthbuffer[se]=r.createRenderbuffer(),fe(_.__webglDepthbuffer[se],R,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=r.createRenderbuffer(),fe(_.__webglDepthbuffer,R,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function ke(R,_,Y){const se=i.get(R);_!==void 0&&J(se.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&ge(R)}function ze(R){const _=R.texture,Y=i.get(R),se=i.get(_);R.addEventListener("dispose",L);const ce=R.textures,ue=R.isWebGLCubeRenderTarget===!0,Be=ce.length>1;if(Be||(se.__webglTexture===void 0&&(se.__webglTexture=r.createTexture()),se.__version=_.version,a.memory.textures++),ue){Y.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(_.mipmaps&&_.mipmaps.length>0){Y.__webglFramebuffer[Me]=[];for(let _e=0;_e<_.mipmaps.length;_e++)Y.__webglFramebuffer[Me][_e]=r.createFramebuffer()}else Y.__webglFramebuffer[Me]=r.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Me=0;Me<_.mipmaps.length;Me++)Y.__webglFramebuffer[Me]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Be)for(let Me=0,_e=ce.length;Me<_e;Me++){const Ge=i.get(ce[Me]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Ke(R)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Me=0;Me<ce.length;Me++){const _e=ce[Me];Y.__webglColorRenderbuffer[Me]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Me]);const Ge=s.convert(_e.format,_e.colorSpace),Ee=s.convert(_e.type),Re=C(_e.internalFormat,Ge,Ee,_e.colorSpace,R.isXRRenderTarget===!0),$e=Oe(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,$e,Re,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Me])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),fe(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,se.__webglTexture),re(r.TEXTURE_CUBE_MAP,_);for(let Me=0;Me<6;Me++)if(_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)J(Y.__webglFramebuffer[Me][_e],R,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,_e);else J(Y.__webglFramebuffer[Me],R,_,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);p(_)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Me=0,_e=ce.length;Me<_e;Me++){const Ge=ce[Me],Ee=i.get(Ge);t.bindTexture(r.TEXTURE_2D,Ee.__webglTexture),re(r.TEXTURE_2D,Ge),J(Y.__webglFramebuffer,R,Ge,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,0),p(Ge)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let Me=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Me=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Me,se.__webglTexture),re(Me,_),_.mipmaps&&_.mipmaps.length>0)for(let _e=0;_e<_.mipmaps.length;_e++)J(Y.__webglFramebuffer[_e],R,_,r.COLOR_ATTACHMENT0,Me,_e);else J(Y.__webglFramebuffer,R,_,r.COLOR_ATTACHMENT0,Me,0);p(_)&&m(Me),t.unbindTexture()}R.depthBuffer&&ge(R)}function z(R){const _=R.textures;for(let Y=0,se=_.length;Y<se;Y++){const ce=_[Y];if(p(ce)){const ue=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Be=i.get(ce).__webglTexture;t.bindTexture(ue,Be),m(ue),t.unbindTexture()}}}const at=[],De=[];function nt(R){if(R.samples>0){if(Ke(R)===!1){const _=R.textures,Y=R.width,se=R.height;let ce=r.COLOR_BUFFER_BIT;const ue=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Be=i.get(R),Me=_.length>1;if(Me)for(let _e=0;_e<_.length;_e++)t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let _e=0;_e<_.length;_e++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ce|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ce|=r.STENCIL_BUFFER_BIT)),Me){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Be.__webglColorRenderbuffer[_e]);const Ge=i.get(_[_e]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ge,0)}r.blitFramebuffer(0,0,Y,se,0,0,Y,se,ce,r.NEAREST),l===!0&&(at.length=0,De.length=0,at.push(r.COLOR_ATTACHMENT0+_e),R.depthBuffer&&R.resolveDepthBuffer===!1&&(at.push(ue),De.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,De)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Me)for(let _e=0;_e<_.length;_e++){t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.RENDERBUFFER,Be.__webglColorRenderbuffer[_e]);const Ge=i.get(_[_e]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Be.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+_e,r.TEXTURE_2D,Ge,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const _=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[_])}}}function Oe(R){return Math.min(n.maxSamples,R.samples)}function Ke(R){const _=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function He(R){const _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function Ze(R,_){const Y=R.colorSpace,se=R.format,ce=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Y!==wt&&Y!==mi&&(ut.getTransfer(Y)===xt?(se!==Bt||ce!==Rt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),_}function Ct(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=y,this.setTexture2D=P,this.setTexture2DArray=j,this.setTexture3D=K,this.setTextureCube=oe,this.rebindTextures=ke,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Ke}function Rg(r,e){function t(i,n=mi){let s;const a=ut.getTransfer(n);if(i===Rt)return r.UNSIGNED_BYTE;if(i===ih)return r.UNSIGNED_SHORT_4_4_4_4;if(i===nh)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Zu)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Ju)return r.BYTE;if(i===ju)return r.SHORT;if(i===eh)return r.UNSIGNED_SHORT;if(i===th)return r.INT;if(i===ls)return r.UNSIGNED_INT;if(i===kt)return r.FLOAT;if(i===Ft)return r.HALF_FLOAT;if(i===$u)return r.ALPHA;if(i===ed)return r.RGB;if(i===Bt)return r.RGBA;if(i===td)return r.LUMINANCE;if(i===id)return r.LUMINANCE_ALPHA;if(i===is)return r.DEPTH_COMPONENT;if(i===zs)return r.DEPTH_STENCIL;if(i===an)return r.RED;if(i===sh)return r.RED_INTEGER;if(i===Zn)return r.RG;if(i===rh)return r.RG_INTEGER;if(i===ah)return r.RGBA_INTEGER;if(i===pa||i===qr||i===ma||i===Xr)if(a===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===qr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===qr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mo||i===jo||i===go||i===Zo)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mo)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===go)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eo||i===vo||i===xo)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Eo||i===vo)return a===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xo)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yo||i===$o||i===el||i===tl||i===$r||i===il||i===nl||i===sl||i===rl||i===al||i===ol||i===ll||i===cl||i===hl)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yo)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===$o)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===el)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$r)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===il)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===nl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===al)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ol)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ll)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===hl)return a===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yr||i===ul||i===dl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Yr)return a===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ul)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===dl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nd||i===Al||i===fl||i===pl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Al)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===fl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===pl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class Dg extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Hi extends Ye{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pg={type:"move"};class za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const E of e.hand.values()){const p=t.getJointPose(E,i),m=this._getHandJoint(c,E);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),A=.02,g=.005;c.inputState.pinching&&d>A+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=A-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Hi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Lg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ng=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ug{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new It,s=e.properties.get(n);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,n=new St({vertexShader:Lg,fragmentShader:Ng,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Mt(new js(20,20),n)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Fg extends Sn{constructor(e,t){super();const i=this;let n=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,A=null,g=null;const E=new Ug,p=t.getContextAttributes();let m=null,C=null;const x=[],I=[],L=new Ae;let b=null;const B=new Jt;B.layers.enable(1),B.viewport=new pt;const G=new Jt;G.layers.enable(2),G.viewport=new pt;const S=[B,G],y=new Dg;y.layers.enable(1),y.layers.enable(2);let O=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let fe=x[J];return fe===void 0&&(fe=new za,x[J]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(J){let fe=x[J];return fe===void 0&&(fe=new za,x[J]=fe),fe.getGripSpace()},this.getHand=function(J){let fe=x[J];return fe===void 0&&(fe=new za,x[J]=fe),fe.getHandSpace()};function P(J){const fe=I.indexOf(J.inputSource);if(fe===-1)return;const pe=x[fe];pe!==void 0&&(pe.update(J.inputSource,J.frame,c||a),pe.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){n.removeEventListener("select",P),n.removeEventListener("selectstart",P),n.removeEventListener("selectend",P),n.removeEventListener("squeeze",P),n.removeEventListener("squeezestart",P),n.removeEventListener("squeezeend",P),n.removeEventListener("end",j),n.removeEventListener("inputsourceschange",K);for(let J=0;J<x.length;J++){const fe=I[J];fe!==null&&(I[J]=null,x[J].disconnect(fe))}O=null,X=null,E.reset(),e.setRenderTarget(m),A=null,d=null,u=null,n=null,C=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:A},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",P),n.addEventListener("selectstart",P),n.addEventListener("selectend",P),n.addEventListener("squeeze",P),n.addEventListener("squeezestart",P),n.addEventListener("squeezeend",P),n.addEventListener("end",j),n.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(L),n.renderState.layers===void 0){const fe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};A=new XRWebGLLayer(n,t,fe),n.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),C=new jt(A.framebufferWidth,A.framebufferHeight,{format:Bt,type:Rt,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let fe=null,pe=null,ge=null;p.depth&&(ge=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=p.stencil?zs:is,pe=p.stencil?Xs:ls);const ke={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:s};u=new XRWebGLBinding(n,t),d=u.createProjectionLayer(ke),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),C=new jt(d.textureWidth,d.textureHeight,{format:Bt,type:Rt,depthTexture:new Ch(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),qe.setContext(n),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode};function K(J){for(let fe=0;fe<J.removed.length;fe++){const pe=J.removed[fe],ge=I.indexOf(pe);ge>=0&&(I[ge]=null,x[ge].disconnect(pe))}for(let fe=0;fe<J.added.length;fe++){const pe=J.added[fe];let ge=I.indexOf(pe);if(ge===-1){for(let ze=0;ze<x.length;ze++)if(ze>=I.length){I.push(pe),ge=ze;break}else if(I[ze]===null){I[ze]=pe,ge=ze;break}if(ge===-1)break}const ke=x[ge];ke&&ke.connect(pe)}}const oe=new M,ie=new M;function V(J,fe,pe){oe.setFromMatrixPosition(fe.matrixWorld),ie.setFromMatrixPosition(pe.matrixWorld);const ge=oe.distanceTo(ie),ke=fe.projectionMatrix.elements,ze=pe.projectionMatrix.elements,z=ke[14]/(ke[10]-1),at=ke[14]/(ke[10]+1),De=(ke[9]+1)/ke[5],nt=(ke[9]-1)/ke[5],Oe=(ke[8]-1)/ke[0],Ke=(ze[8]+1)/ze[0],He=z*Oe,Ze=z*Ke,Ct=ge/(-Oe+Ke),R=Ct*-Oe;fe.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(R),J.translateZ(Ct),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert();const _=z+Ct,Y=at+Ct,se=He-R,ce=Ze+(ge-R),ue=De*at/Y*_,Be=nt*at/Y*_;J.projectionMatrix.makePerspective(se,ce,ue,Be,_,Y),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}function le(J,fe){fe===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(fe.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;E.texture!==null&&(J.near=E.depthNear,J.far=E.depthFar),y.near=G.near=B.near=J.near,y.far=G.far=B.far=J.far,(O!==y.near||X!==y.far)&&(n.updateRenderState({depthNear:y.near,depthFar:y.far}),O=y.near,X=y.far,B.near=O,B.far=X,G.near=O,G.far=X,B.updateProjectionMatrix(),G.updateProjectionMatrix(),J.updateProjectionMatrix());const fe=J.parent,pe=y.cameras;le(y,fe);for(let ge=0;ge<pe.length;ge++)le(pe[ge],fe);pe.length===2?V(y,B,G):y.projectionMatrix.copy(B.projectionMatrix),re(J,y,fe)};function re(J,fe,pe){pe===null?J.matrix.copy(fe.matrixWorld):(J.matrix.copy(pe.matrixWorld),J.matrix.invert(),J.matrix.multiply(fe.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(fe.projectionMatrix),J.projectionMatrixInverse.copy(fe.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=hs*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&A===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=J)},this.hasDepthSensing=function(){return E.texture!==null};let Te=null;function Ue(J,fe){if(h=fe.getViewerPose(c||a),g=fe,h!==null){const pe=h.views;A!==null&&(e.setRenderTargetFramebuffer(C,A.framebuffer),e.setRenderTarget(C));let ge=!1;pe.length!==y.cameras.length&&(y.cameras.length=0,ge=!0);for(let ze=0;ze<pe.length;ze++){const z=pe[ze];let at=null;if(A!==null)at=A.getViewport(z);else{const nt=u.getViewSubImage(d,z);at=nt.viewport,ze===0&&(e.setRenderTargetTextures(C,nt.colorTexture,d.ignoreDepthValues?void 0:nt.depthStencilTexture),e.setRenderTarget(C))}let De=S[ze];De===void 0&&(De=new Jt,De.layers.enable(ze),De.viewport=new pt,S[ze]=De),De.matrix.fromArray(z.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(z.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(at.x,at.y,at.width,at.height),ze===0&&(y.matrix.copy(De.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ge===!0&&y.cameras.push(De)}const ke=n.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const ze=u.getDepthInformation(pe[0]);ze&&ze.isValid&&ze.texture&&E.init(e,ze,n.renderState)}}for(let pe=0;pe<x.length;pe++){const ge=I[pe],ke=x[pe];ge!==null&&ke!==void 0&&ke.update(ge,fe,c||a)}E.render(e,y),Te&&Te(J,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),g=null}const qe=new yh;qe.setAnimationLoop(Ue),this.setAnimationLoop=function(J){Te=J},this.dispose=function(){}}}const pn=new Zt,Og=new Le;function Qg(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Eh(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,C,x,I){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),u(p,m)):m.isMeshPhongMaterial?(s(p,m),h(p,m)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&A(p,m,I)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),E(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,C,x):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ti&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ti&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const C=e.get(m),x=C.envMap,I=C.envMapRotation;if(x&&(p.envMap.value=x,pn.copy(I),pn.x*=-1,pn.y*=-1,pn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pn.y*=-1,pn.z*=-1),p.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(pn)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const L=r._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*L,t(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,C,x){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*C,p.scale.value=x*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function A(p,m,C){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ti&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=C.texture,p.transmissionSamplerSize.value.set(C.width,C.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function E(p,m){const C=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(C.matrixWorld),p.nearDistance.value=C.shadow.camera.near,p.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function kg(r,e,t,i){let n={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(C,x){const I=x.program;i.uniformBlockBinding(C,I)}function c(C,x){let I=n[C.id];I===void 0&&(g(C),I=h(C),n[C.id]=I,C.addEventListener("dispose",p));const L=x.program;i.updateUBOMapping(C,L);const b=e.render.frame;s[C.id]!==b&&(d(C),s[C.id]=b)}function h(C){const x=u();C.__bindingPointIndex=x;const I=r.createBuffer(),L=C.__size,b=C.usage;return r.bindBuffer(r.UNIFORM_BUFFER,I),r.bufferData(r.UNIFORM_BUFFER,L,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,I),I}function u(){for(let C=0;C<o;C++)if(a.indexOf(C)===-1)return a.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(C){const x=n[C.id],I=C.uniforms,L=C.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let b=0,B=I.length;b<B;b++){const G=Array.isArray(I[b])?I[b]:[I[b]];for(let S=0,y=G.length;S<y;S++){const O=G[S];if(A(O,b,S,L)===!0){const X=O.__offset,P=Array.isArray(O.value)?O.value:[O.value];let j=0;for(let K=0;K<P.length;K++){const oe=P[K],ie=E(oe);typeof oe=="number"||typeof oe=="boolean"?(O.__data[0]=oe,r.bufferSubData(r.UNIFORM_BUFFER,X+j,O.__data)):oe.isMatrix3?(O.__data[0]=oe.elements[0],O.__data[1]=oe.elements[1],O.__data[2]=oe.elements[2],O.__data[3]=0,O.__data[4]=oe.elements[3],O.__data[5]=oe.elements[4],O.__data[6]=oe.elements[5],O.__data[7]=0,O.__data[8]=oe.elements[6],O.__data[9]=oe.elements[7],O.__data[10]=oe.elements[8],O.__data[11]=0):(oe.toArray(O.__data,j),j+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,X,O.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function A(C,x,I,L){const b=C.value,B=x+"_"+I;if(L[B]===void 0)return typeof b=="number"||typeof b=="boolean"?L[B]=b:L[B]=b.clone(),!0;{const G=L[B];if(typeof b=="number"||typeof b=="boolean"){if(G!==b)return L[B]=b,!0}else if(G.equals(b)===!1)return G.copy(b),!0}return!1}function g(C){const x=C.uniforms;let I=0;const L=16;for(let B=0,G=x.length;B<G;B++){const S=Array.isArray(x[B])?x[B]:[x[B]];for(let y=0,O=S.length;y<O;y++){const X=S[y],P=Array.isArray(X.value)?X.value:[X.value];for(let j=0,K=P.length;j<K;j++){const oe=P[j],ie=E(oe),V=I%L;V!==0&&L-V<ie.boundary&&(I+=L-V),X.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=I,I+=ie.storage}}}const b=I%L;return b>0&&(I+=L-b),C.__size=I,C.__cache={},this}function E(C){const x={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(x.boundary=4,x.storage=4):C.isVector2?(x.boundary=8,x.storage=8):C.isVector3||C.isColor?(x.boundary=16,x.storage=12):C.isVector4?(x.boundary=16,x.storage=16):C.isMatrix3?(x.boundary=48,x.storage=48):C.isMatrix4?(x.boundary=64,x.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),x}function p(C){const x=C.target;x.removeEventListener("dispose",p);const I=a.indexOf(x.__bindingPointIndex);a.splice(I,1),r.deleteBuffer(n[x.id]),delete n[x.id],delete s[x.id]}function m(){for(const C in n)r.deleteBuffer(n[C]);a=[],n={},s={}}return{bind:l,update:c,dispose:m}}class Gg{constructor(e={}){const{canvas:t=Dd(),context:i=null,depth:n=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const A=new Uint32Array(4),g=new Int32Array(4);let E=null,p=null;const m=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=dt,this._useLegacyLights=!1,this.toneMapping=ln,this.toneMappingExposure=1;const x=this;let I=!1,L=0,b=0,B=null,G=-1,S=null;const y=new pt,O=new pt;let X=null;const P=new we(0);let j=0,K=t.width,oe=t.height,ie=1,V=null,le=null;const re=new pt(0,0,K,oe),Te=new pt(0,0,K,oe);let Ue=!1;const qe=new Js;let J=!1,fe=!1;const pe=new Le,ge=new M,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ze(){return B===null?ie:1}let z=i;function at(T,k){return t.getContext(T,k)}try{const T={alpha:!0,depth:n,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ro}`),t.addEventListener("webglcontextlost",N,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",F,!1),z===null){const k="webgl2";if(z=at(k,T),z===null)throw at(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let De,nt,Oe,Ke,He,Ze,Ct,R,_,Y,se,ce,ue,Be,Me,_e,Ge,Ee,Re,$e,Fe,ye,Ne,Xe;function ct(){De=new Kp(z),De.init(),ye=new Rg(z,De),nt=new Hp(z,De,e,ye),Oe=new bg(z),Ke=new Zp(z),He=new pg,Ze=new Bg(z,De,Oe,He,nt,ye,Ke),Ct=new Wp(x),R=new Yp(x),_=new sA(z),Ne=new Gp(z,_),Y=new Jp(z,_,Ke,Ne),se=new em(z,Y,_,Ke),Re=new $p(z,nt,Ze),_e=new Vp(He),ce=new fg(x,Ct,R,De,nt,Ne,_e),ue=new Qg(x,He),Be=new gg,Me=new _g(De),Ee=new kp(x,Ct,R,Oe,se,d,l),Ge=new Tg(x,se,nt),Xe=new kg(z,Ke,nt,Oe),$e=new zp(z,De,Ke),Fe=new jp(z,De,Ke),Ke.programs=ce.programs,x.capabilities=nt,x.extensions=De,x.properties=He,x.renderLists=Be,x.shadowMap=Ge,x.state=Oe,x.info=Ke}ct();const Pe=new Fg(x,z);this.xr=Pe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=De.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=De.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(T){T!==void 0&&(ie=T,this.setSize(K,oe,!1))},this.getSize=function(T){return T.set(K,oe)},this.setSize=function(T,k,W=!0){if(Pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,oe=k,t.width=Math.floor(T*ie),t.height=Math.floor(k*ie),W===!0&&(t.style.width=T+"px",t.style.height=k+"px"),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(K*ie,oe*ie).floor()},this.setDrawingBufferSize=function(T,k,W){K=T,oe=k,ie=W,t.width=Math.floor(T*W),t.height=Math.floor(k*W),this.setViewport(0,0,T,k)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(re)},this.setViewport=function(T,k,W,H){T.isVector4?re.set(T.x,T.y,T.z,T.w):re.set(T,k,W,H),Oe.viewport(y.copy(re).multiplyScalar(ie).round())},this.getScissor=function(T){return T.copy(Te)},this.setScissor=function(T,k,W,H){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,k,W,H),Oe.scissor(O.copy(Te).multiplyScalar(ie).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(T){Oe.setScissorTest(Ue=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){le=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(T=!0,k=!0,W=!0){let H=0;if(T){let f=!1;if(B!==null){const v=B.texture.format;f=v===ah||v===rh||v===sh}if(f){const v=B.texture.type,w=v===Rt||v===ls||v===eh||v===Xs||v===ih||v===nh,D=Ee.getClearColor(),Q=Ee.getClearAlpha(),U=D.r,q=D.g,$=D.b;w?(A[0]=U,A[1]=q,A[2]=$,A[3]=Q,z.clearBufferuiv(z.COLOR,0,A)):(g[0]=U,g[1]=q,g[2]=$,g[3]=Q,z.clearBufferiv(z.COLOR,0,g))}else H|=z.COLOR_BUFFER_BIT}k&&(H|=z.DEPTH_BUFFER_BIT),W&&(H|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",N,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",F,!1),Be.dispose(),Me.dispose(),He.dispose(),Ct.dispose(),R.dispose(),se.dispose(),Ne.dispose(),Xe.dispose(),ce.dispose(),Pe.dispose(),Pe.removeEventListener("sessionstart",ot),Pe.removeEventListener("sessionend",ai),Ot.stop()};function N(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const T=Ke.autoReset,k=Ge.enabled,W=Ge.autoUpdate,H=Ge.needsUpdate,f=Ge.type;ct(),Ke.autoReset=T,Ge.enabled=k,Ge.autoUpdate=W,Ge.needsUpdate=H,Ge.type=f}function F(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function xe(T){const k=T.target;k.removeEventListener("dispose",xe),Ie(k)}function Ie(T){et(T),He.remove(T)}function et(T){const k=He.get(T).programs;k!==void 0&&(k.forEach(function(W){ce.releaseProgram(W)}),T.isShaderMaterial&&ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,W,H,f,v){k===null&&(k=ke);const w=f.isMesh&&f.matrixWorld.determinant()<0,D=Aa(T,k,W,H,f);Oe.setMaterial(H,w);let Q=W.index,U=1;if(H.wireframe===!0){if(Q=Y.getWireframeAttribute(W),Q===void 0)return;U=2}const q=W.drawRange,$=W.attributes.position;let Z=q.start*U,te=(q.start+q.count)*U;v!==null&&(Z=Math.max(Z,v.start*U),te=Math.min(te,(v.start+v.count)*U)),Q!==null?(Z=Math.max(Z,0),te=Math.min(te,Q.count)):$!=null&&(Z=Math.max(Z,0),te=Math.min(te,$.count));const ee=te-Z;if(ee<0||ee===1/0)return;Ne.setup(f,H,D,W,Q);let ve,he=$e;if(Q!==null&&(ve=_.get(Q),he=Fe,he.setIndex(ve)),f.isMesh)H.wireframe===!0?(Oe.setLineWidth(H.wireframeLinewidth*ze()),he.setMode(z.LINES)):he.setMode(z.TRIANGLES);else if(f.isLine){let ne=H.linewidth;ne===void 0&&(ne=1),Oe.setLineWidth(ne*ze()),f.isLineSegments?he.setMode(z.LINES):f.isLineLoop?he.setMode(z.LINE_LOOP):he.setMode(z.LINE_STRIP)}else f.isPoints?he.setMode(z.POINTS):f.isSprite&&he.setMode(z.TRIANGLES);if(f.isBatchedMesh)f._multiDrawInstances!==null?he.renderMultiDrawInstances(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount,f._multiDrawInstances):he.renderMultiDraw(f._multiDrawStarts,f._multiDrawCounts,f._multiDrawCount);else if(f.isInstancedMesh)he.renderInstances(Z,ee,f.count);else if(W.isInstancedBufferGeometry){const ne=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,be=Math.min(W.instanceCount,ne);he.renderInstances(Z,ee,be)}else he.render(Z,ee)};function mt(T,k,W){T.transparent===!0&&T.side===qt&&T.forceSinglePass===!1?(T.side=ti,T.needsUpdate=!0,cn(T,k,W),T.side=Xi,T.needsUpdate=!0,cn(T,k,W),T.side=qt):cn(T,k,W)}this.compile=function(T,k,W=null){W===null&&(W=T),p=Me.get(W),p.init(k),C.push(p),W.traverseVisible(function(f){f.isLight&&f.layers.test(k.layers)&&(p.pushLight(f),f.castShadow&&p.pushShadow(f))}),T!==W&&T.traverseVisible(function(f){f.isLight&&f.layers.test(k.layers)&&(p.pushLight(f),f.castShadow&&p.pushShadow(f))}),p.setupLights(x._useLegacyLights);const H=new Set;return T.traverse(function(f){const v=f.material;if(v)if(Array.isArray(v))for(let w=0;w<v.length;w++){const D=v[w];mt(D,W,f),H.add(D)}else mt(v,W,f),H.add(v)}),C.pop(),p=null,H},this.compileAsync=function(T,k,W=null){const H=this.compile(T,k,W);return new Promise(f=>{function v(){if(H.forEach(function(w){He.get(w).currentProgram.isReady()&&H.delete(w)}),H.size===0){f(T);return}setTimeout(v,10)}De.get("KHR_parallel_shader_compile")!==null?v():setTimeout(v,10)})};let _t=null;function Nt(T){_t&&_t(T)}function ot(){Ot.stop()}function ai(){Ot.start()}const Ot=new yh;Ot.setAnimationLoop(Nt),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(T){_t=T,Pe.setAnimationLoop(T),T===null?Ot.stop():Ot.start()},Pe.addEventListener("sessionstart",ot),Pe.addEventListener("sessionend",ai),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Pe.enabled===!0&&Pe.isPresenting===!0&&(Pe.cameraAutoUpdate===!0&&Pe.updateCamera(k),k=Pe.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,k,B),p=Me.get(T,C.length),p.init(k),C.push(p),pe.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),qe.setFromProjectionMatrix(pe),fe=this.localClippingEnabled,J=_e.init(this.clippingPlanes,fe),E=Be.get(T,m.length),E.init(),m.push(E),tr(T,k,0,x.sortObjects),E.finish(),x.sortObjects===!0&&E.sort(V,le);const W=Pe.enabled===!1||Pe.isPresenting===!1||Pe.hasDepthSensing()===!1;W&&Ee.addToRenderList(E,T),this.info.render.frame++,J===!0&&_e.beginShadows();const H=p.state.shadowsArray;Ge.render(H,T,k),J===!0&&_e.endShadows(),this.info.autoReset===!0&&this.info.reset();const f=E.opaque,v=E.transmissive;if(p.setupLights(x._useLegacyLights),k.isArrayCamera){const w=k.cameras;if(v.length>0)for(let D=0,Q=w.length;D<Q;D++){const U=w[D];nr(f,v,T,U)}W&&Ee.render(T);for(let D=0,Q=w.length;D<Q;D++){const U=w[D];ir(E,T,U,U.viewport)}}else v.length>0&&nr(f,v,T,k),W&&Ee.render(T),ir(E,T,k);B!==null&&(Ze.updateMultisampleRenderTarget(B),Ze.updateRenderTargetMipmap(B)),T.isScene===!0&&T.onAfterRender(x,T,k),Ne.resetDefaultState(),G=-1,S=null,C.pop(),C.length>0?(p=C[C.length-1],J===!0&&_e.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?E=m[m.length-1]:E=null};function tr(T,k,W,H){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)W=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||qe.intersectsSprite(T)){H&&ge.setFromMatrixPosition(T.matrixWorld).applyMatrix4(pe);const w=se.update(T),D=T.material;D.visible&&E.push(T,w,D,W,ge.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||qe.intersectsObject(T))){const w=se.update(T),D=T.material;if(H&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ge.copy(T.boundingSphere.center)):(w.boundingSphere===null&&w.computeBoundingSphere(),ge.copy(w.boundingSphere.center)),ge.applyMatrix4(T.matrixWorld).applyMatrix4(pe)),Array.isArray(D)){const Q=w.groups;for(let U=0,q=Q.length;U<q;U++){const $=Q[U],Z=D[$.materialIndex];Z&&Z.visible&&E.push(T,w,Z,W,ge.z,$)}}else D.visible&&E.push(T,w,D,W,ge.z,null)}}const v=T.children;for(let w=0,D=v.length;w<D;w++)tr(v[w],k,W,H)}function ir(T,k,W,H){const f=T.opaque,v=T.transmissive,w=T.transparent;p.setupLightsView(W),J===!0&&_e.setGlobalState(x.clippingPlanes,W),H&&Oe.viewport(y.copy(H)),f.length>0&&wn(f,k,W),v.length>0&&wn(v,k,W),w.length>0&&wn(w,k,W),Oe.buffers.depth.setTest(!0),Oe.buffers.depth.setMask(!0),Oe.buffers.color.setMask(!0),Oe.setPolygonOffset(!1)}function nr(T,k,W,H){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[H.id]===void 0&&(p.state.transmissionRenderTarget[H.id]=new jt(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?Ft:Rt,minFilter:si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const v=p.state.transmissionRenderTarget[H.id],w=H.viewport||y;v.setSize(w.z,w.w);const D=x.getRenderTarget();x.setRenderTarget(v),x.getClearColor(P),j=x.getClearAlpha(),j<1&&x.setClearColor(16777215,.5),x.clear();const Q=x.toneMapping;x.toneMapping=ln;const U=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),p.setupLightsView(H),J===!0&&_e.setGlobalState(x.clippingPlanes,H),wn(T,W,H),Ze.updateMultisampleRenderTarget(v),Ze.updateRenderTargetMipmap(v),De.has("WEBGL_multisampled_render_to_texture")===!1){let q=!1;for(let $=0,Z=k.length;$<Z;$++){const te=k[$],ee=te.object,ve=te.geometry,he=te.material,ne=te.group;if(he.side===qt&&ee.layers.test(H.layers)){const be=he.side;he.side=ti,he.needsUpdate=!0,sr(ee,W,H,ve,he,ne),he.side=be,he.needsUpdate=!0,q=!0}}q===!0&&(Ze.updateMultisampleRenderTarget(v),Ze.updateRenderTargetMipmap(v))}x.setRenderTarget(D),x.setClearColor(P,j),U!==void 0&&(H.viewport=U),x.toneMapping=Q}function wn(T,k,W){const H=k.isScene===!0?k.overrideMaterial:null;for(let f=0,v=T.length;f<v;f++){const w=T[f],D=w.object,Q=w.geometry,U=H===null?w.material:H,q=w.group;D.layers.test(W.layers)&&sr(D,k,W,Q,U,q)}}function sr(T,k,W,H,f,v){T.onBeforeRender(x,k,W,H,f,v),T.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),f.onBeforeRender(x,k,W,H,T,v),f.transparent===!0&&f.side===qt&&f.forceSinglePass===!1?(f.side=ti,f.needsUpdate=!0,x.renderBufferDirect(W,k,H,f,T,v),f.side=Xi,f.needsUpdate=!0,x.renderBufferDirect(W,k,H,f,T,v),f.side=qt):x.renderBufferDirect(W,k,H,f,T,v),T.onAfterRender(x,k,W,H,f,v)}function cn(T,k,W){k.isScene!==!0&&(k=ke);const H=He.get(T),f=p.state.lights,v=p.state.shadowsArray,w=f.state.version,D=ce.getParameters(T,f.state,v,k,W),Q=ce.getProgramCacheKey(D);let U=H.programs;H.environment=T.isMeshStandardMaterial?k.environment:null,H.fog=k.fog,H.envMap=(T.isMeshStandardMaterial?R:Ct).get(T.envMap||H.environment),H.envMapRotation=H.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,U===void 0&&(T.addEventListener("dispose",xe),U=new Map,H.programs=U);let q=U.get(Q);if(q!==void 0){if(H.currentProgram===q&&H.lightsStateVersion===w)return ar(T,D),q}else D.uniforms=ce.getUniforms(T),T.onBuild(W,D,x),T.onBeforeCompile(D,x),q=ce.acquireProgram(D,Q),U.set(Q,q),H.uniforms=D.uniforms;const $=H.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&($.clippingPlanes=_e.uniform),ar(T,D),H.needsLights=or(T),H.lightsStateVersion=w,H.needsLights&&($.ambientLightColor.value=f.state.ambient,$.lightProbe.value=f.state.probe,$.directionalLights.value=f.state.directional,$.directionalLightShadows.value=f.state.directionalShadow,$.spotLights.value=f.state.spot,$.spotLightShadows.value=f.state.spotShadow,$.rectAreaLights.value=f.state.rectArea,$.ltc_1.value=f.state.rectAreaLTC1,$.ltc_2.value=f.state.rectAreaLTC2,$.pointLights.value=f.state.point,$.pointLightShadows.value=f.state.pointShadow,$.hemisphereLights.value=f.state.hemi,$.directionalShadowMap.value=f.state.directionalShadowMap,$.directionalShadowMatrix.value=f.state.directionalShadowMatrix,$.spotShadowMap.value=f.state.spotShadowMap,$.spotLightMatrix.value=f.state.spotLightMatrix,$.spotLightMap.value=f.state.spotLightMap,$.pointShadowMap.value=f.state.pointShadowMap,$.pointShadowMatrix.value=f.state.pointShadowMatrix),H.currentProgram=q,H.uniformsList=null,q}function rr(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Kr.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function ar(T,k){const W=He.get(T);W.outputColorSpace=k.outputColorSpace,W.batching=k.batching,W.instancing=k.instancing,W.instancingColor=k.instancingColor,W.instancingMorph=k.instancingMorph,W.skinning=k.skinning,W.morphTargets=k.morphTargets,W.morphNormals=k.morphNormals,W.morphColors=k.morphColors,W.morphTargetsCount=k.morphTargetsCount,W.numClippingPlanes=k.numClippingPlanes,W.numIntersection=k.numClipIntersection,W.vertexAlphas=k.vertexAlphas,W.vertexTangents=k.vertexTangents,W.toneMapping=k.toneMapping}function Aa(T,k,W,H,f){k.isScene!==!0&&(k=ke),Ze.resetTextureUnits();const v=k.fog,w=H.isMeshStandardMaterial?k.environment:null,D=B===null?x.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:wt,Q=(H.isMeshStandardMaterial?R:Ct).get(H.envMap||w),U=H.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,q=!!W.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),$=!!W.morphAttributes.position,Z=!!W.morphAttributes.normal,te=!!W.morphAttributes.color;let ee=ln;H.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(ee=x.toneMapping);const ve=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,he=ve!==void 0?ve.length:0,ne=He.get(H),be=p.state.lights;if(J===!0&&(fe===!0||T!==S)){const st=T===S&&H.id===G;_e.setState(H,T,st)}let de=!1;H.version===ne.__version?(ne.needsLights&&ne.lightsStateVersion!==be.state.version||ne.outputColorSpace!==D||f.isBatchedMesh&&ne.batching===!1||!f.isBatchedMesh&&ne.batching===!0||f.isInstancedMesh&&ne.instancing===!1||!f.isInstancedMesh&&ne.instancing===!0||f.isSkinnedMesh&&ne.skinning===!1||!f.isSkinnedMesh&&ne.skinning===!0||f.isInstancedMesh&&ne.instancingColor===!0&&f.instanceColor===null||f.isInstancedMesh&&ne.instancingColor===!1&&f.instanceColor!==null||f.isInstancedMesh&&ne.instancingMorph===!0&&f.morphTexture===null||f.isInstancedMesh&&ne.instancingMorph===!1&&f.morphTexture!==null||ne.envMap!==Q||H.fog===!0&&ne.fog!==v||ne.numClippingPlanes!==void 0&&(ne.numClippingPlanes!==_e.numPlanes||ne.numIntersection!==_e.numIntersection)||ne.vertexAlphas!==U||ne.vertexTangents!==q||ne.morphTargets!==$||ne.morphNormals!==Z||ne.morphColors!==te||ne.toneMapping!==ee||ne.morphTargetsCount!==he)&&(de=!0):(de=!0,ne.__version=H.version);let Se=ne.currentProgram;de===!0&&(Se=cn(H,k,f));let Qe=!1,tt=!1,gt=!1;const ht=Se.getUniforms(),it=ne.uniforms;if(Oe.useProgram(Se.program)&&(Qe=!0,tt=!0,gt=!0),H.id!==G&&(G=H.id,tt=!0),Qe||S!==T){ht.setValue(z,"projectionMatrix",T.projectionMatrix),ht.setValue(z,"viewMatrix",T.matrixWorldInverse);const st=ht.map.cameraPosition;st!==void 0&&st.setValue(z,ge.setFromMatrixPosition(T.matrixWorld)),nt.logarithmicDepthBuffer&&ht.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ht.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),S!==T&&(S=T,tt=!0,gt=!0)}if(f.isSkinnedMesh){ht.setOptional(z,f,"bindMatrix"),ht.setOptional(z,f,"bindMatrixInverse");const st=f.skeleton;st&&(st.boneTexture===null&&st.computeBoneTexture(),ht.setValue(z,"boneTexture",st.boneTexture,Ze))}f.isBatchedMesh&&(ht.setOptional(z,f,"batchingTexture"),ht.setValue(z,"batchingTexture",f._matricesTexture,Ze));const Je=W.morphAttributes;if((Je.position!==void 0||Je.normal!==void 0||Je.color!==void 0)&&Re.update(f,W,Se),(tt||ne.receiveShadow!==f.receiveShadow)&&(ne.receiveShadow=f.receiveShadow,ht.setValue(z,"receiveShadow",f.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(it.envMap.value=Q,it.flipEnvMap.value=Q.isCubeTexture&&Q.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&k.environment!==null&&(it.envMapIntensity.value=k.environmentIntensity),tt&&(ht.setValue(z,"toneMappingExposure",x.toneMappingExposure),ne.needsLights&&fa(it,gt),v&&H.fog===!0&&ue.refreshFogUniforms(it,v),ue.refreshMaterialUniforms(it,H,ie,oe,p.state.transmissionRenderTarget[T.id]),Kr.upload(z,rr(ne),it,Ze)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Kr.upload(z,rr(ne),it,Ze),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ht.setValue(z,"center",f.center),ht.setValue(z,"modelViewMatrix",f.modelViewMatrix),ht.setValue(z,"normalMatrix",f.normalMatrix),ht.setValue(z,"modelMatrix",f.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const st=H.uniformsGroups;for(let Ht=0,Tt=st.length;Ht<Tt;Ht++){const rt=st[Ht];Xe.update(rt,Se),Xe.bind(rt,Se)}}return Se}function fa(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function or(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(T,k,W){He.get(T.texture).__webglTexture=k,He.get(T.depthTexture).__webglTexture=W;const H=He.get(T);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=W===void 0,H.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,k){const W=He.get(T);W.__webglFramebuffer=k,W.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,W=0){B=T,L=k,b=W;let H=!0,f=null,v=!1,w=!1;if(T){const Q=He.get(T);Q.__useDefaultFramebuffer!==void 0?(Oe.bindFramebuffer(z.FRAMEBUFFER,null),H=!1):Q.__webglFramebuffer===void 0?Ze.setupRenderTarget(T):Q.__hasExternalTextures&&Ze.rebindTextures(T,He.get(T.texture).__webglTexture,He.get(T.depthTexture).__webglTexture);const U=T.texture;(U.isData3DTexture||U.isDataArrayTexture||U.isCompressedArrayTexture)&&(w=!0);const q=He.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(q[k])?f=q[k][W]:f=q[k],v=!0):T.samples>0&&Ze.useMultisampledRTT(T)===!1?f=He.get(T).__webglMultisampledFramebuffer:Array.isArray(q)?f=q[W]:f=q,y.copy(T.viewport),O.copy(T.scissor),X=T.scissorTest}else y.copy(re).multiplyScalar(ie).floor(),O.copy(Te).multiplyScalar(ie).floor(),X=Ue;if(Oe.bindFramebuffer(z.FRAMEBUFFER,f)&&H&&Oe.drawBuffers(T,f),Oe.viewport(y),Oe.scissor(O),Oe.setScissorTest(X),v){const Q=He.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,Q.__webglTexture,W)}else if(w){const Q=He.get(T.texture),U=k||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Q.__webglTexture,W||0,U)}G=-1},this.readRenderTargetPixels=function(T,k,W,H,f,v,w){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let D=He.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&w!==void 0&&(D=D[w]),D){Oe.bindFramebuffer(z.FRAMEBUFFER,D);try{const Q=T.texture,U=Q.format,q=Q.type;if(!nt.textureFormatReadable(U)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-H&&W>=0&&W<=T.height-f&&z.readPixels(k,W,H,f,ye.convert(U),ye.convert(q),v)}finally{const Q=B!==null?He.get(B).__webglFramebuffer:null;Oe.bindFramebuffer(z.FRAMEBUFFER,Q)}}},this.copyFramebufferToTexture=function(T,k,W=0){const H=Math.pow(2,-W),f=Math.floor(k.image.width*H),v=Math.floor(k.image.height*H);Ze.setTexture2D(k,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,T.x,T.y,f,v),Oe.unbindTexture()},this.copyTextureToTexture=function(T,k,W,H=0){const f=k.image.width,v=k.image.height,w=ye.convert(W.format),D=ye.convert(W.type);Ze.setTexture2D(W,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,W.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,W.unpackAlignment),k.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,T.x,T.y,f,v,w,D,k.image.data):k.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,T.x,T.y,k.mipmaps[0].width,k.mipmaps[0].height,w,k.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,H,T.x,T.y,w,D,k.image),H===0&&W.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Oe.unbindTexture()},this.copyTextureToTexture3D=function(T,k,W,H,f=0){const v=T.max.x-T.min.x,w=T.max.y-T.min.y,D=T.max.z-T.min.z,Q=ye.convert(H.format),U=ye.convert(H.type);let q;if(H.isData3DTexture)Ze.setTexture3D(H,0),q=z.TEXTURE_3D;else if(H.isDataArrayTexture||H.isCompressedArrayTexture)Ze.setTexture2DArray(H,0),q=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const $=z.getParameter(z.UNPACK_ROW_LENGTH),Z=z.getParameter(z.UNPACK_IMAGE_HEIGHT),te=z.getParameter(z.UNPACK_SKIP_PIXELS),ee=z.getParameter(z.UNPACK_SKIP_ROWS),ve=z.getParameter(z.UNPACK_SKIP_IMAGES),he=W.isCompressedTexture?W.mipmaps[f]:W.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,he.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,he.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,T.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,T.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,T.min.z),W.isDataTexture||W.isData3DTexture?z.texSubImage3D(q,f,k.x,k.y,k.z,v,w,D,Q,U,he.data):H.isCompressedArrayTexture?z.compressedTexSubImage3D(q,f,k.x,k.y,k.z,v,w,D,Q,he.data):z.texSubImage3D(q,f,k.x,k.y,k.z,v,w,D,Q,U,he),z.pixelStorei(z.UNPACK_ROW_LENGTH,$),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Z),z.pixelStorei(z.UNPACK_SKIP_PIXELS,te),z.pixelStorei(z.UNPACK_SKIP_ROWS,ee),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ve),f===0&&H.generateMipmaps&&z.generateMipmap(q),Oe.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ze.setTextureCube(T,0):T.isData3DTexture?Ze.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ze.setTexture2DArray(T,0):Ze.setTexture2D(T,0),Oe.unbindTexture()},this.resetState=function(){L=0,b=0,B=null,Oe.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===oa?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Ys?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class zg extends Ye{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zt,this.environmentIntensity=1,this.environmentRotation=new Zt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Th{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_o,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=xi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return uh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=xi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new M;class Ws{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=gi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=At(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=At(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=gi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=gi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=gi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=gi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),n=At(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=At(t,this.array),i=At(i,this.array),n=At(n,this.array),s=At(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ws(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class bh extends yi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Wn;const Ms=new M,qn=new M,Xn=new M,Yn=new Ae,Is=new Ae,Bh=new Le,Br=new M,Ss=new M,Rr=new M,hc=new Ae,Ha=new Ae,uc=new Ae;class Hg extends Ye{constructor(e=new bh){if(super(),this.isSprite=!0,this.type="Sprite",Wn===void 0){Wn=new $t;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Th(t,5);Wn.setIndex([0,1,2,0,2,3]),Wn.setAttribute("position",new Ws(i,3,0,!1)),Wn.setAttribute("uv",new Ws(i,2,3,!1))}this.geometry=Wn,this.material=e,this.center=new Ae(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qn.setFromMatrixScale(this.matrixWorld),Bh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Xn.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qn.multiplyScalar(-Xn.z);const i=this.material.rotation;let n,s;i!==0&&(s=Math.cos(i),n=Math.sin(i));const a=this.center;Dr(Br.set(-.5,-.5,0),Xn,a,qn,n,s),Dr(Ss.set(.5,-.5,0),Xn,a,qn,n,s),Dr(Rr.set(.5,.5,0),Xn,a,qn,n,s),hc.set(0,0),Ha.set(1,0),uc.set(1,1);let o=e.ray.intersectTriangle(Br,Ss,Rr,!1,Ms);if(o===null&&(Dr(Ss.set(-.5,.5,0),Xn,a,qn,n,s),Ha.set(0,1),o=e.ray.intersectTriangle(Br,Rr,Ss,!1,Ms),o===null))return;const l=e.ray.origin.distanceTo(Ms);l<e.near||l>e.far||t.push({distance:l,point:Ms.clone(),uv:Ei.getInterpolation(Ms,Br,Ss,Rr,hc,Ha,uc,new Ae),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Dr(r,e,t,i,n,s){Yn.subVectors(r,t).addScalar(.5).multiply(i),n!==void 0?(Is.x=s*Yn.x-n*Yn.y,Is.y=n*Yn.x+s*Yn.y):Is.copy(Yn),r.copy(e),r.x+=Is.x,r.y+=Is.y,r.applyMatrix4(Bh)}const dc=new M,Ac=new pt,fc=new pt,Vg=new M,pc=new Le,Pr=new M,Va=new _i,mc=new Le,Wa=new Ks;class Wg extends Mt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jo,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new ri),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Pr),this.boundingBox.expandByPoint(Pr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new _i),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Pr),this.boundingSphere.expandByPoint(Pr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Va.copy(this.boundingSphere),Va.applyMatrix4(n),e.ray.intersectsSphere(Va)!==!1&&(mc.copy(n).invert(),Wa.copy(e.ray).applyMatrix4(mc),!(this.boundingBox!==null&&Wa.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Wa)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new pt,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ku?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,n=this.geometry;Ac.fromBufferAttribute(n.attributes.skinIndex,e),fc.fromBufferAttribute(n.attributes.skinWeight,e),dc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=fc.getComponent(s);if(a!==0){const o=Ac.getComponent(s);pc.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(Vg.copy(dc).applyMatrix4(pc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rh extends Ye{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Zs extends It{constructor(e=null,t=1,i=1,n,s,a,o,l,c=Qt,h=Qt,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gc=new Le,qg=new Le;class No{constructor(e=[],t=[]){this.uuid=xi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Le;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:qg;gc.multiplyMatrices(o,t[s]),gc.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new No(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Zs(t,e,e,Bt,kt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Rh),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const a=t[n];e.bones.push(a.uuid);const o=i[n];e.boneInverses.push(o.toArray())}return e}}class qs extends Gt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Kn=new Le,Ec=new Le,Lr=[],vc=new ri,Xg=new Le,ws=new Mt,Ts=new _i;class Wi extends Mt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new qs(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,Xg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ri),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Kn),vc.copy(e.boundingBox).applyMatrix4(Kn),this.boundingBox.union(vc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new _i),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Kn),Ts.copy(e.boundingSphere).applyMatrix4(Kn),this.boundingSphere.union(Ts)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){const i=this.matrixWorld,n=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(i),e.ray.intersectsSphere(Ts)!==!1))for(let s=0;s<n;s++){this.getMatrixAt(s,Kn),Ec.multiplyMatrices(i,Kn),ws.matrixWorld=Ec,ws.raycast(e,Lr);for(let a=0,o=Lr.length;a<o;a++){const l=Lr[a];l.instanceId=s,l.object=this,t.push(l)}Lr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new qs(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new Zs(new Float32Array(n*this.count),n,this.count,an,kt));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=n*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Dh extends yi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new we(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const sa=new M,ra=new M,xc=new Le,bs=new Ks,Nr=new _i,qa=new M,yc=new M;class Uo extends Ye{constructor(e=new $t,t=new Dh){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)sa.fromBufferAttribute(t,n-1),ra.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=sa.distanceTo(ra);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nr.copy(i.boundingSphere),Nr.applyMatrix4(n),Nr.radius+=s,e.ray.intersectsSphere(Nr)===!1)return;xc.copy(n).invert(),bs.copy(e.ray).applyMatrix4(xc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const A=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let E=A,p=g-1;E<p;E+=c){const m=h.getX(E),C=h.getX(E+1),x=Ur(this,e,bs,l,m,C);x&&t.push(x)}if(this.isLineLoop){const E=h.getX(g-1),p=h.getX(A),m=Ur(this,e,bs,l,E,p);m&&t.push(m)}}else{const A=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let E=A,p=g-1;E<p;E+=c){const m=Ur(this,e,bs,l,E,E+1);m&&t.push(m)}if(this.isLineLoop){const E=Ur(this,e,bs,l,g-1,A);E&&t.push(E)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ur(r,e,t,i,n,s){const a=r.geometry.attributes.position;if(sa.fromBufferAttribute(a,n),ra.fromBufferAttribute(a,s),t.distanceSqToSegment(sa,ra,qa,yc)>i)return;qa.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(qa);if(!(l<e.near||l>e.far))return{distance:l,point:yc.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,object:r}}const Cc=new M,_c=new M;class Yg extends Uo{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)Cc.fromBufferAttribute(t,n),_c.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Cc.distanceTo(_c);e.setAttribute("lineDistance",new zt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Kg extends Uo{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ph extends yi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new we(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Mc=new Le,Io=new Ks,Fr=new _i,Or=new M;class Jg extends Ye{constructor(e=new $t,t=new Ph){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(n),Fr.radius+=s,e.ray.intersectsSphere(Fr)===!1)return;Mc.copy(n).invert(),Io.copy(e.ray).applyMatrix4(Mc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),A=Math.min(c.count,a.start+a.count);for(let g=d,E=A;g<E;g++){const p=c.getX(g);Or.fromBufferAttribute(u,p),Ic(Or,p,l,n,e,t,this)}}else{const d=Math.max(0,a.start),A=Math.min(u.count,a.start+a.count);for(let g=d,E=A;g<E;g++)Or.fromBufferAttribute(u,g),Ic(Or,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=n.length;s<a;s++){const o=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ic(r,e,t,i,n,s,a){const o=Io.distanceSqToPoint(r);if(o<t){const l=new M;Io.closestPointToPoint(r,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class jg extends It{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Et,this.magFilter=s!==void 0?s:Et,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class ha extends It{constructor(e,t,i,n,s,a,o,l,c,h,u,d){super(null,a,o,l,c,h,n,s,u,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Zg extends ha{constructor(e,t,i,n,s,a){super(e,t,i,s,a),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=vi}}class $g extends ha{constructor(e,t,i){super(void 0,e[0].width,e[0].height,t,i,Mn),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class e0 extends It{constructor(e,t,i,n,s,a,o,l,c){super(e,t,i,n,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const s=i.length;let a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-a,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===a)return n/(s-1);const h=i[n],d=i[n+1]-h,A=(a-h)/d;return(n+A)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const a=this.getPoint(n),o=this.getPoint(s),l=t||(a.isVector2?new Ae:new M);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new M,n=[],s=[],a=[],o=new M,l=new Le;for(let A=0;A<=e;A++){const g=A/e;n[A]=this.getTangentAt(g,new M)}s[0]=new M,a[0]=new M;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],o),a[0].crossVectors(n[0],s[0]);for(let A=1;A<=e;A++){if(s[A]=s[A-1].clone(),a[A]=a[A-1].clone(),o.crossVectors(n[A-1],n[A]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Dt(n[A-1].dot(n[A]),-1,1));s[A].applyMatrix4(l.makeRotationAxis(o,g))}a[A].crossVectors(n[A],s[A])}if(t===!0){let A=Math.acos(Dt(s[0].dot(s[e]),-1,1));A/=e,n[0].dot(o.crossVectors(s[0],s[e]))>0&&(A=-A);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(n[g],A*g)),a[g].crossVectors(n[g],s[g])}return{tangents:n,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Lh extends Yi{constructor(e=0,t=0,i=1,n=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ae){const i=t,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(a?s=0:s=n),this.aClockwise===!0&&!a&&(s===n?s=-n:s=s-n);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,A=c-this.aY;l=d*h-A*u+this.aX,c=d*u+A*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class t0 extends Lh{constructor(e,t,i,n,s,a){super(e,t,i,i,n,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Fo(){let r=0,e=0,t=0,i=0;function n(s,a,o,l){r=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){n(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,u){let d=(a-s)/c-(o-s)/(c+h)+(o-a)/h,A=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,A*=h,n(a,o,d,A)},calc:function(s){const a=s*s,o=a*s;return r+e*s+t*a+i*o}}}const Qr=new M,Xa=new Fo,Ya=new Fo,Ka=new Fo;class Oo extends Yi{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new M){const i=t,n=this.points,s=n.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%s]:(Qr.subVectors(n[0],n[1]).add(n[0]),c=Qr);const u=n[o%s],d=n[(o+1)%s];if(this.closed||o+2<s?h=n[(o+2)%s]:(Qr.subVectors(n[s-1],n[s-2]).add(n[s-1]),h=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){const A=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),A),E=Math.pow(u.distanceToSquared(d),A),p=Math.pow(d.distanceToSquared(h),A);E<1e-4&&(E=1),g<1e-4&&(g=E),p<1e-4&&(p=E),Xa.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,E,p),Ya.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,E,p),Ka.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,E,p)}else this.curveType==="catmullrom"&&(Xa.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ya.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ka.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(Xa.calc(l),Ya.calc(l),Ka.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new M().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Sc(r,e,t,i,n){const s=(i-e)*.5,a=(n-t)*.5,o=r*r,l=r*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*r+t}function i0(r,e){const t=1-r;return t*t*e}function n0(r,e){return 2*(1-r)*r*e}function s0(r,e){return r*r*e}function Fs(r,e,t,i){return i0(r,e)+n0(r,t)+s0(r,i)}function r0(r,e){const t=1-r;return t*t*t*e}function a0(r,e){const t=1-r;return 3*t*t*r*e}function o0(r,e){return 3*(1-r)*r*r*e}function l0(r,e){return r*r*r*e}function Os(r,e,t,i,n){return r0(r,e)+a0(r,t)+o0(r,i)+l0(r,n)}class c0 extends Yi{constructor(e=new Ae,t=new Ae,i=new Ae,n=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Ae){const i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Os(e,n.x,s.x,a.x,o.x),Os(e,n.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class h0 extends Yi{constructor(e=new M,t=new M,i=new M,n=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new M){const i=t,n=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(Os(e,n.x,s.x,a.x,o.x),Os(e,n.y,s.y,a.y,o.y),Os(e,n.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class u0 extends Yi{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nh extends Yi{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class d0 extends Yi{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){const i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Fs(e,n.x,s.x,a.x),Fs(e,n.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Uh extends Yi{constructor(e=new M,t=new M,i=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new M){const i=t,n=this.v0,s=this.v1,a=this.v2;return i.set(Fs(e,n.x,s.x,a.x),Fs(e,n.y,s.y,a.y),Fs(e,n.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A0 extends Yi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const i=t,n=this.points,s=(n.length-1)*e,a=Math.floor(s),o=s-a,l=n[a===0?a:a-1],c=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Sc(o,l.x,c.x,h.x,u.x),Sc(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new Ae().fromArray(n))}return this}}var f0=Object.freeze({__proto__:null,ArcCurve:t0,CatmullRomCurve3:Oo,CubicBezierCurve:c0,CubicBezierCurve3:h0,EllipseCurve:Lh,LineCurve:u0,LineCurve3:Nh,QuadraticBezierCurve:d0,QuadraticBezierCurve3:Uh,SplineCurve:A0});class ua extends $t{constructor(e=1,t=.4,i=12,n=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:s},i=Math.floor(i),n=Math.floor(n);const a=[],o=[],l=[],c=[],h=new M,u=new M,d=new M;for(let A=0;A<=i;A++)for(let g=0;g<=n;g++){const E=g/n*s,p=A/i*Math.PI*2;u.x=(e+t*Math.cos(p))*Math.cos(E),u.y=(e+t*Math.cos(p))*Math.sin(E),u.z=t*Math.sin(p),o.push(u.x,u.y,u.z),h.x=e*Math.cos(E),h.y=e*Math.sin(E),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/n),c.push(A/i)}for(let A=1;A<=i;A++)for(let g=1;g<=n;g++){const E=(n+1)*A+g-1,p=(n+1)*(A-1)+g-1,m=(n+1)*(A-1)+g,C=(n+1)*A+g;a.push(E,p,C),a.push(p,m,C)}this.setIndex(a),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(l,3)),this.setAttribute("uv",new zt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class da extends $t{constructor(e=new Uh(new M(-1,-1,0),new M(-1,1,0),new M(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new M,l=new M,c=new Ae;let h=new M;const u=[],d=[],A=[],g=[];E(),this.setIndex(g),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(d,3)),this.setAttribute("uv",new zt(A,2));function E(){for(let x=0;x<t;x++)p(x);p(s===!1?t:0),C(),m()}function p(x){h=e.getPointAt(x/t,h);const I=a.normals[x],L=a.binormals[x];for(let b=0;b<=n;b++){const B=b/n*Math.PI*2,G=Math.sin(B),S=-Math.cos(B);l.x=S*I.x+G*L.x,l.y=S*I.y+G*L.y,l.z=S*I.z+G*L.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function m(){for(let x=1;x<=t;x++)for(let I=1;I<=n;I++){const L=(n+1)*(x-1)+(I-1),b=(n+1)*x+(I-1),B=(n+1)*x+I,G=(n+1)*(x-1)+I;g.push(L,b,G),g.push(b,B,G)}}function C(){for(let x=0;x<=t;x++)for(let I=0;I<=n;I++)c.x=x/t,c.y=I/n,A.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new da(new f0[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Ci extends yi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new we(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new we(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lh,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ti extends Ci{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ae(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new we(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new we(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new we(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function kr(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function p0(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function m0(r){function e(n,s){return r[n]-r[s]}const t=r.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function wc(r,e,t){const i=r.length,n=new r.constructor(i);for(let s=0,a=0;a!==i;++s){const o=t[s]*e;for(let l=0;l!==e;++l)n[a++]=r[o+l]}return n}function Fh(r,e,t,i){let n=1,s=r[0];for(;s!==void 0&&s[i]===void 0;)s=r[n++];if(s===void 0)return;let a=s[i];if(a!==void 0)if(Array.isArray(a))do a=s[i],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=r[n++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[i],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[n++];while(s!==void 0);else do a=s[i],a!==void 0&&(e.push(s.time),t.push(a)),s=r[n++];while(s!==void 0)}class $s{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];i:{e:{let a;t:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=n,n=t[++i],e<n)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break i}for(;i<a;){const o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let a=0;a!==n;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class g0 extends $s{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ml,endingEnd:ml}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,a=e+1,o=n[s],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case gl:s=e,o=2*t-i;break;case El:s=n.length-2,o=t+n[s]-n[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case gl:a=e,l=2*i-t;break;case El:a=1,l=i+n[1]-n[0];break;default:a=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,A=this._weightNext,g=(i-t)/(n-t),E=g*g,p=E*g,m=-d*p+2*d*E-d*g,C=(1+d)*p+(-1.5-2*d)*E+(-.5+d)*g+1,x=(-1-A)*p+(1.5+A)*E+.5*g,I=A*p-A*E;for(let L=0;L!==o;++L)s[L]=m*a[h+L]+C*a[c+L]+x*a[l+L]+I*a[u+L];return s}}class E0 extends $s{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)s[d]=a[c+d]*u+a[l+d]*h;return s}}class v0 extends $s{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class bi{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=kr(t,this.TimeBufferType),this.values=kr(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:kr(e.times,Array),values:kr(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new v0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new E0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new g0(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Hs:t=this.InterpolantFactoryMethodDiscrete;break;case cs:t=this.InterpolantFactoryMethodLinear;break;case ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hs;case this.InterpolantFactoryMethodLinear:return cs;case this.InterpolantFactoryMethodSmooth:return ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,a=n-1;for(;s!==n&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==n){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&p0(n))for(let o=0,l=n.length;o!==l;++o){const c=n[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===ga,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{const u=o*i,d=u-i,A=u+i;for(let g=0;g!==i;++g){const E=t[u+g];if(E!==t[d+g]||E!==t[A+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*i,d=a*i;for(let A=0;A!==i;++A)t[d+A]=t[u+A]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=cs;class ms extends bi{}ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=Hs;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;class Oh extends bi{}Oh.prototype.ValueTypeName="color";class ds extends bi{}ds.prototype.ValueTypeName="number";class x0 extends $s{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(n-t);let c=e*o;for(let h=c+o;c!==h;c+=4)lt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class In extends bi{InterpolantFactoryMethodLinear(e){return new x0(this.times,this.values,this.getValueSize(),e)}}In.prototype.ValueTypeName="quaternion";In.prototype.DefaultInterpolation=cs;In.prototype.InterpolantFactoryMethodSmooth=void 0;class gs extends bi{}gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=Hs;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;class As extends bi{}As.prototype.ValueTypeName="vector";class y0{constructor(e="",t=-1,i=[],n=sd){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=xi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(_0(i[a]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=i.length;s!==a;++s)t.push(bi.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const h=m0(l);l=wc(l,1,h),c=wc(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new ds(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const a=[];for(const o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,A,g,E){if(A.length!==0){const p=[],m=[];Fh(A,p,m,g),p.length!==0&&E.push(new u(d,p,m))}},n=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const A={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let E=0;E<d[g].morphTargets.length;E++)A[d[g].morphTargets[E]]=-1;for(const E in A){const p=[],m=[];for(let C=0;C!==d[g].morphTargets.length;++C){const x=d[g];p.push(x.time),m.push(x.morphTarget===E?1:0)}n.push(new ds(".morphTargetInfluence["+E+"]",p,m))}l=A.length*a}else{const A=".bones["+t[u].name+"]";i(As,A+".position",d,"pos",n),i(In,A+".quaternion",d,"rot",n),i(As,A+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,o)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function C0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ds;case"vector":case"vector2":case"vector3":case"vector4":return As;case"color":return Oh;case"quaternion":return In;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function _0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=C0(r.type);if(r.times===void 0){const t=[],i=[];Fh(r.keys,t,i,"value"),r.times=t,r.values=i}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const on={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class M0{constructor(e,t,i){const n=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&n.onStart!==void 0&&n.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const A=c[u],g=c[u+1];if(A.global&&(A.lastIndex=0),A.test(h))return g}return null}}}const I0=new M0;class Bi{constructor(e){this.manager=e!==void 0?e:I0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Bi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Fi={};class S0 extends Error{constructor(e,t){super(e),this.response=t}}class qi extends Bi{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=on.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Fi[e]!==void 0){Fi[e].push({onLoad:t,onProgress:i,onError:n});return}Fi[e]=[],Fi[e].push({onLoad:t,onProgress:i,onError:n});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Fi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),A=d?parseInt(d):0,g=A!==0;let E=0;const p=new ReadableStream({start(m){C();function C(){u.read().then(({done:x,value:I})=>{if(x)m.close();else{E+=I.byteLength;const L=new ProgressEvent("progress",{lengthComputable:g,loaded:E,total:A});for(let b=0,B=h.length;b<B;b++){const G=h[b];G.onProgress&&G.onProgress(L)}m.enqueue(I),C()}})}}});return new Response(p)}else throw new S0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,A=new TextDecoder(d);return c.arrayBuffer().then(g=>A.decode(g))}}}).then(c=>{on.add(e,c);const h=Fi[e];delete Fi[e];for(let u=0,d=h.length;u<d;u++){const A=h[u];A.onLoad&&A.onLoad(c)}}).catch(c=>{const h=Fi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Fi[e];for(let u=0,d=h.length;u<d;u++){const A=h[u];A.onError&&A.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class w0 extends Bi{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=on.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Vs("img");function l(){h(),on.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class T0 extends Bi{constructor(e){super(e)}load(e,t,i,n){const s=this,a=new Zs,o=new qi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(h){if(n!==void 0)n(h);else{console.error(h);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:vi,a.wrapT=c.wrapT!==void 0?c.wrapT:vi,a.magFilter=c.magFilter!==void 0?c.magFilter:Et,a.minFilter=c.minFilter!==void 0?c.minFilter:Et,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=si),c.mipmapCount===1&&(a.minFilter=Et),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},i,n),a}}class Qo extends Bi{constructor(e){super(e)}load(e,t,i,n){const s=new It,a=new w0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class ko extends Ye{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new we(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ja=new Le,Tc=new M,bc=new M;class Go{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Js,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;Tc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Tc),bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bc),t.updateMatrixWorld(),Ja.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ja),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ja)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class b0 extends Go{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=hs*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class B0 extends ko{constructor(e,t,i=0,n=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.distance=i,this.angle=n,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new b0}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bc=new Le,Bs=new M,ja=new M;class R0 extends Go{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Bs.setFromMatrixPosition(e.matrixWorld),i.position.copy(Bs),ja.copy(i.position),ja.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(ja),i.updateMatrixWorld(),n.makeTranslation(-Bs.x,-Bs.y,-Bs.z),Bc.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bc)}}class D0 extends ko{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new R0}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class P0 extends Go{constructor(){super(new la(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class L0 extends ko{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ye.DEFAULT_UP),this.updateMatrix(),this.target=new Ye,this.shadow=new P0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Qs{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class N0 extends Bi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=on.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{n&&n(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return on.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){n&&n(c),on.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});on.add(e,l),s.manager.itemStart(e)}}let Gr;class Qh{static getContext(){return Gr===void 0&&(Gr=new(window.AudioContext||window.webkitAudioContext)),Gr}static setContext(e){Gr=e}}class kh extends Bi{constructor(e){super(e)}load(e,t,i,n){const s=this,a=new qi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);Qh.getContext().decodeAudioData(c,function(u){t(u)}).catch(o)}catch(c){o(c)}},i,n);function o(l){n?n(l):console.error(l),s.manager.itemError(e)}}}class zo{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Rc();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Rc(){return(typeof performance>"u"?Date:performance).now()}const mn=new M,Dc=new lt,U0=new M,gn=new M;class F0 extends Ye{constructor(){super(),this.type="AudioListener",this.context=Qh.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new zo}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(mn,Dc,U0),gn.set(0,0,-1).applyQuaternion(Dc),t.positionX){const n=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(mn.x,n),t.positionY.linearRampToValueAtTime(mn.y,n),t.positionZ.linearRampToValueAtTime(mn.z,n),t.forwardX.linearRampToValueAtTime(gn.x,n),t.forwardY.linearRampToValueAtTime(gn.y,n),t.forwardZ.linearRampToValueAtTime(gn.z,n),t.upX.linearRampToValueAtTime(i.x,n),t.upY.linearRampToValueAtTime(i.y,n),t.upZ.linearRampToValueAtTime(i.z,n)}else t.setPosition(mn.x,mn.y,mn.z),t.setOrientation(gn.x,gn.y,gn.z,i.x,i.y,i.z)}}class Pc extends Ye{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Ho="\\[\\]\\.:\\/",O0=new RegExp("["+Ho+"]","g"),Vo="[^"+Ho+"]",Q0="[^"+Ho.replace("\\.","")+"]",k0=/((?:WC+[\/:])*)/.source.replace("WC",Vo),G0=/(WCOD+)?/.source.replace("WCOD",Q0),z0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Vo),H0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Vo),V0=new RegExp("^"+k0+G0+z0+H0+"$"),W0=["material","materials","bones","map"];class q0{constructor(e,t,i){const n=i||ft.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ft{constructor(e,t,i){this.path=t,this.parsedPath=i||ft.parseTrackName(t),this.node=ft.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ft.Composite(e,t,i):new ft(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(O0,"")}static parseTrackName(e){const t=V0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);W0.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=i(o.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=ft.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[n];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ft.Composite=q0;ft.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ft.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ft.prototype.GetterByBindingType=[ft.prototype._getValue_direct,ft.prototype._getValue_array,ft.prototype._getValue_arrayElement,ft.prototype._getValue_toArray];ft.prototype.SetterByBindingTypeAndVersioning=[[ft.prototype._setValue_direct,ft.prototype._setValue_direct_setNeedsUpdate,ft.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_array,ft.prototype._setValue_array_setNeedsUpdate,ft.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_arrayElement,ft.prototype._setValue_arrayElement_setNeedsUpdate,ft.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ft.prototype._setValue_fromArray,ft.prototype._setValue_fromArray_setNeedsUpdate,ft.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Lc=new Le;class Gh{constructor(e,t,i=0,n=1/0){this.ray=new Ks(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new Po,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Lc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Lc),this}intersectObject(e,t=!0,i=[]){return So(e,this,i,t),i.sort(Nc),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)So(e[n],this,i,t);return i.sort(Nc),i}}function Nc(r,e){return r.distance-e.distance}function So(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){const n=r.children;for(let s=0,a=n.length;s<a;s++)So(n[s],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);const me={ASSET_QUALITY:"high",PLAYER_HEIGHT:1.7,PLAYER_MOVE_SPEED:5,PLAYER_SPRINT_MULTIPLIER:2,PLAYER_JUMP_STRENGTH:5,GRAVITY:9.8,RESPAWN_Y_THRESHOLD:-20,VEHICLE_ENTER_DISTANCE:3,VEHICLE_CAMERA_OFFSET:{x:-5,y:1,z:0},VEHICLE_FLY_SPEED:25,VEHICLE_LANDING_DECELERATION_FACTOR:1,DOCK_EXIT_DISTANCE:20,INTERACTION_DISTANCE:3,ELEVATOR_INTERACTION_DISTANCE:6.5,COLLECTION_DISTANCE:1.5,WALL_COLLISION_DISTANCE:.5,GROUND_CHECK_DISTANCE_BUFFER:.1,GROUND_CHECK_RAY_VERTICAL_OFFSET:.1,COIN_ROTATION_SPEED:Math.PI*.5,ARCADE_UNLOCK_COST:2,ARCADE_CAMERA_TARGET_OFFSET:{x:0,y:1,z:1},ARCADE_CAMERA_POSITION_OFFSET:{x:0,y:1,z:1.5},MESH_NAME_CITY_BACKGROUND:"City",MESH_NAME_GROUND_SPAWN:"Spawn",MESH_NAME_SPAWN_END:"Spawn-End",MESH_NAME_GROUND_DOCK:"Dock",MESH_NAME_GROUND_COLLISION:"Collision",MESH_NAME_RESPAWN:"Respawn",MESH_NAME_COIN:"Coin",MESH_NAME_COIN_INSTANCE:"Coin-Instance",MESH_PREFIX_ARCADE:"Arcade",MESH_PREFIX_ARCADE_INSTANCE:"Arcade-Instance",MESH_NAME_ELEVATOR:"Elevator",MESH_NAME_ELEVATOR_END:"Elevator-End",MESH_NAME_ELEVATOR_COLLISION:"Elevator-Collision",MESH_NAME_CITY_CENTER:"City-Center",MESH_NAME_SAFE_ZONE:"Safe-Zone",ZIPLINE_PREFIX:"Zipline",AITRAFFIC_PREFIX:"air-traffic",AIR_TRAFFIC_TARGET_VELOCITY:40,AIR_TRAFFIC_VELOCITY_VARIATION:.2,MESH_NAME_RACE_START:"Race-Start",MESH_NAME_RACE_END:"Race-End",MESH_NAME_RACE_RESPAWN:"Race-Respawn",MESH_PREFIX_RACE_CHECKPOINT:"Race-Checkpoint-",RACE_CHECKPOINT_PASS_DISTANCE:10,RACE_RING_DEFAULT_COLOR:"#ffffff",RACE_RING_PASSED_COLOR:"#220066",TOUCH_CONTROLS:{ON_FOOT:{LEFT_STICK:{SENSITIVITY:.75,DEADZONE:.1},RIGHT_STICK:{SENSITIVITY:.25,DEADZONE:.1}},IN_VEHICLE:{LEFT_STICK:{SENSITIVITY:1,DEADZONE:.1},RIGHT_STICK:{SENSITIVITY:.25,DEADZONE:.1}}},BUILDING_COLLIDER_CONFIG:{"building1.glb":{heightScale:.811},"building2.glb":{heightScale:.935},"building3.glb":{heightScale:.9},"building4.glb":{heightScale:.921},"building5.glb":{heightScale:.885},"building6.glb":{heightScale:.905},"building7.glb":{heightScale:.895,shapeScale:.85},"building8.glb":{heightScale:.9625,offsetX:-9},"building9.glb":{heightScale:.897},"building10.glb":{heightScale:1}}},zh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Es{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const X0=new la(-1,1,1,-1,0,1);class Y0 extends $t{constructor(){super(),this.setAttribute("position",new zt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new zt([0,2,0,0,2,0],2))}}const K0=new Y0;class Wo{constructor(e){this._mesh=new Mt(K0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,X0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Jr extends Es{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof St?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=_n.clone(e.uniforms),this.material=new St({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wo(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Uc extends Es{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class J0 extends Es{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class j0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const i=e.getSize(new Ae);this._width=i.width,this._height=i.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ft}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Jr(zh),this.copyPass.material.blending=Vi,this.clock=new zo}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Uc!==void 0&&(a instanceof Uc?i=!0:a instanceof J0&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ae);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Z0 extends Es{constructor(e,t,i=null,n=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new we}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}}const $0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new we(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class fs extends Es{constructor(e,t,i,n){super(),this.strength=t!==void 0?t:1,this.radius=i,this.threshold=n,this.resolution=e!==void 0?new Ae(e.x,e.y):new Ae(256,256),this.clearColor=new we(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(s,a,{type:Ft}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new jt(s,a,{type:Ft});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const A=new jt(s,a,{type:Ft});A.texture.name="UnrealBloomPass.v"+u,A.texture.generateMipmaps=!1,this.renderTargetsVertical.push(A),s=Math.round(s/2),a=Math.round(a/2)}const o=$0;this.highPassUniforms=_n.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new St({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ae(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1),new M(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=zh;this.copyUniforms=_n.clone(h.uniforms),this.blendMaterial=new St({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Gs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new we,this.oldClearAlpha=1,this.basic=new ei,this.fsQuad=new Wo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let i=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(i,n);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,n),this.renderTargetsVertical[s].setSize(i,n),this.separableBlurMaterials[s].uniforms.invSize.value=new Ae(1/i,1/n),i=Math.round(i/2),n=Math.round(n/2)}render(e,t,i,n,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=fs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=fs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new St({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ae(.5,.5)},direction:{value:new Ae(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new St({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}fs.BlurDirectionX=new Ae(1,0);fs.BlurDirectionY=new Ae(0,1);const zr={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Ae(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Hr={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Ae(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},Za={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Ae(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class eE extends Es{constructor(e,t){super(),this.edgesRT=new jt(e,t,{depthBuffer:!1,type:Ft}),this.edgesRT.texture.name="SMAAPass.edges",this.weightsRT=new jt(e,t,{depthBuffer:!1,type:Ft}),this.weightsRT.texture.name="SMAAPass.weights";const i=this,n=new Image;n.src=this.getAreaTexture(),n.onload=function(){i.areaTexture.needsUpdate=!0},this.areaTexture=new It,this.areaTexture.name="SMAAPass.area",this.areaTexture.image=n,this.areaTexture.minFilter=Et,this.areaTexture.generateMipmaps=!1,this.areaTexture.flipY=!1;const s=new Image;s.src=this.getSearchTexture(),s.onload=function(){i.searchTexture.needsUpdate=!0},this.searchTexture=new It,this.searchTexture.name="SMAAPass.search",this.searchTexture.image=s,this.searchTexture.magFilter=Qt,this.searchTexture.minFilter=Qt,this.searchTexture.generateMipmaps=!1,this.searchTexture.flipY=!1,this.uniformsEdges=_n.clone(zr.uniforms),this.uniformsEdges.resolution.value.set(1/e,1/t),this.materialEdges=new St({defines:Object.assign({},zr.defines),uniforms:this.uniformsEdges,vertexShader:zr.vertexShader,fragmentShader:zr.fragmentShader}),this.uniformsWeights=_n.clone(Hr.uniforms),this.uniformsWeights.resolution.value.set(1/e,1/t),this.uniformsWeights.tDiffuse.value=this.edgesRT.texture,this.uniformsWeights.tArea.value=this.areaTexture,this.uniformsWeights.tSearch.value=this.searchTexture,this.materialWeights=new St({defines:Object.assign({},Hr.defines),uniforms:this.uniformsWeights,vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader}),this.uniformsBlend=_n.clone(Za.uniforms),this.uniformsBlend.resolution.value.set(1/e,1/t),this.uniformsBlend.tDiffuse.value=this.weightsRT.texture,this.materialBlend=new St({uniforms:this.uniformsBlend,vertexShader:Za.vertexShader,fragmentShader:Za.fragmentShader}),this.fsQuad=new Wo(null)}render(e,t,i){this.uniformsEdges.tDiffuse.value=i.texture,this.fsQuad.material=this.materialEdges,e.setRenderTarget(this.edgesRT),this.clear&&e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialWeights,e.setRenderTarget(this.weightsRT),this.clear&&e.clear(),this.fsQuad.render(e),this.uniformsBlend.tColor.value=i.texture,this.fsQuad.material=this.materialBlend,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this.fsQuad.render(e))}setSize(e,t){this.edgesRT.setSize(e,t),this.weightsRT.setSize(e,t),this.materialEdges.uniforms.resolution.value.set(1/e,1/t),this.materialWeights.uniforms.resolution.value.set(1/e,1/t),this.materialBlend.uniforms.resolution.value.set(1/e,1/t)}getAreaTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAIwCAIAAACOVPcQAACBeklEQVR42u39W4xlWXrnh/3WWvuciIzMrKxrV8/0rWbY0+SQFKcb4owIkSIFCjY9AC1BT/LYBozRi+EX+cV+8IMsYAaCwRcBwjzMiw2jAWtgwC8WR5Q8mDFHZLNHTarZGrLJJllt1W2qKrsumZWZcTvn7L3W54e1vrXX3vuciLPPORFR1XE2EomorB0nVuz//r71re/y/1eMvb4Cb3N11xV/PP/2v4UBAwJG/7H8urx6/25/Gf8O5hypMQ0EEEQwAqLfoN/Z+97f/SW+/NvcgQk4sGBJK6H7N4PFVL+K+e0N11yNfkKvwUdwdlUAXPHHL38oa15f/i/46Ih6SuMSPmLAYAwyRKn7dfMGH97jaMFBYCJUgotIC2YAdu+LyW9vvubxAP8kAL8H/koAuOKP3+q6+xGnd5kdYCeECnGIJViwGJMAkQKfDvB3WZxjLKGh8VSCCzhwEWBpMc5/kBbjawT4HnwJfhr+pPBIu7uu+OOTo9vsmtQcniMBGkKFd4jDWMSCRUpLjJYNJkM+IRzQ+PQvIeAMTrBS2LEiaiR9b/5PuT6Ap/AcfAFO4Y3dA3DFH7/VS+M8k4baEAQfMI4QfbVDDGIRg7GKaIY52qAjTAgTvGBAPGIIghOCYAUrGFNgzA7Q3QhgCwfwAnwe5vDejgG44o/fbm1C5ZlYQvQDARPAIQGxCWBM+wWl37ZQESb4gImexGMDouhGLx1Cst0Saa4b4AqO4Hk4gxo+3DHAV/nx27p3JziPM2pVgoiia5MdEzCGULprIN7gEEeQ5IQxEBBBQnxhsDb5auGmAAYcHMA9eAAz8PBol8/xij9+C4Djlim4gJjWcwZBhCBgMIIYxGAVIkH3ZtcBuLdtRFMWsPGoY9rN+HoBji9VBYdwD2ZQg4cnO7OSq/z4rU5KKdwVbFAjNojCQzTlCLPFSxtamwh2jMUcEgg2Wm/6XgErIBhBckQtGN3CzbVacERgCnfgLswhnvqf7QyAq/z4rRZm1YglYE3affGITaZsdIe2FmMIpnOCap25I6jt2kCwCW0D1uAD9sZctNGXcQIHCkINDQgc78aCr+zjtw3BU/ijdpw3zhCwcaONwBvdeS2YZKkJNJsMPf2JKEvC28RXxxI0ASJyzQCjCEQrO4Q7sFArEzjZhaFc4cdv+/JFdKULM4px0DfUBI2hIsy06BqLhGTQEVdbfAIZXYMPesq6VoCHICzUyjwInO4Y411//LYLs6TDa9wvg2CC2rElgAnpTBziThxaL22MYhzfkghz6GAs2VHbbdM91VZu1MEEpupMMwKyVTb5ij9+u4VJG/5EgEMMmFF01cFai3isRbKbzb+YaU/MQbAm2XSMoUPAmvZzbuKYRIFApbtlrfFuUGd6vq2hXNnH78ZLh/iFhsQG3T4D1ib7k5CC6vY0DCbtrohgLEIClXiGtl10zc0CnEGIhhatLBva7NP58Tvw0qE8yWhARLQ8h4+AhQSP+I4F5xoU+VilGRJs6wnS7ruti/4KvAY/CfdgqjsMy4pf8fodQO8/gnuX3f/3xi3om1/h7THr+co3x93PP9+FBUfbNUjcjEmhcrkT+8K7ml7V10Jo05mpIEFy1NmCJWx9SIKKt+EjAL4Ez8EBVOB6havuT/rByPvHXK+9zUcfcbb254+9fydJknYnRr1oGfdaiAgpxu1Rx/Rek8KISftx3L+DfsLWAANn8Hvw0/AFeAGO9DFV3c6D+CcWbL8Dj9e7f+T1k8AZv/d7+PXWM/Z+VvdCrIvuAKO09RpEEQJM0Ci6+B4xhTWr4cZNOvhktabw0ta0rSJmqz3Yw5/AKXwenod7cAhTmBSPKf6JBdvH8IP17h95pXqw50/+BFnj88fev4NchyaK47OPhhtI8RFSvAfDSNh0Ck0p2gLxGkib5NJj/JWCr90EWQJvwBzO4AHcgztwAFN1evHPUVGwfXON+0debT1YeGON9Yy9/63X+OguiwmhIhQhD7l4sMqlG3D86Suc3qWZ4rWjI1X7u0Ytw6x3rIMeIOPDprfe2XzNgyj6PahhBjO4C3e6puDgXrdg+/5l948vF3bqwZetZ+z9Rx9zdIY5pInPK4Nk0t+l52xdK2B45Qd87nM8fsD5EfUhIcJcERw4RdqqH7Yde5V7m1vhNmtedkz6EDzUMF/2jJYWbC+4fzzA/Y+/8PPH3j9dcBAPIRP8JLXd5BpAu03aziOL3VVHZzz3CXWDPWd+SH2AnxIqQoTZpo9Ckc6HIrFbAbzNmlcg8Ag8NFDDAhbJvTBZXbC94P7t68EXfv6o+21gUtPETU7bbkLxvNKRFG2+KXzvtObonPP4rBvsgmaKj404DlshFole1Glfh02fE7bYR7dZ82oTewIBGn1Md6CG6YUF26X376oevOLzx95vhUmgblI6LBZwTCDY7vMq0op5WVXgsObOXJ+1x3qaBl9j1FeLxbhU9w1F+Wiba6s1X/TBz1LnUfuYDi4r2C69f1f14BWfP+p+W2GFKuC9phcELMYRRLur9DEZTUdEH+iEqWdaM7X4WOoPGI+ZYD2+wcQ+y+ioHUZ9dTDbArzxmi/bJI9BND0Ynd6lBdve/butBw8+f/T9D3ABa3AG8W3VPX4hBin+bj8dMMmSpp5pg7fJ6xrBFE2WQQEWnV8Qg3FbAWzYfM1rREEnmvkN2o1+acG2d/9u68GDzx91v3mAjb1zkpqT21OipPKO0b9TO5W0nTdOmAQm0TObts3aBKgwARtoPDiCT0gHgwnbArzxmtcLc08HgF1asN0C4Ms/fvD5I+7PhfqyXE/b7RbbrGyRQRT9ARZcwAUmgdoz0ehJ9Fn7QAhUjhDAQSw0bV3T3WbNa59jzmiP6GsWbGXDX2ytjy8+f9T97fiBPq9YeLdBmyuizZHaqXITnXiMUEEVcJ7K4j3BFPurtB4bixW8wTpweL8DC95szWMOqucFYGsWbGU7p3TxxxefP+r+oTVktxY0v5hbq3KiOKYnY8ddJVSBxuMMVffNbxwIOERShst73HZ78DZrHpmJmH3K6sGz0fe3UUj0eyRrSCGTTc+rjVNoGzNSv05srAxUBh8IhqChiQgVNIIBH3AVPnrsnXQZbLTm8ammv8eVXn/vWpaTem5IXRlt+U/LA21zhSb9cye6jcOfCnOwhIAYXAMVTUNV0QhVha9xjgA27ODJbLbmitt3tRN80lqG6N/khgot4ZVlOyO4WNg3OIMzhIZQpUEHieg2im6F91hB3I2tubql6BYNN9Hj5S7G0G2tahslBWKDnOiIvuAEDzakDQKDNFQT6gbn8E2y4BBubM230YIpBnDbMa+y3dx0n1S0BtuG62lCCXwcY0F72T1VRR3t2ONcsmDjbmzNt9RFs2LO2hQNyb022JisaI8rAWuw4HI3FuAIhZdOGIcdjLJvvObqlpqvWTJnnQbyi/1M9O8UxWhBs//H42I0q1Yb/XPGONzcmm+ri172mHKvZBpHkJaNJz6v9jxqiklDj3U4CA2ugpAaYMWqNXsdXbmJNd9egCnJEsphXNM+MnK3m0FCJ5S1kmJpa3DgPVbnQnPGWIDspW9ozbcO4K/9LkfaQO2KHuqlfFXSbdNzcEcwoqNEFE9zcIXu9/6n/ym/BC/C3aJLzEKPuYVlbFnfhZ8kcWxV3dbv4bKl28566wD+8C53aw49lTABp9PWbsB+knfc/Li3eVizf5vv/xmvnPKg5ihwKEwlrcHqucuVcVOxEv8aH37E3ZqpZypUulrHEtIWKUr+txHg+ojZDGlwnqmkGlzcVi1dLiNSJiHjfbRNOPwKpx9TVdTn3K05DBx4psIk4Ei8aCkJahRgffk4YnEXe07T4H2RR1u27E6wfQsBDofUgjFUFnwC2AiVtA+05J2zpiDK2Oa0c5fmAecN1iJzmpqFZxqYBCYhFTCsUNEmUnIcZ6aEA5rQVhEywG6w7HSW02XfOoBlQmjwulOFQAg66SvJblrTEX1YtJ3uG15T/BH1OfOQeuR8g/c0gdpT5fx2SKbs9EfHTKdM8A1GaJRHLVIwhcGyydZsbifAFVKl5EMKNU2Hryo+06BeTgqnxzYjThVySDikbtJPieco75lYfKAJOMEZBTjoITuWHXXZVhcUDIS2hpiXHV9Ku4u44bN5OYLDOkJo8w+xJSMbhBRHEdEs9JZUCkQrPMAvaHyLkxgkEHxiNkx/x2YB0mGsQ8EUWj/stW5YLhtS5SMu+/YBbNPDCkGTUybN8krRLBGPlZkVOA0j+a1+rkyQKWGaPHPLZOkJhioQYnVZ2hS3zVxMtgC46KuRwbJNd9nV2PHgb36F194ecf/Yeu2vAFe5nm/bRBFrnY4BauE8ERmZRFUn0k8hbftiVYSKMEme2dJCJSCGYAlNqh87bXOPdUkGy24P6d1ll21MBqqx48Fvv8ZHH8HZFY7j/uAq1xMJUFqCSUlJPmNbIiNsmwuMs/q9CMtsZsFO6SprzCS1Z7QL8xCQClEelpjTduDMsmWD8S1PT152BtvmIGvUeDA/yRn83u/x0/4qxoPHjx+PXY9pqX9bgMvh/Nz9kpP4pOe1/fYf3axUiMdHLlPpZCNjgtNFAhcHEDxTumNONhHrBduW+vOyY++70WWnPXj98eA4kOt/mj/5E05l9+O4o8ePx67HFqyC+qSSnyselqjZGaVK2TadbFLPWAQ4NBhHqDCCV7OTpo34AlSSylPtIdd2AJZlyzYQrDJ5lcWGNceD80CunPLGGzsfD+7wRb95NevJI5docQ3tgCyr5bGnyaPRlmwNsFELViOOx9loebGNq2moDOKpHLVP5al2cymWHbkfzGXL7kfRl44H9wZy33tvt+PB/Xnf93e+nh5ZlU18wCiRUa9m7kib9LYuOk+hudQNbxwm0AQqbfloimaB2lM5fChex+ylMwuTbfmXQtmWlenZljbdXTLuOxjI/fDDHY4Hjx8/Hrse0zXfPFxbUN1kKqSCCSk50m0Ajtx3ub9XHBKHXESb8iO6E+qGytF4nO0OG3SXzbJlhxBnKtKyl0NwybjvYCD30aMdjgePHz8eu56SVTBbgxJMliQ3Oauwg0QHxXE2Ez/EIReLdQj42Gzb4CLS0YJD9xUx7bsi0vJi5mUbW1QzL0h0PFk17rtiIPfJk52MB48fPx67npJJwyrBa2RCCQRTbGZSPCxTPOiND4G2pYyOQ4h4jINIJh5wFU1NFZt+IsZ59LSnDqBjZ2awbOku+yInunLcd8VA7rNnOxkPHj9+PGY9B0MWJJNozOJmlglvDMXDEozdhQWbgs/U6oBanGzLrdSNNnZFjOkmbi5bNt1lX7JLLhn3vXAg9/h4y/Hg8ePHI9dzQMEkWCgdRfYykYKnkP7D4rIujsujaKPBsB54vE2TS00ccvFY/Tth7JXeq1hz+qgVy04sAJawTsvOknHfCwdyT062HA8eP348Zj0vdoXF4pilKa2BROed+9fyw9rWRXeTFXESMOanvDZfJuJaSXouQdMdDJZtekZcLLvEeK04d8m474UDuaenW44Hjx8/Xns9YYqZpszGWB3AN/4VHw+k7WSFtJ3Qicuqb/NlVmgXWsxh570xg2UwxUw3WfO6B5nOuO8aA7lnZxuPB48fPx6znm1i4bsfcbaptF3zNT78eFPtwi1OaCNOqp1x3zUGcs/PN++AGD1+fMXrSVm2baTtPhPahbPhA71wIHd2bXzRa69nG+3CraTtPivahV/55tXWg8fyRY/9AdsY8VbSdp8V7cKrrgdfM//z6ILQFtJ2nxHtwmuoB4/kf74+gLeRtvvMaBdeSz34+vifx0YG20jbfTa0C6+tHrwe//NmOG0L8EbSdp8R7cLrrQe/996O+ai3ujQOskpTNULa7jOjXXj99eCd8lHvoFiwsbTdZ0a78PrrwTvlo966pLuRtB2fFe3Cm6oHP9kNH/W2FryxtN1nTLvwRurBO+Kj3pWXHidtx2dFu/Bm68Fb81HvykuPlrb7LGkX3mw9eGs+6h1Y8MbSdjegXcguQLjmevDpTQLMxtJ2N6NdyBZu9AbrwVvwUW+LbteULUpCdqm0HTelXbhNPe8G68Gb8lFvVfYfSNuxvrTdTWoXbozAzdaDZzfkorOj1oxVxlIMlpSIlpLrt8D4hrQL17z+c3h6hU/wv4Q/utps4+bm+6P/hIcf0JwQ5oQGPBL0eKPTYEXTW+eL/2DKn73J9BTXYANG57hz1cEMviVf/4tf5b/6C5pTQkMIWoAq7hTpOJjtAM4pxKu5vg5vXeUrtI09/Mo/5H+4z+Mp5xULh7cEm2QbRP2tFIKR7WM3fPf/jZ3SWCqLM2l4NxID5zB72HQXv3jj/8mLR5xXNA5v8EbFQEz7PpRfl1+MB/hlAN65qgDn3wTgH13hK7T59bmP+NIx1SHHU84nLOITt3iVz8mNO+lPrjGAnBFqmioNn1mTyk1ta47R6d4MrX7tjrnjYUpdUbv2rVr6YpVfsGG58AG8Ah9eyUN8CX4WfgV+G8LVWPDGb+Zd4cU584CtqSbMKxauxTg+dyn/LkVgA+IR8KHtejeFKRtTmLLpxN6mYVLjYxwXf5x2VofiZcp/lwKk4wGOpYDnoIZPdg/AAbwMfx0+ge9dgZvYjuqKe4HnGnykYo5TvJbG0Vj12JagRhwKa44H95ShkZa5RyLGGdfYvG7aw1TsF6iapPAS29mNS3NmsTQZCmgTzFwgL3upCTgtBTRwvGMAKrgLn4evwin8+afJRcff+8izUGUM63GOOuAs3tJkw7J4kyoNreqrpO6cYLQeFUd7TTpr5YOTLc9RUUogUOVJQ1GYJaFLAW0oTmKyYS46ZooP4S4EON3xQ5zC8/CX4CnM4c1PE8ApexpoYuzqlP3d4S3OJP8ZDK7cKWNaTlqmgDiiHwl1YsE41w1zT4iRTm3DBqxvOUsbMKKDa/EHxagtnta072ejc3DOIh5ojvh8l3tk1JF/AV6FU6jh3U8HwEazLgdCLYSQ+MYiAI2ltomkzttUb0gGHdSUUgsIYjTzLG3mObX4FBRaYtpDVNZrih9TgTeYOBxsEnN1gOCTM8Bsw/ieMc75w9kuAT6A+/AiHGvN/+Gn4KRkiuzpNNDYhDGFndWRpE6SVfm8U5bxnSgVV2jrg6JCKmneqey8VMFgq2+AM/i4L4RUbfSi27lNXZ7R7W9RTcq/q9fk4Xw3AMQd4I5ifAZz8FcVtm9SAom/dyN4lczJQW/kC42ZrHgcCoIf1oVMKkVItmMBi9cOeNHGLqOZk+QqQmrbc5YmYgxELUUN35z2iohstgfLIFmcMV7s4CFmI74L9+EFmGsi+tGnAOD4Yk9gIpo01Y4cA43BWGygMdr4YZekG3OBIUXXNukvJS8tqa06e+lSDCtnqqMFu6hWHXCF+WaYt64m9QBmNxi7Ioy7D+fa1yHw+FMAcPt7SysFLtoG4PXAk7JOA3aAxBRqUiAdU9Yp5lK3HLSRFtOim0sa8euEt08xvKjYjzeJ2GU7YawexrnKI9tmobInjFXCewpwriY9+RR4aaezFhMhGCppKwom0ChrgFlKzyPKkGlTW1YQrE9HJqu8hKGgMc6hVi5QRq0PZxNfrYNgE64utmRv6KKHRpxf6VDUaOvNP5jCEx5q185My/7RKz69UQu2im5k4/eownpxZxNLwiZ1AZTO2ZjWjkU9uaB2HFn6Q3u0JcsSx/qV9hTEApRzeBLDJQXxYmTnq7bdLa3+uqFrxLJ5w1TehnNHx5ECvCh2g2c3hHH5YsfdaSKddztfjQ6imKFGSyFwlLzxEGPp6r5IevVjk1AMx3wMqi1NxDVjLBiPs9tbsCkIY5we5/ML22zrCScFxnNtzsr9Wcc3CnD+pYO+4VXXiDE0oc/vQQ/fDK3oPESJMYXNmJa/DuloJZkcTpcYE8lIH8Dz8DJMiynNC86Mb2lNaaqP/+L7f2fcE/yP7/Lde8xfgSOdMxvOixZf/9p3+M4hT1+F+zApxg9XfUvYjc8qX2lfOOpK2gNRtB4flpFu9FTKCp2XJRgXnX6olp1zyYjTKJSkGmLE2NjUr1bxFM4AeAAHBUFIeSLqXR+NvH/M9fOnfHzOD2vCSyQJKzfgsCh+yi/Mmc35F2fUrw7miW33W9hBD1vpuUojFphIyvg7aTeoymDkIkeW3XLHmguMzbIAJejN6B5MDrhipE2y6SoFRO/AK/AcHHZHNIfiWrEe/C6cr3f/yOvrQKB+zMM55/GQdLDsR+ifr5Fiuu+/y+M78LzOE5dsNuXC3PYvYWd8NXvphLSkJIasrlD2/HOqQ+RjcRdjKTGWYhhVUm4yxlyiGPuMsZR7sMCHUBeTuNWA7if+ifXgc/hovftHXs/DV+Fvwe+f8shzMiMcweFgBly3//vwJfg5AN4450fn1Hd1Rm1aBLu22Dy3y3H2+OqMemkbGZ4jozcDjJf6596xOLpC0eMTHbKnxLxH27uZ/bMTGs2jOaMOY4m87CfQwF0dw53oa1k80JRuz/XgS+8fX3N9Af4qPIMfzKgCp4H5TDGe9GGeFPzSsZz80SlPTxXjgwJmC45njzgt2vbQ4b4OAdUK4/vWhO8d8v6EE8fMUsfakXbPpFJeLs2ubM/qdm/la3WP91uWhxXHjoWhyRUq2iJ/+5mA73zwIIo+LoZ/SgvIRjAd1IMvvn98PfgOvAJfhhm8scAKVWDuaRaK8aQ9f7vuPDH6Bj47ZXau7rqYJ66mTDwEDU6lLbCjCK0qTXyl5mnDoeNRxanj3FJbaksTk0faXxHxLrssgPkWB9LnA/MFleXcJozzjwsUvUG0X/QCve51qkMDXp9mtcyOy3rwBfdvVJK7D6/ACSzg3RoruIq5UDeESfEmVclDxnniU82vxMLtceD0hGZWzBNPMM/jSPne2OVatiTKUpY5vY7gc0LdUAWeWM5tH+O2I66AOWw9xT2BuyRVLGdoDHUsVRXOo/c+ZdRXvFfnxWyIV4upFLCl9eAL7h8Zv0QH8Ry8pA2cHzQpGesctVA37ZtklBTgHjyvdSeKY/RZw/kJMk0Y25cSNRWSigQtlULPTw+kzuJPeYEkXjQRpoGZobYsLF79pyd1dMRHInbgFTZqNLhDqiIsTNpoex2WLcy0/X6rHcdMMQvFSd5dWA++4P7xv89deACnmr36uGlL69bRCL6BSZsS6c0TU2TKK5gtWCzgAOOwQcurqk9j8whvziZSMLcq5hbuwBEsYjopUBkqw1yYBGpLA97SRElEmx5MCInBY5vgLk94iKqSWmhIGmkJ4Bi9m4L645J68LyY4wsFYBfUg5feP/6gWWm58IEmKQM89hq7KsZNaKtP5TxxrUZZVkNmMJtjbKrGxLNEbHPJxhqy7lAmbC32ZqeF6lTaknRWcYaFpfLUBh/rwaQycCCJmW15Kstv6jRHyJFry2C1ahkkIW0LO75s61+owxK1y3XqweX9m5YLM2DPFeOjn/iiqCKJ+yKXF8t5Yl/kNsqaSCryxPq5xWTFIaP8KSW0RYxqupaUf0RcTNSSdJZGcKYdYA6kdtrtmyBckfKXwqk0pHpUHlwWaffjNRBYFPUDWa8e3Lt/o0R0CdisKDM89cX0pvRHEfM8ca4t0s2Xx4kgo91MPQJ/0c9MQYq0co8MBh7bz1fio0UUHLR4aAIOvOmoYO6kwlEVODSSTliWtOtH6sPkrtctF9ZtJ9GIerBskvhdVS5cFNv9s1BU0AbdUgdK4FG+dRnjFmDTzniRMdZO1QhzMK355vigbdkpz9P6qjUGE5J2qAcXmwJ20cZUiAD0z+pGMx6xkzJkmEf40Hr4qZfVg2XzF9YOyoV5BjzVkUJngKf8lgNYwKECEHrCNDrWZzMlflS3yBhr/InyoUgBc/lKT4pxVrrC6g1YwcceK3BmNxZcAtz3j5EIpqguh9H6wc011YN75cKDLpFDxuwkrPQmUwW4KTbj9mZTwBwLq4aQMUZbHm1rylJ46dzR0dua2n3RYCWZsiHROeywyJGR7mXKlpryyCiouY56sFkBWEnkEB/raeh/Sw4162KeuAxMQpEkzy5alMY5wamMsWKKrtW2WpEWNnReZWONKWjrdsKZarpFjqCslq773PLmEhM448Pc3+FKr1+94vv/rfw4tEcu+lKTBe4kZSdijBrykwv9vbCMPcLQTygBjzVckSLPRVGslqdunwJ4oegtFOYb4SwxNgWLCmD7T9kVjTv5YDgpo0XBmN34Z/rEHp0sgyz7lngsrm4lvMm2Mr1zNOJYJ5cuxuQxwMGJq/TP5emlb8fsQBZviK4t8hFL+zbhtlpwaRSxQRWfeETjuauPsdGxsBVdO7nmP4xvzSoT29pRl7kGqz+k26B3Oy0YNV+SXbbQas1ctC/GarskRdFpKczVAF1ZXnLcpaMuzVe6lZ2g/1ndcvOVgRG3sdUAY1bKD6achijMPdMxV4muKVorSpiDHituH7rSTs7n/4y5DhRXo4FVBN4vO/zbAcxhENzGbHCzU/98Mcx5e7a31kWjw9FCe/zNeYyQjZsWb1uc7U33pN4Mji6hCLhivqfa9Ss6xLg031AgfesA/l99m9fgvnaF9JoE6bYKmkGNK3aPbHB96w3+DnxFm4hs0drLsk7U8kf/N/CvwQNtllna0rjq61sH8L80HAuvwH1tvBy2ChqWSCaYTaGN19sTvlfzFD6n+iKTbvtayfrfe9ueWh6GJFoxLdr7V72a5ZpvHcCPDzma0wTO4EgbLyedxstO81n57LYBOBzyfsOhUKsW1J1BB5vr/tz8RyqOFylQP9Tvst2JALsC5lsH8PyQ40DV4ANzYa4dedNiKNR1s+x2wwbR7q4/4cTxqEk4LWDebfisuo36JXLiWFjOtLrlNWh3K1rRS4xvHcDNlFnNmWBBAl5SWaL3oPOfnvbr5pdjVnEaeBJSYjuLEkyLLsWhKccadmOphZkOPgVdalj2QpSmfOsADhMWE2ZBu4+EEJI4wKTAuCoC4xwQbWXBltpxbjkXJtKxxabo9e7tyhlgb6gNlSbUpMh+l/FaqzVwewGu8BW1Zx7pTpQDJUjb8tsUTW6+GDXbMn3mLbXlXJiGdggxFAoUrtPS3wE4Nk02UZG2OOzlk7fRs7i95QCLo3E0jtrjnM7SR3uS1p4qtS2nJ5OwtQVHgOvArLBFijZUV9QtSl8dAY5d0E0hM0w3HS2DpIeB6m/A1+HfhJcGUq4sOxH+x3f5+VO+Ds9rYNI7zPXOYWPrtf8bYMx6fuOAX5jzNR0PdsuON+X1f7EERxMJJoU6GkTEWBvVolVlb5lh3tKCg6Wx1IbaMDdJ+9sUCc5KC46hKGCk3IVOS4TCqdBNfUs7Kd4iXf2RjnT/LLysJy3XDcHLh/vde3x8DoGvwgsa67vBk91G5Pe/HbOe7xwym0NXbtiuuDkGO2IJDh9oQvJ4cY4vdoqLDuoH9Zl2F/ofsekn8lkuhIlhQcffUtSjytFyp++p6NiE7Rqx/lodgKVoceEp/CP4FfjrquZaTtj2AvH5K/ywpn7M34K/SsoYDAdIN448I1/0/wveW289T1/lX5xBzc8N5IaHr0XMOQdHsIkDuJFifj20pBm5jzwUv9e2FhwRsvhAbalCIuIw3bhJihY3p6nTFFIZgiSYjfTf3aXuOjmeGn4bPoGvwl+CFzTRczBIuHBEeImHc37/lGfwZR0cXzVDOvaKfNHvwe+suZ771K/y/XcBlsoN996JpBhoE2toYxOznNEOS5TJc6Id5GEXLjrWo+LEWGNpPDU4WAwsIRROu+1vM+0oW37z/MBN9kqHnSArwPfgFJ7Cq/Ai3Ie7g7ncmI09v8sjzw9mzOAEXoIHxURueaAce5V80f/DOuuZwHM8vsMb5wBzOFWM7wymTXPAEvm4vcFpZ2ut0VZRjkiP2MlmLd6DIpbGSiHOjdnUHN90hRYmhTnmvhzp1iKDNj+b7t5hi79lWGwQ+HN9RsfFMy0FXbEwhfuczKgCbyxYwBmcFhhvo/7a44v+i3XWcwDP86PzpGQYdWh7csP5dBvZ1jNzdxC8pBGuxqSW5vw40nBpj5JhMwvOzN0RWqERHMr4Lv1kWX84xLR830G3j6yqZ1a8UstTlW+qJPOZ+sZ7xZPKTJLhiNOAFd6tk+jrTH31ncLOxid8+nzRb128HhUcru/y0Wn6iT254YPC6FtVSIMoW2sk727AhvTtrWKZTvgsmckfXYZWeNRXx/3YQ2OUxLDrbHtN11IwrgXT6c8dATDwLniYwxzO4RzuQqTKSC5gAofMZ1QBK3zQ4JWobFbcvJm87FK+6JXrKahLn54m3p+McXzzYtP8VF/QpJuh1OwieElEoI1pRxPS09FBrkq2tWCU59+HdhNtTIqKm8EBrw2RTOEDpG3IKo2Y7mFdLm3ZeVjYwVw11o/oznceMve4CgMfNym/utA/d/ILMR7gpXzRy9eDsgLcgbs8O2Va1L0zzIdwGGemTBuwROHeoMShkUc7P+ISY3KH5ZZeWqO8mFTxQYeXTNuzvvK5FGPdQfuu00DwYFY9dyhctEt+OJDdnucfpmyhzUJzfsJjr29l8S0bXBfwRS9ZT26tmMIdZucch5ZboMz3Nio3nIOsYHCGoDT4kUA9MiXEp9Xsui1S8th/kbWIrMBxDGLodWUQIWcvnXy+9M23xPiSMOiRPqM+YMXkUN3gXFrZJwXGzUaMpJfyRS9ZT0lPe8TpScuRlbMHeUmlaKDoNuy62iWNTWNFYjoxFzuJs8oR+RhRx7O4SVNSXpa0ZJQ0K1LAHDQ+D9IepkMXpcsq5EVCvClBUIzDhDoyKwDw1Lc59GbTeORivugw1IcuaEOaGWdNm+Ps5fQ7/tm0DjMegq3yM3vb5j12qUId5UZD2oxDSEWOZMSqFl/W+5oynWDa/aI04tJRQ2eTXusg86SQVu/nwSYwpW6wLjlqIzwLuxGIvoAvul0PS+ZNz0/akp/pniO/8JDnGyaCkzbhl6YcqmK/69prxPqtpx2+Km9al9sjL+rwMgHw4jE/C8/HQ3m1vBuL1fldbzd8mOueVJ92syqdEY4KJjSCde3mcRw2TA6szxedn+zwhZMps0XrqEsiUjnC1hw0TELC2Ek7uAAdzcheXv1BYLagspxpzSAoZZUsIzIq35MnFQ9DOrlNB30jq3L4pkhccKUAA8/ocvN1Rzx9QyOtERs4CVsJRK/DF71kPYrxYsGsm6RMh4cps5g1DOmM54Ly1ii0Hd3Y/BMk8VWFgBVmhqrkJCPBHAolwZaWzLR9Vb7bcWdX9NyUYE+uB2BKfuaeBUcjDljbYVY4DdtsVWvzRZdWnyUzDpjNl1Du3aloAjVJTNDpcIOVVhrHFF66lLfJL1zJr9PQ2nFJSBaKoDe+sAvLufZVHVzYh7W0h/c6AAZ+7Tvj6q9j68G/cTCS/3n1vLKHZwNi+P+pS0WkZNMBMUl+LDLuiE4omZy71r3UFMwNJV+VJ/GC5ixVUkBStsT4gGKh0Gm4Oy3qvq7Lbmq24nPdDuDR9deR11XzP4vFu3TYzfnIyiSVmgizUYGqkIXNdKTY9pgb9D2Ix5t0+NHkVzCdU03suWkkVZAoCONCn0T35gAeW38de43mf97sMOpSvj4aa1KYUm58USI7Wxxes03bAZdRzk6UtbzMaCQ6IxO0dy7X+XsjoD16hpsBeGz9dfzHj+R/Hp8nCxZRqkEDTaCKCSywjiaoMJ1TITE9eg7Jqnq8HL6gDwiZb0u0V0Rr/rmvqjxKuaLCX7ZWXTvAY+uvm3z8CP7nzVpngqrJpZKwWnCUjIviYVlirlGOzPLI3SMVyp/elvBUjjDkNhrtufFFErQ8pmdSlbK16toBHlt/HV8uHMX/vEGALkV3RJREiSlopxwdMXOZPLZ+ix+kAHpMKIk8UtE1ygtquttwxNhphrIZ1IBzjGF3IIGxGcBj6q8bHJBG8T9vdsoWrTFEuebEZuVxhhClH6P5Zo89OG9fwHNjtNQTpD0TG9PJLEYqvEY6Rlxy+ZZGfL0Aj62/bnQCXp//eeM4KzfQVJbgMQbUjlMFIm6TpcfWlZje7NBSV6IsEVmumWIbjiloUzQX9OzYdo8L1wjw2PrrpimONfmfNyzKklrgnEkSzT5QWYQW40YShyzqsRmMXbvVxKtGuYyMKaU1ugenLDm5Ily4iT14fP11Mx+xJv+zZ3MvnfdFqxU3a1W/FTB4m3Qfsyc1XUcdVhDeUDZXSFHHLQj/Y5jtC7ZqM0CXGwB4bP11i3LhOvzPGygYtiUBiwQV/4wFO0majijGsafHyRLu0yG6q35cL1rOpVxr2s5cM2jJYMCdc10Aj6q/blRpWJ//+dmm5psMl0KA2+AFRx9jMe2WbC4jQxnikd4DU8TwUjRVacgdlhmr3bpddzuJ9zXqr2xnxJfzP29RexdtjDVZqzkqa6PyvcojGrfkXiJ8SEtml/nYskicv0ivlxbqjemwUjMw5evdg8fUX9nOiC/lf94Q2i7MURk9nW1MSj5j8eAyV6y5CN2S6qbnw3vdA1Iwq+XOSCl663udN3IzLnrt+us25cI1+Z83SXQUldqQq0b5XOT17bGpLd6ssN1VMPf8c+jG8L3NeCnMdF+Ra3fRa9dft39/LuZ/3vwHoHrqGmQFafmiQw6eyzMxS05K4bL9uA+SKUQzCnSDkqOGokXyJvbgJ/BHI+qvY69//4rl20NsmK2ou2dTsyIALv/91/8n3P2Aao71WFGi8KKv1fRC5+J67Q/507/E/SOshqN5TsmYIjVt+kcjAx98iz/4SaojbIV1rexE7/C29HcYD/DX4a0rBOF5VTu7omsb11L/AWcVlcVZHSsqGuXLLp9ha8I//w3Mv+T4Ew7nTBsmgapoCrNFObIcN4pf/Ob/mrvHTGqqgAupL8qWjWPS9m/31jAe4DjA+4+uCoQoT/zOzlrNd3qd4SdphFxsUvYwGWbTWtISc3wNOWH+kHBMfc6kpmpwPgHWwqaSUG2ZWWheYOGQGaHB+eQ/kn6b3pOgLV+ODSn94wDvr8Bvb70/LLuiPPEr8OGVWfDmr45PZyccEmsVXZGe1pRNX9SU5+AVQkNTIVPCHF/jGmyDC9j4R9LfWcQvfiETmgMMUCMN1uNCakkweZsowdYobiMSlnKA93u7NzTXlSfe+SVbfnPQXmg9LpYAQxpwEtONyEyaueWM4FPjjyjG3uOaFmBTWDNgBXGEiQpsaWhnAqIijB07Dlsy3fUGeP989xbWkyf+FF2SNEtT1E0f4DYYVlxFlbaSMPIRMk/3iMU5pME2SIWJvjckciebkQuIRRyhUvkHg/iUljG5kzVog5hV7vIlCuBrmlhvgPfNHQM8lCf+FEGsYbMIBC0qC9a0uuy2wLXVbLBaP5kjHokCRxapkQyzI4QEcwgYHRZBp+XEFTqXFuNVzMtjXLJgX4gAid24Hjwc4N3dtVSe+NNiwTrzH4WVUOlDobUqr1FuAgYllc8pmzoVrELRHSIW8ViPxNy4xwjBpyR55I6J220qQTZYR4guvUICJiSpr9gFFle4RcF/OMB7BRiX8sSfhpNSO3lvEZCQfLUVTKT78Ek1LRLhWN+yLyTnp8qWUZ46b6vxdRGXfHVqx3eI75YaLa4iNNiK4NOW7wPW6lhbSOF9/M9qw8e/aoB3d156qTzxp8pXx5BKAsYSTOIIiPkp68GmTq7sZtvyzBQaRLNxIZ+paozHWoLFeExIhRBrWitHCAHrCF7/thhD8JhYz84wg93QRV88wLuLY8zF8sQ36qF1J455bOlgnELfshKVxYOXKVuKx0jaj22sczTQqPqtV/XDgpswmGTWWMSDw3ssyUunLLrVPGjYRsH5ggHeHSWiV8kT33ycFSfMgkoOK8apCye0J6VW6GOYvffgU9RWsukEi2kUV2nl4dOYUzRik9p7bcA4ggdJ53LxKcEe17B1R8eqAd7dOepV8sTXf5lhejoL85hUdhDdknPtKHFhljOT+bdq0hxbm35p2nc8+Ja1Iw+tJykgp0EWuAAZYwMVwac5KzYMslhvgHdHRrxKnvhTYcfKsxTxtTETkjHO7rr3zjoV25lAQHrqpV7bTiy2aXMmUhTBnKS91jhtR3GEoF0oLnWhWNnYgtcc4N0FxlcgT7yz3TgNIKkscx9jtV1ZKpWW+Ub1tc1eOv5ucdgpx+FJy9pgbLE7xDyXb/f+hLHVGeitHOi6A7ybo3sF8sS7w7cgdk0nJaOn3hLj3uyD0Zp5pazFIUXUpuTTU18d1EPkDoX8SkmWTnVIozEdbTcZjoqxhNHf1JrSS/AcvHjZ/SMHhL/7i5z+POsTUh/8BvNfYMTA8n+yU/MlTZxSJDRStqvEuLQKWwDctMTQogUDyQRoTQG5Kc6oQRE1yV1jCA7ri7jdZyK0sYTRjCR0Hnnd+y7nHxNgTULqw+8wj0mQKxpYvhjm9uSUxg+TTy7s2GtLUGcywhXSKZN275GsqlclX90J6bRI1aouxmgL7Q0Nen5ziM80SqMIo8cSOo+8XplT/5DHNWsSUr/6lLN/QQ3rDyzLruEW5enpf7KqZoShEduuSFOV7DLX7Ye+GmXb6/hnNNqKsVXuMDFpb9Y9eH3C6NGEzuOuI3gpMH/I6e+zDiH1fXi15t3vA1czsLws0TGEtmPEJdiiFPwlwKbgLHAFk4P6ZyPdymYYHGE0dutsChQBl2JcBFlrEkY/N5bQeXQ18gjunuMfMfsBlxJSx3niO485fwO4fGD5T/+3fPQqkneWVdwnw/3bMPkW9Wbqg+iC765Zk+xcT98ibKZc2EdgHcLoF8cSOo/Oc8fS+OyEULF4g4sJqXVcmfMfsc7A8v1/yfGXmL9I6Fn5pRwZhsPv0TxFNlAfZCvG+Oohi82UC5f/2IsJo0cTOm9YrDoKhFPEUr/LBYTUNht9zelHXDqwfPCIw4owp3mOcIQcLttWXFe3VZ/j5H3cIc0G6oPbCR+6Y2xF2EC5cGUm6wKC5tGEzhsWqw5hNidUiKX5gFWE1GXh4/Qplw4sVzOmx9QxU78g3EF6wnZlEN4FzJ1QPSLEZz1KfXC7vd8ssGdIbNUYpVx4UapyFUHzJoTOo1McSkeNn1M5MDQfs4qQuhhX5vQZFw8suwWTcyYTgioISk2YdmkhehG4PkE7w51inyAGGaU+uCXADabGzJR1fn3lwkty0asIo8cROm9Vy1g0yDxxtPvHDAmpu+PKnM8Ix1wwsGw91YJqhteaWgjYBmmQiebmSpwKKzE19hx7jkzSWOm66oPbzZ8Yj6kxVSpYjVAuvLzYMCRo3oTQecOOjjgi3NQ4l9K5/hOGhNTdcWVOTrlgYNkEXINbpCkBRyqhp+LdRB3g0OU6rMfW2HPCFFMV9nSp+uB2woepdbLBuJQyaw/ZFysXrlXwHxI0b0LovEkiOpXGA1Ijagf+KUNC6rKNa9bQnLFqYNkEnMc1uJrg2u64ELPBHpkgWbmwKpJoDhMwNbbGzAp7Yg31wS2T5rGtzit59PrKhesWG550CZpHEzpv2NGRaxlNjbMqpmEIzygJqQfjypycs2pg2cS2RY9r8HUqkqdEgKTWtWTKoRvOBPDYBltja2SO0RGjy9UHtxwRjA11ujbKF+ti5cIR9eCnxUg6owidtyoU5tK4NLji5Q3HCtiyF2IqLGYsHViOXTXOYxucDqG0HyttqYAKqYo3KTY1ekyDXRAm2AWh9JmsVh/ccg9WJ2E8YjG201sPq5ULxxX8n3XLXuMInbft2mk80rRGjCGctJ8/GFdmEQ9Ug4FlE1ll1Y7jtiraqm5Fe04VV8lvSVBL8hiPrfFVd8+7QH3Qbu2ipTVi8cvSGivc9cj8yvH11YMHdNSERtuOslM97feYFOPKzGcsI4zW0YGAbTAOaxCnxdfiYUmVWslxiIblCeAYr9VYR1gM7GmoPrilunSxxeT3DN/2eBQ9H11+nk1adn6VK71+5+Jfct4/el10/7KBZfNryUunWSCPxPECk1rdOv1WVSrQmpC+Tl46YD3ikQYcpunSQgzVB2VHFhxHVGKDgMEY5GLlQnP7FMDzw7IacAWnO6sBr12u+XanW2AO0wQ8pknnFhsL7KYIqhkEPmEXFkwaN5KQphbkUmG72wgw7WSm9RiL9QT925hkjiVIIhphFS9HKI6/8QAjlpXqg9W2C0apyaVDwKQwrwLY3j6ADR13ZyUNByQXHQu6RY09Hu6zMqXRaNZGS/KEJs0cJEe9VH1QdvBSJv9h09eiRmy0V2uJcqHcShcdvbSNg5fxkenkVprXM9rDVnX24/y9MVtncvbKY706anNl3ASll9a43UiacVquXGhvq4s2FP62NGKfQLIQYu9q1WmdMfmUrDGt8eDS0cXozH/fjmUH6Jruvm50hBDSaEU/2Ru2LEN/dl006TSc/g7tfJERxGMsgDUEr104pfWH9lQaN+M4KWQjwZbVc2rZVNHsyHal23wZtIs2JJqtIc/WLXXRFCpJkfE9jvWlfFbsNQ9pP5ZBS0zKh4R0aMFj1IjTcTnvi0Zz2rt7NdvQb2mgbju1plsH8MmbnEk7KbK0b+wC2iy3aX3szW8xeZvDwET6hWZYwqTXSSG+wMETKum0Dq/q+x62gt2ua2ppAo309TRk9TPazfV3qL9H8z7uhGqGqxNVg/FKx0HBl9OVUORn8Q8Jx9gFttGQUDr3tzcXX9xGgN0EpzN9mdZ3GATtPhL+CjxFDmkeEU6x56kqZRusLzALXVqkCN7zMEcqwjmywDQ6OhyUe0Xao1Qpyncrg6wKp9XfWDsaZplElvQ/b3sdweeghorwBDlHzgk1JmMc/wiERICVy2VJFdMjFuLQSp3S0W3+sngt2njwNgLssFGVQdJ0tu0KH4ky1LW4yrbkuaA6Iy9oz/qEMMXMMDWyIHhsAyFZc2peV9hc7kiKvfULxCl9iddfRK1f8kk9qvbdOoBtOg7ZkOZ5MsGrSHsokgLXUp9y88smniwWyuFSIRVmjplga3yD8Uij5QS1ZiM4U3Qw5QlSm2bXjFe6jzzBFtpg+/YBbLAWG7OPynNjlCw65fukGNdkJRf7yM1fOxVzbxOJVocFoYIaGwH22mIQkrvu1E2nGuebxIgW9U9TSiukPGU+Lt++c3DJPKhyhEEbXCQLUpae2exiKy6tMPe9mDRBFCEMTWrtwxN8qvuGnt6MoihKWS5NSyBhbH8StXoAz8PLOrRgLtOT/+4vcu+7vDLnqNvztOq7fmd8sMmY9Xzn1zj8Dq8+XVdu2Nv0IIySgEdQo3xVHps3Q5i3fLFsV4aiqzAiBhbgMDEd1uh8qZZ+lwhjkgokkOIv4xNJmyncdfUUzgB4oFMBtiu71Xumpz/P+cfUP+SlwFExwWW62r7b+LSPxqxn/gvMZ5z9C16t15UbNlq+jbGJtco7p8wbYlL4alSyfWdeuu0j7JA3JFNuVAwtst7F7FhWBbPFNKIUORndWtLraFLmMu7KFVDDOzqkeaiN33YAW/r76wR4XDN/yN1z7hejPau06EddkS/6XThfcz1fI/4K736fO48vlxt2PXJYFaeUkFS8U15XE3428xdtn2kc8GQlf1vkIaNRRnOMvLTWrZbElEHeLWi1o0dlKPAh1MVgbbVquPJ5+Cr8LU5/H/+I2QlHIU2ClXM9G8v7Rr7oc/hozfUUgsPnb3D+I+7WF8kNO92GY0SNvuxiE+2Bt8prVJTkzE64sfOstxuwfxUUoyk8VjcTlsqe2qITSFoSj6Epd4KsT6BZOWmtgE3hBfir8IzZDwgV4ZTZvD8VvPHERo8v+vL1DASHTz/i9OlKueHDjK5Rnx/JB1Vb1ioXdBra16dmt7dgik10yA/FwJSVY6XjA3oy4SqM2frqDPPSRMex9qs3XQtoWxMj7/Er8GWYsXgjaVz4OYumP2+9kbxvny/6kvWsEBw+fcb5bInc8APdhpOSs01tEqIkoiZjbAqKMruLbJYddHuHFRIyJcbdEdbl2sVLaySygunutBg96Y2/JjKRCdyHV+AEFtTvIpbKIXOamknYSiB6KV/0JetZITgcjjk5ZdaskBtWO86UF0ap6ozGXJk2WNiRUlCPFir66lzdm/SLSuK7EUdPz8f1z29Skq6F1fXg8+5UVR6bszncP4Tn4KUkkdJ8UFCY1zR1i8RmL/qQL3rlei4THG7OODlnKko4oI01kd3CaM08Ia18kC3GNoVaO9iDh+hWxSyTXFABXoau7Q6q9OxYg/OVEMw6jdbtSrJ9cBcewGmaZmg+bvkUnUUaGr+ZfnMH45Ivevl61hMcXsxYLFTu1hTm2zViCp7u0o5l+2PSUh9bDj6FgYypufBDhqK2+oXkiuHFHR3zfj+9PtA8oR0xnqX8qn+sx3bFODSbbF0X8EUvWQ8jBIcjo5bRmLOljDNtcqNtOe756h3l0VhKa9hDd2l1eqmsnh0MNMT/Cqnx6BInumhLT8luljzQ53RiJeA/0dxe5NK0o2fA1+GLXr6eNQWHNUOJssQaTRlGpLHKL9fD+IrQzTOMZS9fNQD4AnRNVxvTdjC+fJdcDDWQcyB00B0t9BDwTxXgaAfzDZ/DBXzRnfWMFRwuNqocOmX6OKNkY63h5n/fFcB28McVHqnXZVI27K0i4rDLNE9lDKV/rT+udVbD8dFFu2GGZ8mOt0kAXcoX3ZkIWVtw+MNf5NjR2FbivROHmhV1/pj2egv/fMGIOWTIWrV3Av8N9imV9IWml36H6cUjqEWNv9aNc+veb2sH46PRaHSuMBxvtW+twxctq0z+QsHhux8Q7rCY4Ct8lqsx7c6Sy0dl5T89rIeEuZKoVctIk1hNpfavER6yyH1Vvm3MbsUHy4ab4hWr/OZPcsRBphnaV65/ZcdYPNNwsjN/djlf9NqCw9U5ExCPcdhKxUgLSmfROpLp4WSUr8ojdwbncbvCf+a/YzRaEc6QOvXcGO256TXc5Lab9POvB+AWY7PigWYjzhifbovuunzRawsO24ZqQQAqguBtmpmPB7ysXJfyDDaV/aPGillgz1MdQg4u5MYaEtBNNHFjkRlSpd65lp4hd2AVPTfbV7FGpyIOfmNc/XVsPfg7vzaS/3nkvLL593ANLvMuRMGpQIhiF7kUEW9QDpAUbTWYBcbp4WpacHHY1aacqQyjGZS9HI3yCBT9kUZJhVOD+zUDvEH9ddR11fzPcTDQ5TlgB0KwqdXSavk9BC0pKp0WmcuowSw07VXmXC5guzSa4p0UvRw2lbDiYUx0ExJJRzWzi6Gm8cnEkfXXsdcG/M/jAJa0+bmCgdmQ9CYlNlSYZOKixmRsgiFxkrmW4l3KdFKv1DM8tk6WxPYJZhUUzcd8Kdtgrw/gkfXXDT7+avmfVak32qhtkg6NVdUS5wgkru1YzIkSduTW1FDwVWV3JQVJVuieTc0y4iDpFwc7/BvSalvKdQM8sv662cevz/+8sQVnjVAT0W2wLllw1JiMhJRxgDjCjLQsOzSFSgZqx7lAW1JW0e03yAD3asC+GD3NbQhbe+mN5GXH1F83KDOM4n/e5JIuH4NpdQARrFPBVptUNcjj4cVMcFSRTE2NpR1LEYbYMmfWpXgP9KejaPsLUhuvLCsVXznAG9dfx9SR1ud/3hZdCLHb1GMdPqRJgqDmm76mHbvOXDtiO2QPUcKo/TWkQ0i2JFXpBoo7vij1i1Lp3ADAo+qvG3V0rM//vFnnTE4hxd5Ka/Cor5YEdsLVJyKtDgVoHgtW11pWSjolPNMnrlrVj9Fv2Qn60twMwKPqr+N/wvr8z5tZcDsDrv06tkqyzESM85Ycv6XBWA2birlNCXrI6VbD2lx2L0vQO0QVTVVLH4SE67fgsfVXv8n7sz7/85Z7cMtbE6f088wSaR4kCkCm10s6pKbJhfqiUNGLq+0gLWC6eUAZFPnLjwqtKd8EwGvWX59t7iPW4X/eAN1svgRVSY990YZg06BD1ohLMtyFTI4pKTJsS9xREq9EOaPWiO2gpms7397x6nQJkbh+Fz2q/rqRROX6/M8bJrqlVW4l6JEptKeUFuMYUbtCQ7CIttpGc6MY93x1r1vgAnRXvY5cvwWPqb9uWQm+lP95QxdNMeWhOq1x0Db55C7GcUv2ZUuN6n8iKzsvOxibC//Yfs9Na8r2Rlz02vXXDT57FP/zJi66/EJSmsJKa8QxnoqW3VLQ+jZVUtJwJ8PNX1NQCwfNgdhhHD9on7PdRdrdGPF28rJr1F+3LBdeyv+8yYfLoMYet1vX4upNAjVvwOUWnlNXJXlkzk5Il6kqeoiL0C07qno+/CYBXq/+utlnsz7/Mzvy0tmI4zm4ag23PRN3t/CWryoUVJGm+5+K8RJ0V8Hc88/XHUX/HfiAq7t+BH+x6v8t438enWmdJwFA6ZINriLGKv/95f8lT9/FnyA1NMVEvQyaXuu+gz36f/DD73E4pwqpLcvm/o0Vle78n//+L/NPvoefp1pTJye6e4A/D082FERa5/opeH9zpvh13cNm19/4v/LDe5xMWTi8I0Ta0qKlK27AS/v3/r+/x/2GO9K2c7kVMonDpq7//jc5PKCxeNPpFVzaRr01wF8C4Pu76hXuX18H4LduTr79guuFD3n5BHfI+ZRFhY8w29TYhbbLi/bvBdqKE4fUgg1pBKnV3FEaCWOWyA+m3WpORZr/j+9TKJtW8yBTF2/ZEODI9/QavHkVdGFp/Pjn4Q+u5hXapsP5sOH+OXXA1LiKuqJxiMNbhTkbdJTCy4llEt6NnqRT4dhg1V3nbdrm6dYMecA1yTOL4PWTE9L5VzPFlLBCvlG58AhehnN4uHsAYinyJ+AZ/NkVvELbfOBUuOO5syBIEtiqHU1k9XeISX5bsimrkUUhnGDxourN8SgUsCZVtKyGbyGzHXdjOhsAvOAswSRyIBddRdEZWP6GZhNK/yjwew9ehBo+3jEADu7Ay2n8mDc+TS7awUHg0OMzR0LABhqLD4hJEh/BEGyBdGlSJoXYXtr+3HS4ijzVpgi0paWXtdruGTknXBz+11qT1Q2inxaTzQCO46P3lfLpyS4fou2PH/PupwZgCxNhGlj4IvUuWEsTkqMWm6i4xCSMc9N1RDQoCVcuGItJ/MRWefais+3synowi/dESgJjkilnWnBTGvRWmaw8oR15257t7CHmCf8HOn7cwI8+NQBXMBEmAa8PMRemrNCEhLGEhDQKcGZWS319BX9PFBEwGTbRBhLbDcaV3drFcDqk5kCTd2JF1Wp0HraqBx8U0wwBTnbpCadwBA/gTH/CDrcCs93LV8E0YlmmcyQRQnjBa8JESmGUfIjK/7fkaDJpmD2QptFNVJU1bbtIAjjWQizepOKptRjbzR9Kag6xZmMLLjHOtcLT3Tx9o/0EcTT1XN3E45u24AiwEypDJXihKjQxjLprEwcmRKclaDNZCVqr/V8mYWyFADbusiY5hvgFoU2vio49RgJLn5OsReRFN6tabeetiiy0V7KFHT3HyZLx491u95sn4K1QQSPKM9hNT0wMVvAWbzDSVdrKw4zRjZMyJIHkfq1VAVCDl/bUhNKlGq0zGr05+YAceXVPCttVk0oqjVwMPt+BBefx4yPtGVkUsqY3CHDPiCM5ngupUwCdbkpd8kbPrCWHhkmtIKLEetF2499eS1jZlIPGYnlcPXeM2KD9vLS0bW3ktYNqUllpKLn5ZrsxlIzxvDu5eHxzGLctkZLEY4PgSOg2IUVVcUONzUDBEpRaMoXNmUc0tFZrTZquiLyKxrSm3DvIW9Fil+AkhXu5PhEPx9mUNwqypDvZWdKlhIJQY7vn2OsnmBeOWnYZ0m1iwbbw1U60by5om47iHRV6fOgzjMf/DAZrlP40Z7syxpLK0lJ0gqaAK1c2KQKu7tabTXkLFz0sCftuwX++MyNeNn68k5Buq23YQhUh0SNTJa1ioQ0p4nUG2y0XilF1JqODqdImloPS4Bp111DEWT0jJjVv95uX9BBV7eB3bUWcu0acSVM23YZdd8R8UbQUxJ9wdu3oMuhdt929ME+mh6JXJ8di2RxbTi6TbrDquqV4aUKR2iwT6aZbyOwEXN3DUsWr8Hn4EhwNyHuXHh7/pdaUjtR7vnDh/d8c9xD/s5f501eQ1+CuDiCvGhk1AN/4Tf74RfxPwD3toLarR0zNtsnPzmS64KIRk861dMWCU8ArasG9T9H0ZBpsDGnjtAOM2+/LuIb2iIUGXNgl5ZmKD/Tw8TlaAuihaFP5yrw18v4x1898zIdP+DDAX1bM3GAMvPgRP/cJn3zCW013nrhHkrITyvYuwOUkcHuKlRSW5C6rzIdY4ppnF7J8aAJbQepgbJYBjCY9usGXDKQxq7RZfh9eg5d1UHMVATRaD/4BHK93/1iAgYZ/+jqPn8Dn4UExmWrpa3+ZOK6MvM3bjwfzxNWA2dhs8+51XHSPJiaAhGSpWevEs5xHLXcEGFXYiCONySH3fPWq93JIsBiSWvWyc3CAN+EcXoT7rCSANloPPoa31rt/5PUA/gp8Q/jDD3hyrjzlR8VkanfOvB1XPubt17vzxAfdSVbD1pzAnfgyF3ycadOTOTXhpEUoLC1HZyNGW3dtmjeXgr2r56JNmRwdNNWaQVBddd6rh4MhviEB9EFRD/7RGvePvCbwAL4Mx/D6M541hHO4D3e7g6PafdcZVw689z7NGTwo5om7A8sPhccT6qKcl9NJl9aM/9kX+e59Hh1yPqGuCCZxuITcsmNaJ5F7d0q6J3H48TO1/+M57085q2icdu2U+W36Ldllz9Agiv4YGljoEN908EzvDOrBF98/vtJwCC/BF2AG75xxEmjmMIcjxbjoaxqOK3/4hPOZzhMPBpYPG44CM0dTVm1LjLtUWWVz1Bcf8tEx0zs8O2A2YVHRxKYOiy/aOVoAaMu0i7ubu43njjmd4ibMHU1sIDHaQNKrZND/FZYdk54oCXetjq7E7IVl9eAL7t+oHnwXXtLx44czzoRFHBztYVwtH1d+NOMkupZ5MTM+gUmq90X+Bh9zjRlmaQ+m7YMqUL/veemcecAtOJ0yq1JnVlN27di2E0+Klp1tAJ4KRw1eMI7aJjsO3R8kPSI3fUFXnIOfdQe86sIIVtWDL7h//Ok6vj8vwDk08NEcI8zz7OhBy+WwalzZeZ4+0XniRfst9pAJqQHDGLzVQ2pheZnnv1OWhwO43/AgcvAEXEVVpa4db9sGvNK8wjaENHkfFQ4Ci5i7dqnQlPoLQrHXZDvO3BIXZbJOBrOaEbML6sFL798I4FhKihjHMsPjBUZYCMFr6nvaArxqXPn4lCa+cHfSa2cP27g3Z3ziYTRrcbQNGLQmGF3F3cBdzzzX7AILx0IB9rbwn9kx2G1FW3Inic+ZLIsVvKR8Zwfj0l1fkqo8LWY1M3IX14OX3r9RKTIO+d9XzAI8qRPGPn/4NC2n6o4rN8XJ82TOIvuVA8zLKUHRFgBCetlDZlqR1gLKjS39xoE7Bt8UvA6BxuEDjU3tFsEijgA+615tmZkXKqiEENrh41iLDDZNq4pKTWR3LZfnos81LOuNa15cD956vLMsJd1rqYp51gDUQqMYm2XsxnUhD2jg1DM7SeuJxxgrmpfISSXVIJIS5qJJSvJPEQ49DQTVIbYWJ9QWa/E2+c/oPK1drmC7WSfJRNKBO5Yjvcp7Gc3dmmI/Xh1kDTEuiSnWqQf37h+fTMhGnDf6dsS8SQfQWlqqwXXGlc/PEZ/SC5mtzIV0nAshlQdM/LvUtYutrEZ/Y+EAFtq1k28zQhOwLr1AIeANzhF8t9qzTdZf2qRKO6MWE9ohBYwibbOmrFtNmg3mcS+tB28xv2uKd/agYCvOP+GkSc+0lr7RXzyufL7QbkUpjLjEWFLqOIkAGu2B0tNlO9Eau2W1qcOUvVRgKzypKIQZ5KI3q0MLzqTNRYqiZOqmtqloIRlmkBHVpHmRYV6/HixbO6UC47KOFJnoMrVyr7wYz+SlW6GUaghYbY1I6kkxA2W1fSJokUdSh2LQ1GAimRGm0MT+uu57H5l7QgOWxERpO9moLRPgTtquWCfFlGlIjQaRly9odmzMOWY+IBO5tB4sW/0+VWGUh32qYk79EidWKrjWuiLpiVNGFWFRJVktyeXWmbgBBzVl8anPuXyNJlBJOlKLTgAbi/EYHVHxWiDaVR06GnHQNpJcWcK2jJtiCfG2sEHLzuI66sGrMK47nPIInPnu799935aOK2cvmvubrE38ZzZjrELCmXM2hM7UcpXD2oC3+ECVp7xtIuxptJ0jUr3sBmBS47TVxlvJ1Sqb/E0uLdvLj0lLr29ypdd/eMX3f6lrxGlKwKQxEGvw0qHbkbwrF3uHKwVENbIV2wZ13kNEF6zD+x24aLNMfDTCbDPnEikZFyTNttxWBXDaBuM8KtI2rmaMdUY7cXcUPstqTGvBGSrFWIpNMfbdea990bvAOC1YX0qbc6smDS1mPxSJoW4fwEXvjMmhlijDRq6qale6aJEuFGoppYDoBELQzLBuh/mZNx7jkinv0EtnUp50lO9hbNK57lZaMAWuWR5Yo9/kYwcYI0t4gWM47Umnl3YmpeBPqSyNp3K7s2DSAS/39KRuEN2bS4xvowV3dFRMx/VFcp2Yp8w2nTO9hCXtHG1kF1L4KlrJr2wKfyq77R7MKpFKzWlY9UkhYxyHWW6nBWPaudvEAl3CGcNpSXPZ6R9BbBtIl6cHL3gIBi+42CYXqCx1gfGWe7Ap0h3luyXdt1MKy4YUT9xSF01G16YEdWsouW9mgDHd3veyA97H+Ya47ZmEbqMY72oPztCGvK0onL44AvgC49saZKkWRz4veWljE1FHjbRJaWv6ZKKtl875h4CziFCZhG5rx7tefsl0aRT1bMHZjm8dwL/6u7wCRysaQblQoG5yAQN5zpatMNY/+yf8z+GLcH/Qn0iX2W2oEfXP4GvwQHuIL9AYGnaO3zqAX6946nkgqZNnUhx43DIdQtMFeOPrgy/y3Yd85HlJWwjLFkU3kFwq28xPnuPhMWeS+tDLV9Otllq7pQCf3uXJDN9wFDiUTgefHaiYbdfi3b3u8+iY6TnzhgehI1LTe8lcd7s1wJSzKbahCRxKKztTLXstGAiu3a6rPuQs5pk9TWAan5f0BZmGf7Ylxzzk/A7PAs4QPPPAHeFQ2hbFHszlgZuKZsJcUmbDC40sEU403cEjczstOEypa+YxevL4QBC8oRYqWdK6b7sK25tfE+oDZgtOQ2Jg8T41HGcBE6fTWHn4JtHcu9S7uYgU5KSCkl/mcnq+5/YBXOEr6lCUCwOTOM1taOI8mSxx1NsCXBEmLKbMAg5MkwbLmpBaFOPrNSlO2HnLiEqW3tHEwd8AeiQLmn+2gxjC3k6AxREqvKcJbTEzlpLiw4rNZK6oJdidbMMGX9FULKr0AkW+2qDEPBNNm5QAt2Ik2nftNWHetubosHLo2nG4vQA7GkcVCgVCgaDixHqo9UUn1A6OshapaNR/LPRYFV8siT1cCtJE0k/3WtaNSuUZYKPnsVIW0xXWnMUxq5+En4Kvw/MqQmVXnAXj9Z+9zM98zM/Agy7F/qqj2Nh67b8HjFnPP3iBn/tkpdzwEJX/whIcQUXOaikeliCRGUk7tiwF0rItwMEhjkZ309hikFoRAmLTpEXWuHS6y+am/KB/fM50aLEhGnSMwkpxzOov4H0AvgovwJ1iGzDLtJn/9BU+fAINfwUe6FHSLhu83viV/+/HrOePX+STT2B9uWGbrMHHLldRBlhS/CJQmcRxJFqZica01XixAZsYiH1uolZxLrR/SgxVIJjkpQP4PE9sE59LKLr7kltSBogS5tyszzH8Fvw8/AS8rNOg0xUS9fIaHwb+6et8Q/gyvKRjf5OusOzGx8evA/BP4IP11uN/grca5O0lcsPLJ5YjwI4QkJBOHa0WdMZYGxPbh2W2nR9v3WxEWqgp/G3+6VZbRLSAAZ3BhdhAaUL33VUSw9yjEsvbaQ9u4A/gGXwZXoEHOuU1GSj2chf+Mo+f8IcfcAxfIKVmyunRbYQVnoevwgfw3TXXcw++xNuP4fhyueEUNttEduRVaDttddoP0eSxLe2LENk6itYxlrxBNBYrNNKSQmeaLcm9c8UsaB5WyO6675yyQIAWSDpBVoA/gxmcwEvwoDv0m58UE7gHn+fJOa8/Ywan8EKRfjsopF83eCglX/Sfr7OeaRoQfvt1CGvIDccH5BCvw1sWIzRGC/66t0VTcLZQZtm6PlAasbOJ9iwWtUo7biktTSIPxnR24jxP1ZKaqq+2RcXM9OrBAm/AAs7hDJ5bNmGb+KIfwCs8a3jnjBrOFeMjHSCdbKr+2uOLfnOd9eiA8Hvvwwq54VbP2OqwkB48Ytc4YEOiH2vTXqodabfWEOzso4qxdbqD5L6tbtNPECqbhnA708DZH4QOJUXqScmUlks7Ot6FBuZw3n2mEbaUX7kDzxHOOQk8nKWMzAzu6ZZ8sOFw4RK+6PcuXo9tB4SbMz58ApfKDXf3szjNIIbGpD5TKTRxGkEMLjLl+K3wlWXBsCUxIDU+jbOiysESqAy1MGUJpXgwbTWzNOVEziIXZrJ+VIztl1PUBxTSo0dwn2bOmfDRPD3TRTGlfbCJvO9KvuhL1hMHhB9wPuPRLGHcdOWG2xc0U+5bQtAJT0nRTewXL1pgk2+rZAdeWmz3jxAqfNQQdzTlbF8uJ5ecEIWvTkevAHpwz7w78QujlD/Lr491bD8/1vhM2yrUQRrWXNQY4fGilfctMWYjL72UL/qS9eiA8EmN88nbNdour+PBbbAjOjIa4iBhfFg6rxeKdEGcL6p3EWR1Qq2Qkhs2DrnkRnmN9tG2EAqmgPw6hoL7Oza7B+3SCrR9tRftko+Lsf2F/mkTndN2LmzuMcKTuj/mX2+4Va3ki16+nnJY+S7MefpkidxwnV+4wkXH8TKnX0tsYzYp29DOOoSW1nf7nTh2akYiWmcJOuTidSaqESrTYpwjJJNVGQr+rLI7WsqerHW6Kp/oM2pKuV7T1QY9gjqlZp41/WfKpl56FV/0kvXQFRyeQ83xaTu5E8p5dNP3dUF34ihyI3GSpeCsywSh22ZJdWto9winhqifb7VRvgktxp13vyjrS0EjvrRfZ62uyqddSWaWYlwTPAtJZ2oZ3j/Sgi/mi+6vpzesfAcWNA0n8xVyw90GVFGuZjTXEQy+6GfLGLMLL523f5E0OmxVjDoOuRiH91RKU+vtoCtH7TgmvBLvtFXWLW15H9GTdVw8ow4IlRLeHECN9ym1e9K0I+Cbnhgv4Yu+aD2HaQJ80XDqOzSGAV4+4yCqBxrsJAX6ZTIoX36QnvzhhzzMfFW2dZVLOJfo0zbce5OvwXMFaZ81mOnlTVXpDZsQNuoYWveketKb5+6JOOsgX+NTm7H49fUTlx+WLuWL7qxnOFh4BxpmJx0p2gDzA/BUARuS6phR+pUsY7MMboAHx5xNsSVfVZcYSwqCKrqon7zM+8ecCkeS4nm3rINuaWvVNnMRI1IRpxTqx8PZUZ0Br/UEduo3B3hNvmgZfs9gQPj8vIOxd2kndir3awvJ6BLvoUuOfFWNYB0LR1OQJoUySKb9IlOBx74q1+ADC2G6rOdmFdJcD8BkfualA+BdjOOzP9uUhGUEX/TwhZsUduwRr8wNuXKurCixLBgpQI0mDbJr9dIqUuV+92ngkJZ7xduCk2yZKbfWrH1VBiTg9VdzsgRjW3CVXCvAwDd+c1z9dWw9+B+8MJL/eY15ZQ/HqvTwVdsZn5WQsgRRnMaWaecu3jFvMBEmgg+FJFZsnSl0zjB9OqPYaBD7qmoVyImFvzi41usesV0julaAR9dfR15Xzv9sEruRDyk1nb+QaLU67T885GTls6YgcY+UiMa25M/pwGrbCfzkvR3e0jjtuaFtnwuagHTSb5y7boBH119HXhvwP487jJLsLJ4XnUkHX5sLbS61dpiAXRoZSCrFJ+EjpeU3puVfitngYNo6PJrAigKktmwjyQdZpfq30mmtulaAx9Zfx15Xzv+cyeuiBFUs9zq8Kq+XB9a4PVvph3GV4E3y8HENJrN55H1X2p8VyqSKwVusJDKzXOZzplWdzBUFK9e+B4+uv468xvI/b5xtSAkBHQaPvtqWzllVvEOxPbuiE6+j2pvjcKsbvI7txnRErgfH7LdXqjq0IokKzga14GzQ23SSbCQvO6r+Or7SMIr/efOkkqSdMnj9mBx2DRsiY29Uj6+qK9ZrssCKaptR6HKURdwUYeUWA2kPzVKQO8ku2nU3Anhs/XWkBx3F/7wJtCTTTIKftthue1ty9xvNYLY/zo5KSbIuKbXpbEdSyeRyYdAIwKY2neyoc3+k1XUaufYga3T9daMUx/r8z1s10ITknIO0kuoMt+TB8jK0lpayqqjsJ2qtXAYwBU932zinimgmd6mTRDnQfr88q36NAI+tv24E8Pr8zxtasBqx0+xHH9HhlrwsxxNUfKOHQaZBITNf0uccj8GXiVmXAuPEAKSdN/4GLHhs/XWj92dN/uetNuBMnVR+XWDc25JLjo5Mg5IZIq226tmCsip2zZliL213YrTlL2hcFjpCduyim3M7/eB16q/blQsv5X/esDRbtJeabLIosWy3ycavwLhtxdWzbMmHiBTiVjJo6lCLjXZsi7p9PEPnsq6X6wd4bP11i0rD5fzPm/0A6brrIsllenZs0lCJlU4abakR59enZKrKe3BZihbTxlyZ2zl1+g0wvgmA166/bhwDrcn/7Ddz0eWZuJvfSESug6NzZsox3Z04FIxz0mUjMwVOOVTq1CQ0AhdbBGVdjG/CgsfUX7esJl3K/7ytWHRv683praW/8iDOCqWLLhpljDY1ZpzK75QiaZoOTpLKl60auHS/97oBXrv+umU9+FL+5+NtLFgjqVLCdbmj7pY5zPCPLOHNCwXGOcLquOhi8CmCWvbcuO73XmMUPab+ug3A6/A/78Bwe0bcS2+tgHn4J5pyS2WbOck0F51Vq3LcjhLvZ67p1ABbaL2H67bg78BfjKi/jr3+T/ABV3ilLmNXTI2SpvxWBtt6/Z//D0z/FXaGbSBgylzlsEGp+5//xrd4/ae4d8DUUjlslfIYS3t06HZpvfQtvv0N7AHWqtjP2pW08QD/FLy//da38vo8PNlKHf5y37Dxdfe/oj4kVIgFq3koLReSR76W/bx//n9k8jonZxzWTANVwEniDsg87sOSd/z7//PvMp3jQiptGVWFX2caezzAXwfgtzYUvbr0iozs32c3Uge7varH+CNE6cvEYmzbPZ9hMaYDdjK4V2iecf6EcEbdUDVUARda2KzO/JtCuDbNQB/iTeL0EG1JSO1jbXS+nLxtPMDPw1fh5+EPrgSEKE/8Gry5A73ui87AmxwdatyMEBCPNOCSKUeRZ2P6Myb5MRvgCHmA9ywsMifU+AYXcB6Xa5GibUC5TSyerxyh0j6QgLVpdyhfArRTTLqQjwe4HOD9s92D4Ap54odXAPBWLAwB02igG5Kkc+piN4lvODIFGAZgT+EO4Si1s7fjSR7vcQETUkRm9O+MXyo9OYhfe4xt9STQ2pcZRLayCV90b4D3jR0DYAfyxJ+eywg2IL7NTMXna7S/RpQ63JhWEM8U41ZyQGjwsVS0QBrEKLu8xwZsbi4wLcCT+OGidPIOCe1PiSc9Qt+go+vYqB7cG+B9d8cAD+WJPz0Am2gxXgU9IneOqDpAAXOsOltVuMzpdakJXrdPCzXiNVUpCeOos5cxnpQT39G+XVLhs1osQVvJKPZyNq8HDwd4d7pNDuWJPxVX7MSzqUDU6gfadKiNlUFTzLeFHHDlzO4kpa7aiKhBPGKwOqxsBAmYkOIpipyXcQSPlRTf+Tii0U3EJGaZsDER2qoB3h2hu0qe+NNwUooYU8y5mILbJe6OuX+2FTKy7bieTDAemaQyQ0CPthljSWO+xmFDIYiESjM5xKd6Ik5lvLq5GrQ3aCMLvmCA9wowLuWJb9xF59hVVP6O0CrBi3ZjZSNOvRy+I6klNVRJYRBaEzdN+imiUXQ8iVF8fsp+W4JXw7WISW7fDh7lptWkCwZ4d7QTXyBPfJMYK7SijjFppGnlIVJBJBYj7eUwtiP1IBXGI1XCsjNpbjENVpSAJ2hq2LTywEly3hUYazt31J8w2+aiLx3g3fohXixPfOMYm6zCGs9LVo9MoW3MCJE7R5u/WsOIjrqBoHUO0bJE9vxBpbhsd3+Nb4/vtPCZ4oZYCitNeYuC/8UDvDvy0qvkiW/cgqNqRyzqSZa/s0mqNGjtKOoTm14zZpUauiQgVfqtQiZjq7Q27JNaSK5ExRcrGCXO1FJYh6jR6CFqK7bZdQZ4t8g0rSlPfP1RdBtqaa9diqtzJkQ9duSryi2brQXbxDwbRUpFMBHjRj8+Nt7GDKgvph9okW7LX47gu0SpGnnFQ1S1lYldOsC7hYteR574ZuKs7Ei1lBsfdz7IZoxzzCVmmVqaSySzQbBVAWDek+N4jh9E/4VqZrJjPwiv9BC1XcvOWgO8275CVyBPvAtTVlDJfZkaZGU7NpqBogAj/xEHkeAuJihWYCxGN6e8+9JtSegFXF1TrhhLGP1fak3pebgPz192/8gB4d/6WT7+GdYnpH7hH/DJzzFiYPn/vjW0SgNpTNuPIZoAEZv8tlGw4+RLxy+ZjnKa5NdFoC7UaW0aduoYse6+bXg1DLg6UfRYwmhGEjqPvF75U558SANrElK/+MdpXvmqBpaXOa/MTZaa1DOcSiLaw9j0NNNst3c+63c7EKTpkvKHzu6bPbP0RkuHAVcbRY8ijP46MIbQeeT1mhA+5PV/inyDdQipf8LTvMXbwvoDy7IruDNVZKTfV4CTSRUYdybUCnGU7KUTDxLgCknqUm5aAW6/1p6eMsOYsphLzsHrE0Y/P5bQedx1F/4yPHnMB3/IOoTU9+BL8PhtjuFKBpZXnYNJxTuv+2XqolKR2UQgHhS5novuxVySJhBNRF3SoKK1XZbbXjVwWNyOjlqWJjrWJIy+P5bQedyldNScP+HZ61xKSK3jyrz+NiHG1hcOLL/+P+PDF2gOkekKGiNWKgJ+8Z/x8Iv4DdQHzcpZyF4v19I27w9/yPGDFQvmEpKtqv/TLiWMfn4sofMm9eAH8Ao0zzh7h4sJqYtxZd5/D7hkYPneDzl5idlzNHcIB0jVlQ+8ULzw/nc5/ojzl2juE0apD7LRnJxe04dMz2iOCFNtGFpTuXA5AhcTRo8mdN4kz30nVjEC4YTZQy4gpC7GlTlrePKhGsKKgeXpCYeO0MAd/GH7yKQUlXPLOasOH3FnSphjHuDvEu4gB8g66oNbtr6eMbFIA4fIBJkgayoXriw2XEDQPJrQeROAlY6aeYOcMf+IVYTU3XFlZufMHinGywaW3YLpObVBAsbjF4QJMsVUSayjk4voPsHJOQfPWDhCgDnmDl6XIRerD24HsGtw86RMHOLvVSHrKBdeVE26gKB5NKHzaIwLOmrqBWJYZDLhASG16c0Tn+CdRhWDgWXnqRZUTnPIHuMJTfLVpkoYy5CzylHVTGZMTwkGAo2HBlkQplrJX6U+uF1wZz2uwS1SQ12IqWaPuO4baZaEFBdukksJmkcTOm+YJSvoqPFzxFA/YUhIvWxcmSdPWTWwbAKVp6rxTtPFUZfKIwpzm4IoMfaYQLWgmlG5FME2gdBgm+J7J+rtS/XBbaVLsR7bpPQnpMFlo2doWaVceHk9+MkyguZNCJ1He+kuHTWyQAzNM5YSUg/GlTk9ZunAsg1qELVOhUSAK0LABIJHLKbqaEbHZLL1VA3VgqoiOKXYiS+HRyaEKgsfIqX64HYWbLRXy/qWoylIV9gudL1OWBNgBgTNmxA6b4txDT4gi3Ri7xFSLxtXpmmYnzAcWDZgY8d503LFogz5sbonDgkKcxGsWsE1OI+rcQtlgBBCSOKD1mtqYpIU8cTvBmAT0yZe+zUzeY92fYjTtGipXLhuR0ePoHk0ofNWBX+lo8Z7pAZDk8mEw5L7dVyZZoE/pTewbI6SNbiAL5xeygW4xPRuLCGbhcO4RIeTMFYHEJkYyEO9HmJfXMDEj/LaH781wHHZEtqSQ/69UnGpzH7LKIAZEDSPJnTesJTUa+rwTepI9dLJEawYV+ZkRn9g+QirD8vF8Mq0jFQ29js6kCS3E1+jZIhgPNanHdHFqFvPJLHqFwQqbIA4jhDxcNsOCCQLDomaL/dr5lyJaJU6FxPFjO3JOh3kVMcROo8u+C+jo05GjMF3P3/FuDLn5x2M04xXULPwaS6hBYki+MrMdZJSgPHlcB7nCR5bJ9Kr5ACUn9jk5kivdd8tk95SOGrtqu9lr2IhK65ZtEl7ZKrp7DrqwZfRUSN1el7+7NJxZbywOC8neNKTch5vsTEMNsoCCqHBCqIPRjIPkm0BjvFODGtto99rCl+d3wmHkW0FPdpZtC7MMcVtGFQjJLX5bdQ2+x9ypdc313uj8xlsrfuLgWXz1cRhZvJYX0iNVBRcVcmCXZs6aEf3RQF2WI/TcCbKmGU3IOoDJGDdDub0+hYckt6PlGu2BcxmhbTdj/klhccLGJMcqRjMJP1jW2ETqLSWJ/29MAoORluJ+6LPffBZbi5gqi5h6catQpmOT7/OFf5UorRpLzCqcMltBLhwd1are3kztrSzXO0LUbXRQcdLh/RdSZ+swRm819REDrtqzC4es6Gw4JCKlSnjYVpo0xeq33PrADbFLL3RuCmObVmPN+24kfa+AojDuM4umKe2QwCf6EN906HwjujaitDs5o0s1y+k3lgbT2W2i7FJdnwbLXhJUBq/9liTctSmFC/0OqUinb0QddTWamtjbHRFuWJJ6NpqZ8vO3fZJ37Db+2GkaPYLGHs7XTTdiFQJ68SkVJFVmY6McR5UycflNCsccHFaV9FNbR4NttLxw4pQ7wJd066Z0ohVbzihaxHVExd/ay04oxUKWt+AsdiQ9OUyZ2krzN19IZIwafSTFgIBnMV73ADj7V/K8u1MaY2sJp2HWm0f41tqwajEvdHWOJs510MaAqN4aoSiPCXtN2KSi46dUxHdaMquar82O1x5jqhDGvqmoE9LfxcY3zqA7/x3HA67r9ZG4O6Cuxu12/+TP+eLP+I+HErqDDCDVmBDO4larujNe7x8om2rMug0MX0rL1+IWwdwfR+p1TNTyNmVJ85ljWzbWuGv8/C7HD/izjkHNZNYlhZcUOKVzKFUxsxxN/kax+8zPWPSFKw80rJr9Tizyj3o1gEsdwgWGoxPezDdZ1TSENE1dLdNvuKL+I84nxKesZgxXVA1VA1OcL49dFlpFV5yJMhzyCmNQ+a4BqusPJ2bB+xo8V9u3x48VVIEPS/mc3DvAbXyoYr6VgDfh5do5hhHOCXMqBZUPhWYbWZECwVJljLgMUWOCB4MUuMaxGNUQDVI50TQ+S3kFgIcu2qKkNSHVoM0SHsgoZxP2d5HH8B9woOk4x5bPkKtAHucZsdykjxuIpbUrSILgrT8G7G5oCW+K0990o7E3T6AdW4TilH5kDjds+H64kS0mz24grtwlzDHBJqI8YJQExotPvoC4JBq0lEjjQkyBZ8oH2LnRsQ4Hu1QsgDTJbO8fQDnllitkxuVskoiKbRF9VwzMDvxHAdwB7mD9yCplhHFEyUWHx3WtwCbSMMTCUCcEmSGlg4gTXkHpZXWQ7kpznK3EmCHiXInqndkQjunG5kxTKEeGye7jWz9cyMR2mGiFQ15ENRBTbCp+Gh86vAyASdgmJq2MC6hoADQ3GosP0QHbnMHjyBQvQqfhy/BUbeHd5WY/G/9LK/8Ka8Jd7UFeNWEZvzPb458Dn8DGLOe3/wGL/4xP+HXlRt+M1PE2iLhR8t+lfgxsuh7AfO2AOf+owWhSZRYQbd622hbpKWKuU+XuvNzP0OseRDa+mObgDHJUSc/pKx31QdKffQ5OIJpt8GWjlgTwMc/w5MPCR/yl1XC2a2Yut54SvOtMev55Of45BOat9aWG27p2ZVORRvnEk1hqWMVUmqa7S2YtvlIpspuF1pt0syuZS2NV14mUidCSfzQzg+KqvIYCMljIx2YK2AO34fX4GWdu5xcIAb8MzTw+j/lyWM+Dw/gjs4GD6ehNgA48kX/AI7XXM/XAN4WHr+9ntywqoCakCqmKP0rmQrJJEErG2Upg1JObr01lKQy4jskWalKYfJ/EDLMpjNSHFEUAde2fltaDgmrNaWQ9+AAb8I5vKjz3L1n1LriB/BXkG/wwR9y/oRX4LlioHA4LzP2inzRx/DWmutRweFjeP3tNeSGlaE1Fde0OS11yOpmbIp2u/jF1n2RRZviJM0yBT3IZl2HWImKjQOxIyeU325b/qWyU9Moj1o07tS0G7qJDoGHg5m8yeCxMoEH8GU45tnrNM84D2l297DQ9t1YP7jki/7RmutRweEA77/HWXOh3HCxkRgldDQkAjNTMl2Iloc1qN5JfJeeTlyTRzxURTdn1Ixv2uKjs12AbdEWlBtmVdk2k7FFwj07PCZ9XAwW3dG+8xKzNFr4EnwBZpy9Qzhh3jDXebBpYcpuo4fQ44u+fD1dweEnHzI7v0xuuOALRUV8rXpFyfSTQYkhd7IHm07jpyhlkCmI0ALYqPTpUxXS+z4jgDj1Pflvmz5ecuItpIBxyTHpSTGWd9g1ApfD/bvwUhL4nT1EzqgX7cxfCcNmb3mPL/qi9SwTHJ49oj5ZLjccbTG3pRmlYi6JCG0mQrAt1+i2UXTZ2dv9IlQpN5naMYtviaXlTrFpoMsl3bOAFEa8sqPj2WCMrx3Yjx99qFwO59Aw/wgx+HlqNz8oZvA3exRDvuhL1jMQHPaOJ0+XyA3fp1OfM3qObEVdhxjvynxNMXQV4+GJyvOEFqeQBaIbbO7i63rpxCltdZShPFxkjM2FPVkn3TG+Rp9pO3l2RzFegGfxGDHIAh8SteR0C4HopXzRF61nheDw6TFN05Ebvq8M3VKKpGjjO6r7nhudTEGMtYM92HTDaR1FDMXJ1eThsbKfywyoWwrzRSXkc51flG3vIid62h29bIcFbTGhfV+faaB+ohj7dPN0C2e2lC96+XouFByen9AsunLDJZ9z7NExiUc0OuoYW6UZkIyx2YUR2z6/TiRjyKMx5GbbjLHvHuf7YmtKghf34LJfx63Yg8vrvN2zC7lY0x0tvKezo4HmGYDU+Gab6dFL+KI761lDcNifcjLrrr9LWZJctG1FfU1uwhoQE22ObjdfkSzY63CbU5hzs21WeTddH2BaL11Gi7lVdlxP1nkxqhnKhVY6knS3EPgVGg1JpN5cP/hivujOelhXcPj8HC/LyI6MkteVjlolBdMmF3a3DbsuAYhL44dxzthWSN065xxUd55Lmf0wRbOYOqH09/o9WbO2VtFdaMb4qBgtFJoT1SqoN8wPXMoXLb3p1PUEhxfnnLzGzBI0Ku7FxrKsNJj/8bn/H8fPIVOd3rfrklUB/DOeO+nkghgSPzrlPxluCMtOnDL4Yml6dK1r3vsgMxgtPOrMFUZbEUbTdIzii5beq72G4PD0DKnwjmBULUVFmy8t+k7fZ3pKc0Q4UC6jpVRqS9Umv8bxw35flZVOU1X7qkjnhZlsMbk24qQ6Hz7QcuL6sDC0iHHki96Uh2UdvmgZnjIvExy2TeJdMDZNSbdZyAHe/Yd1xsQhHiKzjh7GxQ4yqMPaywPkjMamvqrYpmO7Knad+ZQC5msCuAPWUoxrxVhrGv7a+KLXFhyONdTMrZ7ke23qiO40ZJUyzgYyX5XyL0mV7NiUzEs9mjtbMN0dERqwyAJpigad0B3/zRV7s4PIfXSu6YV/MK7+OrYe/JvfGMn/PHJe2fyUdtnFrKRNpXV0Y2559aWPt/G4BlvjTMtXlVIWCnNyA3YQBDmYIodFz41PvXPSa6rq9lWZawZ4dP115HXV/M/tnFkkrBOdzg6aP4pID+MZnTJ1SuuB6iZlyiox4HT2y3YBtkUKWooacBQUDTpjwaDt5poBHl1/HXltwP887lKKXxNUEyPqpGTyA699UqY/lt9yGdlUKra0fFWS+36iylVWrAyd7Uw0CZM0z7xKTOduznLIjG2Hx8cDPLb+OvK6Bv7n1DYci4CxUuRxrjBc0bb4vD3rN5Zz36ntLb83eVJIB8LiIzCmn6SMPjlX+yNlTjvIGjs+QzHPf60Aj62/jrzG8j9vYMFtm1VoRWCJdmw7z9N0t+c8cxZpPeK4aTRicS25QhrVtUp7U578chk4q04Wx4YoQSjFryUlpcQ1AbxZ/XVMknIU//OGl7Q6z9Zpxi0+3yFhSkjUDpnCIUhLWVX23KQ+L9vKvFKI0ZWFQgkDLvBoylrHNVmaw10zwCPrr5tlodfnf94EWnQ0lFRWy8pW9LbkLsyUVDc2NSTHGDtnD1uMtchjbCeb1mpxFP0YbcClhzdLu6lfO8Bj6q+bdT2sz/+8SZCV7VIxtt0DUn9L7r4cLYWDSXnseEpOGFuty0qbOVlS7NNzs5FOGJUqQpl2Q64/yBpZf90sxbE+//PGdZ02HSipCbmD6NItmQ4Lk5XUrGpDMkhbMm2ZVheNYV+VbUWTcv99+2NyX1VoafSuC+AN6q9bFIMv5X/eagNWXZxEa9JjlMwNWb00akGUkSoepp1/yRuuqHGbUn3UdBSTxBU6SEVklzWRUkPndVvw2PrrpjvxOvzPmwHc0hpmq82npi7GRro8dXp0KXnUQmhZbRL7NEVp1uuZmO45vuzKsHrktS3GLWXODVjw+vXXLYx4Hf7njRPd0i3aoAGX6W29GnaV5YdyDj9TFkakje7GHYzDoObfddHtOSpoi2SmzJHrB3hM/XUDDEbxP2/oosszcRlehWXUvzHv4TpBVktHqwenFo8uLVmy4DKLa5d3RtLrmrM3aMFr1183E4sewf+85VWeg1c5ag276NZrM9IJVNcmLEvDNaV62aq+14IAOGFsBt973Ra8Xv11YzXwNfmft7Jg2oS+XOyoC8/cwzi66Dhmgk38kUmP1CUiYWOX1bpD2zWXt2FCp7uq8703APAa9dfNdscR/M/bZLIyouVxqJfeWvG9Je+JVckHQ9+CI9NWxz+blX/KYYvO5n2tAP/vrlZ7+8/h9y+9qeB/Hnt967e5mevX10rALDWK//FaAT5MXdBXdP0C/BAes792c40H+AiAp1e1oH8HgH94g/Lttx1gp63op1eyoM/Bvw5/G/7xFbqJPcCXnmBiwDPb/YKO4FX4OjyCb289db2/Noqicw4i7N6TVtoz8tNwDH+8x/i6Ae7lmaQVENzJFb3Di/BFeAwz+Is9SjeQySpPqbLFlNmyz47z5a/AF+AYFvDmHqibSXTEzoT4Gc3OALaqAP4KPFUJ6n+1x+rGAM6Zd78bgJ0a8QN4GU614vxwD9e1Amy6CcskNrczLx1JIp6HE5UZD/DBHrFr2oNlgG4Odv226BodoryjGJ9q2T/AR3vQrsOCS0ctXZi3ruLlhpFDJYl4HmYtjQCP9rhdn4suySLKDt6wLcC52h8xPlcjju1fn+yhuw4LZsAGUuo2b4Fx2UwQu77uqRHXGtg92aN3tQCbFexc0uk93vhTXbct6y7MulLycoUljx8ngDMBg1tvJjAazpEmOtxlzclvj1vQf1Tx7QlPDpGpqgtdSKz/d9/hdy1vTfFHSmC9dGDZbLiezz7Ac801HirGZsWjydfZyPvHXL/Y8Mjzg8BxTZiuwKz4Eb8sBE9zznszmjvFwHKPIWUnwhqfVRcd4Ck0K6ate48m1oOfrX3/yOtvAsJ8zsPAM89sjnddmuLuDPjX9Bu/L7x7xpMzFk6nWtyQfPg278Gn4Aekz2ZgOmU9eJ37R14vwE/BL8G3aibCiWMWWDQ0ZtkPMnlcGeAu/Ag+8ZyecU5BPuy2ILD+sQqyZhAKmn7XZd+jIMTN9eBL7x95xVLSX4On8EcNlXDqmBlqS13jG4LpmGbkF/0CnOi3H8ETOIXzmnmtb0a16Tzxj1sUvQCBiXZGDtmB3KAefPH94xcUa/6vwRn80GOFyjEXFpba4A1e8KQfFF+259tx5XS4egYn8fQsLGrqGrHbztr+uByTahWuL1NUGbDpsnrwBfePPwHHIf9X4RnM4Z2ABWdxUBlqQ2PwhuDxoS0vvqB1JzS0P4h2nA/QgTrsJFn+Y3AOjs9JFC07CGWX1oNX3T/yHOzgDjwPn1PM3g9Jk9lZrMEpxnlPmBbjyo2+KFXRU52TJM/2ALcY57RUzjObbjqxVw++4P6RAOf58pcVsw9Daje3htriYrpDOonre3CudSe6bfkTEgHBHuDiyu5MCsc7BHhYDx7ePxLjqigXZsw+ijMHFhuwBmtoTPtOxOrTvYJDnC75dnUbhfwu/ZW9AgYd+peL68HD+0emKquiXHhWjJg/UrkJYzuiaL3E9aI/ytrCvAd4GcYZMCkSQxfUg3v3j8c4e90j5ZTPdvmJJGHnOCI2nHS8081X013pHuBlV1gB2MX1YNmWLHqqGN/TWmG0y6clJWthxNUl48q38Bi8vtMKyzzpFdSDhxZ5WBA5ZLt8Jv3895DduBlgbPYAj8C4B8hO68FDkoh5lydC4FiWvBOVqjYdqjiLv92t8yPDjrDaiHdUD15qkSURSGmXJwOMSxWAXYwr3zaAufJ66l+94vv3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/wHuD9tQd4f+0B3l97gPfXHuD9tQd4f+0B3l97gG8LwP8G/AL8O/A5OCq0Ys2KIdv/qOIXG/4mvFAMF16gZD+2Xvu/B8as5+8bfllWyg0zaNO5bfXj6vfhhwD86/Aq3NfRS9t9WPnhfnvCIw/CT8GLcFTMnpntdF/z9V+PWc/vWoIH+FL3Znv57PitcdGP4R/C34avw5fgRVUInCwbsn1yyA8C8zm/BH8NXoXnVE6wVPjdeCI38kX/3+Ct9dbz1pTmHFRu+Hm4O9Ch3clr99negxfwj+ER/DR8EV6B5+DuQOnTgUw5rnkY+FbNU3gNXh0o/JYTuWOvyBf9FvzX663HH/HejO8LwAl8Hl5YLTd8q7sqA3wbjuExfAFegQdwfyDoSkWY8swzEf6o4Qyewefg+cHNbqMQruSL/u/WWc+E5g7vnnEXgDmcDeSGb/F4cBcCgT+GGRzDU3hZYburAt9TEtHgbM6JoxJ+6NMzzTcf6c2bycv2+KK/f+l6LBzw5IwfqZJhA3M472pWT/ajKxnjv4AFnMEpnBTPND6s2J7qHbPAqcMK74T2mZ4VGB9uJA465It+/eL1WKhYOD7xHOkr1ajK7d0C4+ke4Hy9qXZwpgLr+Znm/uNFw8xQOSy8H9IzjUrd9+BIfenYaylf9FsXr8fBAadnPIEDna8IBcwlxnuA0/Wv6GAWPd7dDIKjMdSWueAsBj4M7TOd06qBbwDwKr7oleuxMOEcTuEZTHWvDYUO7aHqAe0Bbq+HEFRzOz7WVoTDQkVds7A4sIIxfCQdCefFRoIOF/NFL1mPab/nvOakSL/Q1aFtNpUb/nFOVX6gzyg/1nISyDfUhsokIzaBR9Kxm80s5mK+6P56il1jXic7nhQxsxSm3OwBHl4fFdLqi64nDQZvqE2at7cWAp/IVvrN6/BFL1mPhYrGMBfOi4PyjuSGf6wBBh7p/FZTghCNWGgMzlBbrNJoPJX2mW5mwZfyRffXo7OFi5pZcS4qZUrlViptrXtw+GQoyhDPS+ANjcGBNRiLCQDPZPMHuiZfdFpPSTcQwwKYdRNqpkjm7AFeeT0pJzALgo7g8YYGrMHS0iocy+YTm2vyRUvvpXCIpQ5pe666TJrcygnScUf/p0NDs/iAI/nqDHC8TmQT8x3NF91l76oDdQGwu61Z6E0ABv7uO1dbf/37Zlv+Zw/Pbh8f1s4Avur6657/+YYBvur6657/+YYBvur6657/+YYBvur6657/+aYBvuL6657/+VMA8FXWX/f8zzcN8BXXX/f8zzcNMFdbf93zP38KLPiK6697/uebtuArrr/u+Z9vGmCusP6653/+1FjwVdZf9/zPN7oHX339dc//fNMu+irrr3v+50+Bi+Zq6697/uebA/jz8Pudf9ht/fWv517J/XUzAP8C/BAeX9WCDrUpZ3/dEMBxgPcfbtTVvsYV5Yn32u03B3Ac4P3b8I+vxNBKeeL9dRMAlwO83959qGO78sT769oB7g3w/vGVYFzKE++v6wV4OMD7F7tckFkmT7y/rhHgpQO8b+4Y46XyxPvrugBeNcB7BRiX8sT767oAvmCA9woAHsoT76+rBJjLBnh3txOvkifeX1dswZcO8G6N7sXyxPvr6i340gHe3TnqVfLE++uKAb50gHcXLnrX8sR7gNdPRqwzwLu7Y/FO5Yn3AK9jXCMGeHdgxDuVJ75VAI8ljP7PAb3/RfjcZfePHBB+79dpfpH1CanN30d+mT1h9GqAxxJGM5LQeeQ1+Tb+EQJrElLb38VHQ94TRq900aMIo8cSOo+8Dp8QfsB8zpqE1NO3OI9Zrj1h9EV78PqE0WMJnUdeU6E+Jjyk/hbrEFIfeWbvId8H9oTRFwdZaxJGvziW0Hn0gqYB/wyZ0PwRlxJST+BOw9m77Amj14ii1yGM/txYQudN0qDzGe4EqfA/5GJCagsHcPaEPWH0esekSwmjRxM6b5JEcZ4ww50ilvAOFxBSx4yLW+A/YU8YvfY5+ALC6NGEzhtmyZoFZoarwBLeZxUhtY4rc3bKnjB6TKJjFUHzJoTOozF2YBpsjcyxDgzhQ1YRUse8+J4wenwmaylB82hC5w0zoRXUNXaRBmSMQUqiWSWkLsaVqc/ZE0aPTFUuJWgeTei8SfLZQeMxNaZSIzbII4aE1Nmr13P2hNHjc9E9guYNCZ032YlNwESMLcZiLQHkE4aE1BFg0yAR4z1h9AiAGRA0jyZ03tyIxWMajMPWBIsxYJCnlITU5ShiHYdZ94TR4wCmSxg9jtB5KyPGYzymAYexWEMwAPIsAdYdV6aObmNPGD0aYLoEzaMJnTc0Ygs+YDw0GAtqxBjkuP38bMRWCHn73xNGjz75P73WenCEJnhwyVe3AEe8TtKdJcYhBl97wuhNAObK66lvD/9J9NS75v17wuitAN5fe4D31x7g/bUHeH/tAd5fe4D3AO+vPcD7aw/w/toDvL/2AO+vPcD7aw/w/toDvAd4f/24ABzZ8o+KLsSLS+Pv/TqTb3P4hKlQrTGh+fbIBT0Axqznnb+L/V2mb3HkN5Mb/nEHeK7d4IcDld6lmDW/iH9E+AH1MdOw/Jlu2T1xNmY98sv4wHnD7D3uNHu54WUuOsBTbQuvBsPT/UfzNxGYzwkP8c+Yz3C+r/i6DcyRL/rZ+utRwWH5PmfvcvYEt9jLDS/bg0/B64DWKrQM8AL8FPwS9beQCe6EMKNZYJol37jBMy35otdaz0Bw2H/C2Smc7+WGB0HWDELBmOByA3r5QONo4V+DpzR/hFS4U8wMW1PXNB4TOqYz9urxRV++ntWCw/U59Ty9ebdWbrgfRS9AYKKN63ZokZVygr8GZ/gfIhZXIXPsAlNjPOLBby5c1eOLvmQ9lwkOy5x6QV1j5TYqpS05JtUgUHUp5toHGsVfn4NX4RnMCe+AxTpwmApTYxqMxwfCeJGjpXzRF61nbcHhUBPqWze9svwcHJ+S6NPscKrEjug78Dx8Lj3T8D4YxGIdxmJcwhi34fzZUr7olevZCw5vkOhoClq5zBPZAnygD/Tl9EzDh6kl3VhsHYcDEb+hCtJSvuiV69kLDm+WycrOTArHmB5/VYyP6jOVjwgGawk2zQOaTcc1L+aLXrKeveDwZqlKrw8U9Y1p66uK8dEzdYwBeUQAY7DbyYNezBfdWQ97weEtAKYQg2xJIkuveAT3dYeLGH+ShrWNwZgN0b2YL7qznr3g8JYAo5bQBziPjx7BPZ0d9RCQp4UZbnFdzBddor4XHN4KYMrB2qHFRIzzcLAHQZ5the5ovui94PCWAPefaYnxIdzRwdHCbuR4B+tbiy96Lzi8E4D7z7S0mEPd+eqO3cT53Z0Y8SV80XvB4Z0ADJi/f7X113f+7p7/+UYBvur6657/+YYBvur6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+aYBvuL6657/+VMA8FXWX/f8z58OgK+y/rrnf75RgLna+uue//lTA/CV1V/3/M837aKvvv6653++UQvmauuve/7nTwfAV1N/3fM/fzr24Cuuv+75nz8FFnxl9dc9//MOr/8/glixwRuUfM4AAAAASUVORK5CYII="}getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}dispose(){this.edgesRT.dispose(),this.weightsRT.dispose(),this.areaTexture.dispose(),this.searchTexture.dispose(),this.materialEdges.dispose(),this.materialWeights.dispose(),this.materialBlend.dispose(),this.fsQuad.dispose()}}const tE={uniforms:{tDiffuse:{value:null},amount:{value:.05},time:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float amount;
        uniform float time;
        varying vec2 vUv;

        // Simple random function
        float random(vec2 st) {
            return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123 + time);
        }

        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            float grain = (random(vUv) - 0.5) * amount;
            gl_FragColor = vec4(color.rgb + grain, color.a);
        }
    `},iE={uniforms:{tDiffuse:{value:null},amount:{value:.005}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float amount;
        varying vec2 vUv;
        void main() {
            vec2 offset = vec2(amount, amount) * (vUv - 0.5) * 2.0; // Radial offset
            vec4 colorR = texture2D(tDiffuse, vUv - offset);
            vec4 colorG = texture2D(tDiffuse, vUv);
            vec4 colorB = texture2D(tDiffuse, vUv + offset);
            gl_FragColor = vec4(colorR.r, colorG.g, colorB.b, colorG.a);
        }
    `},nE={uniforms:{tDiffuse:{value:null},temperature:{value:0}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float temperature; // -1 (cool) to 1 (warm)
        varying vec2 vUv;
        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            vec3 newColor = color.rgb;

            // Apply temperature adjustment
            // Positive temperature: make warmer (more red/orange, less blue)
            // Negative temperature: make cooler (more blue, less red/orange)
            
            // A common way to adjust temperature is to scale R and B channels
            // Warmer: increase R, decrease B
            // Cooler: decrease R, increase B
            // Green channel can also be adjusted slightly if desired

            if (temperature > 0.0) { // Warm
                newColor.r = mix(newColor.r, newColor.r + 0.35 * temperature, temperature);
                newColor.g = mix(newColor.g, newColor.g + 0.07 * temperature, temperature); 
                newColor.b = mix(newColor.b, newColor.b - 0.35 * temperature, temperature);
            } else if (temperature < 0.0) { // Cool
                float t = abs(temperature);
                newColor.b = mix(newColor.b, newColor.b + 0.35 * t, t);
                newColor.g = mix(newColor.g, newColor.g + 0.07 * t, t); 
                newColor.r = mix(newColor.r, newColor.r - 0.35 * t, t);
            }

            newColor = clamp(newColor, 0.0, 1.0); // Ensure colors stay in valid range
            gl_FragColor = vec4(newColor, color.a);
        }
    `};class sE{constructor(e,t){this.canvasContainer=e,this.scene=new zg,this.cameras={},this.activeCamera=null,this.createAndAddCamera("main",75,window.innerWidth/window.innerHeight,.5,5e3),this.setActiveCamera("main"),this.renderer=new Gg({antialias:!1});const i=t.postProcessing;this.colorBalanceParams={enabled:i.colorBalance,temperature:-.45},this.filmGrainParams={enabled:i.filmGrain,amount:.02},this.chromaticAberrationParams={enabled:i.chromaticAberration,amount:.002},this.smaaParams={enabled:i.smaa},this.performance={isTouchDevice:"ontouchstart"in window||navigator.maxTouchPoints>0,pixelRatio:1,baseDevicePixelRatio:1},this.pixelRatioSetting=t.pixelRatio,this.bloomResolutionScale=i.bloomResolutionScale,this._lastRenderNow=performance.now(),this._setupCamera(),this._setupRenderer(),this._setupPostProcessing(),window.addEventListener("resize",this.onWindowResize.bind(this))}createAndAddCamera(e,t,i,n,s){const a=new Jt(t,i,n,s);return this.cameras[e]=a,this.scene.add(a),a}setActiveCamera(e){this.cameras[e]?(this.activeCamera=this.cameras[e],this.composer&&this.composer.passes[0]&&(this.composer.passes[0].camera=this.activeCamera)):console.error(`Camera with name ${e} not found.`)}_setupCamera(){this.cameras.main.position.set(0,me.PLAYER_HEIGHT,0)}_setupRenderer(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.info.autoReset=!1,this.pixelRatioSetting==="capped"?this.performance.baseDevicePixelRatio=Math.min(window.devicePixelRatio,1):this.performance.baseDevicePixelRatio=window.devicePixelRatio,this.performance.pixelRatio=this.performance.baseDevicePixelRatio,this.renderer.setPixelRatio(this.performance.pixelRatio),this.renderer.outputColorSpace=dt,this.renderer.toneMapping=jc,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!1,this.canvasContainer.appendChild(this.renderer.domElement)}_setupPostProcessing(){this.composer=new j0(this.renderer);const e=new Z0(this.scene,this.activeCamera);this.composer.addPass(e),this.bloomPass=new fs(new Ae(window.innerWidth,window.innerHeight),1.5,.4,.85),this.bloomPass.threshold=0,this.bloomPass.strength=.79,this.bloomPass.radius=1,this.composer.addPass(this.bloomPass),this.bloomParams={threshold:this.bloomPass.threshold,strength:this.bloomPass.strength,radius:this.bloomPass.radius,enabled:!0},this.colorTempPass=new Jr(nE),this.colorTempPass.enabled=this.colorBalanceParams.enabled,this.colorTempPass.uniforms.temperature.value=this.colorBalanceParams.temperature,this.composer.addPass(this.colorTempPass),this.filmGrainPass=new Jr(tE),this.filmGrainPass.enabled=this.filmGrainParams.enabled,this.filmGrainPass.uniforms.amount.value=this.filmGrainParams.amount,this.composer.addPass(this.filmGrainPass),this.chromaticAberrationPass=new Jr(iE),this.chromaticAberrationPass.enabled=this.chromaticAberrationParams.enabled,this.chromaticAberrationPass.uniforms.amount.value=this.chromaticAberrationParams.amount,this.composer.addPass(this.chromaticAberrationPass),this.performance.isTouchDevice?(this.smaaParams.enabled=!1,this.smaaPass=null):(this.smaaPass=new eE(window.innerWidth*this.renderer.getPixelRatio(),window.innerHeight*this.renderer.getPixelRatio()),this.smaaPass.enabled=this.smaaParams.enabled,this.composer.addPass(this.smaaPass)),this._applyResolutionScale(!0)}onWindowResize(){for(const e in this.cameras){const t=this.cameras[e];t.aspect=window.innerWidth/window.innerHeight,t.updateProjectionMatrix()}this.renderer.setSize(window.innerWidth,window.innerHeight),this.pixelRatioSetting==="capped"?this.performance.baseDevicePixelRatio=Math.min(window.devicePixelRatio,1):this.performance.baseDevicePixelRatio=window.devicePixelRatio,this._applyResolutionScale(!0)}update(e){this.filmGrainParams.enabled&&this.filmGrainPass&&(this.filmGrainPass.uniforms.time.value+=e)}render(){this.colorBalanceParams.enabled?(this.colorTempPass.enabled=!0,this.colorTempPass.uniforms.temperature.value=this.colorBalanceParams.temperature):this.colorTempPass.enabled=!1,this.bloomPass.enabled=this.bloomParams.enabled,this.bloomParams.enabled&&(this.bloomPass.threshold=this.bloomParams.threshold,this.bloomPass.strength=this.bloomParams.strength,this.bloomPass.radius=this.bloomParams.radius),this.filmGrainParams.enabled?(this.filmGrainPass.enabled=!0,this.filmGrainPass.uniforms.amount.value=this.filmGrainParams.amount):this.filmGrainPass.enabled=!1,this.chromaticAberrationParams.enabled?(this.chromaticAberrationPass.enabled=!0,this.chromaticAberrationPass.uniforms.amount.value=this.chromaticAberrationParams.amount):this.chromaticAberrationPass.enabled=!1,this.smaaPass&&(this.smaaPass.enabled=this.smaaParams.enabled),this.bloomParams.enabled||this.colorBalanceParams.enabled||this.filmGrainParams.enabled||this.chromaticAberrationParams.enabled||this.smaaPass&&this.smaaParams.enabled?this.composer.render():this.renderer.render(this.scene,this.activeCamera)}_applyResolutionScale(e){const t=this.performance.baseDevicePixelRatio;if((e||Math.abs(t-this.performance.pixelRatio)>.001)&&(this.performance.pixelRatio=t,this.renderer.setPixelRatio(this.performance.pixelRatio),this.composer.setSize(window.innerWidth,window.innerHeight),this.smaaPass&&this.smaaPass.setSize(window.innerWidth*this.renderer.getPixelRatio(),window.innerHeight*this.renderer.getPixelRatio()),this.bloomPass)){const i=this.bloomResolutionScale,n=Math.max(1,Math.floor(window.innerWidth*this.renderer.getPixelRatio()*i)),s=Math.max(1,Math.floor(window.innerHeight*this.renderer.getPixelRatio()*i));this.bloomPass.setSize&&this.bloomPass.setSize(n,s)}}}function Fc(r,e){if(e===rd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===Co||e===oh){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const i=t.count-2,n=[];if(e===Co)for(let a=1;a<=i;a++)n.push(t.getX(0)),n.push(t.getX(a)),n.push(t.getX(a+1));else for(let a=0;a<i;a++)a%2===0?(n.push(t.getX(a)),n.push(t.getX(a+1)),n.push(t.getX(a+2))):(n.push(t.getX(a+2)),n.push(t.getX(a+1)),n.push(t.getX(a)));n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}class rE extends Bi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hE(t)}),this.register(function(t){return new uE(t)}),this.register(function(t){return new xE(t)}),this.register(function(t){return new yE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new AE(t)}),this.register(function(t){return new fE(t)}),this.register(function(t){return new pE(t)}),this.register(function(t){return new mE(t)}),this.register(function(t){return new cE(t)}),this.register(function(t){return new gE(t)}),this.register(function(t){return new dE(t)}),this.register(function(t){return new vE(t)}),this.register(function(t){return new EE(t)}),this.register(function(t){return new oE(t)}),this.register(function(t){return new _E(t)}),this.register(function(t){return new ME(t)})}load(e,t,i,n){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Qs.extractUrlBase(e);a=Qs.resolveURL(c,this.path)}else a=Qs.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new qi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(h){t(h),s.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Hh){try{a[je.KHR_BINARY_GLTF]=new IE(e)}catch(u){n&&n(u);return}s=JSON.parse(a[je.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new OE(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const u=s.extensionsUsed[h],d=s.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:a[u]=new lE;break;case je.KHR_DRACO_MESH_COMPRESSION:a[u]=new SE(s,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:a[u]=new wE;break;case je.KHR_MESH_QUANTIZATION:a[u]=new TE;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function aE(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class oE{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new we(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],wt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new L0(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new D0(h),c.distance=u;break;case"spot":c=new B0(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,rn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return i._getNodeRef(t.cache,o,l)})}}class lE{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return ei}extendParams(e,t,i){const n=[];e.color=new we(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],wt),e.opacity=a[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,dt))}return Promise.all(n)}}class cE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class hE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ae(o,o)}return Promise.all(s)}}class uE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.dispersion=s.dispersion!==void 0?s.dispersion:0,Promise.resolve()}}class dE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class AE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new we(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=n.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],wt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",a.sheenColorTexture,dt)),a.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class fE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class pE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new we().setRGB(o[0],o[1],o[2],wt),Promise.all(s)}}class mE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class gE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new we().setRGB(o[0],o[1],o[2],wt),a.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",a.specularColorTexture,dt)),Promise.all(s)}}class EE{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&s.push(i.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(s)}}class vE{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Ti}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],a=n.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class xE{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class yE{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class CE{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=n.images[a.source];let l=i.textureLoader;if(o.uri){const c=i.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,a.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class _E{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(A){return A.buffer}):a.ready.then(function(){const A=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(A),h,u,d,n.mode,n.filter),A})})}else return null}}class ME{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==li.TRIANGLES&&c.mode!==li.TRIANGLE_STRIP&&c.mode!==li.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=i.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,A=[];for(const g of u){const E=new Le,p=new M,m=new lt,C=new M(1,1,1),x=new Wi(g.geometry,g.material,d);for(let I=0;I<d;I++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,I),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,I),l.SCALE&&C.fromBufferAttribute(l.SCALE,I),x.setMatrixAt(I,E.compose(p,m,C));for(const I in l)if(I==="_COLOR_0"){const L=l[I];x.instanceColor=new qs(L.array,L.itemSize,L.normalized)}else I!=="TRANSLATION"&&I!=="ROTATION"&&I!=="SCALE"&&g.geometry.setAttribute(I,l[I]);Ye.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),A.push(x)}return h.isGroup?(h.clear(),h.add(...A),h):A[0]}))}}const Hh="glTF",Rs=12,Oc={JSON:1313821514,BIN:5130562};class IE{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Rs),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Hh)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Rs,s=new DataView(e,Rs);let a=0;for(;a<n;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Oc.JSON){const c=new Uint8Array(e,Rs+a,o);this.content=i.decode(c)}else if(l===Oc.BIN){const c=Rs+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class SE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=wo[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=wo[h]||h.toLowerCase();if(a[h]!==void 0){const d=i.accessors[e.attributes[h]],A=ss[d.componentType];c[u]=A.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(A){for(const g in A.attributes){const E=A.attributes[g],p=l[g];p!==void 0&&(E.normalized=p)}u(A)},o,c,wt,d)})})}}class wE{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class TE{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Vh extends $s{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[s+a];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=n-t,u=(i-t)/h,d=u*u,A=d*u,g=e*c,E=g-c,p=-2*A+3*d,m=A-d,C=1-p,x=m-d+u;for(let I=0;I!==o;I++){const L=a[E+I+o],b=a[E+I+l]*h,B=a[g+I+o],G=a[g+I]*h;s[I]=C*L+x*b+p*B+m*G}return s}}const bE=new lt;class BE extends Vh{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return bE.fromArray(s).normalize().toArray(s),s}}const li={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ss={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Qc={9728:Qt,9729:Et,9984:$c,9985:Wr,9986:Ps,9987:si},kc={33071:vi,33648:Zr,10497:os},$a={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wo={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},tn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},RE={CUBICSPLINE:void 0,LINEAR:cs,STEP:Hs},eo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function DE(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new Ci({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Xi})),r.DefaultMaterial}function En(r,e,t){for(const i in t.extensions)r[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function rn(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function PE(r,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):r.attributes.position;a.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):r.attributes.normal;o.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):r.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(r.morphAttributes.position=h),n&&(r.morphAttributes.normal=u),s&&(r.morphAttributes.color=d),r.morphTargetsRelative=!0,r})}function LE(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)r.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function NE(r){let e;const t=r.extensions&&r.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+to(t.attributes):e=r.indices+":"+to(r.attributes)+":"+r.mode,r.targets!==void 0)for(let i=0,n=r.targets.length;i<n;i++)e+=":"+to(r.targets[i]);return e}function to(r){let e="";const t=Object.keys(r).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+r[t[i]]+";";return e}function To(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function UE(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const FE=new Le;class OE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new aE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new Qo(this.options.manager):this.textureLoader=new N0(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new qi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){const o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return En(s,o,n),rn(o,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const a=t[n].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())s(h,o.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,a){i.load(Qs.resolveURL(t.uri,n.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const a=$a[n.type],o=ss[n.componentType],l=n.normalized===!0,c=new o(n.count*a);return Promise.resolve(new Gt(c,a,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=$a[n.type],c=ss[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,A=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let E,p;if(A&&A!==u){const m=Math.floor(d/A),C="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count;let x=t.cache.get(C);x||(E=new c(o,m*A,n.count*A/h),x=new Th(E,A/h),t.cache.add(C,x)),p=new Ws(x,l,d%A/h,g)}else o===null?E=new c(n.count*l):E=new c(o,d,n.count*l),p=new Gt(E,l,g);if(n.sparse!==void 0){const m=$a.SCALAR,C=ss[n.sparse.indices.componentType],x=n.sparse.indices.byteOffset||0,I=n.sparse.values.byteOffset||0,L=new C(a[1],x,n.sparse.count*m),b=new c(a[2],I,n.sparse.count*l);o!==null&&(p=new Gt(p.array.slice(),p.itemSize,p.normalized));for(let B=0,G=L.length;B<G;B++){const S=L[B];if(p.setX(S,b[B*l]),l>=2&&p.setY(S,b[B*l+1]),l>=3&&p.setZ(S,b[B*l+2]),l>=4&&p.setW(S,b[B*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=i.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,i){const n=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(s.samplers||{})[a.sampler]||{};return h.magFilter=Qc[d.magFilter]||Et,h.minFilter=Qc[d.minFilter]||si,h.wrapS=kc[d.wrapS]||os,h.wrapT=kc[d.wrapT]||os,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=n.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=i.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,A){let g=d;t.isImageBitmapLoader===!0&&(g=function(E){const p=new It(E);p.needsUpdate=!0,d(p)}),t.load(Qs.resolveURL(u,s.path),g,void 0,A)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),u.userData.mimeType=a.mimeType||UE(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),s.extensions[je.KHR_TEXTURE_TRANSFORM]){const o=i.extensions!==void 0?i.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Ph,yi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(o,l)),i=l}else if(e.isLine){const o="LineBasicMaterial:"+i.uuid;let l=this.cache.get(o);l||(l=new Dh,yi.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(o,l)),i=l}if(n||s||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=i.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Ci}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const u=n[je.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,s,t))}else{const u=s.pbrMetallicRoughness||{};if(o.color=new we(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],wt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,dt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=qt);const h=s.alphaMode||eo.OPAQUE;if(h===eo.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===eo.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ei&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new Ae(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;o.normalScale.set(u,u)}if(s.occlusionTexture!==void 0&&a!==ei&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ei){const u=s.emissiveFactor;o.emissive=new we().setRGB(u[0],u[1],u[2],wt)}return s.emissiveTexture!==void 0&&a!==ei&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,dt)),Promise.all(c).then(function(){const u=new a(o);return s.name&&(u.name=s.name),rn(u,s),t.associations.set(u,{materials:e}),s.extensions&&En(n,u,s),u})}createUniqueName(e){const t=ft.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(o){return i[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Gc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=NE(c),u=n[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=Gc(new $t,c,t),n[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?DE(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let A=0,g=h.length;A<g;A++){const E=h[A],p=a[A];let m;const C=c[A];if(p.mode===li.TRIANGLES||p.mode===li.TRIANGLE_STRIP||p.mode===li.TRIANGLE_FAN||p.mode===void 0)m=s.isSkinnedMesh===!0?new Wg(E,C):new Mt(E,C),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===li.TRIANGLE_STRIP?m.geometry=Fc(m.geometry,oh):p.mode===li.TRIANGLE_FAN&&(m.geometry=Fc(m.geometry,Co));else if(p.mode===li.LINES)m=new Yg(E,C);else if(p.mode===li.LINE_STRIP)m=new Uo(E,C);else if(p.mode===li.LINE_LOOP)m=new Kg(E,C);else if(p.mode===li.POINTS)m=new Jg(E,C);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&LE(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),rn(m,s),p.extensions&&En(n,m,p),t.assignFinalMaterial(m),u.push(m)}for(let A=0,g=u.length;A<g;A++)t.associations.set(u[A],{meshes:e,primitives:A});if(u.length===1)return s.extensions&&En(n,u[0],s),u[0];const d=new Hi;s.extensions&&En(n,d,s),t.associations.set(d,{meshes:e});for(let A=0,g=u.length;A<g;A++)d.add(u[A]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Jt(zi.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new la(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),rn(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),a=n,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new Le;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new No(o,l)})}loadAnimation(e){const t=this.json,i=this,n=t.animations[e],s=n.name?n.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){const A=n.channels[u],g=n.samplers[A.sampler],E=A.target,p=E.node,m=n.parameters!==void 0?n.parameters[g.input]:g.input,C=n.parameters!==void 0?n.parameters[g.output]:g.output;E.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),l.push(this.getDependency("accessor",C)),c.push(g),h.push(E))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],A=u[1],g=u[2],E=u[3],p=u[4],m=[];for(let C=0,x=d.length;C<x;C++){const I=d[C],L=A[C],b=g[C],B=E[C],G=p[C];if(I===void 0)continue;I.updateMatrix&&I.updateMatrix();const S=i._createAnimationTracks(I,L,b,B,G);if(S)for(let y=0;y<S.length;y++)m.push(S[y])}return new y0(s,void 0,m)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const a=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=n.weights.length;l<c;l++)o.morphTargetInfluences[l]=n.weights[l]}),a})}loadNode(e){const t=this.json,i=this,n=t.nodes[e],s=i._loadNodeShallow(e),a=[],o=n.children||[];for(let c=0,h=o.length;c<h;c++)a.push(i.getDependency("node",o[c]));const l=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(A){A.isSkinnedMesh&&A.bind(d,FE)});for(let A=0,g=u.length;A<g;A++)h.add(u[A]);return h})}_loadNodeShallow(e){const t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?n.createUniqueName(s.name):"",o=[],l=n._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(n.getDependency("camera",s.camera).then(function(c){return n._getNodeRef(n.cameraCache,s.camera,c)})),n._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(s.isBone===!0?h=new Rh:c.length>1?h=new Hi:c.length===1?h=c[0]:h=new Ye,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(s.name&&(h.userData.name=s.name,h.name=a),rn(h,s),s.extensions&&En(i,h,s),s.matrix!==void 0){const u=new Le;u.fromArray(s.matrix),h.applyMatrix4(u)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return n.associations.has(h)||n.associations.set(h,{}),n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new Hi;i.name&&(s.name=n.createUniqueName(i.name)),rn(s,i),i.extensions&&En(t,s,i);const a=i.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(n.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,A]of n.associations)(d instanceof yi||d instanceof It)&&u.set(d,A);return h.traverse(d=>{const A=n.associations.get(d);A!=null&&u.set(d,A)}),u};return n.associations=c(s),s})}_createAnimationTracks(e,t,i,n,s){const a=[],o=e.name?e.name:e.uuid,l=[];tn[s.path]===tn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(tn[s.path]){case tn.weights:c=ds;break;case tn.rotation:c=In;break;case tn.position:case tn.scale:c=As;break;default:switch(i.itemSize){case 1:c=ds;break;case 2:case 3:default:c=As;break}break}const h=n.interpolation!==void 0?RE[n.interpolation]:cs,u=this._getArrayFromAccessor(i);for(let d=0,A=l.length;d<A;d++){const g=new c(l[d]+"."+tn[s.path],t.array,u,h);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=To(t.constructor),n=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)n[s]=t[s]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const n=this instanceof In?BE:Vh;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function QE(r,e,t){const i=e.attributes,n=new ri;if(i.POSITION!==void 0){const o=t.json.accessors[i.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(n.set(new M(l[0],l[1],l[2]),new M(c[0],c[1],c[2])),o.normalized){const h=To(ss[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new M,l=new M;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],A=d.min,g=d.max;if(A!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(A[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(A[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(A[2]),Math.abs(g[2]))),d.normalized){const E=To(ss[d.componentType]);l.multiplyScalar(E)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}r.boundingBox=n;const a=new _i;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,r.boundingSphere=a}function Gc(r,e,t){const i=e.attributes,n=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in i){const o=wo[a]||a.toLowerCase();o in r.attributes||n.push(s(i[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});n.push(a)}return ut.workingColorSpace!==wt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),rn(r,e),QE(r,e,t),Promise.all(n).then(function(){return e.targets!==void 0?PE(r,e.targets,t):r})}const io=new WeakMap;class kE extends Bi{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){const s=new qi(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,n)},i,n)}parse(e,t,i=()=>{}){this.decodeDracoFile(e,t,null,null,dt).catch(i)}decodeDracoFile(e,t,i,n,s=wt,a=()=>{}){const o={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i,vertexColorSpace:s};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const i=JSON.stringify(t);if(io.has(e)){const l=io.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(l=>(n=l,new Promise((c,h)=>{n._callbacks[s]={resolve:c,reject:h},n.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{n&&s&&this._releaseTask(n,s)}),io.set(e,{key:i,promise:o}),o}_createGeometry(e){const t=new $t;e.index&&t.setIndex(new Gt(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const n=e.attributes[i],s=n.name,a=n.array,o=n.itemSize,l=new Gt(a,o);s==="color"&&(this._assignVertexColorSpace(l,n.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==dt)return;const i=new we;for(let n=0,s=e.count;n<s;n++)i.fromBufferAttribute(e,n).convertSRGBToLinear(),e.setXYZ(n,i.r,i.g,i.b)}_loadLibrary(e,t){const i=new qi(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,s)=>{i.load(e,n,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const s=GE.toString(),a=["/* draco decoder */",n,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(s){const a=s.data;switch(a.type){case"decode":n._callbacks[a.id].resolve(a);break;case"error":n._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,s){return n._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function GE(){let r,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":r=o.decoderConfig,e=new Promise(function(h){r.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(r)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const A=t(u,d,new Int8Array(l),c),g=A.attributes.map(E=>E.array.buffer);A.index&&g.push(A.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:A},g)}catch(A){console.error(A),self.postMessage({type:"error",id:o.id,error:A.message})}finally{u.destroy(d)}});break}};function t(a,o,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,A;const g=o.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)d=new a.Mesh,A=o.DecodeArrayToMesh(l,l.byteLength,d);else if(g===a.POINT_CLOUD)d=new a.PointCloud,A=o.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!A.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+A.error_msg());const E={index:null,attributes:[]};for(const p in h){const m=self[u[p]];let C,x;if(c.useUniqueIDs)x=h[p],C=o.GetAttributeByUniqueId(d,x);else{if(x=o.GetAttributeId(d,a[h[p]]),x===-1)continue;C=o.GetAttribute(d,x)}const I=n(a,o,d,p,m,C);p==="color"&&(I.vertexColorSpace=c.vertexColorSpace),E.attributes.push(I)}return g===a.TRIANGULAR_MESH&&(E.index=i(a,o,d)),a.destroy(d),E}function i(a,o,l){const h=l.num_faces()*3,u=h*4,d=a._malloc(u);o.GetTrianglesUInt32Array(l,u,d);const A=new Uint32Array(a.HEAPF32.buffer,d,h).slice();return a._free(d),{array:A,itemSize:1}}function n(a,o,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,E=g*h.BYTES_PER_ELEMENT,p=s(a,h),m=a._malloc(E);o.GetAttributeDataArrayForAllPoints(l,u,p,E,m);const C=new h(a.HEAPF32.buffer,m,g).slice();return a._free(m),{name:c,array:C,itemSize:d}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}class zE{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const i=this.workersResolve[e];if(i&&i(t),this.queue.length){const{resolve:n,msg:s,transfer:a}=this.queue.shift();this.workersResolve[e]=n,this.workers[e].postMessage(s,a)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{const n=this._getIdleWorker();n!==-1?(this._initWorker(n),this.workerStatus|=1<<n,this.workersResolve[n]=i,this.workers[n].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const HE=0,zc=2,VE=1,Hc=2,WE=0,qE=1,XE=10,YE=0,Wh=9,qh=15,Xh=16,Yh=22,Kh=37,Jh=43,jh=76,Zh=83,$h=97,eu=100,tu=103,iu=109,nu=165,su=166;class KE{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class Ds{constructor(e,t,i,n){this._dataView=new DataView(e.buffer,e.byteOffset+t,i),this._littleEndian=n,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_skip(e){return this._offset+=e,this}_scan(e,t=0){const i=this._offset;let n=0;for(;this._dataView.getUint8(this._offset)!==t&&n<e;)n++,this._offset++;return n<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,n)}}const Yt=[171,75,84,88,32,50,48,187,13,10,26,10];function Vc(r){return typeof TextDecoder<"u"?new TextDecoder().decode(r):Buffer.from(r).toString("utf8")}function JE(r){const e=new Uint8Array(r.buffer,r.byteOffset,Yt.length);if(e[0]!==Yt[0]||e[1]!==Yt[1]||e[2]!==Yt[2]||e[3]!==Yt[3]||e[4]!==Yt[4]||e[5]!==Yt[5]||e[6]!==Yt[6]||e[7]!==Yt[7]||e[8]!==Yt[8]||e[9]!==Yt[9]||e[10]!==Yt[10]||e[11]!==Yt[11])throw new Error("Missing KTX 2.0 identifier.");const t=new KE,i=17*Uint32Array.BYTES_PER_ELEMENT,n=new Ds(r,Yt.length,i,!0);t.vkFormat=n._nextUint32(),t.typeSize=n._nextUint32(),t.pixelWidth=n._nextUint32(),t.pixelHeight=n._nextUint32(),t.pixelDepth=n._nextUint32(),t.layerCount=n._nextUint32(),t.faceCount=n._nextUint32();const s=n._nextUint32();t.supercompressionScheme=n._nextUint32();const a=n._nextUint32(),o=n._nextUint32(),l=n._nextUint32(),c=n._nextUint32(),h=n._nextUint64(),u=n._nextUint64(),d=new Ds(r,Yt.length+i,3*s*8,!0);for(let ie=0;ie<s;ie++)t.levels.push({levelData:new Uint8Array(r.buffer,r.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const A=new Ds(r,a,o,!0),g={vendorId:A._skip(4)._nextUint16(),descriptorType:A._nextUint16(),versionNumber:A._nextUint16(),descriptorBlockSize:A._nextUint16(),colorModel:A._nextUint8(),colorPrimaries:A._nextUint8(),transferFunction:A._nextUint8(),flags:A._nextUint8(),texelBlockDimension:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],bytesPlane:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],samples:[]},E=(g.descriptorBlockSize/4-6)/4;for(let ie=0;ie<E;ie++){const V={bitOffset:A._nextUint16(),bitLength:A._nextUint8(),channelType:A._nextUint8(),samplePosition:[A._nextUint8(),A._nextUint8(),A._nextUint8(),A._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&V.channelType?(V.sampleLower=A._nextInt32(),V.sampleUpper=A._nextInt32()):(V.sampleLower=A._nextUint32(),V.sampleUpper=A._nextUint32()),g.samples[ie]=V}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(g);const p=new Ds(r,l,c,!0);for(;p._offset<c;){const ie=p._nextUint32(),V=p._scan(ie),le=Vc(V),re=p._scan(ie-V.byteLength);t.keyValue[le]=le.match(/^ktx/i)?Vc(re):re,p._offset%4&&p._skip(4-p._offset%4)}if(u<=0)return t;const m=new Ds(r,h,u,!0),C=m._nextUint16(),x=m._nextUint16(),I=m._nextUint32(),L=m._nextUint32(),b=m._nextUint32(),B=m._nextUint32(),G=[];for(let ie=0;ie<s;ie++)G.push({imageFlags:m._nextUint32(),rgbSliceByteOffset:m._nextUint32(),rgbSliceByteLength:m._nextUint32(),alphaSliceByteOffset:m._nextUint32(),alphaSliceByteLength:m._nextUint32()});const S=h+m._offset,y=S+I,O=y+L,X=O+b,P=new Uint8Array(r.buffer,r.byteOffset+S,I),j=new Uint8Array(r.buffer,r.byteOffset+y,L),K=new Uint8Array(r.buffer,r.byteOffset+O,b),oe=new Uint8Array(r.buffer,r.byteOffset+X,B);return t.globalData={endpointCount:C,selectorCount:x,imageDescs:G,endpointsData:P,selectorsData:j,tablesData:K,extendedData:oe},t}let no,Qi,bo;const so={env:{emscripten_notify_memory_growth:function(r){bo=new Uint8Array(Qi.exports.memory.buffer)}}};class jE{init(){return no||(no=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Wc).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,so)).then(this._init):WebAssembly.instantiate(Buffer.from(Wc,"base64"),so).then(this._init),no)}_init(e){Qi=e.instance,so.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Qi)throw new Error("ZSTDDecoder: Await .init() before decoding.");const i=e.byteLength,n=Qi.exports.malloc(i);bo.set(e,n),t=t||Number(Qi.exports.ZSTD_findDecompressedSize(n,i));const s=Qi.exports.malloc(t),a=Qi.exports.ZSTD_decompress(s,t,n,i),o=bo.slice(s,s+a);return Qi.exports.free(n),Qi.exports.free(s),o}}const Wc="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigC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C0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",ro=new WeakMap;let ao=0,oo;class Si extends Bi{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new zE,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return this.workerConfig={astcSupported:await e.hasFeatureAsync("texture-compression-astc"),etc1Supported:await e.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await e.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await e.hasFeatureAsync("texture-compression-bc"),bptcSupported:await e.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await e.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-bc"),bptcSupported:e.hasFeature("texture-compression-bptc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this}init(){if(!this.transcoderPending){const e=new qi(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),i=new qi(this.manager);i.setPath(this.transcoderPath),i.setResponseType("arraybuffer"),i.setWithCredentials(this.withCredentials);const n=i.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,n]).then(([s,a])=>{const o=Si.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(Si.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(Si.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(Si.BasisFormat),"/* basis_transcoder.js */",s,"/* worker */",o.substring(o.indexOf("{")+1,o.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=a,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),c})}),ao>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),ao++}return this.transcoderPending}load(e,t,i,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const s=new qi(this.manager);s.setResponseType("arraybuffer"),s.setWithCredentials(this.withCredentials),s.load(e,a=>{if(ro.has(a))return ro.get(a).promise.then(t).catch(n);this._createTexture(a).then(o=>t?t(o):null).catch(n)},i,n)}_createTextureFrom(e,t){const{faces:i,width:n,height:s,format:a,type:o,error:l,dfdFlags:c}=e;if(o==="error")return Promise.reject(l);let h;if(t.faceCount===6)h=new $g(i,a,Rt);else{const u=i[0].mipmaps;h=t.layerCount>1?new Zg(u,n,s,t.layerCount,a,Rt):new ha(u,n,s,a,Rt)}return h.minFilter=i[0].mipmaps.length===1?Et:si,h.magFilter=Et,h.generateMipmaps=!1,h.needsUpdate=!0,h.colorSpace=ru(t),h.premultiplyAlpha=!!(c&VE),h}async _createTexture(e,t={}){const i=JE(new Uint8Array(e));if(i.vkFormat!==YE)return $E(i);const n=t,s=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:n},[e])).then(a=>this._createTextureFrom(a.data,i));return ro.set(e,{promise:s}),s}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),ao--,this}}Si.BasisFormat={ETC1S:0,UASTC_4x4:1};Si.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};Si.EngineFormat={RGBAFormat:Bt,RGBA_ASTC_4x4_Format:yo,RGBA_BPTC_Format:Yr,RGBA_ETC2_EAC_Format:xo,RGBA_PVRTC_4BPPV1_Format:go,RGBA_S3TC_DXT5_Format:Xr,RGB_ETC1_Format:Eo,RGB_ETC2_Format:vo,RGB_PVRTC_4BPPV1_Format:mo,RGBA_S3TC_DXT1_Format:qr};Si.BasisWorker=function(){let r,e,t;const i=_EngineFormat,n=_TranscoderFormat,s=_BasisFormat;self.addEventListener("message",function(g){const E=g.data;switch(E.type){case"init":r=E.config,a(E.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:p,buffers:m,width:C,height:x,hasAlpha:I,format:L,dfdFlags:b}=o(E.buffer);self.postMessage({type:"transcode",id:E.id,faces:p,width:C,height:x,hasAlpha:I,format:L,dfdFlags:b},m)}catch(p){console.error(p),self.postMessage({type:"error",id:E.id,error:p.message})}});break}});function a(g){e=new Promise(E=>{t={wasmBinary:g,onRuntimeInitialized:E},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function o(g){const E=new t.KTX2File(new Uint8Array(g));function p(){E.close(),E.delete()}if(!E.isValid())throw p(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const m=E.isUASTC()?s.UASTC_4x4:s.ETC1S,C=E.getWidth(),x=E.getHeight(),I=E.getLayers()||1,L=E.getLevels(),b=E.getFaces(),B=E.getHasAlpha(),G=E.getDFDFlags(),{transcoderFormat:S,engineFormat:y}=u(m,C,x,B);if(!C||!x||!L)throw p(),new Error("THREE.KTX2Loader:	Invalid texture");if(!E.startTranscoding())throw p(),new Error("THREE.KTX2Loader: .startTranscoding failed");const O=[],X=[];for(let P=0;P<b;P++){const j=[];for(let K=0;K<L;K++){const oe=[];let ie,V;for(let re=0;re<I;re++){const Te=E.getImageLevelInfo(K,re,P);P===0&&K===0&&re===0&&(Te.origWidth%4!==0||Te.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),L>1?(ie=Te.origWidth,V=Te.origHeight):(ie=Te.width,V=Te.height);const Ue=new Uint8Array(E.getImageTranscodedSizeInBytes(K,re,0,S));if(!E.transcodeImage(Ue,K,re,P,S,0,-1,-1))throw p(),new Error("THREE.KTX2Loader: .transcodeImage failed.");oe.push(Ue)}const le=A(oe);j.push({data:le,width:ie,height:V}),X.push(le.buffer)}O.push({mipmaps:j,width:C,height:x,format:y})}return p(),{faces:O,buffers:X,width:C,height:x,hasAlpha:B,format:y,dfdFlags:G}}const l=[{if:"astcSupported",basisFormat:[s.UASTC_4x4],transcoderFormat:[n.ASTC_4x4,n.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.BC7_M5,n.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.BC1,n.BC3],engineFormat:[i.RGBA_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.ETC1,n.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.ETC1],engineFormat:[i.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.PVRTC1_4_RGB,n.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],c=l.sort(function(g,E){return g.priorityETC1S-E.priorityETC1S}),h=l.sort(function(g,E){return g.priorityUASTC-E.priorityUASTC});function u(g,E,p,m){let C,x;const I=g===s.ETC1S?c:h;for(let L=0;L<I.length;L++){const b=I[L];if(r[b.if]&&b.basisFormat.includes(g)&&!(m&&b.transcoderFormat.length<2)&&!(b.needsPowerOfTwo&&!(d(E)&&d(p))))return C=b.transcoderFormat[m?1:0],x=b.engineFormat[m?1:0],{transcoderFormat:C,engineFormat:x}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),C=n.RGBA32,x=i.RGBAFormat,{transcoderFormat:C,engineFormat:x}}function d(g){return g<=2?!0:(g&g-1)===0&&g!==0}function A(g){if(g.length===1)return g[0];let E=0;for(let C=0;C<g.length;C++){const x=g[C];E+=x.byteLength}const p=new Uint8Array(E);let m=0;for(let C=0;C<g.length;C++){const x=g[C];p.set(x,m),m+=x.byteLength}return p}};const ZE=new Set([Bt,Zn,an]),lo={[iu]:Bt,[$h]:Bt,[Kh]:Bt,[Jh]:Bt,[tu]:Zn,[Zh]:Zn,[Xh]:Zn,[Yh]:Zn,[eu]:an,[jh]:an,[qh]:an,[Wh]:an,[su]:$r,[nu]:$r},co={[iu]:kt,[$h]:Ft,[Kh]:Rt,[Jh]:Rt,[tu]:kt,[Zh]:Ft,[Xh]:Rt,[Yh]:Rt,[eu]:kt,[jh]:Ft,[qh]:Rt,[Wh]:Rt,[su]:Rt,[nu]:Rt};async function $E(r){const{vkFormat:e}=r;if(lo[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let t;r.supercompressionScheme===zc&&(oo||(oo=new Promise(async s=>{const a=new jE;await a.init(),s(a)})),t=await oo);const i=[];for(let s=0;s<r.levels.length;s++){const a=Math.max(1,r.pixelWidth>>s),o=Math.max(1,r.pixelHeight>>s),l=r.pixelDepth?Math.max(1,r.pixelDepth>>s):0,c=r.levels[s];let h;if(r.supercompressionScheme===HE)h=c.levelData;else if(r.supercompressionScheme===zc)h=t.decode(c.levelData,c.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;co[e]===kt?u=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):co[e]===Ft?u=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):u=h,i.push({data:u,width:a,height:o,depth:l})}let n;if(ZE.has(lo[e]))n=r.pixelDepth===0?new Zs(i[0].data,r.pixelWidth,r.pixelHeight):new fh(i[0].data,r.pixelWidth,r.pixelHeight,r.pixelDepth);else{if(r.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");n=new ha(i,r.pixelWidth,r.pixelHeight)}return n.mipmaps=i,n.type=co[e],n.format=lo[e],n.colorSpace=ru(r),n.needsUpdate=!0,Promise.resolve(n)}function ru(r){const e=r.dataFormatDescriptor[0];return e.colorPrimaries===qE?e.transferFunction===Hc?dt:wt:e.colorPrimaries===XE?e.transferFunction===Hc?oa:Ys:(e.colorPrimaries===WE||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),mi)}/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var ci=Uint8Array,es=Uint16Array,ev=Int32Array,au=new ci([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),ou=new ci([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),tv=new ci([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),lu=function(r,e){for(var t=new es(31),i=0;i<31;++i)t[i]=e+=1<<r[i-1];for(var n=new ev(t[30]),i=1;i<30;++i)for(var s=t[i];s<t[i+1];++s)n[s]=s-t[i]<<5|i;return{b:t,r:n}},cu=lu(au,2),hu=cu.b,iv=cu.r;hu[28]=258,iv[258]=28;var nv=lu(ou,0),sv=nv.b,Bo=new es(32768);for(var yt=0;yt<32768;++yt){var nn=(yt&43690)>>1|(yt&21845)<<1;nn=(nn&52428)>>2|(nn&13107)<<2,nn=(nn&61680)>>4|(nn&3855)<<4,Bo[yt]=((nn&65280)>>8|(nn&255)<<8)>>1}var ks=(function(r,e,t){for(var i=r.length,n=0,s=new es(e);n<i;++n)r[n]&&++s[r[n]-1];var a=new es(e);for(n=1;n<e;++n)a[n]=a[n-1]+s[n-1]<<1;var o;if(t){o=new es(1<<e);var l=15-e;for(n=0;n<i;++n)if(r[n])for(var c=n<<4|r[n],h=e-r[n],u=a[r[n]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)o[Bo[u]>>l]=c}else for(o=new es(i),n=0;n<i;++n)r[n]&&(o[n]=Bo[a[r[n]-1]++]>>15-r[n]);return o}),er=new ci(288);for(var yt=0;yt<144;++yt)er[yt]=8;for(var yt=144;yt<256;++yt)er[yt]=9;for(var yt=256;yt<280;++yt)er[yt]=7;for(var yt=280;yt<288;++yt)er[yt]=8;var uu=new ci(32);for(var yt=0;yt<32;++yt)uu[yt]=5;var rv=ks(er,9,1),av=ks(uu,5,1),ho=function(r){for(var e=r[0],t=1;t<r.length;++t)r[t]>e&&(e=r[t]);return e},Ai=function(r,e,t){var i=e/8|0;return(r[i]|r[i+1]<<8)>>(e&7)&t},uo=function(r,e){var t=e/8|0;return(r[t]|r[t+1]<<8|r[t+2]<<16)>>(e&7)},ov=function(r){return(r+7)/8|0},lv=function(r,e,t){return(t==null||t>r.length)&&(t=r.length),new ci(r.subarray(e,t))},cv=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],pi=function(r,e,t){var i=new Error(e||cv[r]);if(i.code=r,Error.captureStackTrace&&Error.captureStackTrace(i,pi),!t)throw i;return i},hv=function(r,e,t,i){var n=r.length,s=0;if(!n||e.f&&!e.l)return t||new ci(0);var a=!t,o=a||e.i!=2,l=e.i;a&&(t=new ci(n*3));var c=function(at){var De=t.length;if(at>De){var nt=new ci(Math.max(De*2,at));nt.set(t),t=nt}},h=e.f||0,u=e.p||0,d=e.b||0,A=e.l,g=e.d,E=e.m,p=e.n,m=n*8;do{if(!A){h=Ai(r,u,1);var C=Ai(r,u+1,3);if(u+=3,C)if(C==1)A=rv,g=av,E=9,p=5;else if(C==2){var b=Ai(r,u,31)+257,B=Ai(r,u+10,15)+4,G=b+Ai(r,u+5,31)+1;u+=14;for(var S=new ci(G),y=new ci(19),O=0;O<B;++O)y[tv[O]]=Ai(r,u+O*3,7);u+=B*3;for(var X=ho(y),P=(1<<X)-1,j=ks(y,X,1),O=0;O<G;){var K=j[Ai(r,u,P)];u+=K&15;var x=K>>4;if(x<16)S[O++]=x;else{var oe=0,ie=0;for(x==16?(ie=3+Ai(r,u,3),u+=2,oe=S[O-1]):x==17?(ie=3+Ai(r,u,7),u+=3):x==18&&(ie=11+Ai(r,u,127),u+=7);ie--;)S[O++]=oe}}var V=S.subarray(0,b),le=S.subarray(b);E=ho(V),p=ho(le),A=ks(V,E,1),g=ks(le,p,1)}else pi(1);else{var x=ov(u)+4,I=r[x-4]|r[x-3]<<8,L=x+I;if(L>n){l&&pi(0);break}o&&c(d+I),t.set(r.subarray(x,L),d),e.b=d+=I,e.p=u=L*8,e.f=h;continue}if(u>m){l&&pi(0);break}}o&&c(d+131072);for(var re=(1<<E)-1,Te=(1<<p)-1,Ue=u;;Ue=u){var oe=A[uo(r,u)&re],qe=oe>>4;if(u+=oe&15,u>m){l&&pi(0);break}if(oe||pi(2),qe<256)t[d++]=qe;else if(qe==256){Ue=u,A=null;break}else{var J=qe-254;if(qe>264){var O=qe-257,fe=au[O];J=Ai(r,u,(1<<fe)-1)+hu[O],u+=fe}var pe=g[uo(r,u)&Te],ge=pe>>4;pe||pi(3),u+=pe&15;var le=sv[ge];if(ge>3){var fe=ou[ge];le+=uo(r,u)&(1<<fe)-1,u+=fe}if(u>m){l&&pi(0);break}o&&c(d+131072);var ke=d+J;if(d<le){var ze=s-le,z=Math.min(le,ke);for(ze+d<0&&pi(3);d<z;++d)t[d]=i[ze+d]}for(;d<ke;++d)t[d]=t[d-le]}}e.l=A,e.p=Ue,e.b=d,e.f=h,A&&(h=1,e.m=E,e.d=g,e.n=p)}while(!h);return d!=t.length&&a?lv(t,0,d):t.subarray(0,d)},uv=new ci(0),dv=function(r,e){return((r[0]&15)!=8||r[0]>>4>7||(r[0]<<8|r[1])%31)&&pi(6,"invalid zlib data"),(r[1]>>5&1)==1&&pi(6,"invalid zlib data: "+(r[1]&32?"need":"unexpected")+" dictionary"),(r[1]>>3&4)+2};function Vr(r,e){return hv(r.subarray(dv(r),-4),{i:2},e,e)}var Av=typeof TextDecoder<"u"&&new TextDecoder,fv=0;try{Av.decode(uv,{stream:!0}),fv=1}catch{}class pv extends T0{constructor(e){super(e),this.type=Ft}parse(e){const S=Math.pow(2.7182818,2.2);function y(f,v){let w=0;for(let Q=0;Q<65536;++Q)(Q==0||f[Q>>3]&1<<(Q&7))&&(v[w++]=Q);const D=w-1;for(;w<65536;)v[w++]=0;return D}function O(f){for(let v=0;v<16384;v++)f[v]={},f[v].len=0,f[v].lit=0,f[v].p=null}const X={l:0,c:0,lc:0};function P(f,v,w,D,Q){for(;w<f;)v=v<<8|Xe(D,Q),w+=8;w-=f,X.l=v>>w&(1<<f)-1,X.c=v,X.lc=w}const j=new Array(59);function K(f){for(let w=0;w<=58;++w)j[w]=0;for(let w=0;w<65537;++w)j[f[w]]+=1;let v=0;for(let w=58;w>0;--w){const D=v+j[w]>>1;j[w]=v,v=D}for(let w=0;w<65537;++w){const D=f[w];D>0&&(f[w]=D|j[D]++<<6)}}function oe(f,v,w,D,Q,U){const q=v;let $=0,Z=0;for(;D<=Q;D++){if(q.value-v.value>w)return!1;P(6,$,Z,f,q);const te=X.l;if($=X.c,Z=X.lc,U[D]=te,te==63){if(q.value-v.value>w)throw new Error("Something wrong with hufUnpackEncTable");P(8,$,Z,f,q);let ee=X.l+6;if($=X.c,Z=X.lc,D+ee>Q+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ee--;)U[D++]=0;D--}else if(te>=59){let ee=te-59+2;if(D+ee>Q+1)throw new Error("Something wrong with hufUnpackEncTable");for(;ee--;)U[D++]=0;D--}}K(U)}function ie(f){return f&63}function V(f){return f>>6}function le(f,v,w,D){for(;v<=w;v++){const Q=V(f[v]),U=ie(f[v]);if(Q>>U)throw new Error("Invalid table entry");if(U>14){const q=D[Q>>U-14];if(q.len)throw new Error("Invalid table entry");if(q.lit++,q.p){const $=q.p;q.p=new Array(q.lit);for(let Z=0;Z<q.lit-1;++Z)q.p[Z]=$[Z]}else q.p=new Array(1);q.p[q.lit-1]=v}else if(U){let q=0;for(let $=1<<14-U;$>0;$--){const Z=D[(Q<<14-U)+q];if(Z.len||Z.p)throw new Error("Invalid table entry");Z.len=U,Z.lit=v,q++}}}return!0}const re={c:0,lc:0};function Te(f,v,w,D){f=f<<8|Xe(w,D),v+=8,re.c=f,re.lc=v}const Ue={c:0,lc:0};function qe(f,v,w,D,Q,U,q,$,Z){if(f==v){D<8&&(Te(w,D,Q,U),w=re.c,D=re.lc),D-=8;let te=w>>D;if(te=new Uint8Array([te])[0],$.value+te>Z)return!1;const ee=q[$.value-1];for(;te-- >0;)q[$.value++]=ee}else if($.value<Z)q[$.value++]=f;else return!1;Ue.c=w,Ue.lc=D}function J(f){return f&65535}function fe(f){const v=J(f);return v>32767?v-65536:v}const pe={a:0,b:0};function ge(f,v){const w=fe(f),Q=fe(v),U=w+(Q&1)+(Q>>1),q=U,$=U-Q;pe.a=q,pe.b=$}function ke(f,v){const w=J(f),D=J(v),Q=w-(D>>1)&65535,U=D+Q-32768&65535;pe.a=U,pe.b=Q}function ze(f,v,w,D,Q,U,q){const $=q<16384,Z=w>Q?Q:w;let te=1,ee,ve;for(;te<=Z;)te<<=1;for(te>>=1,ee=te,te>>=1;te>=1;){ve=0;const he=ve+U*(Q-ee),ne=U*te,be=U*ee,de=D*te,Se=D*ee;let Qe,tt,gt,ht;for(;ve<=he;ve+=be){let it=ve;const Je=ve+D*(w-ee);for(;it<=Je;it+=Se){const st=it+de,Ht=it+ne,Tt=Ht+de;$?(ge(f[it+v],f[Ht+v]),Qe=pe.a,gt=pe.b,ge(f[st+v],f[Tt+v]),tt=pe.a,ht=pe.b,ge(Qe,tt),f[it+v]=pe.a,f[st+v]=pe.b,ge(gt,ht),f[Ht+v]=pe.a,f[Tt+v]=pe.b):(ke(f[it+v],f[Ht+v]),Qe=pe.a,gt=pe.b,ke(f[st+v],f[Tt+v]),tt=pe.a,ht=pe.b,ke(Qe,tt),f[it+v]=pe.a,f[st+v]=pe.b,ke(gt,ht),f[Ht+v]=pe.a,f[Tt+v]=pe.b)}if(w&te){const st=it+ne;$?ge(f[it+v],f[st+v]):ke(f[it+v],f[st+v]),Qe=pe.a,f[st+v]=pe.b,f[it+v]=Qe}}if(Q&te){let it=ve;const Je=ve+D*(w-ee);for(;it<=Je;it+=Se){const st=it+de;$?ge(f[it+v],f[st+v]):ke(f[it+v],f[st+v]),Qe=pe.a,f[st+v]=pe.b,f[it+v]=Qe}}ee=te,te>>=1}return ve}function z(f,v,w,D,Q,U,q,$,Z){let te=0,ee=0;const ve=q,he=Math.trunc(D.value+(Q+7)/8);for(;D.value<he;)for(Te(te,ee,w,D),te=re.c,ee=re.lc;ee>=14;){const be=te>>ee-14&16383,de=v[be];if(de.len)ee-=de.len,qe(de.lit,U,te,ee,w,D,$,Z,ve),te=Ue.c,ee=Ue.lc;else{if(!de.p)throw new Error("hufDecode issues");let Se;for(Se=0;Se<de.lit;Se++){const Qe=ie(f[de.p[Se]]);for(;ee<Qe&&D.value<he;)Te(te,ee,w,D),te=re.c,ee=re.lc;if(ee>=Qe&&V(f[de.p[Se]])==(te>>ee-Qe&(1<<Qe)-1)){ee-=Qe,qe(de.p[Se],U,te,ee,w,D,$,Z,ve),te=Ue.c,ee=Ue.lc;break}}if(Se==de.lit)throw new Error("hufDecode issues")}}const ne=8-Q&7;for(te>>=ne,ee-=ne;ee>0;){const be=v[te<<14-ee&16383];if(be.len)ee-=be.len,qe(be.lit,U,te,ee,w,D,$,Z,ve),te=Ue.c,ee=Ue.lc;else throw new Error("hufDecode issues")}return!0}function at(f,v,w,D,Q,U){const q={value:0},$=w.value,Z=Ne(v,w),te=Ne(v,w);w.value+=4;const ee=Ne(v,w);if(w.value+=4,Z<0||Z>=65537||te<0||te>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ve=new Array(65537),he=new Array(16384);O(he);const ne=D-(w.value-$);if(oe(f,w,ne,Z,te,ve),ee>8*(D-(w.value-$)))throw new Error("Something wrong with hufUncompress");le(ve,Z,te,he),z(ve,he,f,w,ee,te,U,Q,q)}function De(f,v,w){for(let D=0;D<w;++D)v[D]=f[v[D]]}function nt(f){for(let v=1;v<f.length;v++){const w=f[v-1]+f[v]-128;f[v]=w}}function Oe(f,v){let w=0,D=Math.floor((f.length+1)/2),Q=0;const U=f.length-1;for(;!(Q>U||(v[Q++]=f[w++],Q>U));)v[Q++]=f[D++]}function Ke(f){let v=f.byteLength;const w=new Array;let D=0;const Q=new DataView(f);for(;v>0;){const U=Q.getInt8(D++);if(U<0){const q=-U;v-=q+1;for(let $=0;$<q;$++)w.push(Q.getUint8(D++))}else{const q=U;v-=2;const $=Q.getUint8(D++);for(let Z=0;Z<q+1;Z++)w.push($)}}return w}function He(f,v,w,D,Q,U){let q=new DataView(U.buffer);const $=w[f.idx[0]].width,Z=w[f.idx[0]].height,te=3,ee=Math.floor($/8),ve=Math.ceil($/8),he=Math.ceil(Z/8),ne=$-(ve-1)*8,be=Z-(he-1)*8,de={value:0},Se=new Array(te),Qe=new Array(te),tt=new Array(te),gt=new Array(te),ht=new Array(te);for(let Je=0;Je<te;++Je)ht[Je]=v[f.idx[Je]],Se[Je]=Je<1?0:Se[Je-1]+ve*he,Qe[Je]=new Float32Array(64),tt[Je]=new Uint16Array(64),gt[Je]=new Uint16Array(ve*64);for(let Je=0;Je<he;++Je){let st=8;Je==he-1&&(st=be);let Ht=8;for(let rt=0;rt<ve;++rt){rt==ve-1&&(Ht=ne);for(let vt=0;vt<te;++vt)tt[vt].fill(0),tt[vt][0]=Q[Se[vt]++],Ze(de,D,tt[vt]),Ct(tt[vt],Qe[vt]),R(Qe[vt]);_(Qe);for(let vt=0;vt<te;++vt)Y(Qe[vt],gt[vt],rt*64)}let Tt=0;for(let rt=0;rt<te;++rt){const vt=w[f.idx[rt]].type;for(let Ri=8*Je;Ri<8*Je+st;++Ri){Tt=ht[rt][Ri];for(let vs=0;vs<ee;++vs){const Mi=vs*64+(Ri&7)*8;q.setUint16(Tt+0*vt,gt[rt][Mi+0],!0),q.setUint16(Tt+2*vt,gt[rt][Mi+1],!0),q.setUint16(Tt+4*vt,gt[rt][Mi+2],!0),q.setUint16(Tt+6*vt,gt[rt][Mi+3],!0),q.setUint16(Tt+8*vt,gt[rt][Mi+4],!0),q.setUint16(Tt+10*vt,gt[rt][Mi+5],!0),q.setUint16(Tt+12*vt,gt[rt][Mi+6],!0),q.setUint16(Tt+14*vt,gt[rt][Mi+7],!0),Tt+=16*vt}}if(ee!=ve)for(let Ri=8*Je;Ri<8*Je+st;++Ri){const vs=ht[rt][Ri]+8*ee*2*vt,Mi=ee*64+(Ri&7)*8;for(let lr=0;lr<Ht;++lr)q.setUint16(vs+lr*2*vt,gt[rt][Mi+lr],!0)}}}const it=new Uint16Array($);q=new DataView(U.buffer);for(let Je=0;Je<te;++Je){w[f.idx[Je]].decoded=!0;const st=w[f.idx[Je]].type;if(w[Je].type==2)for(let Ht=0;Ht<Z;++Ht){const Tt=ht[Je][Ht];for(let rt=0;rt<$;++rt)it[rt]=q.getUint16(Tt+rt*2*st,!0);for(let rt=0;rt<$;++rt)q.setFloat32(Tt+rt*2*st,F(it[rt]),!0)}}}function Ze(f,v,w){let D,Q=1;for(;Q<64;)D=v[f.value],D==65280?Q=64:D>>8==255?Q+=D&255:(w[Q]=D,Q++),f.value++}function Ct(f,v){v[0]=F(f[0]),v[1]=F(f[1]),v[2]=F(f[5]),v[3]=F(f[6]),v[4]=F(f[14]),v[5]=F(f[15]),v[6]=F(f[27]),v[7]=F(f[28]),v[8]=F(f[2]),v[9]=F(f[4]),v[10]=F(f[7]),v[11]=F(f[13]),v[12]=F(f[16]),v[13]=F(f[26]),v[14]=F(f[29]),v[15]=F(f[42]),v[16]=F(f[3]),v[17]=F(f[8]),v[18]=F(f[12]),v[19]=F(f[17]),v[20]=F(f[25]),v[21]=F(f[30]),v[22]=F(f[41]),v[23]=F(f[43]),v[24]=F(f[9]),v[25]=F(f[11]),v[26]=F(f[18]),v[27]=F(f[24]),v[28]=F(f[31]),v[29]=F(f[40]),v[30]=F(f[44]),v[31]=F(f[53]),v[32]=F(f[10]),v[33]=F(f[19]),v[34]=F(f[23]),v[35]=F(f[32]),v[36]=F(f[39]),v[37]=F(f[45]),v[38]=F(f[52]),v[39]=F(f[54]),v[40]=F(f[20]),v[41]=F(f[22]),v[42]=F(f[33]),v[43]=F(f[38]),v[44]=F(f[46]),v[45]=F(f[51]),v[46]=F(f[55]),v[47]=F(f[60]),v[48]=F(f[21]),v[49]=F(f[34]),v[50]=F(f[37]),v[51]=F(f[47]),v[52]=F(f[50]),v[53]=F(f[56]),v[54]=F(f[59]),v[55]=F(f[61]),v[56]=F(f[35]),v[57]=F(f[36]),v[58]=F(f[48]),v[59]=F(f[49]),v[60]=F(f[57]),v[61]=F(f[58]),v[62]=F(f[62]),v[63]=F(f[63])}function R(f){const v=.5*Math.cos(.7853975),w=.5*Math.cos(3.14159/16),D=.5*Math.cos(3.14159/8),Q=.5*Math.cos(3*3.14159/16),U=.5*Math.cos(5*3.14159/16),q=.5*Math.cos(3*3.14159/8),$=.5*Math.cos(7*3.14159/16),Z=new Array(4),te=new Array(4),ee=new Array(4),ve=new Array(4);for(let he=0;he<8;++he){const ne=he*8;Z[0]=D*f[ne+2],Z[1]=q*f[ne+2],Z[2]=D*f[ne+6],Z[3]=q*f[ne+6],te[0]=w*f[ne+1]+Q*f[ne+3]+U*f[ne+5]+$*f[ne+7],te[1]=Q*f[ne+1]-$*f[ne+3]-w*f[ne+5]-U*f[ne+7],te[2]=U*f[ne+1]-w*f[ne+3]+$*f[ne+5]+Q*f[ne+7],te[3]=$*f[ne+1]-U*f[ne+3]+Q*f[ne+5]-w*f[ne+7],ee[0]=v*(f[ne+0]+f[ne+4]),ee[3]=v*(f[ne+0]-f[ne+4]),ee[1]=Z[0]+Z[3],ee[2]=Z[1]-Z[2],ve[0]=ee[0]+ee[1],ve[1]=ee[3]+ee[2],ve[2]=ee[3]-ee[2],ve[3]=ee[0]-ee[1],f[ne+0]=ve[0]+te[0],f[ne+1]=ve[1]+te[1],f[ne+2]=ve[2]+te[2],f[ne+3]=ve[3]+te[3],f[ne+4]=ve[3]-te[3],f[ne+5]=ve[2]-te[2],f[ne+6]=ve[1]-te[1],f[ne+7]=ve[0]-te[0]}for(let he=0;he<8;++he)Z[0]=D*f[16+he],Z[1]=q*f[16+he],Z[2]=D*f[48+he],Z[3]=q*f[48+he],te[0]=w*f[8+he]+Q*f[24+he]+U*f[40+he]+$*f[56+he],te[1]=Q*f[8+he]-$*f[24+he]-w*f[40+he]-U*f[56+he],te[2]=U*f[8+he]-w*f[24+he]+$*f[40+he]+Q*f[56+he],te[3]=$*f[8+he]-U*f[24+he]+Q*f[40+he]-w*f[56+he],ee[0]=v*(f[he]+f[32+he]),ee[3]=v*(f[he]-f[32+he]),ee[1]=Z[0]+Z[3],ee[2]=Z[1]-Z[2],ve[0]=ee[0]+ee[1],ve[1]=ee[3]+ee[2],ve[2]=ee[3]-ee[2],ve[3]=ee[0]-ee[1],f[0+he]=ve[0]+te[0],f[8+he]=ve[1]+te[1],f[16+he]=ve[2]+te[2],f[24+he]=ve[3]+te[3],f[32+he]=ve[3]-te[3],f[40+he]=ve[2]-te[2],f[48+he]=ve[1]-te[1],f[56+he]=ve[0]-te[0]}function _(f){for(let v=0;v<64;++v){const w=f[0][v],D=f[1][v],Q=f[2][v];f[0][v]=w+1.5747*Q,f[1][v]=w-.1873*D-.4682*Q,f[2][v]=w+1.8556*D}}function Y(f,v,w){for(let D=0;D<64;++D)v[w+D]=Ll.toHalfFloat(se(f[D]))}function se(f){return f<=1?Math.sign(f)*Math.pow(Math.abs(f),2.2):Math.sign(f)*Math.pow(S,Math.abs(f)-1)}function ce(f){return new DataView(f.array.buffer,f.offset.value,f.size)}function ue(f){const v=f.viewer.buffer.slice(f.offset.value,f.offset.value+f.size),w=new Uint8Array(Ke(v)),D=new Uint8Array(w.length);return nt(w),Oe(w,D),new DataView(D.buffer)}function Be(f){const v=f.array.slice(f.offset.value,f.offset.value+f.size),w=Vr(v),D=new Uint8Array(w.length);return nt(w),Oe(w,D),new DataView(D.buffer)}function Me(f){const v=f.viewer,w={value:f.offset.value},D=new Uint16Array(f.columns*f.lines*(f.inputChannels.length*f.type)),Q=new Uint8Array(8192);let U=0;const q=new Array(f.inputChannels.length);for(let be=0,de=f.inputChannels.length;be<de;be++)q[be]={},q[be].start=U,q[be].end=q[be].start,q[be].nx=f.columns,q[be].ny=f.lines,q[be].size=f.type,U+=q[be].nx*q[be].ny*q[be].size;const $=xe(v,w),Z=xe(v,w);if(Z>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if($<=Z)for(let be=0;be<Z-$+1;be++)Q[be+$]=ct(v,w);const te=new Uint16Array(65536),ee=y(Q,te),ve=Ne(v,w);at(f.array,v,w,ve,D,U);for(let be=0;be<f.inputChannels.length;++be){const de=q[be];for(let Se=0;Se<q[be].size;++Se)ze(D,de.start+Se,de.nx,de.size,de.ny,de.nx*de.size,ee)}De(te,D,U);let he=0;const ne=new Uint8Array(D.buffer.byteLength);for(let be=0;be<f.lines;be++)for(let de=0;de<f.inputChannels.length;de++){const Se=q[de],Qe=Se.nx*Se.size,tt=new Uint8Array(D.buffer,Se.end*2,Qe*2);ne.set(tt,he),he+=Qe*2,Se.end+=Qe}return new DataView(ne.buffer)}function _e(f){const v=f.array.slice(f.offset.value,f.offset.value+f.size),w=Vr(v),D=f.inputChannels.length*f.lines*f.columns*f.totalBytes,Q=new ArrayBuffer(D),U=new DataView(Q);let q=0,$=0;const Z=new Array(4);for(let te=0;te<f.lines;te++)for(let ee=0;ee<f.inputChannels.length;ee++){let ve=0;switch(f.inputChannels[ee].pixelType){case 1:Z[0]=q,Z[1]=Z[0]+f.columns,q=Z[1]+f.columns;for(let ne=0;ne<f.columns;++ne){const be=w[Z[0]++]<<8|w[Z[1]++];ve+=be,U.setUint16($,ve,!0),$+=2}break;case 2:Z[0]=q,Z[1]=Z[0]+f.columns,Z[2]=Z[1]+f.columns,q=Z[2]+f.columns;for(let ne=0;ne<f.columns;++ne){const be=w[Z[0]++]<<24|w[Z[1]++]<<16|w[Z[2]++]<<8;ve+=be,U.setUint32($,ve,!0),$+=4}break}}return U}function Ge(f){const v=f.viewer,w={value:f.offset.value},D=new Uint8Array(f.columns*f.lines*(f.inputChannels.length*f.type*2)),Q={version:Pe(v,w),unknownUncompressedSize:Pe(v,w),unknownCompressedSize:Pe(v,w),acCompressedSize:Pe(v,w),dcCompressedSize:Pe(v,w),rleCompressedSize:Pe(v,w),rleUncompressedSize:Pe(v,w),rleRawSize:Pe(v,w),totalAcUncompressedCount:Pe(v,w),totalDcUncompressedCount:Pe(v,w),acCompression:Pe(v,w)};if(Q.version<2)throw new Error("EXRLoader.parse: "+W.compression+" version "+Q.version+" is unsupported");const U=new Array;let q=xe(v,w)-2;for(;q>0;){const de=Ee(v.buffer,w),Se=ct(v,w),Qe=Se>>2&3,tt=(Se>>4)-1,gt=new Int8Array([tt])[0],ht=ct(v,w);U.push({name:de,index:gt,type:ht,compression:Qe}),q-=de.length+3}const $=W.channels,Z=new Array(f.inputChannels.length);for(let de=0;de<f.inputChannels.length;++de){const Se=Z[de]={},Qe=$[de];Se.name=Qe.name,Se.compression=0,Se.decoded=!1,Se.type=Qe.pixelType,Se.pLinear=Qe.pLinear,Se.width=f.columns,Se.height=f.lines}const te={idx:new Array(3)};for(let de=0;de<f.inputChannels.length;++de){const Se=Z[de];for(let Qe=0;Qe<U.length;++Qe){const tt=U[Qe];Se.name==tt.name&&(Se.compression=tt.compression,tt.index>=0&&(te.idx[tt.index]=de),Se.offset=de)}}let ee,ve,he;if(Q.acCompressedSize>0)switch(Q.acCompression){case 0:ee=new Uint16Array(Q.totalAcUncompressedCount),at(f.array,v,w,Q.acCompressedSize,ee,Q.totalAcUncompressedCount);break;case 1:const de=f.array.slice(w.value,w.value+Q.totalAcUncompressedCount),Se=Vr(de);ee=new Uint16Array(Se.buffer),w.value+=Q.totalAcUncompressedCount;break}if(Q.dcCompressedSize>0){const de={array:f.array,offset:w,size:Q.dcCompressedSize};ve=new Uint16Array(Be(de).buffer),w.value+=Q.dcCompressedSize}if(Q.rleRawSize>0){const de=f.array.slice(w.value,w.value+Q.rleCompressedSize),Se=Vr(de);he=Ke(Se.buffer),w.value+=Q.rleCompressedSize}let ne=0;const be=new Array(Z.length);for(let de=0;de<be.length;++de)be[de]=new Array;for(let de=0;de<f.lines;++de)for(let Se=0;Se<Z.length;++Se)be[Se].push(ne),ne+=Z[Se].width*f.type*2;He(te,be,Z,ee,ve,D);for(let de=0;de<Z.length;++de){const Se=Z[de];if(!Se.decoded)switch(Se.compression){case 2:let Qe=0,tt=0;for(let gt=0;gt<f.lines;++gt){let ht=be[de][Qe];for(let it=0;it<Se.width;++it){for(let Je=0;Je<2*Se.type;++Je)D[ht++]=he[tt+Je*Se.width*Se.height];tt++}Qe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(D.buffer)}function Ee(f,v){const w=new Uint8Array(f);let D=0;for(;w[v.value+D]!=0;)D+=1;const Q=new TextDecoder().decode(w.slice(v.value,v.value+D));return v.value=v.value+D+1,Q}function Re(f,v,w){const D=new TextDecoder().decode(new Uint8Array(f).slice(v.value,v.value+w));return v.value=v.value+w,D}function $e(f,v){const w=ye(f,v),D=Ne(f,v);return[w,D]}function Fe(f,v){const w=Ne(f,v),D=Ne(f,v);return[w,D]}function ye(f,v){const w=f.getInt32(v.value,!0);return v.value=v.value+4,w}function Ne(f,v){const w=f.getUint32(v.value,!0);return v.value=v.value+4,w}function Xe(f,v){const w=f[v.value];return v.value=v.value+1,w}function ct(f,v){const w=f.getUint8(v.value);return v.value=v.value+1,w}const Pe=function(f,v){let w;return"getBigInt64"in DataView.prototype?w=Number(f.getBigInt64(v.value,!0)):w=f.getUint32(v.value+4,!0)+Number(f.getUint32(v.value,!0)<<32),v.value+=8,w};function N(f,v){const w=f.getFloat32(v.value,!0);return v.value+=4,w}function ae(f,v){return Ll.toHalfFloat(N(f,v))}function F(f){const v=(f&31744)>>10,w=f&1023;return(f>>15?-1:1)*(v?v===31?w?NaN:1/0:Math.pow(2,v-15)*(1+w/1024):6103515625e-14*(w/1024))}function xe(f,v){const w=f.getUint16(v.value,!0);return v.value+=2,w}function Ie(f,v){return F(xe(f,v))}function et(f,v,w,D){const Q=w.value,U=[];for(;w.value<Q+D-1;){const q=Ee(v,w),$=ye(f,w),Z=ct(f,w);w.value+=3;const te=ye(f,w),ee=ye(f,w);U.push({name:q,pixelType:$,pLinear:Z,xSampling:te,ySampling:ee})}return w.value+=1,U}function mt(f,v){const w=N(f,v),D=N(f,v),Q=N(f,v),U=N(f,v),q=N(f,v),$=N(f,v),Z=N(f,v),te=N(f,v);return{redX:w,redY:D,greenX:Q,greenY:U,blueX:q,blueY:$,whiteX:Z,whiteY:te}}function _t(f,v){const w=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],D=ct(f,v);return w[D]}function Nt(f,v){const w=ye(f,v),D=ye(f,v),Q=ye(f,v),U=ye(f,v);return{xMin:w,yMin:D,xMax:Q,yMax:U}}function ot(f,v){const w=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],D=ct(f,v);return w[D]}function ai(f,v){const w=["ENVMAP_LATLONG","ENVMAP_CUBE"],D=ct(f,v);return w[D]}function Ot(f,v){const w=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],D=["ROUND_DOWN","ROUND_UP"],Q=Ne(f,v),U=Ne(f,v),q=ct(f,v);return{xSize:Q,ySize:U,levelMode:w[q&15],roundingMode:D[q>>4]}}function tr(f,v){const w=N(f,v),D=N(f,v);return[w,D]}function ir(f,v){const w=N(f,v),D=N(f,v),Q=N(f,v);return[w,D,Q]}function nr(f,v,w,D,Q){if(D==="string"||D==="stringvector"||D==="iccProfile")return Re(v,w,Q);if(D==="chlist")return et(f,v,w,Q);if(D==="chromaticities")return mt(f,w);if(D==="compression")return _t(f,w);if(D==="box2i")return Nt(f,w);if(D==="envmap")return ai(f,w);if(D==="tiledesc")return Ot(f,w);if(D==="lineOrder")return ot(f,w);if(D==="float")return N(f,w);if(D==="v2f")return tr(f,w);if(D==="v3f")return ir(f,w);if(D==="int")return ye(f,w);if(D==="rational")return $e(f,w);if(D==="timecode")return Fe(f,w);if(D==="preview")return w.value+=Q,"skipped";w.value+=Q}function wn(f,v){const w=Math.log2(f);return v=="ROUND_DOWN"?Math.floor(w):Math.ceil(w)}function sr(f,v,w){let D=0;switch(f.levelMode){case"ONE_LEVEL":D=1;break;case"MIPMAP_LEVELS":D=wn(Math.max(v,w),f.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return D}function cn(f,v,w,D){const Q=new Array(f);for(let U=0;U<f;U++){const q=1<<U;let $=v/q|0;D=="ROUND_UP"&&$*q<v&&($+=1);const Z=Math.max($,1);Q[U]=(Z+w-1)/w|0}return Q}function rr(){const f=this,v=f.offset,w={value:0};for(let D=0;D<f.tileCount;D++){const Q=ye(f.viewer,v),U=ye(f.viewer,v);v.value+=8,f.size=Ne(f.viewer,v);const q=Q*f.blockWidth,$=U*f.blockHeight;f.columns=q+f.blockWidth>f.width?f.width-q:f.blockWidth,f.lines=$+f.blockHeight>f.height?f.height-$:f.blockHeight;const Z=f.columns*f.totalBytes,ee=f.size<f.lines*Z?f.uncompress(f):ce(f);v.value+=f.size;for(let ve=0;ve<f.lines;ve++){const he=ve*f.columns*f.totalBytes;for(let ne=0;ne<f.inputChannels.length;ne++){const be=W.channels[ne].name,de=f.channelByteOffsets[be]*f.columns,Se=f.decodeChannels[be];if(Se===void 0)continue;w.value=he+de;const Qe=(f.height-(1+$+ve))*f.outLineWidth;for(let tt=0;tt<f.columns;tt++){const gt=Qe+(tt+q)*f.outputChannels+Se;f.byteArray[gt]=f.getter(ee,w)}}}}}function ar(){const f=this,v=f.offset,w={value:0};for(let D=0;D<f.height/f.blockHeight;D++){const Q=ye(f.viewer,v)-W.dataWindow.yMin;f.size=Ne(f.viewer,v),f.lines=Q+f.blockHeight>f.height?f.height-Q:f.blockHeight;const U=f.columns*f.totalBytes,$=f.size<f.lines*U?f.uncompress(f):ce(f);v.value+=f.size;for(let Z=0;Z<f.blockHeight;Z++){const te=D*f.blockHeight,ee=Z+f.scanOrder(te);if(ee>=f.height)continue;const ve=Z*U,he=(f.height-1-ee)*f.outLineWidth;for(let ne=0;ne<f.inputChannels.length;ne++){const be=W.channels[ne].name,de=f.channelByteOffsets[be]*f.columns,Se=f.decodeChannels[be];if(Se!==void 0){w.value=ve+de;for(let Qe=0;Qe<f.columns;Qe++){const tt=he+Qe*f.outputChannels+Se;f.byteArray[tt]=f.getter($,w)}}}}}}function Aa(f,v,w){const D={};if(f.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");D.version=f.getUint8(4);const Q=f.getUint8(5);D.spec={singleTile:!!(Q&2),longName:!!(Q&4),deepFormat:!!(Q&8),multiPart:!!(Q&16)},w.value=8;let U=!0;for(;U;){const q=Ee(v,w);if(q==0)U=!1;else{const $=Ee(v,w),Z=Ne(f,w),te=nr(f,v,w,$,Z);te===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${$}'.`):D[q]=te}}if((Q&-7)!=0)throw console.error("THREE.EXRHeader:",D),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return D}function fa(f,v,w,D,Q){const U={size:0,viewer:v,array:w,offset:D,width:f.dataWindow.xMax-f.dataWindow.xMin+1,height:f.dataWindow.yMax-f.dataWindow.yMin+1,inputChannels:f.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:wt};switch(f.compression){case"NO_COMPRESSION":U.blockHeight=1,U.uncompress=ce;break;case"RLE_COMPRESSION":U.blockHeight=1,U.uncompress=ue;break;case"ZIPS_COMPRESSION":U.blockHeight=1,U.uncompress=Be;break;case"ZIP_COMPRESSION":U.blockHeight=16,U.uncompress=Be;break;case"PIZ_COMPRESSION":U.blockHeight=32,U.uncompress=Me;break;case"PXR24_COMPRESSION":U.blockHeight=16,U.uncompress=_e;break;case"DWAA_COMPRESSION":U.blockHeight=32,U.uncompress=Ge;break;case"DWAB_COMPRESSION":U.blockHeight=256,U.uncompress=Ge;break;default:throw new Error("EXRLoader.parse: "+f.compression+" is unsupported")}const q={};for(const ee of f.channels)switch(ee.name){case"Y":case"R":case"G":case"B":case"A":q[ee.name]=!0,U.type=ee.pixelType}let $=!1;if(q.R&&q.G&&q.B)$=!q.A,U.outputChannels=4,U.decodeChannels={R:0,G:1,B:2,A:3};else if(q.Y)U.outputChannels=1,U.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(U.type==1)switch(Q){case kt:U.getter=Ie;break;case Ft:U.getter=xe;break}else if(U.type==2)switch(Q){case kt:U.getter=N;break;case Ft:U.getter=ae}else throw new Error("EXRLoader.parse: unsupported pixelType "+U.type+" for "+f.compression+".");U.columns=U.width;const Z=U.width*U.height*U.outputChannels;switch(Q){case kt:U.byteArray=new Float32Array(Z),$&&U.byteArray.fill(1,0,Z);break;case Ft:U.byteArray=new Uint16Array(Z),$&&U.byteArray.fill(15360,0,Z);break;default:console.error("THREE.EXRLoader: unsupported type: ",Q);break}let te=0;for(const ee of f.channels)U.decodeChannels[ee.name]!==void 0&&(U.channelByteOffsets[ee.name]=te),te+=ee.pixelType*2;if(U.totalBytes=te,U.outLineWidth=U.width*U.outputChannels,f.lineOrder==="INCREASING_Y"?U.scanOrder=ee=>ee:U.scanOrder=ee=>U.height-1-ee,U.outputChannels==4?(U.format=Bt,U.colorSpace=wt):(U.format=an,U.colorSpace=mi),f.spec.singleTile){U.blockHeight=f.tiles.ySize,U.blockWidth=f.tiles.xSize;const ee=sr(f.tiles,U.width,U.height),ve=cn(ee,U.width,f.tiles.xSize,f.tiles.roundingMode),he=cn(ee,U.height,f.tiles.ySize,f.tiles.roundingMode);U.tileCount=ve[0]*he[0];for(let ne=0;ne<ee;ne++)for(let be=0;be<he[ne];be++)for(let de=0;de<ve[ne];de++)Pe(v,D);U.decode=rr.bind(U)}else{U.blockWidth=U.width;const ee=Math.ceil(U.height/U.blockHeight);for(let ve=0;ve<ee;ve++)Pe(v,D);U.decode=ar.bind(U)}return U}const or={value:0},T=new DataView(e),k=new Uint8Array(e),W=Aa(T,e,or),H=fa(W,T,k,or,this.type);return H.decode(),{header:W,width:H.width,height:H.height,data:H.byteArray,format:H.format,colorSpace:H.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,i,n){function s(a,o){a.colorSpace=o.colorSpace,a.minFilter=Et,a.magFilter=Et,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,s,i,n)}}const qc={common:[{type:"env",path:"assets/sky-512-HDR.exr"},{type:"texture",path:"assets/sky4k-75.avif",key:"sky-background"},{type:"audio",path:"assets/music.mp3",key:"background_music"},{type:"audio",path:"assets/rain.mp3",key:"rain_sound"}],ultra:[{type:"model",path:"assets/ultra/level.glb"},{type:"ktx2",path:"assets/ultra/main-diffuse.ktx2"},{type:"ktx2",path:"assets/ultra/main-alpha.ktx2"},{type:"ktx2",path:"assets/ultra/building4-cars-work.ktx2"},{type:"ktx2",path:"assets/ultra/building4-emission-decals.ktx2"},{type:"ktx2",path:"assets/ultra/Arcade.ktx2"},{type:"ktx2",path:"assets/ultra/BG-Buildings-Set1_PBR_Diffuse.ktx2"},{type:"ktx2",path:"assets/ultra/BG-Buildings-Set1_PBR_Emission.ktx2"},{type:"ktx2",path:"assets/ultra/BG-Buildings-Set1_PBR_Roughness-Metalness.ktx2"},{type:"ktx2",path:"assets/ultra/BG-Buildings-Set2_PBR_Diffuse-Alpha.ktx2"},{type:"ktx2",path:"assets/ultra/BG-Buildings-Set2_PBR_Emission-Fixed.ktx2"},{type:"ktx2",path:"assets/ultra/BG-Buildings-Set2_PBR_Roughness-Metalness.ktx2"},{type:"ktx2",path:"assets/ultra/flying-car.ktx2"},{type:"model",path:"assets/ultra/building1.glb"},{type:"model",path:"assets/ultra/building2.glb"},{type:"model",path:"assets/ultra/building3.glb"},{type:"model",path:"assets/ultra/building4.glb"},{type:"model",path:"assets/ultra/building5.glb"},{type:"model",path:"assets/ultra/building6.glb"},{type:"model",path:"assets/ultra/building7.glb"},{type:"model",path:"assets/ultra/building8.glb"},{type:"model",path:"assets/ultra/building9.glb"},{type:"model",path:"assets/ultra/building10.glb"}],high:[{type:"model",path:"assets/high/level.glb"},{type:"ktx2",path:"assets/high/main-diffuse.ktx2"},{type:"ktx2",path:"assets/high/main-alpha.ktx2"},{type:"ktx2",path:"assets/high/building4-cars-work.ktx2"},{type:"ktx2",path:"assets/high/building4-emission-decals.ktx2"},{type:"ktx2",path:"assets/high/Arcade.ktx2"},{type:"ktx2",path:"assets/high/BG-Buildings-Set1_PBR_Diffuse.ktx2"},{type:"ktx2",path:"assets/high/BG-Buildings-Set1_PBR_Emission.ktx2"},{type:"ktx2",path:"assets/high/BG-Buildings-Set1_PBR_Roughness-Metalness.ktx2"},{type:"ktx2",path:"assets/high/BG-Buildings-Set2_PBR_Diffuse-Alpha.ktx2"},{type:"ktx2",path:"assets/high/BG-Buildings-Set2_PBR_Emission-Fixed.ktx2"},{type:"ktx2",path:"assets/high/BG-Buildings-Set2_PBR_Roughness-Metalness.ktx2"},{type:"ktx2",path:"assets/high/flying-car.ktx2"},{type:"model",path:"assets/high/building1.glb"},{type:"model",path:"assets/high/building2.glb"},{type:"model",path:"assets/high/building3.glb"},{type:"model",path:"assets/high/building4.glb"},{type:"model",path:"assets/high/building5.glb"},{type:"model",path:"assets/high/building6.glb"},{type:"model",path:"assets/high/building7.glb"},{type:"model",path:"assets/high/building8.glb"},{type:"model",path:"assets/high/building9.glb"},{type:"model",path:"assets/high/building10.glb"}],medium:[{type:"model",path:"assets/medium/level.glb"},{type:"ktx2",path:"assets/medium/main-diffuse.ktx2"},{type:"ktx2",path:"assets/medium/main-alpha.ktx2"},{type:"ktx2",path:"assets/medium/building4-cars-work.ktx2"},{type:"ktx2",path:"assets/medium/building4-emission-decals.ktx2"},{type:"ktx2",path:"assets/medium/Arcade.ktx2"},{type:"ktx2",path:"assets/medium/BG-Buildings-Set1_PBR_Diffuse.ktx2"},{type:"ktx2",path:"assets/medium/BG-Buildings-Set1_PBR_Emission.ktx2"},{type:"ktx2",path:"assets/medium/BG-Buildings-Set1_PBR_Roughness-Metalness.ktx2"},{type:"ktx2",path:"assets/medium/BG-Buildings-Set2_PBR_Diffuse-Alpha.ktx2"},{type:"ktx2",path:"assets/medium/BG-Buildings-Set2_PBR_Emission-Fixed.ktx2"},{type:"ktx2",path:"assets/medium/BG-Buildings-Set2_PBR_Roughness-Metalness.ktx2"},{type:"ktx2",path:"assets/medium/flying-car.ktx2"},{type:"model",path:"assets/medium/building1.glb"},{type:"model",path:"assets/medium/building2.glb"},{type:"model",path:"assets/medium/building3.glb"},{type:"model",path:"assets/medium/building4.glb"},{type:"model",path:"assets/medium/building5.glb"},{type:"model",path:"assets/medium/building6.glb"},{type:"model",path:"assets/medium/building7.glb"},{type:"model",path:"assets/medium/building8.glb"},{type:"model",path:"assets/medium/building9.glb"},{type:"model",path:"assets/medium/building10.glb"}],low:[{type:"model",path:"assets/low/level.glb"},{type:"ktx2",path:"assets/low/main-diffuse.ktx2"},{type:"ktx2",path:"assets/low/main-alpha.ktx2"},{type:"ktx2",path:"assets/low/building4-cars-work.ktx2"},{type:"ktx2",path:"assets/low/building4-emission-decals.ktx2"},{type:"ktx2",path:"assets/low/Arcade.ktx2"},{type:"ktx2",path:"assets/low/BG-Buildings-Set1_PBR_Diffuse.ktx2"},{type:"ktx2",path:"assets/low/BG-Buildings-Set1_PBR_Emission.ktx2"},{type:"ktx2",path:"assets/low/BG-Buildings-Set1_PBR_Roughness-Metalness.ktx2"},{type:"ktx2",path:"assets/low/BG-Buildings-Set2_PBR_Diffuse-Alpha.ktx2"},{type:"ktx2",path:"assets/low/BG-Buildings-Set2_PBR_Emission-Fixed.ktx2"},{type:"ktx2",path:"assets/low/BG-Buildings-Set2_PBR_Roughness-Metalness.ktx2"},{type:"ktx2",path:"assets/low/flying-car.ktx2"},{type:"model",path:"assets/low/building1.glb"},{type:"model",path:"assets/low/building2.glb"},{type:"model",path:"assets/low/building3.glb"},{type:"model",path:"assets/low/building4.glb"},{type:"model",path:"assets/low/building5.glb"},{type:"model",path:"assets/low/building6.glb"},{type:"model",path:"assets/low/building7.glb"},{type:"model",path:"assets/low/building8.glb"},{type:"model",path:"assets/low/building9.glb"},{type:"model",path:"assets/low/building10.glb"}]};class mv{constructor(e,t){this.gltfLoader=new rE,this.exrLoader=new pv,this.ktx2Loader=new Si,this.textureLoader=new Qo,this.audioLoader=new kh,this.cache=new Map,this.ktx2Loader.setWorkerLimit(1),e&&this.setRenderer(e);const i=new kE;i.setDecoderPath("/js/libs/draco/gltf/"),i.setWorkerLimit(1),this.gltfLoader.setDRACOLoader(i),this.gltfLoader.setKTX2Loader(this.ktx2Loader);const n=(t||"high").toLowerCase();this.quality=n==="low"||n==="medium"||n==="high"||n==="ultra"?n:"high",this.modelQuality=this.quality,this.envMap=null,this.cityModel=null,this.buildingAssets=[],this.sharedPBRMaterials={}}setRenderer(e){this.renderer=e,this.ktx2Loader.setTranscoderPath("/js/libs/basis/"),this.ktx2Loader.detectSupport(e)}async preload(e){const t=[...qc.common,...qc[this.quality]],i=t.length,n=new Array(i).fill(0),s=t.map((a,o)=>new Promise((l,c)=>{let h;const u=a.path,d=a.key||u;switch(a.type){case"model":h=this.gltfLoader;break;case"ktx2":h=this.ktx2Loader;break;case"env":h=this.exrLoader;break;case"texture":h=this.textureLoader;break;case"audio":h=this.audioLoader;break;default:console.warn(`Unknown asset type: ${a.type}`),l();return}const A=p=>{this.cache.set(d,p),n[o]=1;const m=n.reduce((C,x)=>C+x,0)/i;e(m),l(p)},g=p=>{if(p.lengthComputable){n[o]=p.loaded/p.total;const m=n.reduce((C,x)=>C+x,0)/i;e(m)}},E=p=>{console.error(`Failed to load asset: ${u}`,p),n[o]=1;const m=n.reduce((C,x)=>C+x,0)/i;e(m),l()};h.load(u,A,g,E)}));await Promise.all(s)}get(e){return this.cache.has(e)?this.cache.get(e):(console.warn(`Asset not found in cache: ${e}`),null)}loadEnvironment(e,t){const i=this.get("assets/sky-512-HDR.exr");i?(i.mapping=as,this.envMap=i,e.environment=this.envMap,t&&t(i)):console.error("Environment map not found in preloaded cache.");const n=this.get("sky-background");n?(n.mapping=as,n.colorSpace=dt,e.background=n):console.error("Background texture not found in preloaded cache.")}async loadCityModel(e){const t=`assets/${this.quality}/level.glb`,i=this.get(t);if(i)return this.cityModel=i.scene,e.add(this.cityModel),this.cityModel;console.error("City model not found in preloaded cache. Attempting to load directly.");try{const n=await this.gltfLoader.loadAsync(t);return this.cityModel=n.scene,e.add(this.cityModel),this.cityModel}catch(n){throw console.error("An error occurred loading the model directly:",n),n}}getEnvironmentMap(){return this.envMap}getCityModel(){return this.cityModel}getBuildingGLB(e){const t=`assets/${this.quality}/${e}`;return this.get(t)}async loadBuildingModelsAndSharedMaterials(e,t,i){this.buildingAssets=[],this.sharedPBRMaterials={};const n={},s=["BG-Buildings-Set1_PBR_Diffuse.ktx2","BG-Buildings-Set1_PBR_Emission.ktx2","BG-Buildings-Set1_PBR_Roughness-Metalness.ktx2","BG-Buildings-Set2_PBR_Diffuse-Alpha.ktx2","BG-Buildings-Set2_PBR_Emission-Fixed.ktx2","BG-Buildings-Set2_PBR_Roughness-Metalness.ktx2"];for(const a of s){const o=`assets/${this.quality}/${a}`,l=this.get(o);l?(l.flipY=!1,(a.includes("_PBR_Diffuse")||a.includes("_PBR_Emission"))&&(l.colorSpace=dt),l.minFilter=si,l.magFilter=Et,n[a]=l):console.error(`Texture not found in cache: ${o}`)}this.sharedPBRMaterials.set1=new Ci({map:n["BG-Buildings-Set1_PBR_Diffuse.ktx2"],emissiveMap:n["BG-Buildings-Set1_PBR_Emission.ktx2"],emissive:16777215,emissiveIntensity:5,roughnessMap:n["BG-Buildings-Set1_PBR_Roughness-Metalness.ktx2"],metalnessMap:n["BG-Buildings-Set1_PBR_Roughness-Metalness.ktx2"]}),this.sharedPBRMaterials.set2=new Ci({map:n["BG-Buildings-Set2_PBR_Diffuse-Alpha.ktx2"],emissiveMap:n["BG-Buildings-Set2_PBR_Emission-Fixed.ktx2"],emissive:16777215,emissiveIntensity:5,roughnessMap:n["BG-Buildings-Set2_PBR_Roughness-Metalness.ktx2"],metalnessMap:n["BG-Buildings-Set2_PBR_Roughness-Metalness.ktx2"],transparent:!1,alphaTest:.5,side:qt});for(const a of t){const o=this.getBuildingGLB(a);if(o){let l=null,c=null;if(o.scene.traverse(h=>{h.isMesh&&(l||(l=h.geometry.clone(),["building7.glb","building10.glb","building8.glb","building9.glb"].includes(a)&&h.material&&(c=h.material.clone())))}),l){let h;if(["building7.glb","building10.glb","building8.glb","building9.glb"].includes(a))c?h={name:a,geometry:l,materialKey:"use_original",originalMaterial:c}:(console.warn(`${a} was processed but no original material found. Defaulting to set1.`),h={name:a,geometry:l,materialKey:"set1"});else{let u="";["building1.glb","building2.glb","building5.glb"].includes(a)?u="set2":u="set1",h={name:a,geometry:l,materialKey:u}}this.buildingAssets.push(h)}else console.warn(`No mesh found in building model: ${a}`)}else console.error(`Building GLB not found in cache: ${a}`)}return this.buildingAssets.sort((a,o)=>a.name.localeCompare(o.name)),this.buildingAssets}getBuildingAssets(){return this.buildingAssets}getSharedPBRMaterial(e){return this.sharedPBRMaterials[e]}loadTexture(e,t=!1){return this.ktx2Loader.setTranscoderPath("js/libs/basis/"),this.ktx2Loader.detectSupport(this.renderer),this.ktx2Loader.loadAsync(`assets/${this.quality}/${e}`).then(i=>(i.encoding=t?dt:wt,i.minFilter=si,i.magFilter=Et,i.needsUpdate=!0,i))}}class gv{constructor(e){this.engine=e,this.loadingScreen=document.getElementById("loading-screen"),this.uiContainer=document.getElementById("ui-container"),this.instructions=document.getElementById("instructions"),this.introText1=document.getElementById("intro-text-1"),this.introText2=document.getElementById("intro-text-2"),this.coinCounterElement=document.getElementById("coinCounter"),this.fpsCounterElement=document.getElementById("fpsCounter"),this.interactionPrompt=document.getElementById("interactionPrompt"),this.modalContainer=document.getElementById("modalContainer"),this.gameFrame=document.getElementById("gameFrame"),this.jumpButton=document.getElementById("jump-button"),this.closeModalButton=document.getElementById("closeModalButton"),this.crosshair=document.getElementById("crosshair"),this.settingsButton=document.getElementById("settingsButton"),this.settingsModal=document.getElementById("settingsModal"),this.settingsCloseButton=this.settingsModal.querySelector(".close-button"),this.applySettingsButton=document.getElementById("applySettingsButton"),this.presetRadios=document.querySelectorAll('input[name="graphicsPreset"]'),this.showFPSCheckbox=document.getElementById("showFPS"),this.skipIntroCheckbox=document.getElementById("skipIntro"),this.audioToggleButton=document.getElementById("audioToggleButton"),this.raceContainer=document.getElementById("raceContainer"),this.raceTimer=document.getElementById("raceTimer"),this.raceCheckpointCounter=document.getElementById("raceCheckpointCounter"),this.leftJoystickZone=document.getElementById("left-joystick-zone"),this.rightJoystickZone=document.getElementById("right-joystick-zone"),(!this.instructions||!this.coinCounterElement||!this.interactionPrompt||!this.modalContainer||!this.gameFrame||!this.closeModalButton||!this.crosshair)&&console.error("One or more UI elements not found in the DOM!"),this.closeModalButton.addEventListener("click",()=>{this.engine.arcadeManager&&this.engine.arcadeManager.exitArcadeMode()}),this.settingsButton.addEventListener("click",()=>this.showSettingsModal(!0)),this.settingsCloseButton.addEventListener("click",()=>this.showSettingsModal(!1)),this.applySettingsButton.addEventListener("click",()=>this._applySettings()),window.addEventListener("click",t=>{t.target==this.settingsModal&&this.showSettingsModal(!1)}),this.audioToggleButton.addEventListener("click",()=>{this.engine.audioManager.handleFirstInteraction(),this._toggleAudio()}),this._updateAudioIcon(),this._handleKeyDown=this._handleKeyDown.bind(this),document.addEventListener("keydown",this._handleKeyDown),this.touchControls=null}setTouchControls(e){this.touchControls=e}showGameUI(){this.instructions.style.display="block",this.instructions.style.opacity=1,this.coinCounterElement.style.display="block",this.settingsButton.style.display="block",this.audioToggleButton.style.display="block",this.crosshair.style.opacity=1,this.engine.settingsManager.getSetting().showFPS&&(this.fpsCounterElement.style.display="block")}showJoystickZones(){this.engine.playerController&&this.engine.playerController.isTouchDevice&&(this._fadeInElement(this.leftJoystickZone),this._fadeInElement(this.rightJoystickZone))}showInitialVehicleInstructions(){this.instructions.innerHTML="Fly the vehicle (WASD, Space, C)";const e=[this.instructions,this.coinCounterElement,this.settingsButton,this.audioToggleButton,this.crosshair];this.engine.settingsManager.getSetting().showFPS&&e.push(this.fpsCounterElement),e.forEach(n=>this._fadeInElement(n));const i=n=>{const s=n.key.toLowerCase();["w","a","s","d"," ","c"].includes(s)&&(this.hideVehicleInstructions(),document.removeEventListener("keydown",i))};if(document.addEventListener("keydown",i),this.touchControls&&this.touchControls.leftJoystick){const n=()=>{this.hideVehicleInstructions(),this.touchControls.leftJoystick.off("move",n)};this.touchControls.leftJoystick.on("move",n)}}hideVehicleInstructions(){this.instructions.style.opacity=0,setTimeout(()=>{this.instructions.style.display="none"},500)}_fadeInElement(e){e&&(e.style.opacity=0,e.style.display="block",setTimeout(()=>{e.style.opacity=1},10))}showIntroSequence(){document.getElementById("intro-text-container").style.display="block",this.showIntroText()}showIntroText(){setTimeout(()=>{this.introText1.classList.add("visible"),setTimeout(()=>{this.introText1.classList.remove("visible"),setTimeout(()=>{this.introText2.classList.add("visible"),setTimeout(()=>{this.introText2.classList.remove("visible")},5e3)},500)},5e3)},500)}setCrosshairState(e){this.crosshair&&(this.crosshair.className=e)}_handleKeyDown(e){this.modalContainer.classList.contains("visible")&&e.key==="Escape"&&this.engine.arcadeManager&&this.engine.arcadeManager.exitArcadeMode(),this.settingsModal.classList.contains("visible")&&e.key==="Escape"&&this.showSettingsModal(!1)}showInstructions(e,t=null){t!==null&&(this.instructions.innerHTML=t),this.instructions.style.display=e?"block":"none"}updateCoinCounter(e,t){const i=this.coinCounterElement.querySelector("span");if(i){const n=String(e).padStart(2,"0"),s=String(t).padStart(2,"0");i.textContent=`${n} / ${s}`}}showInteractionPrompt(e,t=""){e&&(this.interactionPrompt.innerHTML=t),this.interactionPrompt.style.display=e?"block":"none"}showSettingsModal(e){e?(this._populateSettings(),this.settingsModal.classList.add("visible")):this.settingsModal.classList.remove("visible")}_populateSettings(){const e=this.engine.settingsManager.getSettingName();this.presetRadios.forEach(i=>{i.value===e&&(i.checked=!0)});const t=this.engine.settingsManager.getSetting();this.showFPSCheckbox.checked=t.showFPS,this.skipIntroCheckbox.checked=t.skipIntro}_applySettings(){let e;this.presetRadios.forEach(n=>{n.checked&&(e=n.value)});const t=this.showFPSCheckbox.checked,i=this.skipIntroCheckbox.checked;e&&this.engine.settingsManager.saveSetting(e,{showFPS:t,skipIntro:i})}_toggleAudio(){this.engine.audioManager.togglePlayPause(),this._updateAudioIcon()}_updateAudioIcon(){this.engine.audioManager.isPlaying?this.audioToggleButton.classList.add("playing"):this.audioToggleButton.classList.remove("playing")}isModalActive(){return this.modalContainer.classList.contains("visible")||this.settingsModal.classList.contains("visible")}hideMainUI(){this.showInstructions(!1),this.coinCounterElement.style.display="none",this.showInteractionPrompt(!1)}showMainUI(){this.coinCounterElement.style.display="block"}showRaceUI(e){this.raceContainer&&(this.raceContainer.style.display=e?"flex":"none")}setRaceTimerVisibility(e){this.raceTimer&&(this.raceTimer.style.display=e?"block":"none")}setRaceCounterVisibility(e){this.raceCheckpointCounter&&(this.raceCheckpointCounter.style.display=e?"block":"none")}updateRaceTimer(e){if(this.raceTimer){const t=this.raceTimer.querySelector("span");t&&(t.innerHTML=e)}}updateRaceCounter(e){this.raceCheckpointCounter&&(this.raceCheckpointCounter.innerHTML=`${e}`)}updateFpsCounter(e){this.fpsCounterElement&&(this.fpsCounterElement.textContent=`${e} FPS`)}showArcadeModal(e,t){e?(this.gameFrame||(this.gameFrame=document.createElement("iframe"),this.gameFrame.id="gameFrame",this.gameFrame.setAttribute("allow","gamepad; accelerometer; magnetometer; gyroscope"),this.modalContainer.insertBefore(this.gameFrame,this.closeModalButton)),this.gameFrame.src=t,this.modalContainer.classList.add("visible")):(this.modalContainer.classList.remove("visible"),setTimeout(()=>{this.gameFrame&&this.gameFrame.parentNode&&this.gameFrame.parentNode.removeChild(this.gameFrame),this.gameFrame=null},500))}getCloseModalButton(){return this.closeModalButton}showMeshDebuggerPanel(e){}updateMeshDebuggerPanelContent(e){}showDebugFocusHelper(e,t=""){}hideCoinCounter(){this.coinCounterElement.style.display="none"}}class Ev{constructor(){this.raycaster=new Gh,this.collidableMeshes=[],this.vehicleCollidableMeshes=[],this.groundColliders=[],this.dockMesh=null,this.spawnObject=null,this.spawnEndObject=null,this.respawnObject=null,this.elevatorObject=null,this.elevatorEndObject=null,this.ziplinePoints=[]}setupCollisionMeshes(e){if(!e)return;this.collidableMeshes=[],this.groundColliders=[],this.dockMesh=null,this.spawnObject=null,this.respawnObject=null,this.elevatorObject=null,this.elevatorEndObject=null,this.spawnEndObject=null;const t=new RegExp(`^${me.ZIPLINE_PREFIX}-(\\d+)-([a-zA-Z]+)(?:-(\\d+))?(?:-(Slow|Normal|Fast))?$`),i={};e.traverse(n=>{n.name===me.MESH_NAME_GROUND_SPAWN&&(this.spawnObject=n),n.name===me.MESH_NAME_SPAWN_END&&(this.spawnEndObject=n),n.name===me.MESH_NAME_RESPAWN&&(this.respawnObject=n),n.name===me.MESH_NAME_ELEVATOR&&(this.elevatorObject=n),n.name===me.MESH_NAME_ELEVATOR_END&&(this.elevatorEndObject=n),n.name===me.MESH_NAME_GROUND_DOCK&&(this.dockMesh=n);const s=n.name.match(t);if(s){const a=parseInt(s[1],10),o=s[2].toLowerCase(),l=o==="control"?parseInt(s[3],10):-1,c=s[4]||"Normal";i[a]||(i[a]={points:[],speed:c,name:n.name});const h={type:o,object:n};l!==-1&&(h.index=l),i[a].points.push(h)}if(n.isMesh){let a=n.visible;if(n.name!==me.MESH_NAME_CITY_BACKGROUND&&this.collidableMeshes.push(n),n.name===me.MESH_NAME_GROUND_COLLISION){this.groundColliders.push(n),this.vehicleCollidableMeshes.push(n),a=!1,n.visible=!0;const l=new ei({transparent:!0,opacity:0,depthWrite:!1});n.material=l}if(n.name===me.MESH_NAME_ELEVATOR_COLLISION){this.groundColliders.push(n);const l=new ei({transparent:!0,opacity:0,depthWrite:!1});n.material=l,a=!1}let o=n.parent;for(;o;){if(!o.visible){a=!1;break}o=o.parent}a&&this.collidableMeshes.push(n)}}),this.ziplinePoints=Object.keys(i).map(n=>{const s=parseInt(n,10),a=i[s],o=a.points,l=o.find(d=>d.type==="start"),c=o.find(d=>d.type==="end"),h=o.filter(d=>d.type==="control").sort((d,A)=>d.index-A.index);if(!l||!c)return console.warn(`Zipline #${s} is missing a Start or End point. Skipping.`),null;const u=[l,...h,c].map(d=>{const A=new M;return d.object.getWorldPosition(A),A});return{number:s,points:u,speed:a.speed,name:a.name}}).filter(n=>n!==null),this.ziplinePoints.length>0}checkGround(e,t){this.raycaster.ray.origin.copy(e);const i=new M(e.x,e.y+me.GROUND_CHECK_RAY_VERTICAL_OFFSET,e.z);this.raycaster.ray.origin.copy(i),this.raycaster.ray.direction.set(0,-1,0);const s=this.raycaster.intersectObjects(this.groundColliders,!1).filter(a=>a.object.visible);if(s.length>0){const a=s[0],o=e.y-a.point.y;if(o<t+me.GROUND_CHECK_DISTANCE_BUFFER&&o>=0)return{isOnGround:!0,distance:o,point:a.point,normal:a.face.normal}}return{isOnGround:!1,distance:1/0,point:null,normal:null}}checkCollisionAndSlide(e,t,i,n,s){let o={collided:!1,adjustedPosition:e.clone().add(t).clone(),adjustedVelocity:t.clone().divideScalar(s),surfaceNormal:null};const l=3;let c=e.clone(),h=t.clone();for(let u=0;u<l&&!(h.lengthSq()<1e-4);u++){this.raycaster.ray.origin.copy(c),this.raycaster.ray.direction.copy(h).normalize();const d=h.length(),A=this.raycaster.intersectObjects(n,!0);let g=null;for(const E of A)E.distance<=d+i&&(!g||E.distance<g.distance)&&(g=E);if(g){o.collided=!0,o.surfaceNormal=g.face.normal.clone(),d+i-g.distance,c.addScaledVector(this.raycaster.ray.direction,g.distance-i-.01);const E=h.clone().projectOnPlane(g.face.normal);h.copy(E)}else{c.add(h),h.set(0,0,0);break}}return o.adjustedPosition=c,o.adjustedVelocity=h.divideScalar(s),o}checkWallCollision(e,t){const i=[new M(0,0,-1),new M(0,0,1),new M(-1,0,0),new M(1,0,0)];for(let n=0;n<i.length;n++){const s=i[n].clone().applyQuaternion(t).normalize();this.raycaster.ray.origin.copy(e),this.raycaster.ray.direction.copy(s);const a=this.raycaster.intersectObjects(this.collidableMeshes);if(a.length>0&&a[0].distance<me.WALL_COLLISION_DISTANCE)return!0}return!1}getDockMesh(){return this.dockMesh}getSpawnPoint(){if(this.spawnObject){const e=new M;return this.spawnObject.getWorldPosition(e),e}return new M(0,5,0)}getSpawnEndPoint(){if(this.spawnEndObject){const e=new M;return this.spawnEndObject.getWorldPosition(e),e}return console.warn("Spawn-End object not found, returning spawn point as fallback."),this.getSpawnPoint()}getRespawnPoint(){if(this.respawnObject){const e=new M;return this.respawnObject.getWorldPosition(e),e}return this.getSpawnPoint()}getElevatorObject(){return this.elevatorObject}getElevatorEndObject(){return this.elevatorEndObject}getZiplinePoints(){return this.ziplinePoints}addCollidableMesh(e){e&&this.collidableMeshes.push(e)}addVehicleCollidableMesh(e){e&&this.vehicleCollidableMeshes.push(e)}}const Jn=new Zt(0,0,0,"YXZ"),jn=new M,vv={type:"change"},xv={type:"lock"},yv={type:"unlock"},Xc=Math.PI/2;class Cv extends Sn{constructor(e,t){super(),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=_v.bind(this),this._onPointerlockChange=Mv.bind(this),this._onPointerlockError=Iv.bind(this),this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return this.camera}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.camera.quaternion)}moveForward(e){const t=this.camera;jn.setFromMatrixColumn(t.matrix,0),jn.crossVectors(t.up,jn),t.position.addScaledVector(jn,e)}moveRight(e){const t=this.camera;jn.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector(jn,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function _v(r){if(this.isLocked===!1)return;const e=r.movementX||r.mozMovementX||r.webkitMovementX||0,t=r.movementY||r.mozMovementY||r.webkitMovementY||0,i=this.camera;Jn.setFromQuaternion(i.quaternion),Jn.y-=e*.002*this.pointerSpeed,Jn.x-=t*.002*this.pointerSpeed,Jn.x=Math.max(Xc-this.maxPolarAngle,Math.min(Xc-this.minPolarAngle,Jn.x)),i.quaternion.setFromEuler(Jn),this.dispatchEvent(vv)}function Mv(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(xv),this.isLocked=!0):(this.dispatchEvent(yv),this.isLocked=!1)}function Iv(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class Sv{constructor(e,t,i,n,s,a,o){this.camera=e,this.domElement=t,this.uiManager=i,this.physicsUtils=n,this.elevatorManager=s,this.ziplineManager=a,this.engine=o,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.controls=this.isTouchDevice?null:new Cv(e,t),this.currentVehicle=null,this.enabled=!0,this.state={inVehicle:!0,isFlying:!0,isPlayingArcade:!1,isOnGround:!1,isSprinting:!1,isZiplining:!1,introAnimating:!1},this.input={moveForward:!1,moveBackward:!1,moveLeft:!1,moveRight:!1,moveUp:!1,moveDown:!1,scrollValue:0},this.scrollTimeout=null,this.velocity=new M,this.direction=new M,this.verticalVelocity=0,this.previousPosition=new M,this.collisionRadius=.5,this.euler=new Zt(0,0,0,"YXZ"),this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.initialIntroYaw=null,this.initialIntroPitch=null,this.touchMoveDirection=new M,this.touchForward=new M,this.touchRight=new M,this._addEventListeners(),this.uiManager.setCrosshairState("in-vehicle"),this.setState(this.state)}_addEventListeners(){if(this.isTouchDevice){const e=()=>this.engine.audioManager.handleFirstInteraction();this.domElement.addEventListener("touchstart",e,{once:!0,passive:!0}),this.domElement.addEventListener("pointerdown",e,{once:!0})}this.isTouchDevice||(this.domElement.addEventListener("click",()=>{this.engine.audioManager.handleFirstInteraction(),!this.engine.isPreloading&&!this.state.isPlayingArcade&&!this.uiManager.isModalActive()&&this.controls.lock()}),this.controls.addEventListener("lock",()=>{this.resetMovementInput()}),this.controls.addEventListener("unlock",()=>{this.state.isPlayingArcade})),document.addEventListener("keydown",this._onKeyDown.bind(this)),document.addEventListener("keyup",this._onKeyUp.bind(this)),document.addEventListener("wheel",this._onMouseWheel.bind(this),{passive:!1})}_onKeyDown(e){if(this.enabled&&!(this.state.isPlayingArcade||this.state.isZiplining||this.state.introAnimating))switch(e.code){case"KeyW":this.input.moveForward=!0;break;case"KeyA":this.input.moveLeft=!0;break;case"KeyS":this.input.moveBackward=!0;break;case"KeyD":this.input.moveRight=!0;break;case"Space":this.state.isFlying?this.input.moveUp=!0:this.state.isOnGround&&(this.verticalVelocity=me.PLAYER_JUMP_STRENGTH,this.state.isOnGround=!1);break;case"KeyC":this.state.isFlying&&(this.input.moveDown=!0);break;case"ShiftLeft":case"ShiftRight":this.state.isFlying||(this.state.isSprinting=!0);break}}_onMouseMove(e){if(this.isTouchDevice||!this.enabled||!this.controls.isLocked)return;const t=e.movementX||e.mozMovementX||e.webkitMovementX||0,i=e.movementY||e.mozMovementY||e.webkitMovementY||0;if(this.euler.setFromQuaternion(this.camera.quaternion,"YXZ"),this.euler.y-=t*.002,this.euler.x-=i*.002,this.state.introAnimating&&this.initialIntroYaw!==null&&this.initialIntroPitch!==null){const n=15*Math.PI/180;this.euler.y=Math.max(this.initialIntroYaw-n,Math.min(this.initialIntroYaw+n,this.euler.y)),this.euler.x=Math.max(this.initialIntroPitch-n,Math.min(this.initialIntroPitch+n,this.euler.x))}this.euler.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,this.euler.x)),this.camera.quaternion.setFromEuler(this.euler)}_onKeyUp(e){if(this.enabled&&!(this.state.isPlayingArcade||this.state.isZiplining||this.state.introAnimating))switch(e.code){case"KeyW":this.input.moveForward=!1;break;case"KeyA":this.input.moveLeft=!1;break;case"KeyS":this.input.moveBackward=!1;break;case"KeyD":this.input.moveRight=!1;break;case"Space":this.input.moveUp=!1;break;case"KeyC":this.input.moveDown=!1;break;case"ShiftLeft":case"ShiftRight":this.state.isSprinting=!1;break}}_onMouseWheel(e){if(!this.enabled||!this.state.isFlying||this.state.introAnimating)return;e.preventDefault();const t=e.deltaY*-.005;this.input.scrollValue+=t,this.input.scrollValue=Math.max(-1,Math.min(1,this.input.scrollValue))}resetMovementInput(){this.input.moveForward=!1,this.input.moveBackward=!1,this.input.moveLeft=!1,this.input.moveRight=!1,this.input.moveUp=!1,this.input.moveDown=!1,this.input.scrollValue=0,this.velocity.set(0,0,0),this.verticalVelocity=0}setEnabled(e){this.enabled=e,this.enabled||this.resetMovementInput()}setState(e){const t={...this.state};if(this.state={...this.state,...e},this.state.introAnimating&&!t.introAnimating?(this.euler.setFromQuaternion(this.camera.quaternion,"YXZ"),this.initialIntroYaw=this.euler.y,this.initialIntroPitch=this.euler.x):!this.state.introAnimating&&t.introAnimating&&(this.initialIntroYaw=null,this.initialIntroPitch=null),e.inVehicle!==void 0&&(this.state.isFlying=this.state.inVehicle),e.isFlying!==void 0&&!e.isFlying){const i=this.physicsUtils.checkGround(this.camera.position,me.PLAYER_HEIGHT);this.state.isOnGround=i.isOnGround,this.verticalVelocity=0}e.isPlayingArcade!==void 0&&e.isPlayingArcade&&(this.controls&&this.controls.unlock(),this.resetMovementInput()),e.isZiplining!==void 0&&this.resetMovementInput(),e.inVehicle!==void 0&&(this.uiManager.setCrosshairState(e.inVehicle?"in-vehicle":"on-foot"),this.isTouchDevice&&(document.getElementById("jump-button").style.display=e.inVehicle?"none":"flex")),this.controls&&this.controls.isLocked,this.state.inVehicle?this.isTouchDevice:this.isTouchDevice}getState(){return this.state}updateTouch(e){if(!this.enabled)return;const{leftStick:t,rightStick:i,sprint:n,jump:s}=e,a=this.state.isFlying?me.TOUCH_CONTROLS.IN_VEHICLE:me.TOUCH_CONTROLS.ON_FOOT;if(s&&!this.state.isFlying&&this.state.isOnGround&&(this.verticalVelocity=me.PLAYER_JUMP_STRENGTH,this.state.isOnGround=!1),this.state.isFlying||(this.state.isSprinting=n),i&&i.distance>0){const o=i.distance/50*a.RIGHT_STICK.SENSITIVITY;if(o>a.RIGHT_STICK.DEADZONE){const l=i.angle.radian,c=Math.cos(l)*o,h=Math.sin(l)*o;this.euler.setFromQuaternion(this.camera.quaternion),this.euler.y-=c*.1,this.euler.x+=h*.1,this.euler.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,this.euler.x)),this.camera.quaternion.setFromEuler(this.euler)}}if(t&&t.distance>0){const o=t.distance/50*a.LEFT_STICK.SENSITIVITY;if(o>a.LEFT_STICK.DEADZONE){const l=t.angle.radian;this.state.isFlying?(this.input.moveForward=Math.sin(l)*o>.1,this.input.moveBackward=Math.sin(l)*o<-.1,this.input.moveLeft=Math.cos(l)*o<-.1,this.input.moveRight=Math.cos(l)*o>.1):(this.camera.getWorldDirection(this.touchForward),this.touchForward.y=0,this.touchForward.normalize(),this.touchRight.crossVectors(this.camera.up,this.touchForward).normalize(),this.touchMoveDirection.set(0,0,0),this.touchMoveDirection.addScaledVector(this.touchForward,Math.sin(l)*o),this.touchMoveDirection.addScaledVector(this.touchRight,Math.cos(l)*o),this.direction.z=this.touchMoveDirection.dot(this.touchForward),this.direction.x=this.touchMoveDirection.dot(this.touchRight))}}else this.input.moveForward=!1,this.input.moveBackward=!1,this.input.moveLeft=!1,this.input.moveRight=!1,this.state.isFlying||this.direction.set(0,0,0);!this.isTouchDevice&&(this.direction.z!==0||this.direction.x!==0)&&this.direction.normalize()}update(e){if(this.currentVehicle){let t=!(this.controls&&this.controls.isLocked||this.isTouchDevice);this.state.introAnimating&&(t=!1),this.currentVehicle.updateEffects(e,t)}if(this.state.introAnimating){if(this.initialIntroYaw!==null&&this.initialIntroPitch!==null){this.euler.setFromQuaternion(this.camera.quaternion,"YXZ");const t=15*Math.PI/180;this.euler.y=Math.max(this.initialIntroYaw-t,Math.min(this.initialIntroYaw+t,this.euler.y)),this.euler.x=Math.max(this.initialIntroPitch-t,Math.min(this.initialIntroPitch+t,this.euler.x)),this.euler.x=Math.max(Math.PI/2-this.maxPolarAngle,Math.min(Math.PI/2-this.minPolarAngle,this.euler.x)),this.camera.quaternion.setFromEuler(this.euler)}return}if(this.enabled){if(this.isTouchDevice){if(this.state.isPlayingArcade)return}else if(this.controls&&!this.controls.isLocked||this.state.isPlayingArcade||this.state.isZiplining)return;this.state.inVehicle?(this.currentVehicle&&this.currentVehicle.updateMovement(e,this.input),!this.isTouchDevice&&this.input.scrollValue!==0&&(this.input.scrollValue-=this.input.scrollValue*3*e,Math.abs(this.input.scrollValue)<.01&&(this.input.scrollValue=0))):this._updatePlayerMovement(e)}}_updatePlayerMovement(e){const t=me.PLAYER_MOVE_SPEED,i=me.PLAYER_SPRINT_MULTIPLIER,n=this.state.isSprinting?t*i:t,s=me.GRAVITY,a=me.PLAYER_HEIGHT;let o=new M;if(this.state.isFlying){this.verticalVelocity=0;let d=0;this.input.moveUp&&(d+=1),this.input.moveDown&&(d-=1),o.y=d*me.VEHICLE_FLY_SPEED*e}else this.verticalVelocity-=s*e,o.y=this.verticalVelocity*e;const l=new M;this.camera.getWorldDirection(l),l.y=0,l.lengthSq()===0?l.z=-1:l.normalize();const c=new M;c.setFromMatrixColumn(this.camera.matrixWorld,0),c.y=0,c.lengthSq()===0?c.crossVectors(this.camera.up,l).normalize():c.normalize();const h=n*e;(!this.isTouchDevice||this.state.isFlying)&&(this.direction.z=Number(this.input.moveForward)-Number(this.input.moveBackward),this.direction.x=Number(this.input.moveRight)-Number(this.input.moveLeft)),(this.direction.z!==0||this.direction.x!==0)&&(this.isTouchDevice||this.direction.normalize()),this.direction.z!==0&&o.addScaledVector(l,this.direction.z*h),this.direction.x!==0&&o.addScaledVector(c,this.direction.x*h);let u=this.camera.position.clone();if(o.lengthSq()>0){const d=this.physicsUtils.checkCollisionAndSlide(this.camera.position,o,this.collisionRadius,this.physicsUtils.collidableMeshes,e);u.copy(d.adjustedPosition),d.collided&&o.y>0&&u.y<=this.camera.position.y+o.y*.1&&(this.verticalVelocity=0)}if(this.camera.position.copy(u),!this.state.isFlying){const d=this.physicsUtils.checkGround(this.camera.position,a);d.isOnGround?this.verticalVelocity<=.01?(this.state.isOnGround=!0,this.verticalVelocity=0,this.camera.position.y=d.point.y+a):this.state.isOnGround=!1:this.state.isOnGround=!1}this._checkRespawn()}_checkRespawn(){if(this.camera.position.y<me.RESPAWN_Y_THRESHOLD){console.log("Player fell off, respawning...");const e=this.physicsUtils.getRespawnPoint();this.resetPlayerPosition(e)}}resetPlayerPosition(e=null,t=null){if(this.elevatorManager&&this.elevatorManager.resetElevator(),e)this.camera.position.copy(e);else{const i=this.physicsUtils.getSpawnPoint();this.camera.position.copy(i)}if(t)this.camera.lookAt(t);else{const i=this.camera.position.clone().setZ(this.camera.position.z-10);this.camera.lookAt(i)}this.verticalVelocity=0,this.state.isOnGround=this.physicsUtils.checkGround(this.camera.position,me.PLAYER_HEIGHT),this.resetMovementInput()}enterVehicle(e){this.state.inVehicle||(this.currentVehicle=e,this.setState({inVehicle:!0}),this.resetMovementInput(),this.currentVehicle.enterVehicle())}exitVehicle(e,t){if(!(!this.state.inVehicle||!this.currentVehicle)){if(this.currentVehicle.setControlsLocked(!1),this.currentVehicle.exitVehicle(),this.currentVehicle=null,this.camera.position.copy(e),this.camera.position.y+=me.PLAYER_HEIGHT,t)this.camera.lookAt(t);else{const i=new M(e.x,e.y+me.PLAYER_HEIGHT,e.z-10);this.camera.lookAt(i)}this.verticalVelocity=0,this.setState({inVehicle:!1})}}enterArcadeMode(e){this.setState({isPlayingArcade:!0})}exitArcadeMode(e){this.setState({isPlayingArcade:!1}),e?(this.camera.position.copy(e.position),this.camera.quaternion.copy(e.quaternion)):this.resetPlayerPosition(),this.state.isOnGround=this.physicsUtils.checkGround(this.camera.position,me.PLAYER_HEIGHT)}teleport(e,t=null){this.camera.position.copy(e),this.velocity.set(0,0,0),this.verticalVelocity=0,this.setState({inVehicle:!1,isFlying:!1,isZiplining:!1}),this.currentVehicle=null,t&&this.camera.lookAt(t)}}class wv{constructor(e){this.vehicleMesh=e,this.thrusters=[],this.thrusterEffects=[],this.time=0,this.visualVelocity=new M,this.params={pulseSpeed:100,minSize:.22,maxSize:.23,color:"#88ffff",intensity:2,idleOpacity:.5,axialStretch:.04,strafeStretch:.03,turnStretch:50,idleHorizontalStretch:3.6},this.findThrusterObjects(),this.createThrusterEffects()}findThrusterObjects(){this.vehicleMesh.traverse(e=>{e.isObject3D&&e.name.startsWith("thruster")&&this.thrusters.push(e)})}createThrusterEffects(){this.thrusterEffects.forEach(t=>{this.vehicleMesh.remove(t.sprite),t.sprite.material.map.dispose(),t.sprite.material.dispose()}),this.thrusterEffects=[];const e=this._createThrusterTexture();this.thrusters.forEach(t=>{const i=new bh({map:e,color:new we(this.params.color).multiplyScalar(this.params.intensity),blending:Gs,depthWrite:!1,transparent:!0,opacity:this.params.idleOpacity}),n=new Hg(i);n.position.copy(t.position),this.vehicleMesh.add(n);let s="none";const a=t.name.toLowerCase();a.includes("_left")&&(s="left"),a.includes("_right")&&(s="right"),this.thrusterEffects.push({sprite:n,side:s,basePosition:t.position.clone()})})}_createThrusterTexture(){const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),i=t.createRadialGradient(64,64,0,64,64,64);return i.addColorStop(0,"rgba(200, 255, 255, 1)"),i.addColorStop(.3,"rgba(100, 200, 255, 0.8)"),i.addColorStop(1,"rgba(0, 100, 150, 0)"),t.fillStyle=i,t.fillRect(0,0,128,128),new e0(e)}update(e,t,i){if(this.thrusterEffects.length===0)return;const n=1-Math.exp(-15*e);this.visualVelocity.lerp(t,n);const s=Math.min(Math.abs(this.visualVelocity.x)+Math.abs(this.visualVelocity.y),5)/5;this.time+=e*this.params.pulseSpeed;const a=this.params.maxSize-this.params.minSize,o=(Math.sin(this.time)+1)/2,l=this.params.minSize+o*a;this.thrusterEffects.forEach(({sprite:c,side:h,basePosition:u})=>{const d=new we(this.params.color);c.material.color.copy(d).multiplyScalar(this.params.intensity),c.material.opacity=zi.lerp(this.params.idleOpacity,1,s);const A=this.visualVelocity.x,g=this.visualVelocity.y,E=this.visualVelocity.z,p=3,m=A>.1?A:0,C=g>.1?g:0,x=Math.max(m,C),I=A<-.1?Math.abs(A):0,L=g<-.1?Math.abs(g):0,b=Math.max(I,L),B=x-b;c.visible=!0;let G=l,S=l;if((h==="left"||h==="right")&&(G*=this.params.idleHorizontalStretch),c.position.copy(u),Math.abs(B)>.01){const O=1+Math.min(Math.abs(B)*this.params.axialStretch,p),X=S;S*=O;const P=(S-X)/2;c.position.y+=P*(B>0?-1:1)}let y=0;if(E>.1&&h==="left"&&(y+=E),E<-.1&&h==="right"&&(y+=Math.abs(E)),i>.01&&h==="left"&&(y+=i*this.params.turnStretch),i<-.01&&h==="right"&&(y+=Math.abs(i)*this.params.turnStretch),y>0){const O=1+Math.min(y*this.params.strafeStretch,p);G*=O}c.scale.set(G,S,1)})}resetToIdle(){this.thrusterEffects.length!==0&&(this.visualVelocity.set(0,0,0),this.thrusterEffects.forEach(({sprite:e,side:t,basePosition:i})=>{const n=this.params.minSize;let s=n,a=n;(t==="left"||t==="right")&&(s*=this.params.idleHorizontalStretch),e.position.copy(i),e.scale.set(s,a,1),e.material.opacity=this.params.idleOpacity}))}updateMaterialColor(){}}class du{constructor(e,t,i,n){this.scene=e,this.camera=t,this.physicsUtils=i,this.assetLoader=n,this.debugManager=null,this.yawDelta=0,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.vehicleMesh=null,this.thrusterManager=null,this.velocity=new M,this.targetVelocity=new M,this.controlsLocked=!1,this.ignoreInputFirstFrame=!1,this.baseFOV=75,this.maxFOV=90,this.moveDirection=new M,this.flyDirection=new M,this.rightDirection=new M,this.previousPosition=new M,this.collisionRadius=2,this.collisionEnabled=!0,this.isLanding=!1,this.landingStartPosition=new M,this.landingStartQuaternion=new lt,this.landingTargetPosition=new M,this.landingTargetQuaternion=new lt,this.landingDuration=2,this.landingProgress=0,this.onLandingComplete=null,this.landingTarget=new M,this.isPostIntroTransition=!1,this.postIntroTransitionDuration=0,this.postIntroTransitionProgress=0,this.postIntroTransitionStartQuaternion=new lt,this.yAxis=new M(0,1,0),this.vehicleForward=new M,this.targetForward=new M,this.tempQuaternion=new lt,this.rotationFix=new lt}easeOutCubic(e){return 1-Math.pow(1-e,3)}async initializeModel(e){const t=e.getObjectByName("flying-car");if(t){this.vehicleMesh=t.clone();const i=await this.assetLoader.ktx2Loader.loadAsync(`assets/${this.assetLoader.quality}/flying-car.ktx2`);i.flipY=!1;const n=new Ci({map:i,roughnessMap:i,emissiveMap:i,metalness:1,emissive:16777215,emissiveIntensity:.5});this.vehicleMesh.material=n,this.scene.add(this.vehicleMesh),this.vehicleMesh.visible=!0,this.thrusterManager=new wv(this.vehicleMesh),t.visible=!1}else console.error("Player vehicle model 'flying-car' not found. Creating placeholder."),this.vehicleMesh=this._createPlaceholderMesh(),this.scene.add(this.vehicleMesh)}_createPlaceholderMesh(){const e=new wi(2,1,4),t=new ei({color:16711680,wireframe:!0}),i=new Mt(e,t);return i.position.set(0,1,0),i}setInitialPosition(e){if(this.vehicleMesh)if(e){this.vehicleMesh.position.copy(e);const t=new lt().copy(this.camera.quaternion),i=new lt().setFromAxisAngle(new M(0,1,0),Math.PI/2);t.multiply(i),this.vehicleMesh.quaternion.copy(t),this.syncCameraToVehicle()}else console.warn("setInitialPosition called with no position.")}enterVehicle(){if(!this.vehicleMesh)return;this.vehicleMesh.visible=!0,this.ignoreInputFirstFrame=!0;const e=this.vehicleMesh.quaternion.clone(),i=new lt().setFromAxisAngle(new M(0,1,0),Math.PI/2).invert(),n=e.multiply(i);this.camera.quaternion.copy(n),this.syncCameraToVehicle()}exitVehicle(){this.vehicleMesh}updateEffects(e,t=!1){if(this.thrusterManager&&this.vehicleMesh){if(t){this.thrusterManager.update(e,new M(0,0,0),0);return}const i=this.velocity.clone().applyQuaternion(this.vehicleMesh.quaternion.clone().invert());this.thrusterManager.update(e,i,this.yawDelta)}}updateMovement(e,t){if(!this.vehicleMesh)return;if(this.isPostIntroTransition&&this._updatePostIntroTransition(e),this.isLanding){this._updateLandingAnimation(e);return}if(this.controlsLocked){let p=this.velocity.clone().multiplyScalar(e);if(this.collisionEnabled){const m=this.physicsUtils.checkCollisionAndSlide(this.vehicleMesh.position,p,this.collisionRadius,this.physicsUtils.vehicleCollidableMeshes,e);this.vehicleMesh.position.copy(m.adjustedPosition)}else this.vehicleMesh.position.add(p);this.syncCameraToVehicle();return}this.ignoreInputFirstFrame&&(this.velocity.set(0,0,0),this.targetVelocity.set(0,0,0),this.ignoreInputFirstFrame=!1);const{moveForward:i,moveBackward:n,moveLeft:s,moveRight:a,moveUp:o,moveDown:l,scrollValue:c}=t,h=me.VEHICLE_FLY_SPEED;this.moveDirection.set(0,0,0),this.camera.getWorldDirection(this.flyDirection),this.rightDirection.crossVectors(this.camera.up,this.flyDirection).normalize(),i&&this.moveDirection.add(this.flyDirection),n&&this.moveDirection.sub(this.flyDirection),s&&this.moveDirection.add(this.rightDirection),a&&this.moveDirection.sub(this.rightDirection),this.moveDirection.lengthSq()>0?this.targetVelocity.copy(this.moveDirection).normalize().multiplyScalar(h):this.targetVelocity.set(0,0,0),o?this.targetVelocity.y=h:l?this.targetVelocity.y=-h:c&&c!==0&&(this.targetVelocity.y=h*c);const u=1-Math.exp(-2*e);this.velocity.lerp(this.targetVelocity,u);const d=this.velocity.clone().projectOnVector(this.flyDirection).length(),A=Math.min(d/h,1),g=this.baseFOV+(this.maxFOV-this.baseFOV)*A;this.camera.fov=zi.lerp(this.camera.fov,g,.1),this.camera.updateProjectionMatrix(),this.previousPosition.copy(this.vehicleMesh.position);let E=this.velocity.clone().multiplyScalar(e);if(this.collisionEnabled){if(E.lengthSq()>0){const p=this.physicsUtils.checkCollisionAndSlide(this.vehicleMesh.position,E,this.collisionRadius,this.physicsUtils.vehicleCollidableMeshes,e);if(this.vehicleMesh.position.copy(p.adjustedPosition),p.collided){const m=p.surfaceNormal;m&&this.velocity.reflect(m).multiplyScalar(.5)}}}else E.lengthSq()>0&&this.vehicleMesh.position.add(E);this.syncCameraToVehicle()}startPostIntroTransition(e){this.isPostIntroTransition=!0,this.postIntroTransitionDuration=e,this.postIntroTransitionProgress=0,this.postIntroTransitionStartQuaternion.copy(this.vehicleMesh.quaternion)}_updatePostIntroTransition(e){if(!this.isPostIntroTransition)return;this.postIntroTransitionProgress+=e/this.postIntroTransitionDuration;const t=this.easeOutCubic(this.postIntroTransitionProgress),i=new lt().copy(this.camera.quaternion),n=new lt().setFromAxisAngle(new M(0,1,0),Math.PI/2);i.multiply(n),this.vehicleMesh.quaternion.slerpQuaternions(this.postIntroTransitionStartQuaternion,i,t),this.postIntroTransitionProgress>=1&&(this.isPostIntroTransition=!1,this.vehicleMesh.quaternion.copy(i))}_updateLandingAnimation(e){if(!this.isLanding)return;this.landingProgress+=e/this.landingDuration;const t=this.easeOutCubic(this.landingProgress);if(this.landingProgress>=1){this.landingProgress=1,this.isLanding=!1,this.vehicleMesh.position.copy(this.landingTargetPosition),this.vehicleMesh.quaternion.copy(this.landingTargetQuaternion),this.thrusterManager&&this.thrusterManager.resetToIdle(),this.onLandingComplete&&this.onLandingComplete();return}this.vehicleMesh.position.lerpVectors(this.landingStartPosition,this.landingTargetPosition,t),this.vehicleMesh.quaternion.slerpQuaternions(this.landingStartQuaternion,this.landingTargetQuaternion,t),this.syncCameraToVehicle()}syncCameraToVehicle(){if(!this.vehicleMesh)return;if(!this.isPostIntroTransition){const n=new lt().copy(this.camera.quaternion),s=new lt().setFromAxisAngle(new M(0,1,0),Math.PI/2);n.multiply(s);const a=this.vehicleMesh.quaternion.clone().invert().multiply(n),o=new Zt().setFromQuaternion(a,"YXZ");this.yawDelta=-o.y;const l=2,c=Math.PI/12,h=zi.clamp(this.yawDelta*l,-c,c),u=new lt().setFromAxisAngle(new M(1,0,0),h);n.multiply(u),this.vehicleMesh.quaternion.slerp(n,this.isTouchDevice?.1:.02)}const t=new M(me.VEHICLE_CAMERA_OFFSET.x,me.VEHICLE_CAMERA_OFFSET.y,me.VEHICLE_CAMERA_OFFSET.z).clone().applyQuaternion(this.vehicleMesh.quaternion);this.camera.position.copy(this.vehicleMesh.position).add(t)}startLandingSequence(e,t,i={}){if(!this.vehicleMesh||this.isLanding)return;if(this.isLanding=!0,this.landingProgress=0,this.onLandingComplete=t,i.isRaceLanding){const s=this.getVelocity().length(),a=me.VEHICLE_LANDING_DECELERATION_FACTOR,o=Math.max(2.5,s/a);this.landingDuration=Math.min(o,8)}else this.landingDuration=i.duration||2;this.landingStartPosition.copy(this.vehicleMesh.position),this.landingStartQuaternion.copy(this.vehicleMesh.quaternion),e.getWorldPosition(this.landingTargetPosition),e.getWorldQuaternion(this.tempQuaternion),this.vehicleForward.set(0,0,-1).applyQuaternion(this.landingStartQuaternion).normalize(),this.targetForward.set(0,0,-1).applyQuaternion(this.tempQuaternion).normalize();const n=this.vehicleForward.angleTo(this.targetForward);Math.abs(n)>Math.PI/2&&(this.rotationFix.setFromAxisAngle(this.yAxis,Math.PI),this.tempQuaternion.multiply(this.rotationFix)),this.landingTargetQuaternion.copy(this.tempQuaternion)}getPosition(){return this.vehicleMesh?this.vehicleMesh.position:new M}getMesh(){return this.vehicleMesh}setPosition(e,t){this.vehicleMesh&&(this.vehicleMesh.position.copy(e),t&&this.vehicleMesh.quaternion.copy(t))}setCollisionEnabled(e){this.collisionEnabled=e}setControlsLocked(e){this.controlsLocked=e,e&&this.targetVelocity.set(0,0,0)}setAutopilotVelocity(e){this.controlsLocked&&this.velocity.copy(e)}getVelocity(){return this.velocity}}class Tv{constructor(e,t){this.scene=e,this.uiManager=t,this.instancedCoinMesh=null,this.coinInstances=[],this.dummy=new Ye,this.collectedCoins=0,this.totalCoins=0,this.raceRewardCoinIndex=-1}initializeCoins(e){const t=e.getObjectByName(me.MESH_NAME_COIN),i=[];if(e.traverse(l=>{l.name.startsWith(me.MESH_NAME_COIN_INSTANCE)&&i.push(l)}),!t){console.warn("CollectiblesManager: Template coin mesh 'Coin' not found. No coins will be generated.");return}if(i.length===0){console.warn("CollectiblesManager: No 'Coin-Instance' markers found. No coins will be generated.");return}const n=e.getObjectByName(me.MESH_NAME_RACE_END);if(n){const l=new M;n.getWorldPosition(l);let c=1/0;for(let h=0;h<i.length;h++){const u=i[h],d=new M;u.getWorldPosition(d);const A=d.distanceToSquared(l);A<c&&(c=A,this.raceRewardCoinIndex=h)}}t.visible=!1,i.forEach(l=>l.visible=!1);const s=i.length,a=t.geometry,o=this._createGradientMaterial(a);this.instancedCoinMesh=new Wi(a,o,s),this.instancedCoinMesh.name="Collectibles_Coins",this.scene.add(this.instancedCoinMesh),this.coinInstances=[];for(let l=0;l<s;l++){const c=i[l],h=new M;c.getWorldPosition(h);const u=l===this.raceRewardCoinIndex;this.coinInstances.push({visible:!u,isRaceReward:u,isCollected:!1,position:h,rotationY:0}),this.dummy.position.copy(h),u?this.dummy.scale.set(0,0,0):this.dummy.scale.set(1,1,1),this.dummy.updateMatrix(),this.instancedCoinMesh.setMatrixAt(l,this.dummy.matrix)}this.instancedCoinMesh.instanceMatrix.needsUpdate=!0,this.totalCoins=s,this.collectedCoins=0,this.uiManager.updateCoinCounter(this.collectedCoins,this.totalCoins),this.raceRewardCoinIndex}_createGradientMaterial(e){e.computeBoundingBox();const t=e.boundingBox,i=new Ci({color:16766720,emissive:16766720,emissiveIntensity:.1,metalness:.8,roughness:.2});return i.onBeforeCompile=n=>{n.uniforms.topColor={value:new we("#ffee82")},n.uniforms.bottomColor={value:new we("#fba91f")},n.uniforms.emissiveTopColor={value:new we("#ffee82")},n.uniforms.emissiveBottomColor={value:new we("#fba91f")},n.uniforms.customEmissiveIntensity={value:.25},n.vertexShader=`varying float vUvY;
`+n.vertexShader,n.vertexShader=n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
                vUvY = (position.y - ${t.min.y}) / (${t.max.y} - ${t.min.y});`),n.fragmentShader=`
                uniform vec3 topColor;
                uniform vec3 bottomColor;
                uniform vec3 emissiveTopColor;
                uniform vec3 emissiveBottomColor;
                uniform float customEmissiveIntensity; // Declare our custom uniform
                varying float vUvY;
            
`+n.fragmentShader,n.fragmentShader=n.fragmentShader.replace("#include <color_fragment>",`
                #include <color_fragment>
                diffuseColor.rgb = mix(bottomColor, topColor, vUvY);
                `),n.fragmentShader=n.fragmentShader.replace("#include <emissivemap_fragment>",`
                vec3 emissiveColor = mix(emissiveBottomColor, emissiveTopColor, vUvY);
                totalEmissiveRadiance += emissiveColor * customEmissiveIntensity;
                `)},i}update(e,t){if(!this.instancedCoinMesh)return;const i=me.COIN_ROTATION_SPEED,n=me.COLLECTION_DISTANCE*me.COLLECTION_DISTANCE;let s=!1,a=!1;for(let o=0;o<this.coinInstances.length;o++){const l=this.coinInstances[o];l.visible&&!l.isCollected&&t.distanceToSquared(l.position)<n&&(l.isCollected=!0,this.collectedCoins++,s=!0),l.isCollected||!l.visible?this.dummy.scale.set(0,0,0):(l.rotationY+=i*e,this.dummy.rotation.y=l.rotationY,this.dummy.scale.set(1,1,1)),this.dummy.position.copy(l.position),this.dummy.updateMatrix(),this.instancedCoinMesh.setMatrixAt(o,this.dummy.matrix),a=!0}s&&this.uiManager.updateCoinCounter(this.collectedCoins,this.totalCoins),a&&(this.instancedCoinMesh.instanceMatrix.needsUpdate=!0)}getCollectedCoinCount(){return this.collectedCoins}spendCoins(e){return this.collectedCoins>=e?(this.collectedCoins-=e,this.totalCoins-=e,this.uiManager.updateCoinCounter(this.collectedCoins,this.totalCoins),!0):!1}revealRaceRewardCoin(){if(this.raceRewardCoinIndex===-1||!this.instancedCoinMesh)return;const e=this.coinInstances[this.raceRewardCoinIndex];e&&!e.visible&&(e.visible=!0,this.uiManager.updateCoinCounter(this.collectedCoins,this.totalCoins))}resetRaceRewardCoin(){if(this.raceRewardCoinIndex===-1||!this.instancedCoinMesh)return;const e=this.coinInstances[this.raceRewardCoinIndex];e&&(e.isCollected&&this.collectedCoins--,e.isCollected=!1,e.visible=!1,this.dummy.position.copy(e.position),this.dummy.scale.set(0,0,0),this.dummy.updateMatrix(),this.instancedCoinMesh.setMatrixAt(this.raceRewardCoinIndex,this.dummy.matrix),this.instancedCoinMesh.instanceMatrix.needsUpdate=!0,this.uiManager.updateCoinCounter(this.collectedCoins,this.totalCoins))}collectAllCoins(){this.collectedCoins=this.totalCoins,this.uiManager.updateCoinCounter(this.collectedCoins,this.totalCoins);for(let e=0;e<this.coinInstances.length;e++)this.coinInstances[e].visible&&(this.coinInstances[e].visible=!1,this.coinInstances[e].isCollected=!0,this.dummy.scale.set(0,0,0),this.dummy.updateMatrix(),this.instancedCoinMesh.setMatrixAt(e,this.dummy.matrix));this.instancedCoinMesh.instanceMatrix.needsUpdate=!0}}class bv{constructor(e,t,i,n,s,a,o){this.scene=e,this.camera=t,this.uiManager=i,this.playerController=n,this.engine=s,this.assetLoader=a,this.audioManager=o,this.savedCameraState=null,this.targetArcade=null,this.arcadeMeshes=[]}async initializeArcades(e){const t=e.getObjectByName(me.MESH_PREFIX_ARCADE),i=[];if(e.traverse(A=>{A.name.startsWith(me.MESH_PREFIX_ARCADE_INSTANCE)&&i.push(A)}),!t){console.warn("ArcadeManager: Template arcade mesh 'Arcade' not found. No arcades will be generated.");return}if(i.length===0){console.warn("ArcadeManager: No 'Arcade-Instance' markers found. No arcades will be generated.");return}t.visible=!1,i.forEach(A=>A.visible=!1);const n=await this.assetLoader.ktx2Loader.loadAsync(`assets/${this.assetLoader.quality}/Arcade.ktx2`);n.flipY=!1;const s=n.clone();s.repeat.set(.5,.5),s.offset.set(0,0),s.needsUpdate=!0;const a=t.material.clone();a.map=s,a.emissiveMap=s,a.emissive=new we(16777215),a.emissiveIntensity=.5;const o=n.clone();o.repeat.set(.5,.5),o.offset.set(.5,0),o.needsUpdate=!0;const l=t.material.clone();l.map=o,l.emissiveMap=o,l.emissive=new we(16777215),l.emissiveIntensity=.5;const c=n.clone();c.repeat.set(.5,.5),c.offset.set(0,.5),c.needsUpdate=!0;const h=t.material.clone();h.map=c,h.emissiveMap=c,h.emissive=new we(16777215),h.emissiveIntensity=.5;const u=n.clone();u.repeat.set(.5,.5),u.offset.set(.5,.5),u.needsUpdate=!0;const d=t.material.clone();d.map=u,d.emissiveMap=u,d.emissive=new we(16777215),d.emissiveIntensity=.5,i.forEach(A=>{const g=t.clone();g.name=A.name;const E=new M;A.getWorldPosition(E);const p=new lt;A.getWorldQuaternion(p),g.position.copy(E),g.quaternion.copy(p),A.name==="Arcade-Instance-A"?g.material=a:A.name==="Arcade-Instance-B"?g.material=l:A.name==="Arcade-Instance-C"?g.material=h:A.name==="Arcade-Instance-D"?g.material=d:g.material=t.material,g.userData={unlocked:!1},g.visible=!0,this.scene.add(g),this.arcadeMeshes.push(g)})}getClosestArcade(e){let t=1/0,i=null;for(const n of this.arcadeMeshes){const s=e.distanceToSquared(n.position);s<t&&(t=s,i=n)}return i&&t<me.INTERACTION_DISTANCE*me.INTERACTION_DISTANCE?i:null}startArcadeGame(e){if(this.playerController.getState().isPlayingArcade)return;this.audioManager.fadeOutMusic(2e3),this.targetArcade=e,this.engine.pause(),this.savedCameraState={position:this.camera.position.clone(),quaternion:this.camera.quaternion.clone()},this.playerController.enterArcadeMode(),this._moveCameraToArcade(),this.uiManager.hideMainUI();const i={"Arcade-Instance-A":"/games/geometron/dist/index.html","Arcade-Instance-B":"/games/rocketpunk/index.html","Arcade-Instance-C":"/games/fuji-run/index.html","Arcade-Instance-D":"/games/stardust-zero/index.html"}[e.name];if(i)this.uiManager.showArcadeModal(!0,i);else{console.warn(`No game URL found for arcade: ${e.name}`),this.exitArcadeMode();return}}_moveCameraToArcade(){if(!this.targetArcade)return;const e=this.targetArcade.position,t=this.targetArcade.quaternion,i=new M(me.ARCADE_CAMERA_POSITION_OFFSET.x,me.ARCADE_CAMERA_POSITION_OFFSET.y,me.ARCADE_CAMERA_POSITION_OFFSET.z),n=new M(me.ARCADE_CAMERA_TARGET_OFFSET.x,me.ARCADE_CAMERA_TARGET_OFFSET.y,me.ARCADE_CAMERA_TARGET_OFFSET.z),s=i.clone().applyQuaternion(t).add(e),a=n.clone().applyQuaternion(t).add(e);this.camera.position.copy(s),this.camera.lookAt(a),this.camera.updateProjectionMatrix()}exitArcadeMode(){this.playerController.getState().isPlayingArcade&&(this.engine.resume(),this.audioManager.fadeInMusic(2e3),this.targetArcade=null,this.uiManager.showArcadeModal(!1),this.playerController.exitArcadeMode(this.savedCameraState),this.savedCameraState=null,this.uiManager.showMainUI())}unlockArcade(e){const t=this.arcadeMeshes.find(i=>i.name===e.name);t&&(t.userData.unlocked=!0)}}class Bv{constructor(e,t,i,n,s,a,o,l,c,h,u,d){this.camera=e,this.uiManager=t,this.physicsUtils=i,this.playerController=n,this.vehicleController=s,this.arcadeManager=a,this.collectiblesManager=o,this.elevatorManager=l,this.ziplineManager=c,this.raceManager=h,this.engine=u,this.cityManager=d,this.raycaster=new Gh,this.interactionTarget=null,this.canInteract=!1,this.tempVec=new M,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.cheatCodeBuffer="",this.cheatCode="cash",document.addEventListener("keydown",this._onKeyDown.bind(this)),this.isTouchDevice&&document.addEventListener("touchend",this._onTouchEnd.bind(this),{passive:!1}),document.addEventListener("contextmenu",A=>A.preventDefault())}_onTouchEnd(e){const t=e.target;t.closest(".joystick-zone")||t.closest(".ui-element")||this.canInteract&&this.interactionTarget&&this._performInteraction(this.interactionTarget)}_onKeyDown(e){e.code.startsWith("Key")&&(this.cheatCodeBuffer+=e.key.toLowerCase(),this.cheatCodeBuffer=this.cheatCodeBuffer.slice(-this.cheatCode.length),this.cheatCodeBuffer===this.cheatCode&&(this.collectiblesManager.collectAllCoins(),this.cheatCodeBuffer="")),e.code==="KeyE"&&this.canInteract&&this.interactionTarget&&this._performInteraction(this.interactionTarget)}update(){const e=this.playerController.getState();if(e.isPlayingArcade||e.isZiplining){this.uiManager.showInteractionPrompt(!1),this.interactionTarget=null,this.canInteract=!1;return}let t=null,i="",n=!1;if(e.inVehicle){if(this.playerController.currentVehicle!==this.raceManager.raceCar){const s=this.physicsUtils.getDockMesh();if(s){const a=this.vehicleController.getPosition();s.getWorldPosition(this.tempVec),a.distanceToSquared(this.tempVec)<me.DOCK_EXIT_DISTANCE*me.DOCK_EXIT_DISTANCE&&(t={type:"dock",mesh:s},i=this.isTouchDevice?"Tap to Land Vehicle":"Press E to land vehicle",n=!0)}}}else{const s=this.camera.position;let a=1/0;if(this.ziplineManager){const u=this.ziplineManager.getZiplineEndpoints();for(const d of u){this.tempVec.set(d.x,d.y,d.z);const A=s.distanceToSquared(this.tempVec);A<me.INTERACTION_DISTANCE*me.INTERACTION_DISTANCE&&A<a&&(a=A,t={type:"zipline",ziplineNumber:d.ziplineNumber})}}const o=this.physicsUtils.getElevatorObject();if(o){o.getWorldPosition(this.tempVec);const u=s.distanceToSquared(this.tempVec);u<me.ELEVATOR_INTERACTION_DISTANCE*me.ELEVATOR_INTERACTION_DISTANCE&&u<a&&(a=u,t={type:"elevator",mesh:o})}const l=this.arcadeManager.getClosestArcade(s);if(l){const u=s.distanceToSquared(l.position);u<me.INTERACTION_DISTANCE*me.INTERACTION_DISTANCE&&u<a&&(a=u,t={type:"arcade",instance:l})}if(this.raceManager.getRaceCar()&&!this.raceManager.raceState.isActive){const u=this.raceManager.raceCar.getPosition(),d=s.distanceToSquared(u);d<me.VEHICLE_ENTER_DISTANCE*me.VEHICLE_ENTER_DISTANCE&&d<a&&(a=d,t={type:"racecar_start"})}const h=this.vehicleController.getMesh();if(h&&h.visible){const u=this.vehicleController.getPosition(),d=s.distanceToSquared(u);d<me.VEHICLE_ENTER_DISTANCE*me.VEHICLE_ENTER_DISTANCE&&d<a&&(a=d,t={type:"vehicle",mesh:h})}}if(t)if(n=!0,t.type==="racecar_start")i=this.raceManager.getWasRaceCompleted()?this.isTouchDevice?"Tap to Race Again":"Press E to Race Again":this.isTouchDevice?"Tap to Start Race":"Press E to Start Race";else if(t.type==="vehicle")i=this.isTouchDevice?"Tap to Enter Vehicle":"Press E to Enter Vehicle";else if(t.type==="arcade"){const s=t.instance,a=this.collectiblesManager.getCollectedCoinCount();s.userData.unlocked?(i=this.isTouchDevice?"Tap to Play":"Press E to Play",n=!0):a>=me.ARCADE_UNLOCK_COST?(i=this.isTouchDevice?"Tap to Unlock & Play":"Press E to Unlock & Play",n=!0):(i=`Collect ${me.ARCADE_UNLOCK_COST} coins to unlock`,n=!1)}else t.type==="elevator"?i=this.isTouchDevice?"Tap to use Elevator":"Press E to use Elevator":t.type==="zipline"?i=this.isTouchDevice?"Tap to use Zipline":"Press E to use Zipline":t.type==="dock"&&(n=!0);t&&i?(this.uiManager.showInteractionPrompt(!0,i),this.interactionTarget=t,this.canInteract=n):(this.uiManager.showInteractionPrompt(!1),this.interactionTarget=null,this.canInteract=!1)}_performInteraction(e){if(e){switch(e.type){case"arcade":const t=e.instance;if(!t.userData.unlocked)if(this.collectiblesManager.spendCoins(me.ARCADE_UNLOCK_COST))this.arcadeManager.unlockArcade(t);else return;this.arcadeManager.startArcadeGame(t);break;case"vehicle":this.playerController.enterVehicle(this.vehicleController);break;case"dock":const i=()=>{const n=this.physicsUtils.getRespawnPoint();this.playerController.exitVehicle(n,null)};this.vehicleController.startLandingSequence(e.mesh,i,{minSpeedBoost:35});break;case"elevator":this.elevatorManager.toggleElevator();break;case"zipline":this.ziplineManager.startZipline(e);break;case"racecar_start":this.raceManager.getWasRaceCompleted()?this.raceManager.restartCompletedRace():this.raceManager.startRace();break}this.interactionTarget=null,this.canInteract=!1,this.uiManager.showInteractionPrompt(!1)}}}class Rv{constructor(e,t,i,n,s){this.scene=e,this.assetLoader=t,this.physicsUtils=i,this.sceneManager=n,this.instancedMeshes={outside:[],inside:[],insideBottom:[]},this.safeZones=[],this.blacklistEnabled=!0,this.blacklistedPositions=[{x:29.03044891357422,y:-178.61355590820312,z:-143.41537475585938},{x:73.96520233154297,y:-264.77197265625,z:-174.2083282470703},{x:76.89154052734375,y:-173.08860778808594,z:-188.928955078125},{x:78.15658569335938,y:-229.9724578857422,z:-219.875732421875},{x:11.727540016174316,y:-284.8885192871094,z:-92.90167236328125},{x:67.40135955810547,y:-219.2683868408203,z:-123.73665618896484},{x:2.3243160247802734,y:-234.88453674316406,z:-97.8360824584961},{x:-14.333734512329102,y:-174.95700073242188,z:-113.03947448730469},{x:-65.26126861572266,y:-165.0243682861328,z:-84.17256927490234},{x:-32.820621490478516,y:-204.7004852294922,z:-48.26220703125},{x:-56.0637092590332,y:-230.4350128173828,z:-119.419921875},{x:-67.33306884765625,y:-176.0448760986328,z:-152.79888916015625},{x:-123.96800994873047,y:-171.6427764892578,z:-119.19493865966797},{x:-18.61083221435547,y:-239.8434295654297,z:-.4609649181365967},{x:-11.92238998413086,y:-201.09442138671875,z:189.42010498046875},{x:-8.005288124084473,y:-162.78897094726562,z:240.6802978515625},{x:25.342559814453125,y:-188.08836364746094,z:301.2145690917969},{x:61.43600845336914,y:-340.801025390625,z:-133.00881958007812},{x:88.08196258544922,y:-278.84222412109375,z:-76.380615234375},{x:97.13309478759766,y:-163.7660369873047,z:-71.71642303466797},{x:111.49105072021484,y:-282.7702331542969,z:-136.2107696533203},{x:156.9151153564453,y:-156.38894653320312,z:-118.81643676757812},{x:135.1844940185547,y:-158.42721557617188,z:-178.6503143310547},{x:156.26864624023438,y:-275.156982421875,z:-165.47276306152344},{x:39.284271240234375,y:-307.52984619140625,z:-164.00204467773438},{x:-59.82642364501953,y:-323.0475769042969,z:-186.8846893310547},{x:-14.23559284210205,y:-255.5733642578125,z:-207.63076782226562},{x:-2.4593310356140137,y:-322.7322082519531,z:-210.62844848632812},{x:-50.0750732421875,y:-342.8228454589844,z:-255.63583374023438},{x:-58.19730758666992,y:-156.39852905273438,z:-260.00323486328125},{x:25.175851821899414,y:-184.58152770996094,z:-297.3704528808594},{x:11.580554008483887,y:-175.95303344726562,z:-387.7919006347656},{x:-9.917491912841797,y:-216.31044006347656,z:-479.380126953125},{x:-58.0757942199707,y:-210.75245666503906,z:-564.8569946289062},{x:-69.35987854003906,y:-157.59481811523438,z:-565.732421875},{x:-71.3551025390625,y:-225.83282470703125,z:-209.37442016601562},{x:96.82220458984375,y:-205.861083984375,z:22.0904541015625},{x:235.16551208496094,y:-237.05331420898438,z:136.29991149902344},{x:43.15837097167969,y:-224.44351196289062,z:163.9364471435547},{x:-20.96592140197754,y:-306.1500244140625,z:81.5704574584961},{x:-80.3397445678711,y:-186.9795379638672,z:77.24793243408203},{x:-131.34938049316406,y:-261.9671630859375,z:-119.18156433105469},{x:-103.55298614501953,y:-289.70263671875,z:-223.60008239746094},{x:-13.443634986877441,y:-227.4326629638672,z:105.40802001953125},{x:-31.278505325317383,y:-159.8208770751953,z:371.972900390625},{x:471.3992919921875,y:-172.92373657226562,z:-230.38099670410156},{x:545.5540771484375,y:-156.46095275878906,z:-239.4759979248047},{x:98.92091369628906,y:-161.9216766357422,z:-325.613037109375},{x:114.31669616699219,y:-242.89920043945312,z:-364.6952209472656},{x:148.95948791503906,y:-170.04364013671875,z:-414.4122314453125},{x:85.14945220947266,y:-238.95516967773438,z:-440.4543762207031},{x:-481.82318115234375,y:-184.05198669433594,z:-67.56094360351562},{x:-206.4482879638672,y:-161.28594970703125,z:386.3062744140625},{x:-215.58290100097656,y:-526.1405029296875,z:606.9151611328125},{x:-210.3049774169922,y:-609.9165649414062,z:749.4080200195312},{x:32.24626159667969,y:-528.5606689453125,z:765.3557739257812},{x:204.24197387695312,y:-934.7264404296875,z:784.7733764648438},{x:47.72771453857422,y:-747.1588134765625,z:910.5721435546875},{x:378.0145263671875,y:-819.6717529296875,z:601.7730712890625},{x:444.1175537109375,y:-552.8138427734375,z:683.7277221679688},{x:-553.685302734375,y:-521.2437744140625,z:1174.8349609375},{x:295.92279052734375,y:-560.79833984375,z:1167.4791259765625},{x:265.4704895019531,y:-873.4029541015625,z:1298.4825439453125},{x:250.68397521972656,y:-559.632080078125,z:1395.2388916015625},{x:118.85987854003906,y:-726.9210815429688,z:774.1552124023438},{x:120.43515014648438,y:-643.75146484375,z:717.920166015625},{x:134.82435607910156,y:-961.3555908203125,z:814.955078125},{x:-92.92406463623047,y:-1000.2428588867188,z:756.03173828125},{x:-383.06671142578125,y:-710.3048095703125,z:638.8173217773438},{x:-374.0563049316406,y:-536.3732299804688,z:741.6713256835938},{x:-472.4665832519531,y:-754.8399047851562,z:633.1112670898438},{x:-519.7898559570312,y:-657.8014526367188,z:518.7965698242188},{x:155.3775177001953,y:-895.2941284179688,z:613.5379028320312},{x:238.14974975585938,y:-740.5775146484375,z:609.0107421875},{x:393.24334716796875,y:-698.4141235351562,z:612.5369873046875},{x:443.2871398925781,y:-543.971923828125,z:567.3963012695312},{x:456.14739990234375,y:-681.7866821289062,z:504.4006042480469},{x:648.1411743164062,y:-568.4146118164062,z:530.4216918945312}],this.params={outside:{name:"outside",instanceCount:s.cityGeneration.outside.instanceCount,cityRadius:s.cityGeneration.outside.cityRadius,minDistance:100,centralClearRadius:750,randomSeed:s.cityGeneration.outside.randomSeed||7965,buildingYOffsetRange:500,cityBaseYPosition:-1e3,baseScale:1,scaleRandomness:0},inside:{name:"inside",instanceCount:s.cityGeneration.inside.instanceCount,cityRadius:600,minDistance:50,centralClearRadius:10,randomSeed:1994,buildingYOffsetRange:200,cityBaseYPosition:-350,baseScale:.25,scaleRandomness:0},insideBottom:{name:"insideBottom",instanceCount:s.cityGeneration.insideBottom.instanceCount,cityRadius:800,minDistance:5,centralClearRadius:0,randomSeed:9641,buildingYOffsetRange:100,cityBaseYPosition:-650,baseScale:.4,scaleRandomness:0}},this.tempVector=new M,this.cityCenterMarker=null,this.buildingColliders=new Hi,this.scene.add(this.buildingColliders),this.frustum=new Js,this.projScreenMatrix=new Le,this.cullingBox=new ri}async initialize(e){this.model=e,this.findCenterMarker(),this.findSafeZones(),this.generateCity(),this.instanceGratings()}findSafeZones(){this.model&&(this.safeZones=[],this.model.traverse(e=>{if(e.name.startsWith(me.MESH_NAME_SAFE_ZONE)){const t=new M;e.getWorldPosition(t),this.safeZones.push(t)}}))}findCenterMarker(){this.model&&(this.cityCenterMarker=this.model.getObjectByName(me.MESH_NAME_CITY_CENTER),this.cityCenterMarker||console.warn("'City-Center' marker not found. Defaulting to world origin (0,0,0)."))}cleanupCity(){for(Object.values(this.instancedMeshes).forEach(e=>{e.forEach(t=>{const{visual:i,collider:n}=t;this.scene.remove(i),this.buildingColliders.remove(n),i.geometry&&i.geometry.dispose(),i.material&&(Array.isArray(i.material)?i.material.forEach(s=>s.dispose()):i.material.dispose()),n.geometry&&n.geometry.dispose(),n.material&&(Array.isArray(n.material)?n.material.forEach(s=>s.dispose()):n.material.dispose())})}),this.instancedMeshes={outside:[],inside:[],insideBottom:[]};this.buildingColliders.children.length>0;)this.buildingColliders.remove(this.buildingColliders.children[0])}instanceGratings(){if(!this.model)return;const e=this.model.getObjectByName("Grating");if(!e){console.warn("'Grating' source mesh not found in the model.");return}const t=[];if(this.model.traverse(g=>{g.name.startsWith("Grating-")&&t.push(g)}),t.length===0){console.warn("No 'Grating-NUMBER' placeholder objects found.");return}const i=t.length,n=e.geometry.clone(),s=e.material,a=new Wi(n,s,i);a.name="InstancedGrating";const o=new Ye,l=new Le().makeRotationY(Math.PI/2),c=new Le().makeRotationX(13.66*Math.PI/180),h=new Le().makeRotationY(-44.9878*Math.PI/180),u=new Le().makeScale(1,1,1.1),d=new Le().makeScale(1.46,1.46,1.46),A=new Le().makeScale(4.037,4.037,11.126);for(let g=0;g<i;g++){const E=t[g];E.updateWorldMatrix(!0,!1),o.matrix.copy(E.matrixWorld);const p=E.name.match(/Grating-(\d+)/),m=p?parseInt(p[1],10):-1;m>=7&&m<=21&&o.matrix.multiply(l),m>=18&&m<=21&&o.matrix.multiply(c),m>=22&&m<=28&&(o.matrix.multiply(h),o.matrix.multiply(u)),(m===29||m===30)&&o.matrix.multiply(d),m===31&&o.matrix.multiply(A),a.setMatrixAt(g,o.matrix)}a.instanceMatrix.needsUpdate=!0,this.scene.add(a),t.forEach(g=>g.visible=!1)}_generatePositions(e,t,i){const n=this.assetLoader.getBuildingAssets();if(!n||n.length===0)return new Map;const s=new Map;n.forEach(u=>{u.materialKey!=="use_original"&&s.set(u.name,[])});const a=n.filter(u=>u.materialKey!=="use_original");if(a.length===0)return new Map;const o=Math.floor(e.instanceCount/a.length),l=new Ye;let c=e.randomSeed;const h=()=>{var u=Math.sin(c++)*1e4;return u-Math.floor(u)};for(const u of a){let d=0;for(let A=0;A<o*5&&d<o;A++){const g=h()*Math.PI*2,E=e.centralClearRadius+h()*(e.cityRadius-e.centralClearRadius),p=i.x+Math.cos(g)*E,m=i.z+Math.sin(g)*E,C=i.y+e.cityBaseYPosition+h()*e.buildingYOffsetRange;this.tempVector.set(p,C,m);let x=!1;for(const L of t)if(this.tempVector.distanceTo(L)<e.minDistance){x=!0;break}if(x)continue;if(e.name==="inside"){for(const L of this.safeZones)if(Math.sqrt(Math.pow(this.tempVector.x-L.x,2)+Math.pow(this.tempVector.z-L.z,2))<65){x=!0;break}if(x)continue}l.position.set(p,C,m),l.rotation.y=h()*Math.PI*2;const I=e.baseScale+h()*e.scaleRandomness;l.scale.set(I,I,I),l.updateMatrix(),s.get(u.name).push({matrix:l.matrix.clone()}),t.push(new M(p,C,m)),d++}}return s}generateCity(){this.cleanupCity();const e=this.assetLoader.getBuildingAssets();if(!e||e.length===0){console.warn("No building assets available to generate city.");return}const t=[],i=new M;this.cityCenterMarker&&this.cityCenterMarker.getWorldPosition(i);const n=this._generatePositions(this.params.outside,t,i),s=this._generatePositions(this.params.inside,t,i),a=this._generatePositions(this.params.insideBottom,t,i),o=(l,c)=>{for(const h of e){if(h.materialKey==="use_original")continue;const u=this.assetLoader.getSharedPBRMaterial(h.materialKey);if(!u||!h.geometry)continue;const d=l.get(h.name)||[];if(d.length===0)continue;const A=h.geometry.clone();let g=0;const E=new M;h.geometry.boundingSphere||h.geometry.computeBoundingSphere();const p=h.geometry.boundingSphere.radius;for(const P of d){E.setFromMatrixPosition(P.matrix);const j=E.length()+p;g=Math.max(g,j*j)}const m=Math.sqrt(g);A.boundingSphere=new _i(new M(0,0,0),m);const C=new Wi(A,u,d.length);C.name=h.name,C.castShadow=!1,C.receiveShadow=!1,C.frustumCulled=!0;for(let P=0;P<d.length;P++)C.setMatrixAt(P,d[P].matrix);C.instanceMatrix.needsUpdate=!0,this.scene.add(C);const x=new Mt(h.geometry),I=new ri().setFromObject(x),L=I.getSize(new M),b=I.getCenter(new M),B=me.BUILDING_COLLIDER_CONFIG[h.name];let G=L.y,S=b.y;B&&(G=L.y*B.heightScale,S=b.y-(L.y-G)/2);const y=new wi(L.x,G,L.z);y.translate(b.x,S,b.z);const O=new ei({color:16711680,wireframe:!0,visible:!1}),X=new Wi(y,O,d.length);X.name=`${h.name}_collider`;for(let P=0;P<d.length;P++)X.setMatrixAt(P,d[P].matrix);X.instanceMatrix.needsUpdate=!0,this.buildingColliders.add(X),this.physicsUtils.addVehicleCollidableMesh(X),this.instancedMeshes[c].push({visual:C,collider:X,matrices:d.map(P=>P.matrix)})}};o(n,"outside"),o(s,"inside"),o(a,"insideBottom"),this._removeBlacklistedInstances()}update(){const e=this.sceneManager.activeCamera;if(e){e.updateMatrixWorld(),this.projScreenMatrix.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this.frustum.setFromProjectionMatrix(this.projScreenMatrix);for(const t in this.instancedMeshes)this.instancedMeshes[t].forEach(i=>{const n=i.visual,s=i.collider,a=i.matrices;n.geometry.boundingBox||n.geometry.computeBoundingBox();let o=0;for(let l=0;l<a.length;l++){const c=a[l];this.cullingBox.copy(n.geometry.boundingBox).applyMatrix4(c),this.frustum.intersectsBox(this.cullingBox)&&(n.setMatrixAt(o,c),s&&s.setMatrixAt(o,c),o++)}n.instanceMatrix.needsUpdate=!0,n.count=o,s&&(s.instanceMatrix.needsUpdate=!0,s.count=o)})}}_removeBlacklistedInstances(){if(!this.blacklistEnabled||!this.blacklistedPositions||this.blacklistedPositions.length===0)return;const e=new Ye,t=25,i=["inside","outside"];for(const n of i){const s=this.instancedMeshes[n];s&&s.forEach(a=>{const{visual:o,collider:l,matrices:c}=a,h=c.length,u=c.filter(d=>(e.position.setFromMatrixPosition(d),!this.blacklistedPositions.some(g=>{const E=e.position.x-g.x,p=e.position.z-g.z;return E*E+p*p<t})));if(u.length<h){a.matrices=u;const d=u.length;o.count=d,l.count=d;for(let A=0;A<d;A++)o.setMatrixAt(A,u[A]),l.setMatrixAt(A,u[A]);o.instanceMatrix.needsUpdate=!0,l.instanceMatrix.needsUpdate=!0}})}}}class Dv{constructor(e,t,i){this.renderer=e,this.scene=t,this.camera=i,this.animatedMaterials=[],this.hologramMeshes=[],this.hologramMaterial=null,this.renderTarget=new jt(window.innerWidth,window.innerHeight,{minFilter:Et,magFilter:Et,format:Bt,colorSpace:dt}),this.updateCounter=0,window.addEventListener("resize",this.handleResize.bind(this))}createHologramMaterial(){if(this.hologramMaterial)return this.hologramMaterial;const e=`
            varying vec2 vUv;
            varying vec3 vPosition;
            varying vec3 vNormal;
            varying vec3 vWorldPosition;
            
            void main() {
                vUv = uv;
                vPosition = position;
                vNormal = normalize(normalMatrix * normal);
                
                vec4 worldPosition = modelMatrix * vec4(position, 1.0);
                vWorldPosition = worldPosition.xyz;
                
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,t=`
            uniform float time;
            uniform vec3 baseColor;
            uniform float scanLineSpeed;
            uniform float scanLineWidth;
            uniform float scanLineIntensity;
            uniform float glowIntensity;
            uniform float opacity;
            uniform float flickerSpeed;
            uniform float flickerIntensity;
            uniform float emissionIntensity;
            
            varying vec2 vUv;
            varying vec3 vPosition;
            varying vec3 vNormal;
            varying vec3 vWorldPosition;
            
            void main() {
                vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
                float edgeFactor = 1.0 - abs(dot(viewDirection, vNormal));
                
                float scanLine = smoothstep(scanLineWidth, 0.0, 
                    abs(fract(vPosition.y * 10.0 + time * scanLineSpeed) - 0.5));
                
                float horizontalLines = 0.5 + 0.5 * sin(vPosition.y * 100.0);
                
                float flicker = 1.0 + flickerIntensity * sin(time * flickerSpeed) * sin(time * flickerSpeed * 7.9) * sin(time * flickerSpeed * 3.73);
                
                vec2 hexCoord = vUv * vec2(10.0, 20.0);
                hexCoord.y += 0.5 * hexCoord.x;
                hexCoord = fract(hexCoord) - 0.5;
                float hexDist = length(hexCoord);
                float hexPattern = smoothstep(0.4, 0.5, hexDist);
                
                vec3 scanLineColor = baseColor * (1.0 + scanLine * scanLineIntensity);
                vec3 edgeGlow = baseColor * edgeFactor * glowIntensity * 2.0;
                
                vec3 finalColor = mix(scanLineColor, edgeGlow, edgeFactor * 0.5);
                finalColor *= (0.8 + 0.2 * horizontalLines);
                finalColor *= flicker;
                finalColor = mix(finalColor, baseColor, hexPattern * 0.15);
                
                float alpha = opacity * (0.5 + 0.5 * edgeFactor + 0.2 * scanLine);
                
                gl_FragColor = vec4(finalColor * emissionIntensity, alpha);
            }
        `,i=new St({vertexShader:e,fragmentShader:t,uniforms:{time:{value:0},baseColor:{value:new we(65535)},scanLineSpeed:{value:2},scanLineWidth:{value:.1},scanLineIntensity:{value:1},glowIntensity:{value:1.5},opacity:{value:.7},flickerSpeed:{value:4},flickerIntensity:{value:.15},emissionIntensity:{value:.1}},transparent:!0,side:qt,blending:Gs,depthWrite:!1});return i.userData.update=n=>{i.uniforms.time.value+=n},this.animatedMaterials.push(i),this.hologramMaterial=i,i}getHologramMaterial(){return this.createHologramMaterial()}update(e){this.updateBackgroundTexture(),this.animatedMaterials.forEach(t=>{t.userData.update&&t.userData.update(e)})}updateBackgroundTexture(){if(this.updateCounter++,this.updateCounter%5!==0||!this.hologramMeshes||this.hologramMeshes.length===0)return;const e=this.hologramMeshes.filter(t=>t.material.uniforms.backgroundTexture);e.length!==0&&(e.forEach(t=>t.visible=!1),this.renderer.setRenderTarget(this.renderTarget),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),e.forEach(t=>t.visible=!0))}handleResize(){this.renderTarget.setSize(window.innerWidth,window.innerHeight)}setHologramMeshes(e){this.hologramMeshes=e}}class Pv{constructor(e,t,i){this.scene=e,this.model=t,this.assetLoader=i,this.trafficStreams=[],this.dummy=new Ye}async initialize(){const e=[],t=/^flying-car-traffic-\d+$/;if(this.model.traverse(o=>{o.isMesh&&t.test(o.name)&&e.push(o)}),e.length===0){console.error("No traffic car meshes found (e.g., 'flying-car-traffic-1').");return}const i=await this.assetLoader.ktx2Loader.loadAsync(`assets/${this.assetLoader.quality}/building4-cars-work.ktx2`);i.colorSpace=dt,i.flipY=!1;const n=new Ci({color:0,metalness:1,roughnessMap:i,emissiveMap:i,emissive:new we(16777215),emissiveIntensity:.5});e.forEach(o=>{o.material=n}),e.forEach(o=>o.visible=!1);const s=new Map,a=new RegExp(`^${me.AITRAFFIC_PREFIX}-(\\d+)-(start|end)$`);this.model.traverse(o=>{const l=o.name.match(a);if(l){const c=parseInt(l[1],10),h=l[2];s.has(c)||s.set(c,{}),s.get(c)[h]=o}});for(const[o,l]of s.entries())if(l.start&&l.end){l.start.visible=!1,l.end.visible=!1;const c=100,h=e.length;if(h===0)continue;const u=Math.floor(c/h);e.forEach((d,A)=>{const E=A===h-1?c-u*(h-1):u;E>0&&this.createTrafficStream(d,l.start,l.end,E)})}else console.warn(`Incomplete marker set for air traffic stream #${o}. Missing either start or end.`)}createTrafficStream(e,t,i,n){const s=e.geometry.clone(),a=e.material.clone(),o=new Wi(s,a,n);o.name=`AirTraffic_Stream_${e.name}`,o.frustumCulled=!1,this.scene.add(o);const l=new M;t.getWorldPosition(l);const c=new M;i.getWorldPosition(c);const h=e.quaternion.clone(),u={instancedMesh:o,count:n,initialRotation:h,cars:[]},d=15,A=new Ye;for(let g=0;g<n;g++){A.position.copy(l),A.updateMatrix(),o.setMatrixAt(g,A.matrix);const E=new M((Math.random()-.5)*2*d,(Math.random()-.5)*2*d,(Math.random()-.5)*2*d),p=l.clone().add(E),m=new M((Math.random()-.5)*2*d,(Math.random()-.5)*2*d,(Math.random()-.5)*2*d),C=c.clone().add(m),x=p.distanceTo(C),I=me.AIR_TRAFFIC_VELOCITY_VARIATION,b=me.AIR_TRAFFIC_TARGET_VELOCITY*(1+(Math.random()-.5)*2*I)/x;u.cars.push({progress:Math.random(),speed:b,start:p,end:C})}o.instanceMatrix.needsUpdate=!0,this.trafficStreams.push(u)}update(e){this.trafficStreams.forEach(t=>{const{instancedMesh:i,count:n,cars:s,initialRotation:a}=t;for(let o=0;o<n;o++){const l=s[o];l.progress+=l.speed*e,l.progress>1&&(l.progress=0),this.dummy.position.lerpVectors(l.start,l.end,l.progress),this.dummy.lookAt(l.end),this.dummy.quaternion.multiply(a),this.dummy.rotateY(-Math.PI/2),this.dummy.updateMatrix(),i.setMatrixAt(o,this.dummy.matrix)}i.instanceMatrix.needsUpdate=!0})}}class Lv{constructor(){this.elevatorObject=null,this.playerController=null,this.isMoving=!1,this.isUp=!1,this.animationProgress=0,this.animationSpeed=.2,this.startPosition=new M,this.endPosition=new M,this.newElevatorPosition=new M}initialize(e,t,i){if(!e||!t){console.error("Elevator object or end marker not provided to ElevatorManager.");return}this.elevatorObject=e,this.playerController=i,this.elevatorObject.getWorldPosition(this.startPosition),t.getWorldPosition(this.endPosition),this.isUp=!1}toggleElevator(){this.isMoving||(this.isMoving=!0,this.isUp=!this.isUp)}update(e){if(!this.isMoving||!this.elevatorObject)return;this.animationProgress+=this.animationSpeed*e;const t=Math.min(this.animationProgress,1),i=t,n=i<.5?2*i*i:1-Math.pow(-2*i+2,2)/2,s=this.isUp?this.endPosition:this.startPosition,a=this.isUp?this.startPosition:this.endPosition,o=this.elevatorObject.position.clone();this.newElevatorPosition.lerpVectors(a,s,n),this.elevatorObject.position.copy(this.newElevatorPosition);const l=this.elevatorObject.position.clone().sub(o);this.playerController&&this.playerController.camera.position.add(l),t>=1&&(this.animationProgress=0,this.isMoving=!1)}resetElevator(){this.elevatorObject&&(this.elevatorObject.position.copy(this.startPosition),this.isMoving=!1,this.isUp=!1,this.animationProgress=0)}}const sn={IDLE:"IDLE",ZIPLINING:"ZIPLINING",FADING_OUT:"FADING_OUT"},fi={RING_SPACING:15,RING_FADE_SPEED:5,RING_FADE_IN_DURATION:2,RING_FADE_OUT_DURATION:2,RING_ANIMATION_SPEED:1,TUBE_SEGMENTS:128,TUBE_RADIUS:.1,TUBE_RADIAL_SEGMENTS:8,SPEED_SETTINGS:{Fast:.2,Normal:.1,Slow:1/16}};class Nv{constructor(e){this.scene=e,this.ziplines=[],this.playerController=null,this.state=sn.IDLE,this.animationProgress=0,this.animationSpeed=fi.SPEED_SETTINGS.Normal,this.animationTimer=0,this.currentCurve=null,this.currentZipline=null,this.travelReversed=!1,this.instancedRingMesh=null,this.allRingData=[],this.dummy=new Ye,this.animateRings=!1,this.ringAnimationSpeed=1,this.ringFadeSpeed=5,this.ringFadeInTimer=0,this.ringFadeInDuration=2,this.animatedZiplineMaterials=[],this.isFadingOut=!1,this.ringFadeOutTimer=0,this.ringFadeOutDuration=2}initialize(e,t){this.playerController=t,this.ziplines=e.map(i=>{const n=i.points.length>2?new Oo(i.points):new Nh(i.points[0],i.points[1]);this._drawZipline(n);const s=this._prepareRingDataForCurve(n);return{number:i.number,points:i.points,curve:n,speed:i.speed,name:i.name,rings:s}}),this._createRingInstances(),this.ziplines.length>0}_prepareRingDataForCurve(e){const t=[],i=fi.RING_SPACING,n=e.getLength();if(n<=i)return t;const s=Math.floor(n/i);for(let a=1;a<s;a++){const o=a/s,l=e.getPointAt(o),c=e.getTangentAt(o).normalize();this.dummy.position.copy(l),this.dummy.lookAt(l.clone().add(c)),this.dummy.updateMatrixWorld(!0),t.push({basePosition:l,baseQuaternion:this.dummy.quaternion.clone(),currentRotation:Math.random()*Math.PI*2,currentOpacity:0,targetOpacity:0})}return t}_createRingInstances(){this.allRingData=[];let e=0;for(const s of this.ziplines)for(const a of s.rings)a.globalInstanceIndex=e++,this.allRingData.push(a);if(this.allRingData.length===0)return;const t=new ua(5,.05,16,32),i=new Float32Array(this.allRingData.length).fill(0);t.setAttribute("instanceOpacity",new qs(i,1));const n=new Ci({color:8978431,emissive:8978431,emissiveIntensity:.5,roughness:1,metalness:0,transparent:!0,opacity:1});n.onBeforeCompile=s=>{s.vertexShader=`attribute float instanceOpacity;
varying float vInstanceOpacity;
`+s.vertexShader,s.vertexShader=s.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vInstanceOpacity = instanceOpacity;`),s.fragmentShader=`varying float vInstanceOpacity;
`+s.fragmentShader,s.fragmentShader=s.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
    gl_FragColor.a *= vInstanceOpacity;`)},this.instancedRingMesh=new Wi(t,n,this.allRingData.length),this.instancedRingMesh.castShadow=!0,this.instancedRingMesh.visible=!1,this.scene.add(this.instancedRingMesh);for(const s of this.allRingData)this.dummy.position.copy(s.basePosition),this.dummy.quaternion.copy(s.baseQuaternion),this.dummy.updateMatrix(),this.instancedRingMesh.setMatrixAt(s.globalInstanceIndex,this.dummy.matrix);this.instancedRingMesh.instanceMatrix.needsUpdate=!0}_drawZipline(e){const t=new da(e,fi.TUBE_SEGMENTS,fi.TUBE_RADIUS,fi.TUBE_RADIAL_SEGMENTS,!1),i=`
            varying float vProgress;
            void main() {
                // uv.x from TubeGeometry represents the progress along the tube's length.
                vProgress = uv.x;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,n=`
            uniform float time;
            uniform vec3 baseColor;
            uniform vec3 pulseColor;
            varying float vProgress;
            void main() {
                float pulseWidth = 0.9;
                float animTime = mod(time * 0.9, 1.0 + pulseWidth);
                float leadingEdge = animTime - pulseWidth;
                float intensity = smoothstep(leadingEdge, leadingEdge + 0.01, vProgress) - smoothstep(animTime, animTime + 0.01, vProgress);
                vec3 finalColor = mix(baseColor, pulseColor, intensity);
                gl_FragColor = vec4(finalColor, 1.0);
            }
        `,s=new St({vertexShader:i,fragmentShader:n,uniforms:{time:{value:0},baseColor:{value:new we("#555555")},pulseColor:{value:new we("#00FFD0")}},transparent:!0,opacity:.7,side:qt});this.animatedZiplineMaterials.push(s);const a=new Mt(t,s);this.scene.add(a)}startZipline(e){if(this.state!==sn.IDLE)return;const t=this.ziplines.find(a=>a.number===e.ziplineNumber);if(!t){console.error(`Zipline with number ${e.ziplineNumber} not found!`);return}this.currentZipline=t,this.currentCurve=t.curve,this.animationSpeed=fi.SPEED_SETTINGS[t.speed]||fi.SPEED_SETTINGS.Normal;const i=t.points[0],n=t.points[t.points.length-1],s=this.playerController.camera.position;this.travelReversed=s.distanceTo(i)>s.distanceTo(n),this.instancedRingMesh&&(this.instancedRingMesh.visible=!0),this.playerController.setState({isZiplining:!0}),this._setState(sn.ZIPLINING)}_setState(e){this.state=e,this.animationProgress=0,this.animationTimer=0,e===sn.IDLE&&(this.currentZipline=null,this.currentCurve=null,this.instancedRingMesh&&(this.instancedRingMesh.visible=!1),this.playerController.setState({isZiplining:!1}))}update(e){this.animationTimer+=e;for(const t of this.allRingData)t.targetOpacity=0;switch(this.state){case sn.ZIPLINING:this._updateZipliningState(e);break;case sn.FADING_OUT:this._updateFadingOutState(e);break}this._updateRingTransforms(e),this._updateZiplineShader(e)}_updateZipliningState(e){this.animationProgress+=this.animationSpeed*e;const t=this._easePlayerProgress(this.animationProgress);this._updatePlayerPosition(t),this._updateRingFadeIn(),this.animationProgress>=1&&(this.playerController.setState({isZiplining:!1}),this._setState(sn.FADING_OUT))}_updateFadingOutState(e){const t=Math.min(this.animationTimer/fi.RING_FADE_OUT_DURATION,1);if(this.currentZipline&&this.currentZipline.rings.length>0){const i=this.currentZipline.rings,n=Math.ceil(t*i.length);for(let s=0;s<i.length;s++){const a=i[s];(this.travelReversed?s:i.length-1-s)>=n&&(a.targetOpacity=1)}}t>=1&&this._setState(sn.IDLE)}_updateRingFadeIn(){if(!this.currentZipline||this.currentZipline.rings.length===0)return;const e=this.currentZipline.rings,t=Math.min(this.animationTimer/fi.RING_FADE_IN_DURATION,1),i=Math.ceil(t*e.length);for(let n=0;n<e.length;n++){const s=e[n];(this.travelReversed?n>=e.length-i:n<i)&&(s.targetOpacity=1)}}_easePlayerProgress(e){const t=Math.min(e,1);return t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2}_updatePlayerPosition(e){if(!this.currentCurve)return;const t=this.travelReversed?1-e:e,i=this.currentCurve.getPointAt(t);i.y-=me.PLAYER_HEIGHT,this.playerController.camera.position.copy(i)}_updateRingTransforms(e){let t=!1,i=!1;for(const n of this.allRingData)Math.abs(n.currentOpacity-n.targetOpacity)>.001&&(n.currentOpacity=zi.lerp(n.currentOpacity,n.targetOpacity,fi.RING_FADE_SPEED*e),this.instancedRingMesh.geometry.attributes.instanceOpacity.setX(n.globalInstanceIndex,n.currentOpacity),t=!0),this.animateRings&&n.currentOpacity>.01&&(n.currentRotation+=fi.RING_ANIMATION_SPEED*e,this.dummy.position.copy(n.basePosition),this.dummy.quaternion.copy(n.baseQuaternion),this.dummy.rotateZ(n.currentRotation),this.dummy.updateMatrix(),this.instancedRingMesh.setMatrixAt(n.globalInstanceIndex,this.dummy.matrix),i=!0);t&&(this.instancedRingMesh.geometry.attributes.instanceOpacity.needsUpdate=!0),i&&(this.instancedRingMesh.instanceMatrix.needsUpdate=!0)}_updateZiplineShader(e){for(const t of this.animatedZiplineMaterials)t.uniforms.time.value+=e}getZiplineEndpoints(){return this.ziplines.flatMap(e=>{const t=e.points[0],i=e.points[e.points.length-1];return[{x:t.x,y:t.y,z:t.z,ziplineNumber:e.number,isZipline:!0},{x:i.x,y:i.y,z:i.z,ziplineNumber:e.number,isZipline:!0}]})}}class Uv{constructor(e,t){this.scene=e,this.camera=t,this.rainParticles=null,this.dummy=new Ye,this.params={count:1e4,width:.02,height:.3,opacity:.5,speed:.2,color:11184810,enabled:!0},this.rainAreaSize=new M(40,50,40),this._createRain()}_createRain(){this.rainParticles&&(this.scene.remove(this.rainParticles),this.rainParticles.geometry.dispose(),this.rainParticles.material.dispose());const e=new js(1,1);this.rainMaterial=new ei({color:this.params.color,transparent:!0,opacity:this.params.opacity,side:qt}),this.rainParticles=new Wi(e,this.rainMaterial,this.params.count),this.rainParticles.name="Raindrops",this.positions=new Float32Array(this.params.count*3),this.velocities=new Float32Array(this.params.count);for(let t=0;t<this.params.count;t++)this.positions[t*3]=Math.random()*this.rainAreaSize.x-this.rainAreaSize.x/2,this.positions[t*3+1]=Math.random()*this.rainAreaSize.y,this.positions[t*3+2]=Math.random()*this.rainAreaSize.z-this.rainAreaSize.z/2,this.velocities[t]=this.params.speed+Math.random()/2;this.scene.add(this.rainParticles)}update(e,t){if(!this.rainParticles||!this.params.enabled){this.rainParticles&&(this.rainParticles.visible=!1);return}this.rainParticles.visible=!0,this.rainParticles.position.x=t.position.x,this.rainParticles.position.z=t.position.z,this.rainParticles.position.y=t.position.y-this.rainAreaSize.y/2,this.dummy.scale.set(this.params.width,this.params.height,1);for(let i=0;i<this.params.count;i++)this.positions[i*3+1]-=this.velocities[i]*60*e,this.positions[i*3+1]<0&&(this.positions[i*3+1]=this.rainAreaSize.y),this.dummy.position.set(this.positions[i*3],this.positions[i*3+1],this.positions[i*3+2]),this.dummy.updateMatrix(),this.rainParticles.setMatrixAt(i,this.dummy.matrix);this.rainParticles.instanceMatrix.needsUpdate=!0}}class Yc{static getShader(){return{vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform sampler2D bakedTexture;
                uniform float time;
                
                const int MAX_REGIONS = 13;
                uniform int numAnimatedRegions;
                uniform int animationTypes[MAX_REGIONS]; // 0: scroll, 1: rotate
                uniform vec4 animatedRects[MAX_REGIONS];
                uniform vec2 animationDirections[MAX_REGIONS];
                uniform float animationSpeeds[MAX_REGIONS];
                uniform vec2 animationScales[MAX_REGIONS];
                uniform vec2 animationOffsets[MAX_REGIONS];
                uniform vec3 emissive;
                uniform float emissiveIntensity;
                uniform sampler2D emissiveMap;
                uniform float alphaTest;

                varying vec2 vUv;

                void main() {
                    vec2 uv = vUv;

                    // Calculate derivatives from the original, non-manipulated UVs
                    // to ensure correct mipmap selection during animation.
                    vec2 dx = dFdx(vUv);
                    vec2 dy = dFdy(vUv);

                    for (int i = 0; i < MAX_REGIONS; ++i) {
                        if (i >= numAnimatedRegions) break;

                        vec4 rect = animatedRects[i];
                        bool inRectX = uv.x >= rect.x && uv.x <= rect.z;
                        bool inRectY = uv.y >= rect.y && uv.y <= rect.w;

                        if (inRectX && inRectY) {
                            if (animationTypes[i] == 1) { // Rotate
                                vec2 center = vec2(rect.x + (rect.z - rect.x) * 0.5, rect.y + (rect.w - rect.y) * 0.5);
                                vec2 translatedUv = uv - center;
                                float angle = time * animationSpeeds[i];
                                mat2 rotation = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
                                vec2 rotatedUv = rotation * translatedUv;
                                uv = rotatedUv + center;
                            } else { // Scroll
                                vec2 rectDim = vec2(rect.z - rect.x, rect.w - rect.y);
                                float scrollOffset = fract(time * animationSpeeds[i]);
                                vec2 normalizedUv = (uv - rect.xy) / rectDim;
                                
                                normalizedUv = normalizedUv * animationScales[i] + animationOffsets[i];
                                normalizedUv += scrollOffset * animationDirections[i];
                                normalizedUv = fract(normalizedUv);
                                
                                uv = normalizedUv * rectDim + rect.xy;
                            }
                            break; 
                        }
                    }

                    // Sample textures using the calculated derivatives to prevent seam artifacts.
                    vec4 baseColor = texture2DGradEXT(bakedTexture, uv, dx, dy);
                    vec4 emissiveTexel = texture2DGradEXT(emissiveMap, uv, dx, dy);

                    if (emissiveTexel.a < alphaTest) discard;

                    vec3 emissiveColor = emissiveTexel.rgb * emissive * emissiveIntensity;
                    
                    gl_FragColor = vec4(baseColor.rgb + emissiveColor, emissiveTexel.a);
                }
            `}}static createAnimatedMaterial({texture:e,animatedRegions:t,emissive:i=16777215,emissiveIntensity:n=1,emissiveMap:s=null,alphaTest:a=0}){if(!e)return console.error("AnimatedMaterialManager: Texture is required to create an animated material."),null;if(!t||!Array.isArray(t)||t.length===0)return console.error("AnimatedMaterialManager: animatedRegions array is required."),null;const o=13;t.length>o&&(console.warn(`AnimatedMaterialManager: More animated regions provided (${t.length}) than supported by the shader (${o}). Only the first ${o} will be used.`),t=t.slice(0,o));const l=[],c=[],h=[],u=[],d=[],A=[];for(const C of t){const{animatedUVs:x,animationOptions:I={}}=C,{u_min:L,v_min:b,u_max:B,v_max:G}=x;l.push(new pt(L,1-G,B,1-b));const{type:S="scroll",direction:y="horizontal",speed:O=.1,reverse:X=!1,scale:P=new Ae(1,1),offset:j=new Ae(0,0)}=I;if(S==="rotate")A.push(1),h.push(X?-O:O),c.push(new Ae),u.push(new Ae(1,1)),d.push(new Ae);else{A.push(0),h.push(O);let K;y==="vertical"?K=new Ae(0,X?1:-1):K=new Ae(X?-1:1,0),c.push(K),u.push(P),d.push(j)}}const g=t.length;for(;l.length<o;)l.push(new pt),c.push(new Ae),h.push(0),u.push(new Ae(1,1)),d.push(new Ae),A.push(0);const E=this.getShader(),p={bakedTexture:{value:e},time:{value:0},numAnimatedRegions:{value:g},animationTypes:{value:A},animatedRects:{value:l},animationDirections:{value:c},animationSpeeds:{value:h},animationScales:{value:u},animationOffsets:{value:d},emissive:{value:new we(i)},emissiveIntensity:{value:n},alphaTest:{value:a}};return p.emissiveMap={value:s||e},new St({uniforms:p,vertexShader:E.vertexShader,fragmentShader:E.fragmentShader,transparent:!0,side:qt,extensions:{derivatives:!0,shaderTextureLOD:!0}})}}class Fv{constructor(e,t,i,n,s,a,o){this.scene=e,this.uiManager=t,this.playerController=i,this.physicsUtils=n,this.clock=s,this.elevatorManager=a,this.assetLoader=o,this.collectiblesManager=null;const l="ontouchstart"in window||navigator.maxTouchPoints>0;this.raceState={isInitialized:!1,isActive:!1,isFinished:!1,wasCompleted:!1,isAutopiloting:!1,startTime:0,timeLimit:l?40:30,checkpoints:[],passedCheckpoints:0,nextCheckpointIndex:0},this.raceCar=null,this.startPosition=null,this.endPosition=null,this.respawnPoint=null,this.raceExitPosition=null,this.checkpoints=[],this.checkpointMarkers=[],this.startMarker=null,this.instancedRingMesh=null,this.animatedPathMaterial=null,this.racePath=null,this.dummy=new Ye}initialize(e){this.startMarker=e.getObjectByName(me.MESH_NAME_RACE_START);const t=e.getObjectByName(me.MESH_NAME_RACE_END),i=e.getObjectByName("Race-Exit"),n=[];let s=1,a;for(;a=e.getObjectByName(`${me.MESH_PREFIX_RACE_CHECKPOINT}${String(s).padStart(2,"0")}`);)n.push(a),s++;if(!this.startMarker||!t||n.length===0){console.warn("Race markers (Start, End, or any Checkpoints) are missing! Race will be disabled.");return}this.startMarker.visible=!1,t.visible=!1,n.forEach(c=>c.visible=!1),this.startPosition=new M,this.startMarker.getWorldPosition(this.startPosition),this.endPosition=new M,t.getWorldPosition(this.endPosition),i?(this.raceExitPosition=new M,i.getWorldPosition(this.raceExitPosition),i.visible=!1):(console.warn("Could not find 'Race-Exit' marker. Player will exit at race end position."),this.raceExitPosition=this.endPosition.clone());const o=this.scene.getObjectByName(me.MESH_NAME_RACE_RESPAWN);o&&(this.respawnPoint=new M,o.getWorldPosition(this.respawnPoint),o.visible=!1);const l=[this.startPosition.clone()];this.raceState.checkpoints=n.map((c,h)=>{const u=new M;c.getWorldPosition(u),l.push(u.clone());const d=h+1<n.length?n[h+1].position:t.position,A=new M().subVectors(d,c.position).normalize();return this.dummy.position.copy(u),this.dummy.lookAt(u.clone().add(A)),{position:u,ringInstanceIndex:h,passed:!1,ringBaseQuaternion:this.dummy.quaternion.clone()}}),l.push(this.endPosition.clone()),this._createRacePath(l),this._createCheckpointRings(),this._createRaceCar(e),this.raceState.isInitialized=!0}_resetCarTransform(){if(!this.raceCar||!this.startPosition)return;const e=this.raceCar.getMesh();if(e.position.copy(this.startPosition),this.startMarker){const t=new lt;this.startMarker.getWorldQuaternion(t);const i=new lt().setFromAxisAngle(new M(0,1,0),-Math.PI/2);t.multiply(i),e.quaternion.copy(t)}}_createRaceCar(e){this.raceCar=new du(this.scene,this.playerController.camera,this.physicsUtils,this.assetLoader),this.raceCar.initializeModel(e),this.raceCar.getMesh()&&(this.raceCar.getMesh().visible=!0,this._resetCarTransform())}_createRacePath(e){const t=new Oo(e),i=new da(t,128,.2,8,!1),n=`
            varying float vProgress;
            void main() {
                vProgress = uv.x;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,s=`
            uniform float time;
            uniform vec3 baseColor;
            uniform vec3 pulseColor;
            varying float vProgress;
            void main() {
                float pulseWidth = 0.1;
                float animTime = mod(time * 0.2, 1.0 + pulseWidth);
                float leadingEdge = animTime - pulseWidth;
                float intensity = smoothstep(leadingEdge, leadingEdge + 0.01, vProgress) - smoothstep(animTime, animTime + 0.01, vProgress);
                vec3 finalColor = mix(baseColor, pulseColor, intensity);
                gl_FragColor = vec4(finalColor, 1.0);
            }
        `;this.animatedPathMaterial=new St({vertexShader:n,fragmentShader:s,uniforms:{time:{value:0},baseColor:{value:new we("#220066")},pulseColor:{value:new we("#8800ff")}},transparent:!0,opacity:.7}),this.racePath=new Mt(i,this.animatedPathMaterial),this.racePath.visible=!1,this.scene.add(this.racePath)}_createCheckpointRings(){const e=new ua(8,.2,16,48),t=`
            attribute float isPassed;
            varying float vIsPassed;
            void main() {
                vIsPassed = isPassed;
                gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0);
            }
        `,i=`
            uniform vec3 defaultColor;
            uniform vec3 passedColor;
            varying float vIsPassed;
            void main() {
                vec3 finalColor;
                if (vIsPassed > 0.5) {
                    // Not emissive, just the flat color
                    finalColor = passedColor;
                } else {
                    // Emissive, bright white
                    finalColor = defaultColor;
                }
                gl_FragColor = vec4(finalColor, 1.0);
            }
        `,n=new St({vertexShader:t,fragmentShader:i,uniforms:{defaultColor:{value:new we(me.RACE_RING_DEFAULT_COLOR)},passedColor:{value:new we(me.RACE_RING_PASSED_COLOR)}}}),s=this.raceState.checkpoints.length;this.instancedRingMesh=new Wi(e,n,s);const a=new Float32Array(s);this.instancedRingMesh.geometry.setAttribute("isPassed",new qs(a,1));for(let o=0;o<s;o++){const l=this.raceState.checkpoints[o];this.dummy.position.copy(l.position),this.dummy.quaternion.copy(l.ringBaseQuaternion),this.dummy.updateMatrix(),this.instancedRingMesh.setMatrixAt(o,this.dummy.matrix)}this.instancedRingMesh.instanceMatrix.needsUpdate=!0,this.instancedRingMesh.visible=!1,this.scene.add(this.instancedRingMesh)}startRace(){if(this.raceState.isActive||!this.raceState.isInitialized)return;this._resetCarTransform(),this.raceCar.setControlsLocked(!1),this.raceCar.setCollisionEnabled(!0),this.playerController.enterVehicle(this.raceCar),this.raceState.isActive=!0,this.raceState.isFinished=!1,this.raceState.startTime=this.clock.getElapsedTime(),this.raceState.passedCheckpoints=0,this.raceState.nextCheckpointIndex=0,this.raceState.checkpoints.forEach(t=>t.passed=!1);const e=this.instancedRingMesh.geometry.attributes.isPassed;for(let t=0;t<e.count;t++)e.setX(t,0);e.needsUpdate=!0,this.uiManager.showRaceUI(!0),this.uiManager.setRaceTimerVisibility(!0),this.uiManager.setRaceCounterVisibility(!0),this.updateRaceUI(this.raceState.timeLimit),this.instancedRingMesh.visible=!0,this.racePath.visible=!0,this.elevatorManager&&this.elevatorManager.resetElevator(),this.collectiblesManager&&this.collectiblesManager.resetRaceRewardCoin()}update(e){if(this.animatedPathMaterial&&(this.animatedPathMaterial.uniforms.time.value+=e),!this.raceState.isActive){this.raceCar&&this.raceCar.updateEffects(e,!0);return}if(this.raceState.isAutopiloting){this.raceCar.updateMovement(e,{});return}if(this.raceState.isFinished)return;this.raceCar.updateMovement(e,this.playerController.input),this.raceCar.updateEffects(e);const t=this.clock.getElapsedTime()-this.raceState.startTime,i=this.raceState.timeLimit-t;if(i<=0){this.failRace();return}this.updateRaceUI(i),this._checkCheckpoints()}_checkCheckpoints(){if(this.raceState.nextCheckpointIndex>=this.raceState.checkpoints.length)return;const e=this.raceState.checkpoints[this.raceState.nextCheckpointIndex];this.raceCar.getPosition().distanceTo(e.position)<me.RACE_CHECKPOINT_PASS_DISTANCE&&this.passCheckpoint(this.raceState.nextCheckpointIndex)}passCheckpoint(e){if(e>=this.raceState.checkpoints.length)return;const t=this.raceState.checkpoints[e];if(t.passed)return;t.passed=!0,this.raceState.passedCheckpoints++,this.raceState.nextCheckpointIndex++;const i=this.instancedRingMesh.geometry.attributes.isPassed;i.setX(e,1),i.needsUpdate=!0,this.raceState.passedCheckpoints===this.raceState.checkpoints.length&&this.finishRace()}finishRace(){this.raceState.isFinished=!0,this.raceState.isAutopiloting=!0,this.raceCar.setControlsLocked(!0),this.instancedRingMesh&&(this.instancedRingMesh.visible=!1),this.racePath&&(this.racePath.visible=!1),this.uiManager.showRaceUI(!1),this.uiManager.setRaceTimerVisibility(!1),this.uiManager.setRaceCounterVisibility(!1);const e=this.scene.getObjectByName(me.MESH_NAME_RACE_END);if(e)this.raceCar.startLandingSequence(e,()=>{const t=this.raceExitPosition.clone().add(new M(-10,0,0));this.playerController.exitVehicle(this.raceExitPosition,t),this.markRaceAsCompleted(),this.raceState.isAutopiloting=!1},{isRaceLanding:!0});else{console.error("Race end marker not found! Cannot perform landing sequence.");const t=this.raceExitPosition.clone().add(new M(-10,0,0));this.playerController.exitVehicle(this.raceExitPosition,t),this.markRaceAsCompleted()}}updateAutopilot(e){}updateRaceUI(e){if(!this.raceState.isActive)return;const t=`${this.raceState.passedCheckpoints} / ${this.raceState.checkpoints.length}`,i=e>0?new Date(e*1e3).toISOString().substr(14,5):"00:00";this.uiManager.updateRaceCounter(t),this.uiManager.updateRaceTimer(i)}failRace(){if(this.uiManager.setRaceTimerVisibility(!1),this.uiManager.setRaceCounterVisibility(!1),this.raceCar&&this.startPosition){this.raceCar.getMesh();const e=new lt,t=this.scene.getObjectByName(me.MESH_NAME_RACE_START);if(t){t.getWorldQuaternion(e);const s=new lt().setFromAxisAngle(new M(0,1,0),-Math.PI/2);e.multiply(s)}const i=this.respawnPoint?this.respawnPoint.clone():this.startPosition.clone().add(new M(0,2,5)),n=this.startPosition;this.playerController.exitVehicle(i,n),this._resetCarTransform()}else this.playerController.exitVehicle();this.resetRace()}resetRace(){if(this.raceCar&&this.raceCar.setCollisionEnabled(!0),this.raceState.isActive=!1,this.raceState.isFinished=!1,this.raceState.isAutopiloting=!1,this.instancedRingMesh&&(this.instancedRingMesh.visible=!1),this.racePath&&(this.racePath.visible=!1),this.instancedRingMesh&&this.instancedRingMesh.geometry.attributes.isPassed){const e=this.instancedRingMesh.geometry.attributes.isPassed;for(let t=0;t<e.count;t++)e.setX(t,0);e.needsUpdate=!0}this._resetCarTransform(),this.uiManager.showRaceUI(!1)}restartCompletedRace(){if(!this.raceState.isInitialized||!this.getWasRaceCompleted())return;this._resetCarTransform();const e=this.respawnPoint?this.respawnPoint.clone():this.startPosition.clone().add(new M(0,2,5)),t=this.startPosition;this.playerController.teleport(e,t),this.raceState.isActive=!1,this.raceState.isFinished=!1,this.raceState.wasCompleted=!1,this.raceCar.getMesh().visible=!0,this.collectiblesManager&&this.collectiblesManager.resetRaceRewardCoin()}markRaceAsCompleted(){this.raceState.isFinished=!0,this.raceState.wasCompleted=!0,this.raceState.isActive=!1,this.collectiblesManager&&this.collectiblesManager.revealRaceRewardCoin()}getWasRaceCompleted(){return this.raceState.wasCompleted}getRaceRespawnPoint(){return this.respawnPoint?this.respawnPoint.clone():null}getRaceCar(){return this.raceState.isInitialized?this.raceCar.getMesh():null}}class Ov{constructor(e,t){this.playerController=e,this.uiManager=t,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0,this.input={moveForward:!1,moveBackward:!1,moveLeft:!1,moveRight:!1,jump:!1,lookX:0,lookY:0,leftStick:null,rightStick:null,sprint:!1},this.isTouchDevice&&(this.initJoysticks(),this.initJumpButton())}initJoysticks(){const e={zone:document.getElementById("left-joystick-zone"),mode:"static",position:{left:"50%",top:"50%"},color:"white"};this.leftJoystick=nipplejs.create(e);const t={zone:document.getElementById("right-joystick-zone"),mode:"static",position:{left:"50%",top:"50%"},color:"white"};this.rightJoystick=nipplejs.create(t),this.leftJoystick.on("move",(i,n)=>this.handleLeftJoystickMove(n)),this.leftJoystick.on("end",()=>this.resetLeftMovement()),this.rightJoystick.on("move",(i,n)=>this.handleRightJoystickMove(n)),this.rightJoystick.on("end",()=>this.resetRightMovement())}initJumpButton(){this.jumpButton=this.uiManager.jumpButton,this.jumpButton&&(this.jumpButton.addEventListener("touchstart",e=>{e.preventDefault(),this.input.jump=!0,this.jumpButton.classList.add("active")},{passive:!1}),this.jumpButton.addEventListener("touchend",e=>{e.preventDefault(),this.input.jump=!1,this.jumpButton.classList.remove("active")},{passive:!1}))}handleLeftJoystickMove(e){this.input.leftStick=e,e.distance>45?this.input.sprint=!0:this.input.sprint=!1}resetLeftMovement(){this.input.leftStick=null,this.input.sprint=!1}handleRightJoystickMove(e){this.input.rightStick=e}resetRightMovement(){this.input.rightStick=null}update(){this.isTouchDevice&&this.playerController.updateTouch(this.input)}}var qo=function(){var r;function e(o){return o}function t(o){}var i=(performance||Date).now(),n=i,s=0,a=new qo.Panel("FPS","#0ff","#002");return{REVISION:16,addPanel:e,showPanel:t,getFps:function(){return r},begin:function(){i=(performance||Date).now()},end:function(){s++;var o=(performance||Date).now();return o>=n+1e3&&(r=Math.round(s*1e3/(o-n)),a.update(r,100),n=o,s=0),o},update:function(){i=this.end()},setMode:t}};qo.Panel=function(r,e,t){var i=1/0,n=0,s=Math.round,a=s(window.devicePixelRatio||1),o=80*a,l=48*a,c=3*a,h=2*a,u=3*a,d=15*a,A=74*a,g=30*a,E=document.createElement("canvas");E.width=o,E.height=l,E.style.cssText="width:80px;height:48px";var p=E.getContext("2d");return p.font="bold "+9*a+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=t,p.fillRect(0,0,o,l),p.fillStyle=e,p.fillText(r,c,h),p.fillRect(u,d,A,g),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(u,d,A,g),{dom:E,update:function(m,C){i=Math.min(i,m),n=Math.max(n,m),p.fillStyle=t,p.globalAlpha=1,p.fillRect(0,0,o,d),p.fillStyle=e,p.fillText(s(m)+" "+r+" ("+s(i)+"-"+s(n)+")",c,h),p.drawImage(E,u+a,d,A-a,g,u,d,A-a,g),p.fillRect(u+A-a,d,a,g),p.fillStyle=t,p.globalAlpha=.9,p.fillRect(u+A-a,d,a,s((1-m/C)*g))}}};class Qv{constructor(){this.presets={ultra:{assetQuality:"ultra",postProcessing:{colorBalance:!0,filmGrain:!0,chromaticAberration:!0,smaa:!0,bloom:!0,bloomResolutionScale:1},pixelRatio:"default",showFPS:!0,skipIntro:!1},high:{assetQuality:"high",postProcessing:{colorBalance:!0,filmGrain:!0,chromaticAberration:!0,smaa:!0,bloom:!0,bloomResolutionScale:1},pixelRatio:"default",showFPS:!0,skipIntro:!1},medium:{assetQuality:"medium",postProcessing:{colorBalance:!0,filmGrain:!1,chromaticAberration:!0,smaa:!1,bloom:!0,bloomResolutionScale:1},pixelRatio:"capped",showFPS:!0,skipIntro:!1},low:{assetQuality:"low",postProcessing:{colorBalance:!0,filmGrain:!1,chromaticAberration:!1,smaa:!1,bloom:!0,bloomResolutionScale:1},pixelRatio:"capped",showFPS:!0,skipIntro:!1}};const e={outside:{instanceCount:500,cityRadius:5e3},inside:{instanceCount:300},insideBottom:{instanceCount:200}},t={outside:{instanceCount:100,cityRadius:1e3,randomSeed:4663},inside:{instanceCount:300},insideBottom:{instanceCount:100}};"ontouchstart"in window||navigator.maxTouchPoints>0?(this.presets.ultra.cityGeneration=e,this.presets.high.cityGeneration=t,this.presets.medium.cityGeneration=t,this.presets.low.cityGeneration=t):(this.presets.ultra.cityGeneration=e,this.presets.high.cityGeneration=e,this.presets.medium.cityGeneration=e,this.presets.low.cityGeneration=t),this.currentSettingName=this._getSettingName(),this.currentSetting=this.presets[this.currentSettingName],this._loadSettings()}_loadSettings(){const e=localStorage.getItem("showFPS"),t=localStorage.getItem("skipIntro");this.currentSettingName=this._getSettingName(),this.currentSetting=this.presets[this.currentSettingName],e!==null&&(this.currentSetting.showFPS=JSON.parse(e)),t!==null&&(this.currentSetting.skipIntro=JSON.parse(t))}_getSettingName(){const e=localStorage.getItem("graphicsPreset");return e&&this.presets[e]?e:"ontouchstart"in window||navigator.maxTouchPoints>0?"low":me.ASSET_QUALITY}getSetting(){return this.currentSetting}getSettingName(){return this.currentSettingName}saveSetting(e,t){this.presets[e]?(localStorage.setItem("graphicsPreset",e),t&&(localStorage.setItem("showFPS",JSON.stringify(t.showFPS)),localStorage.setItem("skipIntro",JSON.stringify(t.skipIntro))),window.location.reload()):console.error(`Attempted to save invalid preset: ${e}`)}}class kv{constructor(e){this.listener=new F0,e.add(this.listener),this.isInitialized=!1,this.isPlaying=!1,this.hasInteracted=!1,this.musicVolume=.3,this.rainVolume=.1,this.rainFadeDownVolume=0,this.music=new Pc(this.listener),this.rain=new Pc(this.listener);const t=new kh,i=[this._loadAudio(t,"assets/music.mp3",this.music,this.musicVolume)];this.rainVolume>0&&i.push(this._loadAudio(t,"assets/rain.mp3",this.rain,this.rainVolume)),Promise.all(i).then(()=>{this.isInitialized=!0,this.isPlaying&&this.hasInteracted&&this.playAudio()}),this._loadPlaybackState()}_loadAudio(e,t,i,n){return new Promise(s=>{e.load(t,a=>{i.setBuffer(a),i.setLoop(!0),i.setVolume(n),s()})})}async handleFirstInteraction(){if(!(this.hasInteracted&&this.listener.context.state==="running")){this.hasInteracted=!0;try{this.listener.context.state==="suspended"&&await this.listener.context.resume()}catch(e){console.warn("Failed to resume AudioContext:",e)}this.isPlaying&&this.playAudio()}}playAudio(){this.isPlaying=!0,this._savePlaybackState(),this.isInitialized&&this.hasInteracted&&(this.music.isPlaying||this.music.play(),!this.rain.isPlaying&&this.rain.buffer&&this.rain.play())}pauseAudio(){this.isPlaying=!1,this._savePlaybackState(),this.isInitialized&&(this.music.isPlaying&&this.music.pause(),this.rain.isPlaying&&this.rain.buffer&&this.rain.pause())}togglePlayPause(){this.isPlaying=!this.isPlaying,this._savePlaybackState(),this.isPlaying?(this.playAudio(),this.fadeInAll()):this.fadeOutAll()}_fadeVolume(e,t,i=1e3){if(!e.buffer)return;e.fadeInterval&&clearInterval(e.fadeInterval);const n=e.getVolume(),s=Date.now();e.fadeInterval=setInterval(()=>{const a=Date.now()-s;if(a>i){e.setVolume(t),clearInterval(e.fadeInterval),e.fadeInterval=null;return}const o=n+(t-n)*(a/i);e.setVolume(o)},20)}fadeOutAll(e=1e3){this._fadeVolume(this.music,0,e),this._fadeVolume(this.rain,0,e),setTimeout(()=>{this.isPlaying||this.pauseAudio()},e+100)}fadeInAll(e=1e3){this.playAudio(),this._fadeVolume(this.music,this.musicVolume,e),this._fadeVolume(this.rain,this.rainVolume,e)}fadeOutMusic(e=1e3){this._fadeVolume(this.music,0,e),setTimeout(()=>{this.music.isPlaying&&this.music.getVolume()===0&&this.music.pause()},e+100)}fadeInMusic(e=1e3){!this.music.isPlaying&&this.isPlaying&&this.music.play(),this._fadeVolume(this.music,this.musicVolume,e)}fadeRainDown(e=1e3){this._fadeVolume(this.rain,this.rainFadeDownVolume,e)}fadeRainUp(e=1e3){this._fadeVolume(this.rain,this.rainVolume,e)}_savePlaybackState(){localStorage.setItem("audioIsPlaying",this.isPlaying)}_loadPlaybackState(){const e=localStorage.getItem("audioIsPlaying");this.isPlaying=e===null?!0:e==="true"}}const Gv=1/30;class zv{constructor(){this.clock=new zo,this.sceneManager=null,this.assetLoader=null,this.uiManager=null,this.physicsUtils=null,this.playerController=null,this.vehicleController=null,this.collectiblesManager=null,this.arcadeManager=null,this.interactionManager=null,this.cityManager=null,this.hologramManager=null,this.hologram1Mesh=null,this.airTrafficManager=null,this.elevatorManager=null,this.ziplineManager=null,this.rain=null,this.raceManager=null,this.animatedBuildingMaterials=[],this.crtMaterial=null,this.touchControls=null,this.stats=null,this.isPlayerInControl=!1,this.isInitialized=!1,this.assetsLoaded={mainModel:!1,buildings:!1},this.isPreloading=!0,this.isObservationCameraActive=!1,this.cinematicFollow={active:!1,startTime:0,transitionDuration:5e3,transitionStartPosition:new M,transitionStartQuaternion:new lt},this.introAnimation={enabled:!1,startTime:0,duration:5e3,startPos:new M,endPos:new M,text1State:"hidden",text2State:"hidden"},this.isPaused=!1,this.settingsManager=new Qv,this._initializePreloader(),this._setupEventListeners()}_setupEventListeners(){window.addEventListener("keydown",e=>{if(this.isPreloading){this._handlePreloaderCameraControls(e.key);return}if(e.key.toLowerCase()==="n"&&this.toggleCamera(),e.key.toLowerCase()==="b"&&this.isObservationCameraActive&&!this.cinematicFollow.active){this.cinematicFollow.active=!0,this.cinematicFollow.startTime=this.clock.getElapsedTime();const t=this.sceneManager.cameras.observation;t&&(this.cinematicFollow.transitionStartPosition.copy(t.position),this.cinematicFollow.transitionStartQuaternion.copy(t.quaternion))}})}_handlePreloaderCameraControls(e){const i=this.sceneManager.cameras.observation;if(!i)return;const n=new Zt().setFromQuaternion(i.quaternion,"YXZ");switch(e){case"ArrowUp":n.x-=.05;break;case"ArrowDown":n.x+=.05;break;case"ArrowLeft":n.y-=.05;break;case"ArrowRight":n.y+=.05;break}const s=89*Math.PI/180;n.x=Math.max(-s,Math.min(s,n.x)),i.quaternion.setFromEuler(n),this.sceneManager.setActiveCamera("observation")}async _initializePreloader(){const e=this.settingsManager.getSetting();this.sceneManager=new sE(document.body,e),this.assetLoader=new mv(this.sceneManager.renderer,e.assetQuality),this.animate();const t=await new Qo().loadAsync("assets/sky4k-75.avif");t.mapping=as,t.colorSpace=dt,this.sceneManager.scene.background=t,this.rain=new Uv(this.sceneManager.scene,this.sceneManager.activeCamera);const i=this.sceneManager.createAndAddCamera("observation",this.sceneManager.cameras.main.fov,this.sceneManager.cameras.main.aspect,this.sceneManager.cameras.main.near,this.sceneManager.cameras.main.far),n=new M(.92399,77.2505,801.599);i.position.copy(n);const s=new Zt(zi.degToRad(90),0,0,"XYZ");i.quaternion.setFromEuler(s),this.toggleCamera();const a=document.getElementById("progress-bar"),o=document.getElementById("progress-percent"),l=document.getElementById("preloader"),c=document.getElementById("enter-button"),h=document.getElementById("preloader-logo");let u=0,d=0;const A=()=>{Math.abs(d-u)<.001&&d===1?u=1:u+=(d-u)*.1;const p=Math.floor(u*100),m=String(p).padStart(2,"0");a.style.width=`${u*100}%`,o.textContent=`${m}%`,u<1&&requestAnimationFrame(A)};requestAnimationFrame(A);const g=p=>{d=p};await this.assetLoader.preload(g),d=1,l.classList.add("loaded"),setTimeout(()=>{c.classList.add("visible")},500);const E=this._initialize();c.addEventListener("click",async()=>{this.audioManager.handleFirstInteraction(),await E,this.isPreloading=!1;const p=this.assetLoader.getCityModel();if(p&&(p.visible=!0),this.settingsManager.getSetting().skipIntro)this.skipIntro();else{const C=this.physicsUtils.getSpawnPoint(),x=this.physicsUtils.getSpawnEndPoint();if(this.startIntroAnimation(C,x),this.isObservationCameraActive&&!this.cinematicFollow.active){this.cinematicFollow.active=!0,this.cinematicFollow.startTime=this.clock.getElapsedTime();const I=this.sceneManager.cameras.observation;I&&(this.cinematicFollow.transitionStartPosition.copy(I.position),this.cinematicFollow.transitionStartQuaternion.copy(I.quaternion))}}l.classList.add("hidden"),h.classList.add("hidden")},{once:!0})}toggleCamera(){this.isObservationCameraActive=!this.isObservationCameraActive,this.isObservationCameraActive?(this.sceneManager.setActiveCamera("observation"),this.playerController&&this.playerController.setEnabled(!1)):(this.cinematicFollow.active=!1,this.sceneManager.setActiveCamera("main"),this.playerController&&this.playerController.setEnabled(!0))}async _initialize(){const e=this.settingsManager.getSetting(),t=this.sceneManager.cameras.main;this.stats=new qo,this.audioManager=new kv(t),this.physicsUtils=new Ev,this.cityManager=new Rv(this.sceneManager.scene,this.assetLoader,this.physicsUtils,this.sceneManager,e),this.hologramManager=new Dv(this.sceneManager.renderer,this.sceneManager.scene,t),this.uiManager=new gv(this),e.showFPS||(this.uiManager.fpsCounterElement.style.display="none"),this.elevatorManager=new Lv,this.ziplineManager=new Nv(this.sceneManager.scene),this.playerController=new Sv(t,document.body,this.uiManager,this.physicsUtils,this.elevatorManager,this.ziplineManager,this),this.playerController.setEnabled(!1),this.vehicleController=new du(this.sceneManager.scene,t,this.physicsUtils,this.assetLoader),window.addEventListener("DOMContentLoaded",()=>{}),this.raceManager=new Fv(this.sceneManager.scene,this.uiManager,this.playerController,this.physicsUtils,this.clock,this.elevatorManager,this.assetLoader),this.collectiblesManager=new Tv(this.sceneManager.scene,this.uiManager),this.raceManager.collectiblesManager=this.collectiblesManager,this.arcadeManager=new bv(this.sceneManager.scene,t,this.uiManager,this.playerController,this,this.assetLoader,this.audioManager),this.interactionManager=new Bv(t,this.uiManager,this.physicsUtils,this.playerController,this.vehicleController,this.arcadeManager,this.collectiblesManager,this.elevatorManager,this.ziplineManager,this.raceManager,this,this.cityManager),this.assetLoader.loadEnvironment(this.sceneManager.scene);try{const n=await this.assetLoader.loadCityModel(this.sceneManager.scene),s=n.getObjectByName("Preloader-Camera");if(s){const a=this.sceneManager.cameras.observation;a.position.copy(s.position),a.quaternion.copy(s.quaternion)}else console.warn('Could not find "Preloader-Camera" in the model.');await this._onModelLoaded(n),this.assetsLoaded.mainModel=!0,this._checkAndFinalizeSetup()}catch(n){console.error("Failed to load the main city model, initialization cannot continue.",n)}const i=["building1.glb","building2.glb","building3.glb","building4.glb","building5.glb","building6.glb","building7.glb","building8.glb","building9.glb","building10.glb"];this.assetLoader.loadBuildingModelsAndSharedMaterials(this.sceneManager.scene,i,this.sceneManager.renderer).then(()=>{this.assetsLoaded.buildings=!0,this._checkAndFinalizeSetup()}).catch(n=>{console.error("Failed to load building models for instancing or their textures:",n),this.assetsLoaded.buildings=!0,this._checkAndFinalizeSetup()})}_checkAndFinalizeSetup(){this.assetsLoaded.mainModel&&this.assetsLoaded.buildings&&this._finalizeSetup()}async _finalizeSetup(){if(this.isInitialized)return;this.cityManager.initialize(this.assetLoader.getCityModel());const e={position:{x:-46.424,y:199.84,z:-180},rotation:{x:0,y:0,z:-90},dimensions:{x:58.5,y:30.4,z:288}};this._placeCustomBuildingInstance("building4.glb",e);const t={position:{x:93.204,y:126,z:-219.9},rotation:{x:0,y:0,z:0},dimensions:{x:131,y:131,z:236}};this._placeCustomBuildingInstance("building7.glb",t);const i={position:{x:37.925,y:181.03,z:-105},rotation:{x:0,y:0,z:0},dimensions:{x:42.7,y:42.7,z:184}};this._placeCustomBuildingInstance("building10.glb",i);const n={position:{x:-53.462,y:126,z:-193.1},rotation:{x:0,y:0,z:0},dimensions:{x:61,y:23.6,z:196}};this._placeCustomBuildingInstance("building8.glb",n);const s={position:{x:-112.59,y:126,z:-246.9},rotation:{x:0,y:0,z:90},dimensions:{x:38.4,y:61.3,z:379}};this._placeCustomBuildingInstance("building9.glb",s);const a=this.sceneManager.renderer,o=this.sceneManager.scene,l=this.sceneManager.cameras.main;if(this.physicsUtils&&this.vehicleController&&this.vehicleController.getMesh()){const c=this.vehicleController.getMesh(),h=l.position.clone(),u=l.quaternion.clone(),d=c.position.clone(),A=c.quaternion.clone(),g=new Map;o.traverse(B=>{g.set(B,B.visible),B.visible=!0});const E=this.physicsUtils.getSpawnPoint(),p=this.physicsUtils.getSpawnEndPoint();c.position.copy(E);const m=new Ye;m.position.copy(E);const C=new M().subVectors(E,p),x=new M().addVectors(E,C);m.lookAt(x),l.quaternion.copy(m.quaternion);const I=l.quaternion.clone(),L=new lt().setFromAxisAngle(new M(0,1,0),Math.PI/2);I.multiply(L),c.quaternion.copy(I),this.vehicleController.syncCameraToVehicle(),l.updateMatrixWorld(!0);const b=new jt(1,1);a.setRenderTarget(b),a.render(o,l),a.setRenderTarget(null),b.dispose(),o.traverse(B=>{g.has(B)&&(B.visible=g.get(B))}),l.position.copy(h),l.quaternion.copy(u),c.position.copy(d),c.quaternion.copy(A),l.updateMatrixWorld(!0)}this.isInitialized=!0,console.log("Engine Initialized and All Assets Loaded.")}getSceneDetails(e){if(e==="geometries"){const i=new Map;this.sceneManager.scene.traverse(s=>{if(s.geometry){const a=s.geometry.uuid;i.has(a)||i.set(a,{type:s.geometry.type,users:new Set}),s.name&&i.get(a).users.add(s.name)}});const n=[];for(const[s,a]of i.entries()){const o=Array.from(a.users);let l;o.length===0?l=a.type:o.length>2?l=`${o.slice(0,2).join(", ")}, ... (+${o.length-2} more)`:l=o.join(", "),n.push(`- ${l} (${a.type})`)}return n.sort()}if(e==="textures"){const i=new Map;this.sceneManager.scene.traverse(s=>{s.material&&(Array.isArray(s.material)?s.material:[s.material]).forEach(o=>{for(const l in o)if(o[l]instanceof It){const c=o[l],h=c.uuid;i.has(h)||i.set(h,{name:c.name,users:new Set}),s.name&&i.get(h).users.add(s.name)}})});const n=[];for(const[s,a]of i.entries()){const o=Array.from(a.users);let l;o.length===0?l=a.name||"Texture":o.length>2?l=`${o.slice(0,2).join(", ")}, ... (+${o.length-2} more)`:l=o.join(", "),n.push(`- ${l} (Texture)`)}return n.sort()}const t=new Set;return this.sceneManager.scene.traverse(i=>{if(e==="drawcalls"){const n=new Js;if(n.setFromProjectionMatrix(new Le().multiplyMatrices(this.sceneManager.activeCamera.projectionMatrix,this.sceneManager.activeCamera.matrixWorldInverse)),i.isMesh&&i.visible&&n.intersectsObject(i)){let s=!1;Array.isArray(i.material)?s=i.material.some(a=>a.visible):i.material&&(s=i.material.visible),s&&(i.isInstancedMesh?t.add(`- ${i.name||"InstancedMesh"} (Instances: ${i.count})`):t.add(`- ${i.name||i.type} (Visible)`))}}}),Array.from(t)}async _onModelLoaded(e){this.physicsUtils.setupCollisionMeshes(e),this._setupAnimatedMaterials(e),this._setupMainPlatformMaterial(e);const t=e.getObjectByName("Crane");t&&t.material&&(t.material.depthWrite=!0,t.material.alphaTest=.5,t.material.needsUpdate=!0),this._setupHolograms(e),this._setupVideoScreens(e),this.airTrafficManager=new Pv(this.sceneManager.scene,e,this.assetLoader),await this.airTrafficManager.initialize(),this.arcadeManager.initializeArcades(e),this.collectiblesManager.initializeCoins(e),this.elevatorManager.initialize(this.physicsUtils.getElevatorObject(),this.physicsUtils.getElevatorEndObject(),this.playerController),this.ziplineManager.initialize(this.physicsUtils.getZiplinePoints(),this.playerController),this.raceManager.initialize(e),this.playerController.setState({inVehicle:!0}),this.playerController.currentVehicle=this.vehicleController,await this.vehicleController.initializeModel(e)}startIntroAnimation(e,t){const i=e.distanceTo(t),n=me.VEHICLE_FLY_SPEED,s=i/n*1e3;this.introAnimation.enabled=!0,this.introAnimation.startTime=this.clock.getElapsedTime(),this.introAnimation.duration=s,this.introAnimation.startPos.copy(e),this.introAnimation.endPos.copy(t),this.introAnimation.text1State="hidden",this.introAnimation.text2State="hidden";const a=this.vehicleController.getMesh();if(!a){console.error("Vehicle mesh not found for intro animation.");return}a.visible=!0,a.position.copy(e);const o=new Ye;o.position.copy(e);const l=new M().subVectors(e,t),c=new M().addVectors(e,l);o.lookAt(c);const h=this.sceneManager.cameras.main;h.quaternion.copy(o.quaternion);const u=h.quaternion.clone(),d=new lt().setFromAxisAngle(new M(0,1,0),Math.PI/2);u.multiply(d),a.quaternion.copy(u),this.vehicleController.syncCameraToVehicle(),this.playerController.setState({introAnimating:!0})}skipIntro(){const e=this.physicsUtils.getSpawnEndPoint(),t=this.vehicleController.getMesh();if(!t){console.error("Vehicle mesh not found for skipping intro.");return}t.position.copy(e);const i=this.physicsUtils.getSpawnPoint(),n=new Ye;n.position.copy(i);const s=new M().subVectors(i,e),a=new M().addVectors(i,s);n.lookAt(a);const o=this.sceneManager.cameras.main;o.quaternion.copy(n.quaternion);const l=o.quaternion.clone(),c=new lt().setFromAxisAngle(new M(0,1,0),Math.PI/2);l.multiply(c),t.quaternion.copy(l),this.vehicleController.syncCameraToVehicle(),this.cinematicFollow.active=!1,this.isObservationCameraActive=!1,this.sceneManager.setActiveCamera("main"),this.introAnimation.enabled=!1,this.vehicleController.velocity.set(0,0,0),this.playerController.setState({introAnimating:!1}),this.playerController.setEnabled(!0),"ontouchstart"in window||navigator.maxTouchPoints>0||document.body.requestPointerLock(),this.uiManager.showInitialVehicleInstructions(),this.uiManager.showJoystickZones(),this._initializeTouchControls()}_setupMainPlatformMaterial(e){const t=e.getObjectByName("Main");if(!t){console.error("Could not find 'Main' mesh for material override.");return}const i=`assets/${this.assetLoader.quality}/`,n=this.assetLoader.get(i+"main-diffuse.ktx2"),s=this.assetLoader.get(i+"main-alpha.ktx2");if(!n||!s){console.error("Failed to load textures for 'Main' mesh from cache.");return}n.flipY=!1,n.colorSpace=dt,s.flipY=!1;const a=new Ci({map:n,emissiveMap:n,alphaMap:s,metalness:0,emissive:16777215,emissiveIntensity:1,transparent:!1,alphaTest:.5,side:qt});t.material=a}_placeCustomBuildingInstance(e,t){const i=this.assetLoader,n=this.sceneManager.scene,s=i.getBuildingAssets().find(a=>a.name===e);if(s){let a;if(e==="building4.glb"){const o=`assets/${this.assetLoader.quality}/`,l=this.assetLoader.get(o+"building4-cars-work.ktx2"),c=this.assetLoader.get(o+"building4-emission-decals.ktx2"),h=this.assetLoader.get(o+"BG-Buildings-Set1_PBR_Roughness-Metalness.ktx2");if(!l||!c||!h){console.error("One or more textures for the custom building4.glb instance were not found in the cache.");return}l.flipY=!1,l.colorSpace=dt,c.flipY=!1,c.colorSpace=dt,h.flipY=!1,a=new Ci({map:l,emissiveMap:c,roughnessMap:h,metalnessMap:h,emissive:16777215,emissiveIntensity:5})}else a=s.originalMaterial;if(s.geometry){const o=new Mt(s.geometry,a),{position:l,rotation:c,dimensions:h}=t;o.position.set(l.x,l.z,-l.y),o.rotation.set(zi.degToRad(c.x),zi.degToRad(c.z),zi.degToRad(-c.y),"XYZ");const u=new M;new ri().setFromObject(new Mt(s.geometry)).getSize(u),u.x===0&&(u.x=1),u.y===0&&(u.y=1),u.z===0&&(u.z=1);const d=h.x,A=h.z,g=h.y;o.scale.set(d/u.x,A/u.y,g/u.z),o.castShadow=!0,o.receiveShadow=!0,n.add(o);const E=new ri().setFromObject(new Mt(s.geometry)),p=E.getSize(new M),m=E.getCenter(new M),C=me.BUILDING_COLLIDER_CONFIG[e];let x=p.y,I=m.y;C&&(x=p.y*C.heightScale,I=m.y-(p.y-x)/2,C.offsetX&&(m.x+=C.offsetX));const L=new ei({color:16711680,wireframe:!0,visible:!1});if(e!=="building7.glb"){const b=new wi(p.x,x,p.z);b.translate(m.x,I,m.z);const B=new Mt(b,L);B.position.copy(o.position),B.quaternion.copy(o.quaternion),B.scale.copy(o.scale),this.physicsUtils.addVehicleCollidableMesh(B),this.cityManager.buildingColliders.add(B)}else{const b=new Hi,B=me.BUILDING_COLLIDER_CONFIG[e];let G=p.y;B&&(G=p.y*B.heightScale);const S=m.y-(p.y-G)/2,y=B.shapeScale||1,O=p.x*y,X=p.z*.25*y,P=p.x*.3*y,j=p.z*y,K=new wi(O,G,X);K.translate(m.x,S,m.z);const oe=new Mt(K,L),ie=new wi(P,G,j);ie.translate(m.x,S,m.z);const V=new Mt(ie,L);b.add(oe),b.add(V),b.position.copy(o.position),b.quaternion.copy(o.quaternion),b.scale.copy(o.scale),this.cityManager.buildingColliders.add(b),this.physicsUtils.addVehicleCollidableMesh(b)}}else console.warn(`Could not place custom instance: geometry for ${e} not found.`)}else console.warn(`Could not place custom instance: asset ${e} not found.`)}_setupHolograms(e){const t=this.hologramManager.getHologramMaterial(),i=[];e.traverse(n=>{if(n.isMesh)switch(n.name){case"Hologram1":this.hologram1Mesh=n,n.material=t,i.push(n);break}}),this.hologramManager.setHologramMeshes(i)}_setupVideoScreens(e){const t=this.assetLoader.quality==="ultra"?"assets/video-atlas-ultra.mp4":"assets/video-atlas.mp4",i={A:{uv_offset:new Ae(0,0),brightness:1},B:{uv_offset:new Ae(.5,0),brightness:.6},C:{uv_offset:new Ae(0,.5),brightness:.25},D:{uv_offset:new Ae(.5,.5),brightness:.5}},n=new Ae(.5,.5),s=document.createElement("video");s.src=t,s.loop=!0,s.muted=!0,s.playsInline=!0,s.play();const a=new jg(s);a.flipY=!1;const o={uniforms:{tDiffuse:{value:a},time:{value:0},brightness:{value:1},uv_scale:{value:n},uv_offset:{value:new Ae(0,0)}},vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `,fragmentShader:`
                uniform sampler2D tDiffuse;
                uniform float time;
                uniform float brightness;
                uniform vec2 uv_scale;
                uniform vec2 uv_offset;
                varying vec2 vUv;

                // --- Shader Parameters ---
                const float SCANLINE_INTENSITY = 0.25; // How visible the scanlines are
                const float SCANLINE_THICKNESS = 800.0; // Higher numbers for thinner lines, adjust for desired look
                const float VIGNETTE_INTENSITY = 0.4; // How dark the corners are

                void main() {
                    // 1. Apply UV transformation from the video atlas
                    vec2 transformedUv = (vUv * uv_scale) + uv_offset;

                    // 2. Calculate values for Vignette based on the screen's own UVs
                    // Map screen UVs to be centered (-1.0 to 1.0)
                    vec2 centeredUv = (vUv - 0.5) * 2.0; // Use vUv here
                    float dist = dot(centeredUv, centeredUv);
                    
                    // 3. Sample the video texture using the transformed UVs
                    vec3 videoColor = texture2D(tDiffuse, transformedUv).rgb;

                    // 4. Scanlines
                    // Use the original vertical UV for a stable scanline effect
                    float scanlineEffect = sin(vUv.y * SCANLINE_THICKNESS) * 0.5 + 0.5;
                    scanlineEffect = pow(scanlineEffect, 2.0); // Sharpen the sine wave to make lines thinner
                    videoColor.rgb *= 1.0 - (scanlineEffect * SCANLINE_INTENSITY);

                    // 5. Vignette
                    // Use the distance from the screen's center calculated earlier
                    float vignette = 1.0 - dist * VIGNETTE_INTENSITY;
                    videoColor.rgb *= vignette;

                    // Final color with brightness
                    vec3 final_color = videoColor * brightness;

                    gl_FragColor = vec4(clamp(final_color, 0.0, 1.0), 1.0);
                }
            `};this.crtMaterial=new St(o),this.debugManager&&this.debugManager.setupCrtControls(this.crtMaterial);const l=e.getObjectByName("Arcade-Screen"),c=e.getObjectByName("Arcade-Instance-A");if(!l||!c){console.error("Missing template objects (Arcade-Screen or Arcade-Instance-A). Cannot create screens.");return}for(const[h,u]of Object.entries(i)){const d=e.getObjectByName(`Arcade-Instance-${h}`);if(!d){console.warn(`Could not find Arcade-Instance-${h}. Skipping screen creation.`);continue}const A=this.crtMaterial.clone();if(A.uniforms.uv_offset.value=u.uv_offset,A.uniforms.brightness.value=u.brightness,this.animatedBuildingMaterials.push(A),h==="A")l.material=A;else{const g=l.clone();g.name=`Arcade-${h}-Screen`,g.material=A;const E=c.matrixWorld.clone().invert(),p=new Le().multiplyMatrices(E,l.matrixWorld);g.matrix.copy(new Le().multiplyMatrices(d.matrixWorld,p)),g.matrix.decompose(g.position,g.quaternion,g.scale),this.sceneManager.scene.add(g)}}}_setupAnimatedMaterials(e){const t=e.getObjectByName("Animated-Textures-Solid");if(t){const n=this.assetLoader.get(`assets/${this.assetLoader.quality}/building4-cars-work.ktx2`);if(n){n.flipY=!1,n.colorSpace=dt;const s=new Zs(new Uint8Array([0,0,0,255]),1,1,Bt);s.needsUpdate=!0;const a=Yc.createAnimatedMaterial({texture:s,emissiveMap:n,emissive:16777215,emissiveIntensity:1.5,animatedRegions:[{animatedUVs:{u_min:0,v_min:0,u_max:.084,v_max:1},animationOptions:{direction:"vertical",speed:.1,reverse:!1}},{animatedUVs:{u_min:.085,v_min:0,u_max:.169,v_max:1},animationOptions:{direction:"vertical",speed:.1,reverse:!0}}]});a&&(t.material=a,this.animatedBuildingMaterials.push(a))}else console.error("Could not find texture for Animated-Textures-Solid in cache.")}const i=e.getObjectByName("Animated-Textures-Transparent");if(i){const n=this.assetLoader.get(`assets/${this.assetLoader.quality}/building4-emission-decals.ktx2`);if(n){n.flipY=!1,n.colorSpace=dt;const s=Yc.createAnimatedMaterial({texture:n,emissiveMap:n,emissive:16777215,emissiveIntensity:-.5,alphaTest:.1,animatedRegions:[{animatedUVs:{u_min:0,v_min:0,u_max:.017,v_max:1},animationOptions:{direction:"vertical",speed:.1,reverse:!1}},{animatedUVs:{u_min:.017,v_min:0,u_max:.272,v_max:.255},animationOptions:{type:"rotate",speed:.5,reverse:!0}},{animatedUVs:{u_min:.279,v_min:0,u_max:.284,v_max:.5},animationOptions:{direction:"vertical",speed:.1,reverse:!1}},{animatedUVs:{u_min:.291,v_min:0,u_max:.307,v_max:1},animationOptions:{direction:"vertical",speed:.1,reverse:!1}},{animatedUVs:{u_min:.31,v_min:0,u_max:.327,v_max:1},animationOptions:{direction:"vertical",speed:.1,reverse:!1}},{animatedUVs:{u_min:.666,v_min:0,u_max:.784,v_max:1},animationOptions:{direction:"vertical",speed:.1,reverse:!1}},{animatedUVs:{u_min:.788,v_min:0,u_max:.871,v_max:1},animationOptions:{direction:"vertical",speed:.1,reverse:!0}},{animatedUVs:{u_min:.872,v_min:0,u_max:1,v_max:1},animationOptions:{direction:"vertical",speed:.1,reverse:!0}},{animatedUVs:{u_min:.02,v_min:.753,u_max:.082,v_max:1},animationOptions:{direction:"vertical",speed:.2,reverse:!0}},{animatedUVs:{u_min:.083,v_min:.752,u_max:.186,v_max:1},animationOptions:{direction:"vertical",speed:.2,reverse:!0}},{animatedUVs:{u_min:.187,v_min:.752,u_max:.289,v_max:1},animationOptions:{direction:"vertical",speed:.2,reverse:!0}},{animatedUVs:{u_min:.083,v_min:.504,u_max:.186,v_max:.752},animationOptions:{direction:"vertical",speed:.2,reverse:!0}},{animatedUVs:{u_min:.187,v_min:.504,u_max:.289,v_max:.752},animationOptions:{direction:"vertical",speed:.2,reverse:!0}}]});s&&(i.material=s,this.animatedBuildingMaterials.push(s))}else console.error("Could not find texture for Animated-Textures-Transparent in cache.")}}_createCrtScreen(e,t,i,n){const s=e.clone();s.uniforms.uv_scale.value=i,s.uniforms.uv_offset.value=n,this.animatedBuildingMaterials.push(s);const a=t.getObjectByName("Arcade-Screen").clone();return a.material=s,a}pause(){this.isPaused=!0}resume(){this.isPaused&&(this.isPaused=!1)}animate(e){if(requestAnimationFrame(this.animate.bind(this)),this.isPaused)return;const t=Math.min(this.clock.getDelta(),Gv);if(this.rain&&this.isPreloading&&this.rain.update(t,this.sceneManager.cameras.observation),this.introAnimation.enabled){const i=(this.clock.getElapsedTime()-this.introAnimation.startTime)*1e3,n=this.introAnimation.duration,s=Math.min(i/n,1),a=.6;let o=s;if(s>a){const u=(s-a)/(1-a),d=-Math.pow(u,3)+Math.pow(u,2)+u;o=a+d*(1-a)}const l=new M().lerpVectors(this.introAnimation.startPos,this.introAnimation.endPos,o);this.vehicleController.vehicleMesh&&this.vehicleController.vehicleMesh.position.copy(l);const c=new M().subVectors(this.introAnimation.endPos,this.introAnimation.startPos).normalize(),h=1-s;this.vehicleController.velocity.copy(c).multiplyScalar(me.VEHICLE_FLY_SPEED*h),this.vehicleController.syncCameraToVehicle()}if(this.cinematicFollow.active){const i=this.sceneManager.cameras.observation,n=this.sceneManager.cameras.main,s=(this.clock.getElapsedTime()-this.cinematicFollow.startTime)*1e3;let a=Math.min(s/this.cinematicFollow.transitionDuration,1);a=a<.5?4*a*a*a:1-Math.pow(-2*a+2,3)/2,i&&n&&(i.position.copy(this.cinematicFollow.transitionStartPosition).lerp(n.position,a),i.quaternion.copy(this.cinematicFollow.transitionStartQuaternion).slerp(n.quaternion,a),a>=1&&(this.cinematicFollow.active=!1,this.isObservationCameraActive=!1,this.sceneManager.setActiveCamera("main"),this.uiManager.showIntroSequence()))}if(this.introAnimation.enabled){const i=(this.clock.getElapsedTime()-this.introAnimation.startTime)*1e3,n=this.introAnimation.duration;Math.min(i/n,1)>=1&&(this.introAnimation.enabled=!1,this.vehicleController.velocity.set(0,0,0),this.playerController.setState({introAnimating:!1}),this.playerController.setEnabled(!0),"ontouchstart"in window||navigator.maxTouchPoints>0||document.body.requestPointerLock(),this.uiManager.showInitialVehicleInstructions(),this.uiManager.showJoystickZones(),this._initializeTouchControls())}if(this.stats&&this.stats.update(),this.uiManager&&this.uiManager.fpsCounterElement.style.display!=="none"){const i=this.stats.getFps();this.uiManager.updateFpsCounter(i)}for(const i of this.animatedBuildingMaterials)i.uniforms.time.value+=t;if(!this.isInitialized){this.sceneManager.render();return}if(this.crtMaterial){const i=this.crtMaterial.uniforms;for(const n of this.animatedBuildingMaterials)n.uniforms.scanlineIntensity&&(n.uniforms.scanlineIntensity.value=i.scanlineIntensity.value,n.uniforms.scanlineSpeed.value=i.scanlineSpeed.value,n.uniforms.scanlineSharpness.value=i.scanlineSharpness.value,n.uniforms.phosphorIntensity.value=i.phosphorIntensity.value,n.uniforms.phosphorSize.value=i.phosphorSize.value,n.uniforms.scanlineGap.value=i.scanlineGap.value,n.uniforms.noiseIntensity.value=i.noiseIntensity.value)}if(this.hologram1Mesh&&(this.hologram1Mesh.rotation.y+=.5*t),!!this.isInitialized){if(this.playerController.update(t),this.touchControls&&this.touchControls.update(),this.cityManager.update(),this.interactionManager.update(),this.collectiblesManager.update(t,this.playerController.camera.position),this.airTrafficManager.update(t),this.elevatorManager.update(t),this.ziplineManager.update(t),this.isPreloading||this.rain.update(t,this.sceneManager.activeCamera),this.raceManager.update(t),this.hologramManager.update(t),this.isPlayerInControl&&this.vehicleController&&this.vehicleController.getMesh()){const i=this.getControlsState();this.vehicleController.updateMovement(t,i),this.vehicleController.updateEffects(t)}else this.vehicleController&&this.vehicleController.getMesh()&&this.vehicleController.updateEffects(t,!0);this.uiManager,this.sceneManager.render()}}_initializeTouchControls(){("ontouchstart"in window||navigator.maxTouchPoints>0)&&(this.touchControls||(this.touchControls=new Ov(this.playerController,this.uiManager),this.uiManager.setTouchControls(this.touchControls)))}}new zv;
