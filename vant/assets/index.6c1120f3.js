import{d as S,o as k,c as I,L as P,G as $,e as R,v as T,n as B,N,r as u,J as O}from"./use-translate.7b7055b3.js";import{n as H,m as L,c as p,w as z}from"./with-install.a0877b0b.js";import{L as A,I as C,A as D,u as E,H as V,D as m,x as j,e as x}from"./vue-libs.d5ee895a.js";function F(o,f){if(!S||!window.IntersectionObserver)return;const c=new IntersectionObserver(e=>{f(e[0].intersectionRatio>0)},{root:document.body}),n=()=>{o.value&&c.observe(o.value)},l=()=>{o.value&&c.unobserve(o.value)};A(l),C(l),k(n)}const[G,J]=I("sticky"),M={zIndex:H,position:L("top"),container:Object,offsetTop:p(0),offsetBottom:p(0)},U=D({name:G,props:M,emits:["scroll","change"],setup(o,{emit:f,slots:c}){const n=E(),l=P(n),e=V({fixed:!1,width:0,height:0,transform:0}),i=m(()=>$(o.position==="top"?o.offsetTop:o.offsetBottom)),w=m(()=>{const{fixed:t,height:d,width:s}=e;if(t)return{width:`${s}px`,height:`${d}px`}}),b=m(()=>{if(!e.fixed)return;const t=R(T(o.zIndex),{width:`${e.width}px`,height:`${e.height}px`,[o.position]:`${i.value}px`});return e.transform&&(t.transform=`translate3d(0, ${e.transform}px, 0)`),t}),g=t=>f("scroll",{scrollTop:t,isFixed:e.fixed}),h=()=>{if(!n.value||N(n))return;const{container:t,position:d}=o,s=u(n),y=O(window);if(e.width=s.width,e.height=s.height,d==="top")if(t){const r=u(t),a=r.bottom-i.value-e.height;e.fixed=i.value>s.top&&r.bottom>0,e.transform=a<0?a:0}else e.fixed=i.value>s.top;else{const{clientHeight:r}=document.documentElement;if(t){const a=u(t),v=r-a.top-i.value-e.height;e.fixed=r-i.value<s.bottom&&r>a.top,e.transform=v<0?-v:0}else e.fixed=r-i.value<s.bottom}g(y)};return j(()=>e.fixed,t=>f("change",t)),B("scroll",h,{target:l,passive:!0}),F(n,h),()=>{var t;return x("div",{ref:n,style:w.value},[x("div",{class:J({fixed:e.fixed}),style:b.value},[(t=c.default)==null?void 0:t.call(c)])])}}}),K=z(U);export{K as S};
