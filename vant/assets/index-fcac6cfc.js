import{u as s}from"./use-scope-id-e548748d.js";import{A as c,e as r,F as m,B as u}from"./vue-libs-83dbabed.js";import{c as p}from"./use-translate-0400f29b.js";import{t as d,w as f}from"./with-install-a78877b5.js";import{b as G}from"./constant-ee6e27d7.js";const[b,o]=p("cell-group"),g={title:String,inset:Boolean,border:d},B=c({name:b,inheritAttrs:!1,props:g,setup(e,{slots:t,attrs:a}){const n=()=>{var i;return r("div",u({class:[o({inset:e.inset}),{[G]:e.border&&!e.inset}]},a,s()),[(i=t.default)==null?void 0:i.call(t)])},l=()=>r("div",{class:o("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?r(m,null,[l(),n()]):n()}}),C=f(B),_=C;export{_ as V};