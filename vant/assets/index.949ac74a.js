import{c as R,i as U,W as j,Q as q,r as z,a as K}from"./use-translate.fec5be1c.js";import{t as D,b as H,m as S,c as X,w as N,d as ee,a as I}from"./with-install.6c9f4f06.js";import{C as oe}from"./index.bb5cccb6.js";import{z as _,e as o,D as m,C as g,x as F,N as ne,j as te,v as ae,q as se,r as ue,o as ce,c as le,w as G,B as C}from"./vue-libs.7ad34eae.js";import{V as ie}from"./index.e65191a7.js";import{u as re}from"./use-refs.2f0555bc.js";import{T as de,a as O}from"./index.c9ab4a5f.js";import{E as me}from"./index.93074b87.js";import{F as pe}from"./index.58a00872.js";import{B as Q}from"./index.414acf3c.js";import{C as he}from"./index.9fd36f36.js";import{T as ge}from"./function-call.217b1291.js";import"./use-route.13c8c682.js";import"./index.a07b08cc.js";import"./constant.80c6de18.js";import"./interceptor.2bcb0d63.js";import"./use-expose.9edd25e2.js";import"./use-touch.79e2b006.js";import"./use-lazy-render.96f053d1.js";import"./on-popup-reopen.c53e1654.js";import"./index.7781bda0.js";import"./use-id.fe691ba6.js";import"./index.994440cf.js";import"./index.5bb6c6c8.js";import"./index.98a2059e.js";import"./Checker.92c3e531.js";import"./mount-component.5701bbc6.js";const[ve,W,M]=R("coupon-cell"),Ce={title:String,border:D,editable:D,coupons:H(),currency:S("\xA5"),chosenCoupon:X(-1)};function be({coupons:e,chosenCoupon:t,currency:l}){const s=e[+t];if(s){let n=0;return U(s.value)?{value:n}=s:U(s.denominations)&&(n=s.denominations),`-${l} ${(n/100).toFixed(2)}`}return e.length===0?M("noCoupon"):M("count",e.length)}const fe=_({name:ve,props:Ce,setup(e){return()=>{const t=e.coupons[+e.chosenCoupon];return o(oe,{class:W(),value:be(e),title:e.title||M("title"),border:e.border,isLink:e.editable,valueClass:W("value",{selected:t})},null)}}}),xe=N(fe),Be=xe;function Y(e){const t=new Date(e*1e3);return`${t.getFullYear()}.${j(t.getMonth()+1)}.${j(t.getDate())}`}const we=e=>(e/10).toFixed(e%10===0?0:1),Z=e=>(e/100).toFixed(e%100===0?0:e%10===0?1:2),[ye,r,V]=R("coupon"),De=_({name:ye,props:{chosen:Boolean,coupon:ee(Object),disabled:Boolean,currency:S("\xA5")},setup(e){const t=m(()=>{const{startAt:n,endAt:u}=e.coupon;return`${Y(n)} - ${Y(u)}`}),l=m(()=>{const{coupon:n,currency:u}=e;if(n.valueDesc)return[n.valueDesc,o("span",null,[n.unitDesc||""])];if(n.denominations){const c=Z(n.denominations);return[o("span",null,[u]),` ${c}`]}return n.discount?V("discount",we(n.discount)):""}),s=m(()=>{const n=Z(e.coupon.originCondition||0);return n==="0"?V("unlimited"):V("condition",n)});return()=>{const{chosen:n,coupon:u,disabled:c}=e,h=c&&u.reason||u.description;return o("div",{class:r({disabled:c})},[o("div",{class:r("content")},[o("div",{class:r("head")},[o("h2",{class:r("amount")},[l.value]),o("p",{class:r("condition")},[u.condition||s.value])]),o("div",{class:r("body")},[o("p",{class:r("name")},[u.name]),o("p",{class:r("valid")},[t.value]),!c&&o(he,{class:r("corner"),modelValue:n},null)])]),h&&o("p",{class:r("description")},[h])])}}}),J=N(De),[Te,d,x]=R("coupon-list"),ke={code:S(""),coupons:H(),currency:S("\xA5"),showCount:D,emptyImage:String,chosenCoupon:I(-1),enabledTitle:String,disabledTitle:String,disabledCoupons:H(),showExchangeBar:D,showCloseButton:D,closeButtonText:String,inputPlaceholder:String,exchangeMinLength:I(1),exchangeButtonText:String,displayedCouponIndex:I(-1),exchangeButtonLoading:Boolean,exchangeButtonDisabled:Boolean},Ee=_({name:Te,props:ke,emits:["change","exchange","update:code"],setup(e,{emit:t,slots:l}){const[s,n]=re(),u=g(),c=g(),h=g(0),B=g(0),i=g(e.code),T=m(()=>!e.exchangeButtonLoading&&(e.exchangeButtonDisabled||!i.value||i.value.length<e.exchangeMinLength)),k=()=>{const p=z(u).height,f=z(c).height+44;B.value=(p>f?p:q.value)-f},L=()=>{t("exchange",i.value),e.code||(i.value="")},E=a=>{se(()=>{var p;return(p=s.value[a])==null?void 0:p.scrollIntoView()})},v=()=>o(me,{image:e.emptyImage},{default:()=>[o("p",{class:d("empty-tip")},[x("noCoupon")])]}),b=()=>{if(e.showExchangeBar)return o("div",{ref:c,class:d("exchange-bar")},[o(pe,{modelValue:i.value,"onUpdate:modelValue":a=>i.value=a,clearable:!0,border:!1,class:d("field"),placeholder:e.inputPlaceholder||x("placeholder"),maxlength:"20"},null),o(Q,{plain:!0,type:"danger",class:d("exchange"),text:e.exchangeButtonText||x("exchange"),loading:e.exchangeButtonLoading,disabled:T.value,onClick:L},null)])},P=()=>{const{coupons:a}=e,p=e.showCount?` (${a.length})`:"",f=(e.enabledTitle||x("enable"))+p;return o(O,{title:f},{default:()=>{var w;return[o("div",{class:d("list",{"with-bottom":e.showCloseButton}),style:{height:`${B.value}px`}},[a.map((y,A)=>o(J,{key:y.id,ref:n(A),coupon:y,chosen:A===e.chosenCoupon,currency:e.currency,onClick:()=>t("change",A)},null)),!a.length&&v(),(w=l["list-footer"])==null?void 0:w.call(l)])]}})},$=()=>{const{disabledCoupons:a}=e,p=e.showCount?` (${a.length})`:"",f=(e.disabledTitle||x("disabled"))+p;return o(O,{title:f},{default:()=>{var w;return[o("div",{class:d("list",{"with-bottom":e.showCloseButton}),style:{height:`${B.value}px`}},[a.map(y=>o(J,{disabled:!0,key:y.id,coupon:y,currency:e.currency},null)),!a.length&&v(),(w=l["disabled-list-footer"])==null?void 0:w.call(l)])]}})};return F(()=>e.code,a=>{i.value=a}),F(q,k),F(i,a=>t("update:code",a)),F(()=>e.displayedCouponIndex,E),ne(()=>{k(),E(e.displayedCouponIndex)}),()=>o("div",{ref:u,class:d()},[b(),o(de,{active:h.value,"onUpdate:active":a=>h.value=a,class:d("tab")},{default:()=>[P(),$()]}),o("div",{class:d("bottom")},[te(o(Q,{round:!0,block:!0,type:"danger",class:d("close"),text:e.closeButtonText||x("close"),onClick:()=>t("change",-1)},null),[[ae,e.showCloseButton]])])])}}),$e=N(Ee),Fe=$e,to=_({__name:"index",setup(e){const t=K({"zh-CN":{coupon:{name:"\u4F18\u60E0\u5238\u540D\u79F0",reason:"\u4F18\u60E0\u5238\u4E0D\u53EF\u7528\u539F\u56E0",description:"\u63CF\u8FF0\u4FE1\u606F"},exchange:"\u5151\u6362\u6210\u529F"},"en-US":{coupon:{name:"Coupon name",reason:"Coupon unavailable reason",description:"Description"},exchange:"Success"}}),l=(v=999999)=>String(Math.floor(Math.random()*v)+1),s=g(!1),n=g(-1),u=g([]),c=m(()=>({id:1,condition:`\u65E0\u95E8\u69DB
\u6700\u591A\u4F18\u60E012\u5143`,reason:"",value:150,name:t("coupon.name"),description:t("coupon.description"),startAt:1489104e3,endAt:1514592e3,valueDesc:"1.5",unitDesc:"\u5143"})),h=m(()=>({...c.value,id:2,value:12,valueDesc:"8.8",unitDesc:"\u6298"})),B=m(()=>({...c.value,id:3,reason:t("coupon.reason")})),i=m(()=>({...h.value,valueDesc:"1",unitDesc:"\u6298",id:4,reason:t("coupon.reason")})),T=m(()=>[c.value,h.value,...u.value]),k=m(()=>[B.value,i.value]),L=v=>{s.value=!1,n.value=v},E=()=>{ge(t("exchange")),u.value.push({...c.value,id:l()})};return(v,b)=>{const P=ue("demo-block");return ce(),le(P,{title:C(t)("basicUsage")},{default:G(()=>[o(C(Be),{coupons:C(T),"chosen-coupon":n.value,onClick:b[0]||(b[0]=$=>s.value=!0)},null,8,["coupons","chosen-coupon"]),o(C(ie),{show:s.value,"onUpdate:show":b[1]||(b[1]=$=>s.value=$),round:"",position:"bottom",style:{height:"90%","padding-top":"4px"}},{default:G(()=>[o(C(Fe),{coupons:C(T),"chosen-coupon":n.value,"disabled-coupons":C(k),onChange:L,onExchange:E},null,8,["coupons","chosen-coupon","disabled-coupons"])]),_:1},8,["show"])]),_:1},8,["title"])}}});export{to as default};
