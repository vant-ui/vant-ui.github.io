import{c as S,b as O,v as R,e as M,u as z,f as j,a as K}from"./use-translate.c56bc05e.js";import{t as T,n as P,c as L,w as $}from"./with-install.2d06a5b3.js";import{b as Y}from"./constant.80c6de18.js";import{c as Z}from"./interceptor.7caa5e9a.js";import{u as q}from"./use-placeholder.cbe8fb14.js";import{A,x as C,e as t,P as G,D as H,B as J,r as Q,o as W,a as X,w as a,C as e,h as u,t as n,d as y,F as ee}from"./vue-libs.a3cd7f61.js";import{r as te,u as ae}from"./use-route.7a9317f3.js";import{B as oe,I as ne}from"./index.e7e14384.js";import{c as k}from"./index.e41a59ee.js";import{s as le}from"./index.1956f678.js";import"./use-height.b399722c.js";import"./index.23e8de1c.js";import"./use-expose.2dad0d8e.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.a0b9e7c8.js";import"./index.1fe53b6c.js";import"./mount-component.2ea251e1.js";const[w,N]=S("tabbar"),ue={route:Boolean,fixed:T,border:T,zIndex:P,placeholder:Boolean,activeColor:String,beforeChange:Function,inactiveColor:String,modelValue:L(0),safeAreaInsetBottom:{type:Boolean,default:null}},U=Symbol(w),re=A({name:w,props:ue,emits:["change","update:modelValue"],setup(c,{emit:o,slots:d}){const _=C(),{linkChildren:p}=O(U),v=q(_,N),g=()=>{var f;return(f=c.safeAreaInsetBottom)!=null?f:c.fixed},m=()=>{var s;const{fixed:f,zIndex:b,border:r}=c;return t("div",{ref:_,role:"tablist",style:R(b),class:[N({fixed:f}),{[Y]:r,"van-safe-area-bottom":g()}]},[(s=d.default)==null?void 0:s.call(d)])};return p({props:c,setActive:(f,b)=>{Z(c.beforeChange,{args:[f],done(){o("update:modelValue",f),o("change",f),b()}})}}),()=>c.fixed&&c.placeholder?v(m):m()}}),ce=$(re),V=ce,[ie,I]=S("tabbar-item"),se=M({},te,{dot:Boolean,icon:String,name:P,badge:P,badgeProps:Object,iconPrefix:String}),de=A({name:ie,props:se,emits:["click"],setup(c,{emit:o,slots:d}){const _=ae(),p=G().proxy,{parent:v,index:g}=z(U);if(!v)return;const m=H(()=>{var s;const{route:b,modelValue:r}=v.props;if(b&&"$route"in p){const{$route:i}=p,{to:x}=c,h=j(x)?x:{path:x};return!!i.matched.find(E=>{const D="path"in h&&h.path===E.path,F="name"in h&&h.name===E.name;return D||F})}return((s=c.name)!=null?s:g.value)===r}),B=b=>{var r;m.value||v.setActive((r=c.name)!=null?r:g.value,_),o("click",b)},f=()=>{if(d.icon)return d.icon({active:m.value});if(c.icon)return t(ne,{name:c.icon,classPrefix:c.iconPrefix},null)};return()=>{var h;const{dot:b,badge:r}=c,{activeColor:s,inactiveColor:i}=v.props,x=m.value?s:i;return t("div",{role:"tab",class:I({active:m.value}),style:{color:x},tabindex:0,"aria-selected":m.value,onClick:B},[t(oe,J({dot:b,class:I("icon"),content:r},c.badgeProps),{default:f}),t("div",{class:I("text")},[(h=d.default)==null?void 0:h.call(d,{active:m.value})])])}}}),me=$(de),l=me,fe=["src"],$e=A({__name:"index",setup(c){const o=K({"zh-CN":{badge:"\u5FBD\u6807\u63D0\u793A",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",matchByName:"\u901A\u8FC7\u540D\u79F0\u5339\u914D",switchEvent:"\u76D1\u542C\u5207\u6362\u4E8B\u4EF6"},"en-US":{badge:"Show Badge",customIcon:"Custom Icon",customColor:"Custom Color",matchByName:"Match by name",switchEvent:"Change Event"}}),d=C(0),_=C(0),p=C(0),v=C(0),g=C(0),m=C("home"),B={active:k("user-active.png"),inactive:k("user-inactive.png")},f=b=>{le(`${o("tab")} ${b+1}`)};return(b,r)=>{const s=Q("demo-block");return W(),X(ee,null,[t(s,{title:e(o)("basicUsage")},{default:a(()=>[t(e(V),{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=i=>d.value=i)},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("matchByName")},{default:a(()=>[t(e(V),{modelValue:m.value,"onUpdate:modelValue":r[1]||(r[1]=i=>m.value=i)},{default:a(()=>[t(e(l),{name:"home",icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"search",icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"friends",icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{name:"setting",icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("badge")},{default:a(()=>[t(e(V),{modelValue:_.value,"onUpdate:modelValue":r[2]||(r[2]=i=>_.value=i)},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search",dot:""},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o",badge:"5"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o",badge:"20"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("customIcon")},{default:a(()=>[t(e(V),{modelValue:p.value,"onUpdate:modelValue":r[3]||(r[3]=i=>p.value=i)},{default:a(()=>[t(e(l),{badge:"3"},{icon:a(i=>[y("img",{src:i.active?B.active:B.inactive},null,8,fe)]),default:a(()=>[y("span",null,n(e(o)("custom")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("customColor")},{default:a(()=>[t(e(V),{modelValue:v.value,"onUpdate:modelValue":r[4]||(r[4]=i=>v.value=i),"active-color":"#ee0a24"},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(e(o)("tab")),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),t(s,{title:e(o)("switchEvent")},{default:a(()=>[t(e(V),{modelValue:g.value,"onUpdate:modelValue":r[5]||(r[5]=i=>g.value=i),onChange:f},{default:a(()=>[t(e(l),{icon:"home-o"},{default:a(()=>[u(n(`${e(o)("tab")} 1`),1)]),_:1}),t(e(l),{icon:"search"},{default:a(()=>[u(n(`${e(o)("tab")} 2`),1)]),_:1}),t(e(l),{icon:"friends-o"},{default:a(()=>[u(n(`${e(o)("tab")} 3`),1)]),_:1}),t(e(l),{icon:"setting-o"},{default:a(()=>[u(n(`${e(o)("tab")} 4`),1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{$e as default};
