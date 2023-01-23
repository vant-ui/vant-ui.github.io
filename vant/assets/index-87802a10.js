import{A as v,D as h,e,F as b,u as z,o as x,a as w,w as a,C as t,h as n,t as i,d as S,r as V}from"./vue-libs-a0ef9506.js";import{c as A,a as B}from"./use-translate-7ec0e456.js";import{w as C}from"./with-install-5cd181dc.js";import{V as l}from"./index-df6e00e8.js";import{V as N,b as s}from"./index-13883d5e.js";import"./use-route-ed093b71.js";import"./index-b4068522.js";import"./index-f26f74fc.js";import"./index-31a73367.js";import"./constant-a81ffd37.js";import"./Checker-f03a1afb.js";const[g,$]=A("space"),R={align:String,direction:{type:String,default:"horizontal"},size:{type:[Number,String,Array],default:8},wrap:Boolean,fill:Boolean};function k(u=[]){const r=[];return u.forEach(o=>{Array.isArray(o)?r.push(...o):o.type===b?r.push(...k(o.children)):r.push(o)}),r.filter(o=>{var p;return!(o&&(typeof Comment<"u"&&o.type===Comment||o.type===b&&((p=o.children)==null?void 0:p.length)===0||o.type===Text&&o.children.trim()===""))})}const E=v({name:g,props:R,setup(u,{slots:r}){const o=h(()=>u.align??(u.direction==="horizontal"?"center":"")),p=m=>typeof m=="number"?m+"px":m,y=m=>{const d={},_=`${p(Array.isArray(u.size)?u.size[0]:u.size)}`,c=`${p(Array.isArray(u.size)?u.size[1]:u.size)}`;return m?u.wrap?{marginBottom:c}:{}:(u.direction==="horizontal"&&(d.marginRight=_),(u.direction==="vertical"||u.wrap)&&(d.marginBottom=c),d)};return()=>{var d;const m=k((d=r.default)==null?void 0:d.call(r));return e("div",{class:[$({[u.direction]:u.direction,[`align-${o.value}`]:o.value,wrap:u.wrap,fill:u.fill})]},[m.map((_,c)=>e("div",{key:`item-${c}`,class:`${g}-item`,style:y(c===m.length-1)},[_]))])}}}),T=C(E),f=T;const U=S("div",{style:{padding:"40px 20px",background:"#fff"}},"Block",-1),K={__name:"index",setup(u){const r=B({"zh-CN":{vertical:"垂直排列",customSize:"自定义间距",align:"对齐方式",wrap:"自动换行"},"en-US":{vertical:"Vertical",customSize:"Custom Size",align:"Alignment",wrap:"Auto Wrap"}}),o=z("center");return(p,y)=>{const m=V("demo-block");return x(),w(b,null,[e(m,{title:t(r)("basicUsage")},{default:a(()=>[e(t(f),null,{default:a(()=>[e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1})]),_:1})]),_:1},8,["title"]),e(m,{title:t(r)("vertical")},{default:a(()=>[e(t(f),{direction:"vertical",fill:""},{default:a(()=>[e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1})]),_:1})]),_:1},8,["title"]),e(m,{title:t(r)("customSize")},{default:a(()=>[e(t(f),{size:20,style:{"margin-bottom":"16px"}},{default:a(()=>[e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1})]),_:1}),e(t(f),{size:"3rem"},{default:a(()=>[e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary"},{default:a(()=>[n(i(t(r)("button")),1)]),_:1})]),_:1})]),_:1},8,["title"]),e(m,{title:t(r)("align")},{default:a(()=>[e(t(N),{modelValue:o.value,"onUpdate:modelValue":y[0]||(y[0]=d=>o.value=d),direction:"horizontal",style:{"margin-bottom":"16px"}},{default:a(()=>[e(t(s),{name:"start"},{default:a(()=>[n("start")]),_:1}),e(t(s),{name:"center"},{default:a(()=>[n("center")]),_:1}),e(t(s),{name:"end"},{default:a(()=>[n("end")]),_:1}),e(t(s),{name:"baseline"},{default:a(()=>[n("baseline")]),_:1})]),_:1},8,["modelValue"]),e(t(f),{align:o.value,style:{padding:"16px",background:"#f3f2f5"}},{default:a(()=>[e(t(l),{type:"primary"},{default:a(()=>[n(i(o.value),1)]),_:1}),U]),_:1},8,["align"])]),_:1},8,["title"]),e(m,{title:t(r)("wrap")},{default:a(()=>[e(t(f),{wrap:""},{default:a(()=>[e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1}),e(t(l),{type:"primary",block:""},{default:a(()=>[n(i(t(r)("button")),1)]),_:1})]),_:1})]),_:1},8,["title"])],64)}}};export{K as default};