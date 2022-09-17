import{c as _,z as L,w as H,q as D,i as J,e as C,D as X,r as K,p as z}from"./use-translate.a4133d47.js";import{n as Q,d as W,c as R,m as I,t as P,b as Y,w as Z}from"./with-install.00d98dcc.js";import{u as $}from"./use-expose.b164e589.js";import{I as k}from"./index.fe213903.js";import{I as ee}from"./function-call.815dc395.js";import{c as ae}from"./interceptor.1d862fca.js";import{I as te}from"./index.7895a0d5.js";import{L as ne}from"./index.699d7dad.js";import{z as V,e as l,D as le,J as re,A as ie,H as oe}from"./vue-libs.bf80eadf.js";const[se,r,ce]=_("uploader");function S(e,t){return new Promise(i=>{if(t==="file"){i();return}const c=new FileReader;c.onload=m=>{i(m.target.result)},t==="dataUrl"?c.readAsDataURL(e):t==="text"&&c.readAsText(e)})}function O(e,t){return L(e).some(i=>i.file?H(t)?t(i.file):i.file.size>t:!1)}function ue(e,t){const i=[],c=[];return e.forEach(m=>{O(m,t)?c.push(m):i.push(m)}),{valid:i,invalid:c}}const de=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i,fe=e=>de.test(e);function B(e){return e.isImage?!0:e.file&&e.file.type?e.file.type.indexOf("image")===0:e.url?fe(e.url):typeof e.content=="string"?e.content.indexOf("data:image")===0:!1}var me=V({props:{name:Q,item:W(Object),index:Number,imageFit:String,lazyLoad:Boolean,deletable:Boolean,previewSize:[Number,String,Array],beforeDelete:Function},emits:["delete","preview"],setup(e,{emit:t,slots:i}){const c=()=>{const{status:o,message:u}=e.item;if(o==="uploading"||o==="failed"){const p=o==="failed"?l(k,{name:"close",class:r("mask-icon")},null):l(ne,{class:r("loading")},null),f=J(u)&&u!=="";return l("div",{class:r("mask")},[p,f&&l("div",{class:r("mask-message")},[u])])}},m=o=>{const{name:u,item:p,index:f,beforeDelete:F}=e;o.stopPropagation(),ae(F,{args:[p,{name:u,index:f}],done:()=>t("delete")})},v=()=>t("preview"),b=()=>{if(e.deletable&&e.item.status!=="uploading")return l("div",{role:"button",class:r("preview-delete"),tabindex:0,"aria-label":ce("delete"),onClick:m},[l(k,{name:"cross",class:r("preview-delete-icon")},null)])},y=()=>{if(i["preview-cover"]){const{index:o,item:u}=e;return l("div",{class:r("preview-cover")},[i["preview-cover"](C({index:o},u))])}},h=()=>{const{item:o,lazyLoad:u,imageFit:p,previewSize:f}=e;return B(o)?l(te,{fit:p,src:o.content||o.url,class:r("preview-image"),width:Array.isArray(f)?f[0]:f,height:Array.isArray(f)?f[1]:f,lazyLoad:u,onClick:v},{default:y}):l("div",{class:r("file"),style:D(e.previewSize)},[l(k,{class:r("file-icon"),name:"description"},null),l("div",{class:[r("file-name"),"van-ellipsis"]},[o.file?o.file.name:o.url]),y()])};return()=>l("div",{class:r("preview")},[h(),c(),b()])}});const ve={name:R(""),accept:I("image/*"),capture:String,multiple:Boolean,disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,maxCount:R(1/0),imageFit:I("cover"),resultType:I("dataUrl"),uploadIcon:I("photograph"),uploadText:String,deletable:P,afterRead:Function,showUpload:P,modelValue:Y(),beforeRead:Function,beforeDelete:Function,previewSize:[Number,String,Array],previewImage:P,previewOptions:Object,previewFullImage:P,maxSize:{type:[Number,String,Function],default:1/0}};var ge=V({name:se,props:ve,emits:["delete","oversize","click-upload","close-preview","click-preview","update:modelValue"],setup(e,{emit:t,slots:i}){const c=le(),m=[],v=(a=e.modelValue.length)=>({name:e.name,index:a}),b=()=>{c.value&&(c.value.value="")},y=a=>{if(b(),O(a,e.maxSize))if(Array.isArray(a)){const n=ue(a,e.maxSize);if(a=n.valid,t("oversize",n.invalid,v()),!a.length)return}else{t("oversize",a,v());return}a=oe(a),t("update:modelValue",[...e.modelValue,...L(a)]),e.afterRead&&e.afterRead(a,v())},h=a=>{const{maxCount:n,modelValue:d,resultType:s}=e;if(Array.isArray(a)){const g=+n-d.length;a.length>g&&(a=a.slice(0,g)),Promise.all(a.map(w=>S(w,s))).then(w=>{const q=a.map((G,A)=>{const U={file:G,status:"",message:""};return w[A]&&(U.content=w[A]),U});y(q)})}else S(a,s).then(g=>{const w={file:a,status:"",message:""};g&&(w.content=g),y(w)})},o=a=>{const{files:n}=a.target;if(e.disabled||!n||!n.length)return;const d=n.length===1?n[0]:[].slice.call(n);if(e.beforeRead){const s=e.beforeRead(d,v());if(!s){b();return}if(K(s)){s.then(g=>{h(g||d)}).catch(b);return}}h(d)};let u;const p=()=>t("close-preview"),f=a=>{if(e.previewFullImage){const n=e.modelValue.filter(B),d=n.map(s=>(s.file&&!s.url&&(s.url=URL.createObjectURL(s.file),m.push(s.url)),s.url)).filter(Boolean);u=ee(C({images:d,startPosition:n.indexOf(a),onClose:p},e.previewOptions))}},F=()=>{u&&u.close()},j=(a,n)=>{const d=e.modelValue.slice(0);d.splice(n,1),t("update:modelValue",d),t("delete",a,v(n))},N=(a,n)=>{const d=["imageFit","deletable","previewSize","beforeDelete"],s=C(z(e,d),z(a,d,!0));return l(me,ie({item:a,index:n,onClick:()=>t("click-preview",a,v(n)),onDelete:()=>j(a,n),onPreview:()=>f(a)},z(e,["name","lazyLoad"]),s),{"preview-cover":i["preview-cover"]})},E=()=>{if(e.previewImage)return e.modelValue.map(N)},x=a=>t("click-upload",a),M=()=>{if(e.modelValue.length>=e.maxCount||!e.showUpload)return;const a=e.readonly?null:l("input",{ref:c,type:"file",class:r("input"),accept:e.accept,capture:e.capture,multiple:e.multiple,disabled:e.disabled,onChange:o},null);return i.default?l("div",{class:r("input-wrapper"),onClick:x},[i.default(),a]):l("div",{class:r("upload",{readonly:e.readonly}),style:D(e.previewSize),onClick:x},[l(k,{name:e.uploadIcon,class:r("upload-icon")},null),e.uploadText&&l("span",{class:r("upload-text")},[e.uploadText]),a])},T=()=>{c.value&&!e.disabled&&c.value.click()};return re(()=>{m.forEach(a=>URL.revokeObjectURL(a))}),$({chooseFile:T,closeImagePreview:F}),X(()=>e.modelValue),()=>l("div",{class:r()},[l("div",{class:r("wrapper",{disabled:e.disabled})},[E(),M()])])}});const ze=Z(ge);export{ze as U};
