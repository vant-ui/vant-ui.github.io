import{V as o}from"./index.d16595ff.js";import{D as k,s as r,a as m}from"./index.19f634aa.js";import{c as A}from"./index.e41a59ee.js";import{a as E}from"./use-translate.c56bc05e.js";import{A as _,x as g,r as b,o as w,a as h,e as u,w as i,C as e,d as v,F as x}from"./vue-libs.a3cd7f61.js";import"./with-install.2d06a5b3.js";import"./use-route.7a9317f3.js";import"./index.710c79e5.js";import"./constant.80c6de18.js";import"./interceptor.7caa5e9a.js";import"./index.d361c3fa.js";import"./use-expose.2dad0d8e.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.a0b9e7c8.js";import"./index.3c8c27cb.js";import"./index.1fe53b6c.js";import"./index.a1212cde.js";import"./use-placeholder.cbe8fb14.js";import"./use-height.b399722c.js";import"./mount-component.2ea251e1.js";const y=["src"],Z=_({__name:"index",setup(R){const t=E({"zh-CN":{title:"\u6807\u9898",alert1:"\u63D0\u793A\u5F39\u7A97",alert2:"\u63D0\u793A\u5F39\u7A97\uFF08\u65E0\u6807\u9898\uFF09",confirm:"\u786E\u8BA4\u5F39\u7A97",content1:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\u3002",content2:"\u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002",content3:"\u5982\u679C\u89E3\u51B3\u65B9\u6CD5\u662F\u4E11\u964B\u7684\uFF0C\u90A3\u5C31\u80AF\u5B9A\u8FD8\u6709\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u53EA\u662F\u8FD8\u6CA1\u6709\u53D1\u73B0\u800C\u5DF2\u3002",beforeClose:"\u5F02\u6B65\u5173\u95ED",roundButton:"\u5706\u89D2\u6309\u94AE\u6837\u5F0F",componentCall:"\u7EC4\u4EF6\u8C03\u7528"},"en-US":{title:"Title",alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",content1:"Content",content2:"Content",content3:"Content",beforeClose:"Before Close",roundButton:"Round Button Style",componentCall:"Component Call"}}),s=g(!1),C=A("apple-3.jpeg"),F=()=>{r({title:t("title"),message:t("content1")})},p=()=>{r({message:t("content2")})},d=()=>{r({theme:"round-button",title:t("title"),message:t("content1")})},f=()=>{r({theme:"round-button",message:t("content2")})},D=()=>{m({title:t("title"),message:t("content3")})},B=()=>{const a=l=>new Promise(n=>{setTimeout(()=>n(l==="confirm"),1e3)});m({title:t("title"),message:t("content3"),beforeClose:a})};return(a,l)=>{const n=b("demo-block");return w(),h(x,null,[u(n,{card:"",title:e(t)("basicUsage")},{default:i(()=>[u(e(o),{"is-link":"",title:e(t)("alert1"),onClick:F},null,8,["title"]),u(e(o),{"is-link":"",title:e(t)("alert2"),onClick:p},null,8,["title"]),u(e(o),{"is-link":"",title:e(t)("confirm"),onClick:D},null,8,["title"])]),_:1},8,["title"]),u(n,{card:"",title:e(t)("roundButton")},{default:i(()=>[u(e(o),{"is-link":"",title:e(t)("alert1"),onClick:d},null,8,["title"]),u(e(o),{"is-link":"",title:e(t)("alert2"),onClick:f},null,8,["title"])]),_:1},8,["title"]),u(n,{card:"",title:e(t)("beforeClose")},{default:i(()=>[u(e(o),{"is-link":"",title:e(t)("beforeClose"),onClick:B},null,8,["title"])]),_:1},8,["title"]),u(n,{card:"",title:e(t)("componentCall")},{default:i(()=>[u(e(o),{"is-link":"",title:e(t)("componentCall"),onClick:l[0]||(l[0]=c=>s.value=!0)},null,8,["title"]),u(e(k),{show:s.value,"onUpdate:show":l[1]||(l[1]=c=>s.value=c),title:e(t)("title"),"show-cancel-button":"","lazy-render":!1},{default:i(()=>[v("img",{src:e(C)},null,8,y)]),_:1},8,["show","title"])]),_:1},8,["title"])],64)}}});export{Z as default};
