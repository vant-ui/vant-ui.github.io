import{c as N,h as B,n as j,d as V,m as D,f as F,J as O,a as U}from"./use-translate.7b7055b3.js";import{c as h,w as I}from"./with-install.a0877b0b.js";import{t as q}from"./util.e9d44d74.js";import{I as H}from"./index.bc61928d.js";import{A as S,u as f,D as L,M,q as z,e as a,B as J,S as Q,Q as G,o as s,c as p,w as c,C as e,a as g,F as d,b as k,f as b,h as K,t as R,d as W}from"./vue-libs.d5ee895a.js";import{a as v,T as X}from"./index.b6891a8c.js";import{C as y}from"./index.b878185c.js";import"./index.16bdfc10.js";import"./use-id.283fca96.js";import"./use-expose.77504c28.js";import"./use-route.55b36618.js";import"./index.25303511.js";import"./use-touch.e8c4f7e8.js";import"./on-popup-reopen.5b484164.js";import"./constant.e12a51b9.js";import"./interceptor.adacec7f.js";import"./use-refs.9408eccb.js";import"./index.6c1120f3.js";function Y(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!G(o)}const[Z,C]=N("back-top"),$={right:h(30),bottom:h(40),target:[String,Object],visibilityHeight:h(200),teleport:{type:[String,Object],default:"body"}},tt=S({name:Z,inheritAttrs:!1,props:$,emits:["click"],setup(o,{emit:n,slots:l,attrs:i}){const u=f(!1),_=f(),m=f(null);let t;const w=L(()=>({right:B(o.right),bottom:B(o.bottom)})),A=r=>{n("click",r),t.scrollTo({top:0,behavior:"smooth"})},P=()=>{u.value=O(t)>=o.visibilityHeight},x=()=>{const{target:r}=o;if(typeof r=="string"){const E=document.querySelector(o.target);if(!E)throw Error("[Vant] BackTop: target element is not found.");return E}if(F(r))return r;throw Error('[Vant] BackTop: type of prop "target" should be a selector or an element object')};return j("scroll",q(P,300),{target:_}),M(()=>{z(()=>{V&&(t=o.target?x():D(m.value),_.value=t)})}),()=>{const r=a("div",J({ref:m,class:C({active:u.value}),style:w.value,onClick:A},i),[l.default?l.default():a(H,{name:"back-top",class:C("icon")},null)]);return o.teleport?a(Q,{to:o.teleport},Y(r)?r:{default:()=>[r]}):r}}}),T=I(tt),yt=S({__name:"index",setup(o){const n=U({"zh-CN":{backTop:"\u8FD4\u56DE\u9876\u90E8",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",customPosition:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E",setScrollTarget:"\u8BBE\u7F6E\u6EDA\u52A8\u76EE\u6807"},"en-US":{backTop:"Back Top",customContent:"Custom Content",customPosition:"Custom Position",setScrollTarget:"Set Scroll Target"}}),l=f(0),i=[...Array(50).keys()],u=f();return(_,m)=>(s(),p(e(X),{active:l.value,"onUpdate:active":m[0]||(m[0]=t=>l.value=t)},{default:c(()=>[a(e(v),{title:e(n)("basicUsage")},{default:c(()=>[(s(),g(d,null,k(i,t=>a(e(y),{key:t,title:t},null,8,["title"])),64)),l.value===0?(s(),p(e(T),{key:0})):b("",!0)]),_:1},8,["title"]),a(e(v),{title:e(n)("customPosition")},{default:c(()=>[(s(),g(d,null,k(i,t=>a(e(y),{key:t,title:t},null,8,["title"])),64)),l.value===1?(s(),p(e(T),{key:0,right:"15vw",bottom:"10vh"})):b("",!0)]),_:1},8,["title"]),a(e(v),{title:e(n)("customContent")},{default:c(()=>[(s(),g(d,null,k(i,t=>a(e(y),{key:t,title:t},null,8,["title"])),64)),l.value===2?(s(),p(e(T),{key:0,class:"custom-back-top"},{default:c(()=>[K(R(e(n)("backTop")),1)]),_:1})):b("",!0)]),_:1},8,["title"]),a(e(v),{title:e(n)("setScrollTarget")},{default:c(()=>[W("div",{class:"back-top-wrapper",ref_key:"targetEl",ref:u},[(s(),g(d,null,k(i,t=>a(e(y),{key:t,title:t},null,8,["title"])),64)),l.value===3?(s(),p(e(T),{key:0,target:u.value,bottom:"30vh"},null,8,["target"])):b("",!0)],512)]),_:1},8,["title"])]),_:1},8,["active"]))}});export{yt as default};