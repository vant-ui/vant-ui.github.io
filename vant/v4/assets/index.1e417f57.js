import{c as p,a as f}from"./use-translate.85b7fc27.js";import{m as _,t as k,w as F}from"./with-install.d26e13af.js";import{C as b}from"./index.e53f50c0.js";import{A as C,e as a,D as B,r as E,o as y,a as A,w as r,C as t,F as h}from"./vue-libs.a3cd7f61.js";import{T as s}from"./function-call.4eaf2655.js";import"./use-route.7a9317f3.js";import"./index.33ef0a36.js";import"./mount-component.a164bc7b.js";import"./use-expose.b85ae184.js";import"./index.c08165fc.js";import"./constant.80c6de18.js";import"./interceptor.de8ff612.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.754c99d2.js";import"./index.4d0d76f2.js";const[x,u,c]=p("contact-card"),S={tel:String,name:String,type:_("add"),addText:String,editable:k};var g=C({name:x,props:S,emits:["click"],setup(e,{emit:n}){const o=i=>{e.editable&&n("click",i)},d=()=>e.type==="add"?e.addText||c("addContact"):[a("div",null,[`${c("name")}\uFF1A${e.name}`]),a("div",null,[`${c("tel")}\uFF1A${e.tel}`])];return()=>a(b,{center:!0,icon:e.type==="edit"?"contact":"add-square",class:u([e.type]),border:!1,isLink:e.editable,titleClass:u("title"),onClick:o},{title:d})}});const m=F(g),O=C({__name:"index",setup(e){const n=f({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",name:"\u5F20\u4E09",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",editContact:"\u7F16\u8F91\u8054\u7CFB\u4EBA"},"en-US":{add:"Add",edit:"Edit",name:"John Snow",addContact:"Add Contact",editContact:"Edit Contact"}}),o=B(()=>({name:n("name"),tel:"13000000000"})),d=()=>s(n("add")),i=()=>s(n("edit"));return(w,T)=>{const l=E("demo-block");return y(),A(h,null,[a(l,{title:t(n)("addContact")},{default:r(()=>[a(t(m),{type:"add",onClick:d})]),_:1},8,["title"]),a(l,{title:t(n)("editContact")},{default:r(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,onClick:i},null,8,["name","tel"])]),_:1},8,["title"]),a(l,{title:t(n)("uneditable")},{default:r(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,editable:!1},null,8,["name","tel"])]),_:1},8,["title"])],64)}}});export{O as default};
