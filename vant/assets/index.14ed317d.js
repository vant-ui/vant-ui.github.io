import{c as S,b as O,v as R,e as z,u as M,f as j,a as K}from"./use-translate.fec5be1c.js";import{t as E,n as P,c as L,w as $}from"./with-install.6c9f4f06.js";import{b as Y}from"./constant.80c6de18.js";import{c as Z}from"./interceptor.2bcb0d63.js";import{u as q}from"./use-placeholder.4359a3b6.js";import{z as A,C,e as t,P as G,D as H,A as J,r as Q,o as W,a as X,w as a,B as e,h as u,t as n,d as y,F as ee}from"./vue-libs.7ad34eae.js";import{r as te,u as ae}from"./use-route.13c8c682.js";import{B as oe,I as ne}from"./index.a07b08cc.js";import{c as k}from"./index.9b7eef50.js";import{T as le}from"./function-call.217b1291.js";import"./use-height.cdebb266.js";import"./on-popup-reopen.c53e1654.js";import"./mount-component.5701bbc6.js";import"./use-expose.9edd25e2.js";import"./index.e65191a7.js";import"./use-touch.79e2b006.js";import"./use-lazy-render.96f053d1.js";import"./index.7781bda0.js";import"./index.98a2059e.js";const[U,N]=S("tabbar"),ue={route:Boolean,fixed:E,border:E,zIndex:P,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:L(0),safeAreaInsetBottom:{type:Boolean,default:null}},w=Symbol(U),ce=A({name:U,props:ue,emits:["change","update:modelValue"],setup(i,{emit:o,slots:d}){const _=C(),{linkChildren:p}=O(w),v=q(_,N),g=()=>{var f;return(f=i.safeAreaInsetBottom)!=null?f:i.fixed},m=()=>{var s;const{fixed:f,zIndex:b,border:c}=i;return t("div",{ref:_,role:"tablist",style:R(b),class:[N({fixed:f}),{[Y]:c,"van-safe-area-bottom":g()}]},[(s=d.default)==null?void 0:s.call(d)])};return p({props:i,setActive:(f,b)=>{Z(i.beforeChange,{args:[f],done(){o("update:modelValue",f),o("change",f),b()}})}}),()=>i.fixed&&i.placeholder?v(m):m()}}),ie=$(ce),V=ie,[re,I]=S("tabbar-item"),se=z({},te,{dot:Boolean,icon:String,name:P,badge:P,badgeProps:Object,iconPrefix:String}),de=A({name:re,props:se,emits:["click"],setup(i,{emit:o,slots:d}){const _=ae(),p=G().proxy,{parent:v,index:g}=M(w);if(!v)return;const m=H(()=>{var s;const{route:b,modelValue:c}=v.props;if(b&&"$route"in p){const{$route:r}=p,{to:x}=i,h=j(x)?x:{path:x};return!!r.matched.find(T=>{const D="path"in h&&h.path===T.path,F="name"in h&&h.name===T.name;return D||F})}return((s=i.name)!=null?s:g.value)===c}),B=b=>{var c;m.value||v.setActive((c=i.name)!=null?c:g.value,_),o("click",b)},f=()=>{if(d.icon)return d.icon({active:m.value});if(i.icon)return t(ne,{name:i.icon,classPrefix:i.iconPrefix},null)};return()=>{var h;const{dot:b,badge:c}=i,{activeColor:s,inactiveColor:r}=v.props,x=m.value?s:r;return t("div",{role:"tab",class:I({active:m.value}),style:{color:x},tabindex:0,"aria-selected":m.value,onClick:B},[t(oe,J({dot:b,class:I("icon"),content:c},i.badgeProps),{default:f}),t("div",{class:I("text")},[(h=d.default)==null?void 0:h.call(d,{active:m.value})])])}}}),me=$(de),l=me,fe=["src"],$e=A({__name:"index",setup(i){const o=K({"zh-CN":{badge:"\u5FBD\u6807\u63D0\u793A",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",matchByName:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",switchEvent:"\u76D1\u542C\u5207\u6362\u4E8B\u4EF6"},"en-US":{badge:"Show Badge",customIcon:"Custom Icon",customColor:"Custom Color",matchByName:"Match by name",switchEvent:"Change Event"}}),d=C(0),_=C(0),p=C(0),v=C(0),g=C(0),m=C("home"),B={active:k("user-active.png"),inactive:k("user-inactive.png")},f=b=>{le(`${o("tab")} ${b+1}`)};return(b,c)=>{const s=Q("demo-block");return W(),X(ee,null,[t(s,{title:e(o)("basicUsage")},{default:a(()=>[t(e(V),{modelValue:d.value,"onUpdate:modelValue":c[0]||(c[0]=r=>d.value=r)},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("matchByName")},{default:a(()=>[t(e(V),{modelValue:m.value,"onUpdate:modelValue":c[1]||(c[1]=r=>m.value=r)},{default:a(()=>[t(e(l),{name:"home",icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"search",icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"friends",icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"setting",icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("badge")},{default:a(()=>[t(e(V),{modelValue:_.value,"onUpdate:modelValue":c[2]||(c[2]=r=>_.value=r)},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search",dot:""},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o",badge:"5"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o",badge:"20"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("customIcon")},{default:a(()=>[t(e(V),{modelValue:p.value,"onUpdate:modelValue":c[3]||(c[3]=r=>p.value=r)},{default:a(()=>[t(e(l),{badge:"3"},{icon:a(r=>[y("img",{src:r.active?B.active:B.inactive},null,8,fe)]),default:a(()=>[y("span",null,n(e(o)("custom")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("customColor")},{default:a(()=>[t(e(V),{modelValue:v.value,"onUpdate:modelValue":c[4]||(c[4]=r=>v.value=r),"active-color":"#ee0a24","inactive-color":"#000"},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("switchEvent")},{default:a(()=>[t(e(V),{modelValue:g.value,"onUpdate:modelValue":c[5]||(c[5]=r=>g.value=r),onChange:f},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(`${e(o)("tab")} 1`),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(`${e(o)("tab")} 2`),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(`${e(o)("tab")} 3`),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(`${e(o)("tab")} 4`),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{$e as default};
