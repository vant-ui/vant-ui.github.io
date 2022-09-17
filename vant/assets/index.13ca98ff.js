import{c as h,e as d,w as B,a as C}from"./use-translate.82d1675a.js";import{w as S}from"./with-install.1e1e6f3a.js";import{C as D}from"./index.13f9e298.js";import{F as w}from"./index.3137d3dc.js";import{F as b}from"./index.fe76b068.js";import{B as _}from"./index.228fc332.js";import{S as x}from"./index.7ce50d59.js";import{z as g,H as E,x as V,e as a,C as k,r as y,o as F,c as T,w as L,B as u}from"./vue-libs.d483629c.js";import{T as v}from"./function-call.67aa4b4e.js";import"./use-route.e59fb0a1.js";import"./index.1aafb839.js";import"./constant.80c6de18.js";import"./use-expose.0b7af251.js";import"./use-id.af179088.js";import"./index.185a61a8.js";import"./mount-component.55786c8c.js";import"./index.d942910e.js";import"./interceptor.693bb092.js";import"./use-touch.2a7e3be3.js";import"./use-lazy-render.13317edf.js";import"./on-popup-reopen.27c65306.js";import"./index.a7d685e6.js";const[U,s,n]=h("contact-edit"),m={tel:"",name:""},A={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>d({},m)},telValidator:{type:Function,default:B}};var I=g({name:U,props:A,emits:["save","delete","change-default"],setup(t,{emit:l}){const e=E(d({},m,t.contactInfo)),i=()=>{t.isSaving||l("save",e)},c=()=>l("delete",e),f=()=>a("div",{class:s("buttons")},[a(_,{block:!0,round:!0,type:"danger",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(_,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:c},null)]),p=()=>a(x,{modelValue:e.isDefault,"onUpdate:modelValue":o=>e.isDefault=o,size:24,onChange:o=>l("change-default",o)},null),r=()=>{if(t.showSetDefault)return a(D,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return V(()=>t.contactInfo,o=>d(e,m,o)),()=>a(w,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":o=>e.tel=o,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),r(),f()]})}});const N=S(I);const ne=g({__name:"index",setup(t){const l=C({"zh-CN":{defaultLabel:"\u8BBE\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA"},"en-US":{defaultLabel:"Set as the default contact"}}),e=k({tel:"",name:""}),i=()=>v(l("save")),c=()=>v(l("delete"));return(f,p)=>{const r=y("demo-block");return F(),T(r,{title:u(l)("basicUsage")},{default:L(()=>[a(u(N),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(l)("defaultLabel"),onSave:i,onDelete:c},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{ne as default};
