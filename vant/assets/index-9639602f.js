import{C as u}from"./index-99011cf0.js";import{A as p,e as a,D as f,r as _,o as k,a as b,w as l,C as t,F as h}from"./vue-libs-12a1683e.js";import{c as y,a as w}from"./use-translate-f5915e0e.js";import{m as x,t as S,w as g}from"./with-install-e688503b.js";import{s}from"./function-call-94502ad4.js";import"./use-route-3942a82f.js";import"./index-f40ec2de.js";import"./index-5106e8af.js";import"./mount-component-d2062020.js";import"./use-expose-74d6f7e3.js";import"./index-b8400930.js";import"./use-touch-e98b6450.js";import"./use-lazy-render-8625b066.js";import"./on-popup-reopen-eee79bbb.js";import"./index-dd419646.js";import"./interceptor-37ecf4c0.js";import"./constant-a81ffd37.js";import"./index-57217a11.js";const[A,C,r]=y("contact-card"),E={tel:String,name:String,type:x("add"),addText:String,editable:S},T=p({name:A,props:E,emits:["click"],setup(e,{emit:n}){const o=i=>{e.editable&&n("click",i)},d=()=>e.type==="add"?e.addText||r("addContact"):[a("div",null,[`${r("name")}：${e.name}`]),a("div",null,[`${r("tel")}：${e.tel}`])];return()=>a(u,{center:!0,icon:e.type==="edit"?"contact":"add-square",class:C([e.type]),border:!1,isLink:e.editable,titleClass:C("title"),onClick:o},{title:d})}}),$=g(T),m=$,R=p({__name:"index",setup(e){const n=w({"zh-CN":{add:"新增",edit:"编辑",name:"张三",addContact:"添加联系人",editContact:"编辑联系人"},"en-US":{add:"Add",edit:"Edit",name:"John Snow",addContact:"Add Contact",editContact:"Edit Contact"}}),o=f(()=>({name:n("name"),tel:"13000000000"})),d=()=>s(n("add")),i=()=>s(n("edit"));return(v,N)=>{const c=_("demo-block");return k(),b(h,null,[a(c,{title:t(n)("addContact")},{default:l(()=>[a(t(m),{type:"add",onClick:d})]),_:1},8,["title"]),a(c,{title:t(n)("editContact")},{default:l(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,onClick:i},null,8,["name","tel"])]),_:1},8,["title"]),a(c,{title:t(n)("uneditable")},{default:l(()=>[a(t(m),{type:"edit",name:t(o).name,tel:t(o).tel,editable:!1},null,8,["name","tel"])]),_:1},8,["title"])],64)}}});export{R as default};