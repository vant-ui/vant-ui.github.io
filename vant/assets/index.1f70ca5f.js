import{c as V,i as U,V as j,Q as q,r as G,a as W}from"./use-translate.7b7055b3.js";import{t as D,b as M,m as S,c as X,w as N,d as ee,a as I}from"./with-install.a0877b0b.js";import{C as oe}from"./index.b878185c.js";import{A as _,e as o,D as m,u as g,x as F,M as ne,j as te,v as ae,q as se,r as ue,o as ce,c as ie,w as z,C}from"./vue-libs.d5ee895a.js";import{P as le}from"./index.e2854e14.js";import{u as re}from"./use-refs.9408eccb.js";import{T as de,a as O}from"./index.b6891a8c.js";import{E as me}from"./index.dc92c277.js";import{F as pe}from"./index.a42c8d99.js";import{B as Q}from"./index.516742fc.js";import{C as he}from"./index.b955588d.js";import{s as ge}from"./index.81c7a5b9.js";import"./use-route.55b36618.js";import"./index.bc61928d.js";import"./index.16bdfc10.js";import"./constant.e12a51b9.js";import"./interceptor.adacec7f.js";import"./use-expose.77504c28.js";import"./use-touch.e8c4f7e8.js";import"./use-lazy-render.8319bb4a.js";import"./on-popup-reopen.5b484164.js";import"./index.03cbc9c0.js";import"./use-id.283fca96.js";import"./index.25303511.js";import"./index.6c1120f3.js";import"./index.d7a56972.js";import"./Checker.9f33de2f.js";import"./mount-component.01a10567.js";const[ve,Y,R]=V("coupon-cell"),Ce={title:String,border:D,editable:D,coupons:M(),currency:S("\xA5"),chosenCoupon:X(-1)};function be({coupons:e,chosenCoupon:t,currency:i}){const s=e[+t];if(s){let n=0;return U(s.value)?{value:n}=s:U(s.denominations)&&(n=s.denominations),`-${i} ${(n/100).toFixed(2)}`}return e.length===0?R("noCoupon"):R("count",e.length)}const fe=_({name:ve,props:Ce,setup(e){return()=>{const t=e.coupons[+e.chosenCoupon];return o(oe,{class:Y(),value:be(e),title:e.title||R("title"),border:e.border,isLink:e.editable,valueClass:Y("value",{selected:t})},null)}}}),xe=N(fe);function Z(e){const t=new Date(e*1e3);return`${t.getFullYear()}.${j(t.getMonth()+1)}.${j(t.getDate())}`}const we=e=>(e/10).toFixed(e%10===0?0:1),J=e=>(e/100).toFixed(e%100===0?0:e%10===0?1:2),[ye,r,H]=V("coupon"),Be=_({name:ye,props:{chosen:Boolean,coupon:ee(Object),disabled:Boolean,currency:S("\xA5")},setup(e){const t=m(()=>{const{startAt:n,endAt:u}=e.coupon;return`${Z(n)} - ${Z(u)}`}),i=m(()=>{const{coupon:n,currency:u}=e;if(n.valueDesc)return[n.valueDesc,o("span",null,[n.unitDesc||""])];if(n.denominations){const c=J(n.denominations);return[o("span",null,[u]),` ${c}`]}return n.discount?H("discount",we(n.discount)):""}),s=m(()=>{const n=J(e.coupon.originCondition||0);return n==="0"?H("unlimited"):H("condition",n)});return()=>{const{chosen:n,coupon:u,disabled:c}=e,h=c&&u.reason||u.description;return o("div",{class:r({disabled:c})},[o("div",{class:r("content")},[o("div",{class:r("head")},[o("h2",{class:r("amount")},[i.value]),o("p",{class:r("condition")},[u.condition||s.value])]),o("div",{class:r("body")},[o("p",{class:r("name")},[u.name]),o("p",{class:r("valid")},[t.value]),!c&&o(he,{class:r("corner"),modelValue:n},null)])]),h&&o("p",{class:r("description")},[h])])}}}),K=N(Be),[De,d,x]=V("coupon-list"),Te={code:S(""),coupons:M(),currency:S("\xA5"),showCount:D,emptyImage:String,chosenCoupon:I(-1),enabledTitle:String,disabledTitle:String,disabledCoupons:M(),showExchangeBar:D,showCloseButton:D,closeButtonText:String,inputPlaceholder:String,exchangeMinLength:I(1),exchangeButtonText:String,displayedCouponIndex:I(-1),exchangeButtonLoading:Boolean,exchangeButtonDisabled:Boolean},ke=_({name:De,props:Te,emits:["change","exchange","update:code"],setup(e,{emit:t,slots:i}){const[s,n]=re(),u=g(),c=g(),h=g(0),w=g(0),l=g(e.code),T=m(()=>!e.exchangeButtonLoading&&(e.exchangeButtonDisabled||!l.value||l.value.length<e.exchangeMinLength)),k=()=>{const p=G(u).height,f=G(c).height+44;w.value=(p>f?p:q.value)-f},P=()=>{t("exchange",l.value),e.code||(l.value="")},E=a=>{se(()=>{var p;return(p=s.value[a])==null?void 0:p.scrollIntoView()})},v=()=>o(me,{image:e.emptyImage},{default:()=>[o("p",{class:d("empty-tip")},[x("noCoupon")])]}),b=()=>{if(e.showExchangeBar)return o("div",{ref:c,class:d("exchange-bar")},[o(pe,{modelValue:l.value,"onUpdate:modelValue":a=>l.value=a,clearable:!0,border:!1,class:d("field"),placeholder:e.inputPlaceholder||x("placeholder"),maxlength:"20"},null),o(Q,{plain:!0,type:"primary",class:d("exchange"),text:e.exchangeButtonText||x("exchange"),loading:e.exchangeButtonLoading,disabled:T.value,onClick:P},null)])},A=()=>{const{coupons:a}=e,p=e.showCount?` (${a.length})`:"",f=(e.enabledTitle||x("enable"))+p;return o(O,{title:f},{default:()=>{var y;return[o("div",{class:d("list",{"with-bottom":e.showCloseButton}),style:{height:`${w.value}px`}},[a.map((B,L)=>o(K,{key:B.id,ref:n(L),coupon:B,chosen:L===e.chosenCoupon,currency:e.currency,onClick:()=>t("change",L)},null)),!a.length&&v(),(y=i["list-footer"])==null?void 0:y.call(i)])]}})},$=()=>{const{disabledCoupons:a}=e,p=e.showCount?` (${a.length})`:"",f=(e.disabledTitle||x("disabled"))+p;return o(O,{title:f},{default:()=>{var y;return[o("div",{class:d("list",{"with-bottom":e.showCloseButton}),style:{height:`${w.value}px`}},[a.map(B=>o(K,{disabled:!0,key:B.id,coupon:B,currency:e.currency},null)),!a.length&&v(),(y=i["disabled-list-footer"])==null?void 0:y.call(i)])]}})};return F(()=>e.code,a=>{l.value=a}),F(q,k),F(l,a=>t("update:code",a)),F(()=>e.displayedCouponIndex,E),ne(()=>{k(),E(e.displayedCouponIndex)}),()=>o("div",{ref:u,class:d()},[b(),o(de,{active:h.value,"onUpdate:active":a=>h.value=a,class:d("tab")},{default:()=>[A(),$()]}),o("div",{class:d("bottom")},[te(o(Q,{round:!0,block:!0,type:"primary",class:d("close"),text:e.closeButtonText||x("close"),onClick:()=>t("change",-1)},null),[[ae,e.showCloseButton]])])])}}),Ee=N(ke),no=_({__name:"index",setup(e){const t=W({"zh-CN":{coupon:{name:"\u4F18\u60E0\u5238\u540D\u79F0",reason:"\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u539F\u56E0",description:"\u63CF\u8FF0\u4FE1\u606F"},exchange:"\u5151\u6362\u6210\u529F"},"en-US":{coupon:{name:"Coupon name",reason:"Coupon unavailable reason",description:"Description"},exchange:"Success"}}),i=(v=999999)=>String(Math.floor(Math.random()*v)+1),s=g(!1),n=g(-1),u=g([]),c=m(()=>({id:1,condition:`\u65E0\u95E8\u69DB
\u6700\u591A\u4F18\u60E012\u5143`,reason:"",value:150,name:t("coupon.name"),description:t("coupon.description"),startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"\u5143"})),h=m(()=>({...c.value,id:2,value:12,valueDesc:"8.8",unitDesc:"\u6298"})),w=m(()=>({...c.value,id:3,reason:t("coupon.reason")})),l=m(()=>({...h.value,valueDesc:"1",unitDesc:"\u6298",id:4,reason:t("coupon.reason")})),T=m(()=>[c.value,h.value,...u.value]),k=m(()=>[w.value,l.value]),P=v=>{s.value=!1,n.value=v},E=()=>{ge(t("exchange")),u.value.push({...c.value,id:i()})};return(v,b)=>{const A=ue("demo-block");return ce(),ie(A,{title:C(t)("basicUsage")},{default:z(()=>[o(C(xe),{coupons:C(T),"chosen-coupon":n.value,onClick:b[0]||(b[0]=$=>s.value=!0)},null,8,["coupons","chosen-coupon"]),o(C(le),{show:s.value,"onUpdate:show":b[1]||(b[1]=$=>s.value=$),round:"",position:"bottom",style:{height:"90%","padding-top":"4px"}},{default:z(()=>[o(C(Ee),{coupons:C(T),"chosen-coupon":n.value,"disabled-coupons":C(k),onChange:P,onExchange:E},null,8,["coupons","chosen-coupon","disabled-coupons"])]),_:1},8,["show"])]),_:1},8,["title"])}}});export{no as default};
