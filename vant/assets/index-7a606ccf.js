import{V as M,b as at}from"./index-67cc303b.js";import{N as lt,b as dt,i as ut,n as j,c as Q,O as ft,L,s as O,A as ht,z as Z,l as mt,u as pt,e as xt,t as gt,a as vt}from"./use-translate-a757506f.js";import{u as yt}from"./use-touch-8f92051d.js";import{u as G}from"./use-expose-2590a160.js";import{A as V,u as k,D as R,M as Tt,x as H,e as c,S as It,Q as St,q as bt,H as Ct,o as _,c as kt,w as I,C as o,a as F,F as U,b as X,d as Y,g as At,t as _t}from"./vue-libs-b2a2f6f9.js";import{t as wt,n as J,a as Lt,w as W}from"./with-install-278c4a2b.js";import{f as Ot}from"./constant-a81ffd37.js";import{V as S}from"./index-f153440d.js";import"./use-id-92cebd14.js";import"./use-route-efd4b866.js";import"./index-c5678a17.js";import"./on-popup-reopen-e5b691e6.js";import"./use-refs-06cfd58f.js";import"./index-29c9c9f5.js";import"./index-8c81c046.js";import"./interceptor-1ff3f352.js";import"./index-bd55b31d.js";function Rt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!St(e)}function Vt(){const e="A".charCodeAt(0);return Array(26).fill("").map((s,u)=>String.fromCharCode(e+u))}const[tt,w]=Q("index-bar"),Bt={sticky:wt,zIndex:J,teleport:[String,Object],highlightColor:String,stickyOffsetTop:Lt(0),indexList:{type:Array,default:Vt}},et=Symbol(tt),Pt=V({name:tt,props:Bt,emits:["select","change"],setup(e,{emit:r,slots:s}){const u=k(),p=k(),g=k(""),h=yt(),f=lt(u),{children:n,linkChildren:b}=dt(et);let m;b({props:e});const nt=R(()=>{if(ut(e.zIndex))return{zIndex:+e.zIndex+1}}),ot=R(()=>{if(e.highlightColor)return{color:e.highlightColor}}),B=(t,i)=>{for(let a=n.length-1;a>=0;a--){const d=a>0?i[a-1].height:0,l=e.sticky?d+e.stickyOffsetTop:0;if(t+l>=i[a].top)return a}return-1},P=t=>n.find(i=>String(i.index)===t),A=()=>{if(ft(u))return;const{sticky:t,indexList:i}=e,a=L(f.value),d=O(f),l=n.map(T=>T.getRect(f.value,d));let v=-1;if(m){const T=P(m);if(T){const y=T.getRect(f.value,d);v=B(y.top,l)}}else v=B(a,l);g.value=i[v],t&&n.forEach((T,y)=>{const{state:x,$el:rt}=T;if(y===v||y===v-1){const C=rt.getBoundingClientRect();x.left=C.left,x.width=C.width}else x.left=null,x.width=null;if(y===v)x.active=!0,x.top=Math.max(e.stickyOffsetTop,l[y].top-a)+d.top;else if(y===v-1&&m===""){const C=l[v].top-a;x.active=C>0,x.top=C+d.top-l[y].height}else x.active=!1}),m=""},E=()=>{bt(A)};j("scroll",A,{target:f,passive:!0}),Tt(E),H(()=>e.indexList,E),H(g,t=>{t&&r("change",t)});const st=()=>e.indexList.map(t=>{const i=t===g.value;return c("span",{class:w("index",{active:i}),style:i?ot.value:void 0,"data-index":t},[t])}),N=t=>{m=String(t);const i=P(m);if(i){const a=L(f.value),d=O(f),{offsetHeight:l}=document.documentElement;if(i.$el.scrollIntoView(),a===l-d.height){A();return}e.sticky&&e.stickyOffsetTop&&ht(Z()-e.stickyOffsetTop),r("select",i.index)}},$=t=>{const{index:i}=t.dataset;i&&N(i)},it=t=>{$(t.target)};let z;const ct=t=>{if(h.move(t),h.isVertical()){mt(t);const{clientX:i,clientY:a}=t.touches[0],d=document.elementFromPoint(i,a);if(d){const{index:l}=d.dataset;l&&z!==l&&(z=l,$(d))}}},D=()=>c("div",{ref:p,class:w("sidebar"),style:nt.value,onClick:it,onTouchstartPassive:h.start},[st()]);return G({scrollTo:N}),j("touchmove",ct,{target:p}),()=>{var i;let t;return c("div",{ref:u,class:w()},[e.teleport?c(It,{to:e.teleport},Rt(t=D())?t:{default:()=>[t]}):D(),(i=s.default)==null?void 0:i.call(s)])}}}),Et=W(Pt),q=Et,[Nt,$t]=Q("index-anchor"),zt={index:J},Dt=V({name:Nt,props:zt,setup(e,{slots:r}){const s=Ct({top:0,left:null,rect:{top:0,height:0},width:null,active:!1}),u=k(),{parent:p}=pt(et);if(!p)return;const g=()=>s.active&&p.props.sticky,h=R(()=>{const{zIndex:n,highlightColor:b}=p.props;if(g())return xt(gt(n),{left:s.left?`${s.left}px`:void 0,width:s.width?`${s.width}px`:void 0,transform:s.top?`translate3d(0, ${s.top}px, 0)`:void 0,color:b})});return G({state:s,getRect:(n,b)=>{const m=O(u);return s.rect.height=m.height,n===window||n===document.body?s.rect.top=m.top+Z():s.rect.top=m.top+L(n)-b.top,s.rect}}),()=>{const n=g();return c("div",{ref:u,style:{height:n?`${s.rect.height}px`:void 0}},[c("div",{style:h.value,class:[$t({sticky:n}),{[Ot]:n}]},[r.default?r.default():e.index])])}}}),Mt=W(Dt),K=Mt,se=V({__name:"index",setup(e){const r=vt({"zh-CN":{text:"文本",customIndexList:"自定义索引列表"},"en-US":{text:"Text",customIndexList:"Custom Index List"}}),s=k(0),u=[],p=[1,2,3,4,5,6,8,9,10],g="A".charCodeAt(0);for(let h=0;h<26;h++)u.push(String.fromCharCode(g+h));return(h,f)=>(_(),kt(o(at),{active:s.value,"onUpdate:active":f[0]||(f[0]=n=>s.value=n)},{default:I(()=>[c(o(M),{title:o(r)("basicUsage")},{default:I(()=>[c(o(q),null,{default:I(()=>[(_(),F(U,null,X(u,n=>Y("div",{key:n},[c(o(K),{index:n},null,8,["index"]),c(o(S),{title:o(r)("text")},null,8,["title"]),c(o(S),{title:o(r)("text")},null,8,["title"]),c(o(S),{title:o(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"]),c(o(M),{title:o(r)("customIndexList")},{default:I(()=>[c(o(q),{"index-list":p},{default:I(()=>[(_(),F(U,null,X(p,n=>Y("div",{key:n},[c(o(K),{index:n},{default:I(()=>[At(_t(o(r)("title")+n),1)]),_:2},1032,["index"]),c(o(S),{title:o(r)("text")},null,8,["title"]),c(o(S),{title:o(r)("text")},null,8,["title"]),c(o(S),{title:o(r)("text")},null,8,["title"])])),64))]),_:1})]),_:1},8,["title"])]),_:1},8,["active"]))}});export{se as default};
