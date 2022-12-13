import{c as N,h as B,n as D,d as F,m as j,L as V,a as O}from"./use-translate.a029ce72.js";import{n as S,c as U,w as I}from"./with-install.1dc27775.js";import{t as L}from"./util.35d88670.js";import{I as q}from"./index.0a9aad73.js";import{A as w,u as d,D as M,M as z,x as Q,e as a,B as G,S as H,Q as J,q as K,o as s,c as f,w as i,C as t,a as g,F as k,b as v,f as b,h as R,t as W,d as X}from"./vue-libs.d5ee895a.js";import{a as T,T as Y}from"./index.ab6be629.js";import{C as y}from"./index.6734f2fd.js";import"./index.3014f697.js";import"./use-id.283fca96.js";import"./use-expose.c6c7f4f7.js";import"./use-route.55b36618.js";import"./index.6b625a87.js";import"./use-touch.e8c4f7e8.js";import"./on-popup-reopen.5b484164.js";import"./constant.e12a51b9.js";import"./interceptor.2257d115.js";import"./use-refs.9408eccb.js";import"./index.dde3479a.js";function Z(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!J(o)}const[$,P]=N("back-top"),tt={right:S,bottom:S,target:[String,Object],offset:U(200),teleport:{type:[String,Object],default:"body"}},et=w({name:$,inheritAttrs:!1,props:tt,emits:["click"],setup(o,{emit:u,slots:l,attrs:c}){const m=d(!1),h=d(),n=d(),e=M(()=>({right:B(o.right),bottom:B(o.bottom)})),x=r=>{var p;u("click",r),(p=n.value)==null||p.scrollTo({top:0,behavior:"smooth"})},C=()=>{m.value=n.value?V(n.value)>=o.offset:!1},A=()=>{const{target:r}=o;if(typeof r=="string"){const p=document.querySelector(r);if(p)return p}else return r},E=()=>{F&&K(()=>{n.value=o.target?A():j(h.value),C()})};return D("scroll",L(C,100),{target:n}),z(E),Q(()=>o.target,E),()=>{const r=a("div",G({ref:h,class:P({active:m.value}),style:e.value,onClick:x},c),[l.default?l.default():a(q,{name:"back-top",class:P("icon")},null)]);return o.teleport?a(H,{to:o.teleport},Z(r)?r:{default:()=>[r]}):r}}}),_=I(et),yt=w({__name:"index",setup(o){const u=O({"zh-CN":{backTop:"\u8FD4\u56DE\u9876\u90E8",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",customPosition:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E",setScrollTarget:"\u8BBE\u7F6E\u6EDA\u52A8\u76EE\u6807"},"en-US":{backTop:"Back Top",customContent:"Custom Content",customPosition:"Custom Position",setScrollTarget:"Set Scroll Target"}}),l=d(0),c=[...Array(50).keys()],m=d();return(h,n)=>(s(),f(t(Y),{active:l.value,"onUpdate:active":n[0]||(n[0]=e=>l.value=e)},{default:i(()=>[a(t(T),{title:t(u)("basicUsage")},{default:i(()=>[(s(),g(k,null,v(c,e=>a(t(y),{key:e,title:e},null,8,["title"])),64)),l.value===0?(s(),f(t(_),{key:0})):b("",!0)]),_:1},8,["title"]),a(t(T),{title:t(u)("customPosition")},{default:i(()=>[(s(),g(k,null,v(c,e=>a(t(y),{key:e,title:e},null,8,["title"])),64)),l.value===1?(s(),f(t(_),{key:0,right:"15vw",bottom:"10vh"})):b("",!0)]),_:1},8,["title"]),a(t(T),{title:t(u)("customContent")},{default:i(()=>[(s(),g(k,null,v(c,e=>a(t(y),{key:e,title:e},null,8,["title"])),64)),l.value===2?(s(),f(t(_),{key:0,class:"custom-back-top"},{default:i(()=>[R(W(t(u)("backTop")),1)]),_:1})):b("",!0)]),_:1},8,["title"]),a(t(T),{title:t(u)("setScrollTarget")},{default:i(()=>[X("div",{class:"back-top-wrapper",ref_key:"targetEl",ref:m},[(s(),g(k,null,v(c,e=>a(t(y),{key:e,title:e},null,8,["title"])),64)),l.value===3?(s(),f(t(_),{key:0,target:m.value,bottom:"30vh"},null,8,["target"])):b("",!0)],512)]),_:1},8,["title"])]),_:1},8,["active"]))}});export{yt as default};
