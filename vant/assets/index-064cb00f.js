import{t as x,w as l}from"./with-install-5cd181dc.js";import{b as P,c as d,u as C,e as S}from"./use-translate-7ec0e456.js";import{u as y}from"./use-placeholder-addab9d8.js";import{A as p,u as I,e as m,D as i}from"./vue-libs-a0ef9506.js";import{u as V}from"./use-expose-8d780f8a.js";import{u as _,r as N}from"./use-route-ed093b71.js";import{B as k}from"./index-df6e00e8.js";const[B,u]=d("action-bar"),f=Symbol(B),w={placeholder:Boolean,safeAreaInsetBottom:x},E=p({name:B,props:w,setup(n,{slots:o}){const r=I(),e=y(r,u),{linkChildren:a}=P(f);a();const s=()=>{var c;return m("div",{ref:r,class:[u(),{"van-safe-area-bottom":n.safeAreaInsetBottom}]},[(c=o.default)==null?void 0:c.call(o)])};return()=>n.placeholder?e(s):s()}}),R=l(E),H=R,[$,z]=d("action-bar-button"),D=S({},N,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean}),F=p({name:$,props:D,setup(n,{slots:o}){const r=_(),{parent:e,index:a}=C(f),s=i(()=>{if(e){const t=e.children[a.value-1];return!(t&&"isButton"in t)}}),c=i(()=>{if(e){const t=e.children[a.value+1];return!(t&&"isButton"in t)}});return V({isButton:!0}),()=>{const{type:t,icon:A,text:b,color:h,loading:g,disabled:v}=n;return m(k,{class:z([t,{last:c.value,first:s.value}]),size:"large",type:t,icon:A,color:h,loading:g,disabled:v,onClick:r},{default:()=>[o.default?o.default():b]})}}}),K=l(F),J=K;export{f as A,H as V,J as a,K as b,R as c};
