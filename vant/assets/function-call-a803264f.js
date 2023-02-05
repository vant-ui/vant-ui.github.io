import{m as F,u as R}from"./mount-component-a5a888e3.js";import{A as K,u as _,H as I,e as n,B as x,X as U}from"./vue-libs-b2a2f6f9.js";import{P as L,p as z,a as M}from"./index-e81257b3.js";import{B as k}from"./index-018e8a5c.js";import{b as P,c as W}from"./index-dd7e4835.js";import{p,h as V,c as X,e as f,x as T,B as j,d as q}from"./use-translate-a757506f.js";import{e as G,c as J}from"./constant-a81ffd37.js";import{n as Q,u as Y,m as Z,t as v}from"./with-install-278c4a2b.js";import{c as $}from"./interceptor-1ff3f352.js";const[ee,l,d]=X("dialog"),te=f({},z,{title:String,theme:String,width:Q,message:[String,Function],callback:Function,allowHtml:Boolean,className:Y,transition:Z("van-dialog-bounce"),messageAlign:String,closeOnPopstate:v,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,cancelButtonDisabled:Boolean,confirmButtonText:String,confirmButtonColor:String,confirmButtonDisabled:Boolean,showConfirmButton:v,closeOnClickOverlay:Boolean}),ne=[...M,"transition","closeOnPopstate"],oe=K({name:ee,props:te,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:r,slots:o}){const u=_(),i=I({confirm:!1,cancel:!1}),C=t=>r("update:show",t),b=t=>{var a;C(!1),(a=e.callback)==null||a.call(e,t)},y=t=>()=>{e.show&&(r(t),e.beforeClose?(i[t]=!0,$(e.beforeClose,{args:[t],done(){b(t),i[t]=!1},canceled(){i[t]=!1}})):b(t))},B=y("cancel"),g=y("confirm"),S=U(t=>{var s,c;if(t.target!==((c=(s=u.value)==null?void 0:s.popupRef)==null?void 0:c.value))return;({Enter:e.showConfirmButton?g:T,Escape:e.showCancelButton?B:T})[t.key](),r("keydown",t)},["enter","esc"]),D=()=>{const t=o.title?o.title():e.title;if(t)return n("div",{class:l("header",{isolated:!e.message&&!o.default})},[t])},O=t=>{const{message:a,allowHtml:s,messageAlign:c}=e,m=l("message",{"has-title":t,[c]:c}),h=j(a)?a():a;return s&&typeof h=="string"?n("div",{class:m,innerHTML:h},null):n("div",{class:m},[h])},A=()=>{if(o.default)return n("div",{class:l("content")},[o.default()]);const{title:t,message:a,allowHtml:s}=e;if(a){const c=!!(t||o.title);return n("div",{key:s?1:0,class:l("content",{isolated:!c})},[O(c)])}},E=()=>n("div",{class:[J,l("footer")]},[e.showCancelButton&&n(k,{size:"large",text:e.cancelButtonText||d("cancel"),class:l("cancel"),style:{color:e.cancelButtonColor},loading:i.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&n(k,{size:"large",text:e.confirmButtonText||d("confirm"),class:[l("confirm"),{[G]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:i.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]),H=()=>n(W,{class:l("footer")},{default:()=>[e.showCancelButton&&n(P,{type:"warning",text:e.cancelButtonText||d("cancel"),class:l("cancel"),color:e.cancelButtonColor,loading:i.cancel,disabled:e.cancelButtonDisabled,onClick:B},null),e.showConfirmButton&&n(P,{type:"danger",text:e.confirmButtonText||d("confirm"),class:l("confirm"),color:e.confirmButtonColor,loading:i.confirm,disabled:e.confirmButtonDisabled,onClick:g},null)]}),N=()=>o.footer?o.footer():e.theme==="round-button"?H():E();return()=>{const{width:t,title:a,theme:s,message:c,className:m}=e;return n(L,x({ref:u,role:"dialog",class:[l([s]),m],style:{width:V(t)},tabindex:0,"aria-labelledby":a||c,onKeydown:S,"onUpdate:show":C},p(e,ne)),{default:()=>[D(),A(),N()]})}}});let w;const ae={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,cancelButtonDisabled:!1,confirmButtonText:"",confirmButtonColor:null,confirmButtonDisabled:!1,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};let le=f({},ae);function ce(){({instance:w}=F({setup(){const{state:r,toggle:o}=R();return()=>n(oe,x(r,{"onUpdate:show":o}),null)}}))}function se(e){return q?new Promise((r,o)=>{w||ce(),w.open(f({},le,e,{callback:u=>{(u==="confirm"?r:o)(u)}}))}):Promise.resolve()}const we=e=>se(f({showCancelButton:!0},e));export{oe as _,we as a,se as s};