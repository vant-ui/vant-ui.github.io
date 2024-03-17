/*! For license information please see 4795.b682f38b.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4795"],{90691:function(e,t,l){"use strict";l.r(t);var o=l("74762");l.es(o,t);let a=o.default;t.default=a},74762:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return o.default}});var o=l("95554");l.es(o,t)},95554:function(e,t,l){"use strict";l.r(t);var o=l("69298"),a=l("51984"),n=l("32013"),r=l("99742"),i=l("41936"),u=l("99497"),d=l("24647"),c={style:{padding:"5px 16px"}};t.default=(0,o.defineComponent)({__name:"index",setup(e){var t=(0,d.useTranslate)({"zh-CN":{disableMenu:"\u7981\u7528\u83DC\u5355",switchTitle1:"\u5305\u90AE",switchTitle2:"\u56E2\u8D2D",itemTitle:"\u7B5B\u9009",expandDirection:"\u5411\u4E0A\u5C55\u5F00",customContent:"\u81EA\u5B9A\u4E49\u83DC\u5355\u5185\u5BB9",customActiveColor:"\u81EA\u5B9A\u4E49\u9009\u4E2D\u6001\u989C\u8272",swipeItems:"\u6A2A\u5411\u6EDA\u52A8",option1:[{text:"\u5168\u90E8\u5546\u54C1",value:0},{text:"\u65B0\u6B3E\u5546\u54C1",value:1},{text:"\u6D3B\u52A8\u5546\u54C1",value:2}],option2:[{text:"\u9ED8\u8BA4\u6392\u5E8F",value:"a"},{text:"\u597D\u8BC4\u6392\u5E8F",value:"b"},{text:"\u9500\u91CF\u6392\u5E8F",value:"c"}]},"en-US":{disableMenu:"Disable Menu",switchTitle1:"Title",switchTitle2:"Title",itemTitle:"Title",expandDirection:"Expand Direction",customContent:"Custom Content",customActiveColor:"Custom Active Color",swipeItems:"Swipe Items",option1:[{text:"Option1",value:0},{text:"Option2",value:1},{text:"Option3",value:2}],option2:[{text:"Option A",value:"a"},{text:"Option B",value:"b"},{text:"Option C",value:"c"}]}}),l=(0,o.ref)(),s=(0,o.ref)(!0),p=(0,o.ref)(!1),f=(0,o.ref)(0),v=(0,o.ref)("a"),m=(0,o.computed)(()=>t("option1")),V=(0,o.computed)(()=>t("option2")),g=()=>{var e;null===(e=l.value)||void 0===e||e.toggle()};return(e,d)=>{var h=(0,o.resolveComponent)("demo-block");return(0,o.openBlock)(),(0,o.createElementBlock)(o.Fragment,null,[(0,o.createVNode)(h,{title:(0,o.unref)(t)("basicUsage")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(a.default),null,{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{modelValue:f.value,"onUpdate:modelValue":d[0]||(d[0]=e=>f.value=e),options:m.value},null,8,["modelValue","options"]),(0,o.createVNode)((0,o.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[1]||(d[1]=e=>v.value=e),options:V.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),(0,o.createVNode)(h,{title:(0,o.unref)(t)("customContent")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(a.default),null,{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{modelValue:f.value,"onUpdate:modelValue":d[2]||(d[2]=e=>f.value=e),options:m.value},null,8,["modelValue","options"]),(0,o.createVNode)((0,o.unref)(n.default),{title:(0,o.unref)(t)("itemTitle"),ref_key:"item",ref:l},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(r.default),{center:"",title:(0,o.unref)(t)("switchTitle1")},{"right-icon":(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(i.default),{modelValue:s.value,"onUpdate:modelValue":d[3]||(d[3]=e=>s.value=e)},null,8,["modelValue"])]),_:1},8,["title"]),(0,o.createVNode)((0,o.unref)(r.default),{center:"",title:(0,o.unref)(t)("switchTitle2")},{"right-icon":(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(i.default),{modelValue:p.value,"onUpdate:modelValue":d[4]||(d[4]=e=>p.value=e)},null,8,["modelValue"])]),_:1},8,["title"]),(0,o.createElementVNode)("div",c,[(0,o.createVNode)((0,o.unref)(u.default),{type:"primary",block:"",round:"",style:{height:"40px"},onClick:g},{default:(0,o.withCtx)(()=>[(0,o.createTextVNode)((0,o.toDisplayString)((0,o.unref)(t)("confirm")),1)]),_:1})])]),_:1},8,["title"])]),_:1})]),_:1},8,["title"]),(0,o.createVNode)(h,{title:(0,o.unref)(t)("customActiveColor")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(a.default),{"active-color":"#ee0a24"},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{modelValue:f.value,"onUpdate:modelValue":d[5]||(d[5]=e=>f.value=e),options:m.value},null,8,["modelValue","options"]),(0,o.createVNode)((0,o.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[6]||(d[6]=e=>v.value=e),options:V.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),(0,o.createVNode)(h,{title:(0,o.unref)(t)("swipeItems")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(a.default),{"swipe-threshold":"4"},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{modelValue:f.value,"onUpdate:modelValue":d[7]||(d[7]=e=>f.value=e),options:m.value},null,8,["modelValue","options"]),(0,o.createVNode)((0,o.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[8]||(d[8]=e=>v.value=e),options:V.value},null,8,["modelValue","options"]),(0,o.createVNode)((0,o.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[9]||(d[9]=e=>v.value=e),options:V.value},null,8,["modelValue","options"]),(0,o.createVNode)((0,o.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[10]||(d[10]=e=>v.value=e),options:V.value},null,8,["modelValue","options"]),(0,o.createVNode)((0,o.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[11]||(d[11]=e=>v.value=e),options:V.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),(0,o.createVNode)(h,{title:(0,o.unref)(t)("expandDirection")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(a.default),{direction:"up"},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{modelValue:f.value,"onUpdate:modelValue":d[12]||(d[12]=e=>f.value=e),options:m.value},null,8,["modelValue","options"]),(0,o.createVNode)((0,o.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[13]||(d[13]=e=>v.value=e),options:V.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"]),(0,o.createVNode)(h,{title:(0,o.unref)(t)("disableMenu")},{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(a.default),null,{default:(0,o.withCtx)(()=>[(0,o.createVNode)((0,o.unref)(n.default),{modelValue:f.value,"onUpdate:modelValue":d[14]||(d[14]=e=>f.value=e),disabled:"",options:m.value},null,8,["modelValue","options"]),(0,o.createVNode)((0,o.unref)(n.default),{modelValue:v.value,"onUpdate:modelValue":d[15]||(d[15]=e=>v.value=e),disabled:"",options:V.value},null,8,["modelValue","options"])]),_:1})]),_:1},8,["title"])],64)}}})},99497:function(e,t,l){"use strict";l.r(t),l.d(t,{Button:function(){return n}});var o=l("37704"),a=l("2322"),n=(0,o.withInstall)(a.default);t.default=n},99742:function(e,t,l){"use strict";l.r(t),l.d(t,{Cell:function(){return n}});var o=l("37704"),a=l("31068"),n=(0,o.withInstall)(a.default);t.default=n},46267:function(e,t,l){"use strict";l.r(t),l.d(t,{useId:function(){return n}});var o=l("69298"),a=0;function n(){var e=(0,o.getCurrentInstance)(),{name:t="unknown"}=(null==e?void 0:e.type)||{};return"".concat(t,"-").concat(++a)}},6149:function(e,t,l){"use strict";l.r(t),l.d(t,{route:function(){return n},routeProps:function(){return a},useRoute:function(){return r}}),l("36232"),l("31851");var o=l("69298"),a={to:[String,Object],url:String,replace:Boolean};function n(e){var{to:t,url:l,replace:o,$router:a}=e;t&&a?a[o?"replace":"push"](t):l&&(o?location.replace(l):location.href=l)}function r(){var e=(0,o.getCurrentInstance)().proxy;return()=>n(e)}},32013:function(e,t,l){"use strict";l.r(t);var o=l("37704"),a=l("19327"),n=(0,o.withInstall)(a.default);t.default=n},51984:function(e,t,l){"use strict";l.r(t);var o=l("37704"),a=l("83617"),n=(0,o.withInstall)(a.default);t.default=n},95786:function(e,t,l){"use strict";l.r(t),l.d(t,{Loading:function(){return n}});var o=l("37704"),a=l("5633"),n=(0,o.withInstall)(a.default);t.default=n},41936:function(e,t,l){"use strict";l.r(t),l.d(t,{Switch:function(){return n}});var o=l("37704"),a=l("36369"),n=(0,o.withInstall)(a.default);t.default=n},2322:function(e,t,l){"use strict";l.r(t),l("54525"),l("74943"),l("47266");var o=l("69298"),a=l("37704"),n=l("6149"),r=l("96528"),i=l("95786"),[u,d]=(0,a.createNamespace)("button"),c=(0,a.extend)({},n.routeProps,{tag:(0,a.makeStringProp)("button"),text:String,icon:String,type:(0,a.makeStringProp)("default"),size:(0,a.makeStringProp)("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:(0,a.makeStringProp)("button"),loadingSize:a.numericProp,loadingText:String,loadingType:String,iconPosition:(0,a.makeStringProp)("left")});t.default=(0,o.defineComponent)({name:u,props:c,emits:["click"],setup(e,t){var{emit:l,slots:u}=t,c=(0,n.useRoute)(),s=()=>u.loading?u.loading():(0,o.createVNode)(i.Loading,{size:e.loadingSize,type:e.loadingType,class:d("loading")},null),p=()=>e.loading?s():u.icon?(0,o.createVNode)("div",{class:d("icon")},[u.icon()]):e.icon?(0,o.createVNode)(r.Icon,{name:e.icon,class:d("icon"),classPrefix:e.iconPrefix},null):void 0,f=()=>{var t;if(t=e.loading?e.loadingText:u.default?u.default():e.text)return(0,o.createVNode)("span",{class:d("text")},[t])},v=()=>{var{color:t,plain:l}=e;if(t){var o={color:l?t:"white"};return!l&&(o.background=t),t.includes("gradient")?o.border=0:o.borderColor=t,o}},m=t=>{e.loading?(0,a.preventDefault)(t):!e.disabled&&(l("click",t),c())};return()=>{var{tag:t,type:l,size:n,block:r,round:i,plain:u,square:c,loading:s,disabled:V,hairline:g,nativeType:h,iconPosition:w}=e,N=[d([l,n,{plain:u,block:r,round:i,square:c,loading:s,disabled:V,hairline:g}]),{[a.BORDER_SURROUND]:g}];return(0,o.createVNode)(t,{type:h,class:N,style:v(),disabled:V,onClick:m},{default:()=>[(0,o.createVNode)("div",{class:d("content")},["left"===w&&p(),f(),"right"===w&&p()])]})}}})},31068:function(e,t,l){"use strict";l.r(t),l.d(t,{cellSharedProps:function(){return d}}),l("54525"),l("74943");var o=l("69298"),a=l("37704"),n=l("6149"),r=l("96528"),[i,u]=(0,a.createNamespace)("cell"),d={tag:(0,a.makeStringProp)("div"),icon:String,size:String,title:a.numericProp,value:a.numericProp,label:a.numericProp,center:Boolean,isLink:Boolean,border:a.truthProp,iconPrefix:String,valueClass:a.unknownProp,labelClass:a.unknownProp,titleClass:a.unknownProp,titleStyle:null,arrowDirection:String,required:{type:[Boolean,String],default:null},clickable:{type:Boolean,default:null}},c=(0,a.extend)({},d,n.routeProps);t.default=(0,o.defineComponent)({name:i,props:c,setup(e,t){var{slots:l}=t,i=(0,n.useRoute)(),d=()=>{if(l.label||(0,a.isDef)(e.label))return(0,o.createVNode)("div",{class:[u("label"),e.labelClass]},[l.label?l.label():e.label])},c=()=>{if(l.title||(0,a.isDef)(e.title)){var t,n=null===(t=l.title)||void 0===t?void 0:t.call(l);if(!Array.isArray(n)||0!==n.length)return(0,o.createVNode)("div",{class:[u("title"),e.titleClass],style:e.titleStyle},[n||(0,o.createVNode)("span",null,[e.title]),d()])}},s=()=>{var t=l.value||l.default;if(t||(0,a.isDef)(e.value))return(0,o.createVNode)("div",{class:[u("value"),e.valueClass]},[t?t():(0,o.createVNode)("span",null,[e.value])])},p=()=>l.icon?l.icon():e.icon?(0,o.createVNode)(r.Icon,{name:e.icon,class:u("left-icon"),classPrefix:e.iconPrefix},null):void 0,f=()=>{if(l["right-icon"])return l["right-icon"]();if(e.isLink){var t=e.arrowDirection&&"right"!==e.arrowDirection?"arrow-".concat(e.arrowDirection):"arrow";return(0,o.createVNode)(r.Icon,{name:t,class:u("right-icon")},null)}};return()=>{var t,{tag:a,size:n,center:r,border:d,isLink:v,required:m}=e,V=null!==(t=e.clickable)&&void 0!==t?t:v,g={center:r,required:!!m,clickable:V,borderless:!d};return n&&(g[n]=!!n),(0,o.createVNode)(a,{class:u(g),role:V?"button":void 0,tabindex:V?0:void 0,onClick:i},{default:()=>{var e;return[p(),c(),s(),f(),null===(e=l.extra)||void 0===e?void 0:e.call(l)]}})}}})},19327:function(e,t,l){"use strict";l.r(t),l("54525"),l("74943"),l("24360"),l("64342"),l("17326"),l("41216"),l("47857");var o=l("69298"),a=l("37704"),n=l("83617"),r=l("22300"),i=l("10023"),u=l("99742"),d=l("96528"),c=l("97760"),[s,p]=(0,a.createNamespace)("dropdown-item"),f={title:String,options:(0,a.makeArrayProp)(),disabled:Boolean,teleport:[String,Object],lazyRender:a.truthProp,modelValue:a.unknownProp,titleClass:a.unknownProp};t.default=(0,o.defineComponent)({name:s,inheritAttrs:!1,props:f,emits:["open","opened","close","closed","change","update:modelValue"],setup(e,t){var{emit:l,slots:s,attrs:f}=t,v=(0,o.reactive)({showPopup:!1,transition:!0,showWrapper:!1}),m=(0,o.ref)(),{parent:V,index:g}=(0,r.useParent)(n.DROPDOWN_KEY);if(V){var h=e=>()=>l(e),w=h("open"),N=h("close"),C=h("opened"),x=()=>{v.showWrapper=!1,l("closed")},b=t=>{e.teleport&&t.stopPropagation()},P=t=>{var{activeColor:a}=V.props,n=t.value===e.modelValue;return(0,o.createVNode)(u.Cell,{role:"menuitem",key:String(t.value),icon:t.icon,title:t.text,class:p("option",{active:n}),style:{color:n?a:""},tabindex:n?0:-1,clickable:!0,onClick:()=>{v.showPopup=!1,t.value!==e.modelValue&&(l("update:modelValue",t.value),l("change",t.value))}},{value:()=>{if(n)return(0,o.createVNode)(d.Icon,{class:p("icon"),color:a,name:"success"},null)}})},y=()=>{var{offset:t}=V,{autoLocate:l,zIndex:n,overlay:i,duration:u,direction:d,closeOnClickOverlay:h}=V.props,y=(0,a.getZIndexStyle)(n),k=t.value;if(l&&m.value){var S=(0,a.getContainingBlock)(m.value);S&&(k-=(0,r.useRect)(S).top)}return"down"===d?y.top="".concat(k,"px"):y.bottom="".concat(k,"px"),(0,o.withDirectives)((0,o.createVNode)("div",(0,o.mergeProps)({ref:m,style:y,class:p([d]),onClick:b},f),[(0,o.createVNode)(c.Popup,{show:v.showPopup,"onUpdate:show":e=>v.showPopup=e,role:"menu",class:p("content"),overlay:i,position:"down"===d?"top":"bottom",duration:v.transition?u:0,lazyRender:e.lazyRender,overlayStyle:{position:"absolute"},"aria-labelledby":"".concat(V.id,"-").concat(g.value),closeOnClickOverlay:h,onOpen:w,onClose:N,onOpened:C,onClosed:x},{default:()=>{var t;return[e.options.map(P),null===(t=s.default)||void 0===t?void 0:t.call(s)]}})]),[[o.vShow,v.showWrapper]])};return(0,i.useExpose)({state:v,toggle:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!v.showPopup,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e!==v.showPopup&&(v.showPopup=e,v.transition=!t.immediate,e&&(V.updateOffset(),v.showWrapper=!0))},renderTitle:()=>{if(s.title)return s.title();if(e.title)return e.title;var t=e.options.find(t=>t.value===e.modelValue);return t?t.text:""}}),()=>{if(e.teleport){var t,l;return(0,o.createVNode)(o.Teleport,{to:e.teleport},"function"!=typeof(l=t=y())&&("[object Object]"!==Object.prototype.toString.call(l)||(0,o.isVNode)(l))?{default:()=>[t]}:t)}return y()}}}})},83617:function(e,t,l){"use strict";l.r(t),l.d(t,{DROPDOWN_KEY:function(){return s}}),l("54525"),l("74943"),l("47487"),l("92324"),l("34160"),l("17326"),l("99465"),l("8689"),l("41216"),l("47857");var o=l("69298"),a=l("37704"),n=l("46267"),r=l("10023"),i=l("22300"),[u,d]=(0,a.createNamespace)("dropdown-menu"),c={overlay:a.truthProp,zIndex:a.numericProp,duration:(0,a.makeNumericProp)(.2),direction:(0,a.makeStringProp)("down"),activeColor:String,autoLocate:Boolean,closeOnClickOutside:a.truthProp,closeOnClickOverlay:a.truthProp,swipeThreshold:a.numericProp},s=Symbol(u);t.default=(0,o.defineComponent)({name:u,props:c,setup(e,t){var{slots:l}=t,u=(0,n.useId)(),c=(0,o.ref)(),p=(0,o.ref)(),f=(0,o.ref)(0),{children:v,linkChildren:m}=(0,i.useChildren)(s),V=(0,i.useScrollParent)(c),g=(0,o.computed)(()=>v.some(e=>e.state.showWrapper)),h=(0,o.computed)(()=>e.swipeThreshold&&v.length>+e.swipeThreshold),w=(0,o.computed)(()=>{if(g.value&&(0,a.isDef)(e.zIndex))return{zIndex:+e.zIndex+1}}),N=()=>{v.forEach(e=>{e.toggle(!1)})},C=()=>{if(p.value){var t=(0,i.useRect)(p);"down"===e.direction?f.value=t.bottom:f.value=a.windowHeight.value-t.top}},x=e=>{v.forEach((t,l)=>{l===e?t.toggle():t.state.showPopup&&t.toggle(!1,{immediate:!0})})},b=(t,l)=>{var{showPopup:n}=t.state,{disabled:r,titleClass:i}=t;return(0,o.createVNode)("div",{id:"".concat(u,"-").concat(l),role:"button",tabindex:r?void 0:0,class:[d("item",{disabled:r,grow:h.value}),{[a.HAPTICS_FEEDBACK]:!r}],onClick:()=>{!r&&x(l)}},[(0,o.createVNode)("span",{class:[d("title",{down:n===("down"===e.direction),active:n}),i],style:{color:n?e.activeColor:""}},[(0,o.createVNode)("div",{class:"van-ellipsis"},[t.renderTitle()])])])};return(0,r.useExpose)({close:N}),m({id:u,props:e,offset:f,updateOffset:C}),(0,i.useClickAway)(c,()=>{e.closeOnClickOutside&&N()}),(0,i.useEventListener)("scroll",()=>{g.value&&C()},{target:V,passive:!0}),()=>{var e;return(0,o.createVNode)("div",{ref:c,class:d()},[(0,o.createVNode)("div",{ref:p,style:w.value,class:d("bar",{opened:g.value,scrollable:h.value})},[v.map(b)]),null===(e=l.default)||void 0===e?void 0:e.call(l)])}}})},5633:function(e,t,l){"use strict";l.r(t),l("54525"),l("74943"),l("41216"),l("47857");var o=l("69298"),a=l("37704"),[n,r]=(0,a.createNamespace)("loading"),i=Array(12).fill(null).map((e,t)=>(0,o.createVNode)("i",{class:r("line",String(t+1))},null)),u=(0,o.createVNode)("svg",{class:r("circular"),viewBox:"25 25 50 50"},[(0,o.createVNode)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),d={size:a.numericProp,type:(0,a.makeStringProp)("circular"),color:String,vertical:Boolean,textSize:a.numericProp,textColor:String};t.default=(0,o.defineComponent)({name:n,props:d,setup(e,t){var{slots:l}=t,n=(0,o.computed)(()=>(0,a.extend)({color:e.color},(0,a.getSizeStyle)(e.size))),d=()=>{var t="spinner"===e.type?i:u;return(0,o.createVNode)("span",{class:r("spinner",e.type),style:n.value},[l.icon?l.icon():t])},c=()=>{if(l.default){var t;return(0,o.createVNode)("span",{class:r("text"),style:{fontSize:(0,a.addUnit)(e.textSize),color:null!==(t=e.textColor)&&void 0!==t?t:e.color}},[l.default()])}};return()=>{var{type:t,vertical:l}=e;return(0,o.createVNode)("div",{class:r([t,{vertical:l}]),"aria-live":"polite","aria-busy":!0},[d(),c()])}}})},36369:function(e,t,l){"use strict";l.r(t),l("54525"),l("74943");var o=l("69298"),a=l("37704"),n=l("22300"),r=l("95786"),[i,u]=(0,a.createNamespace)("switch"),d={size:a.numericProp,loading:Boolean,disabled:Boolean,modelValue:a.unknownProp,activeColor:String,inactiveColor:String,activeValue:{type:a.unknownProp,default:!0},inactiveValue:{type:a.unknownProp,default:!1}};t.default=(0,o.defineComponent)({name:i,props:d,emits:["change","update:modelValue"],setup(e,t){var{emit:l,slots:i}=t,d=()=>e.modelValue===e.activeValue,c=()=>{if(!e.disabled&&!e.loading){var t=d()?e.inactiveValue:e.activeValue;l("update:modelValue",t),l("change",t)}},s=()=>{if(e.loading){var t=d()?e.activeColor:e.inactiveColor;return(0,o.createVNode)(r.Loading,{class:u("loading"),color:t},null)}if(i.node)return i.node()};return(0,n.useCustomFieldValue)(()=>e.modelValue),()=>{var t,{size:l,loading:n,disabled:r,activeColor:p,inactiveColor:f}=e,v=d(),m={fontSize:(0,a.addUnit)(l),backgroundColor:v?p:f};return(0,o.createVNode)("div",{role:"switch",class:u({on:v,loading:n,disabled:r}),style:m,tabindex:r?void 0:0,"aria-checked":v,onClick:c},[(0,o.createVNode)("div",{class:u("node")},[s()]),null===(t=i.background)||void 0===t?void 0:t.call(i)])}}})}}]);