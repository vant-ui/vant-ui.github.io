import{K as F,L as Te,I as we,c as M,i as K,M as Ce,b as ke,G as Ie,N as xe,o as Be,n as Re,p as $e,O as Ae,h as p,z as Pe,P as ee,r as te,e as Ne,u as ze}from"./use-translate.0ff6f26f.js";import{n as $,t as E,d as W,m as Oe,c as j,u as Le,w as ie}from"./with-install.8a446ba3.js";import{z as V,D as C,e as h,Q as oe,C as B,x as R,N as je,H as _e,q as x,L as Ee,A as Me,E as Ve,I as De,j as He,v as We}from"./vue-libs.a65f1bfc.js";import{u as le}from"./use-id.8a05d67e.js";import{u as q}from"./use-expose.13900254.js";import{a as Ze,r as Fe}from"./use-route.985ba6da.js";import{S as Ke,a as qe}from"./index.d41c2225.js";import{b as Ue}from"./constant.80c6de18.js";import{c as Xe}from"./interceptor.755576c9.js";import{u as Ye}from"./use-refs.9d0b72bf.js";import{o as Ge}from"./on-popup-reopen.76ccb88c.js";import{S as Qe}from"./index.04948286.js";import{B as Je}from"./index.d1116377.js";function pe(e,o,i){let f=0;const a=e.scrollLeft,b=i===0?1:Math.round(i*1e3/16);function c(){e.scrollLeft+=(o-a)/b,++f<b&&F(c)}c()}function et(e,o,i,f){let a=Te(e);const b=a<o,c=i===0?1:Math.round(i*1e3/16),u=(o-a)/c;function r(){a+=u,(b&&a>o||!b&&a<o)&&(a=o),we(e,a),b&&a<o||!b&&a>o?F(r):f&&F(f)}r()}function tt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!oe(e)}const[nt,ne]=M("tab"),at=V({name:nt,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:$,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:E},setup(e,{slots:o}){const i=C(()=>{const a={},{type:b,color:c,disabled:u,isActive:r,activeColor:m,inactiveColor:S}=e;c&&b==="card"&&(a.borderColor=c,u||(r?a.backgroundColor=c:a.color=c));const y=r?m:S;return y&&(a.color=y),a}),f=()=>{const a=h("span",{class:ne("text",{ellipsis:!e.scrollable})},[o.title?o.title():e.title]);return e.dot||K(e.badge)&&e.badge!==""?h(Je,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},tt(a)?a:{default:()=>[a]}):a};return()=>h("div",{id:e.id,role:"tab",class:[ne([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:i.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[f()])}});function it(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!oe(e)}const[ot,ae]=M("tabs"),lt=V({name:ot,props:{count:W(Number),inited:Boolean,animated:Boolean,duration:W($),swipeable:Boolean,lazyRender:Boolean,currentIndex:W(Number)},emits:["change"],setup(e,{emit:o,slots:i}){const f=B(),a=u=>o("change",u),b=()=>{var r;const u=(r=i.default)==null?void 0:r.call(i);return e.animated||e.swipeable?h(Ke,{ref:f,loop:!1,class:ae("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:a},it(u)?u:{default:()=>[u]}):u},c=u=>{const r=f.value;r&&r.state.active!==u&&r.swipeTo(u,{immediate:!e.inited})};return R(()=>e.currentIndex,c),je(()=>{c(e.currentIndex)}),q({swipeRef:f}),()=>h("div",{class:ae("content",{animated:e.animated||e.swipeable})},[b()])}}),[re,_]=M("tabs"),rt={type:Oe("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:j(0),duration:j(.3),animated:Boolean,ellipsis:E,swipeable:Boolean,scrollspy:Boolean,offsetTop:j(0),background:String,lazyRender:E,lineWidth:$,lineHeight:$,beforeChange:Function,swipeThreshold:j(5),titleActiveColor:String,titleInactiveColor:String},ce=Symbol(re),ct=V({name:re,props:rt,emits:["click","change","scroll","disabled","rendered","click-tab","update:active"],setup(e,{emit:o,slots:i}){let f,a,b;const c=B(),u=B(),r=B(),m=B(),S=le(),T=Ce(c),[y,D]=Ye(),{children:d,linkChildren:U}=ke(ce),s=_e({inited:!1,position:"",lineStyle:{},currentIndex:-1}),k=C(()=>d.length>e.swipeThreshold||!e.ellipsis||e.shrink),A=C(()=>({borderColor:e.color,background:e.background})),P=(t,n)=>{var l;return(l=t.name)!=null?l:n},X=C(()=>{const t=d[s.currentIndex];if(t)return P(t,s.currentIndex)}),H=C(()=>Ie(e.offsetTop)),Y=C(()=>e.sticky?H.value+f:0),N=t=>{const n=u.value,l=y.value;if(!k.value||!n||!l||!l[s.currentIndex])return;const v=l[s.currentIndex].$el,g=v.offsetLeft-(n.offsetWidth-v.offsetWidth)/2;pe(n,g,t?0:+e.duration)},w=()=>{const t=s.inited;x(()=>{const n=y.value;if(!n||!n[s.currentIndex]||e.type!=="line"||Ae(c.value))return;const l=n[s.currentIndex].$el,{lineWidth:v,lineHeight:g}=e,I=l.offsetLeft+l.offsetWidth/2,L={width:p(v),backgroundColor:e.color,transform:`translateX(${I}px) translateX(-50%)`};if(t&&(L.transitionDuration=`${e.duration}s`),K(g)){const J=p(g);L.height=J,L.borderRadius=J}s.lineStyle=L})},de=t=>{const n=t<s.currentIndex?-1:1;for(;t>=0&&t<d.length;){if(!d[t].disabled)return t;t+=n}},z=t=>{const n=de(t);if(!K(n))return;const l=d[n],v=P(l,n),g=s.currentIndex!==null;s.currentIndex=n,v!==e.active&&(o("update:active",v),g&&o("change",v,l.title))},O=t=>{const n=d.find((v,g)=>P(v,g)===t),l=n?d.indexOf(n):0;z(l)},G=(t=!1)=>{if(e.scrollspy){const n=d[s.currentIndex].$el;if(n&&T.value){const l=ee(n,T.value)-Y.value;a=!0,et(T.value,l,t?0:+e.duration,()=>{a=!1})}}},ue=(t,n,l)=>{const{title:v,disabled:g}=d[n],I=P(d[n],n);g?o("disabled",I,v):(Xe(e.beforeChange,{args:[I],done:()=>{z(n),G()}}),o("click",I,v),Ze(t)),o("click-tab",{name:I,title:v,event:l,disabled:g})},fe=t=>{b=t.isFixed,o("scroll",t)},be=t=>{x(()=>{O(t),G(!0)})},ve=()=>{for(let t=0;t<d.length;t++){const{top:n}=te(d[t].$el);if(n>Y.value)return t===0?0:t-1}return d.length-1},he=()=>{if(e.scrollspy&&!a){const t=ve();z(t)}},me=()=>d.map((t,n)=>h(at,Me({key:t.id,id:`${S}-${n}`,ref:D(n),type:e.type,color:e.color,style:t.titleStyle,class:t.titleClass,shrink:e.shrink,isActive:n===s.currentIndex,controls:t.id,scrollable:k.value,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:l=>ue(t,n,l)},$e(t,["dot","badge","title","disabled","showZeroBadge"])),{title:t.$slots.title})),ge=()=>{if(e.type==="line"&&d.length)return h("div",{class:_("line"),style:s.lineStyle},null)},Q=()=>{var l,v;const{type:t,border:n}=e;return h("div",{ref:r,class:[_("wrap"),{[Ue]:t==="line"&&n}]},[h("div",{ref:u,role:"tablist",class:_("nav",[t,{shrink:e.shrink,complete:k.value}]),style:A.value,"aria-orientation":"horizontal"},[(l=i["nav-left"])==null?void 0:l.call(i),me(),ge(),(v=i["nav-right"])==null?void 0:v.call(i)])])};R([()=>e.color,xe],w),R(()=>e.active,t=>{t!==X.value&&O(t)}),R(()=>d.length,()=>{s.inited&&(O(e.active),w(),x(()=>{N(!0)}))}),R(()=>s.currentIndex,()=>{N(),w(),b&&!e.scrollspy&&Pe(Math.ceil(ee(c.value)-H.value))});const ye=()=>{O(e.active),x(()=>{s.inited=!0,r.value&&(f=te(r.value).height),N(!0)})},Se=(t,n)=>o("rendered",t,n);return q({resize:()=>{w(),x(()=>{var t,n;return(n=(t=m.value)==null?void 0:t.swipeRef.value)==null?void 0:n.resize()})},scrollTo:be}),Ee(w),Ge(w),Be(ye),Re("scroll",he,{target:T,passive:!0}),U({id:S,props:e,setLine:w,onRendered:Se,currentName:X,scrollIntoView:N}),()=>{var t;return h("div",{ref:c,class:_([e.type])},[e.sticky?h(Qe,{container:c.value,offsetTop:H.value,onScroll:fe},{default:()=>{var n;return[Q(),(n=i["nav-bottom"])==null?void 0:n.call(i)]}}):[Q(),(t=i["nav-bottom"])==null?void 0:t.call(i)],h(lt,{ref:m,count:d.length,inited:s.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:s.currentIndex,onChange:z},{default:()=>{var n;return[(n=i.default)==null?void 0:n.call(i)]}})])}}}),se=Symbol(),$t=()=>Ve(se,null),[st,Z]=M("tab"),dt=Ne({},Fe,{dot:Boolean,name:$,badge:$,title:String,disabled:Boolean,titleClass:Le,titleStyle:[String,Object],showZeroBadge:E}),ut=V({name:st,props:dt,setup(e,{slots:o}){const i=le(),f=B(!1),{parent:a,index:b}=ze(ce);if(!a)return;const c=()=>{var m;return(m=e.name)!=null?m:b.value},u=()=>{f.value=!0,a.props.lazyRender&&x(()=>{a.onRendered(c(),e.title)})},r=C(()=>{const m=c()===a.currentName.value;return m&&!f.value&&u(),m});return R(()=>e.title,()=>{a.setLine(),a.scrollIntoView()}),De(se,r),()=>{var k;const m=`${a.id}-${b.value}`,{animated:S,swipeable:T,scrollspy:y,lazyRender:D}=a.props;if(!o.default&&!S)return;const d=y||r.value;if(S||T)return h(qe,{id:i,role:"tabpanel",class:Z("panel-wrapper",{inactive:!r.value}),tabindex:r.value?0:-1,"aria-hidden":!r.value,"aria-labelledby":m},{default:()=>{var A;return[h("div",{class:Z("panel")},[(A=o.default)==null?void 0:A.call(o)])]}});const s=f.value||y||!D?(k=o.default)==null?void 0:k.call(o):null;return q({id:i}),He(h("div",{id:i,role:"tabpanel",class:Z("panel"),tabindex:d?0:-1,"aria-labelledby":m},[s]),[[We,d]])}}}),ft=ie(ut),At=ft,bt=ie(ct),Pt=bt;export{bt as T,Pt as V,ft as a,At as b,$t as u};
