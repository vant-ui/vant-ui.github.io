import{F as E}from"./index.71d045a5.js";import{F as m}from"./index.73f89b8c.js";import{B as S}from"./index.223d383d.js";import{C as D}from"./index.640a2441.js";import{a as x}from"./use-translate.a029ce72.js";import{A as V,u as d,r as P,o as C,c as A,w as r,e as a,C as e,d as $,h,t as U,a as F,F as w}from"./vue-libs.d5ee895a.js";import{a as z,c as R}from"./index.6deecded.js";import{c as G}from"./index.798f6ecc.js";import{R as L}from"./index.209b01a5.js";import{a as M,R as T}from"./index.c0b4012d.js";import{S as j}from"./index.49343411.js";import{S as H}from"./index.adf65dcf.js";import{S as I}from"./index.6498e398.js";import{C as B}from"./index.7ecd1617.js";import{U as J}from"./index.8eb51258.js";import{C as K}from"./index.4f1a57dc.js";import{b as O,a as Q}from"./index.esm.5c2f46ed.js";import{P as q}from"./index.61c0c549.js";import{a as W}from"./area-en.bc1aa920.js";import{P as X}from"./index.7dc9d2c4.js";import{b as N}from"./data.557ab6e4.js";import{C as Y}from"./index.cb41d795.js";import{D as Z}from"./index.35665307.js";import"./with-install.1dc27775.js";import"./constant.e12a51b9.js";import"./use-expose.c6c7f4f7.js";import"./index.6734f2fd.js";import"./use-route.55b36618.js";import"./index.0a9aad73.js";import"./index.3014f697.js";import"./use-id.283fca96.js";import"./index.cacc54a3.js";import"./mount-component.a9874ea3.js";import"./use-refs.9408eccb.js";import"./use-touch.e8c4f7e8.js";import"./Checker.610ece62.js";import"./interceptor.2257d115.js";import"./index.bd364f4a.js";import"./index.6b625a87.js";import"./on-popup-reopen.5b484164.js";import"./index.75f65fda.js";import"./Picker.3f9aec87.js";import"./index.ab6be629.js";import"./index.dde3479a.js";import"./use-lazy-render.8319bb4a.js";import"./index.45507804.js";import"./utils.0aca3e16.js";import"./use-height.4f2b97aa.js";const ee={style:{margin:"16px 16px 0"}},le=V({__name:"BasicUsage",setup(k){const l=x({"zh-CN":{submit:"\u63D0\u4EA4",username:"\u7528\u6237\u540D",password:"\u5BC6\u7801",requireUsername:"\u8BF7\u586B\u5199\u7528\u6237\u540D",requirePassword:"\u8BF7\u586B\u5199\u5BC6\u7801"},"en-US":{submit:"Submit",username:"Username",password:"Password",requireUsername:"Username is required",requirePassword:"Password is required"}}),n=d(""),u=d(""),c=i=>{console.log("submit",i)},b=i=>{console.log("failed",i)};return(i,o)=>{const s=P("demo-block");return C(),A(s,{title:e(l)("basicUsage")},{default:r(()=>[a(e(E),{onSubmit:c,onFailed:b},{default:r(()=>[a(e(D),{inset:""},{default:r(()=>[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=f=>n.value=f),name:"username",label:e(l)("username"),rules:[{required:!0,message:e(l)("requireUsername")}],placeholder:e(l)("username")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=f=>u.value=f),type:"password",name:"password",label:e(l)("password"),rules:[{required:!0,message:e(l)("requirePassword")}],placeholder:e(l)("password")},null,8,["modelValue","label","rules","placeholder"])]),_:1}),$("div",ee,[a(e(S),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[h(U(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),ae={style:{margin:"16px 16px 0"}},oe=V({__name:"ValidateRules",setup(k){const l=x({"zh-CN":{label:"\u6587\u672C",title:"\u6821\u9A8C\u89C4\u5219",submit:"\u63D0\u4EA4",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9",invalid:t=>`${t} \u4E0D\u5408\u6CD5\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165`,pattern:"\u6B63\u5219\u6821\u9A8C",validator:"\u51FD\u6570\u6821\u9A8C",validating:"\u9A8C\u8BC1\u4E2D...",asyncValidator:"\u5F02\u6B65\u51FD\u6570\u6821\u9A8C",validatorMessage:"\u6821\u9A8C\u51FD\u6570\u8FD4\u56DE\u9519\u8BEF\u63D0\u793A"},"en-US":{label:"Label",title:"Validate Rules",submit:"Submit",message:"Error message",invalid:t=>`${t} is invalid`,pattern:"Use pattern",validator:"Use validator",validating:"Validating...",asyncValidator:"Use async validator",validatorMessage:"Use validator to return message"}}),n=d(""),u=d(""),c=d("abc"),b=d(""),i=/\d{6}/,o=t=>/1\d{10}/.test(t),s=t=>l("invalid",t),f=t=>new Promise(v=>{z(l("validating")),setTimeout(()=>{R(),v(t==="1234")},1e3)}),g=t=>{console.log("submit",t)},y=t=>{console.log("failed",t)};return(t,v)=>{const p=P("demo-block");return C(),A(p,{title:e(l)("title")},{default:r(()=>[a(e(E),{onSumbit:g,onFailed:y},{default:r(()=>[a(e(D),{inset:""},{default:r(()=>[a(e(m),{modelValue:n.value,"onUpdate:modelValue":v[0]||(v[0]=_=>n.value=_),name:"pattern",label:e(l)("label"),rules:[{pattern:i,message:e(l)("message")}],placeholder:e(l)("pattern")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:u.value,"onUpdate:modelValue":v[1]||(v[1]=_=>u.value=_),name:"validator",label:e(l)("label"),rules:[{validator:o,message:e(l)("message")}],placeholder:e(l)("validator")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:c.value,"onUpdate:modelValue":v[2]||(v[2]=_=>c.value=_),name:"validatorMessage",label:e(l)("label"),rules:[{validator:s}],placeholder:e(l)("validatorMessage")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:b.value,"onUpdate:modelValue":v[3]||(v[3]=_=>b.value=_),name:"asyncValidator",label:e(l)("label"),rules:[{validator:f,message:e(l)("message")}],placeholder:e(l)("asyncValidator")},null,8,["modelValue","label","rules","placeholder"])]),_:1}),$("div",ae,[a(e(S),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[h(U(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),ue=V({__name:"FieldTypeArea",setup(k){const l=x({"zh-CN":{picker:"\u5730\u533A\u9009\u62E9",areaList:O,placeholder:"\u70B9\u51FB\u9009\u62E9\u7701\u5E02\u533A"},"en-US":{picker:"Area Picker",areaList:W,placeholder:"Select area"}}),n=d(""),u=d(!1),c=({selectedOptions:i})=>{n.value=i.map(o=>o.text).join("/"),u.value=!1},b=()=>{u.value=!1};return(i,o)=>(C(),F(w,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"area",label:e(l)("picker"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(q),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(Q),{"area-list":e(l)("areaList"),onConfirm:c,onCancel:b},null,8,["area-list"])]),_:1},8,["show"])],64))}}),te=V({__name:"FieldTypePicker",setup(k){const l=x({"zh-CN":{picker:"\u9009\u62E9\u5668",placeholder:"\u70B9\u51FB\u9009\u62E9\u57CE\u5E02",textColumns:N["zh-CN"]},"en-US":{picker:"Picker",placeholder:"Select city",textColumns:N["en-US"]}}),n=d(""),u=d(!1),c=({selectedOptions:i})=>{var o;n.value=((o=i[0])==null?void 0:o.text)||"",u.value=!1},b=()=>{u.value=!1};return(i,o)=>(C(),F(w,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"picker",label:e(l)("picker"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(q),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(X),{columns:e(l)("textColumns"),onConfirm:c,onCancel:b},null,8,["columns"])]),_:1},8,["show"])],64))}}),re=V({__name:"FieldTypeCalendar",setup(k){const l=x({"zh-CN":{calendar:"\u65E5\u5386",placeholder:"\u70B9\u51FB\u9009\u62E9\u65E5\u671F"},"en-US":{calendar:"Calendar",placeholder:"Select date"}}),n=d(""),u=d(!1),c=i=>`${i.getMonth()+1}/${i.getDate()}`,b=i=>{n.value=c(i),u.value=!1};return(i,o)=>(C(),F(w,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"calendar",label:e(l)("calendar"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(Y),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",teleport:"body",onConfirm:b},null,8,["show"])],64))}}),se=V({__name:"FieldTypeDatePicker",setup(k){const l=x({"zh-CN":{label:"\u65F6\u95F4\u9009\u62E9",placeholder:"\u70B9\u51FB\u9009\u62E9\u65F6\u95F4"},"en-US":{label:"Datetime Picker",placeholder:"Select time"}}),n=d(""),u=d(!1),c=({selectedValues:i})=>{n.value=i.join("/"),u.value=!1},b=()=>{u.value=!1};return(i,o)=>(C(),F(w,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"datePicker",label:e(l)("label"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(q),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(Z),{onConfirm:c,onCancel:b})]),_:1},8,["show"])],64))}}),ne={style:{margin:"16px 16px 0"}},ie=V({__name:"FieldType",setup(k){const l=x({"zh-CN":{rate:"\u8BC4\u5206",radio:"\u5355\u9009\u6846",submit:"\u63D0\u4EA4",switch:"\u5F00\u5173",slider:"\u6ED1\u5757",picker:"\u9009\u62E9\u5668",stepper:"\u6B65\u8FDB\u5668",checkbox:"\u590D\u9009\u6846",uploader:"\u6587\u4EF6\u4E0A\u4F20",fieldType:"\u8868\u5355\u9879\u7C7B\u578B",checkboxGroup:"\u590D\u9009\u6846\u7EC4",requireCheckbox:"\u8BF7\u52FE\u9009\u590D\u9009\u6846"},"en-US":{rate:"Rate",radio:"Radio",submit:"Submit",switch:"Switch",slider:"Slider",picker:"Picker",stepper:"Stepper",checkbox:"Checkbox",uploader:"Uploader",fieldType:"Field Type",checkboxGroup:"Checkbox Group",requireCheckbox:"Checkbox is required"}}),n=d(3),u=d("1"),c=d(50),b=d(1),i=d([{url:G("leaf.jpeg")}]),o=d(!1),s=d([]),f=d(!1),g=y=>{console.log(y)};return(y,t)=>{const v=P("demo-block");return C(),A(v,{title:e(l)("fieldType")},{default:r(()=>[a(e(E),{onSubmit:g},{default:r(()=>[a(e(D),{inset:""},{default:r(()=>[a(e(m),{name:"switch",label:e(l)("switch")},{input:r(()=>[a(e(H),{modelValue:f.value,"onUpdate:modelValue":t[0]||(t[0]=p=>f.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"checkbox",label:e(l)("checkbox")},{input:r(()=>[a(e(B),{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=p=>o.value=p),shape:"square"},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"checkboxGroup",label:e(l)("checkboxGroup")},{input:r(()=>[a(e(K),{modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=p=>s.value=p),direction:"horizontal"},{default:r(()=>[a(e(B),{name:"1",shape:"square"},{default:r(()=>[h(U(e(l)("checkbox"))+" 1 ",1)]),_:1}),a(e(B),{name:"2",shape:"square"},{default:r(()=>[h(U(e(l)("checkbox"))+" 2 ",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"radio",label:e(l)("radio")},{input:r(()=>[a(e(M),{modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=p=>u.value=p),direction:"horizontal"},{default:r(()=>[a(e(T),{name:"1"},{default:r(()=>[h(U(e(l)("radio"))+" 1",1)]),_:1}),a(e(T),{name:"2"},{default:r(()=>[h(U(e(l)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"stepper",label:e(l)("stepper")},{input:r(()=>[a(e(I),{modelValue:b.value,"onUpdate:modelValue":t[4]||(t[4]=p=>b.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"rate",label:e(l)("rate")},{input:r(()=>[a(e(L),{modelValue:n.value,"onUpdate:modelValue":t[5]||(t[5]=p=>n.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"slider",label:e(l)("slider")},{input:r(()=>[a(e(j),{modelValue:c.value,"onUpdate:modelValue":t[6]||(t[6]=p=>c.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"uploader",label:e(l)("uploader")},{input:r(()=>[a(e(J),{modelValue:i.value,"onUpdate:modelValue":t[7]||(t[7]=p=>i.value=p),"max-count":"2"},null,8,["modelValue"])]),_:1},8,["label"]),a(te),a(se),a(ue),a(re)]),_:1}),$("div",ne,[a(e(S),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[h(U(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),ul=V({__name:"index",setup(k){return(l,n)=>(C(),F(w,null,[a(le),a(oe),a(ie)],64))}});export{ul as default};
