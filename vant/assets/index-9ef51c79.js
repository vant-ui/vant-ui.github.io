import{f as F,p as O,s as w,a as s,g as T}from"./utils-56503f53.js";import{P as A}from"./index-32f9930a.js";import{A as I,u as N,D as U,x as D,e as B,B as E}from"./vue-libs-be453a05.js";import{J as f,p as J,c as K,e as R,U as g}from"./use-translate-769ce24f.js";import{w as S}from"./with-install-d98d04c2.js";const h=new Date().getFullYear(),[_]=K("date-picker"),b=R({},w,{columnsType:{type:Array,default:()=>["year","month","day"]},minDate:{type:Date,default:()=>new Date(h-10,0,1),validator:g},maxDate:{type:Date,default:()=>new Date(h+10,11,31),validator:g}}),j=I({name:_,props:b,emits:["confirm","cancel","change","update:modelValue"],setup(t,{emit:r,slots:y}){const n=N(t.modelValue),x=()=>{const e=t.minDate.getFullYear(),a=t.maxDate.getFullYear();return s(e,a,"year",t.formatter,t.filter)},i=e=>e===t.minDate.getFullYear(),l=e=>e===t.maxDate.getFullYear(),M=e=>e===t.minDate.getMonth()+1,Y=e=>e===t.maxDate.getMonth()+1,c=e=>{const{minDate:a,columnsType:o}=t,m=o.indexOf(e),d=n.value[m];if(d)return+d;switch(e){case"year":return a.getFullYear();case"month":return a.getMonth()+1;case"day":return a.getDate()}},v=()=>{const e=c("year"),a=i(e)?t.minDate.getMonth()+1:1,o=l(e)?t.maxDate.getMonth()+1:12;return s(a,o,"month",t.formatter,t.filter)},V=()=>{const e=c("year"),a=c("month"),o=i(e)&&M(a)?t.minDate.getDate():1,m=l(e)&&Y(a)?t.maxDate.getDate():T(e,a);return s(o,m,"day",t.formatter,t.filter)},u=U(()=>t.columnsType.map(e=>{switch(e){case"year":return x();case"month":return v();case"day":return V();default:return[]}}));D(n,e=>{f(e,t.modelValue)||r("update:modelValue",e)}),D(()=>t.modelValue,e=>{e=F(e,u.value),f(e,n.value)||(n.value=e)},{immediate:!0});const P=(...e)=>r("change",...e),k=(...e)=>r("cancel",...e),C=(...e)=>r("confirm",...e);return()=>B(A,E({modelValue:n.value,"onUpdate:modelValue":e=>n.value=e,columns:u.value,onChange:P,onCancel:k,onConfirm:C},J(t,O)),y)}}),q=S(j),W=q;export{W as V};
