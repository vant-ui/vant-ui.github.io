import{V as s}from"./index.490ce1c3.js";import{c as A}from"./index.d8fe3225.js";import{T as u}from"./function-call.509e41a7.js";import{a as f}from"./use-translate.d2900b8c.js";import{z as x,r as B,o as F,a as E,e,w as a,B as t,F as I}from"./vue-libs.b44bc779.js";import"./with-install.19a35764.js";import"./use-route.82f2be69.js";import"./index.b70c9b40.js";import"./mount-component.f3744995.js";import"./use-expose.c942d5f8.js";import"./index.e6e790ed.js";import"./constant.80c6de18.js";import"./interceptor.f0c85874.js";import"./use-touch.04ca7093.js";import"./use-lazy-render.f712e85e.js";import"./on-popup-reopen.138c77eb.js";import"./index.d46e53a8.js";import"./index.4e4daaac.js";const G=x({__name:"index",setup(D){const o=f({"zh-CN":{fail:"\u5931\u8D25\u63D0\u793A",text:"\u63D0\u793A\u5185\u5BB9",text2:"\u6210\u529F\u6587\u6848",text3:"\u5931\u8D25\u6587\u6848",text4:l=>`\u5012\u8BA1\u65F6 ${l} \u79D2`,title1:"\u6587\u5B57\u63D0\u793A",title2:"\u52A0\u8F7D\u63D0\u793A",title3:"\u6210\u529F/\u5931\u8D25\u63D0\u793A",success:"\u6210\u529F\u63D0\u793A",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customImage:"\u81EA\u5B9A\u4E49\u56FE\u7247",loadingType:"\u81EA\u5B9A\u4E49\u52A0\u8F7D\u56FE\u6807",positionTop:"\u9876\u90E8\u5C55\u793A",updateMessage:"\u52A8\u6001\u66F4\u65B0\u63D0\u793A",positionBottom:"\u5E95\u90E8\u5C55\u793A",customPosition:"\u81EA\u5B9A\u4E49\u4F4D\u7F6E"},"en-US":{fail:"Fail",text:"Some messages",text2:"Success",text3:"Fail",text4:l=>`${l} seconds`,title1:"Text",title2:"Loading",title3:"Success/Fail",success:"Success",customIcon:"Custom Icon",customImage:"Custom Image",loadingType:"Loading Type",positionTop:"Top",updateMessage:"Update Message",positionBottom:"Bottom",customPosition:"Custom Position"}}),c=l=>{u.loading({forbidClick:!0,message:o("loading"),loadingType:l})},p=()=>{u.success(o("text2"))},r=()=>{u.fail(o("text3"))},d=()=>{u({message:o("positionTop"),position:"top"})},g=()=>{u({message:o("positionBottom"),position:"bottom"})},k=()=>{u({message:o("customIcon"),icon:"like-o"})},C=()=>{u({message:o("customImage"),icon:A("logo.png")})},T=()=>{const l=u.loading({duration:0,forbidClick:!0,message:o("text4",3)});let i=3;const n=setInterval(()=>{i--,i?l.message=o("text4",i):(clearInterval(n),u.clear())},1e3)};return(l,i)=>{const n=B("demo-block");return F(),E(I,null,[e(n,{card:"",title:t(o)("basicUsage")},{default:a(()=>[e(t(s),{"is-link":"",title:t(o)("title1"),onClick:i[0]||(i[0]=m=>t(u)(t(o)("text")))},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("title2"),onClick:i[1]||(i[1]=m=>c())},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("success"),onClick:p},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("fail"),onClick:r},null,8,["title"])]),_:1},8,["title"]),e(n,{card:"",title:t(o)("customIcon")},{default:a(()=>[e(t(s),{"is-link":"",title:t(o)("customIcon"),onClick:k},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("customImage"),onClick:C},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("loadingType"),onClick:i[2]||(i[2]=m=>c("spinner"))},null,8,["title"])]),_:1},8,["title"]),e(n,{card:"",title:t(o)("customPosition")},{default:a(()=>[e(t(s),{"is-link":"",title:t(o)("positionTop"),onClick:d},null,8,["title"]),e(t(s),{"is-link":"",title:t(o)("positionBottom"),onClick:g},null,8,["title"])]),_:1},8,["title"]),e(n,{card:"",title:t(o)("updateMessage")},{default:a(()=>[e(t(s),{"is-link":"",title:t(o)("updateMessage"),onClick:T},null,8,["title"])]),_:1},8,["title"])],64)}}});export{G as default};
