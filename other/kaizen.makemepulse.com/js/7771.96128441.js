"use strict";(self["webpackChunkgl_starter"]=self["webpackChunkgl_starter"]||[]).push([[7771],{62642:function(t,e,n){n.r(e),n.d(e,{Back:function(){return i.eJ},Bounce:function(){return i.sm},CSSPlugin:function(){return s._Z},Circ:function(){return i.zO},Cubic:function(){return i.Ll},Elastic:function(){return i.tQ},Expo:function(){return i.Au},Linear:function(){return i.bJ},Power0:function(){return i.qD},Power1:function(){return i.EA},Power2:function(){return i.Lp},Power3:function(){return i.Aq},Power4:function(){return i.Yp},Quad:function(){return i.lD},Quart:function(){return i.CQ},Quint:function(){return i.gU},Sine:function(){return i.Yv},SteppedEase:function(){return i.NB},Strong:function(){return i.cK},TimelineLite:function(){return i.Vq},TimelineMax:function(){return i.b_},TweenLite:function(){return i.iC},TweenMax:function(){return o},default:function(){return r},gsap:function(){return r}});var i=n(25317),s=n(9975),r=i.p8.registerPlugin(s._Z)||i.p8,o=r.core.Tween},49840:function(t,e,n){n.d(e,{AF:function(){return r},Bb:function(){return s},Io:function(){return a},il:function(){return c},lb:function(){return u},qe:function(){return o}});var i=n(2262);const s=(0,i.qj)({isSubtitleShowed:!1,url:"",showReaction:!1,reactionDuration:0,reactioName:""}),r=t=>{s.isSubtitleShowed=t},o=t=>{s.url=t},u=t=>{s.showReaction=t},c=t=>{s.reactioName=t},a=t=>{s.reactionDuration=t}},8034:function(t,e,n){n.r(e),n.d(e,{default:function(){return T}});var i=n(62642),s=n(88271),r=n(63887),o=n(2246),u=n(97703),c=n(46381),a=n(11821),h=n(5434),d=n(6608),l=n(94292),p=n(25409),f=n(68310);const S=r.vec3.create();class T{constructor(t){this.renderer=t,this.postProcessTransition={value:0},this.introStarted=!1,this.introPlaying=!1,this.isSkipped=!1,this.hasClicked=!1,this.secondTlStarted=!1,this.changeState=async t=>{var e;if(t.matches("intro.voice_over")&&!this.introPlaying&&(this.introPlaying=!0,await(0,o.Z)(1500),this.clouds.onClick(),p["default"].playIntro(),this.renderer.scene.isOutroPlaying.value=!0,this.introSheet.sequence.play().then((()=>{u["default"].state.getSnapshot().context.introSkipped||(this.startSecondTl(),this.showTitleScreen(!0))}))),"SKIP_INTRO"===(null===(e=t.event)||void 0===e?void 0:e.type)){this.isSkipped=!0,p["default"].skipIntro();const t=5;this.showTitleScreen(!0),await this.clouds.goToTlEnd(),this.introSheet.sequence.pause(),this.clouds.timelineCloudsDone=!0;const e=i["default"].timeline({onComplete:()=>{this.startSecondTl(!0)}});e.add(this.introBackground.goToTlEnd(t),0)}},this.onClick=()=>{if(this.hasClicked)return;const t=u["default"].state.getSnapshot();t.matches("intro.loader.ready")&&(p["default"].playUI("kaizen_cta"),this.hasClicked=!0,u["default"].state.send("NEXT"))},this.onKeyUp=t=>{" "!==t.key||this.hasClicked||this.onClick()},this.showTitleScreen=t=>{const{showTitle:e}=u["default"].state.getSnapshot().context;t&&!e&&u["default"].state.send("SET_SHOW_TITLE")},window.addEventListener("click",this.onClick),window.addEventListener("touchstart",this.onClick),window.addEventListener("keyup",this.onKeyUp),this.introSheet=u["default"].state.machine.context.theatreProject.project.sheet("intro"),this.introTransitionSheet=u["default"].state.machine.context.theatreProject.project.sheet("intro-transition"),this.cfg=l.Z.get(this.renderer.gl).config().depthMask(!1).enableDepthTest(!1).enableBlend(!0).blendFuncSeparate(this.renderer.gl.SRC_ALPHA,this.renderer.gl.ONE_MINUS_SRC_ALPHA,this.renderer.gl.ONE,this.renderer.gl.ONE_MINUS_SRC_ALPHA)}startSecondTl(t=!1){this.secondTlStarted||(this.secondTlStarted=!0,this.introBackground.useTransitionSheet(),t||p["default"].fadeOut(p.AUDIO_ID.INTRO_VO),this.introTransitionSheet.sequence.play().then((()=>{u["default"].state.send("NEXT"),this.renderer.scene.isOutroPlaying.value=!1})))}async load(){const{Clouds:t}=await n.e(5800).then(n.bind(n,25800)),{default:e}=await Promise.all([n.e(9400),n.e(6478),n.e(1236),n.e(8215),n.e(9327),n.e(5457)]).then(n.bind(n,75457)),{default:i}=await n.e(2052).then(n.bind(n,62052));this.perspectiveCam=new i(this.renderer),this.introBackground=new e(this.renderer),this.clouds=new t(this.renderer),this.introBackground.introSheet=this.introSheet,this.perspectiveCam.introSheet=this.introSheet,this.perspectiveCam.introTransitionSheet=this.introTransitionSheet,this.clouds.introSheet=this.introSheet,this.introBackground.introTransitionSheet=this.introTransitionSheet,this.perspectiveCam.introTransitionSheet=this.introTransitionSheet,this.clouds.introTransitionSheet=this.introTransitionSheet,await Promise.all([this.introBackground.load(),this.clouds.load()])}unload(){}async start(){const t=(await Promise.all([n.e(1236),n.e(7141)]).then(n.bind(n,17141))).default;this.stars=new t(this.renderer,20,2),this.stars.introSheet=this.introSheet,this.stars.introTransitionSheet=this.introTransitionSheet,this.isSkipped=!1,this.sequencePos=0,this.renderer.clearColor.set([0,.25,.4,1]),this.changeStateSubscription=u["default"].state.subscribe(this.changeState),this.unsubscribeSequenceLength=(0,c.onChange)(this.introSheet.sequence.pointer.length,(t=>{this.sequenceTime=t})),this.unsubscribeSequenceTransitionLength=(0,c.onChange)(this.introTransitionSheet.sequence.pointer.length,(t=>{this.sequenceTransitionTime=t})),this.titleScreenInTimeline=new a.Z(!1,this.showTitleScreen,this.introSheet,"titleScreenIn"),this.renderer.postprocess.enabled=!0,this.startVignetteColor=r.vec3.fromValues(this.renderer.postprocess.vignette.color[0],this.renderer.postprocess.vignette.color[1],this.renderer.postprocess.vignette.color[2]),this.startContrast=this.renderer.postprocess.contrast.contrast,this.renderer.postprocess.texturepass.textureLuminosity=.4,this.perspectiveCam.start(),this.introBackground.start(),this.clouds.start(),this.stars.start(),this.postProcessTransitionTheatre=new h.Z(this.postProcessTransition,this.introTransitionSheet,"postProcessTransition"),u["default"].state.send("INTRO_READY")}stop(){this.unsubscribeSequenceLength&&(this.unsubscribeSequenceLength(),this.unsubscribeSequenceTransitionLength(),this.renderer.clearColor.set([1,1,1,1]),this.changeStateSubscription.unsubscribe(),this.introBackground.stop(),this.perspectiveCam.stop(),this.clouds.stop(),this.stars.stop(),this.postProcessTransitionTheatre.dispose(),window.removeEventListener("click",this.onClick),window.removeEventListener("touchstart",this.onClick),window.removeEventListener("keyup",this.onKeyUp))}rttPass(){this.stars&&this.introBackground.rttPass()}preRender(){this.stars&&(d.ZP.loaded/d.ZP.toLoad>.8&&!this.introStarted&&(this.introStarted=!0,this.introBackground.playIntro()),this.sequencePos=this.isSkipped?(0,s.Z)(this.sequencePos,this.sequenceTime,.1):this.introSheet.sequence.position,this.renderer.scene.currOutroPercentage.value=this.sequenceTime+this.sequenceTransitionTime>0?(this.sequencePos+this.introTransitionSheet.sequence.position)/(this.sequenceTime+this.sequenceTransitionTime):0,this.perspectiveCam.preRender(),this.introBackground.preRender(),this.clouds.preRender(),this.stars.preRender())}lerpPostProcess(){this.renderer.postprocess.vignette.color=r.vec3.lerp(S,this.startVignetteColor,f.b9,this.postProcessTransition.value),this.renderer.postprocess.contrast.contrast=(0,s.Z)(this.startContrast,f.Yk,this.postProcessTransition.value)}render(t){this.stars&&(this.introBackground.render(),this.cfg.apply(),this.clouds.render(),this.stars.render(t))}}},68310:function(t,e,n){n.d(e,{Fw:function(){return v},Io:function(){return P},L5:function(){return h},P9:function(){return s},PT:function(){return T},S9:function(){return a},TC:function(){return p},TO:function(){return S},X3:function(){return g},XA:function(){return d},XL:function(){return l},Yk:function(){return C},b9:function(){return k},bW:function(){return f},dv:function(){return u},e6:function(){return o},f7:function(){return _},jQ:function(){return r},n2:function(){return b},p5:function(){return m},rX:function(){return w},sk:function(){return c},z8:function(){return q}});var i=n(63887);const s=20,r=80,o=-50,u=(i.vec3.fromValues(1,0,0),i.vec3.create()),c=i.vec3.create(),a=i.quat.create(),h=[.01,.36,.73,1],d=[.73,.64,.77],l=[.97,.78,.74],p=[.37,.24,.51],f=[.111,.443,.575,.58],S=[.207,.56,.65,.52],T=[.03,.29,.529,.4],g=[1,.84,.88],b=[1,.9,.78],v=[.75,.54,.58],m=.3,w=.3,k=[1,1,1],C=1.12,P=i.vec3.fromValues(-85,.5,20),q=i.vec3.fromValues(0,1,-80),_=i.quat.fromValues(0,0,0,1)},11821:function(t,e,n){n.d(e,{Z:function(){return s}});var i=n(46381);class s{constructor(t=!1,e,n,s){this.update=e,this.sheet=n,this.name=s;const r=n.object(s,{state:i.types.boolean(t)});this._unsubscribe=r.onValuesChange((t=>{this.update(t.state)})),this._obj=r}dispose(){this._unsubscribe(),this.sheet.detachObject(this.name)}}},5434:function(t,e,n){n.d(e,{Z:function(){return s}});var i=n(46381);class s{get value(){return this.number.value}constructor(t,e,n){this.number=t,this.sheet=e,this.name=n;const s=e.object(n,{x:i.types.number(t.value)});this._unsubscribe=s.onValuesChange((t=>{this.number.value=t.x})),this._obj=s}dispose(){this._unsubscribe(),this.sheet.detachObject(this.name)}}}}]);
//# sourceMappingURL=7771.96128441.js.map