import{c as p,a as f}from"./use-translate.4af05b41.js";import{m as _,t as k,w as F}from"./with-install.bc951e22.js";import{C as b}from"./index.d6a4ac5e.js";import{z as C,e as a,D as B,r as E,o as y,a as h,w as l,B as t,F as v}from"./vue-libs.7ad34eae.js";import{T as s}from"./function-call.cfe02c45.js";import"./use-route.13c8c682.js";import"./index.334a3abb.js";import"./mount-component.b3b1a921.js";import"./use-expose.313b91e7.js";import"./index.24b817f9.js";import"./constant.80c6de18.js";import"./interceptor.a316706b.js";import"./use-touch.79e2b006.js";import"./use-lazy-render.96f053d1.js";import"./on-popup-reopen.c53e1654.js";import"./index.01b1c0bb.js";import"./index.3b9bd9d1.js";const[x,u,r]=p("contact-card"),A={tel:String,name:String,type:_("add"),addText:String,editable:k},S=C({name:x,props:A,emits:["click"],setup(e,{emit:n}){const o=i=>{e.editable&&n("click",i)},d=()=>e.type==="add"?e.addText||r("addContact"):[a("div",null,[`${r("name")}\uFF1A${e.name}`]),a("div",null,[`${r("tel")}\uFF1A${e.tel}`])];return()=>a(b,{center:!0,icon:e.type==="edit"?"contact":"add-square",class:u([e.type]),border:!1,isLink:e.editable,valueClass:u("value"),onClick:o},{value:d})}}),g=F(S),m=g,Q=C({__name:"index",setup(e){const n=f({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",name:"\u5F20\u4E09",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",editContact:"\u7F16\u8F91\u8054\u7CFB\u4EBA"},"en-US":{add:"Add",edit:"Edit",name:"John Snow",addContact:"Add Contact",editContact:"Edit Contact"}}),o=B(()=>({name:n("name"),tel:"13000000000"})),d=()=>s(n("add")),i=()=>s(n("edit"));return(w,T)=>{const c=E("demo-block");return y(),h(v,null,[a(c,{title:t(n)("addContact")},{default:l(()=>[a(t(m),{type:"add",onClick:d})]),_:1},8,["title"]),a(c,{title:t(n)("editContact")},{default:l(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,onClick:i},null,8,["name","tel"])]),_:1},8,["title"]),a(c,{title:t(n)("uneditable")},{default:l(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,editable:!1},null,8,["name","tel"])]),_:1},8,["title"])],64)}}});export{Q as default};
