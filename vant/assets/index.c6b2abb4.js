import{C as v}from"./index.13f9e298.js";import{c as B,e as E,p as T,a as y}from"./use-translate.82d1675a.js";import{t as k,b as I,m as U,w as _}from"./with-install.1e1e6f3a.js";import{H as N}from"./constant.80c6de18.js";import{I as $}from"./index.1aafb839.js";import{p as H,a as K,P as z}from"./index.d942910e.js";import{L}from"./index.185a61a8.js";import{z as D,e as n,A as V,q,C,D as g,r as W,o as j,a as G,w as S,B as e,d as J,t as M,F as Q}from"./vue-libs.d483629c.js";import{T as x}from"./function-call.67aa4b4e.js";import"./use-route.e59fb0a1.js";import"./interceptor.693bb092.js";import"./use-expose.0b7af251.js";import"./use-touch.2a7e3be3.js";import"./use-lazy-render.13317edf.js";import"./on-popup-reopen.27c65306.js";import"./index.a7d685e6.js";import"./mount-component.55786c8c.js";const[R,l]=B("action-sheet"),X=E({},H,{title:String,round:k,actions:I(),closeIcon:U("cross"),closeable:k,cancelText:String,description:String,closeOnPopstate:k,closeOnClickAction:Boolean,safeAreaInsetBottom:k}),Y=[...K,"round","closeOnPopstate","safeAreaInsetBottom"];var Z=D({name:R,props:X,emits:["select","cancel","update:show"],setup(s,{slots:t,emit:c}){const u=a=>c("update:show",a),r=()=>{u(!1),c("cancel")},m=()=>{if(s.title)return n("div",{class:l("header")},[s.title,s.closeable&&n($,{name:s.closeIcon,class:[l("close"),N],onClick:r},null)])},f=()=>{if(t.cancel||s.cancelText)return[n("div",{class:l("gap")},null),n("button",{type:"button",class:l("cancel"),onClick:r},[t.cancel?t.cancel():s.cancelText])]},h=(a,p)=>a.loading?n(L,{class:l("loading-icon")},null):t.action?t.action({action:a,index:p}):[n("span",{class:l("name")},[a.name]),a.subname&&n("div",{class:l("subname")},[a.subname])],F=(a,p)=>{const{color:b,loading:o,callback:d,disabled:i,className:P}=a,O=()=>{i||o||(d&&d(a),s.closeOnClickAction&&u(!1),q(()=>c("select",a,p)))};return n("button",{type:"button",style:{color:b},class:[l("item",{loading:o,disabled:i}),P],onClick:O},[h(a,p)])},A=()=>{if(s.description||t.description){const a=t.description?t.description():s.description;return n("div",{class:l("description")},[a])}};return()=>n(z,V({class:l(),position:"bottom","onUpdate:show":u},T(s,Y)),{default:()=>{var a;return[m(),A(),n("div",{class:l("content")},[s.actions.map(F),(a=t.default)==null?void 0:a.call(t)]),f()]}})}});const w=_(Z);const tt={class:"demo-action-sheet-content"},ht=D({__name:"index",setup(s){const t=y({"zh-CN":{option1:"\u9009\u9879\u4E00",option2:"\u9009\u9879\u4E8C",option3:"\u9009\u9879\u4E09",subname:"\u63CF\u8FF0\u4FE1\u606F",showCancel:"\u5C55\u793A\u53D6\u6D88\u6309\u94AE",buttonText:"\u5F39\u51FA\u83DC\u5355",customPanel:"\u81EA\u5B9A\u4E49\u9762\u677F",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F",optionStatus:"\u9009\u9879\u72B6\u6001",coloredOption:"\u7740\u8272\u9009\u9879",disabledOption:"\u7981\u7528\u9009\u9879",showDescription:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"},"en-US":{option1:"Option 1",option2:"Option 2",option3:"Option 3",subname:"Description",showCancel:"Show Cancel Button",buttonText:"Show ActionSheet",customPanel:"Custom Panel",description:"Description",optionStatus:"Option Status",coloredOption:"Colored Option",disabledOption:"Disabled Option",showDescription:"Show Description"}}),c=C(!1),u=C(!1),r=C(!1),m=C(!1),f=C(!1),h=g(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3")}]),F=g(()=>[{name:t("coloredOption"),color:"#ee0a24"},{name:t("disabledOption"),disabled:!0},{loading:!0}]),A=g(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3"),subname:t("subname")}]),a=b=>{c.value=!1,x(b.name)},p=()=>x(t("cancel"));return(b,o)=>{const d=W("demo-block");return j(),G(Q,null,[n(d,{card:"",title:e(t)("basicUsage")},{default:S(()=>[n(e(v),{"is-link":"",title:e(t)("basicUsage"),onClick:o[0]||(o[0]=i=>c.value=!0)},null,8,["title"]),n(e(v),{"is-link":"",title:e(t)("showCancel"),onClick:o[1]||(o[1]=i=>u.value=!0)},null,8,["title"]),n(e(v),{"is-link":"",title:e(t)("showDescription"),onClick:o[2]||(o[2]=i=>f.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(d,{card:"",title:e(t)("optionStatus")},{default:S(()=>[n(e(v),{"is-link":"",title:e(t)("optionStatus"),onClick:o[3]||(o[3]=i=>m.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(d,{card:"",title:e(t)("customPanel")},{default:S(()=>[n(e(v),{"is-link":"",title:e(t)("customPanel"),onClick:o[4]||(o[4]=i=>r.value=!0)},null,8,["title"])]),_:1},8,["title"]),n(e(w),{show:c.value,"onUpdate:show":o[5]||(o[5]=i=>c.value=i),actions:e(h),onSelect:a},null,8,["show","actions"]),n(e(w),{show:u.value,"onUpdate:show":o[6]||(o[6]=i=>u.value=i),actions:e(h),"close-on-click-action":"","cancel-text":e(t)("cancel"),onCancel:p},null,8,["show","actions","cancel-text"]),n(e(w),{show:f.value,"onUpdate:show":o[7]||(o[7]=i=>f.value=i),actions:e(A),"close-on-click-action":"","cancel-text":e(t)("cancel"),description:e(t)("description")},null,8,["show","actions","cancel-text","description"]),n(e(w),{show:m.value,"onUpdate:show":o[8]||(o[8]=i=>m.value=i),"close-on-click-action":"",actions:e(F),"cancel-text":e(t)("cancel")},null,8,["show","actions","cancel-text"]),n(e(w),{show:r.value,"onUpdate:show":o[9]||(o[9]=i=>r.value=i),title:e(t)("title")},{default:S(()=>[J("div",tt,M(e(t)("content")),1)]),_:1},8,["show","title"])],64)}}});export{ht as default};
