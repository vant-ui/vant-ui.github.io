import{c}from"./use-translate.c7ada534.js";import{t as s,w as m}from"./with-install.fe59c8e0.js";import{b as u}from"./constant.80c6de18.js";import{A as d,e as r,B as p,F as f}from"./vue-libs.34a885a4.js";const[G,a]=c("cell-group"),b={title:String,inset:Boolean,border:s},g=d({name:G,inheritAttrs:!1,props:b,setup(e,{slots:t,attrs:o}){const n=()=>{var i;return r("div",p({class:[a({inset:e.inset}),{[u]:e.border&&!e.inset}]},o),[(i=t.default)==null?void 0:i.call(t)])},l=()=>r("div",{class:a("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?r(f,null,[l(),n()]):n()}}),B=m(g),h=B;export{h as V};
