"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2450"],{12651:function(){},83458:function(e,l,a){a.r(l);var t=a("19239");a("25104");let o=t.Z;l.default=o},25104:function(e,l,a){a("12651")},79791:function(e,l,a){a("82116"),a("17989");var t=a("38061"),o=a("13047"),u=a("82460"),i=a("94260"),n=a("22300"),d=a("52454"),[m,c]=(0,o.do)("switch"),s={size:u.Or,loading:Boolean,disabled:Boolean,modelValue:u.Vg,activeColor:String,inactiveColor:String,activeValue:{type:u.Vg,default:!0},inactiveValue:{type:u.Vg,default:!1}};l.Z=(0,t.aZ)({name:m,props:s,emits:["change","update:modelValue"],setup(e,l){var{emit:a,slots:o}=l,u=()=>e.modelValue===e.activeValue,m=()=>{if(!e.disabled&&!e.loading){var l=u()?e.inactiveValue:e.activeValue;a("update:modelValue",l),a("change",l)}},s=()=>{if(e.loading){var l=u()?e.activeColor:e.inactiveColor;return(0,t.Wm)(d.gb,{class:c("loading"),color:l},null)}if(o.node)return o.node()};return(0,n.aM)(()=>e.modelValue),()=>{var l,{size:a,loading:n,disabled:d,activeColor:r,inactiveColor:v}=e,V=u(),U={fontSize:(0,i.Nn)(a),backgroundColor:V?r:v};return(0,t.Wm)("div",{role:"switch",class:c({on:V,loading:n,disabled:d}),style:U,tabindex:d?void 0:0,"aria-checked":V,onClick:m},[(0,t.Wm)("div",{class:c("node")},[s()]),null===(l=o.background)||void 0===l?void 0:l.call(o)])}}})},19239:function(e,l,a){var t=a("38061"),o=a("29389"),u=a("81398"),i=a("77591"),n=a("26935"),d=a("58162"),m=a("71762"),c={class:"icon-wrapper"};l.Z=(0,t.aZ)({__name:"index",setup(e){var l=(0,d.q)({"zh-CN":{title:"\u6807\u9898",confirm:"\u63D0\u9192",message:"\u662F\u5426\u5207\u6362\u5F00\u5173\uFF1F",withCell:"\u642D\u914D\u5355\u5143\u683C\u4F7F\u7528",customSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",customNode:"\u81EA\u5B9A\u4E49\u6309\u94AE",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",asyncControl:"\u5F02\u6B65\u63A7\u5236"},"en-US":{title:"Title",confirm:"Confirm",message:"Are you sure to toggle switch?",withCell:"Inside a Cell",customSize:"Custom Size",customNode:"Custom Node",customColor:"Custom Color",asyncControl:"Async Control"}}),a=(0,o.iH)(!0),s=(0,o.iH)(!0),r=(0,o.iH)(!0),v=(0,o.iH)(!0),V=(0,o.iH)(!0),U=e=>{(0,m.WD)({title:l("title"),message:l("message")}).then(()=>{v.value=e})};return(e,d)=>{var m=(0,t.up)("demo-block");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t.Wm)(m,{title:(0,o.SU)(l)("basicUsage")},{default:(0,t.w5)(()=>[(0,t.Wm)((0,o.SU)(u.ZP),{modelValue:a.value,"onUpdate:modelValue":d[0]||(d[0]=e=>a.value=e)},null,8,["modelValue"])]),_:1},8,["title"]),(0,t.Wm)(m,{title:(0,o.SU)(l)("disabled")},{default:(0,t.w5)(()=>[(0,t.Wm)((0,o.SU)(u.ZP),{modelValue:a.value,"onUpdate:modelValue":d[1]||(d[1]=e=>a.value=e),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),(0,t.Wm)(m,{title:(0,o.SU)(l)("loadingStatus")},{default:(0,t.w5)(()=>[(0,t.Wm)((0,o.SU)(u.ZP),{modelValue:a.value,"onUpdate:modelValue":d[2]||(d[2]=e=>a.value=e),loading:""},null,8,["modelValue"])]),_:1},8,["title"]),(0,t.Wm)(m,{title:(0,o.SU)(l)("customSize")},{default:(0,t.w5)(()=>[(0,t.Wm)((0,o.SU)(u.ZP),{modelValue:s.value,"onUpdate:modelValue":d[3]||(d[3]=e=>s.value=e),size:"22px"},null,8,["modelValue"])]),_:1},8,["title"]),(0,t.Wm)(m,{title:(0,o.SU)(l)("customColor")},{default:(0,t.w5)(()=>[(0,t.Wm)((0,o.SU)(u.ZP),{modelValue:r.value,"onUpdate:modelValue":d[4]||(d[4]=e=>r.value=e),"active-color":"#ee0a24","inactive-color":"#dcdee0"},null,8,["modelValue"])]),_:1},8,["title"]),(0,t.Wm)(m,{title:(0,o.SU)(l)("customNode")},{default:(0,t.w5)(()=>[(0,t.Wm)((0,o.SU)(u.ZP),{modelValue:r.value,"onUpdate:modelValue":d[5]||(d[5]=e=>r.value=e)},{node:(0,t.w5)(()=>[(0,t._)("div",c,[(0,t.Wm)((0,o.SU)(n.ZP),{name:r.value?"success":"cross"},null,8,["name"])])]),_:1},8,["modelValue"])]),_:1},8,["title"]),(0,t.Wm)(m,{title:(0,o.SU)(l)("asyncControl")},{default:(0,t.w5)(()=>[(0,t.Wm)((0,o.SU)(u.ZP),{"model-value":v.value,"onUpdate:modelValue":U},null,8,["model-value"])]),_:1},8,["title"]),(0,t.Wm)(m,{title:(0,o.SU)(l)("withCell")},{default:(0,t.w5)(()=>[(0,t.Wm)((0,o.SU)(i.ZP),{center:"",title:(0,o.SU)(l)("title")},{"right-icon":(0,t.w5)(()=>[(0,t.Wm)((0,o.SU)(u.ZP),{modelValue:V.value,"onUpdate:modelValue":d[6]||(d[6]=e=>V.value=e)},null,8,["modelValue"])]),_:1},8,["title"])]),_:1},8,["title"])],64)}}})},81398:function(e,l,a){a.d(l,{rs:function(){return u}});var t=a("61166"),o=a("79791"),u=(0,t.n)(o.Z);l.ZP=u}}]);