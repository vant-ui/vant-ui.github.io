import{V as i}from"./index.5506d31e.js";import{a as V}from"./use-translate.c7ada534.js";import{A as D,x as s,r as C,o as v,a as E,e as a,w as d,C as t,F as M}from"./vue-libs.34a885a4.js";import"./with-install.fe59c8e0.js";import"./utils.17801bf0.js";import"./Picker.1eb21393.js";import"./constant.80c6de18.js";import"./use-expose.582395af.js";import"./index.17a6cccd.js";import"./use-touch.d7fba47b.js";import"./index.6bd558e8.js";import"./use-id.50875a37.js";import"./use-route.d291d507.js";import"./index.cccdd0f7.js";import"./on-popup-reopen.550cf80c.js";import"./interceptor.313e29a1.js";import"./use-refs.f3963423.js";import"./index.72c74d73.js";import"./index.3d1cb367.js";import"./index.c3bba4f8.js";const K=D({__name:"index",setup(_){const o=V({"zh-CN":{day:"\u65E5",year:"\u5E74",month:"\u6708",chooseDate:"\u9009\u62E9\u65E5\u671F",columnsType:"\u9009\u9879\u7C7B\u578B",optionsFilter:"\u8FC7\u6EE4\u9009\u9879",chooseYearMonth:"\u9009\u62E9\u5E74\u6708",optionsFormatter:"\u683C\u5F0F\u5316\u9009\u9879"},"en-US":{day:" Day",year:" Year",month:" Month",chooseDate:"Choose Date",columnsType:"Columns Type",optionsFilter:"Options Filter",chooseYearMonth:"Choose Year-Month",optionsFormatter:"Options Formatter"}}),n=new Date(2020,0,1),u=new Date(2025,5,1),c=s(["2021","01","01"]),f=s(["2021","01"]),h=s(["2021","01"]),x=s(["2021","01"]),p=["year","month"],y=(m,e)=>m==="month"?e.filter(r=>Number(r.value)%6===0):e,F=(m,e)=>(m==="year"&&(e.text+=o("year")),m==="month"&&(e.text+=o("month")),m==="day"&&(e.text+=o("day")),e);return(m,e)=>{const r=C("demo-block");return v(),E(M,null,[a(r,{card:"",title:t(o)("basicUsage")},{default:d(()=>[a(t(i),{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=l=>c.value=l),title:t(o)("chooseDate"),"min-date":t(n),"max-date":t(u)},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),a(r,{card:"",title:t(o)("columnsType")},{default:d(()=>[a(t(i),{modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=l=>f.value=l),title:t(o)("chooseYearMonth"),"min-date":t(n),"max-date":t(u),"columns-type":p},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),a(r,{card:"",title:t(o)("optionsFormatter")},{default:d(()=>[a(t(i),{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=l=>h.value=l),title:t(o)("chooseYearMonth"),"min-date":t(n),"max-date":t(u),formatter:F,"columns-type":p},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"]),a(r,{card:"",title:t(o)("optionsFilter")},{default:d(()=>[a(t(i),{modelValue:x.value,"onUpdate:modelValue":e[3]||(e[3]=l=>x.value=l),title:t(o)("optionFilter"),filter:y,"min-date":t(n),"max-date":t(u),"columns-type":p},null,8,["modelValue","title","min-date","max-date"])]),_:1},8,["title"])],64)}}});export{K as default};
