import{V as w}from"./index.bb5cccb6.js";import{c as B,e as E,p as T,a as y}from"./use-translate.fec5be1c.js";import{t as k,b as I,m as U,w as _}from"./with-install.6c9f4f06.js";import{H as N}from"./constant.80c6de18.js";import{I as V}from"./index.a07b08cc.js";import{p as $,a as H,P as K}from"./index.e65191a7.js";import{L as z}from"./index.98a2059e.js";import{z as P,e as n,A as L,q,C,D as x,r as W,o as j,a as G,w as S,B as e,d as J,t as M,F as Q}from"./vue-libs.7ad34eae.js";import{T as D}from"./function-call.217b1291.js";import"./use-route.13c8c682.js";import"./interceptor.2bcb0d63.js";import"./use-expose.9edd25e2.js";import"./use-touch.79e2b006.js";import"./use-lazy-render.96f053d1.js";import"./on-popup-reopen.c53e1654.js";import"./index.7781bda0.js";import"./mount-component.5701bbc6.js";const[R,l]=B("action-sheet"),X=E({},$,{title:String,round:k,actions:I(),closeIcon:U("cross"),closeable:k,cancelText:String,description:String,closeOnPopstate:k,closeOnClickAction:Boolean,safeAreaInsetBottom:k}),Y=[...H,"round","closeOnPopstate","safeAreaInsetBottom"],Z=P({name:R,props:X,emits:["select","cancel","update:show"],setup(a,{slots:t,emit:c}){const u=s=>c("update:show",s),r=()=>{u(!1),c("cancel")},m=()=>{if(a.title)return n("div",{class:l("header")},[a.title,a.closeable&&n(V,{name:a.closeIcon,class:[l("close"),N],onClick:r},null)])},f=()=>{if(t.cancel||a.cancelText)return[n("div",{class:l("gap")},null),n("button",{type:"button",class:l("cancel"),onClick:r},[t.cancel?t.cancel():a.cancelText])]},v=(s,p)=>s.loading?n(z,{class:l("loading-icon")},null):t.action?t.action({action:s,index:p}):[n("span",{class:l("name")},[s.name]),s.subname&&n("div",{class:l("subname")},[s.subname])],F=(s,p)=>{const{color:b,loading:o,callback:d,disabled:i,className:g}=s,O=()=>{i||o||(d&&d(s),a.closeOnClickAction&&u(!1),q(()=>c("select",s,p)))};return n("button",{type:"button",style:{color:b},class:[l("item",{loading:o,disabled:i}),g],onClick:O},[v(s,p)])},A=()=>{if(a.description||t.description){const s=t.description?t.description():a.description;return n("div",{class:l("description")},[s])}};return()=>n(K,L({class:l(),position:"bottom","onUpdate:show":u},T(a,Y)),{default:()=>{var s;return[m(),A(),n("div",{class:l("content")},[a.actions.map(F),(s=t.default)==null?void 0:s.call(t)]),f()]}})}}),tt=_(Z),h=tt,et={class:"demo-action-sheet-content"},bt=P({__name:"index",setup(a){const t=y({"zh-CN":{option1:"\u9009\u9879\u4E00",option2:"\u9009\u9879\u4E8C",option3:"\u9009\u9879\u4E09",subname:"\u63CF\u8FF0\u4FE1\u606F",showCancel:"\u5C55\u793A\u53D6\u6D88\u6309\u94AE",buttonText:"\u5F39\u51FA\u83DC\u5355",customPanel:"\u81EA\u5B9A\u4E49\u9762\u677F",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F",optionStatus:"\u9009\u9879\u72B6\u6001",coloredOption:"\u7740\u8272\u9009\u9879",disabledOption:"\u7981\u7528\u9009\u9879",showDescription:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"},"en-US":{option1:"Option 1",option2:"Option 2",option3:"Option 3",subname:"Description",showCancel:"Show Cancel Button",buttonText:"Show ActionSheet",customPanel:"Custom Panel",description:"Description",optionStatus:"Option Status",coloredOption:"Colored Option",disabledOption:"Disabled Option",showDescription:"Show Description"}}),c=C(!1),u=C(!1),r=C(!1),m=C(!1),f=C(!1),v=x(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3")}]),F=x(()=>[{name:t("coloredOption"),color:"#ee0a24"},{name:t("disabledOption"),disabled:!0},{loading:!0}]),A=x(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3"),subname:t("subname")}]),s=b=>{c.value=!1,D(b.name)},p=()=>D(t("cancel"));return(b,o)=>{const d=W("demo-block");return j(),G(Q,null,[n(d,{card:"",title:e(t)("basicUsage")},{default:S(()=>[n(e(w),{"is-link":"",title:e(t)("basicUsage"),onClick:o[0]||(o[0]=i=>c.value=!0)},null,8,["title"]),n(e(w),{"is-link":"",title:e(t)("showCancel"),onClick:o[1]||(o[1]=i=>u.value=!0)},null,8,["title"]),n(e(w),{"is-link":"",title:e(t)("showDescription"),onClick:o[2]||(o[2]=i=>f.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(d,{card:"",title:e(t)("optionStatus")},{default:S(()=>[n(e(w),{"is-link":"",title:e(t)("optionStatus"),onClick:o[3]||(o[3]=i=>m.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(d,{card:"",title:e(t)("customPanel")},{default:S(()=>[n(e(w),{"is-link":"",title:e(t)("customPanel"),onClick:o[4]||(o[4]=i=>r.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(e(h),{show:c.value,"onUpdate:show":o[5]||(o[5]=i=>c.value=i),actions:e(v),onSelect:s},null,8,["show","actions"]),n(e(h),{show:u.value,"onUpdate:show":o[6]||(o[6]=i=>u.value=i),actions:e(v),"close-on-click-action":"","cancel-text":e(t)("cancel"),onCancel:p},null,8,["show","actions","cancel-text"]),n(e(h),{show:f.value,"onUpdate:show":o[7]||(o[7]=i=>f.value=i),actions:e(A),"close-on-click-action":"","cancel-text":e(t)("cancel"),description:e(t)("description")},null,8,["show","actions","cancel-text","description"]),n(e(h),{show:m.value,"onUpdate:show":o[8]||(o[8]=i=>m.value=i),"close-on-click-action":"",actions:e(F),"cancel-text":e(t)("cancel")},null,8,["show","actions","cancel-text"]),n(e(h),{show:r.value,"onUpdate:show":o[9]||(o[9]=i=>r.value=i),title:e(t)("title")},{default:S(()=>[J("div",et,M(e(t)("content")),1)]),_:1},8,["show","title"])],64)}}});export{bt as default};
