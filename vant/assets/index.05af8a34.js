var ne=Object.defineProperty,te=Object.defineProperties;var ae=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var q=(e,o,a)=>o in e?ne(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,D=(e,o)=>{for(var a in o||(o={}))se.call(o,a)&&q(e,a,o[a]);if(j)for(var a of j(o))ue.call(o,a)&&q(e,a,o[a]);return e},T=(e,o)=>te(e,ae(o));import{c as U,i as z,V as O,P as Y,G as Z,a as ce}from"./use-translate.8b8ccbb1.js";import{t as k,b as V,m as _,c as le,w as G,d as ie,a as M}from"./with-install.994557f3.js";import{C as re}from"./index.ff2051f9.js";import{z as L,e as n,C as m,D as g,x as S,N as de,j as me,v as pe,q as he,r as ge,o as ve,c as Ce,w as J,B as C}from"./vue-libs.bf80eadf.js";import{P as be}from"./index.169d2299.js";import{u as fe}from"./use-refs.1bd4ff6f.js";import{T as xe,a as K}from"./index.c9e2b342.js";import{E as Be}from"./index.a3625012.js";import{F as we}from"./index.8aed4f4e.js";import{B as Q}from"./index.7164eac0.js";import{C as ye}from"./index.0ec51f0d.js";import{T as De}from"./function-call.7212d0ef.js";import"./use-route.9fd68ea8.js";import"./index.bbd0c688.js";import"./constant.80c6de18.js";import"./interceptor.66265d5f.js";import"./use-expose.6f045672.js";import"./use-touch.b6ff7b52.js";import"./use-lazy-render.d79b7d1e.js";import"./on-popup-reopen.e08ee506.js";import"./index.199a6ce6.js";import"./use-id.139c5032.js";import"./index.f6791466.js";import"./index.359b2f5f.js";import"./index.4ba0b313.js";import"./Checker.b2cb483f.js";import"./mount-component.af79618c.js";const[Te,W,N]=U("coupon-cell"),ke={title:String,border:k,editable:k,coupons:V(),currency:_("\xA5"),chosenCoupon:le(-1)};function Ee({coupons:e,chosenCoupon:o,currency:a}){const u=e[+o];if(u){let t=0;return z(u.value)?{value:t}=u:z(u.denominations)&&(t=u.denominations),`-${a} ${(t/100).toFixed(2)}`}return e.length===0?N("noCoupon"):N("count",e.length)}var $e=L({name:Te,props:ke,setup(e){return()=>{const o=e.coupons[+e.chosenCoupon];return n(re,{class:W(),value:Ee(e),title:e.title||N("title"),border:e.border,isLink:e.editable,valueClass:W("value",{selected:o})},null)}}});const Fe=G($e);function X(e){const o=new Date(e*1e3);return`${o.getFullYear()}.${O(o.getMonth()+1)}.${O(o.getDate())}`}const Pe=e=>(e/10).toFixed(e%10===0?0:1),ee=e=>(e/100).toFixed(e%100===0?0:e%10===0?1:2),[Se,r,R]=U("coupon");var _e=L({name:Se,props:{chosen:Boolean,coupon:ie(Object),disabled:Boolean,currency:_("\xA5")},setup(e){const o=m(()=>{const{startAt:t,endAt:c}=e.coupon;return`${X(t)} - ${X(c)}`}),a=m(()=>{const{coupon:t,currency:c}=e;if(t.valueDesc)return[t.valueDesc,n("span",null,[t.unitDesc||""])];if(t.denominations){const l=ee(t.denominations);return[n("span",null,[c]),` ${l}`]}return t.discount?R("discount",Pe(t.discount)):""}),u=m(()=>{const t=ee(e.coupon.originCondition||0);return t==="0"?R("unlimited"):R("condition",t)});return()=>{const{chosen:t,coupon:c,disabled:l}=e,h=l&&c.reason||c.description;return n("div",{class:r({disabled:l})},[n("div",{class:r("content")},[n("div",{class:r("head")},[n("h2",{class:r("amount")},[a.value]),n("p",{class:r("condition")},[c.condition||u.value])]),n("div",{class:r("body")},[n("p",{class:r("name")},[c.name]),n("p",{class:r("valid")},[o.value]),!l&&n(ye,{class:r("corner"),modelValue:t},null)])]),h&&n("p",{class:r("description")},[h])])}}});const oe=G(_e),[Le,d,x]=U("coupon-list"),Ae={code:_(""),coupons:V(),currency:_("\xA5"),showCount:k,emptyImage:String,chosenCoupon:M(-1),enabledTitle:String,disabledTitle:String,disabledCoupons:V(),showExchangeBar:k,showCloseButton:k,closeButtonText:String,inputPlaceholder:String,exchangeMinLength:M(1),exchangeButtonText:String,displayedCouponIndex:M(-1),exchangeButtonLoading:Boolean,exchangeButtonDisabled:Boolean};var Ie=L({name:Le,props:Ae,emits:["change","exchange","update:code"],setup(e,{emit:o,slots:a}){const[u,t]=fe(),c=g(),l=g(),h=g(0),B=g(0),i=g(e.code),E=m(()=>!e.exchangeButtonLoading&&(e.exchangeButtonDisabled||!i.value||i.value.length<e.exchangeMinLength)),$=()=>{const p=Z(c).height,f=Z(l).height+44;B.value=(p>f?p:Y.value)-f},A=()=>{o("exchange",i.value),e.code||(i.value="")},F=s=>{he(()=>{var p;return(p=u.value[s])==null?void 0:p.scrollIntoView()})},v=()=>n(Be,{image:e.emptyImage},{default:()=>[n("p",{class:d("empty-tip")},[x("noCoupon")])]}),b=()=>{if(e.showExchangeBar)return n("div",{ref:l,class:d("exchange-bar")},[n(we,{modelValue:i.value,"onUpdate:modelValue":s=>i.value=s,clearable:!0,border:!1,class:d("field"),placeholder:e.inputPlaceholder||x("placeholder"),maxlength:"20"},null),n(Q,{plain:!0,type:"danger",class:d("exchange"),text:e.exchangeButtonText||x("exchange"),loading:e.exchangeButtonLoading,disabled:E.value,onClick:A},null)])},I=()=>{const{coupons:s}=e,p=e.showCount?` (${s.length})`:"",f=(e.enabledTitle||x("enable"))+p;return n(K,{title:f},{default:()=>{var w;return[n("div",{class:d("list",{"with-bottom":e.showCloseButton}),style:{height:`${B.value}px`}},[s.map((y,H)=>n(oe,{key:y.id,ref:t(H),coupon:y,chosen:H===e.chosenCoupon,currency:e.currency,onClick:()=>o("change",H)},null)),!s.length&&v(),(w=a["list-footer"])==null?void 0:w.call(a)])]}})},P=()=>{const{disabledCoupons:s}=e,p=e.showCount?` (${s.length})`:"",f=(e.disabledTitle||x("disabled"))+p;return n(K,{title:f},{default:()=>{var w;return[n("div",{class:d("list",{"with-bottom":e.showCloseButton}),style:{height:`${B.value}px`}},[s.map(y=>n(oe,{disabled:!0,key:y.id,coupon:y,currency:e.currency},null)),!s.length&&v(),(w=a["disabled-list-footer"])==null?void 0:w.call(a)])]}})};return S(()=>e.code,s=>{i.value=s}),S(Y,$),S(i,s=>o("update:code",s)),S(()=>e.displayedCouponIndex,F),de(()=>{$(),F(e.displayedCouponIndex)}),()=>n("div",{ref:c,class:d()},[b(),n(xe,{active:h.value,"onUpdate:active":s=>h.value=s,class:d("tab")},{default:()=>[I(),P()]}),n("div",{class:d("bottom")},[me(n(Q,{round:!0,block:!0,type:"danger",class:d("close"),text:e.closeButtonText||x("close"),onClick:()=>o("change",-1)},null),[[pe,e.showCloseButton]])])])}});const He=G(Ie),mo=L({setup(e){const o=ce({"zh-CN":{coupon:{name:"\u4F18\u60E0\u5238\u540D\u79F0",reason:"\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u539F\u56E0",description:"\u63CF\u8FF0\u4FE1\u606F"},exchange:"\u5151\u6362\u6210\u529F"},"en-US":{coupon:{name:"Coupon name",reason:"Coupon unavailable reason",description:"Description"},exchange:"Success"}}),a=(v=999999)=>String(Math.floor(Math.random()*v)+1),u=g(!1),t=g(-1),c=g([]),l=m(()=>({id:1,condition:`\u65E0\u95E8\u69DB
\u6700\u591A\u4F18\u60E012\u5143`,reason:"",value:150,name:o("coupon.name"),description:o("coupon.description"),startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"\u5143"})),h=m(()=>T(D({},l.value),{id:2,value:12,valueDesc:"8.8",unitDesc:"\u6298"})),B=m(()=>T(D({},l.value),{id:3,reason:o("coupon.reason")})),i=m(()=>T(D({},h.value),{valueDesc:"1",unitDesc:"\u6298",id:4,reason:o("coupon.reason")})),E=m(()=>[l.value,h.value,...c.value]),$=m(()=>[B.value,i.value]),A=v=>{u.value=!1,t.value=v},F=()=>{De(o("exchange")),c.value.push(T(D({},l.value),{id:a()}))};return(v,b)=>{const I=ge("demo-block");return ve(),Ce(I,{title:C(o)("basicUsage")},{default:J(()=>[n(C(Fe),{coupons:C(E),"chosen-coupon":t.value,onClick:b[0]||(b[0]=P=>u.value=!0)},null,8,["coupons","chosen-coupon"]),n(C(be),{show:u.value,"onUpdate:show":b[1]||(b[1]=P=>u.value=P),round:"",position:"bottom",style:{height:"90%","padding-top":"4px"}},{default:J(()=>[n(C(He),{coupons:C(E),"chosen-coupon":t.value,"disabled-coupons":C($),onChange:A,onExchange:F},null,8,["coupons","chosen-coupon","disabled-coupons"])]),_:1},8,["show"])]),_:1},8,["title"])}}});export{mo as default};
