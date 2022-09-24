import{I as F,J as Te,K as we,c as M,i as K,L as Ce,b as ke,G as Ie,M as xe,o as Be,n as Re,N as $e,h as p,y as Ae,O as ee,p as Pe,r as te,e as Ne,u as Oe}from"./use-translate.60ccbb8c.js";import{n as R,t as E,d as Z,m as ze,c as j,u as Le,w as ie}from"./with-install.dc8e3787.js";import{A as D,D as k,e as v,Q as oe,x as B,y as $,M as je,H as _e,q as x,J as Ee,B as Me,E as De,j as He,v as We,P as Ze}from"./vue-libs.73c42632.js";import{u as re}from"./use-id.66688fd9.js";import{u as q}from"./use-expose.a60c2de9.js";import{a as Ve,r as Fe}from"./use-route.3f983808.js";import{S as Ke,a as qe}from"./index.dad2b25c.js";import{b as Je}from"./constant.80c6de18.js";import{c as Ue}from"./interceptor.fee10c5b.js";import{u as Xe}from"./use-refs.7352ad87.js";import{o as Ye}from"./on-popup-reopen.3f7ea527.js";import{S as Ge}from"./index.7d43f3bb.js";import{B as Qe}from"./index.642bbd48.js";function pe(e,o,i){let f=0;const a=e.scrollLeft,b=i===0?1:Math.round(i*1e3/16);function c(){e.scrollLeft+=(o-a)/b,++f<b&&F(c)}c()}function et(e,o,i,f){let a=Te(e);const b=a<o,c=i===0?1:Math.round(i*1e3/16),u=(o-a)/c;function l(){a+=u,(b&&a>o||!b&&a<o)&&(a=o),we(e,a),b&&a<o||!b&&a>o?F(l):f&&F(f)}l()}function tt(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!oe(e)}const[nt,ne]=M("tab"),at=D({name:nt,props:{id:String,dot:Boolean,type:String,color:String,title:String,badge:R,shrink:Boolean,isActive:Boolean,disabled:Boolean,controls:String,scrollable:Boolean,activeColor:String,inactiveColor:String,showZeroBadge:E},setup(e,{slots:o}){const i=k(()=>{const a={},{type:b,color:c,disabled:u,isActive:l,activeColor:m,inactiveColor:T}=e;c&&b==="card"&&(a.borderColor=c,u||(l?a.backgroundColor=c:a.color=c));const y=l?m:T;return y&&(a.color=y),a}),f=()=>{const a=v("span",{class:ne("text",{ellipsis:!e.scrollable})},[o.title?o.title():e.title]);return e.dot||K(e.badge)&&e.badge!==""?v(Qe,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},tt(a)?a:{default:()=>[a]}):a};return()=>v("div",{id:e.id,role:"tab",class:[ne([e.type,{grow:e.scrollable&&!e.shrink,shrink:e.shrink,active:e.isActive,disabled:e.disabled}])],style:i.value,tabindex:e.disabled?void 0:e.isActive?0:-1,"aria-selected":e.isActive,"aria-disabled":e.disabled||void 0,"aria-controls":e.controls},[f()])}});function it(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!oe(e)}const[ot,ae]=M("tabs"),rt=D({name:ot,props:{count:Z(Number),inited:Boolean,animated:Boolean,duration:Z(R),swipeable:Boolean,lazyRender:Boolean,currentIndex:Z(Number)},emits:["change"],setup(e,{emit:o,slots:i}){const f=B(),a=u=>o("change",u),b=()=>{var l;const u=(l=i.default)==null?void 0:l.call(i);return e.animated||e.swipeable?v(Ke,{ref:f,loop:!1,class:ae("track"),duration:+e.duration*1e3,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:a},it(u)?u:{default:()=>[u]}):u},c=u=>{const l=f.value;l&&l.state.active!==u&&l.swipeTo(u,{immediate:!e.inited})};return $(()=>e.currentIndex,c),je(()=>{c(e.currentIndex)}),q({swipeRef:f}),()=>v("div",{class:ae("content",{animated:e.animated||e.swipeable})},[b()])}}),[le,_]=M("tabs"),lt={type:ze("line"),color:String,border:Boolean,sticky:Boolean,shrink:Boolean,active:j(0),duration:j(.3),animated:Boolean,ellipsis:E,swipeable:Boolean,scrollspy:Boolean,offsetTop:j(0),background:String,lazyRender:E,lineWidth:R,lineHeight:R,beforeChange:Function,swipeThreshold:j(5),titleActiveColor:String,titleInactiveColor:String},ce=Symbol(le),ct=D({name:le,props:lt,emits:["change","scroll","rendered","clickTab","update:active"],setup(e,{emit:o,slots:i}){let f,a,b;const c=B(),u=B(),l=B(),m=B(),T=re(),w=Ce(c),[y,H]=Xe(),{children:s,linkChildren:J}=ke(ce),d=_e({inited:!1,position:"",lineStyle:{},currentIndex:-1}),I=k(()=>s.length>e.swipeThreshold||!e.ellipsis||e.shrink),A=k(()=>({borderColor:e.color,background:e.background})),P=(t,n)=>{var r;return(r=t.name)!=null?r:n},U=k(()=>{const t=s[d.currentIndex];if(t)return P(t,d.currentIndex)}),W=k(()=>Ie(e.offsetTop)),X=k(()=>e.sticky?W.value+f:0),N=t=>{const n=u.value,r=y.value;if(!I.value||!n||!r||!r[d.currentIndex])return;const h=r[d.currentIndex].$el,g=h.offsetLeft-(n.offsetWidth-h.offsetWidth)/2;pe(n,g,t?0:+e.duration)},C=()=>{const t=d.inited;x(()=>{const n=y.value;if(!n||!n[d.currentIndex]||e.type!=="line"||$e(c.value))return;const r=n[d.currentIndex].$el,{lineWidth:h,lineHeight:g}=e,S=r.offsetLeft+r.offsetWidth/2,L={width:p(h),backgroundColor:e.color,transform:`translateX(${S}px) translateX(-50%)`};if(t&&(L.transitionDuration=`${e.duration}s`),K(g)){const Q=p(g);L.height=Q,L.borderRadius=Q}d.lineStyle=L})},de=t=>{const n=t<d.currentIndex?-1:1;for(;t>=0&&t<s.length;){if(!s[t].disabled)return t;t+=n}},O=(t,n)=>{const r=de(t);if(!K(r))return;const h=s[r],g=P(h,r),S=d.currentIndex!==null;d.currentIndex=r,g!==e.active&&(o("update:active",g),S&&o("change",g,h.title)),n||N(),C(),b&&!e.scrollspy&&Ae(Math.ceil(ee(c.value)-W.value))},z=(t,n)=>{const r=s.find((g,S)=>P(g,S)===t),h=r?s.indexOf(r):0;O(h,n)},Y=(t=!1)=>{if(e.scrollspy){const n=s[d.currentIndex].$el;if(n&&w.value){const r=ee(n,w.value)-X.value;a=!0,et(w.value,r,t?0:+e.duration,()=>{a=!1})}}},ue=(t,n,r)=>{const{title:h,disabled:g}=s[n],S=P(s[n],n);g||(Ue(e.beforeChange,{args:[S],done:()=>{O(n),Y()}}),Ve(t)),o("clickTab",{name:S,title:h,event:r,disabled:g})},fe=t=>{b=t.isFixed,o("scroll",t)},be=t=>{x(()=>{z(t),Y(!0)})},ve=()=>{for(let t=0;t<s.length;t++){const{top:n}=te(s[t].$el);if(n>X.value)return t===0?0:t-1}return s.length-1},he=()=>{if(e.scrollspy&&!a){const t=ve();O(t)}},me=()=>s.map((t,n)=>v(at,Me({key:t.id,id:`${T}-${n}`,ref:H(n),type:e.type,color:e.color,style:t.titleStyle,class:t.titleClass,shrink:e.shrink,isActive:n===d.currentIndex,controls:t.id,scrollable:I.value,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:r=>ue(t,n,r)},Pe(t,["dot","badge","title","disabled","showZeroBadge"])),{title:t.$slots.title})),ge=()=>{if(e.type==="line"&&s.length)return v("div",{class:_("line"),style:d.lineStyle},null)},G=()=>{var r,h;const{type:t,border:n}=e;return v("div",{ref:l,class:[_("wrap"),{[Je]:t==="line"&&n}]},[v("div",{ref:u,role:"tablist",class:_("nav",[t,{shrink:e.shrink,complete:I.value}]),style:A.value,"aria-orientation":"horizontal"},[(r=i["nav-left"])==null?void 0:r.call(i),me(),ge(),(h=i["nav-right"])==null?void 0:h.call(i)])])};$([()=>e.color,xe],C),$(()=>e.active,t=>{t!==U.value&&z(t)}),$(()=>s.length,()=>{d.inited&&(z(e.active),C(),x(()=>{N(!0)}))});const ye=()=>{z(e.active,!0),x(()=>{d.inited=!0,l.value&&(f=te(l.value).height),N(!0)})},Se=(t,n)=>o("rendered",t,n);return q({resize:()=>{C(),x(()=>{var t,n;return(n=(t=m.value)==null?void 0:t.swipeRef.value)==null?void 0:n.resize()})},scrollTo:be}),Ee(C),Ye(C),Be(ye),Re("scroll",he,{target:w,passive:!0}),J({id:T,props:e,setLine:C,onRendered:Se,currentName:U,scrollIntoView:N}),()=>{var t;return v("div",{ref:c,class:_([e.type])},[e.sticky?v(Ge,{container:c.value,offsetTop:W.value,onScroll:fe},{default:()=>{var n;return[G(),(n=i["nav-bottom"])==null?void 0:n.call(i)]}}):[G(),(t=i["nav-bottom"])==null?void 0:t.call(i)],v(rt,{ref:m,count:s.length,inited:d.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:d.currentIndex,onChange:O},{default:()=>{var n;return[(n=i.default)==null?void 0:n.call(i)]}})])}}}),se=Symbol(),Bt=()=>De(se,null),[st,V]=M("tab"),dt=Ne({},Fe,{dot:Boolean,name:R,badge:R,title:String,disabled:Boolean,titleClass:Le,titleStyle:[String,Object],showZeroBadge:E}),ut=D({name:st,props:dt,setup(e,{slots:o}){const i=re(),f=B(!1),{parent:a,index:b}=Oe(ce);if(!a)return;const c=()=>{var m;return(m=e.name)!=null?m:b.value},u=()=>{f.value=!0,a.props.lazyRender&&x(()=>{a.onRendered(c(),e.title)})},l=k(()=>{const m=c()===a.currentName.value;return m&&!f.value&&u(),m});return $(()=>e.title,()=>{a.setLine(),a.scrollIntoView()}),Ze(se,l),()=>{var I;const m=`${a.id}-${b.value}`,{animated:T,swipeable:w,scrollspy:y,lazyRender:H}=a.props;if(!o.default&&!T)return;const s=y||l.value;if(T||w)return v(qe,{id:i,role:"tabpanel",class:V("panel-wrapper",{inactive:!l.value}),tabindex:l.value?0:-1,"aria-hidden":!l.value,"aria-labelledby":m},{default:()=>{var A;return[v("div",{class:V("panel")},[(A=o.default)==null?void 0:A.call(o)])]}});const d=f.value||y||!H?(I=o.default)==null?void 0:I.call(o):null;return q({id:i}),He(v("div",{id:i,role:"tabpanel",class:V("panel"),tabindex:s?0:-1,"aria-labelledby":m},[d]),[[We,s]])}}}),Rt=ie(ut),$t=ie(ct);export{$t as T,Rt as a,Bt as u};
