const __vite__fileDeps=["./CDIQ60Zc.js","./Ccpt04WP.js","./CmfzVdrr.js","./entry.D3dAUKu_.css","./CpY-ecYb.js","./Text.CKk_Bt37.css","./Image.VjSnB9k1.css","./4V-YWko9.js","./Link.9EF8qhOk.css","./J5_53up9.js","./Entry.BTM3NXdN.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{P as a,ao as J,q as W,B as w,ap as X,Z as Y,S as M,aq as ee,r as B,o as s,c as d,w as T,G as b,H as k,O as te,K as O,L as ae,x as re,an as ne,F as z,a as F,f as N,m as oe,b as i,p as le,g as R,E as se,ar as ie,a1 as ue,i as V,_ as H}from"./CmfzVdrr.js";import{_ as ce}from"./CpY-ecYb.js";import{_ as de}from"./4V-YWko9.js";import{u as me}from"./BxVVLviT.js";const _e=`
  fragment PageThumb on Page {
    _type
    title
    slug {
      current
    }
    url {
      current
    }
    thumbImage {
      ...ImageInterface
    }
  }
`,fe=async({api:e,key:c,query:_,variables:r,route:f={query:{}}})=>{var v,g;const n=a(),o=a(),{data:p}=J(c);if(p.value)n.value=p.value[e==="groq"?"result":"data"];else{const{data:y,error:$}=await me("/api/data",{key:c,query:{key:c,...f.query},body:{api:e,query:_,variables:r},method:"POST"},"$KH5zkEBP0a");n.value=(v=y.value)==null?void 0:v[e==="groq"?"result":"data"],o.value=((g=y.value)==null?void 0:g.errors)||$.value,o.value&&console.error(o.value)}return{data:n,error:o}},pe=`
  fragment ImageInterface on ImageAsset {
    _type
    _id
    title
    default {
      key
      alt
      url
      format
      width
      height
      sizes {
        _key
        url
        width
      }
    }
    mobile {
      key
      alt
      url
      format
      width
      height
      sizes {
        _key
        url
        width
      }
    }
    captionRaw
  }
`,ve=`
  ${_e}
  ${pe}
  query (
    $lang: String!
    $limit: Int
    $offset: Int
    $orderBy: [PageSorting!] = [{ _createdAt: DESC }]
    $preview: Boolean = false
  ) {
    entries: allPage(
      sort: $orderBy
      limit: $limit
      offset: $offset
      where: { language: { eq: $lang }, _: { is_draft: $preview } }
    ) {
      ...PageThumb
    }
  }
`,ge=V(()=>H(()=>import("./CDIQ60Zc.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url).then(e=>e.default||e)),ye=V(()=>H(()=>import("./J5_53up9.js"),__vite__mapDeps([9,1,2,3,4,5,6,10]),import.meta.url).then(e=>e.default||e)),he=["innerHTML"],Ie={__name:"Archive",props:{type:{type:String,default:""},heading:{type:String,default:""},link:{type:Object,default:()=>{}},space:{type:String,default:"l"},theme:{type:String,default:""},limit:{type:Number,default:6},order:{type:[String,Array]},loadMore:{type:Boolean,default:!0}},async setup(e){let c,_;const r=e,f=W(),n=a(f.query.paged?parseInt(f.query.paged):1),o=a(n.value?(n.value-1)*r.limit:0),p=new Map([["page",ge]]),v=new Map([["archiveEntries",ye]]),g=w(()=>`${r.type}-${n.value}`),{locale:y}=X(),$=w(()=>({lang:y.value,limit:r.limit,offset:o.value,...r.order?{orderBy:r.order}:{}}));let I;const P=a([]),S=a(0),q=a(),L=a(),h=a("button"),m=a(!0),x=a(!1),K=w(()=>m.value?Math.min(S.value-P.value.length,r.limit):0),C=async()=>{m.value=!0;const{data:t}=await fe({key:g.value,query:ve,variables:$.value,lazy:!0});M(t,u=>{m.value=!1,u&&(S.value=u.entryCount,P.value.push(...u.entries),q.value=o.value+u.entries.length<S.value,q.value?n.value+=1:I&&I())},{immediate:!0})};[c,_]=Y(()=>C()),await c,_();const D=t=>{t&&t.preventDefault(),o.value+=r.limit,h.value==="button"&&(h.value="infinite"),C()},Q=w(()=>({query:{paged:n.value}}));return M(h,t=>{if(t==="infinite"){const{stop:u}=ee(L,([{isIntersecting:E}])=>{E&&(m.value?x.value=!0:D())});I=u}}),M(m,t=>{!t&&x.value&&(D(),x.value=!1)}),(t,u)=>{const E=ce,A=de,j=ue,G=B("lay"),U=B("grid"),Z=B("visible");return s(),d("div",null,[T((s(),d("div",null,[b(E,{tag:"h3"},{default:k(()=>[te("span",{innerHTML:e.heading},null,8,he)]),_:1}),b(A,re(ne(e.link)),{default:k(()=>{var l;return[O(ae((l=e.link)==null?void 0:l.text),1)]}),_:1},16)])),[[G,{dir:"h",align:["end","even"]}]]),T((s(),d("div",null,[(s(!0),d(z,null,F(i(P),l=>(s(),N(R(i(p).get(l._type)),oe({key:l.id,ref_for:!0},("parsedData"in t?t.parsedData:i(le))(l,l._type)),null,16))),128)),b(j,null,{default:k(()=>[(s(!0),d(z,null,F(i(K),l=>(s(),N(R(i(v).get(e.type))))),256))]),_:1})])),[[U,3]]),T((s(),d("div",{ref_key:"loadMoreEl",ref:L},[b(A,{external:"",onClick:ie(D,["prevent"]),url:i(Q)},{default:k(()=>[O("Load more")]),_:1},8,["url"])])),[[se,i(q)],[Z,i(h)==="button"]])])}}};export{Ie as default};
