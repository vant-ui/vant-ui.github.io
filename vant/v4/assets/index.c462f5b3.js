import{c as g,a as C}from"./use-translate.c56bc05e.js";import{u as T,w as _}from"./with-install.2d06a5b3.js";import{T as x}from"./index.ceab0060.js";import{I as k}from"./index.bb072daf.js";import{C as V}from"./index.8c710c0a.js";import{a as h,R as v}from"./index.2cf387f9.js";import{B as y}from"./index.af6aabcb.js";import{A as f,e as o,x as E,r as S,o as b,c as w,w as B,C as u}from"./vue-libs.a3cd7f61.js";import{s as p}from"./index.b77af129.js";import"./constant.80c6de18.js";import"./use-route.7a9317f3.js";import"./Checker.4199cd3d.js";import"./index.1fe53b6c.js";import"./index.649b4224.js";import"./interceptor.7caa5e9a.js";import"./use-expose.2dad0d8e.js";import"./use-touch.196fce0c.js";import"./use-lazy-render.4c81c593.js";import"./on-popup-reopen.a53db14c.js";import"./index.a0b9e7c8.js";import"./mount-component.2ea251e1.js";const[I,a,A]=g("contact-list"),D={list:Array,addText:String,modelValue:T,defaultTagText:String},L=f({name:I,props:D,emits:["add","edit","select","update:modelValue"],setup(n,{emit:t}){const d=(e,i)=>{const c=()=>{t("update:modelValue",e.id),t("select",e,i)},s=()=>o(v,{class:a("radio"),name:e.id,iconSize:16},null),r=()=>o(k,{name:"edit",class:a("edit"),onClick:l=>{l.stopPropagation(),t("edit",e,i)}},null),m=()=>{const l=[`${e.name}\uFF0C${e.tel}`];return e.isDefault&&n.defaultTagText&&l.push(o(x,{type:"primary",round:!0,class:a("item-tag")},{default:()=>[n.defaultTagText]})),l};return o(V,{key:e.id,isLink:!0,center:!0,class:a("item"),titleClass:a("item-title"),onClick:c},{icon:r,title:m,"right-icon":s})};return()=>o("div",{class:a()},[o(h,{modelValue:n.modelValue,class:a("group")},{default:()=>[n.list&&n.list.map(d)]}),o("div",{class:[a("bottom"),"van-safe-area-bottom"]},[o(y,{round:!0,block:!0,type:"primary",class:a("add"),text:n.addText||A("addContact"),onClick:()=>t("add")},null)])])}}),N=_(L),R=N,ot=f({__name:"index",setup(n){const t=C({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",list:[{id:"1",name:"\u5F20\u4E09",tel:"13000000000",isDefault:!0},{id:"2",name:"\u674E\u56DB",tel:"1310000000"}],select:"\u9009\u62E9",defaultTagText:"\u9ED8\u8BA4"},"en-US":{add:"Add",edit:"Edit",list:[{id:"1",name:"John Snow",tel:"13000000000",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000"}],select:"Select",defaultTagText:"default"}}),d=E("1"),e=()=>{p(t("add"))},i=s=>{p(t("edit")+s.id)},c=s=>{p(t("select")+s.id)};return(s,r)=>{const m=S("demo-block");return b(),w(m,{title:u(t)("basicUsage")},{default:B(()=>[o(u(R),{modelValue:d.value,"onUpdate:modelValue":r[0]||(r[0]=l=>d.value=l),list:u(t)("list"),"default-tag-text":u(t)("defaultTagText"),onAdd:e,onEdit:i,onSelect:c},null,8,["modelValue","list","default-tag-text"])]),_:1},8,["title"])}}});export{ot as default};
