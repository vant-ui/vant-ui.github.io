import{A as b,V as a,a as u}from"./index.69bf6596.js";import{c as I,e as k,u as A,a as E}from"./use-translate.4764287f.js";import{n as F,u as P,w as h}from"./with-install.bb994bce.js";import{r as D,u as y}from"./use-route.13c8c682.js";import{B as w,I as v}from"./index.de1d0b70.js";import{z as C,e as n,A as S,r as V,o as N,a as T,w as c,B as t,F as z}from"./vue-libs.7ad34eae.js";import{T as B}from"./function-call.6aff4f2a.js";import"./use-placeholder.76864190.js";import"./use-height.8c583324.js";import"./on-popup-reopen.c53e1654.js";import"./use-expose.6911a823.js";import"./index.72e98335.js";import"./constant.80c6de18.js";import"./index.eee57e92.js";import"./mount-component.18ad4a6f.js";import"./index.1557f4e4.js";import"./interceptor.958dcd96.js";import"./use-touch.79e2b006.js";import"./use-lazy-render.96f053d1.js";import"./index.1694d152.js";const[O,x]=I("action-bar-icon"),R=k({},D,{dot:Boolean,text:String,icon:String,color:String,badge:F,iconClass:P,badgeProps:Object,iconPrefix:String}),U=C({name:O,props:R,setup(r,{slots:o}){const i=y();A(b);const s=()=>{const{dot:d,badge:m,icon:l,color:f,iconClass:g,badgeProps:p,iconPrefix:_}=r;return o.icon?n(w,S({dot:d,class:x("icon"),content:m},p),{default:o.icon}):n(v,{tag:"div",dot:d,name:l,badge:m,color:f,class:[x("icon"),g],badgeProps:p,classPrefix:_},null)};return()=>n("div",{role:"button",class:x(),tabindex:0,onClick:i},[s(),o.default?o.default():r.text])}}),j=h(U),e=j,it=C({__name:"index",setup(r){const o=E({"zh-CN":{icon1:"\u5BA2\u670D",icon2:"\u8D2D\u7269\u8F66",icon3:"\u5E97\u94FA",button1:"\u52A0\u5165\u8D2D\u7269\u8F66",button2:"\u7ACB\u5373\u8D2D\u4E70",iconBadge:"\u5FBD\u6807\u63D0\u793A",collected:"\u5DF2\u6536\u85CF",clickIcon:"\u70B9\u51FB\u56FE\u6807",clickButton:"\u70B9\u51FB\u6309\u94AE",customIconColor:"\u81EA\u5B9A\u4E49\u56FE\u6807\u989C\u8272",customButtonColor:"\u81EA\u5B9A\u4E49\u6309\u94AE\u989C\u8272"},"en-US":{icon1:"Icon1",icon2:"Icon2",icon3:"Icon3",button1:"Button",button2:"Button",iconBadge:"Icon Badge",collected:"Collected",clickIcon:"Click Icon",clickButton:"Click Button",customIconColor:"Custom Icon Color",customButtonColor:"Custom Button Color"}}),i=()=>B(o("clickIcon")),s=()=>B(o("clickButton"));return(d,m)=>{const l=V("demo-block");return N(),T(z,null,[n(l,{title:t(o)("basicUsage")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),onClick:i},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2"),onClick:i},null,8,["text"]),n(t(e),{icon:"shop-o",text:t(o)("icon3"),onClick:i},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2"),onClick:s},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("iconBadge")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",dot:"",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",badge:"5",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"shop-o",badge:"12",text:t(o)("icon3")},null,8,["text"]),n(t(u),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("customIconColor")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1"),color:"#ee0a24"},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(e),{icon:"star",text:t(o)("collected"),color:"#ff5000"},null,8,["text"]),n(t(u),{type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"]),n(l,{title:t(o)("customButtonColor")},{default:c(()=>[n(t(a),null,{default:c(()=>[n(t(e),{icon:"chat-o",text:t(o)("icon1")},null,8,["text"]),n(t(e),{icon:"cart-o",text:t(o)("icon2")},null,8,["text"]),n(t(u),{color:"#be99ff",type:"warning",text:t(o)("button1")},null,8,["text"]),n(t(u),{color:"#7232dd",type:"danger",text:t(o)("button2")},null,8,["text"])]),_:1})]),_:1},8,["title"])],64)}}});export{it as default};
