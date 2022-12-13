import{C as w}from"./index.6734f2fd.js";import{c as B,e as E,p as T,a as y}from"./use-translate.a029ce72.js";import{t as k,b as I,m as U,w as _}from"./with-install.1dc27775.js";import{H as N}from"./constant.e12a51b9.js";import{I as $}from"./index.0a9aad73.js";import{p as H,a as K,P as L}from"./index.61c0c549.js";import{L as V}from"./index.cacc54a3.js";import{A as P,e as o,B as q,q as z,u as C,D as x,r as W,o as j,a as G,w as S,C as e,d as J,t as M,F as Q}from"./vue-libs.d5ee895a.js";import{s as D}from"./index.6deecded.js";import"./use-route.55b36618.js";import"./index.3014f697.js";import"./interceptor.2257d115.js";import"./use-expose.c6c7f4f7.js";import"./use-touch.e8c4f7e8.js";import"./use-lazy-render.8319bb4a.js";import"./on-popup-reopen.5b484164.js";import"./index.45507804.js";import"./mount-component.a9874ea3.js";const[R,l]=B("action-sheet"),X=E({},H,{title:String,round:k,actions:I(),closeIcon:U("cross"),closeable:k,cancelText:String,description:String,closeOnPopstate:k,closeOnClickAction:Boolean,safeAreaInsetBottom:k}),Y=[...K,"round","closeOnPopstate","safeAreaInsetBottom"],Z=P({name:R,props:X,emits:["select","cancel","update:show"],setup(a,{slots:t,emit:c}){const u=s=>c("update:show",s),r=()=>{u(!1),c("cancel")},m=()=>{if(a.title)return o("div",{class:l("header")},[a.title,a.closeable&&o($,{name:a.closeIcon,class:[l("close"),N],onClick:r},null)])},f=()=>{if(t.cancel||a.cancelText)return[o("div",{class:l("gap")},null),o("button",{type:"button",class:l("cancel"),onClick:r},[t.cancel?t.cancel():a.cancelText])]},v=(s,p)=>s.loading?o(V,{class:l("loading-icon")},null):t.action?t.action({action:s,index:p}):[o("span",{class:l("name")},[s.name]),s.subname&&o("div",{class:l("subname")},[s.subname])],F=(s,p)=>{const{color:b,loading:n,callback:d,disabled:i,className:g}=s,O=()=>{i||n||(d&&d(s),a.closeOnClickAction&&u(!1),z(()=>c("select",s,p)))};return o("button",{type:"button",style:{color:b},class:[l("item",{loading:n,disabled:i}),g],onClick:O},[v(s,p)])},A=()=>{if(a.description||t.description){const s=t.description?t.description():a.description;return o("div",{class:l("description")},[s])}};return()=>o(L,q({class:l(),position:"bottom","onUpdate:show":u},T(a,Y)),{default:()=>{var s;return[m(),A(),o("div",{class:l("content")},[a.actions.map(F),(s=t.default)==null?void 0:s.call(t)]),f()]}})}}),h=_(Z),tt={class:"demo-action-sheet-content"},bt=P({__name:"index",setup(a){const t=y({"zh-CN":{option1:"\u9009\u9879\u4E00",option2:"\u9009\u9879\u4E8C",option3:"\u9009\u9879\u4E09",subname:"\u63CF\u8FF0\u4FE1\u606F",showCancel:"\u5C55\u793A\u53D6\u6D88\u6309\u94AE",buttonText:"\u5F39\u51FA\u83DC\u5355",customPanel:"\u81EA\u5B9A\u4E49\u9762\u677F",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F",optionStatus:"\u9009\u9879\u72B6\u6001",coloredOption:"\u7740\u8272\u9009\u9879",disabledOption:"\u7981\u7528\u9009\u9879",showDescription:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"},"en-US":{option1:"Option 1",option2:"Option 2",option3:"Option 3",subname:"Description",showCancel:"Show Cancel Button",buttonText:"Show ActionSheet",customPanel:"Custom Panel",description:"Description",optionStatus:"Option Status",coloredOption:"Colored Option",disabledOption:"Disabled Option",showDescription:"Show Description"}}),c=C(!1),u=C(!1),r=C(!1),m=C(!1),f=C(!1),v=x(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3")}]),F=x(()=>[{name:t("coloredOption"),color:"#ee0a24"},{name:t("disabledOption"),disabled:!0},{loading:!0}]),A=x(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3"),subname:t("subname")}]),s=b=>{c.value=!1,D(b.name)},p=()=>D(t("cancel"));return(b,n)=>{const d=W("demo-block");return j(),G(Q,null,[o(d,{card:"",title:e(t)("basicUsage")},{default:S(()=>[o(e(w),{"is-link":"",title:e(t)("basicUsage"),onClick:n[0]||(n[0]=i=>c.value=!0)},null,8,["title"]),o(e(w),{"is-link":"",title:e(t)("showCancel"),onClick:n[1]||(n[1]=i=>u.value=!0)},null,8,["title"]),o(e(w),{"is-link":"",title:e(t)("showDescription"),onClick:n[2]||(n[2]=i=>f.value=!0)},null,8,["title"])]),_:1},8,["title"]),o(d,{card:"",title:e(t)("optionStatus")},{default:S(()=>[o(e(w),{"is-link":"",title:e(t)("optionStatus"),onClick:n[3]||(n[3]=i=>m.value=!0)},null,8,["title"])]),_:1},8,["title"]),o(d,{card:"",title:e(t)("customPanel")},{default:S(()=>[o(e(w),{"is-link":"",title:e(t)("customPanel"),onClick:n[4]||(n[4]=i=>r.value=!0)},null,8,["title"])]),_:1},8,["title"]),o(e(h),{show:c.value,"onUpdate:show":n[5]||(n[5]=i=>c.value=i),actions:e(v),onSelect:s},null,8,["show","actions"]),o(e(h),{show:u.value,"onUpdate:show":n[6]||(n[6]=i=>u.value=i),actions:e(v),"close-on-click-action":"","cancel-text":e(t)("cancel"),onCancel:p},null,8,["show","actions","cancel-text"]),o(e(h),{show:f.value,"onUpdate:show":n[7]||(n[7]=i=>f.value=i),actions:e(A),"close-on-click-action":"","cancel-text":e(t)("cancel"),description:e(t)("description")},null,8,["show","actions","cancel-text","description"]),o(e(h),{show:m.value,"onUpdate:show":n[8]||(n[8]=i=>m.value=i),"close-on-click-action":"",actions:e(F),"cancel-text":e(t)("cancel")},null,8,["show","actions","cancel-text"]),o(e(h),{show:r.value,"onUpdate:show":n[9]||(n[9]=i=>r.value=i),title:e(t)("title")},{default:S(()=>[J("div",tt,M(e(t)("content")),1)]),_:1},8,["show","title"])],64)}}});export{bt as default};
