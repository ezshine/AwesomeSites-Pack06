import{S as R,i as V,s as z,ai as F,k as b,e as J,j as w,L as K,d as k,n as j,c as N,a as O,m as C,b as Q,f as B,o as v,I as D,x as y,u as S,v as T,H as U,A as X,a7 as Y,P as A}from"../../chunks/vendor-e41d84ae.js";import{g as Z}from"../../chunks/main.store-b2f445ba.js";import tt from"./grid/Grid.svelte-71afaf08.js";import et from"./card/CardAnimation.svelte-f0e596a4.js";import{E as nt}from"../../chunks/Extra-c69edcfb.js";import st from"./ui/ButtonStrip.svelte-c863f719.js";import rt from"./textCard/TextCard.svelte-a5d39658.js";import ot from"./bg/Background.svelte-713364f6.js";import"../../chunks/objectWrapper-56890d06.js";import"./card/Card.svelte-5fa7e6f2.js";import"../../chunks/airstripLights-436a2309.js";import"../../chunks/gridBlinker-76c2d313.js";import"../../chunks/RandomText-f5deae35.js";import"./bg/Welcome.svelte-bc572c89.js";import"./bg/HomeAnim.svelte-86a09e7b.js";function it(e){let _,n,m,f,i,c,r,d,o,g,a,h,u,$,E={};m=new tt({props:E}),e[9](m);let H={};i=new ot({props:H}),e[10](i);let x={};r=new rt({props:x}),e[11](r);let P={};o=new et({props:P}),e[12](o),o.$on("end",function(){F(e[2].show)&&e[2].show.apply(this,arguments)});let q={};a=new st({props:q}),e[13](a),a.$on("meet",e[6]),a.$on("switch",e[7]),a.$on("continue",e[8]);let s={section:"home",label:"home"};return u=new nt({props:s}),e[14](u),{c(){_=b(),n=J("div"),w(m.$$.fragment),f=b(),w(i.$$.fragment),c=b(),w(r.$$.fragment),d=b(),w(o.$$.fragment),g=b(),w(a.$$.fragment),h=b(),w(u.$$.fragment),this.h()},l(t){K('[data-svelte="svelte-n3ior8"]',document.head).forEach(k),_=j(t),n=N(t,"DIV",{class:!0});var p=O(n);C(m.$$.fragment,p),f=j(p),C(i.$$.fragment,p),c=j(p),C(r.$$.fragment,p),d=j(p),C(o.$$.fragment,p),p.forEach(k),g=j(t),C(a.$$.fragment,t),h=j(t),C(u.$$.fragment,t),this.h()},h(){document.title="Home",Q(n,"class","container svelte-6c80n8")},m(t,l){B(t,_,l),B(t,n,l),v(m,n,null),D(n,f),v(i,n,null),D(n,c),v(r,n,null),D(n,d),v(o,n,null),B(t,g,l),v(a,t,l),B(t,h,l),v(u,t,l),$=!0},p(t,[l]){e=t;const p={};m.$set(p);const G={};i.$set(G);const I={};r.$set(I);const L={};o.$set(L);const M={};a.$set(M);const W={};u.$set(W)},i(t){$||(y(m.$$.fragment,t),y(i.$$.fragment,t),y(r.$$.fragment,t),y(o.$$.fragment,t),y(a.$$.fragment,t),y(u.$$.fragment,t),$=!0)},o(t){S(m.$$.fragment,t),S(i.$$.fragment,t),S(r.$$.fragment,t),S(o.$$.fragment,t),S(a.$$.fragment,t),S(u.$$.fragment,t),$=!1},d(t){t&&k(_),t&&k(n),e[9](null),T(m),e[10](null),T(i),e[11](null),T(r),e[12](null),T(o),t&&k(g),e[13](null),T(a,t),t&&k(h),e[14](null),T(u,t)}}}function at(e,_,n){let m;U(e,Z,s=>n(15,m=s));let f,i,c,r,d,o;X(()=>{d.show(),setTimeout(g,2200)});function g(){o.show(),setTimeout(()=>{r.show("meet")},5100)}Y(()=>{});const a=()=>{o.hide(),f.showCard(),setTimeout(()=>{r.show("switch")},8500)},h=()=>{c.doSwitch(),f.hide(),i.show(),setTimeout(()=>{r.show("continue")},6500)},u=()=>{m("unlock")};function $(s){A[s?"unshift":"push"](()=>{c=s,n(2,c)})}function E(s){A[s?"unshift":"push"](()=>{o=s,n(5,o)})}function H(s){A[s?"unshift":"push"](()=>{i=s,n(1,i)})}function x(s){A[s?"unshift":"push"](()=>{f=s,n(0,f)})}function P(s){A[s?"unshift":"push"](()=>{r=s,n(3,r)})}function q(s){A[s?"unshift":"push"](()=>{d=s,n(4,d)})}return[f,i,c,r,d,o,a,h,u,$,E,H,x,P,q]}class Ct extends R{constructor(_){super();V(this,_,at,it,z,{})}}export{Ct as default};