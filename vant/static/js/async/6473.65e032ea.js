"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6473"],{9224:function(){},21025:function(t,e,l){l.r(e);var n=l("4813");l("80838");let r=n.Z;e.default=r},80838:function(t,e,l){l("9224")},29810:function(t,e,l){l("82116"),l("17989"),l("56115"),l("59644"),l("89176");var n=l("38061"),r=l("13047"),o=l("82460"),a=l("81243"),i=l("94260"),[u,c]=(0,r.do)("badge"),s={dot:Boolean,max:o.Or,tag:(0,o.SQ)("div"),color:String,offset:Array,content:o.Or,showZero:o.J5,position:(0,o.SQ)("top-right")};e.Z=(0,n.aZ)({name:u,props:s,setup(t,e){var{slots:l}=e,r=()=>{if(l.content)return!0;var{content:e,showZero:n}=t;return(0,a.Xq)(e)&&""!==e&&(n||0!==e&&"0"!==e)},o=()=>{var{dot:e,max:n,content:o}=t;if(!e&&r())return l.content?l.content():(0,a.Xq)(n)&&(0,a.kE)(o)&&+o>+n?"".concat(n,"+"):o},u=t=>t.startsWith("-")?t.replace("-",""):"-".concat(t),s=(0,n.Fl)(()=>{var e={background:t.color};if(t.offset){var[n,r]=t.offset,{position:o}=t,[a,c]=o.split("-");l.default?("number"==typeof r?e[a]=(0,i.Nn)("top"===a?r:-r):e[a]="top"===a?(0,i.Nn)(r):u(r),"number"==typeof n?e[c]=(0,i.Nn)("left"===c?n:-n):e[c]="left"===c?(0,i.Nn)(n):u(n)):(e.marginTop=(0,i.Nn)(r),e.marginLeft=(0,i.Nn)(n))}return e}),d=()=>{if(r()||t.dot)return(0,n.Wm)("div",{class:c([t.position,{dot:t.dot,fixed:!!l.default}]),style:s.value},[o()])};return()=>{if(l.default){var{tag:e}=t;return(0,n.Wm)(e,{class:c("wrapper")},{default:()=>[l.default(),d()]})}return d()}}})},70772:function(t,e,l){l("82116"),l("17989");var n=l("38061"),r=l("13047"),o=l("82460"),a=l("12414"),i=l("21807"),[u,c]=(0,r.do)("cell-group"),s={title:String,inset:Boolean,border:o.J5};e.Z=(0,n.aZ)({name:u,inheritAttrs:!1,props:s,setup(t,e){var{slots:l,attrs:r}=e,o=()=>{var e;return(0,n.Wm)("div",(0,n.dG)({class:[c({inset:t.inset}),{[a.r5]:t.border&&!t.inset}]},r,(0,i.a)()),[null===(e=l.default)||void 0===e?void 0:e.call(l)])},u=()=>(0,n.Wm)("div",{class:c("title",{inset:t.inset})},[l.title?l.title():t.title]);return()=>t.title||l.title?(0,n.Wm)(n.HY,null,[u(),o()]):o()}})},75568:function(t,e,l){l.d(e,{x_:function(){return d}}),l("82116"),l("17989");var n=l("38061"),r=l("13047"),o=l("82460"),a=l("81243"),i=l("94788"),u=l("26935"),[c,s]=(0,r.do)("cell"),d={tag:(0,o.SQ)("div"),icon:String,size:String,title:o.Or,value:o.Or,label:o.Or,center:Boolean,isLink:Boolean,border:o.J5,iconPrefix:String,valueClass:o.Vg,labelClass:o.Vg,titleClass:o.Vg,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},v=(0,a.l7)({},d,i.g2);e.ZP=(0,n.aZ)({name:c,props:v,setup(t,e){var{slots:l}=e,r=(0,i.yj)(),o=()=>{if(l.label||(0,a.Xq)(t.label))return(0,n.Wm)("div",{class:[s("label"),t.labelClass]},[l.label?l.label():t.label])},c=()=>{if(l.title||(0,a.Xq)(t.title)){var e,r=null===(e=l.title)||void 0===e?void 0:e.call(l);if(!Array.isArray(r)||0!==r.length)return(0,n.Wm)("div",{class:[s("title"),t.titleClass],style:t.titleStyle},[r||(0,n.Wm)("span",null,[t.title]),o()])}},d=()=>{var e=l.value||l.default;if(e||(0,a.Xq)(t.value))return(0,n.Wm)("div",{class:[s("value"),t.valueClass]},[e?e():(0,n.Wm)("span",null,[t.value])])},v=()=>l.icon?l.icon():t.icon?(0,n.Wm)(u.JO,{name:t.icon,class:s("left-icon"),classPrefix:t.iconPrefix},null):void 0,f=()=>{if(l["right-icon"])return l["right-icon"]();if(t.isLink){var e=t.arrowDirection&&"right"!==t.arrowDirection?"arrow-".concat(t.arrowDirection):"arrow";return(0,n.Wm)(u.JO,{name:e,class:s("right-icon")},null)}};return()=>{var e,{tag:o,size:a,center:i,border:u,isLink:m,required:S}=t,p=null!==(e=t.clickable)&&void 0!==e?e:m,g={center:i,required:!!S,clickable:p,borderless:!u};return a&&(g[a]=!!a),(0,n.Wm)(o,{class:s(g),role:p?"button":void 0,tabindex:p?0:void 0,onClick:r},{default:()=>{var t;return[v(),c(),d(),f(),null===(t=l.extra)||void 0===t?void 0:t.call(l)]}})}}})},689:function(t,e,l){l.d(e,{q9:function(){return d}}),l("82116"),l("17989"),l("86795"),l("56115"),l("59644"),l("31564"),l("8649"),l("70629");var n=l("38061"),r=l("13047"),o=l("82460"),a=l("94260"),i=l("81243"),u=l("3783"),[c,s]=(0,r.do)("config-provider"),d=Symbol(c),v={tag:(0,o.SQ)("div"),theme:(0,o.SQ)("light"),zIndex:Number,themeVars:Object,themeVarsDark:Object,themeVarsLight:Object,themeVarsScope:(0,o.SQ)("local"),iconPrefix:String};function f(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.keys(t).forEach(l=>{t[l]!==e[l]&&document.documentElement.style.setProperty(l,t[l])}),Object.keys(e).forEach(e=>{!t[e]&&document.documentElement.style.removeProperty(e)})}e.ZP=(0,n.aZ)({name:c,props:v,setup(t,e){var{slots:l}=e,r=(0,n.Fl)(()=>{var e,l;return e=(0,i.l7)({},t.themeVars,"dark"===t.theme?t.themeVarsDark:t.themeVarsLight),l={},Object.keys(e).forEach(t=>{var n=(0,a.GL)(t).replace(/([a-zA-Z])(\d)/g,"$1-$2");l["--van-".concat(n)]=e[t]}),l});if(i._f){var o=()=>{document.documentElement.classList.add("van-theme-".concat(t.theme))},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.theme;document.documentElement.classList.remove("van-theme-".concat(e))};(0,n.YP)(()=>t.theme,(t,e)=>{e&&c(e),o()},{immediate:!0}),(0,n.dl)(o),(0,n.se)(c),(0,n.Jd)(c),(0,n.YP)(r,(e,l)=>{"global"===t.themeVarsScope&&f(e,l)}),(0,n.YP)(()=>t.themeVarsScope,(t,e)=>{"global"===e&&f({},r.value),"global"===t&&f(r.value,{})}),"global"===t.themeVarsScope&&f(r.value,{})}return(0,n.JJ)(d,t),(0,n.m0)(()=>{void 0!==t.zIndex&&(0,u.H)(t.zIndex)}),()=>(0,n.Wm)(t.tag,{class:s(),style:"local"===t.themeVarsScope?r.value:void 0},{default:()=>{var t;return[null===(t=l.default)||void 0===t?void 0:t.call(l)]}})}})},57215:function(t,e,l){l("82116"),l("17989"),l("24660");var n=l("38061"),r=l("13047"),o=l("82460"),a=l("94260"),i=l("51387"),u=l("689"),[c,s]=(0,r.do)("icon"),d=t=>null==t?void 0:t.includes("/"),v={dot:Boolean,tag:(0,o.SQ)("i"),name:String,size:o.Or,badge:o.Or,color:String,badgeProps:Object,classPrefix:String};e.Z=(0,n.aZ)({name:c,props:v,setup(t,e){var{slots:l}=e,r=(0,n.f3)(u.q9,null),o=(0,n.Fl)(()=>t.classPrefix||(null==r?void 0:r.iconPrefix)||s());return()=>{var{tag:e,dot:r,name:u,size:c,badge:v,color:f}=t,m=d(u);return(0,n.Wm)(i.Ct,(0,n.dG)({dot:r,tag:e,class:[o.value,m?"":"".concat(o.value,"-").concat(u)],style:{color:f,fontSize:(0,a.Nn)(c)},content:v},t.badgeProps),{default:()=>{var t;return[null===(t=l.default)||void 0===t?void 0:t.call(l),m&&(0,n.Wm)("img",{class:s("image"),src:u},null)]}})}}})},3409:function(t,e,l){l("82116"),l("17989");var n=l("38061"),r=l("51837"),o=l("13047"),a=l("82460"),i=l("12414"),u=l("26935"),[c,s]=(0,o.do)("tag"),d={size:String,mark:Boolean,show:a.J5,type:(0,a.SQ)("default"),color:String,plain:Boolean,round:Boolean,textColor:String,closeable:Boolean};e.Z=(0,n.aZ)({name:c,props:d,emits:["close"],setup(t,e){var{slots:l,emit:o}=e,a=t=>{t.stopPropagation(),o("close",t)},c=()=>t.plain?{color:t.textColor||t.color,borderColor:t.color}:{color:t.textColor,background:t.color},d=()=>{var e,{type:r,mark:o,plain:d,round:v,size:f,closeable:m}=t,S={mark:o,plain:d,round:v};f&&(S[f]=f);var p=m&&(0,n.Wm)(u.JO,{name:"cross",class:[s("close"),i.e9],onClick:a},null);return(0,n.Wm)("span",{style:c(),class:s([S,r])},[null===(e=l.default)||void 0===e?void 0:e.call(l),p])};return()=>(0,n.Wm)(r.uT,{name:t.closeable?"van-fade":void 0},{default:()=>[t.show?d():null]})}})},4813:function(t,e,l){var n=l("38061"),r=l("29389"),o=l("9097"),a=l("78418"),i=l("77591"),u=l("21044"),c=l("26935"),s=l("58162"),d={class:"custom-title"};e.Z=(0,n.aZ)({__name:"index",setup(t){var e=(0,s.q)({"zh-CN":{cell:"\u5355\u5143\u683C",group:"\u5206\u7EC4",router:"\u9875\u9762\u5BFC\u822A",urlRoute:"URL \u8DF3\u8F6C",vueRoute:"\u8DEF\u7531\u8DF3\u8F6C",useSlots:"\u4F7F\u7528\u63D2\u69FD",showIcon:"\u5C55\u793A\u56FE\u6807",showArrow:"\u5C55\u793A\u7BAD\u5934",largeSize:"\u5355\u5143\u683C\u5927\u5C0F",groupTitle:"\u5206\u7EC4\u6807\u9898",insetGrouped:"\u5361\u7247\u98CE\u683C",verticalCenter:"\u5782\u76F4\u5C45\u4E2D"},"en-US":{cell:"Cell title",group:"Group",router:"Router",urlRoute:"URL",vueRoute:"Vue Router",useSlots:"Use Slots",showIcon:"Left Icon",showArrow:"Link",largeSize:"Size",groupTitle:"Group Title",insetGrouped:"Inset Grouped",verticalCenter:"Vertical center"}});return(t,l)=>{var s=(0,n.up)("demo-block");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(s,{title:(0,r.SU)(e)("basicUsage")},{default:(0,n.w5)(()=>[(0,n.Wm)((0,r.SU)(a.ZP),null,{default:(0,n.w5)(()=>[(0,n.Wm)((0,r.SU)(i.ZP),{title:(0,r.SU)(e)("cell"),value:(0,r.SU)(e)("content")},null,8,["title","value"]),(0,n.Wm)((0,r.SU)(i.ZP),{title:(0,r.SU)(e)("cell"),value:(0,r.SU)(e)("content"),label:(0,r.SU)(e)("desc")},null,8,["title","value","label"])]),_:1})]),_:1},8,["title"]),(0,n.Wm)(s,{title:(0,r.SU)(e)("insetGrouped")},{default:(0,n.w5)(()=>[(0,n.Wm)((0,r.SU)(a.ZP),{inset:""},{default:(0,n.w5)(()=>[(0,n.Wm)((0,r.SU)(i.ZP),{title:(0,r.SU)(e)("cell"),value:(0,r.SU)(e)("content")},null,8,["title","value"]),(0,n.Wm)((0,r.SU)(i.ZP),{title:(0,r.SU)(e)("cell"),value:(0,r.SU)(e)("content"),label:(0,r.SU)(e)("desc")},null,8,["title","value","label"])]),_:1})]),_:1},8,["title"]),(0,n.Wm)(s,{title:(0,r.SU)(e)("largeSize")},{default:(0,n.w5)(()=>[(0,n.Wm)((0,r.SU)(i.ZP),{title:(0,r.SU)(e)("cell"),value:(0,r.SU)(e)("content"),size:"large"},null,8,["title","value"]),(0,n.Wm)((0,r.SU)(i.ZP),{title:(0,r.SU)(e)("cell"),value:(0,r.SU)(e)("content"),size:"large",label:(0,r.SU)(e)("desc")},null,8,["title","value","label"])]),_:1},8,["title"]),(0,n.Wm)(s,{title:(0,r.SU)(e)("showIcon")},{default:(0,n.w5)(()=>[(0,n.Wm)((0,r.SU)(i.ZP),{title:(0,r.SU)(e)("cell"),value:(0,r.SU)(e)("content"),icon:"location-o"},null,8,["title","value"])]),_:1},8,["title"]),(0,n.Wm)(s,{title:(0,r.SU)(e)("showArrow")},{default:(0,n.w5)(()=>[(0,n.Wm)((0,r.SU)(i.ZP),{title:(0,r.SU)(e)("cell"),"is-link":""},null,8,["title"]),(0,n.Wm)((0,r.SU)(i.ZP),{title:(0,r.SU)(e)("cell"),"is-link":"",value:(0,r.SU)(e)("content")},null,8,["title","value"]),(0,n.Wm)((0,r.SU)(i.ZP),{title:(0,r.SU)(e)("cell"),"is-link":"","arrow-direction":"down",value:(0,r.SU)(e)("content")},null,8,["title","value"])]),_:1},8,["title"]),(0,n.Wm)(s,{title:(0,r.SU)(e)("router")},{default:(0,n.w5)(()=>[(0,n.Wm)((0,r.SU)(i.ZP),{title:(0,r.SU)(e)("urlRoute"),"is-link":"",url:"https://github.com/vant-ui/vant"},null,8,["title"]),(0,n.Wm)((0,r.SU)(i.ZP),{title:(0,r.SU)(e)("vueRoute"),"is-link":"",to:"index"},null,8,["title"])]),_:1},8,["title"]),(0,n.Wm)(s,{title:(0,r.SU)(e)("groupTitle")},{default:(0,n.w5)(()=>[(0,n.Wm)((0,r.SU)(a.ZP),{title:"".concat((0,r.SU)(e)("group")," 1")},{default:(0,n.w5)(()=>[(0,n.Wm)((0,r.SU)(i.ZP),{title:(0,r.SU)(e)("cell"),value:(0,r.SU)(e)("content")},null,8,["title","value"])]),_:1},8,["title"]),(0,n.Wm)((0,r.SU)(a.ZP),{title:"".concat((0,r.SU)(e)("group")," 2")},{default:(0,n.w5)(()=>[(0,n.Wm)((0,r.SU)(i.ZP),{title:(0,r.SU)(e)("cell"),value:(0,r.SU)(e)("content")},null,8,["title","value"])]),_:1},8,["title"])]),_:1},8,["title"]),(0,n.Wm)(s,{title:(0,r.SU)(e)("useSlots")},{default:(0,n.w5)(()=>[(0,n.Wm)((0,r.SU)(i.ZP),{value:(0,r.SU)(e)("content"),"is-link":""},{title:(0,n.w5)(()=>[(0,n._)("span",d,(0,o.zw)((0,r.SU)(e)("cell")),1),(0,n.Wm)((0,r.SU)(u.ZP),{type:"primary"},{default:(0,n.w5)(()=>[(0,n.Uk)((0,o.zw)((0,r.SU)(e)("tag")),1)]),_:1})]),_:1},8,["value"]),(0,n.Wm)((0,r.SU)(i.ZP),{icon:"shop-o",title:(0,r.SU)(e)("cell")},{"right-icon":(0,n.w5)(()=>[(0,n.Wm)((0,r.SU)(c.ZP),{name:"search",class:"search-icon"})]),_:1},8,["title"])]),_:1},8,["title"]),(0,n.Wm)(s,{title:(0,r.SU)(e)("verticalCenter")},{default:(0,n.w5)(()=>[(0,n.Wm)((0,r.SU)(i.ZP),{center:"",title:(0,r.SU)(e)("cell"),value:(0,r.SU)(e)("content"),label:(0,r.SU)(e)("desc")},null,8,["title","value","label"])]),_:1},8,["title"])],64)}}})},51387:function(t,e,l){l.d(e,{Ct:function(){return o}});var n=l("61166"),r=l("29810"),o=(0,n.n)(r.Z);e.ZP=o},78418:function(t,e,l){var n=l("61166"),r=l("70772"),o=(0,n.n)(r.Z);e.ZP=o},77591:function(t,e,l){l.d(e,{bL:function(){return o}});var n=l("61166"),r=l("75568"),o=(0,n.n)(r.ZP);e.ZP=o},3783:function(t,e,l){l.d(e,{H:function(){return o},t:function(){return r}});var n=2e3,r=()=>++n,o=t=>{n=t}},94788:function(t,e,l){l.d(e,{BC:function(){return o},g2:function(){return r},yj:function(){return a}}),l("56115"),l("59644");var n=l("38061"),r={to:[String,Object],url:String,replace:Boolean};function o(t){var{to:e,url:l,replace:n,$router:r}=t;e&&r?r[n?"replace":"push"](e):l&&(n?location.replace(l):location.href=l)}function a(){var t=(0,n.FN)().proxy;return()=>o(t)}},21807:function(t,e,l){l.d(e,{a:function(){return r}});var n=l("38061"),r=()=>{var t,{scopeId:e}=(null===(t=(0,n.FN)())||void 0===t?void 0:t.vnode)||{};return e?{[e]:""}:null}},26935:function(t,e,l){l.d(e,{JO:function(){return o}});var n=l("61166"),r=l("57215"),o=(0,n.n)(r.Z);e.ZP=o},21044:function(t,e,l){l.d(e,{Vp:function(){return o}});var n=l("61166"),r=l("3409"),o=(0,n.n)(r.Z);e.ZP=o},12414:function(t,e,l){l.d(e,{Cp:function(){return f},T5:function(){return n},WN:function(){return v},_K:function(){return u},a8:function(){return o},dt:function(){return a},e9:function(){return d},k7:function(){return r},mH:function(){return m},pj:function(){return s},r5:function(){return c},xe:function(){return i}}),l("86795");var n="van-hairline",r="".concat(n,"--top"),o="".concat(n,"--left"),a="".concat(n,"--right"),i="".concat(n,"--bottom"),u="".concat(n,"--surround"),c="".concat(n,"--top-bottom"),s="".concat(n,"-unset--top-bottom"),d="van-haptics-feedback",v=Symbol("van-form"),f=500,m=5},82460:function(t,e,l){l.d(e,{Ce:function(){return i},J5:function(){return o},Or:function(){return r},SI:function(){return c},SQ:function(){return s},Vg:function(){return n},ir:function(){return a},qM:function(){return u}});var n=null,r=[Number,String],o={type:Boolean,default:!0},a=t=>({type:t,required:!0}),i=()=>({type:Array,default:()=>[]}),u=t=>({type:Number,default:t}),c=t=>({type:r,default:t}),s=t=>({type:String,default:t})},61166:function(t,e,l){l.d(e,{n:function(){return r}});var n=l("94260");function r(t){return t.install=e=>{var{name:l}=t;l&&(e.component(l,t),e.component((0,n._A)("-".concat(l)),t))},t}}}]);