"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3382"],{47341:function(){},61819:function(e,a,l){l.r(a);var n=l("34860");l("65411");let t=n.Z;a.default=t},65411:function(e,a,l){l("47341")},82761:function(e,a,l){l("82116"),l("17989"),l("96245"),l("37232"),l("70629"),l("63773"),l("97687"),l("25171"),l("6438");var n=l("38061"),t=l("51837"),o=l("29389"),r=l("13047"),i=l("82460"),s=l("81243"),u=l("53190"),d=l("26339"),c=l("77591"),v=l("38441"),m=l("33733"),h=l("46736"),f=l("46051"),g=l("45078"),p=l("81398"),y=l("35572"),b=l("91238"),[S,C,w]=(0,r.do)("address-edit"),k={name:"",tel:"",city:"",county:"",country:"",province:"",areaCode:"",isDefault:!1,addressDetail:""},x={areaList:Object,isSaving:Boolean,isDeleting:Boolean,validator:Function,showArea:i.J5,showDetail:i.J5,showDelete:Boolean,disableArea:Boolean,searchResult:Array,telMaxlength:i.Or,showSetDefault:Boolean,saveButtonText:String,areaPlaceholder:String,deleteButtonText:String,showSearchResult:Boolean,detailRows:(0,i.SI)(1),detailMaxlength:(0,i.SI)(200),areaColumnsPlaceholder:(0,i.Ce)(),addressInfo:{type:Object,default:()=>(0,s.l7)({},k)},telValidator:{type:Function,default:s.tq}};a.Z=(0,n.aZ)({name:S,props:x,emits:["save","focus","change","delete","clickArea","changeArea","changeDetail","selectSearch","changeDefault"],setup(e,a){var{emit:l,slots:r}=a,i=(0,o.iH)(),S=(0,o.qj)({}),x=(0,o.iH)(!1),B=(0,o.iH)(!1),V=(0,n.Fl)(()=>(0,s.Kn)(e.areaList)&&Object.keys(e.areaList).length),W=(0,n.Fl)(()=>{var{province:e,city:a,county:l,areaCode:n}=S;if(n){var t=[e,a,l];return e&&e===a&&t.splice(1,1),t.filter(Boolean).join("/")}return""}),P=(0,n.Fl)(()=>{var a;return(null===(a=e.searchResult)||void 0===a?void 0:a.length)&&B.value}),O=e=>{B.value="addressDetail"===e,l("focus",e)},D=(e,a)=>{l("change",{key:e,value:a})},Z=(0,n.Fl)(()=>{var{validator:a,telValidator:l}=e,n=(e,l)=>({validator:n=>{if(a){var t=a(e,n);if(t)return t}return!!n||l}});return{name:[n("name",w("nameEmpty"))],tel:[n("tel",w("telInvalid")),{validator:l,message:w("telInvalid")}],areaCode:[n("areaCode",w("areaEmpty"))],addressDetail:[n("addressDetail",w("addressEmpty"))]}}),F=()=>l("save",S),A=e=>{S.addressDetail=e,l("changeDetail",e)},N=e=>{S.province=e[0].text,S.city=e[1].text,S.county=e[2].text},T=e=>{var{selectedValues:a,selectedOptions:n}=e;a.some(e=>e===b.h5)?(0,f.CF)(w("areaEmpty")):(x.value=!1,N(n),l("changeArea",n))},z=()=>l("delete",S),R=()=>{setTimeout(()=>{B.value=!1})},E=()=>{if(e.showSetDefault)return(0,n.wy)((0,n.Wm)(c.bL,{center:!0,border:!1,title:w("defaultAddress"),class:C("default")},{"right-icon":()=>(0,n.Wm)(p.rs,{modelValue:S.isDefault,"onUpdate:modelValue":e=>S.isDefault=e,onChange:e=>l("changeDefault",e)},null)}),[[t.F8,!P.value]])};return(0,u.F)({setAreaCode:e=>{S.areaCode=e||""},setAddressDetail:e=>{S.addressDetail=e}}),(0,n.YP)(()=>e.addressInfo,e=>{(0,s.l7)(S,k,e),(0,n.Y3)(()=>{var e,a=null===(e=i.value)||void 0===e?void 0:e.getSelectedOptions();a&&a.every(e=>e&&e.value!==b.h5)&&N(a)})},{deep:!0,immediate:!0}),()=>{var{disableArea:a}=e;return(0,n.Wm)(v.l0,{class:C(),onSubmit:F},{default:()=>{var o;return[(0,n.Wm)("div",{class:C("fields")},[(0,n.Wm)(m.gN,{modelValue:S.name,"onUpdate:modelValue":[e=>S.name=e,e=>D("name",e)],clearable:!0,label:w("name"),rules:Z.value.name,placeholder:w("name"),onFocus:()=>O("name")},null),(0,n.Wm)(m.gN,{modelValue:S.tel,"onUpdate:modelValue":[e=>S.tel=e,e=>D("tel",e)],clearable:!0,type:"tel",label:w("tel"),rules:Z.value.tel,maxlength:e.telMaxlength,placeholder:w("tel"),onFocus:()=>O("tel")},null),(0,n.wy)((0,n.Wm)(m.gN,{readonly:!0,label:w("area"),"is-link":!a,modelValue:W.value,rules:e.showArea?Z.value.areaCode:void 0,placeholder:e.areaPlaceholder||w("area"),onFocus:()=>O("areaCode"),onClick:()=>{l("clickArea"),x.value=!a}},null),[[t.F8,e.showArea]]),(0,n.Wm)(y.Z,{show:e.showDetail,rows:e.detailRows,rules:Z.value.addressDetail,value:S.addressDetail,focused:B.value,maxlength:e.detailMaxlength,searchResult:e.searchResult,showSearchResult:e.showSearchResult,onBlur:R,onFocus:()=>O("addressDetail"),onInput:A,onSelectSearch:e=>l("selectSearch",e)},null),null===(o=r.default)||void 0===o?void 0:o.call(r)]),E(),(0,n.wy)((0,n.Wm)("div",{class:C("buttons")},[(0,n.Wm)(g.zx,{block:!0,round:!0,type:"primary",text:e.saveButtonText||w("save"),class:C("button"),loading:e.isSaving,nativeType:"submit"},null),e.showDelete&&(0,n.Wm)(g.zx,{block:!0,round:!0,class:C("button"),loading:e.isDeleting,text:e.deleteButtonText||w("delete"),onClick:z},null)]),[[t.F8,!P.value]]),(0,n.Wm)(h.GI,{show:x.value,"onUpdate:show":e=>x.value=e,round:!0,teleport:"body",position:"bottom",lazyRender:!1},{default:()=>[(0,n.Wm)(d.uN,{modelValue:S.areaCode,"onUpdate:modelValue":e=>S.areaCode=e,ref:i,loading:!V.value,areaList:e.areaList,columnsPlaceholder:e.areaColumnsPlaceholder,onConfirm:T,onCancel:()=>{x.value=!1}},null)]})]}})}}})},35572:function(e,a,l){l("82116"),l("17989"),l("89571"),l("66786"),l("14529");var n=l("38061"),t=l("29389"),o=l("13047"),r=l("82460"),i=l("77591"),s=l("33733"),[u,d]=(0,o.do)("address-edit-detail"),c=(0,o.do)("address-edit")[2];a.Z=(0,n.aZ)({name:u,props:{show:Boolean,rows:r.Or,value:String,rules:Array,focused:Boolean,maxlength:r.Or,searchResult:Array,showSearchResult:Boolean},emits:["blur","focus","input","selectSearch"],setup(e,a){var{emit:l}=a,o=(0,t.iH)(),r=()=>e.focused&&e.searchResult&&e.showSearchResult,u=e=>{l("selectSearch",e),l("input","".concat(e.address||""," ").concat(e.name||"").trim())},v=()=>{if(r()){var{searchResult:a}=e;return a.map(e=>(0,n.Wm)(i.bL,{clickable:!0,key:(e.name||"")+(e.address||""),icon:"location-o",title:e.name,label:e.address,class:d("search-item"),border:!1,onClick:()=>u(e)},null))}},m=e=>l("blur",e),h=e=>l("focus",e),f=e=>l("input",e);return()=>{if(e.show)return(0,n.Wm)(n.HY,null,[(0,n.Wm)(s.gN,{autosize:!0,clearable:!0,ref:o,class:d(),rows:e.rows,type:"textarea",rules:e.rules,label:c("addressDetail"),border:!r(),maxlength:e.maxlength,modelValue:e.value,placeholder:c("addressDetail"),onBlur:m,onFocus:h,"onUpdate:modelValue":f},null),v()])}}})},30990:function(e,a,l){l("82116"),l("17989");var n=l("38061"),t=l("29389"),o=l("13047"),r=l("81243"),i=l("82460"),s=l("36685"),u=l("91238"),d=l("53190"),c=l("60621"),[v,m]=(0,o.do)("area"),h=(0,r.l7)({},(0,r.ei)(s.d4,u.NC),{modelValue:String,columnsNum:(0,i.SI)(3),columnsPlaceholder:(0,i.Ce)(),areaList:{type:Object,default:()=>({})}});a.Z=(0,n.aZ)({name:v,props:h,emits:["change","confirm","cancel","update:modelValue"],setup(e,a){var{emit:l,slots:o}=a,i=(0,t.iH)([]),s=(0,t.iH)(),v=(0,n.Fl)(()=>(0,u.If)(e)),h=function(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];return l("change",...a)},f=function(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];return l("cancel",...a)},g=function(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];return l("confirm",...a)};return(0,n.YP)(i,a=>{var n=a.length?a[a.length-1]:"";n&&n!==e.modelValue&&l("update:modelValue",n)},{deep:!0}),(0,n.YP)(()=>e.modelValue,a=>{a?a!==(i.value.length?i.value[i.value.length-1]:"")&&(i.value=["".concat(a.slice(0,2),"0000"),"".concat(a.slice(0,4),"00"),a].slice(0,+e.columnsNum)):i.value=[]},{immediate:!0}),(0,d.F)({confirm:()=>{var e;return null===(e=s.value)||void 0===e?void 0:e.confirm()},getSelectedOptions:()=>{var e;return(null===(e=s.value)||void 0===e?void 0:e.getSelectedOptions())||[]}}),()=>(0,n.Wm)(c.cW,(0,n.dG)({ref:s,modelValue:i.value,"onUpdate:modelValue":e=>i.value=e,class:m(),columns:v.value,onChange:h,onCancel:f,onConfirm:g},(0,r.ei)(e,u.NC)),(0,r.ei)(o,u.eW))}})},46268:function(e,a,l){l("82116"),l("17989"),l("24660");var n=l("38061"),t=l("13047"),o=l("81243"),r=l("82460"),i=l("25827"),s=l("12414"),u=l("94788"),d=l("26935"),c=l("52454"),[v,m]=(0,t.do)("button"),h=(0,o.l7)({},u.g2,{tag:(0,r.SQ)("button"),text:String,icon:String,type:(0,r.SQ)("default"),size:(0,r.SQ)("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:(0,r.SQ)("button"),loadingSize:r.Or,loadingText:String,loadingType:String,iconPosition:(0,r.SQ)("left")});a.Z=(0,n.aZ)({name:v,props:h,emits:["click"],setup(e,a){var{emit:l,slots:t}=a,o=(0,u.yj)(),r=()=>t.loading?t.loading():(0,n.Wm)(c.gb,{size:e.loadingSize,type:e.loadingType,class:m("loading")},null),v=()=>e.loading?r():t.icon?(0,n.Wm)("div",{class:m("icon")},[t.icon()]):e.icon?(0,n.Wm)(d.JO,{name:e.icon,class:m("icon"),classPrefix:e.iconPrefix},null):void 0,h=()=>{var a;if(a=e.loading?e.loadingText:t.default?t.default():e.text)return(0,n.Wm)("span",{class:m("text")},[a])},f=()=>{var{color:a,plain:l}=e;if(a){var n={color:l?a:"white"};return!l&&(n.background=a),a.includes("gradient")?n.border=0:n.borderColor=a,n}},g=a=>{e.loading?(0,i.PF)(a):!e.disabled&&(l("click",a),o())};return()=>{var{tag:a,type:l,size:t,block:o,round:r,plain:i,square:u,loading:d,disabled:c,hairline:p,nativeType:y,iconPosition:b}=e,S=[m([l,t,{plain:i,block:o,round:r,square:u,loading:d,disabled:c,hairline:p}]),{[s._K]:p}];return(0,n.Wm)(a,{type:y,class:S,style:f(),disabled:c,onClick:g},{default:()=>[(0,n.Wm)("div",{class:m("content")},["left"===b&&v(),h(),"right"===b&&v()])]})}}})},83923:function(e,a,l){l("82116"),l("17989"),l("96245"),l("37232"),l("70629"),l("24660"),l("40944"),l("21690"),l("29256"),l("36056"),l("61557"),l("66786"),l("14529"),l("57856"),l("31053"),l("31564"),l("8649"),l("63773"),l("97687");var n=l("38061"),t=l("13047"),o=l("82460"),r=l("12414"),i=l("25827"),s=l("22300"),u=l("53190"),[d,c]=(0,t.do)("form"),v={colon:Boolean,disabled:Boolean,readonly:Boolean,required:[Boolean,String],showError:Boolean,labelWidth:o.Or,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:o.J5,showErrorMessage:o.J5,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};a.Z=(0,n.aZ)({name:d,props:v,emits:["submit","failed"],setup(e,a){var{emit:l,slots:t}=a,{children:o,linkChildren:d}=(0,s.$E)(r.WN),v=e=>e?o.filter(a=>e.includes(a.name)):o,m=e=>new Promise((a,l)=>{var n=[];v(e).reduce((e,a)=>e.then(()=>{if(!n.length)return a.validate().then(e=>{e&&n.push(e)})}),Promise.resolve()).then(()=>{n.length?l(n):a()})}),h=e=>new Promise((a,l)=>{Promise.all(v(e).map(e=>e.validate())).then(e=>{(e=e.filter(Boolean)).length?l(e):a()})}),f=e=>{var a=o.find(a=>a.name===e);return a?new Promise((e,l)=>{a.validate().then(a=>{a?l(a):e()})}):Promise.reject()},g=a=>"string"==typeof a?f(a):e.validateFirst?m(a):h(a),p=(e,a)=>{o.some(l=>l.name===e&&(l.$el.scrollIntoView(a),!0))},y=()=>o.reduce((e,a)=>(void 0!==a.name&&(e[a.name]=a.formValue.value),e),{}),b=()=>{var a=y();g().then(()=>l("submit",a)).catch(n=>{l("failed",{values:a,errors:n}),e.scrollToError&&n[0].name&&p(n[0].name)})},S=e=>{(0,i.PF)(e),b()};return d({props:e}),(0,u.F)({submit:b,validate:g,getValues:y,scrollToField:p,resetValidation:e=>{"string"==typeof e&&(e=[e]),v(e).forEach(e=>{e.resetValidation()})},getValidationStatus:()=>o.reduce((e,a)=>(e[a.name]=a.getValidationStatus(),e),{})}),()=>{var e;return(0,n.Wm)("form",{class:c(),onSubmit:S},[null===(e=t.default)||void 0===e?void 0:e.call(t)])}}})},79791:function(e,a,l){l("82116"),l("17989");var n=l("38061"),t=l("13047"),o=l("82460"),r=l("94260"),i=l("22300"),s=l("52454"),[u,d]=(0,t.do)("switch"),c={size:o.Or,loading:Boolean,disabled:Boolean,modelValue:o.Vg,activeColor:String,inactiveColor:String,activeValue:{type:o.Vg,default:!0},inactiveValue:{type:o.Vg,default:!1}};a.Z=(0,n.aZ)({name:u,props:c,emits:["change","update:modelValue"],setup(e,a){var{emit:l,slots:t}=a,o=()=>e.modelValue===e.activeValue,u=()=>{if(!e.disabled&&!e.loading){var a=o()?e.inactiveValue:e.activeValue;l("update:modelValue",a),l("change",a)}},c=()=>{if(e.loading){var a=o()?e.activeColor:e.inactiveColor;return(0,n.Wm)(s.gb,{class:d("loading"),color:a},null)}if(t.node)return t.node()};return(0,i.aM)(()=>e.modelValue),()=>{var a,{size:l,loading:i,disabled:s,activeColor:v,inactiveColor:m}=e,h=o(),f={fontSize:(0,r.Nn)(l),backgroundColor:h?v:m};return(0,n.Wm)("div",{role:"switch",class:d({on:h,loading:i,disabled:s}),style:f,tabindex:s?void 0:0,"aria-checked":h,onClick:u},[(0,n.Wm)("div",{class:d("node")},[c()]),null===(a=t.background)||void 0===a?void 0:a.call(t)])}}})},79193:function(e,a,l){l("82116"),l("17989");var n=l("38061"),t=l("13047"),o=l("82460"),r=l("81243"),i=l("61163"),s=l("26935"),u=l("46736"),d=l("52454"),[c,v]=(0,t.do)("toast"),m=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay","zIndex"],h={icon:String,show:Boolean,type:(0,o.SQ)("text"),overlay:Boolean,message:o.Or,iconSize:o.Or,duration:(0,o.qM)(2e3),position:(0,o.SQ)("middle"),teleport:[String,Object],wordBreak:String,className:o.Vg,iconPrefix:String,transition:(0,o.SQ)("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:o.Vg,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean,zIndex:o.Or};a.Z=(0,n.aZ)({name:c,props:h,emits:["update:show"],setup(e,a){var l,{emit:t,slots:o}=a,c=!1,h=()=>{var a=e.show&&e.forbidClick;c!==a&&(c=a,(0,i.G)(c))},f=e=>t("update:show",e),g=()=>{e.closeOnClick&&f(!1)},p=()=>clearTimeout(l),y=()=>{var{icon:a,type:l,iconSize:t,iconPrefix:o,loadingType:r}=e;return a||"success"===l||"fail"===l?(0,n.Wm)(s.JO,{name:a||l,size:t,class:v("icon"),classPrefix:o},null):"loading"===l?(0,n.Wm)(d.gb,{class:v("loading"),size:t,type:r},null):void 0},b=()=>{var{type:a,message:l}=e;return o.message?(0,n.Wm)("div",{class:v("text")},[o.message()]):(0,r.Xq)(l)&&""!==l?"html"===a?(0,n.Wm)("div",{key:0,class:v("text"),innerHTML:String(l)},null):(0,n.Wm)("div",{class:v("text")},[l]):void 0};return(0,n.YP)(()=>[e.show,e.forbidClick],h),(0,n.YP)(()=>[e.show,e.type,e.message,e.duration],()=>{p(),e.show&&e.duration>0&&(l=setTimeout(()=>{f(!1)},e.duration))}),(0,n.bv)(h),(0,n.Ah)(h),()=>(0,n.Wm)(u.GI,(0,n.dG)({class:[v([e.position,"normal"===e.wordBreak?"break-normal":e.wordBreak,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:g,onClosed:p,"onUpdate:show":f},(0,r.ei)(e,m)),{default:()=>[y(),b()]})}})},46051:function(e,a,l){l.d(a,{CF:function(){return v},LJ:function(){return g},XA:function(){return f},di:function(){return h},yg:function(){return p}}),l("24836"),l("41712"),l("80855"),l("10502"),l("7978"),l("66746"),l("17530"),l("87604"),l("57024"),l("22175"),l("85322"),l("47897"),l("48943"),l("43356"),l("82116"),l("17989"),l("96245"),l("37232"),l("70629"),l("61557"),l("31564"),l("8649");var n=l("38061"),t=l("29389"),o=l("81243"),r=l("70094"),i=l("79193"),s=[],u=(0,o.l7)({},{icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1}),d=new Map;function c(e){return(0,o.Kn)(e)?e:{message:e}}function v(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!o._f)return{};var a=function(){if(!s.length){var e=function(){var{instance:e,unmount:a}=(0,r.H)({setup(){var e=(0,t.iH)(""),{open:a,state:l,close:o,toggle:s}=(0,r.o)(),u=()=>{};return(0,n.YP)(e,e=>{l.message=e}),(0,n.FN)().render=()=>(0,n.Wm)(i.Z,(0,n.dG)(l,{onClosed:u,"onUpdate:show":s}),null),{open:a,close:o,message:e}}});return e}();s.push(e)}return s[s.length-1]}(),l=c(e);return a.open((0,o.l7)({},u,d.get(l.type||u.type),l)),a}var m=e=>a=>v((0,o.l7)({type:e},c(a))),h=m("loading"),f=m("success"),g=m("fail"),p=e=>{if(s.length){if(e)s.forEach(e=>{e.close()}),s=[];else{var a;s[0].close()}}}},34860:function(e,a,l){var n=l("38061"),t=l("29389"),o=l("55869"),r=l("90872"),i=l("58162"),s=l("46051");a.Z=(0,n.aZ)({__name:"index",setup(e){var a=(0,i.q)({"zh-CN":{areaColumnsPlaceholder:["\u8BF7\u9009\u62E9","\u8BF7\u9009\u62E9","\u8BF7\u9009\u62E9"],searchResult:[{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3",address:"\u676D\u5DDE\u5E02\u897F\u6E56\u533A"},{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3G\u5EA7"},{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3H\u5EA7",address:"\u676D\u5DDE\u5E02\u897F\u6E56\u533A"}]},"en-US":{areaColumnsPlaceholder:["Choose","Choose","Choose"],searchResult:[{name:"Name1",address:"Address"},{name:"Name2"},{name:"Name3",address:"Address"}]}}),l=(0,t.iH)([]),u=()=>(0,s.CF)(a("save")),d=()=>(0,s.CF)(a("delete")),c=e=>{l.value=e?a("searchResult"):[]};return(e,i)=>{var s=(0,n.up)("demo-block");return(0,n.wg)(),(0,n.j4)(s,{title:(0,t.SU)(a)("basicUsage")},{default:(0,n.w5)(()=>[(0,n.Wm)((0,t.SU)(o.ZP),{"area-list":(0,t.SU)(r.H),"show-delete":"","show-set-default":"","show-search-result":"","search-result":l.value,"area-columns-placeholder":(0,t.SU)(a)("areaColumnsPlaceholder"),onSave:u,onDelete:d,onChangeDetail:c},null,8,["area-list","search-result","area-columns-placeholder"])]),_:1},8,["title"])}}})},55869:function(e,a,l){var n=l("61166"),t=l("82761"),o=(0,n.n)(t.Z);a.ZP=o},26339:function(e,a,l){l.d(a,{uN:function(){return o}});var n=l("61166"),t=l("30990"),o=(0,n.n)(t.Z);a.ZP=o},91238:function(e,a,l){l.d(a,{If:function(){return i},NC:function(){return o},eW:function(){return t},h5:function(){return n}}),l("24836"),l("41712"),l("80855"),l("10502"),l("7978"),l("66746"),l("17530"),l("87604"),l("57024"),l("22175"),l("85322"),l("47897"),l("48943"),l("43356"),l("82116"),l("17989"),l("31564"),l("8649"),l("70629"),l("61557"),l("51185");var n="000000",t=["title","cancel","confirm","toolbar","columns-top","columns-bottom"],o=["title","loading","readonly","optionHeight","swipeDuration","visibleOptionNum","cancelButtonText","confirmButtonText"],r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;return{text:e,value:a,children:l}};function i(e){var{areaList:a,columnsNum:l,columnsPlaceholder:t}=e,{city_list:o={},county_list:i={},province_list:s={}}=a,u=+l>1,d=+l>2,c=()=>{if(u)return t.length>1?[r(t[1],n,d?[]:void 0)]:[]},v=new Map;Object.keys(s).forEach(e=>{v.set(e.slice(0,2),r(s[e],e,c()))});var m=new Map;if(u){var h=()=>{if(d)return t.length>2?[r(t[2])]:[]};Object.keys(o).forEach(e=>{var a=r(o[e],e,h());m.set(e.slice(0,4),a);var l=v.get(e.slice(0,2));l&&l.children.push(a)})}d&&Object.keys(i).forEach(e=>{var a=m.get(e.slice(0,4));a&&a.children.push(r(i[e],e))});var f=Array.from(v.values());if(t.length){var g=d?[r(t[2])]:void 0,p=u?[r(t[1],n,g)]:void 0;f.unshift(r(t[0],n,p))}return f}},45078:function(e,a,l){l.d(a,{zx:function(){return o}});var n=l("61166"),t=l("46268"),o=(0,n.n)(t.Z);a.ZP=o},38441:function(e,a,l){l.d(a,{l0:function(){return o}});var n=l("61166"),t=l("83923"),o=(0,n.n)(t.Z);a.ZP=o},81398:function(e,a,l){l.d(a,{rs:function(){return o}});var n=l("61166"),t=l("79791"),o=(0,n.n)(t.Z);a.ZP=o},61163:function(e,a,l){l.d(a,{G:function(){return t}});var n=0;function t(e){e?(!n&&document.body.classList.add("van-toast--unclickable"),n++):n&&!--n&&document.body.classList.remove("van-toast--unclickable")}},70094:function(e,a,l){l.d(a,{H:function(){return s},o:function(){return i}});var n=l("29389"),t=l("51837"),o=l("81243"),r=l("53190");function i(){var e=(0,n.qj)({show:!1}),a=a=>{e.show=a},l=l=>{(0,o.l7)(e,l,{transitionAppear:!0}),a(!0)},t=()=>a(!1);return(0,r.F)({open:l,close:t,toggle:a}),{open:l,close:t,state:e,toggle:a}}function s(e){var a=(0,t.ri)(e),l=document.createElement("div");return document.body.appendChild(l),{instance:a.mount(l),unmount(){a.unmount(),document.body.removeChild(l)}}}}}]);