import{F as D}from"./index.19e17622.js";import{F as m}from"./index.c5d91945.js";import{B as E}from"./index.16d2686f.js";import{C as S}from"./index.2e838da1.js";import{a as _}from"./use-translate.fbf36f21.js";import{z as V,D as d,r as P,o as C,c as q,w as r,e as a,B as e,d as A,h as U,t as x,a as w,F}from"./vue-libs.bf80eadf.js";import{T as z}from"./function-call.105b6793.js";import{R as N}from"./index.414eba4a.js";import{a as T,R as G}from"./index.0de70232.js";import{S as R}from"./index.149d965d.js";import{S as M}from"./index.7e42192d.js";import{S as L}from"./index.cdfc4bba.js";import{C as y}from"./index.fb1f7cb4.js";import{U as j}from"./index.5c813424.js";import{C as I}from"./index.95a86c56.js";import{a as H,A as J}from"./index.esm.063f6623.js";import{P as $}from"./index.6b877abf.js";import{a as K}from"./area-en.345d80e1.js";import{P as O}from"./index.d20ace21.js";import{C as Q}from"./index.94dfb95c.js";import{D as W}from"./index.c3cde1ca.js";import"./with-install.251697cd.js";import"./constant.80c6de18.js";import"./use-expose.8d47dba2.js";import"./index.e9ec9dce.js";import"./use-route.9fd68ea8.js";import"./index.f1bbf430.js";import"./use-id.139c5032.js";import"./index.d99a07cf.js";import"./mount-component.985a4079.js";import"./use-refs.1bd4ff6f.js";import"./use-touch.9de12470.js";import"./Checker.9f9fefc2.js";import"./interceptor.12fa8767.js";import"./function-call.3e174eab.js";import"./index.47538ae0.js";import"./on-popup-reopen.e08ee506.js";import"./index.7b063491.js";import"./deep-clone.81db9f91.js";import"./Picker.7b337912.js";import"./use-lazy-render.d79b7d1e.js";import"./index.c2caac4e.js";import"./utils.048b262b.js";import"./use-height.a6137a9c.js";const X={style:{margin:"16px 16px 0"}},Y=V({setup(k){const l=_({"zh-CN":{submit:"\u63D0\u4EA4",username:"\u7528\u6237\u540D",password:"\u5BC6\u7801",requireUsername:"\u8BF7\u586B\u5199\u7528\u6237\u540D",requirePassword:"\u8BF7\u586B\u5199\u5BC6\u7801"},"en-US":{submit:"Submit",username:"Username",password:"Password",requireUsername:"Username is required",requirePassword:"Password is required"}}),n=d(""),u=d(""),c=i=>{console.log("submit",i)},b=i=>{console.log("failed",i)};return(i,o)=>{const s=P("demo-block");return C(),q(s,{title:e(l)("basicUsage")},{default:r(()=>[a(e(D),{onSubmit:c,onFailed:b},{default:r(()=>[a(e(S),{inset:""},{default:r(()=>[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=f=>n.value=f),name:"username",label:e(l)("username"),rules:[{required:!0,message:e(l)("requireUsername")}],placeholder:e(l)("username")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=f=>u.value=f),type:"password",name:"password",label:e(l)("password"),rules:[{required:!0,message:e(l)("requirePassword")}],placeholder:e(l)("password")},null,8,["modelValue","label","rules","placeholder"])]),_:1}),A("div",X,[a(e(E),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[U(x(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),Z={style:{margin:"16px 16px 0"}},ee=V({setup(k){const l=_({"zh-CN":{label:"\u6587\u672C",title:"\u6821\u9A8C\u89C4\u5219",submit:"\u63D0\u4EA4",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9",invalid:t=>`${t} \u4E0D\u5408\u6CD5\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165`,pattern:"\u6B63\u5219\u6821\u9A8C",validator:"\u51FD\u6570\u6821\u9A8C",validating:"\u9A8C\u8BC1\u4E2D...",asyncValidator:"\u5F02\u6B65\u51FD\u6570\u6821\u9A8C",validatorMessage:"\u6821\u9A8C\u51FD\u6570\u8FD4\u56DE\u9519\u8BEF\u63D0\u793A"},"en-US":{label:"Label",title:"Validate Rules",submit:"Submit",message:"Error message",invalid:t=>`${t} is invalid`,pattern:"Use pattern",validator:"Use validator",validating:"Validating...",asyncValidator:"Use async validator",validatorMessage:"Use validator to return message"}}),n=d(""),u=d(""),c=d("abc"),b=d(""),i=/\d{6}/,o=t=>/1\d{10}/.test(t),s=t=>l("invalid",t),f=t=>new Promise(v=>{z.loading(l("validating")),setTimeout(()=>{z.clear(),v(t==="1234")},1e3)}),g=t=>{console.log("submit",t)},B=t=>{console.log("failed",t)};return(t,v)=>{const p=P("demo-block");return C(),q(p,{title:e(l)("title")},{default:r(()=>[a(e(D),{onSumbit:g,onFailed:B},{default:r(()=>[a(e(S),{inset:""},{default:r(()=>[a(e(m),{modelValue:n.value,"onUpdate:modelValue":v[0]||(v[0]=h=>n.value=h),name:"pattern",label:e(l)("label"),rules:[{pattern:i,message:e(l)("message")}],placeholder:e(l)("pattern")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:u.value,"onUpdate:modelValue":v[1]||(v[1]=h=>u.value=h),name:"validator",label:e(l)("label"),rules:[{validator:o,message:e(l)("message")}],placeholder:e(l)("validator")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:c.value,"onUpdate:modelValue":v[2]||(v[2]=h=>c.value=h),name:"validatorMessage",label:e(l)("label"),rules:[{validator:s}],placeholder:e(l)("validatorMessage")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:b.value,"onUpdate:modelValue":v[3]||(v[3]=h=>b.value=h),name:"asyncValidator",label:e(l)("label"),rules:[{validator:f,message:e(l)("message")}],placeholder:e(l)("asyncValidator")},null,8,["modelValue","label","rules","placeholder"])]),_:1}),A("div",Z,[a(e(E),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[U(x(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),le=V({setup(k){const l=_({"zh-CN":{picker:"\u5730\u533A\u9009\u62E9",areaList:H,placeholder:"\u70B9\u51FB\u9009\u62E9\u7701\u5E02\u533A"},"en-US":{picker:"Area Picker",areaList:K,placeholder:"Select area"}}),n=d(""),u=d(!1),c=i=>{n.value=i.filter(o=>!!o).map(o=>o.name).join("/"),u.value=!1},b=()=>{u.value=!1};return(i,o)=>(C(),w(F,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"area",label:e(l)("picker"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e($),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(J),{"area-list":e(l)("areaList"),onConfirm:c,onCancel:b},null,8,["area-list"])]),_:1},8,["show"])],64))}}),ae=V({setup(k){const l=_({"zh-CN":{picker:"\u9009\u62E9\u5668",placeholder:"\u70B9\u51FB\u9009\u62E9\u57CE\u5E02",textColumns:["\u676D\u5DDE","\u5B81\u6CE2","\u6E29\u5DDE","\u5609\u5174","\u6E56\u5DDE"]},"en-US":{picker:"Picker",placeholder:"Select city",textColumns:["Delaware","Florida","Georqia","Indiana","Maine"]}}),n=d(""),u=d(!1),c=i=>{n.value=i,u.value=!1},b=()=>{u.value=!1};return(i,o)=>(C(),w(F,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"picker",label:e(l)("picker"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e($),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(O),{columns:e(l)("textColumns"),onConfirm:c,onCancel:b},null,8,["columns"])]),_:1},8,["show"])],64))}}),oe=V({setup(k){const l=_({"zh-CN":{calendar:"\u65E5\u5386",placeholder:"\u70B9\u51FB\u9009\u62E9\u65E5\u671F"},"en-US":{calendar:"Calendar",placeholder:"Select date"}}),n=d(""),u=d(!1),c=i=>`${i.getMonth()+1}/${i.getDate()}`,b=i=>{n.value=c(i),u.value=!1};return(i,o)=>(C(),w(F,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"calendar",label:e(l)("calendar"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(Q),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",teleport:"body",onConfirm:b},null,8,["show"])],64))}}),ue=V({setup(k){const l=_({"zh-CN":{label:"\u65F6\u95F4\u9009\u62E9",placeholder:"\u70B9\u51FB\u9009\u62E9\u65F6\u95F4"},"en-US":{label:"Datetime Picker",placeholder:"Select time"}}),n=d(""),u=d(!1),c=i=>{n.value=i,u.value=!1},b=()=>{u.value=!1};return(i,o)=>(C(),w(F,null,[a(e(m),{modelValue:n.value,"onUpdate:modelValue":o[0]||(o[0]=s=>n.value=s),"is-link":"",readonly:"",name:"datetimePicker",label:e(l)("label"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=s=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e($),{show:u.value,"onUpdate:show":o[2]||(o[2]=s=>u.value=s),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(W),{type:"time",onConfirm:c,onCancel:b})]),_:1},8,["show"])],64))}}),te={style:{margin:"16px 16px 0"}},re=V({setup(k){const l=_({"zh-CN":{rate:"\u8BC4\u5206",radio:"\u5355\u9009\u6846",submit:"\u63D0\u4EA4",switch:"\u5F00\u5173",slider:"\u6ED1\u5757",picker:"\u9009\u62E9\u5668",stepper:"\u6B65\u8FDB\u5668",checkbox:"\u590D\u9009\u6846",uploader:"\u6587\u4EF6\u4E0A\u4F20",fieldType:"\u8868\u5355\u9879\u7C7B\u578B",checkboxGroup:"\u590D\u9009\u6846\u7EC4",requireCheckbox:"\u8BF7\u52FE\u9009\u590D\u9009\u6846"},"en-US":{rate:"Rate",radio:"Radio",submit:"Submit",switch:"Switch",slider:"Slider",picker:"Picker",stepper:"Stepper",checkbox:"Checkbox",uploader:"Uploader",fieldType:"Field Type",checkboxGroup:"Checkbox Group",requireCheckbox:"Checkbox is required"}}),n=d(3),u=d("1"),c=d(50),b=d(1),i=d([{url:"https://img.yzcdn.cn/vant/leaf.jpg"}]),o=d(!1),s=d([]),f=d(!1),g=B=>{console.log(B)};return(B,t)=>{const v=P("demo-block");return C(),q(v,{title:e(l)("fieldType")},{default:r(()=>[a(e(D),{onSubmit:g},{default:r(()=>[a(e(S),{inset:""},{default:r(()=>[a(e(m),{name:"switch",label:e(l)("switch")},{input:r(()=>[a(e(M),{modelValue:f.value,"onUpdate:modelValue":t[0]||(t[0]=p=>f.value=p),size:"20"},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"checkbox",label:e(l)("checkbox")},{input:r(()=>[a(e(y),{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=p=>o.value=p),shape:"square"},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"checkboxGroup",label:e(l)("checkboxGroup")},{input:r(()=>[a(e(I),{modelValue:s.value,"onUpdate:modelValue":t[2]||(t[2]=p=>s.value=p),direction:"horizontal"},{default:r(()=>[a(e(y),{name:"1",shape:"square"},{default:r(()=>[U(x(e(l)("checkbox"))+" 1 ",1)]),_:1}),a(e(y),{name:"2",shape:"square"},{default:r(()=>[U(x(e(l)("checkbox"))+" 2 ",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"radio",label:e(l)("radio")},{input:r(()=>[a(e(T),{modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=p=>u.value=p),direction:"horizontal"},{default:r(()=>[a(e(G),{name:"1"},{default:r(()=>[U(x(e(l)("radio"))+" 1",1)]),_:1}),a(e(G),{name:"2"},{default:r(()=>[U(x(e(l)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"stepper",label:e(l)("stepper")},{input:r(()=>[a(e(L),{modelValue:b.value,"onUpdate:modelValue":t[4]||(t[4]=p=>b.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"rate",label:e(l)("rate")},{input:r(()=>[a(e(N),{modelValue:n.value,"onUpdate:modelValue":t[5]||(t[5]=p=>n.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"slider",label:e(l)("slider")},{input:r(()=>[a(e(R),{modelValue:c.value,"onUpdate:modelValue":t[6]||(t[6]=p=>c.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"uploader",label:e(l)("uploader")},{input:r(()=>[a(e(j),{modelValue:i.value,"onUpdate:modelValue":t[7]||(t[7]=p=>i.value=p),"max-count":"2"},null,8,["modelValue"])]),_:1},8,["label"]),a(ae),a(ue),a(le),a(oe)]),_:1}),A("div",te,[a(e(E),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[U(x(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),Xe=V({setup(k){return(l,n)=>(C(),w(F,null,[a(Y),a(ee),a(re)],64))}});export{Xe as default};
