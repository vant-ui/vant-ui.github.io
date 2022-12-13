import{c as z,i as F,_ as I,n as M,s as O,l as j,H as V,a as X}from"./use-translate.a029ce72.js";import{c as $,n as P,w as G}from"./with-install.1dc27775.js";import{c as J}from"./interceptor.2257d115.js";import{u as K}from"./use-touch.e8c4f7e8.js";import{u as Q}from"./use-expose.c6c7f4f7.js";import{A,u as _,H as Y,D as R,e as l,r as Z,o as ee,a as te,w as r,C as t,F as oe}from"./vue-libs.d5ee895a.js";import{B as p}from"./index.223d383d.js";import{C as q}from"./index.6734f2fd.js";import{C as le}from"./index.1e371012.js";import{c as ae}from"./index.798f6ecc.js";import{a as se}from"./index.b6703f9b.js";import"./constant.e12a51b9.js";import"./use-route.55b36618.js";import"./index.0a9aad73.js";import"./index.3014f697.js";import"./index.cacc54a3.js";import"./index.6c8b2367.js";import"./index.2c2953fb.js";import"./index.61c0c549.js";import"./use-lazy-render.8319bb4a.js";import"./on-popup-reopen.5b484164.js";import"./index.45507804.js";import"./index.e601894c.js";import"./use-placeholder.5fd501c9.js";import"./use-height.4f2b97aa.js";import"./mount-component.a9874ea3.js";const[ne,b]=z("swipe-cell"),re={name:$(""),disabled:Boolean,leftWidth:P,rightWidth:P,beforeClose:Function,stopPropagation:Boolean},ie=A({name:ne,props:re,emits:["open","close","click"],setup(a,{emit:o,slots:m}){let i,u,d;const f=_(),w=_(),y=_(),s=Y({offset:0,dragging:!1}),g=K(),k=e=>e.value?O(e).width:0,h=R(()=>F(a.leftWidth)?+a.leftWidth:k(w)),C=R(()=>F(a.rightWidth)?+a.rightWidth:k(y)),T=e=>{s.offset=e==="left"?h.value:-C.value,i||(i=!0,o("open",{name:a.name,position:e}))},v=e=>{s.offset=0,i&&(i=!1,o("close",{name:a.name,position:e}))},H=e=>{const n=Math.abs(s.offset),c=.15,U=i?1-c:c,D=e==="left"?h.value:C.value;D&&n>D*U?T(e):v(e)},N=e=>{a.disabled||(d=s.offset,g.start(e))},L=e=>{if(a.disabled)return;const{deltaX:n}=g;g.move(e),g.isHorizontal()&&(u=!0,s.dragging=!0,(!i||n.value*d<0)&&j(e,a.stopPropagation),s.offset=V(n.value+d,-C.value,h.value))},B=()=>{s.dragging&&(s.dragging=!1,H(s.offset>0?"left":"right"),setTimeout(()=>{u=!1},0))},E=(e="outside")=>{o("click",e),i&&!u&&J(a.beforeClose,{args:[{name:a.name,position:e}],done:()=>v(e)})},S=(e,n)=>c=>{n&&c.stopPropagation(),E(e)},W=(e,n)=>{const c=m[e];if(c)return l("div",{ref:n,class:b(e),onClick:S(e,!0)},[c()])};return Q({open:T,close:v}),I(f,()=>E("outside"),{eventName:"touchstart"}),M("touchmove",L,{target:f}),()=>{var n;const e={transform:`translate3d(${s.offset}px, 0, 0)`,transitionDuration:s.dragging?"0s":".6s"};return l("div",{ref:f,class:b(),onClick:S("cell",u),onTouchstartPassive:N,onTouchend:B,onTouchcancel:B},[l("div",{class:b("wrapper"),style:e},[W("left",w),(n=m.default)==null?void 0:n.call(m),W("right",y)])])}}}),x=G(ie),Ae=A({__name:"index",setup(a){const o=X({"zh-CN":{select:"\u9009\u62E9",delete:"\u5220\u9664",collect:"\u6536\u85CF",title:"\u5355\u5143\u683C",confirm:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",cardTitle:"\u5546\u54C1\u6807\u9898",beforeClose:"\u5F02\u6B65\u5173\u95ED",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},"en-US":{select:"Select",delete:"Delete",collect:"Collect",title:"Cell",confirm:"Are you sure to delete?",cardTitle:"Title",beforeClose:"Before Close",customContent:"Custom Content"}}),m=ae("ipad.jpeg"),i=({position:u})=>{switch(u){case"left":case"cell":case"outside":return!0;case"right":return new Promise(d=>{se({title:o("confirm")}).then(()=>{d(!0)})})}};return(u,d)=>{const f=Z("demo-block");return ee(),te(oe,null,[l(f,{title:t(o)("basicUsage")},{default:r(()=>[l(t(x),null,{left:r(()=>[l(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:r(()=>[l(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"]),l(t(p),{square:"",type:"primary",text:t(o)("collect")},null,8,["text"])]),default:r(()=>[l(t(q),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"]),l(f,{title:t(o)("customContent")},{default:r(()=>[l(t(x),null,{right:r(()=>[l(t(p),{square:"",type:"danger",class:"delete-button",text:t(o)("delete")},null,8,["text"])]),default:r(()=>[l(t(le),{num:"2",price:"2.00",desc:t(o)("desc"),title:t(o)("cardTitle"),thumb:t(m)},null,8,["desc","title","thumb"])]),_:1})]),_:1},8,["title"]),l(f,{title:t(o)("beforeClose")},{default:r(()=>[l(t(x),{"before-close":i},{left:r(()=>[l(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:r(()=>[l(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"])]),default:r(()=>[l(t(q),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"])],64)}}});export{Ae as default};
