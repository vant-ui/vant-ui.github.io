import{c as _,A as V,x as H,q as L,i as J,e as U,E as X,s as K,p as P}from"./use-translate.c56bc05e.js";import{n as Q,d as W,c as R,m as I,t as k,b as Y,w as Z}from"./with-install.2d06a5b3.js";import{u as $}from"./use-expose.2dad0d8e.js";import{I as F}from"./index.e7e14384.js";import{s as ee}from"./index.883b1ed6.js";import{c as ae}from"./interceptor.7caa5e9a.js";import{I as te}from"./index.4e7a9b44.js";import{L as ne}from"./index.1fe53b6c.js";import{A as D,e as r,x as le,J as re,B as ie,H as oe}from"./vue-libs.a3cd7f61.js";const[se,i,ce]=_("uploader");function S(e,t){return new Promise(o=>{if(t==="file"){o();return}const c=new FileReader;c.onload=m=>{o(m.target.result)},t==="dataUrl"?c.readAsDataURL(e):t==="text"&&c.readAsText(e)})}function O(e,t){return V(e).some(o=>o.file?H(t)?t(o.file):o.file.size>t:!1)}function ue(e,t){const o=[],c=[];return e.forEach(m=>{O(m,t)?c.push(m):o.push(m)}),{valid:o,invalid:c}}const de=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,fe=e=>de.test(e);function B(e){return e.isImage?!0:e.file&&e.file.type?e.file.type.indexOf("image")===0:e.url?fe(e.url):typeof e.content=="string"?e.content.indexOf("data:image")===0:!1}const me=D({props:{name:Q,item:W(Object),index:Number,imageFit:String,lazyLoad:Boolean,deletable:Boolean,previewSize:[Number,String,Array],beforeDelete:Function},emits:["delete","preview"],setup(e,{emit:t,slots:o}){const c=()=>{const{status:n,message:u}=e.item;if(n==="uploading"||n==="failed"){const w=n==="failed"?r(F,{name:"close",class:i("mask-icon")},null):r(ne,{class:i("loading")},null),f=J(u)&&u!=="";return r("div",{class:i("mask")},[w,f&&r("div",{class:i("mask-message")},[u])])}},m=n=>{const{name:u,item:w,index:f,beforeDelete:x}=e;n.stopPropagation(),ae(x,{args:[w,{name:u,index:f}],done:()=>t("delete")})},v=()=>t("preview"),b=()=>{if(e.deletable&&e.item.status!=="uploading"){const n=o["preview-delete"];return r("div",{role:"button",class:i("preview-delete",{shadow:!n}),tabindex:0,"aria-label":ce("delete"),onClick:m},[n?n():r(F,{name:"cross",class:i("preview-delete-icon")},null)])}},h=()=>{if(o["preview-cover"]){const{index:n,item:u}=e;return r("div",{class:i("preview-cover")},[o["preview-cover"](U({index:n},u))])}},y=()=>{const{item:n,lazyLoad:u,imageFit:w,previewSize:f}=e;return B(n)?r(te,{fit:w,src:n.content||n.url,class:i("preview-image"),width:Array.isArray(f)?f[0]:f,height:Array.isArray(f)?f[1]:f,lazyLoad:u,onClick:v},{default:h}):r("div",{class:i("file"),style:L(e.previewSize)},[r(F,{class:i("file-icon"),name:"description"},null),r("div",{class:[i("file-name"),"van-ellipsis"]},[n.file?n.file.name:n.url]),h()])};return()=>r("div",{class:i("preview")},[y(),c(),b()])}}),ve={name:R(""),accept:I("image/*"),capture:String,multiple:Boolean,disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,maxCount:R(1/0),imageFit:I("cover"),resultType:I("dataUrl"),uploadIcon:I("photograph"),uploadText:String,deletable:k,afterRead:Function,showUpload:k,modelValue:Y(),beforeRead:Function,beforeDelete:Function,previewSize:[Number,String,Array],previewImage:k,previewOptions:Object,previewFullImage:k,maxSize:{type:[Number,String,Function],default:1/0}},ge=D({name:se,props:ve,emits:["delete","oversize","clickUpload","closePreview","clickPreview","update:modelValue"],setup(e,{emit:t,slots:o}){const c=le(),m=[],v=(a=e.modelValue.length)=>({name:e.name,index:a}),b=()=>{c.value&&(c.value.value="")},h=a=>{if(b(),O(a,e.maxSize))if(Array.isArray(a)){const l=ue(a,e.maxSize);if(a=l.valid,t("oversize",l.invalid,v()),!a.length)return}else{t("oversize",a,v());return}a=oe(a),t("update:modelValue",[...e.modelValue,...V(a)]),e.afterRead&&e.afterRead(a,v())},y=a=>{const{maxCount:l,modelValue:d,resultType:s}=e;if(Array.isArray(a)){const g=+l-d.length;a.length>g&&(a=a.slice(0,g)),Promise.all(a.map(p=>S(p,s))).then(p=>{const q=a.map((G,A)=>{const C={file:G,status:"",message:""};return p[A]&&(C.content=p[A]),C});h(q)})}else S(a,s).then(g=>{const p={file:a,status:"",message:""};g&&(p.content=g),h(p)})},n=a=>{const{files:l}=a.target;if(e.disabled||!l||!l.length)return;const d=l.length===1?l[0]:[].slice.call(l);if(e.beforeRead){const s=e.beforeRead(d,v());if(!s){b();return}if(K(s)){s.then(g=>{y(g||d)}).catch(b);return}}y(d)};let u;const w=()=>t("closePreview"),f=a=>{if(e.previewFullImage){const l=e.modelValue.filter(B),d=l.map(s=>(s.file&&!s.url&&s.status!=="failed"&&(s.url=URL.createObjectURL(s.file),m.push(s.url)),s.url)).filter(Boolean);u=ee(U({images:d,startPosition:l.indexOf(a),onClose:w},e.previewOptions))}},x=()=>{u&&u.close()},j=(a,l)=>{const d=e.modelValue.slice(0);d.splice(l,1),t("update:modelValue",d),t("delete",a,v(l))},E=(a,l)=>{const d=["imageFit","deletable","previewSize","beforeDelete"],s=U(P(e,d),P(a,d,!0));return r(me,ie({item:a,index:l,onClick:()=>t("clickPreview",a,v(l)),onDelete:()=>j(a,l),onPreview:()=>f(a)},P(e,["name","lazyLoad"]),s),P(o,["preview-cover","preview-delete"]))},N=()=>{if(e.previewImage)return e.modelValue.map(E)},z=a=>t("clickUpload",a),M=()=>{if(e.modelValue.length>=e.maxCount||!e.showUpload)return;const a=e.readonly?null:r("input",{ref:c,type:"file",class:i("input"),accept:e.accept,capture:e.capture,multiple:e.multiple,disabled:e.disabled,onChange:n},null);return o.default?r("div",{class:i("input-wrapper"),onClick:z},[o.default(),a]):r("div",{class:i("upload",{readonly:e.readonly}),style:L(e.previewSize),onClick:z},[r(F,{name:e.uploadIcon,class:i("upload-icon")},null),e.uploadText&&r("span",{class:i("upload-text")},[e.uploadText]),a])},T=()=>{c.value&&!e.disabled&&c.value.click()};return re(()=>{m.forEach(a=>URL.revokeObjectURL(a))}),$({chooseFile:T,closeImagePreview:x}),X(()=>e.modelValue),()=>r("div",{class:i()},[r("div",{class:i("wrapper",{disabled:e.disabled})},[N(),M()])])}}),we=Z(ge),Ue=we;export{Ue as V};
