import{F as d}from"./index.bfc6f72d.js";import{C as h}from"./index.ecb55559.js";import{a as b}from"./use-translate.7b7055b3.js";import{A as c,u as m,r as F,o as i,c as f,w as n,e as u,C as e,h as C,t as x,a as v,F as A}from"./vue-libs.d5ee895a.js";import{F as P}from"./index.bc694d47.js";import{B as S}from"./index.516742fc.js";import"./with-install.a0877b0b.js";import"./constant.e12a51b9.js";import"./index.b878185c.js";import"./use-route.55b36618.js";import"./index.bc61928d.js";import"./index.16bdfc10.js";import"./use-id.283fca96.js";import"./use-expose.77504c28.js";import"./index.d7a56972.js";const U=c({__name:"BasicUsage",setup(_){const l=b({"zh-CN":{label:"\u6587\u672C",placeholder:"\u8BF7\u8F93\u5165\u6587\u672C"},"en-US":{label:"Label",placeholder:"Text"}}),o=m("");return(s,t)=>{const a=F("demo-block");return i(),f(a,{title:e(l)("basicUsage")},{default:n(()=>[u(e(h),{inset:""},{default:n(()=>[u(e(d),{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value=r),label:e(l)("label"),placeholder:e(l)("placeholder")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),w=c({__name:"CustomType",setup(_){const l=b({"zh-CN":{text:"\u6587\u672C",digit:"\u6574\u6570",phone:"\u624B\u673A\u53F7",number:"\u6570\u5B57",customType:"\u81EA\u5B9A\u4E49\u7C7B\u578B",smsPlaceholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801",textPlaceholder:"\u8BF7\u8F93\u5165\u6587\u672C",digitPlaceholder:"\u8BF7\u8F93\u5165\u6574\u6570",phonePlaceholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",numberPlaceholder:"\u8BF7\u8F93\u5165\u6570\u5B57\uFF08\u652F\u6301\u5C0F\u6570\uFF09",passwordPlaceholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},"en-US":{text:"Text",digit:"Digit",phone:"Phone",number:"Number",customType:"Custom Type",smsPlaceholder:"SMS",textPlaceholder:"Text",digitPlaceholder:"Digit",phonePlaceholder:"Phone",numberPlaceholder:"Number",passwordPlaceholder:"Password"}}),o=m(""),s=m(""),t=m(""),a=m(""),r=m("");return(B,p)=>{const g=F("demo-block");return i(),f(g,{title:e(l)("customType")},{default:n(()=>[u(e(h),{inset:""},{default:n(()=>[u(e(P),null,{default:n(()=>[u(e(d),{modelValue:o.value,"onUpdate:modelValue":p[0]||(p[0]=V=>o.value=V),label:e(l)("text"),placeholder:e(l)("textPlaceholder"),autocomplete:"off"},null,8,["modelValue","label","placeholder"]),u(e(d),{modelValue:s.value,"onUpdate:modelValue":p[1]||(p[1]=V=>s.value=V),type:"tel",label:e(l)("phone"),placeholder:e(l)("phonePlaceholder")},null,8,["modelValue","label","placeholder"]),u(e(d),{modelValue:t.value,"onUpdate:modelValue":p[2]||(p[2]=V=>t.value=V),type:"digit",label:e(l)("digit"),placeholder:e(l)("digitPlaceholder")},null,8,["modelValue","label","placeholder"]),u(e(d),{modelValue:a.value,"onUpdate:modelValue":p[3]||(p[3]=V=>a.value=V),type:"number",label:e(l)("number"),placeholder:e(l)("numberPlaceholder")},null,8,["modelValue","label","placeholder"]),u(e(d),{modelValue:r.value,"onUpdate:modelValue":p[4]||(p[4]=V=>r.value=V),type:"password",label:e(l)("password"),placeholder:e(l)("passwordPlaceholder"),autocomplete:"off"},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1})]),_:1},8,["title"])}}}),E=c({__name:"Disabled",setup(_){const l=b({"zh-CN":{text:"\u6587\u672C",disabled:"\u7981\u7528\u8F93\u5165\u6846",inputReadonly:"\u8F93\u5165\u6846\u53EA\u8BFB",inputDisabled:"\u8F93\u5165\u6846\u5DF2\u7981\u7528"},"en-US":{text:"Text",inputReadonly:"Input Readonly",inputDisabled:"Input Disabled"}});return(o,s)=>{const t=F("demo-block");return i(),f(t,{title:e(l)("disabled")},{default:n(()=>[u(e(h),{inset:""},{default:n(()=>[u(e(d),{"model-value":e(l)("inputReadonly"),label:e(l)("text"),readonly:""},null,8,["model-value","label"]),u(e(d),{"model-value":e(l)("inputDisabled"),label:e(l)("text"),disabled:""},null,8,["model-value","label"])]),_:1})]),_:1},8,["title"])}}}),k=c({__name:"ShowIcon",setup(_){const l=b({"zh-CN":{text:"\u6587\u672C",showIcon:"\u663E\u793A\u56FE\u6807",showClearIcon:"\u663E\u793A\u6E05\u9664\u56FE\u6807"},"en-US":{text:"Text",showIcon:"Show Icon",showClearIcon:"Show Clear Icon"}}),o=m(""),s=m("123");return(t,a)=>{const r=F("demo-block");return i(),f(r,{title:e(l)("showIcon")},{default:n(()=>[u(e(h),{inset:""},{default:n(()=>[u(e(d),{modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=B=>o.value=B),label:e(l)("text"),"left-icon":"smile-o","right-icon":"warning-o",placeholder:e(l)("showIcon")},null,8,["modelValue","label","placeholder"]),u(e(d),{modelValue:s.value,"onUpdate:modelValue":a[1]||(a[1]=B=>s.value=B),clearable:"",label:e(l)("text"),"left-icon":"music-o",placeholder:e(l)("showClearIcon")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),I=c({__name:"ErrorInfo",setup(_){const l=b({"zh-CN":{phone:"\u624B\u673A\u53F7",errorInfo:"\u9519\u8BEF\u63D0\u793A",phoneError:"\u624B\u673A\u53F7\u683C\u5F0F\u9519\u8BEF",phonePlaceholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7",usernamePlaceholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"},"en-US":{phone:"Phone",errorInfo:"Error Info",phoneError:"Invalid phone",phonePlaceholder:"Phone",usernamePlaceholder:"Username"}}),o=m("123"),s=m("");return(t,a)=>{const r=F("demo-block");return i(),f(r,{title:e(l)("errorInfo")},{default:n(()=>[u(e(h),{inset:""},{default:n(()=>[u(e(d),{modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=B=>s.value=B),error:"",required:"",label:e(l)("username"),placeholder:e(l)("usernamePlaceholder")},null,8,["modelValue","label","placeholder"]),u(e(d),{modelValue:o.value,"onUpdate:modelValue":a[1]||(a[1]=B=>o.value=B),required:"",label:e(l)("phone"),placeholder:e(l)("phonePlaceholder"),"error-message":e(l)("phoneError")},null,8,["modelValue","label","placeholder","error-message"])]),_:1})]),_:1},8,["title"])}}}),y=c({__name:"InsertButton",setup(_){const l=b({"zh-CN":{sms:"\u77ED\u4FE1\u9A8C\u8BC1\u7801",sendSMS:"\u53D1\u9001\u9A8C\u8BC1\u7801",insertButton:"\u63D2\u5165\u6309\u94AE",smsPlaceholder:"\u8BF7\u8F93\u5165\u77ED\u4FE1\u9A8C\u8BC1\u7801"},"en-US":{sms:"SMS",sendSMS:"Send SMS",insertButton:"Insert Button",smsPlaceholder:"SMS"}}),o=m("");return(s,t)=>{const a=F("demo-block");return i(),f(a,{title:e(l)("insertButton")},{default:n(()=>[u(e(h),{inset:""},{default:n(()=>[u(e(d),{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value=r),center:"",clearable:"",label:e(l)("sms"),placeholder:e(l)("smsPlaceholder")},{button:n(()=>[u(e(S),{size:"small",type:"primary"},{default:n(()=>[C(x(e(l)("sendSMS")),1)]),_:1})]),_:1},8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),z=c({__name:"FormatValue",setup(_){const l=b({"zh-CN":{text:"\u6587\u672C",formatValue:"\u683C\u5F0F\u5316\u8F93\u5165\u5185\u5BB9",formatOnBlur:"\u5728\u5931\u7126\u65F6\u6267\u884C\u683C\u5F0F\u5316",formatOnChange:"\u5728\u8F93\u5165\u65F6\u6267\u884C\u683C\u5F0F\u5316"},"en-US":{text:"Text",formatValue:"Format Value",formatOnBlur:"Format On Blur",formatOnChange:"Format On Change"}}),o=m(""),s=m(""),t=a=>a.replace(/\d/g,"");return(a,r)=>{const B=F("demo-block");return i(),f(B,{title:e(l)("formatValue")},{default:n(()=>[u(e(h),{inset:""},{default:n(()=>[u(e(d),{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=p=>o.value=p),label:e(l)("text"),formatter:t,placeholder:e(l)("formatOnChange")},null,8,["modelValue","label","placeholder"]),u(e(d),{modelValue:s.value,"onUpdate:modelValue":r[1]||(r[1]=p=>s.value=p),label:e(l)("text"),formatter:t,"format-trigger":"onBlur",placeholder:e(l)("formatOnBlur")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),D=c({__name:"Autosize",setup(_){const l=b({"zh-CN":{message:"\u7559\u8A00",autosize:"\u9AD8\u5EA6\u81EA\u9002\u5E94",placeholder:"\u8BF7\u8F93\u5165\u7559\u8A00"},"en-US":{sms:"SMS",autosize:"Auto Resize",placeholder:"Message"}}),o=m("");return(s,t)=>{const a=F("demo-block");return i(),f(a,{title:e(l)("autosize")},{default:n(()=>[u(e(h),{inset:""},{default:n(()=>[u(e(d),{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value=r),autosize:"",rows:"1",type:"textarea",label:e(l)("message"),placeholder:e(l)("placeholder")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),N=c({__name:"ShowWordLimit",setup(_){const l=b({"zh-CN":{message:"\u7559\u8A00",placeholder:"\u8BF7\u8F93\u5165\u7559\u8A00",showWordLimit:"\u663E\u793A\u5B57\u6570\u7EDF\u8BA1"},"en-US":{message:"Message",placeholder:"Message",showWordLimit:"Show Word Limit"}}),o=m("");return(s,t)=>{const a=F("demo-block");return i(),f(a,{title:e(l)("showWordLimit")},{default:n(()=>[u(e(h),{inset:""},{default:n(()=>[u(e(d),{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value=r),autosize:"","show-word-limit":"",rows:"2",type:"textarea",maxlength:"50",label:e(l)("message"),placeholder:e(l)("placeholder")},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),T=c({__name:"InputAlign",setup(_){const l=b({"zh-CN":{text:"\u6587\u672C",inputAlign:"\u8F93\u5165\u6846\u5185\u5BB9\u5BF9\u9F50",alignPlaceHolder:"\u8F93\u5165\u6846\u5185\u5BB9\u53F3\u5BF9\u9F50"},"en-US":{text:"Text",inputAlign:"Input Align",alignPlaceHolder:"Input Align Right"}}),o=m("");return(s,t)=>{const a=F("demo-block");return i(),f(a,{title:e(l)("inputAlign")},{default:n(()=>[u(e(h),{inset:""},{default:n(()=>[u(e(d),{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value=r),label:e(l)("text"),placeholder:e(l)("alignPlaceHolder"),"input-align":"right"},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),M=c({__name:"LabelAlign",setup(_){const l=b({"zh-CN":{text:"\u624B\u673A\u53F7",labelAlign:"\u8F93\u5165\u6846\u6587\u672C\u4F4D\u7F6E",alignPlaceHolder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7"},"en-US":{text:"Tel",labelAlign:"Label Align",alignPlaceHolder:"Please input tel number"}}),o=m("");return(s,t)=>{const a=F("demo-block");return i(),f(a,{title:e(l)("labelAlign")},{default:n(()=>[u(e(h),{inset:""},{default:n(()=>[u(e(d),{modelValue:o.value,"onUpdate:modelValue":t[0]||(t[0]=r=>o.value=r),label:e(l)("text"),placeholder:e(l)("alignPlaceHolder"),"label-align":"top"},null,8,["modelValue","label","placeholder"])]),_:1})]),_:1},8,["title"])}}}),ee=c({__name:"index",setup(_){return(l,o)=>(i(),v(A,null,[u(U),u(w),u(E),u(k),u(I),u(y),u(z),u(D),u(N),u(T),u(M)],64))}});export{ee as default};
