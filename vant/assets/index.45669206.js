import{c as N,h as B,n as D,d as F,m as j,J as V,a as O}from"./use-translate.7b7055b3.js";import{n as S,c as U,w as I}from"./with-install.a0877b0b.js";import{t as q}from"./util.e9d44d74.js";import{I as L}from"./index.bc61928d.js";import{A as w,u as d,D as M,M as z,x as J,e as a,B as Q,S as G,Q as H,q as K,o as s,c as f,w as i,C as t,a as g,F as k,b as v,f as b,h as R,t as W,d as X}from"./vue-libs.d5ee895a.js";import{a as T,T as Y}from"./index.b6891a8c.js";import{C as y}from"./index.b878185c.js";import"./index.16bdfc10.js";import"./use-id.283fca96.js";import"./use-expose.77504c28.js";import"./use-route.55b36618.js";import"./index.25303511.js";import"./use-touch.e8c4f7e8.js";import"./on-popup-reopen.5b484164.js";import"./constant.e12a51b9.js";import"./interceptor.adacec7f.js";import"./use-refs.9408eccb.js";import"./index.6c1120f3.js";function Z(o){return typeof o=="function"||Object.prototype.toString.call(o)==="[object Object]"&&!H(o)}const[$,P]=N("back-top"),tt={right:S,bottom:S,target:[String,Object],offset:U(200),teleport:{type:[String,Object],default:"body"}},et=w({name:$,inheritAttrs:!1,props:tt,emits:["click"],setup(o,{emit:u,slots:l,attrs:c}){const m=d(!1),h=d(),n=d(),e=M(()=>({right:B(o.right),bottom:B(o.bottom)})),x=r=>{var p;u("click",r),(p=n.value)==null||p.scrollTo({top:0,behavior:"smooth"})},C=()=>{m.value=n.value?V(n.value)>=o.offset:!1},A=()=>{const{target:r}=o;if(typeof r=="string"){const p=document.querySelector(r);if(p)return p}else return r},E=()=>{F&&K(()=>{n.value=o.target?A():j(h.value),C()})};return D("scroll",q(C,100),{target:n}),z(E),J(()=>o.target,E),()=>{const r=a("div",Q({ref:h,class:P({active:m.value}),style:e.value,onClick:x},c),[l.default?l.default():a(L,{name:"back-top",class:P("icon")},null)]);return o.teleport?a(G,{to:o.teleport},Z(r)?r:{default:()=>[r]}):r}}}),_=I(et),yt=w({__name:"index",setup(o){const u=O({"zh-CN":{backTop:"\u8FD4\u56DE\u9876\u90E8",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",customPosition:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E",setScrollTarget:"\u8BBE\u7F6E\u6EDA\u52A8\u76EE\u6807"},"en-US":{backTop:"Back Top",customContent:"Custom Content",customPosition:"Custom Position",setScrollTarget:"Set Scroll Target"}}),l=d(0),c=[...Array(50).keys()],m=d();return(h,n)=>(s(),f(t(Y),{active:l.value,"onUpdate:active":n[0]||(n[0]=e=>l.value=e)},{default:i(()=>[a(t(T),{title:t(u)("basicUsage")},{default:i(()=>[(s(),g(k,null,v(c,e=>a(t(y),{key:e,title:e},null,8,["title"])),64)),l.value===0?(s(),f(t(_),{key:0})):b("",!0)]),_:1},8,["title"]),a(t(T),{title:t(u)("customPosition")},{default:i(()=>[(s(),g(k,null,v(c,e=>a(t(y),{key:e,title:e},null,8,["title"])),64)),l.value===1?(s(),f(t(_),{key:0,right:"15vw",bottom:"10vh"})):b("",!0)]),_:1},8,["title"]),a(t(T),{title:t(u)("customContent")},{default:i(()=>[(s(),g(k,null,v(c,e=>a(t(y),{key:e,title:e},null,8,["title"])),64)),l.value===2?(s(),f(t(_),{key:0,class:"custom-back-top"},{default:i(()=>[R(W(t(u)("backTop")),1)]),_:1})):b("",!0)]),_:1},8,["title"]),a(t(T),{title:t(u)("setScrollTarget")},{default:i(()=>[X("div",{class:"back-top-wrapper",ref_key:"targetEl",ref:m},[(s(),g(k,null,v(c,e=>a(t(y),{key:e,title:e},null,8,["title"])),64)),l.value===3?(s(),f(t(_),{key:0,target:m.value,bottom:"30vh"},null,8,["target"])):b("",!0)],512)]),_:1},8,["title"])]),_:1},8,["active"]))}});export{yt as default};
