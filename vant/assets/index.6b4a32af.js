import{c as p,a as f}from"./use-translate.adc2ccf9.js";import{m as _,t as k,w as F}from"./with-install.007edd36.js";import{C as b}from"./index.cc90d905.js";import{z as C,e as a,D as B,r as E,o as y,a as h,w as l,B as t,F as v}from"./vue-libs.a65f1bfc.js";import{T as s}from"./function-call.668cd34a.js";import"./use-route.985ba6da.js";import"./index.55cbeda9.js";import"./mount-component.1ad90cc4.js";import"./use-expose.9b1749d6.js";import"./index.6376440d.js";import"./constant.80c6de18.js";import"./interceptor.e2b79e43.js";import"./use-touch.ffb74f5c.js";import"./use-lazy-render.965a094b.js";import"./on-popup-reopen.76ccb88c.js";import"./index.8af07ca5.js";import"./index.49155860.js";const[x,u,r]=p("contact-card"),A={tel:String,name:String,type:_("add"),addText:String,editable:k},S=C({name:x,props:A,emits:["click"],setup(e,{emit:n}){const o=i=>{e.editable&&n("click",i)},d=()=>e.type==="add"?e.addText||r("addContact"):[a("div",null,[`${r("name")}\uFF1A${e.name}`]),a("div",null,[`${r("tel")}\uFF1A${e.tel}`])];return()=>a(b,{center:!0,icon:e.type==="edit"?"contact":"add-square",class:u([e.type]),border:!1,isLink:e.editable,valueClass:u("value"),onClick:o},{value:d})}}),g=F(S),m=g,Q=C({__name:"index",setup(e){const n=f({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",name:"\u5F20\u4E09",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",editContact:"\u7F16\u8F91\u8054\u7CFB\u4EBA"},"en-US":{add:"Add",edit:"Edit",name:"John Snow",addContact:"Add Contact",editContact:"Edit Contact"}}),o=B(()=>({name:n("name"),tel:"13000000000"})),d=()=>s(n("add")),i=()=>s(n("edit"));return(w,T)=>{const c=E("demo-block");return y(),h(v,null,[a(c,{title:t(n)("addContact")},{default:l(()=>[a(t(m),{type:"add",onClick:d})]),_:1},8,["title"]),a(c,{title:t(n)("editContact")},{default:l(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,onClick:i},null,8,["name","tel"])]),_:1},8,["title"]),a(c,{title:t(n)("uneditable")},{default:l(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,editable:!1},null,8,["name","tel"])]),_:1},8,["title"])],64)}}});export{Q as default};
