import{S as u,i as f,s as d,e as h,j as m,c as p,a as _,m as v,d as c,b as g,f as $,o as y,J as w,x as S,u as b,v as x,A as j,O as i,P as k}from"../../../../chunks/vendor-e41d84ae.js";import V from"./svg/SvgVoice.svelte-49c8eae8.js";function C(o){let e,n,t;return n=new V({}),{c(){e=h("div"),m(n.$$.fragment),this.h()},l(s){e=p(s,"DIV",{class:!0});var a=_(e);v(n.$$.fragment,a),a.forEach(c),this.h()},h(){g(e,"class","call__left svelte-pv7v2k")},m(s,a){$(s,e,a),y(n,e,null),o[3](e),t=!0},p:w,i(s){t||(S(n.$$.fragment,s),t=!0)},o(s){b(n.$$.fragment,s),t=!1},d(s){s&&c(e),x(n),o[3](null)}}}function L(o,e,n){let t;function s(){i.set(t,{opacity:1,scale:1}),i.from(t,{delay:1.1,duration:.8,opacity:0,scale:3.5,ease:"power4.out"})}function a(){i.to(t,{delay:0,duration:.3,opacity:0,scale:1.8,ease:"power1.in"})}j(()=>{});function l(r){k[r?"unshift":"push"](()=>{t=r,n(0,t)})}return[t,s,a,l]}class D extends u{constructor(e){super();f(this,e,L,C,d,{show:1,hide:2})}get show(){return this.$$.ctx[1]}get hide(){return this.$$.ctx[2]}}export{D as default};