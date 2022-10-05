import{c as B,n as ee,l as M,F as S,N as oe,R as te,p as ae,r as se,d as ne,e as ie}from"./use-translate.d2900b8c.js";import{d as Y,n as k,t as H,b as ce,c as Z,u as A,m as $,w as le}from"./with-install.19a35764.js";import{m as re,u as me}from"./mount-component.f3744995.js";import{H as ue}from"./constant.80c6de18.js";import{c as de}from"./interceptor.f0c85874.js";import{u as ve}from"./use-expose.c942d5f8.js";import{I as fe}from"./index.b70c9b40.js";import{a as ge,S as he}from"./index.1461a543.js";import{P as we}from"./index.e6e790ed.js";import{u as pe}from"./use-touch.04ca7093.js";import{I as Pe}from"./index.45d743b7.js";import{L as Ie}from"./index.4e4daaac.js";import{z as F,H as L,C as _,D as T,u as b,e as m,N as xe,q as Ce,Q as ye,A as j}from"./vue-libs.b44bc779.js";const E=e=>Math.sqrt((e[0].clientX-e[1].clientX)**2+(e[0].clientY-e[1].clientY)**2),O=B("image-preview")[1],Se=F({props:{src:String,show:Boolean,active:Number,minZoom:Y(k),maxZoom:Y(k),rootWidth:Y(Number),rootHeight:Y(Number)},emits:["scale","close"],setup(e,{emit:c}){const o=L({scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}),l=pe(),i=_(),v=T(()=>{const{rootWidth:t,rootHeight:s}=e,n=s/t;return o.imageRatio>n}),N=T(()=>{const{scale:t,moveX:s,moveY:n,moving:d,zooming:x}=o,X={transitionDuration:x||d?"0s":".3s"};if(t!==1){const G=s/t,J=n/t;X.transform=`scale(${t}, ${t}) translate(${G}px, ${J}px)`}return X}),f=T(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:s}=e,n=v.value?s/o.imageRatio:t;return Math.max(0,(o.scale*n-t)/2)}return 0}),g=T(()=>{if(o.imageRatio){const{rootWidth:t,rootHeight:s}=e,n=v.value?s:t*o.imageRatio;return Math.max(0,(o.scale*n-s)/2)}return 0}),h=t=>{t=S(t,+e.minZoom,+e.maxZoom+1),t!==o.scale&&(o.scale=t,c("scale",{scale:t,index:e.active}))},y=()=>{h(1),o.moveX=0,o.moveY=0},R=()=>{const t=o.scale>1?1:2;h(t),o.moveX=0,o.moveY=0};let w,p,P,I,a,r,u;const V=t=>{const{touches:s}=t,{offsetX:n}=l;l.start(t),w=s.length,p=o.moveX,P=o.moveY,u=Date.now(),o.moving=w===1&&o.scale!==1,o.zooming=w===2&&!n.value,o.zooming&&(I=o.scale,a=E(t.touches))},U=t=>{const{touches:s}=t;if(l.move(t),(o.moving||o.zooming)&&M(t,!0),o.moving){const{deltaX:n,deltaY:d}=l,x=n.value+p,X=d.value+P;o.moveX=S(x,-f.value,f.value),o.moveY=S(X,-g.value,g.value)}if(o.zooming&&s.length===2){const n=E(s),d=I*n/a;h(d)}},K=()=>{if(w>1)return;const{offsetX:t,offsetY:s}=l,n=Date.now()-u,d=250,x=5;t.value<x&&s.value<x&&n<d&&(r?(clearTimeout(r),r=null,R()):r=setTimeout(()=>{c("close"),r=null},d))},D=t=>{let s=!1;(o.moving||o.zooming)&&(s=!0,o.moving&&p===o.moveX&&P===o.moveY&&(s=!1),t.touches.length||(o.zooming&&(o.moveX=S(o.moveX,-f.value,f.value),o.moveY=S(o.moveY,-g.value,g.value),o.zooming=!1),o.moving=!1,p=0,P=0,I=1,o.scale<1&&y(),o.scale>e.maxZoom&&(o.scale=+e.maxZoom))),M(t,s),K(),l.reset()},Q=t=>{const{naturalWidth:s,naturalHeight:n}=t.target;o.imageRatio=n/s};return b(()=>e.active,y),b(()=>e.show,t=>{t||y()}),ee("touchmove",U,{target:T(()=>{var t;return(t=i.value)==null?void 0:t.$el})}),()=>{const t={loading:()=>m(Ie,{type:"spinner"},null)};return m(ge,{ref:i,class:O("swipe-item"),onTouchstartPassive:V,onTouchend:D,onTouchcancel:D},{default:()=>[m(Pe,{src:e.src,fit:"contain",class:O("image",{vertical:v.value}),style:N.value,onLoad:Q},t)]})}}});function Te(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ye(e)}const[be,C]=B("image-preview"),Xe=["show","transition","overlayStyle","closeOnPopstate"],Ye={show:Boolean,loop:H,images:ce(),minZoom:Z(1/3),maxZoom:Z(3),overlay:H,closeable:Boolean,showIndex:H,className:A,closeIcon:$("clear"),transition:String,beforeClose:Function,overlayClass:A,overlayStyle:Object,swipeDuration:Z(300),startPosition:Z(0),showIndicators:Boolean,closeOnPopstate:H,closeIconPosition:$("top-right")},q=F({name:be,props:Ye,emits:["scale","close","closed","change","update:show"],setup(e,{emit:c,slots:o}){const l=_(),i=L({active:0,rootWidth:0,rootHeight:0}),v=()=>{if(l.value){const a=se(l.value.$el);i.rootWidth=a.width,i.rootHeight=a.height,l.value.resize()}},N=a=>c("scale",a),f=a=>c("update:show",a),g=()=>{de(e.beforeClose,{args:[i.active],done:()=>f(!1)})},h=a=>{a!==i.active&&(i.active=a,c("change",a))},y=()=>{if(e.showIndex)return m("div",{class:C("index")},[o.index?o.index({index:i.active}):`${i.active+1} / ${e.images.length}`])},R=()=>{if(o.cover)return m("div",{class:C("cover")},[o.cover()])},w=()=>{let a;return m(he,{ref:l,lazyRender:!0,loop:e.loop,class:C("swipe"),duration:e.swipeDuration,initialSwipe:e.startPosition,showIndicators:e.showIndicators,indicatorColor:"white",onChange:h},Te(a=e.images.map(r=>m(Se,{src:r,show:e.show,active:i.active,maxZoom:e.maxZoom,minZoom:e.minZoom,rootWidth:i.rootWidth,rootHeight:i.rootHeight,onScale:N,onClose:g},null)))?a:{default:()=>[a]})},p=()=>{if(e.closeable)return m(fe,{role:"button",name:e.closeIcon,class:[C("close-icon",e.closeIconPosition),ue],onClick:g},null)},P=()=>c("closed"),I=(a,r)=>{var u;return(u=l.value)==null?void 0:u.swipeTo(a,r)};return ve({swipeTo:I}),xe(v),b([oe,te],v),b(()=>e.startPosition,a=>h(+a)),b(()=>e.show,a=>{const{images:r,startPosition:u}=e;a?(h(+u),Ce(()=>{v(),I(+u,{immediate:!0})})):c("close",{index:i.active,url:r[i.active]})}),()=>m(we,j({class:[C(),e.className],overlayClass:[C("overlay"),e.overlayClass],onClosed:P,"onUpdate:show":f},ae(e,Xe)),{default:()=>[p(),w(),y(),R()]})}});let z;const He={loop:!0,images:[],maxZoom:3,minZoom:1/3,onScale:void 0,onClose:void 0,onChange:void 0,teleport:"body",className:"",showIndex:!0,closeable:!1,closeIcon:"clear",transition:void 0,beforeClose:void 0,overlayStyle:void 0,overlayClass:void 0,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"};function Ze(){({instance:z}=re({setup(){const{state:e,toggle:c}=me(),o=()=>{e.images=[]};return()=>m(q,j(e,{onClosed:o,"onUpdate:show":c}),null)}}))}const W=(e,c=0)=>{if(!!ne)return z||Ze(),e=Array.isArray(e)?{images:e,startPosition:c}:e,z.open(ie({},He,e)),z};W.Component=le(q);W.install=e=>{e.use(W.Component)};export{W as I};
