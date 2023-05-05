import{a as w}from"./Picker-bbf1533b.js";import{w as N}from"./with-install-a70dfb01.js";import{V as b}from"./index-695cc9b7.js";import{V as S}from"./index-9d53cbca.js";import{a as T}from"./use-translate-113fec30.js";import{s as p}from"./function-call-39d5afc9.js";import{A as x,y as s,o as _,c as U,w as r,e as n,C as e,D as k,a as g,g as j,t as R,F as $,r as B}from"./vue-libs-12a1683e.js";import{V as z}from"./index-a1b4019d.js";import"./use-expose-89a7ef05.js";import"./index-ae779a94.js";import"./use-touch-e98b6450.js";import"./constant-a81ffd37.js";import"./index-a24498af.js";import"./use-id-2cc12458.js";import"./use-route-3942a82f.js";import"./index-a6be55ae.js";import"./index-f6d18d61.js";import"./on-popup-reopen-eee79bbb.js";import"./use-refs-a2ddf56d.js";import"./index-eb9f216b.js";import"./interceptor-8283b88e.js";import"./utils-8aedfd6c.js";import"./index-74529a7d.js";import"./mount-component-8e763b0d.js";import"./index-b61a6a2b.js";import"./index-1046b10f.js";import"./use-lazy-render-8625b066.js";import"./index-05a80ec9.js";const y=N(w),C=y,P=x({__name:"SelectDateTime",setup(V){const t=T({"zh-CN":{date:"选择日期",time:"选择时间",title:"预约日期"},"en-US":{date:"Date",time:"Time",title:"Title"}}),a=s(["12","00"]),l=s(["2022","06","01"]),o=new Date(2020,0,1),d=new Date(2025,5,1),v=()=>{p(`${l.value.join("/")} ${a.value.join(":")}`)},i=()=>{p("cancel")};return(D,u)=>(_(),U(e(C),{title:e(t)("title"),tabs:[e(t)("date"),e(t)("time")],onConfirm:v,onCancel:i},{default:r(()=>[n(e(S),{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=m=>l.value=m),"min-date":e(o),"max-date":e(d)},null,8,["modelValue","min-date","max-date"]),n(e(b),{modelValue:a.value,"onUpdate:modelValue":u[1]||(u[1]=m=>a.value=m)},null,8,["modelValue"])]),_:1},8,["title","tabs"]))}}),E=x({__name:"SelectTimeRange",setup(V){const t=T({"zh-CN":{startTime:"开始时间",endTime:"结束时间",title:"预约时间"},"en-US":{startTime:"Start Time",endTime:"End Time",title:"Title"}}),a=s(["12","00"]),l=s(["13","00"]),o=()=>{p(`${a.value.join(":")} - ${l.value.join(":")}`)},d=()=>{p("cancel")};return(v,i)=>(_(),U(e(C),{title:e(t)("title"),tabs:[e(t)("startTime"),e(t)("endTime")],onConfirm:o,onCancel:d},{default:r(()=>[n(e(b),{modelValue:a.value,"onUpdate:modelValue":i[0]||(i[0]=D=>a.value=D)},null,8,["modelValue"]),n(e(b),{modelValue:l.value,"onUpdate:modelValue":i[1]||(i[1]=D=>l.value=D)},null,8,["modelValue"])]),_:1},8,["title","tabs"]))}}),G=x({__name:"SelectDateRange",setup(V){const t=T({"zh-CN":{startDate:"开始日期",endDate:"结束日期",title:"预约日期"},"en-US":{startDate:"Start Date",endDate:"End Date",title:"Title"}}),a=s(["2022","06","01"]),l=s(["2023","06","01"]),o=new Date(2020,0,1),d=new Date(2025,5,1),v=k(()=>new Date(Number(a.value[0]),Number(a.value[1])-1,Number(a.value[2]))),i=()=>{p(`${a.value.join("/")} - ${l.value.join("/")}`)},D=()=>{p("cancel")};return(u,m)=>(_(),U(e(C),{title:e(t)("title"),tabs:[e(t)("startDate"),e(t)("endDate")],onConfirm:i,onCancel:D},{default:r(()=>[n(e(S),{modelValue:a.value,"onUpdate:modelValue":m[0]||(m[0]=c=>a.value=c),"min-date":e(o),"max-date":e(d)},null,8,["modelValue","min-date","max-date"]),n(e(S),{modelValue:l.value,"onUpdate:modelValue":m[1]||(m[1]=c=>l.value=c),"min-date":e(v),"max-date":e(d)},null,8,["modelValue","min-date","max-date"])]),_:1},8,["title","tabs"]))}}),A=x({__name:"NextStepButton",setup(V){const t=T({"zh-CN":{date:"选择日期",time:"选择时间",title:"预约日期",nextStep:"下一步"},"en-US":{date:"Date",time:"Time",title:"Title",nextStep:"Next Step"}}),a=s(["12","00"]),l=s(["2022","06","01"]),o=new Date(2020,0,1),d=new Date(2025,5,1),v=()=>{p(`${l.value.join("/")} ${a.value.join(":")}`)},i=()=>{p("cancel")};return(D,u)=>(_(),U(e(C),{title:e(t)("title"),tabs:[e(t)("date"),e(t)("time")],"next-step-text":e(t)("nextStep"),onConfirm:v,onCancel:i},{default:r(()=>[n(e(S),{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=m=>l.value=m),"min-date":e(o),"max-date":e(d)},null,8,["modelValue","min-date","max-date"]),n(e(b),{modelValue:a.value,"onUpdate:modelValue":u[1]||(u[1]=m=>a.value=m)},null,8,["modelValue"])]),_:1},8,["title","tabs","next-step-text"]))}}),F=x({__name:"ControlTab",setup(V){const t=T({"zh-CN":{date:"选择日期",time:"选择时间",title:"预约日期",btnText:"点击切换 tab，当前为 "},"en-US":{date:"Date",time:"Time",title:"Title",btnText:"toggle tab, current "}}),a=s(0),l=s(["12","00"]),o=s(["2022","06","01"]),d=new Date(2020,0,1),v=new Date(2025,5,1),i=()=>{p(`${o.value.join("/")} ${l.value.join(":")}`)},D=()=>{p("cancel")},u=()=>{a.value=a.value?0:1};return(m,c)=>(_(),g($,null,[n(e(z),{style:{margin:"10px 0"},type:"primary",onClick:u},{default:r(()=>[j(R(e(t)("btnText")+a.value),1)]),_:1}),n(e(C),{"active-tab":a.value,"onUpdate:activeTab":c[2]||(c[2]=f=>a.value=f),title:e(t)("title"),tabs:[e(t)("date"),e(t)("time")],onConfirm:i,onCancel:D},{default:r(()=>[n(e(S),{modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=f=>o.value=f),"min-date":e(d),"max-date":e(v)},null,8,["modelValue","min-date","max-date"]),n(e(b),{modelValue:l.value,"onUpdate:modelValue":c[1]||(c[1]=f=>l.value=f)},null,8,["modelValue"])]),_:1},8,["active-tab","title","tabs"])],64))}}),De=x({__name:"index",setup(V){const t=T({"zh-CN":{selectDateTime:"选择日期时间",selectDateRange:"选择日期范围",selectTimeRange:"选择时间范围",nextStepButton:"下一步按钮",controlled:"受控模式"},"en-US":{selectDateTime:"Select Date Time",selectDateRange:"Select Date Range",selectTimeRange:"Select Time Range",nextStepButton:"Next Step Button",controlled:"Controlled Mode"}});return(a,l)=>{const o=B("demo-block");return _(),g($,null,[n(o,{card:"",title:e(t)("selectDateTime")},{default:r(()=>[n(P)]),_:1},8,["title"]),n(o,{card:"",title:e(t)("nextStepButton")},{default:r(()=>[n(A)]),_:1},8,["title"]),n(o,{card:"",title:e(t)("selectDateRange")},{default:r(()=>[n(G)]),_:1},8,["title"]),n(o,{card:"",title:e(t)("selectTimeRange")},{default:r(()=>[n(E)]),_:1},8,["title"]),n(o,{card:"",title:e(t)("controlled")},{default:r(()=>[n(F)]),_:1},8,["title"])],64)}}});export{De as default};
