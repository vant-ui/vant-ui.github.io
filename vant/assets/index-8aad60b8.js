import{t as j}from"./util-8bfea6d1.js";import{e as A,t as E,h as V,m as O,c as U,d as z,s as D,M as L,a as M}from"./use-translate-ad5eefa4.js";import{I as q}from"./index-1c02023b.js";import{A as w,y as S,D as F,M as J,J as Q,L as R,u as Z,e as o,B as G,S as H,Q as K,q as W,o as l,c as f,w as c,C as e,a as v,F as g,b as k,f as b,g as X,t as Y,d as $}from"./vue-libs-6a67f9c6.js";import{n as h,c as tt,w as et}from"./with-install-0d9206aa.js";import{V as y,b as at}from"./index-ebb73d3f.js";import{V as T}from"./index-c6c98967.js";import"./index-4437616e.js";import"./use-id-5464e261.js";import"./use-expose-c87283be.js";import"./use-route-ea8124d0.js";import"./index-386f5015.js";import"./use-touch-87b155f0.js";import"./on-popup-reopen-2b57f4ff.js";import"./use-refs-4e2d69f7.js";import"./index-a81fbffb.js";import"./constant-00b7fd44.js";import"./interceptor-e18d38f8.js";function ot(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!K(a)}const[lt,C]=U("back-top"),rt={right:h,bottom:h,zIndex:h,target:[String,Object],offset:tt(200),immediate:Boolean,teleport:{type:[String,Object],default:"body"}},st=w({name:lt,inheritAttrs:!1,props:rt,emits:["click"],setup(a,{emit:n,slots:r,attrs:i}){let u=!1;const m=S(!1),d=S(),t=S(),P=F(()=>A(E(a.zIndex),{right:V(a.right),bottom:V(a.bottom)})),N=s=>{var p;n("click",s),(p=t.value)==null||p.scrollTo({top:0,behavior:a.immediate?"auto":"smooth"})},x=()=>{m.value=t.value?L(t.value)>=+a.offset:!1},I=()=>{const{target:s}=a;if(typeof s=="string"){const p=document.querySelector(s);if(p)return p}else return s},B=()=>{z&&W(()=>{t.value=a.target?I():D(d.value),x()})};return O("scroll",j(x,100),{target:t}),J(B),Q(()=>{u&&(m.value=!0,u=!1)}),R(()=>{m.value&&a.teleport&&(m.value=!1,u=!0)}),Z(()=>a.target,B),()=>{const s=o("div",G({ref:a.teleport?void 0:d,class:C({active:m.value}),style:P.value,onClick:N},i),[r.default?r.default():o(q,{name:"back-top",class:C("icon")},null)]);return a.teleport?[o("div",{ref:d,class:C("placeholder")},null),o(H,{to:a.teleport},ot(s)?s:{default:()=>[s]})]:s}}}),nt=et(st),_=nt,Bt=w({__name:"index",setup(a){const n=M({"zh-CN":{backTop:"返回顶部",customContent:"自定义内容",customPosition:"自定义位置",immediateScroll:"瞬间滚动",setScrollTarget:"设置滚动目标"},"en-US":{backTop:"Back Top",customContent:"Custom Content",customPosition:"Custom Position",immediateScroll:"Immediate Scroll",setScrollTarget:"Set Scroll Target"}}),r=S(0),i=[...Array(50).keys()],u=S();return(m,d)=>(l(),f(e(at),{active:r.value,"onUpdate:active":d[0]||(d[0]=t=>r.value=t),ellipsis:!1},{default:c(()=>[o(e(y),{title:e(n)("basicUsage")},{default:c(()=>[(l(),v(g,null,k(i,t=>o(e(T),{key:t,title:t},null,8,["title"])),64)),r.value===0?(l(),f(e(_),{key:0})):b("",!0)]),_:1},8,["title"]),o(e(y),{title:e(n)("customPosition")},{default:c(()=>[(l(),v(g,null,k(i,t=>o(e(T),{key:t,title:t},null,8,["title"])),64)),r.value===1?(l(),f(e(_),{key:0,right:"15vw",bottom:"10vh"})):b("",!0)]),_:1},8,["title"]),o(e(y),{title:e(n)("customContent")},{default:c(()=>[(l(),v(g,null,k(i,t=>o(e(T),{key:t,title:t},null,8,["title"])),64)),r.value===2?(l(),f(e(_),{key:0,class:"custom-back-top"},{default:c(()=>[X(Y(e(n)("backTop")),1)]),_:1})):b("",!0)]),_:1},8,["title"]),o(e(y),{title:e(n)("setScrollTarget")},{default:c(()=>[$("div",{class:"back-top-wrapper",ref_key:"targetEl",ref:u},[(l(),v(g,null,k(i,t=>o(e(T),{key:t,title:t},null,8,["title"])),64)),r.value===3?(l(),f(e(_),{key:0,target:u.value,bottom:"30vh"},null,8,["target"])):b("",!0)],512)]),_:1},8,["title"]),o(e(y),{title:e(n)("immediateScroll")},{default:c(()=>[(l(),v(g,null,k(i,t=>o(e(T),{key:t,title:t},null,8,["title"])),64)),r.value===4?(l(),f(e(_),{key:0,immediate:""})):b("",!0)]),_:1},8,["title"])]),_:1},8,["active"]))}});export{Bt as default};
