import{c as x,e as C,a as k}from"./use-translate.8036e41d.js";import{d as _,b as p,n as h,t as A,w as F}from"./with-install.6887218d.js";import{B as w}from"./index.378beb57.js";import{R as B,a as S}from"./index.ba02500c.js";import{T as y}from"./index.1bafc6c8.js";import{I as L}from"./index.bbaa83e9.js";import{C as v}from"./index.e17d8230.js";import{A as T,e as i,Q as D,x as V,r as I,o as j,c as $,w as P,C as l}from"./vue-libs.a040eeb8.js";import{s as g}from"./index.fda1c946.js";import"./constant.80c6de18.js";import"./use-route.f2a7e4c6.js";import"./index.e68b0dfb.js";import"./Checker.2cbf1fb0.js";import"./index.b6b83872.js";import"./interceptor.66b82326.js";import"./use-expose.1f17c8d6.js";import"./use-touch.ee9512d6.js";import"./use-lazy-render.615ed830.js";import"./on-popup-reopen.2164636b.js";import"./index.83fec59c.js";import"./mount-component.5abe2a8c.js";function N(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!D(e)}const[O,c]=x("address-item"),R=T({name:O,props:{address:_(Object),disabled:Boolean,switchable:Boolean,defaultTagText:String},emits:["edit","click","select"],setup(e,{slots:t,emit:u}){const m=()=>{e.switchable&&u("select"),u("click")},r=()=>i(L,{name:"edit",class:c("edit"),onClick:d=>{d.stopPropagation(),u("edit"),u("click")}},null),f=()=>{if(t.tag)return t.tag(e.address);if(e.address.isDefault&&e.defaultTagText)return i(y,{type:"primary",round:!0,class:c("tag")},{default:()=>[e.defaultTagText]})},a=()=>{const{address:d,disabled:s,switchable:n}=e,o=[i("div",{class:c("name")},[`${d.name} ${d.tel}`,f()]),i("div",{class:c("address")},[d.address])];return n&&!s?i(B,{name:d.id,iconSize:18},N(o)?o:{default:()=>[o]}):o};return()=>{var s;const{disabled:d}=e;return i("div",{class:c({disabled:d}),onClick:m},[i(v,{border:!1,titleClass:c("title")},{title:a,"right-icon":r}),(s=t.bottom)==null?void 0:s.call(t,C({},e.address,{disabled:d}))])}}});function U(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!D(e)}const[z,b,q]=x("address-list"),G={list:p(),modelValue:h,switchable:A,disabledText:String,disabledList:p(),addButtonText:String,defaultTagText:String},J=T({name:z,props:G,emits:["add","edit","select","clickItem","editDisabled","selectDisabled","update:modelValue"],setup(e,{slots:t,emit:u}){const m=(a,d,s)=>{const n=()=>u(s?"editDisabled":"edit",a,d),o=()=>u("clickItem",a,d),E=()=>{u(s?"selectDisabled":"select",a,d),s||u("update:modelValue",a.id)};return i(R,{key:a.id,address:a,disabled:s,switchable:e.switchable,defaultTagText:e.defaultTagText,onEdit:n,onClick:o,onSelect:E},{bottom:t["item-bottom"],tag:t.tag})},r=(a,d)=>{if(a)return a.map((s,n)=>m(s,n,d))},f=()=>i("div",{class:[b("bottom"),"van-safe-area-bottom"]},[i(w,{round:!0,block:!0,type:"primary",text:e.addButtonText||q("add"),class:b("add"),onClick:()=>u("add")},null)]);return()=>{var n,o;const a=r(e.list),d=r(e.disabledList,!0),s=e.disabledText&&i("div",{class:b("disabled-text")},[e.disabledText]);return i("div",{class:b()},[(n=t.top)==null?void 0:n.call(t),i(S,{modelValue:e.modelValue},U(a)?a:{default:()=>[a]}),s,d,(o=t.default)==null?void 0:o.call(t),f()])}}}),Q=F(J),H=Q,Te=T({__name:"index",setup(e){const t=k({"zh-CN":{list:[{id:"1",name:"\u5F20\u4E09",tel:"13000000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u897F\u6E56\u533A\u6587\u4E09\u8DEF 138 \u53F7\u4E1C\u65B9\u901A\u4FE1\u5927\u53A6 7 \u697C 501 \u5BA4",isDefault:!0},{id:"2",name:"\u674E\u56DB",tel:"1310000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u62F1\u5885\u533A\u83AB\u5E72\u5C71\u8DEF 50 \u53F7"}],disabledList:[{id:"3",name:"\u738B\u4E94",tel:"1320000000",address:"\u6D59\u6C5F\u7701\u676D\u5DDE\u5E02\u6EE8\u6C5F\u533A\u6C5F\u5357\u5927\u9053 15 \u53F7"}],add:"\u65B0\u589E\u5730\u5740",edit:"\u7F16\u8F91\u5730\u5740",disabledText:"\u4EE5\u4E0B\u5730\u5740\u8D85\u51FA\u914D\u9001\u8303\u56F4",defaultTagText:"\u9ED8\u8BA4"},"en-US":{list:[{id:"1",name:"John Snow",tel:"13000000000",address:"Somewhere",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000",address:"Somewhere"}],disabledList:[{id:"3",name:"Tywin",tel:"1320000000",address:"Somewhere"}],add:"Add",edit:"Edit",disabledText:"The following address is out of range",defaultTagText:"Default"}}),u=V("1"),m=()=>{g(t("add"))},r=(f,a)=>{g(`${t("edit")}:${a}`)};return(f,a)=>{const d=I("demo-block");return j(),$(d,{title:l(t)("basicUsage")},{default:P(()=>[i(l(H),{modelValue:u.value,"onUpdate:modelValue":a[0]||(a[0]=s=>u.value=s),list:l(t)("list"),"disabled-list":l(t)("disabledList"),"disabled-text":l(t)("disabledText"),"default-tag-text":l(t)("defaultTagText"),onAdd:m,onEdit:r},null,8,["modelValue","list","disabled-list","disabled-text","default-tag-text"])]),_:1},8,["title"])}}});export{Te as default};
