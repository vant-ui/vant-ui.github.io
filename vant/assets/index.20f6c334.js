import{c as b}from"./use-translate.813c82b8.js";import{t as p,m as S,w as k}from"./with-install.ed706383.js";import{z as B,e as t,T as I}from"./vue-libs.e99ed056.js";import{H as P}from"./constant.80c6de18.js";import{I as h}from"./index.b854190e.js";const[w,s]=b("tag"),x={size:String,mark:Boolean,show:p,type:S("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};var y=B({name:w,props:x,emits:["close"],setup(o,{slots:a,emit:c}){const i=e=>{e.stopPropagation(),c("close",e)},m=()=>o.plain?{color:o.textColor||o.color,borderColor:o.color}:{color:o.textColor,background:o.color},u=()=>{var l;const{type:e,mark:d,plain:f,round:g,size:n,closeable:C}=o,r={mark:d,plain:f,round:g};n&&(r[n]=n);const T=C&&t(h,{name:"cross",class:[s("close"),P],onClick:i},null);return t("span",{style:m(),class:s([r,e])},[(l=a.default)==null?void 0:l.call(a),T])};return()=>t(I,{name:o.closeable?"van-fade":void 0},{default:()=>[o.show?u():null]})}});const _=k(y);export{_ as T};
