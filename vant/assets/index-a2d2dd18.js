import{V as i}from"./index-5f7b1062.js";import{V as x}from"./index-25bd655e.js";import{V as S}from"./index-3c1d8a22.js";import{b as C,d as b,c as _,a as V,e as y}from"./data-67c16a28.js";import{a as v}from"./use-translate-ad5eefa4.js";import{A as w,y as f,r as k,o as N,c as z,w as a,e as l,C as t,a as P,F as g}from"./vue-libs-6a67f9c6.js";import{s as h}from"./function-call-2a37c813.js";import"./Picker-3d13cce4.js";import"./use-expose-c87283be.js";import"./index-5b517ddf.js";import"./with-install-0d9206aa.js";import"./use-touch-87b155f0.js";import"./constant-00b7fd44.js";import"./use-sync-prop-ref-011d5386.js";import"./index-ebb73d3f.js";import"./use-id-5464e261.js";import"./use-route-ea8124d0.js";import"./index-4437616e.js";import"./index-386f5015.js";import"./on-popup-reopen-2b57f4ff.js";import"./use-refs-4e2d69f7.js";import"./index-a81fbffb.js";import"./interceptor-e18d38f8.js";import"./index-c6c98967.js";import"./index-1c02023b.js";import"./use-lock-scroll-a0e7292b.js";import"./use-lazy-render-7199096a.js";import"./index-f441590a.js";import"./mount-component-49243326.js";const F=w({__name:"WithPopup",setup(U){const e=v({"zh-CN":{city:"城市",withPopup:"搭配弹出层使用",chooseCity:"选择城市",basicColumns:C["zh-CN"]},"en-US":{city:"City",withPopup:"With Popup",chooseCity:"Choose City",basicColumns:C["en-US"]}}),m=f(!1),u=f(""),p=()=>{m.value=!0},d=()=>{m.value=!1},r=({selectedOptions:o})=>{m.value=!1,u.value=o[0].text};return(o,s)=>{const n=k("demo-block");return N(),z(n,{card:"",title:t(e)("withPopup")},{default:a(()=>[l(t(x),{modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=c=>u.value=c),"is-link":"",readonly:"",label:t(e)("city"),placeholder:t(e)("chooseCity"),onClick:p},null,8,["modelValue","label","placeholder"]),l(t(S),{show:m.value,"onUpdate:show":s[1]||(s[1]=c=>m.value=c),round:"",position:"bottom"},{default:a(()=>[l(t(i),{title:t(e)("title"),columns:t(e)("basicColumns"),onCancel:d,onConfirm:r},null,8,["title","columns"])]),_:1},8,["show"])]),_:1},8,["title"])}}}),it=w({__name:"index",setup(U){const e=v({"zh-CN":{cascade:"级联选择",modelValue:"双向绑定",showToolbar:"展示顶部栏",dateColumns:b["zh-CN"],basicColumns:C["zh-CN"],defaultIndex:"默认选中项",disableOption:"禁用选项",cascadeColumns:_["zh-CN"],disabledColumns:V["zh-CN"],multipleColumns:"多列选择",customChildrenKey:"自定义 Columns 结构",customChildrenColumns:y["zh-CN"],toastContent:o=>`当前值：${o}`},"en-US":{cascade:"Cascade",modelValue:"v-model",showToolbar:"Show Toolbar",dateColumns:b["en-US"],basicColumns:C["en-US"],defaultIndex:"Default Index",disableOption:"Disable Option",cascadeColumns:_["en-US"],disabledColumns:V["en-US"],multipleColumns:"Multiple Columns",customChildrenKey:"Custom Columns Fields",customChildrenColumns:y["en-US"],toastContent:(o,s)=>`Value: ${o}, Index：${s}`}}),m={text:"cityName",value:"cityName",children:"cities"},u=f(["Wenzhou"]),p=({selectedValues:o})=>{h(e("toastContent",o.join(",")))},d=({selectedValues:o})=>{h(e("toastContent",o.join(",")))},r=()=>h(e("cancel"));return(o,s)=>{const n=k("demo-block");return N(),P(g,null,[l(n,{card:"",title:t(e)("basicUsage")},{default:a(()=>[l(t(i),{title:t(e)("title"),columns:t(e)("basicColumns"),onChange:p,onCancel:r,onConfirm:d},null,8,["title","columns"])]),_:1},8,["title"]),l(F),l(n,{card:"",title:t(e)("modelValue")},{default:a(()=>[l(t(i),{modelValue:u.value,"onUpdate:modelValue":s[0]||(s[0]=c=>u.value=c),title:t(e)("title"),columns:t(e)("basicColumns")},null,8,["modelValue","title","columns"])]),_:1},8,["title"]),l(n,{card:"",title:t(e)("multipleColumns")},{default:a(()=>[l(t(i),{title:t(e)("title"),columns:t(e)("dateColumns"),onCancel:r,onConfirm:d},null,8,["title","columns"])]),_:1},8,["title"]),l(n,{card:"",title:t(e)("cascade")},{default:a(()=>[l(t(i),{title:t(e)("title"),columns:t(e)("cascadeColumns")},null,8,["title","columns"])]),_:1},8,["title"]),l(n,{card:"",title:t(e)("disableOption")},{default:a(()=>[l(t(i),{title:t(e)("title"),columns:t(e)("disabledColumns")},null,8,["title","columns"])]),_:1},8,["title"]),l(n,{card:"",title:t(e)("loadingStatus")},{default:a(()=>[l(t(i),{loading:"",title:t(e)("title")},null,8,["title"])]),_:1},8,["title"]),l(n,{card:"",title:t(e)("customChildrenKey")},{default:a(()=>[l(t(i),{title:t(e)("title"),columns:t(e)("customChildrenColumns"),"columns-field-names":m},null,8,["title","columns"])]),_:1},8,["title"])],64)}}});export{it as default};
