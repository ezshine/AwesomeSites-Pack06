import{S as K,i as L,s as M,e as p,k as D,j as G,t as U,c as _,a as v,d as f,n as $,m as B,g as ee,b as g,f as N,I as i,o as O,Q as te,x as V,u as X,v as Q,l as W,w as se,ae,r as oe,O as I,P as T}from"../../../chunks/vendor-e41d84ae.js";import{R as Z}from"../../../chunks/RandomText-f5deae35.js";function z(n){let a,o,e,t,r,h,m,b,k,y,u,j,w,d,q,s,C,x,H,P,F={label:"Hi there, fellow human. I feel more at ease now. Because you know they are watching, right? The AI.",autoShow:!1,speed:.65};u=new Z({props:F}),n[7](u);let J={label:"Anyway, I'll show you what I've been up to on a professional level.",autoShow:!1,speed:.65};return d=new Z({props:J}),n[8](d),{c(){a=p("div"),o=p("div"),e=p("div"),t=p("div"),r=D(),h=p("div"),m=D(),b=p("div"),k=D(),y=p("p"),G(u.$$.fragment),j=D(),w=p("p"),G(d.$$.fragment),q=D(),s=p("div"),C=U("Go back into time"),this.h()},l(c){a=_(c,"DIV",{class:!0});var E=v(a);o=_(E,"DIV",{class:!0});var S=v(o);e=_(S,"DIV",{class:!0});var l=v(e);t=_(l,"DIV",{class:!0}),v(t).forEach(f),r=$(l),h=_(l,"DIV",{class:!0}),v(h).forEach(f),m=$(l),b=_(l,"DIV",{class:!0}),v(b).forEach(f),k=$(l),y=_(l,"P",{class:!0});var R=v(y);B(u.$$.fragment,R),R.forEach(f),j=$(l),w=_(l,"P",{class:!0});var Y=v(w);B(d.$$.fragment,Y),Y.forEach(f),q=$(l),s=_(l,"DIV",{class:!0});var A=v(s);C=ee(A,"Go back into time"),A.forEach(f),l.forEach(f),S.forEach(f),E.forEach(f),this.h()},h(){g(t,"class","bar svelte-11qchjm"),g(h,"class","bg bg1 svelte-11qchjm"),g(b,"class","bg bg2 svelte-11qchjm"),g(y,"class","svelte-11qchjm"),g(w,"class","svelte-11qchjm"),g(s,"class","button svelte-11qchjm"),g(e,"class","body svelte-11qchjm"),g(o,"class","center svelte-11qchjm"),g(a,"class","wrapper svelte-11qchjm")},m(c,E){N(c,a,E),i(a,o),i(o,e),i(e,t),i(e,r),i(e,h),i(e,m),i(e,b),i(e,k),i(e,y),O(u,y,null),i(e,j),i(e,w),O(d,w,null),i(e,q),i(e,s),i(s,C),n[9](s),n[10](e),x=!0,H||(P=te(s,"click",n[5],{once:!0}),H=!0)},p(c,E){const S={};u.$set(S);const l={};d.$set(l)},i(c){x||(V(u.$$.fragment,c),V(d.$$.fragment,c),x=!0)},o(c){X(u.$$.fragment,c),X(d.$$.fragment,c),x=!1},d(c){c&&f(a),n[7](null),Q(u),n[8](null),Q(d),n[9](null),n[10](null),H=!1,P()}}}function ne(n){let a,o,e=!n[4]&&z(n);return{c(){e&&e.c(),a=W()},l(t){e&&e.l(t),a=W()},m(t,r){e&&e.m(t,r),N(t,a,r),o=!0},p(t,[r]){t[4]?e&&(oe(),X(e,1,1,()=>{e=null}),se()):e?(e.p(t,r),r&16&&V(e,1)):(e=z(t),e.c(),V(e,1),e.m(a.parentNode,a))},i(t){o||(V(e),o=!0)},o(t){X(e),o=!1},d(t){e&&e.d(t),t&&f(a)}}}function re(n,a,o){const e=ae();let t,r,h,m,b=!1;function k(){I.set(t,{opacity:1,height:20}),I.set(t,{rotationX:-20});var s=I.timeline();s.from(t,{delay:.2,duration:.25,opacity:0,scaleX:0,ease:"power2.out"}),s.to(t,{duration:.6,height:200,rotationX:10,ease:"power2.in"}),setTimeout(r.show,700),setTimeout(h.show,1200),I.set(m,{opacity:1}),I.from(m,{delay:1.4,duration:.45,opacity:0,scaleY:2,scaleX:.6,ease:"back.out"})}function y(){e("hide"),I.to(t,{duration:1.7,scaleX:.5,scaleY:.5,rotationX:360,rotationY:0,rotationZ:-360,opacity:0,ease:"power4.out",onComplete:u})}function u(){o(4,b=!0)}function j(s){T[s?"unshift":"push"](()=>{r=s,o(1,r)})}function w(s){T[s?"unshift":"push"](()=>{h=s,o(2,h)})}function d(s){T[s?"unshift":"push"](()=>{m=s,o(3,m)})}function q(s){T[s?"unshift":"push"](()=>{t=s,o(0,t)})}return[t,r,h,m,b,y,k,j,w,d,q]}class ce extends K{constructor(a){super();L(this,a,re,ne,M,{show:6})}get show(){return this.$$.ctx[6]}}export{ce as default};