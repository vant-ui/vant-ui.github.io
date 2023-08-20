import{u as K}from"./use-id-09c3f4cb.js";import{u as R}from"./use-expose-80cfd2b2.js";import{b as q,O as L,$ as Q,m as Y,c as j,i as Z,q as G,o as J,u as X,t as ee,a as te}from"./use-translate-71d4880c.js";import{A as $,y,D as P,e,H as oe,S as le,Q as ne,j as ae,v as ie,B as se,r as ue,o as re,a as de,w as p,C as o,d as pe,g as me,t as ce,F as ve}from"./vue-libs-19c20d28.js";import{t as D,n as B,c as fe,m as Ve,w as H,b as we,u as M}from"./with-install-560d59bf.js";import{H as Ce}from"./constant-ee6e27d7.js";import{C as be,V as N}from"./index-1e4f5137.js";import{I as xe}from"./index-1ea87eb6.js";import{P as ge}from"./index-f6ff4ff7.js";import{V as W}from"./index-43f1556f.js";import{V as ye}from"./index-be4bb51d.js";import"./use-route-751feeeb.js";import"./index-8bc2514f.js";import"./use-lock-scroll-01f1fb06.js";import"./use-touch-4e22f945.js";import"./use-lazy-render-e63df66f.js";import"./on-popup-reopen-6f4c2d78.js";import"./index-cd342d67.js";import"./interceptor-07dc6e0f.js";import"./index-2b75ebd8.js";const[_,S]=j("dropdown-menu"),Oe={overlay:D,zIndex:B,duration:fe(.2),direction:Ve("down"),activeColor:String,closeOnClickOutside:D,closeOnClickOverlay:D,swipeThreshold:B},F=Symbol(_),ke=$({name:_,props:Oe,setup(a,{slots:r}){const V=K(),x=y(),d=y(),u=y(0),{children:i,linkChildren:v}=q(F),f=L(x),O=P(()=>i.some(s=>s.state.showWrapper)),g=P(()=>a.swipeThreshold&&i.length>+a.swipeThreshold),t=P(()=>{if(O.value&&Z(a.zIndex))return{zIndex:+a.zIndex+1}}),w=()=>{i.forEach(s=>{s.toggle(!1)})},l=()=>{a.closeOnClickOutside&&w()},h=()=>{if(d.value){const s=G(d);a.direction==="down"?u.value=s.bottom:u.value=J.value-s.top}},A=()=>{O.value&&h()},T=s=>{i.forEach((c,b)=>{b===s?c.toggle():c.state.showPopup&&c.toggle(!1,{immediate:!0})})},n=(s,c)=>{const{showPopup:b}=s.state,{disabled:C,titleClass:E}=s;return e("div",{id:`${V}-${c}`,role:"button",tabindex:C?void 0:0,class:[S("item",{disabled:C,grow:g.value}),{[Ce]:!C}],onClick:()=>{C||T(c)}},[e("span",{class:[S("title",{down:b===(a.direction==="down"),active:b}),E],style:{color:b?a.activeColor:""}},[e("div",{class:"van-ellipsis"},[s.renderTitle()])])])};return R({close:w}),v({id:V,props:a,offset:u,updateOffset:h}),Q(x,l),Y("scroll",A,{target:f,passive:!0}),()=>{var s;return e("div",{ref:x,class:S()},[e("div",{ref:d,style:t.value,class:S("bar",{opened:O.value,scrollable:g.value})},[i.map(n)]),(s=r.default)==null?void 0:s.call(r)])}}}),Pe=H(ke),k=Pe;function he(a){return typeof a=="function"||Object.prototype.toString.call(a)==="[object Object]"&&!ne(a)}const[Te,U]=j("dropdown-item"),Ie={title:String,options:we(),disabled:Boolean,teleport:[String,Object],lazyRender:D,modelValue:M,titleClass:M},Se=$({name:Te,inheritAttrs:!1,props:Ie,emits:["open","opened","close","closed","change","update:modelValue"],setup(a,{emit:r,slots:V,attrs:x}){const d=oe({showPopup:!1,transition:!0,showWrapper:!1}),{parent:u,index:i}=X(F);if(!u)return;const v=n=>()=>r(n),f=v("open"),O=v("close"),g=v("opened"),t=()=>{d.showWrapper=!1,r("closed")},w=n=>{a.teleport&&n.stopPropagation()},l=(n=!d.showPopup,s={})=>{n!==d.showPopup&&(d.showPopup=n,d.transition=!s.immediate,n&&(u.updateOffset(),d.showWrapper=!0))},h=()=>{if(V.title)return V.title();if(a.title)return a.title;const n=a.options.find(s=>s.value===a.modelValue);return n?n.text:""},A=n=>{const{activeColor:s}=u.props,c=n.value===a.modelValue,b=()=>{d.showPopup=!1,n.value!==a.modelValue&&(r("update:modelValue",n.value),r("change",n.value))},C=()=>{if(c)return e(xe,{class:U("icon"),color:s,name:"success"},null)};return e(be,{role:"menuitem",key:String(n.value),icon:n.icon,title:n.text,class:U("option",{active:c}),style:{color:c?s:""},tabindex:c?0:-1,clickable:!0,onClick:b},{value:C})},T=()=>{const{offset:n}=u,{zIndex:s,overlay:c,duration:b,direction:C,closeOnClickOverlay:E}=u.props,z=ee(s);return C==="down"?z.top=`${n.value}px`:z.bottom=`${n.value}px`,ae(e("div",se({style:z,class:U([C]),onClick:w},x),[e(ge,{show:d.showPopup,"onUpdate:show":I=>d.showPopup=I,role:"menu",class:U("content"),overlay:c,position:C==="down"?"top":"bottom",duration:d.transition?b:0,lazyRender:a.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":`${u.id}-${i.value}`,closeOnClickOverlay:E,onOpen:f,onClose:O,onOpened:g,onClosed:t},{default:()=>{var I;return[a.options.map(A),(I=V.default)==null?void 0:I.call(V)]}})]),[[ie,d.showWrapper]])};return R({state:d,toggle:l,renderTitle:h}),()=>{if(a.teleport){let n;return e(le,{to:a.teleport},he(n=T())?n:{default:()=>[n]})}return T()}}}),Ue=H(Se),m=Ue,De={style:{padding:"5px 16px"}},Je=$({__name:"index",setup(a){const r=te({"zh-CN":{disableMenu:"禁用菜单",switchTitle1:"包邮",switchTitle2:"团购",itemTitle:"筛选",expandDirection:"向上展开",customContent:"自定义菜单内容",customActiveColor:"自定义选中态颜色",swipeItems:"横向滚动",option1:[{text:"全部商品",value:0},{text:"新款商品",value:1},{text:"活动商品",value:2}],option2:[{text:"默认排序",value:"a"},{text:"好评排序",value:"b"},{text:"销量排序",value:"c"}]},"en-US":{disableMenu:"Disable Menu",switchTitle1:"Title",switchTitle2:"Title",itemTitle:"Title",expandDirection:"Expand Direction",customContent:"Custom Content",customActiveColor:"Custom Active Color",swipeItems:"Swipe Items",option1:[{text:"Option1",value:0},{text:"Option2",value:1},{text:"Option3",value:2}],option2:[{text:"Option A",value:"a"},{text:"Option B",value:"b"},{text:"Option C",value:"c"}]}}),V=y(),x=y(!0),d=y(!1),u=y(0),i=y("a"),v=P(()=>r("option1")),f=P(()=>r("option2")),O=()=>{var g;(g=V.value)==null||g.toggle()};return(g,t)=>{const w=ue("demo-block");return re(),de(ve,null,[e(w,{title:o(r)("basicUsage")},{default:p(()=>[e(o(k),null,{default:p(()=>[e(o(m),{modelValue:u.value,"onUpdate:modelValue":t[0]||(t[0]=l=>u.value=l),options:v.value},null,8,["modelValue","options"]),e(o(m),{modelValue:i.value,"onUpdate:modelValue":t[1]||(t[1]=l=>i.value=l),options:f.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),e(w,{title:o(r)("customContent")},{default:p(()=>[e(o(k),null,{default:p(()=>[e(o(m),{modelValue:u.value,"onUpdate:modelValue":t[2]||(t[2]=l=>u.value=l),options:v.value},null,8,["modelValue","options"]),e(o(m),{title:o(r)("itemTitle"),ref_key:"item",ref:V},{default:p(()=>[e(o(N),{center:"",title:o(r)("switchTitle1")},{"right-icon":p(()=>[e(o(W),{modelValue:x.value,"onUpdate:modelValue":t[3]||(t[3]=l=>x.value=l)},null,8,["modelValue"])]),_:1},8,["title"]),e(o(N),{center:"",title:o(r)("switchTitle2")},{"right-icon":p(()=>[e(o(W),{modelValue:d.value,"onUpdate:modelValue":t[4]||(t[4]=l=>d.value=l)},null,8,["modelValue"])]),_:1},8,["title"]),pe("div",De,[e(o(ye),{type:"primary",block:"",round:"",style:{height:"40px"},onClick:O},{default:p(()=>[me(ce(o(r)("confirm")),1)]),_:1})])]),_:1},8,["title"])]),_:1})]),_:1},8,["title"]),e(w,{title:o(r)("customActiveColor")},{default:p(()=>[e(o(k),{"active-color":"#ee0a24"},{default:p(()=>[e(o(m),{modelValue:u.value,"onUpdate:modelValue":t[5]||(t[5]=l=>u.value=l),options:v.value},null,8,["modelValue","options"]),e(o(m),{modelValue:i.value,"onUpdate:modelValue":t[6]||(t[6]=l=>i.value=l),options:f.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),e(w,{title:o(r)("swipeItems")},{default:p(()=>[e(o(k),{"swipe-threshold":"4"},{default:p(()=>[e(o(m),{modelValue:u.value,"onUpdate:modelValue":t[7]||(t[7]=l=>u.value=l),options:v.value},null,8,["modelValue","options"]),e(o(m),{modelValue:i.value,"onUpdate:modelValue":t[8]||(t[8]=l=>i.value=l),options:f.value},null,8,["modelValue","options"]),e(o(m),{modelValue:i.value,"onUpdate:modelValue":t[9]||(t[9]=l=>i.value=l),options:f.value},null,8,["modelValue","options"]),e(o(m),{modelValue:i.value,"onUpdate:modelValue":t[10]||(t[10]=l=>i.value=l),options:f.value},null,8,["modelValue","options"]),e(o(m),{modelValue:i.value,"onUpdate:modelValue":t[11]||(t[11]=l=>i.value=l),options:f.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),e(w,{title:o(r)("expandDirection")},{default:p(()=>[e(o(k),{direction:"up"},{default:p(()=>[e(o(m),{modelValue:u.value,"onUpdate:modelValue":t[12]||(t[12]=l=>u.value=l),options:v.value},null,8,["modelValue","options"]),e(o(m),{modelValue:i.value,"onUpdate:modelValue":t[13]||(t[13]=l=>i.value=l),options:f.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),e(w,{title:o(r)("disableMenu")},{default:p(()=>[e(o(k),null,{default:p(()=>[e(o(m),{modelValue:u.value,"onUpdate:modelValue":t[14]||(t[14]=l=>u.value=l),disabled:"",options:v.value},null,8,["modelValue","options"]),e(o(m),{modelValue:i.value,"onUpdate:modelValue":t[15]||(t[15]=l=>i.value=l),disabled:"",options:f.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"])],64)}}});export{Je as default};
