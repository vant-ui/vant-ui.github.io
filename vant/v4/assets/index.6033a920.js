import{c as U,i as D,r as z,Z as I,n as M,l as O,F as j,a as X}from"./use-translate.4bd55976.js";import{c as Z,n as P,w as $}from"./with-install.4d0ca77e.js";import{c as G}from"./interceptor.442e99c6.js";import{u as J}from"./use-touch.d7fba47b.js";import{u as K}from"./use-expose.2b4664c4.js";import{A as q,x as _,H as Q,D as V,e as l,r as Y,o as ee,a as te,w as r,C as t,F as oe}from"./vue-libs.34a885a4.js";import{V as p}from"./index.d3837f2c.js";import{V as R}from"./index.e45b9adc.js";import{V as le}from"./index.403824aa.js";import{c as ae}from"./index.a54b3812.js";import{a as ne}from"./index.7469d093.js";import"./constant.80c6de18.js";import"./use-route.d291d507.js";import"./index.43c21584.js";import"./index.3e55758c.js";import"./index.cef67cd8.js";import"./index.3ff8961b.js";import"./index.34afbbb7.js";import"./index.df58843c.js";import"./use-lazy-render.a4c2132f.js";import"./on-popup-reopen.550cf80c.js";import"./index.0e81d5df.js";import"./index.1a7c4eb4.js";import"./use-placeholder.cab25a6f.js";import"./use-height.b8da6b61.js";import"./mount-component.60637ff5.js";const[se,x]=U("swipe-cell"),re={name:Z(""),disabled:Boolean,leftWidth:P,rightWidth:P,beforeClose:Function,stopPropagation:Boolean},ie=q({name:se,props:re,emits:["open","close","click"],setup(a,{emit:o,slots:m}){let i,u,d;const f=_(),w=_(),y=_(),n=Q({offset:0,dragging:!1}),g=J(),k=e=>e.value?z(e).width:0,h=V(()=>D(a.leftWidth)?+a.leftWidth:k(w)),C=V(()=>D(a.rightWidth)?+a.rightWidth:k(y)),T=e=>{n.offset=e==="left"?h.value:-C.value,i||(i=!0,o("open",{name:a.name,position:e}))},v=e=>{n.offset=0,i&&(i=!1,o("close",{name:a.name,position:e}))},A=e=>{const s=Math.abs(n.offset),c=.15,L=i?1-c:c,W=e==="left"?h.value:C.value;W&&s>W*L?T(e):v(e)},H=e=>{a.disabled||(d=n.offset,g.start(e))},N=e=>{if(a.disabled)return;const{deltaX:s}=g;g.move(e),g.isHorizontal()&&(u=!0,n.dragging=!0,(!i||s.value*d<0)&&O(e,a.stopPropagation),n.offset=j(s.value+d,-C.value,h.value))},B=()=>{n.dragging&&(n.dragging=!1,A(n.offset>0?"left":"right"),setTimeout(()=>{u=!1},0))},E=(e="outside")=>{o("click",e),i&&!u&&G(a.beforeClose,{args:[{name:a.name,position:e}],done:()=>v(e)})},S=(e,s)=>c=>{s&&c.stopPropagation(),E(e)},F=(e,s)=>{const c=m[e];if(c)return l("div",{ref:s,class:x(e),onClick:S(e,!0)},[c()])};return K({open:T,close:v}),I(f,()=>E("outside"),{eventName:"touchstart"}),M("touchmove",N,{target:f}),()=>{var s;const e={transform:`translate3d(${n.offset}px, 0, 0)`,transitionDuration:n.dragging?"0s":".6s"};return l("div",{ref:f,class:x(),onClick:S("cell",u),onTouchstartPassive:H,onTouchend:B,onTouchcancel:B},[l("div",{class:x("wrapper"),style:e},[F("left",w),(s=m.default)==null?void 0:s.call(m),F("right",y)])])}}}),ce=$(ie),b=ce,Ae=q({__name:"index",setup(a){const o=X({"zh-CN":{select:"\u9009\u62E9",delete:"\u5220\u9664",collect:"\u6536\u85CF",title:"\u5355\u5143\u683C",confirm:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",cardTitle:"\u5546\u54C1\u6807\u9898",beforeClose:"\u5F02\u6B65\u5173\u95ED",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},"en-US":{select:"Select",delete:"Delete",collect:"Collect",title:"Cell",confirm:"Are you sure to delete?",cardTitle:"Title",beforeClose:"Before Close",customContent:"Custom Content"}}),m=ae("ipad.jpeg"),i=({position:u})=>{switch(u){case"left":case"cell":case"outside":return!0;case"right":return new Promise(d=>{ne({title:o("confirm")}).then(()=>{d(!0)})})}};return(u,d)=>{const f=Y("demo-block");return ee(),te(oe,null,[l(f,{title:t(o)("basicUsage")},{default:r(()=>[l(t(b),null,{left:r(()=>[l(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:r(()=>[l(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"]),l(t(p),{square:"",type:"primary",text:t(o)("collect")},null,8,["text"])]),default:r(()=>[l(t(R),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"]),l(f,{title:t(o)("customContent")},{default:r(()=>[l(t(b),null,{right:r(()=>[l(t(p),{square:"",type:"danger",class:"delete-button",text:t(o)("delete")},null,8,["text"])]),default:r(()=>[l(t(le),{num:"2",price:"2.00",desc:t(o)("desc"),title:t(o)("cardTitle"),thumb:t(m)},null,8,["desc","title","thumb"])]),_:1})]),_:1},8,["title"]),l(f,{title:t(o)("beforeClose")},{default:r(()=>[l(t(b),{"before-close":i},{left:r(()=>[l(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:r(()=>[l(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"])]),default:r(()=>[l(t(R),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"])],64)}}});export{Ae as default};
