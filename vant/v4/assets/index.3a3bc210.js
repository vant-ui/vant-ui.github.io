import{s as oe,x as le,y as se,z as ce,f as ue,c as de,e as fe,u as ge,h as me,i as w,A as N,B as he,C as be,l as O,D as ye}from"./use-translate.c56bc05e.js";import{n as E,m as S,u as Ie,c as Ce,w as xe}from"./with-install.2d06a5b3.js";import{F as Se}from"./constant.80c6de18.js";import{c as Ve,C as ve}from"./index.5e3bace1.js";import{u as ke}from"./use-id.5b8801cd.js";import{u as we}from"./use-expose.2dad0d8e.js";import{I as T}from"./index.e7e14384.js";import{A as Te,H as Me,x as D,D as C,I as Ee,y as Pe,q as x,N as Ae,e as l,B as Le,h as Be}from"./vue-libs.a3cd7f61.js";function Re(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function Fe(e,a){return!(a.required&&Re(e)||a.pattern&&!a.pattern.test(String(e)))}function Ne(e,a){return new Promise(o=>{const s=a.validator(e,a);if(oe(s)){s.then(o);return}o(s)})}function z(e,a){const{message:o}=a;return le(o)?o(e,a):o||""}function Oe({target:e}){e.composing=!0}function W({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function De(e,a){const o=se();e.style.height="auto";let s=e.scrollHeight;if(ue(a)){const{maxHeight:i,minHeight:g}=a;i!==void 0&&(s=Math.min(s,i)),g!==void 0&&(s=Math.max(s,g))}s&&(e.style.height=`${s}px`,ce(o))}function ze(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function M(e){return[...e].length}function We(e,a){return[...e].slice(0,a).join("")}const[_e,u]=de("field"),$e={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:E,formatter:Function,clearIcon:S("clear"),modelValue:Ce(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:S("focus"),formatTrigger:S("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},je=fe({},Ve,$e,{rows:E,type:S("text"),rules:Array,autosize:[Boolean,Object],labelWidth:E,labelClass:Ie,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}}),qe=Te({name:_e,props:je,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(e,{emit:a,slots:o}){const s=ke(),i=Me({status:"unvalidated",focused:!1,validateMessage:""}),g=D(),V=D(),{parent:d}=ge(Se),h=()=>{var t;return String((t=e.modelValue)!=null?t:"")},f=t=>{if(w(e[t]))return e[t];if(d&&w(d.props[t]))return d.props[t]},_=C(()=>{const t=f("readonly");if(e.clearable&&!t){const n=h()!=="",r=e.clearTrigger==="always"||e.clearTrigger==="focus"&&i.focused;return n&&r}return!1}),P=C(()=>V.value&&o.input?V.value():e.modelValue),$=t=>t.reduce((n,r)=>n.then(()=>{if(i.status==="failed")return;let{value:c}=P;if(r.formatter&&(c=r.formatter(c,r)),!Fe(c,r)){i.status="failed",i.validateMessage=z(c,r);return}if(r.validator)return Ne(c,r).then(m=>{m&&typeof m=="string"?(i.status="failed",i.validateMessage=m):m===!1&&(i.status="failed",i.validateMessage=z(c,r))})}),Promise.resolve()),b=()=>{i.status="unvalidated",i.validateMessage=""},A=()=>a("endValidate",{status:i.status}),L=(t=e.rules)=>new Promise(n=>{b(),t?(a("startValidate"),$(t).then(()=>{i.status==="failed"?(n({name:e.name,message:i.validateMessage}),A()):(i.status="passed",n(),A())})):n()}),v=t=>{if(d&&e.rules){const{validateTrigger:n}=d.props,r=N(n).includes(t),c=e.rules.filter(m=>m.trigger?N(m.trigger).includes(t):r);c.length&&L(c)}},j=t=>{const{maxlength:n}=e;if(w(n)&&M(t)>n){const r=h();return r&&M(r)===+n?r:We(t,+n)}return t},y=(t,n="onChange")=>{if(t=j(t),e.type==="number"||e.type==="digit"){const r=e.type==="number";t=he(t,r,r)}e.formatter&&n===e.formatTrigger&&(t=e.formatter(t)),g.value&&g.value.value!==t&&(g.value.value=t),t!==e.modelValue&&a("update:modelValue",t)},q=t=>{t.target.composing||y(t.target.value)},k=()=>{var t;return(t=g.value)==null?void 0:t.blur()},H=()=>{var t;return(t=g.value)==null?void 0:t.focus()},I=()=>{const t=g.value;e.type==="textarea"&&e.autosize&&t&&De(t,e.autosize)},K=t=>{i.focused=!0,a("focus",t),x(I),f("readonly")&&k()},U=t=>{f("readonly")||(i.focused=!1,y(h(),"onBlur"),a("blur",t),v("onBlur"),x(I),ye())},B=t=>a("clickInput",t),Y=t=>a("clickLeftIcon",t),J=t=>a("clickRightIcon",t),G=t=>{O(t),a("update:modelValue",""),a("clear",t)},R=C(()=>{if(typeof e.error=="boolean")return e.error;if(d&&d.props.showError&&i.status==="failed")return!0}),Q=C(()=>{const t=f("labelWidth");if(t)return{width:me(t)}}),X=t=>{t.keyCode===13&&(!(d&&d.props.submitOnEnter)&&e.type!=="textarea"&&O(t),e.type==="search"&&k()),a("keypress",t)},F=()=>e.id||`${s}-input`,Z=()=>i.status,p=()=>{const t=u("control",[f("inputAlign"),{error:R.value,custom:!!o.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(o.input)return l("div",{class:t,onClick:B},[o.input()]);const n={id:F(),ref:g,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:f("disabled"),readonly:f("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${s}-label`:void 0,onBlur:U,onFocus:K,onInput:q,onClick:B,onChange:W,onKeypress:X,onCompositionend:W,onCompositionstart:Oe};return e.type==="textarea"?l("textarea",n,null):l("input",Le(ze(e.type),n),null)},ee=()=>{const t=o["left-icon"];if(e.leftIcon||t)return l("div",{class:u("left-icon"),onClick:Y},[t?t():l(T,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},te=()=>{const t=o["right-icon"];if(e.rightIcon||t)return l("div",{class:u("right-icon"),onClick:J},[t?t():l(T,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},ne=()=>{if(e.showWordLimit&&e.maxlength){const t=M(h());return l("div",{class:u("word-limit")},[l("span",{class:u("word-num")},[t]),Be("/"),e.maxlength])}},ae=()=>{if(d&&d.props.showErrorMessage===!1)return;const t=e.errorMessage||i.validateMessage;if(t){const n=o["error-message"],r=f("errorMessageAlign");return l("div",{class:u("error-message",r)},[n?n({message:t}):t])}},re=()=>{const t=f("colon")?":":"";if(o.label)return[o.label(),t];if(e.label)return l("label",{id:`${s}-label`,for:F()},[e.label+t])},ie=()=>[l("div",{class:u("body")},[p(),_.value&&l(T,{name:e.clearIcon,class:u("clear"),onTouchstart:G},null),te(),o.button&&l("div",{class:u("button")},[o.button()])]),ne(),ae()];return we({blur:k,focus:H,validate:L,formValue:P,resetValidation:b,getValidationStatus:Z}),Ee(be,{customValue:V,resetValidation:b,validateWithTrigger:v}),Pe(()=>e.modelValue,()=>{y(h()),b(),v("onChange"),x(I)}),Ae(()=>{y(h(),e.formatTrigger),x(I)}),()=>{const t=f("disabled"),n=f("labelAlign"),r=re(),c=ee();return l(ve,{size:e.size,icon:e.leftIcon,class:u({error:R.value,disabled:t,[`label-${n}`]:n}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:Q.value,valueClass:u("value"),titleClass:[u("label",[n,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:c?()=>c:null,title:r?()=>r:null,value:ie,extra:o.extra})}}}),He=xe(qe),pe=He;export{He as F,pe as V,$e as f};
