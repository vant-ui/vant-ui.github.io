import{c as N,i as U,N as j,S as q,r as G,a as W}from"./use-translate.c56bc05e.js";import{t as D,b as H,m as S,c as X,w as R,d as ee,a as I}from"./with-install.2d06a5b3.js";import{C as oe}from"./index.5e3bace1.js";import{A as _,e as o,D as m,x as g,y as F,N as ne,j as te,v as ae,q as se,r as ue,o as ce,c as ie,w as z,C}from"./vue-libs.a3cd7f61.js";import{V as le}from"./index.fd46e6ae.js";import{u as re}from"./use-refs.a0fe18f0.js";import{T as de,a as O}from"./index.6ad72fe4.js";import{E as me}from"./index.8a92b917.js";import{F as pe}from"./index.3a3bc210.js";import{B as Y}from"./index.e0cc520d.js";import{C as he}from"./index.1a0d957d.js";import{s as ge}from"./index.650d8a76.js";import"./use-route.7a9317f3.js";import"./index.e7e14384.js";import"./constant.80c6de18.js";import"./interceptor.7caa5e9a.js";import"./use-expose.2dad0d8e.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.a0b9e7c8.js";import"./use-id.5b8801cd.js";import"./index.3ccbda83.js";import"./index.0d3f38fa.js";import"./index.1fe53b6c.js";import"./Checker.4b68c47b.js";import"./mount-component.2ea251e1.js";const[ve,Z,M]=N("coupon-cell"),Ce={title:String,border:D,editable:D,coupons:H(),currency:S("\xA5"),chosenCoupon:X(-1)};function be({coupons:e,chosenCoupon:t,currency:i}){const s=e[+t];if(s){let n=0;return U(s.value)?{value:n}=s:U(s.denominations)&&(n=s.denominations),`-${i} ${(n/100).toFixed(2)}`}return e.length===0?M("noCoupon"):M("count",e.length)}const fe=_({name:ve,props:Ce,setup(e){return()=>{const t=e.coupons[+e.chosenCoupon];return o(oe,{class:Z(),value:be(e),title:e.title||M("title"),border:e.border,isLink:e.editable,valueClass:Z("value",{selected:t})},null)}}}),xe=R(fe),ye=xe;function J(e){const t=new Date(e*1e3);return`${t.getFullYear()}.${j(t.getMonth()+1)}.${j(t.getDate())}`}const we=e=>(e/10).toFixed(e%10===0?0:1),K=e=>(e/100).toFixed(e%100===0?0:e%10===0?1:2),[Be,r,V]=N("coupon"),De=_({name:Be,props:{chosen:Boolean,coupon:ee(Object),disabled:Boolean,currency:S("\xA5")},setup(e){const t=m(()=>{const{startAt:n,endAt:u}=e.coupon;return`${J(n)} - ${J(u)}`}),i=m(()=>{const{coupon:n,currency:u}=e;if(n.valueDesc)return[n.valueDesc,o("span",null,[n.unitDesc||""])];if(n.denominations){const c=K(n.denominations);return[o("span",null,[u]),` ${c}`]}return n.discount?V("discount",we(n.discount)):""}),s=m(()=>{const n=K(e.coupon.originCondition||0);return n==="0"?V("unlimited"):V("condition",n)});return()=>{const{chosen:n,coupon:u,disabled:c}=e,h=c&&u.reason||u.description;return o("div",{class:r({disabled:c})},[o("div",{class:r("content")},[o("div",{class:r("head")},[o("h2",{class:r("amount")},[i.value]),o("p",{class:r("condition")},[u.condition||s.value])]),o("div",{class:r("body")},[o("p",{class:r("name")},[u.name]),o("p",{class:r("valid")},[t.value]),!c&&o(he,{class:r("corner"),modelValue:n},null)])]),h&&o("p",{class:r("description")},[h])])}}}),Q=R(De),[Te,d,x]=N("coupon-list"),ke={code:S(""),coupons:H(),currency:S("\xA5"),showCount:D,emptyImage:String,chosenCoupon:I(-1),enabledTitle:String,disabledTitle:String,disabledCoupons:H(),showExchangeBar:D,showCloseButton:D,closeButtonText:String,inputPlaceholder:String,exchangeMinLength:I(1),exchangeButtonText:String,displayedCouponIndex:I(-1),exchangeButtonLoading:Boolean,exchangeButtonDisabled:Boolean},Ee=_({name:Te,props:ke,emits:["change","exchange","update:code"],setup(e,{emit:t,slots:i}){const[s,n]=re(),u=g(),c=g(),h=g(0),y=g(0),l=g(e.code),T=m(()=>!e.exchangeButtonLoading&&(e.exchangeButtonDisabled||!l.value||l.value.length<e.exchangeMinLength)),k=()=>{const p=G(u).height,f=G(c).height+44;y.value=(p>f?p:q.value)-f},L=()=>{t("exchange",l.value),e.code||(l.value="")},E=a=>{se(()=>{var p;return(p=s.value[a])==null?void 0:p.scrollIntoView()})},v=()=>o(me,{image:e.emptyImage},{default:()=>[o("p",{class:d("empty-tip")},[x("noCoupon")])]}),b=()=>{if(e.showExchangeBar)return o("div",{ref:c,class:d("exchange-bar")},[o(pe,{modelValue:l.value,"onUpdate:modelValue":a=>l.value=a,clearable:!0,border:!1,class:d("field"),placeholder:e.inputPlaceholder||x("placeholder"),maxlength:"20"},null),o(Y,{plain:!0,type:"primary",class:d("exchange"),text:e.exchangeButtonText||x("exchange"),loading:e.exchangeButtonLoading,disabled:T.value,onClick:L},null)])},P=()=>{const{coupons:a}=e,p=e.showCount?` (${a.length})`:"",f=(e.enabledTitle||x("enable"))+p;return o(O,{title:f},{default:()=>{var w;return[o("div",{class:d("list",{"with-bottom":e.showCloseButton}),style:{height:`${y.value}px`}},[a.map((B,A)=>o(Q,{key:B.id,ref:n(A),coupon:B,chosen:A===e.chosenCoupon,currency:e.currency,onClick:()=>t("change",A)},null)),!a.length&&v(),(w=i["list-footer"])==null?void 0:w.call(i)])]}})},$=()=>{const{disabledCoupons:a}=e,p=e.showCount?` (${a.length})`:"",f=(e.disabledTitle||x("disabled"))+p;return o(O,{title:f},{default:()=>{var w;return[o("div",{class:d("list",{"with-bottom":e.showCloseButton}),style:{height:`${y.value}px`}},[a.map(B=>o(Q,{disabled:!0,key:B.id,coupon:B,currency:e.currency},null)),!a.length&&v(),(w=i["disabled-list-footer"])==null?void 0:w.call(i)])]}})};return F(()=>e.code,a=>{l.value=a}),F(q,k),F(l,a=>t("update:code",a)),F(()=>e.displayedCouponIndex,E),ne(()=>{k(),E(e.displayedCouponIndex)}),()=>o("div",{ref:u,class:d()},[b(),o(de,{active:h.value,"onUpdate:active":a=>h.value=a,class:d("tab")},{default:()=>[P(),$()]}),o("div",{class:d("bottom")},[te(o(Y,{round:!0,block:!0,type:"primary",class:d("close"),text:e.closeButtonText||x("close"),onClick:()=>t("change",-1)},null),[[ae,e.showCloseButton]])])])}}),$e=R(Ee),Fe=$e,to=_({__name:"index",setup(e){const t=W({"zh-CN":{coupon:{name:"\u4F18\u60E0\u5238\u540D\u79F0",reason:"\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u539F\u56E0",description:"\u63CF\u8FF0\u4FE1\u606F"},exchange:"\u5151\u6362\u6210\u529F"},"en-US":{coupon:{name:"Coupon name",reason:"Coupon unavailable reason",description:"Description"},exchange:"Success"}}),i=(v=999999)=>String(Math.floor(Math.random()*v)+1),s=g(!1),n=g(-1),u=g([]),c=m(()=>({id:1,condition:`\u65E0\u95E8\u69DB
\u6700\u591A\u4F18\u60E012\u5143`,reason:"",value:150,name:t("coupon.name"),description:t("coupon.description"),startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"\u5143"})),h=m(()=>({...c.value,id:2,value:12,valueDesc:"8.8",unitDesc:"\u6298"})),y=m(()=>({...c.value,id:3,reason:t("coupon.reason")})),l=m(()=>({...h.value,valueDesc:"1",unitDesc:"\u6298",id:4,reason:t("coupon.reason")})),T=m(()=>[c.value,h.value,...u.value]),k=m(()=>[y.value,l.value]),L=v=>{s.value=!1,n.value=v},E=()=>{ge(t("exchange")),u.value.push({...c.value,id:i()})};return(v,b)=>{const P=ue("demo-block");return ce(),ie(P,{title:C(t)("basicUsage")},{default:z(()=>[o(C(ye),{coupons:C(T),"chosen-coupon":n.value,onClick:b[0]||(b[0]=$=>s.value=!0)},null,8,["coupons","chosen-coupon"]),o(C(le),{show:s.value,"onUpdate:show":b[1]||(b[1]=$=>s.value=$),round:"",position:"bottom",style:{height:"90%","padding-top":"4px"}},{default:z(()=>[o(C(Fe),{coupons:C(T),"chosen-coupon":n.value,"disabled-coupons":C(k),onChange:L,onExchange:E},null,8,["coupons","chosen-coupon","disabled-coupons"])]),_:1},8,["show"])]),_:1},8,["title"])}}});export{to as default};
