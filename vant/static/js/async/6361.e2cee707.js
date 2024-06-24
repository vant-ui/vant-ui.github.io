"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6361"],{32050:function(){},58380:function(e,t,n){n.r(t);var l=n("1639");n("93174");let r=l.Z;t.default=r},93174:function(e,t,n){n("32050")},29810:function(e,t,n){n("82116"),n("17989"),n("56115"),n("59644"),n("89176");var l=n("38061"),r=n("13047"),i=n("82460"),a=n("81243"),o=n("94260"),[u,c]=(0,r.do)("badge"),s={dot:Boolean,max:i.Or,tag:(0,i.SQ)("div"),color:String,offset:Array,content:i.Or,showZero:i.J5,position:(0,i.SQ)("top-right")};t.Z=(0,l.aZ)({name:u,props:s,setup(e,t){var{slots:n}=t,r=()=>{if(n.content)return!0;var{content:t,showZero:l}=e;return(0,a.Xq)(t)&&""!==t&&(l||0!==t&&"0"!==t)},i=()=>{var{dot:t,max:l,content:i}=e;if(!t&&r())return n.content?n.content():(0,a.Xq)(l)&&(0,a.kE)(i)&&+i>+l?"".concat(l,"+"):i},u=e=>e.startsWith("-")?e.replace("-",""):"-".concat(e),s=(0,l.Fl)(()=>{var t={background:e.color};if(e.offset){var[l,r]=e.offset,{position:i}=e,[a,c]=i.split("-");n.default?("number"==typeof r?t[a]=(0,o.Nn)("top"===a?r:-r):t[a]="top"===a?(0,o.Nn)(r):u(r),"number"==typeof l?t[c]=(0,o.Nn)("left"===c?l:-l):t[c]="left"===c?(0,o.Nn)(l):u(l)):(t.marginTop=(0,o.Nn)(r),t.marginLeft=(0,o.Nn)(l))}return t}),d=()=>{if(r()||e.dot)return(0,l.Wm)("div",{class:c([e.position,{dot:e.dot,fixed:!!n.default}]),style:s.value},[i()])};return()=>{if(n.default){var{tag:t}=e;return(0,l.Wm)(t,{class:c("wrapper")},{default:()=>[n.default(),d()]})}return d()}}})},75568:function(e,t,n){n.d(t,{x_:function(){return d}}),n("82116"),n("17989");var l=n("38061"),r=n("13047"),i=n("82460"),a=n("81243"),o=n("94788"),u=n("26935"),[c,s]=(0,r.do)("cell"),d={tag:(0,i.SQ)("div"),icon:String,size:String,title:i.Or,value:i.Or,label:i.Or,center:Boolean,isLink:Boolean,border:i.J5,iconPrefix:String,valueClass:i.Vg,labelClass:i.Vg,titleClass:i.Vg,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},f=(0,a.l7)({},d,o.g2);t.ZP=(0,l.aZ)({name:c,props:f,setup(e,t){var{slots:n}=t,r=(0,o.yj)(),i=()=>{if(n.label||(0,a.Xq)(e.label))return(0,l.Wm)("div",{class:[s("label"),e.labelClass]},[n.label?n.label():e.label])},c=()=>{if(n.title||(0,a.Xq)(e.title)){var t,r=null===(t=n.title)||void 0===t?void 0:t.call(n);if(!Array.isArray(r)||0!==r.length)return(0,l.Wm)("div",{class:[s("title"),e.titleClass],style:e.titleStyle},[r||(0,l.Wm)("span",null,[e.title]),i()])}},d=()=>{var t=n.value||n.default;if(t||(0,a.Xq)(e.value))return(0,l.Wm)("div",{class:[s("value"),e.valueClass]},[t?t():(0,l.Wm)("span",null,[e.value])])},f=()=>n.icon?n.icon():e.icon?(0,l.Wm)(u.JO,{name:e.icon,class:s("left-icon"),classPrefix:e.iconPrefix},null):void 0,v=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){var t=e.arrowDirection&&"right"!==e.arrowDirection?"arrow-".concat(e.arrowDirection):"arrow";return(0,l.Wm)(u.JO,{name:t,class:s("right-icon")},null)}};return()=>{var t,{tag:i,size:a,center:o,border:u,isLink:m,required:p}=e,g=null!==(t=e.clickable)&&void 0!==t?t:m,h={center:o,required:!!p,clickable:g,borderless:!u};return a&&(h[a]=!!a),(0,l.Wm)(i,{class:s(h),role:g?"button":void 0,tabindex:g?0:void 0,onClick:r},{default:()=>{var e;return[f(),c(),d(),v(),null===(e=n.extra)||void 0===e?void 0:e.call(n)]}})}}})},689:function(e,t,n){n.d(t,{q9:function(){return d}}),n("82116"),n("17989"),n("86795"),n("56115"),n("59644"),n("31564"),n("8649"),n("70629");var l=n("38061"),r=n("13047"),i=n("82460"),a=n("94260"),o=n("81243"),u=n("3783"),[c,s]=(0,r.do)("config-provider"),d=Symbol(c),f={tag:(0,i.SQ)("div"),theme:(0,i.SQ)("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,themeVarsScope:(0,i.SQ)("local"),iconPrefix:String};function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(e).forEach(n=>{e[n]!==t[n]&&document.documentElement.style.setProperty(n,e[n])}),Object.keys(t).forEach(t=>{!e[t]&&document.documentElement.style.removeProperty(t)})}t.ZP=(0,l.aZ)({name:c,props:f,setup(e,t){var{slots:n}=t,r=(0,l.Fl)(()=>{var t,n;return t=(0,o.l7)({},e.themeVars,"dark"===e.theme?e.themeVarsDark:e.themeVarsLight),n={},Object.keys(t).forEach(e=>{var l=(0,a.GL)(e).replace(/([a-zA-Z])(\d)/g,"$1-$2");n["--van-".concat(l)]=t[e]}),n});if(o._f){var i=()=>{document.documentElement.classList.add("van-theme-".concat(e.theme))},c=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.theme;document.documentElement.classList.remove("van-theme-".concat(t))};(0,l.YP)(()=>e.theme,(e,t)=>{t&&c(t),i()},{immediate:!0}),(0,l.dl)(i),(0,l.se)(c),(0,l.Jd)(c),(0,l.YP)(r,(t,n)=>{"global"===e.themeVarsScope&&v(t,n)}),(0,l.YP)(()=>e.themeVarsScope,(e,t)=>{"global"===t&&v({},r.value),"global"===e&&v(r.value,{})}),"global"===e.themeVarsScope&&v(r.value,{})}return(0,l.JJ)(d,e),(0,l.m0)(()=>{void 0!==e.zIndex&&(0,u.H)(e.zIndex)}),()=>(0,l.Wm)(e.tag,{class:s(),style:"local"===e.themeVarsScope?r.value:void 0},{default:()=>{var e;return[null===(e=n.default)||void 0===e?void 0:e.call(n)]}})}})},57215:function(e,t,n){n("82116"),n("17989"),n("24660");var l=n("38061"),r=n("13047"),i=n("82460"),a=n("94260"),o=n("51387"),u=n("689"),[c,s]=(0,r.do)("icon"),d=e=>null==e?void 0:e.includes("/"),f={dot:Boolean,tag:(0,i.SQ)("i"),name:String,size:i.Or,badge:i.Or,color:String,badgeProps:Object,classPrefix:String};t.Z=(0,l.aZ)({name:c,props:f,setup(e,t){var{slots:n}=t,r=(0,l.f3)(u.q9,null),i=(0,l.Fl)(()=>e.classPrefix||(null==r?void 0:r.iconPrefix)||s());return()=>{var{tag:t,dot:r,name:u,size:c,badge:f,color:v}=e,m=d(u);return(0,l.Wm)(o.Ct,(0,l.dG)({dot:r,tag:t,class:[i.value,m?"":"".concat(i.value,"-").concat(u)],style:{color:v,fontSize:(0,a.Nn)(c)},content:f},e.badgeProps),{default:()=>{var e;return[null===(e=n.default)||void 0===e?void 0:e.call(n),m&&(0,l.Wm)("img",{class:s("image"),src:u},null)]}})}}})},1639:function(e,t,n){var l=n("38061"),r=n("29389"),i=n("9097"),a=n("51837"),o=n("77591"),u=n("58162"),c={class:"van-ellipsis"},s={class:"van-multi-ellipsis--l2"},d=(0,l._)("div",{class:"van-hairline--top"},null,-1),f={class:"demo-animate-block"};t.Z=(0,l.aZ)({__name:"index",setup(e){var t=(0,u.q)({"zh-CN":{hairline:"1px \u8FB9\u6846",ellipsis:"\u6587\u5B57\u7701\u7565",animation:"\u52A8\u753B",toggle:"\u5207\u6362\u52A8\u753B",text1:"\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E00\u884C\u7684\u6587\u5B57\uFF0C\u540E\u9762\u7684\u5185\u5BB9\u4F1A\u7701\u7565",text2:"\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E24\u884C\u7684\u6587\u5B57\uFF0C\u540E\u9762\u7684\u5185\u5BB9\u4F1A\u7701\u7565\u3002\u8FD9\u662F\u4E00\u6BB5\u6700\u591A\u663E\u793A\u4E24\u884C\u7684\u6587\u5B57\uFF0C\u540E\u9762\u7684\u5185\u5BB9\u4F1A\u7701\u7565"},"en-US":{hairline:"Hairline",ellipsis:"Text Ellipsis",animation:"Animation",toggle:"Switch animation",text1:"This is a paragraph that displays up to one line of text, and the rest of the text will be omitted.",text2:"This is a paragraph that displays up to two lines of text, and the rest of the text will be omitted."}}),n=(0,r.iH)(!1),v=(0,r.iH)(""),m=e=>{n.value=!0,v.value=e,setTimeout(()=>{n.value=!1},500)};return(e,u)=>{var p=(0,l.up)("demo-block");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(p,{title:(0,r.SU)(t)("ellipsis")},{default:(0,l.w5)(()=>[(0,l._)("div",c,(0,i.zw)((0,r.SU)(t)("text1")),1),(0,l._)("div",s,(0,i.zw)((0,r.SU)(t)("text2")),1)]),_:1},8,["title"]),(0,l.Wm)(p,{card:"",title:(0,r.SU)(t)("hairline")},{default:(0,l.w5)(()=>[d]),_:1},8,["title"]),(0,l.Wm)(p,{card:"",title:(0,r.SU)(t)("animation")},{default:(0,l.w5)(()=>[(0,l.Wm)((0,r.SU)(o.ZP),{"is-link":"",title:"Fade",onClick:u[0]||(u[0]=e=>m("van-fade"))}),(0,l.Wm)((0,r.SU)(o.ZP),{"is-link":"",title:"Slide Up",onClick:u[1]||(u[1]=e=>m("van-slide-up"))}),(0,l.Wm)((0,r.SU)(o.ZP),{"is-link":"",title:"Slide Down",onClick:u[2]||(u[2]=e=>m("van-slide-down"))}),(0,l.Wm)((0,r.SU)(o.ZP),{"is-link":"",title:"Slide Left",onClick:u[3]||(u[3]=e=>m("van-slide-left"))}),(0,l.Wm)((0,r.SU)(o.ZP),{"is-link":"",title:"Slide Right",onClick:u[4]||(u[4]=e=>m("van-slide-right"))})]),_:1},8,["title"]),(0,l.Wm)(a.uT,{name:v.value},{default:(0,l.w5)(()=>[(0,l.wy)((0,l._)("div",f,null,512),[[a.F8,n.value]])]),_:1},8,["name"])],64)}}})},51387:function(e,t,n){n.d(t,{Ct:function(){return i}});var l=n("61166"),r=n("29810"),i=(0,l.n)(r.Z);t.ZP=i},77591:function(e,t,n){n.d(t,{bL:function(){return i}});var l=n("61166"),r=n("75568"),i=(0,l.n)(r.ZP);t.ZP=i},3783:function(e,t,n){n.d(t,{H:function(){return i},t:function(){return r}});var l=2e3,r=()=>++l,i=e=>{l=e}},94788:function(e,t,n){n.d(t,{BC:function(){return i},g2:function(){return r},yj:function(){return a}}),n("56115"),n("59644");var l=n("38061"),r={to:[String,Object],url:String,replace:Boolean};function i(e){var{to:t,url:n,replace:l,$router:r}=e;t&&r?r[l?"replace":"push"](t):n&&(l?location.replace(n):location.href=n)}function a(){var e=(0,l.FN)().proxy;return()=>i(e)}},26935:function(e,t,n){n.d(t,{JO:function(){return i}});var l=n("61166"),r=n("57215"),i=(0,l.n)(r.Z);t.ZP=i},82460:function(e,t,n){n.d(t,{Ce:function(){return o},J5:function(){return i},Or:function(){return r},SI:function(){return c},SQ:function(){return s},Vg:function(){return l},ir:function(){return a},qM:function(){return u}});var l=null,r=[Number,String],i={type:Boolean,default:!0},a=e=>({type:e,required:!0}),o=()=>({type:Array,default:()=>[]}),u=e=>({type:Number,default:e}),c=e=>({type:r,default:e}),s=e=>({type:String,default:e})},61166:function(e,t,n){n.d(t,{n:function(){return r}});var l=n("94260");function r(e){return e.install=t=>{var{name:n}=e;n&&(t.component(n,e),t.component((0,l._A)("-".concat(n)),e))},e}}}]);