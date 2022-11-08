import{V as E}from"./index.ae023657.js";import{V as m}from"./index.69385bb0.js";import{V as D}from"./index.8e37fe56.js";import{V as S}from"./index.05e3ab24.js";import{a as F}from"./use-translate.d2900b8c.js";import{z as f,C as d,r as P,o as k,c as q,w as r,e as a,B as e,d as A,h,t as U,a as x,F as w}from"./vue-libs.b44bc779.js";import{T}from"./function-call.509e41a7.js";import{c as G}from"./index.d8fe3225.js";import{V as N}from"./index.aafdbda8.js";import{V as R,b as z}from"./index.1afd4cec.js";import{V as M}from"./index.5398e4f6.js";import{V as L}from"./index.fd5fe6e1.js";import{V as j}from"./index.f0e40152.js";import{V as g}from"./index.af271955.js";import{V as I}from"./index.a0580ec0.js";import{V as H}from"./index.40b20c59.js";import{a as J,V as K}from"./index.esm.8557c7ad.js";import{V as $}from"./index.e6e790ed.js";import{a as O}from"./area-en.345d80e1.js";import{V as Q}from"./index.97971141.js";import{V as W}from"./index.f23f5679.js";import{V as X}from"./index.e0b99467.js";import"./with-install.19a35764.js";import"./constant.80c6de18.js";import"./use-expose.c942d5f8.js";import"./index.490ce1c3.js";import"./use-route.82f2be69.js";import"./index.b70c9b40.js";import"./use-id.46df47b7.js";import"./index.4e4daaac.js";import"./mount-component.f3744995.js";import"./use-refs.b3168e03.js";import"./use-touch.04ca7093.js";import"./Checker.862ecffc.js";import"./interceptor.f0c85874.js";import"./function-call.f7305c66.js";import"./index.1461a543.js";import"./on-popup-reopen.138c77eb.js";import"./index.45d743b7.js";import"./deep-clone.931caa9d.js";import"./Picker.483100d2.js";import"./use-lazy-render.f712e85e.js";import"./index.d46e53a8.js";import"./utils.7f5ee97d.js";import"./use-height.f6deaa0a.js";const Y={style:{margin:"16px 16px 0"}},Z=f({__name:"BasicUsage",setup(C){const l=F({"zh-CN":{submit:"\u63D0\u4EA4",username:"\u7528\u6237\u540D",password:"\u5BC6\u7801",requireUsername:"\u8BF7\u586B\u5199\u7528\u6237\u540D",requirePassword:"\u8BF7\u586B\u5199\u5BC6\u7801"},"en-US":{submit:"Submit",username:"Username",password:"Password",requireUsername:"Username is required",requirePassword:"Password is required"}}),s=d(""),u=d(""),c=i=>{console.log("submit",i)},b=i=>{console.log("failed",i)};return(i,o)=>{const n=P("demo-block");return k(),q(n,{title:e(l)("basicUsage")},{default:r(()=>[a(e(E),{onSubmit:c,onFailed:b},{default:r(()=>[a(e(S),{inset:""},{default:r(()=>[a(e(m),{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=v=>s.value=v),name:"username",label:e(l)("username"),rules:[{required:!0,message:e(l)("requireUsername")}],placeholder:e(l)("username")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:u.value,"onUpdate:modelValue":o[1]||(o[1]=v=>u.value=v),type:"password",name:"password",label:e(l)("password"),rules:[{required:!0,message:e(l)("requirePassword")}],placeholder:e(l)("password")},null,8,["modelValue","label","rules","placeholder"])]),_:1}),A("div",Y,[a(e(D),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[h(U(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),ee={style:{margin:"16px 16px 0"}},le=f({__name:"ValidateRules",setup(C){const l=F({"zh-CN":{label:"\u6587\u672C",title:"\u6821\u9A8C\u89C4\u5219",submit:"\u63D0\u4EA4",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u5185\u5BB9",invalid:t=>`${t} \u4E0D\u5408\u6CD5\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165`,pattern:"\u6B63\u5219\u6821\u9A8C",validator:"\u51FD\u6570\u6821\u9A8C",validating:"\u9A8C\u8BC1\u4E2D...",asyncValidator:"\u5F02\u6B65\u51FD\u6570\u6821\u9A8C",validatorMessage:"\u6821\u9A8C\u51FD\u6570\u8FD4\u56DE\u9519\u8BEF\u63D0\u793A"},"en-US":{label:"Label",title:"Validate Rules",submit:"Submit",message:"Error message",invalid:t=>`${t} is invalid`,pattern:"Use pattern",validator:"Use validator",validating:"Validating...",asyncValidator:"Use async validator",validatorMessage:"Use validator to return message"}}),s=d(""),u=d(""),c=d("abc"),b=d(""),i=/\d{6}/,o=t=>/1\d{10}/.test(t),n=t=>l("invalid",t),v=t=>new Promise(V=>{T.loading(l("validating")),setTimeout(()=>{T.clear(),V(t==="1234")},1e3)}),B=t=>{console.log("submit",t)},y=t=>{console.log("failed",t)};return(t,V)=>{const p=P("demo-block");return k(),q(p,{title:e(l)("title")},{default:r(()=>[a(e(E),{onSumbit:B,onFailed:y},{default:r(()=>[a(e(S),{inset:""},{default:r(()=>[a(e(m),{modelValue:s.value,"onUpdate:modelValue":V[0]||(V[0]=_=>s.value=_),name:"pattern",label:e(l)("label"),rules:[{pattern:i,message:e(l)("message")}],placeholder:e(l)("pattern")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:u.value,"onUpdate:modelValue":V[1]||(V[1]=_=>u.value=_),name:"validator",label:e(l)("label"),rules:[{validator:o,message:e(l)("message")}],placeholder:e(l)("validator")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:c.value,"onUpdate:modelValue":V[2]||(V[2]=_=>c.value=_),name:"validatorMessage",label:e(l)("label"),rules:[{validator:n}],placeholder:e(l)("validatorMessage")},null,8,["modelValue","label","rules","placeholder"]),a(e(m),{modelValue:b.value,"onUpdate:modelValue":V[3]||(V[3]=_=>b.value=_),name:"asyncValidator",label:e(l)("label"),rules:[{validator:v,message:e(l)("message")}],placeholder:e(l)("asyncValidator")},null,8,["modelValue","label","rules","placeholder"])]),_:1}),A("div",ee,[a(e(D),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[h(U(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),ae=f({__name:"FieldTypeArea",setup(C){const l=F({"zh-CN":{picker:"\u5730\u533A\u9009\u62E9",areaList:J,placeholder:"\u70B9\u51FB\u9009\u62E9\u7701\u5E02\u533A"},"en-US":{picker:"Area Picker",areaList:O,placeholder:"Select area"}}),s=d(""),u=d(!1),c=i=>{s.value=i.filter(o=>!!o).map(o=>o.name).join("/"),u.value=!1},b=()=>{u.value=!1};return(i,o)=>(k(),x(w,null,[a(e(m),{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=n=>s.value=n),"is-link":"",readonly:"",name:"area",label:e(l)("picker"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=n=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e($),{show:u.value,"onUpdate:show":o[2]||(o[2]=n=>u.value=n),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(K),{"area-list":e(l)("areaList"),onConfirm:c,onCancel:b},null,8,["area-list"])]),_:1},8,["show"])],64))}}),oe=f({__name:"FieldTypePicker",setup(C){const l=F({"zh-CN":{picker:"\u9009\u62E9\u5668",placeholder:"\u70B9\u51FB\u9009\u62E9\u57CE\u5E02",textColumns:["\u676D\u5DDE","\u5B81\u6CE2","\u6E29\u5DDE","\u5609\u5174","\u6E56\u5DDE"]},"en-US":{picker:"Picker",placeholder:"Select city",textColumns:["Delaware","Florida","Georqia","Indiana","Maine"]}}),s=d(""),u=d(!1),c=i=>{s.value=i,u.value=!1},b=()=>{u.value=!1};return(i,o)=>(k(),x(w,null,[a(e(m),{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=n=>s.value=n),"is-link":"",readonly:"",name:"picker",label:e(l)("picker"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=n=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e($),{show:u.value,"onUpdate:show":o[2]||(o[2]=n=>u.value=n),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(Q),{columns:e(l)("textColumns"),onConfirm:c,onCancel:b},null,8,["columns"])]),_:1},8,["show"])],64))}}),ue=f({__name:"FieldTypeCalendar",setup(C){const l=F({"zh-CN":{calendar:"\u65E5\u5386",placeholder:"\u70B9\u51FB\u9009\u62E9\u65E5\u671F"},"en-US":{calendar:"Calendar",placeholder:"Select date"}}),s=d(""),u=d(!1),c=i=>`${i.getMonth()+1}/${i.getDate()}`,b=i=>{s.value=c(i),u.value=!1};return(i,o)=>(k(),x(w,null,[a(e(m),{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=n=>s.value=n),"is-link":"",readonly:"",name:"calendar",label:e(l)("calendar"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=n=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e(W),{show:u.value,"onUpdate:show":o[2]||(o[2]=n=>u.value=n),round:"",teleport:"body",onConfirm:b},null,8,["show"])],64))}}),te=f({__name:"FieldTypeDatetimePicker",setup(C){const l=F({"zh-CN":{label:"\u65F6\u95F4\u9009\u62E9",placeholder:"\u70B9\u51FB\u9009\u62E9\u65F6\u95F4"},"en-US":{label:"Datetime Picker",placeholder:"Select time"}}),s=d(""),u=d(!1),c=i=>{s.value=i,u.value=!1},b=()=>{u.value=!1};return(i,o)=>(k(),x(w,null,[a(e(m),{modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=n=>s.value=n),"is-link":"",readonly:"",name:"datetimePicker",label:e(l)("label"),placeholder:e(l)("placeholder"),onClick:o[1]||(o[1]=n=>u.value=!0)},null,8,["modelValue","label","placeholder"]),a(e($),{show:u.value,"onUpdate:show":o[2]||(o[2]=n=>u.value=n),round:"",position:"bottom",teleport:"body"},{default:r(()=>[a(e(X),{type:"time",onConfirm:c,onCancel:b})]),_:1},8,["show"])],64))}}),re={style:{margin:"16px 16px 0"}},ne=f({__name:"FieldType",setup(C){const l=F({"zh-CN":{rate:"\u8BC4\u5206",radio:"\u5355\u9009\u6846",submit:"\u63D0\u4EA4",switch:"\u5F00\u5173",slider:"\u6ED1\u5757",picker:"\u9009\u62E9\u5668",stepper:"\u6B65\u8FDB\u5668",checkbox:"\u590D\u9009\u6846",uploader:"\u6587\u4EF6\u4E0A\u4F20",fieldType:"\u8868\u5355\u9879\u7C7B\u578B",checkboxGroup:"\u590D\u9009\u6846\u7EC4",requireCheckbox:"\u8BF7\u52FE\u9009\u590D\u9009\u6846"},"en-US":{rate:"Rate",radio:"Radio",submit:"Submit",switch:"Switch",slider:"Slider",picker:"Picker",stepper:"Stepper",checkbox:"Checkbox",uploader:"Uploader",fieldType:"Field Type",checkboxGroup:"Checkbox Group",requireCheckbox:"Checkbox is required"}}),s=d(3),u=d("1"),c=d(50),b=d(1),i=d([{url:G("leaf.jpeg")}]),o=d(!1),n=d([]),v=d(!1),B=y=>{console.log(y)};return(y,t)=>{const V=P("demo-block");return k(),q(V,{title:e(l)("fieldType")},{default:r(()=>[a(e(E),{onSubmit:B},{default:r(()=>[a(e(S),{inset:""},{default:r(()=>[a(e(m),{name:"switch",label:e(l)("switch")},{input:r(()=>[a(e(L),{modelValue:v.value,"onUpdate:modelValue":t[0]||(t[0]=p=>v.value=p),size:"20"},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"checkbox",label:e(l)("checkbox")},{input:r(()=>[a(e(g),{modelValue:o.value,"onUpdate:modelValue":t[1]||(t[1]=p=>o.value=p),shape:"square"},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"checkboxGroup",label:e(l)("checkboxGroup")},{input:r(()=>[a(e(H),{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=p=>n.value=p),direction:"horizontal"},{default:r(()=>[a(e(g),{name:"1",shape:"square"},{default:r(()=>[h(U(e(l)("checkbox"))+" 1 ",1)]),_:1}),a(e(g),{name:"2",shape:"square"},{default:r(()=>[h(U(e(l)("checkbox"))+" 2 ",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"radio",label:e(l)("radio")},{input:r(()=>[a(e(R),{modelValue:u.value,"onUpdate:modelValue":t[3]||(t[3]=p=>u.value=p),direction:"horizontal"},{default:r(()=>[a(e(z),{name:"1"},{default:r(()=>[h(U(e(l)("radio"))+" 1",1)]),_:1}),a(e(z),{name:"2"},{default:r(()=>[h(U(e(l)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"stepper",label:e(l)("stepper")},{input:r(()=>[a(e(j),{modelValue:b.value,"onUpdate:modelValue":t[4]||(t[4]=p=>b.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"rate",label:e(l)("rate")},{input:r(()=>[a(e(N),{modelValue:s.value,"onUpdate:modelValue":t[5]||(t[5]=p=>s.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"slider",label:e(l)("slider")},{input:r(()=>[a(e(M),{modelValue:c.value,"onUpdate:modelValue":t[6]||(t[6]=p=>c.value=p)},null,8,["modelValue"])]),_:1},8,["label"]),a(e(m),{name:"uploader",label:e(l)("uploader")},{input:r(()=>[a(e(I),{modelValue:i.value,"onUpdate:modelValue":t[7]||(t[7]=p=>i.value=p),"max-count":"2"},null,8,["modelValue"])]),_:1},8,["label"]),a(oe),a(te),a(ae),a(ue)]),_:1}),A("div",re,[a(e(D),{round:"",block:"",type:"primary","native-type":"submit"},{default:r(()=>[h(U(e(l)("submit")),1)]),_:1})])]),_:1})]),_:1},8,["title"])}}}),Ze=f({__name:"index",setup(C){return(l,s)=>(k(),x(w,null,[a(Z),a(le),a(ne)],64))}});export{Ze as default};
