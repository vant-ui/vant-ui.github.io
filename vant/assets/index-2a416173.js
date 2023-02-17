import{I}from"./index-0c730a10.js";import{B as N}from"./index-357b7ce9.js";import{u as P}from"./use-placeholder-d9beb5ec.js";import{A as y,u as L,e as t,r as w,o as A,a as U,w as u,C as e,g as h,t as k,d as F,F as z}from"./vue-libs-be453a05.js";import{c as D,a as E}from"./use-translate-769ce24f.js";import{m as C,c as $,t as j,w as q}from"./with-install-d98d04c2.js";import{V as G}from"./index-efd0dd7b.js";import{s as v}from"./function-call-4e0d0112.js";import"./index-f8a24fe6.js";import"./use-route-93f32ad6.js";import"./index-17f43b09.js";import"./constant-a81ffd37.js";import"./use-height-31baeeb6.js";import"./on-popup-reopen-79dd6347.js";import"./use-expose-aabc78b1.js";import"./Checker-88d5d845.js";import"./mount-component-b0262729.js";import"./index-7f20510e.js";import"./use-touch-fc112571.js";import"./use-lazy-render-e313d03a.js";import"./index-2de37b7b.js";import"./interceptor-0f3f24ae.js";const[H,a,J]=D("submit-bar"),K={tip:String,label:String,price:Number,tipIcon:String,loading:Boolean,currency:C("¥"),disabled:Boolean,textAlign:String,buttonText:String,buttonType:C("danger"),buttonColor:String,suffixLabel:String,placeholder:Boolean,decimalLength:$(2),safeAreaInsetBottom:j},M=y({name:H,props:K,emits:["submit"],setup(o,{emit:i,slots:n}){const c=L(),b=P(c,a),x=()=>{const{price:r,label:l,currency:p,textAlign:T,suffixLabel:_,decimalLength:B}=o;if(typeof r=="number"){const S=(r/100).toFixed(+B).split("."),V=B?`.${S[1]}`:"";return t("div",{class:a("text"),style:{textAlign:T}},[t("span",null,[l||J("label")]),t("span",{class:a("price")},[p,t("span",{class:a("price-integer")},[S[0]]),V]),_&&t("span",{class:a("suffix-label")},[_])])}},m=()=>{var p;const{tip:r,tipIcon:l}=o;if(n.tip||r)return t("div",{class:a("tip")},[l&&t(I,{class:a("tip-icon"),name:l},null),r&&t("span",{class:a("tip-text")},[r]),(p=n.tip)==null?void 0:p.call(n)])},s=()=>i("submit"),f=()=>n.button?n.button():t(N,{round:!0,type:o.buttonType,text:o.buttonText,class:a("button",o.buttonType),color:o.buttonColor,loading:o.loading,disabled:o.disabled,onClick:s},null),g=()=>{var r,l;return t("div",{ref:c,class:[a(),{"van-safe-area-bottom":o.safeAreaInsetBottom}]},[(r=n.top)==null?void 0:r.call(n),m(),t("div",{class:a("bar")},[(l=n.default)==null?void 0:l.call(n),x(),f()])])};return()=>o.placeholder?b(g):g()}}),O=q(M),d=O,kt=y({__name:"index",setup(o){const i=E({"zh-CN":{tip1:"你的收货地址不支持配送",tip2:"你的收货地址不支持配送, ",tip3:"修改地址",check:"全选",submit:"提交订单",clickLink:"修改地址",clickButton:"点击按钮"},"en-US":{tip1:"Some tips",tip2:"Some tips, ",tip3:"Link",check:"Label",submit:"Submit",clickLink:"Click Link",clickButton:"Submit"}}),n=L(!0),c=()=>v(i("clickButton")),b=()=>v(i("clickLink"));return(x,m)=>{const s=w("demo-block");return A(),U(z,null,[t(s,{title:e(i)("basicUsage")},{default:u(()=>[t(e(d),{price:3050,"button-text":e(i)("submit"),onSubmit:c},null,8,["button-text"])]),_:1},8,["title"]),t(s,{title:e(i)("disabled")},{default:u(()=>[t(e(d),{disabled:"",price:3050,"button-text":e(i)("submit"),tip:e(i)("tip1"),"tip-icon":"info-o",onSubmit:c},null,8,["button-text","tip"])]),_:1},8,["title"]),t(s,{title:e(i)("loadingStatus")},{default:u(()=>[t(e(d),{loading:"",price:3050,"button-text":e(i)("submit"),onSubmit:c},null,8,["button-text"])]),_:1},8,["title"]),t(s,{title:e(i)("advancedUsage")},{default:u(()=>[t(e(d),{price:3050,"button-text":e(i)("submit"),onSubmit:c},{tip:u(()=>[h(k(e(i)("tip2"))+" ",1),F("span",{class:"edit-address",onClick:b},k(e(i)("tip3")),1)]),default:u(()=>[t(e(G),{modelValue:n.value,"onUpdate:modelValue":m[0]||(m[0]=f=>n.value=f)},{default:u(()=>[h(k(e(i)("check")),1)]),_:1},8,["modelValue"])]),_:1},8,["button-text"])]),_:1},8,["title"])],64)}}});export{kt as default};