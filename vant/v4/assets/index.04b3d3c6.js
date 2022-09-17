import{o as K,m as N,l as j,e as F,c as H,i as M,n as V}from"./use-translate.8036e41d.js";import{n as A,t as O,u as G,m as x,w as U}from"./with-install.6887218d.js";import{M as L,J as Y,y as g,A as $,x as T,D as q,q as J,N as W,L as Z,I as Q,e as v,T as X,S as ee,F as oe,j as ne,v as te,B as ae}from"./vue-libs.a040eeb8.js";import{H as se}from"./constant.80c6de18.js";import{c as ce}from"./interceptor.66b82326.js";import{u as re}from"./use-expose.1f17c8d6.js";import{u as le}from"./use-touch.ee9512d6.js";import{u as ie}from"./use-lazy-render.615ed830.js";import{P as ue}from"./on-popup-reopen.2164636b.js";import{u as de,I as fe}from"./index.bbaa83e9.js";import{O as ve}from"./index.90d1b68e.js";const D={show:Boolean,zIndex:A,overlay:O,duration:A,teleport:[String,Object],lockScroll:O,lazyRender:O,beforeClose:Function,overlayStyle:Object,overlayClass:G,transitionAppear:Boolean,closeOnClickOverlay:O},Ee=Object.keys(D);let y=0;const B="van-overflow-hidden";function me(e,n){const s=le(),i="01",t="10",r=c=>{s.move(c);const d=s.deltaY.value>0?t:i,C=N(c.target,e.value),{scrollHeight:m,offsetHeight:I,scrollTop:h}=C;let f="11";h===0?f=I>=m?"00":"01":h+I>=m&&(f="10"),f!=="11"&&s.isVertical()&&!(parseInt(f,2)&parseInt(d,2))&&j(c,!0)},u=()=>{document.addEventListener("touchstart",s.start),document.addEventListener("touchmove",r,{passive:!1}),y||document.body.classList.add(B),y++},l=()=>{y&&(document.removeEventListener("touchstart",s.start),document.removeEventListener("touchmove",r),y--,y||document.body.classList.remove(B))},P=()=>n()&&u(),p=()=>n()&&l();K(P),L(p),Y(p),g(n,c=>{c?u():l()})}const ye=F({},D,{round:Boolean,position:x("center"),closeIcon:x("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:x("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[pe,E]=H("popup"),Ie=$({name:pe,inheritAttrs:!1,props:ye,emits:["open","close","opened","closed","keydown","update:show","clickOverlay","clickCloseIcon"],setup(e,{emit:n,attrs:s,slots:i}){let t,r;const u=T(),l=T(),P=ie(()=>e.show||!e.lazyRender),p=q(()=>{const o={zIndex:u.value};if(M(e.duration)){const a=e.position==="center"?"animationDuration":"transitionDuration";o[a]=`${e.duration}s`}return o}),c=()=>{t||(t=!0,u.value=e.zIndex!==void 0?+e.zIndex:de(),n("open"))},d=()=>{t&&ce(e.beforeClose,{done(){t=!1,n("close"),n("update:show",!1)}})},C=o=>{n("clickOverlay",o),e.closeOnClickOverlay&&d()},m=()=>{if(e.overlay)return v(ve,{show:e.show,class:e.overlayClass,zIndex:u.value,duration:e.duration,customStyle:e.overlayStyle,role:e.closeOnClickOverlay?"button":void 0,tabindex:e.closeOnClickOverlay?0:void 0,onClick:C},{default:i["overlay-content"]})},I=o=>{n("clickCloseIcon",o),d()},h=()=>{if(e.closeable)return v(fe,{role:"button",tabindex:0,name:e.closeIcon,class:[E("close-icon",e.closeIconPosition),se],classPrefix:e.iconPrefix,onClick:I},null)},f=()=>n("opened"),z=()=>n("closed"),R=o=>n("keydown",o),_=P(()=>{var S;const{round:o,position:a,safeAreaInsetTop:k,safeAreaInsetBottom:w}=e;return ne(v("div",ae({ref:l,style:p.value,role:"dialog",tabindex:0,class:[E({round:o,[a]:a}),{"van-safe-area-top":k,"van-safe-area-bottom":w}],onKeydown:R},s),[(S=i.default)==null?void 0:S.call(i),h()]),[[te,e.show]])}),b=()=>{const{position:o,transition:a,transitionAppear:k}=e,w=o==="center"?"van-fade":`van-popup-slide-${o}`;return v(X,{name:a||w,appear:k,onAfterEnter:f,onAfterLeave:z},{default:_})};return g(()=>e.show,o=>{o&&!t&&(c(),s.tabindex===0&&J(()=>{var a;(a=l.value)==null||a.focus()})),!o&&t&&(t=!1,n("close"))}),re({popupRef:l}),me(l,()=>e.show&&e.lockScroll),V("popstate",()=>{e.closeOnPopstate&&(d(),r=!1)}),W(()=>{e.show&&c()}),Z(()=>{r&&(n("update:show",!0),r=!1)}),L(()=>{e.show&&e.teleport&&(d(),r=!0)}),Q(ue,()=>e.show),()=>e.teleport?v(ee,{to:e.teleport},{default:()=>[m(),b()]}):v(oe,null,[m(),b()])}}),he=U(Ie),Le=he;export{he as P,Le as V,Ee as a,D as p};
