import{s as le,x as se,y as ce,z as ue,f as de,c as fe,e as ge,u as me,h as he,i as w,A as N,B as be,C as ye,l as O,D as ve}from"./use-translate.4764287f.js";import{n as M,m as x,u as Ce,c as Ie,w as xe}from"./with-install.bb994bce.js";import{F as Se}from"./constant.80c6de18.js";import{c as Ve,C as ke}from"./index.010991be.js";import{u as we}from"./use-id.fe691ba6.js";import{u as Ee}from"./use-expose.6911a823.js";import{I as E}from"./index.de1d0b70.js";import{z as Te,H as Me,C as z,D as C,I as Pe,x as Ae,q as I,N as Be,e as l,A as Le,h as Re}from"./vue-libs.7ad34eae.js";function _(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function Fe(e,n){if(_(e)){if(n.required)return!1;if(n.validateEmpty===!1)return!0}return!(n.pattern&&!n.pattern.test(String(e)))}function Ne(e,n){return new Promise(o=>{const s=n.validator(e,n);if(le(s)){s.then(o);return}o(s)})}function D(e,n){const{message:o}=n;return se(o)?o(e,n):o||""}function Oe({target:e}){e.composing=!0}function W({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function ze(e,n){const o=ce();e.style.height="auto";let s=e.scrollHeight;if(de(n)){const{maxHeight:i,minHeight:g}=n;i!==void 0&&(s=Math.min(s,i)),g!==void 0&&(s=Math.max(s,g))}s&&(e.style.height=`${s}px`,ue(o))}function De(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function T(e){return[...e].length}function We(e,n){return[...e].slice(0,n).join("")}const[_e,u]=fe("field"),$e={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:M,formatter:Function,clearIcon:x("clear"),modelValue:Ie(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:x("focus"),formatTrigger:x("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},je=ge({},Ve,$e,{rows:M,type:x("text"),rules:Array,autosize:[Boolean,Object],labelWidth:M,labelClass:Ce,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}}),qe=Te({name:_e,props:je,emits:["blur","focus","clear","keypress","click-input","end-validate","start-validate","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:n,slots:o}){const s=we(),i=Me({status:"unvalidated",focused:!1,validateMessage:""}),g=z(),S=z(),{parent:d}=me(Se),h=()=>{var t;return String((t=e.modelValue)!=null?t:"")},f=t=>{if(w(e[t]))return e[t];if(d&&w(d.props[t]))return d.props[t]},$=C(()=>{const t=f("readonly");if(e.clearable&&!t){const a=h()!=="",r=e.clearTrigger==="always"||e.clearTrigger==="focus"&&i.focused;return a&&r}return!1}),P=C(()=>S.value&&o.input?S.value():e.modelValue),j=t=>t.reduce((a,r)=>a.then(()=>{if(i.status==="failed")return;let{value:c}=P;if(r.formatter&&(c=r.formatter(c,r)),!Fe(c,r)){i.status="failed",i.validateMessage=D(c,r);return}if(r.validator)return _(c)&&r.validateEmpty===!1?void 0:Ne(c,r).then(m=>{m&&typeof m=="string"?(i.status="failed",i.validateMessage=m):m===!1&&(i.status="failed",i.validateMessage=D(c,r))})}),Promise.resolve()),b=()=>{i.status="unvalidated",i.validateMessage=""},A=()=>n("end-validate",{status:i.status}),B=(t=e.rules)=>new Promise(a=>{b(),t?(n("start-validate"),j(t).then(()=>{i.status==="failed"?(a({name:e.name,message:i.validateMessage}),A()):(i.status="passed",a(),A())})):a()}),V=t=>{if(d&&e.rules){const{validateTrigger:a}=d.props,r=N(a).includes(t),c=e.rules.filter(m=>m.trigger?N(m.trigger).includes(t):r);c.length&&B(c)}},q=t=>{const{maxlength:a}=e;if(w(a)&&T(t)>a){const r=h();return r&&T(r)===+a?r:We(t,+a)}return t},y=(t,a="onChange")=>{if(t=q(t),e.type==="number"||e.type==="digit"){const r=e.type==="number";t=be(t,r,r)}e.formatter&&a===e.formatTrigger&&(t=e.formatter(t)),g.value&&g.value.value!==t&&(g.value.value=t),t!==e.modelValue&&n("update:modelValue",t)},H=t=>{t.target.composing||y(t.target.value)},k=()=>{var t;return(t=g.value)==null?void 0:t.blur()},K=()=>{var t;return(t=g.value)==null?void 0:t.focus()},v=()=>{const t=g.value;e.type==="textarea"&&e.autosize&&t&&ze(t,e.autosize)},U=t=>{i.focused=!0,n("focus",t),I(v),f("readonly")&&k()},Y=t=>{f("readonly")||(i.focused=!1,y(h(),"onBlur"),n("blur",t),V("onBlur"),I(v),ve())},L=t=>n("click-input",t),J=t=>n("click-left-icon",t),G=t=>n("click-right-icon",t),Q=t=>{O(t),n("update:modelValue",""),n("clear",t)},R=C(()=>{if(typeof e.error=="boolean")return e.error;if(d&&d.props.showError&&i.status==="failed")return!0}),X=C(()=>{const t=f("labelWidth");if(t)return{width:he(t)}}),Z=t=>{t.keyCode===13&&(!(d&&d.props.submitOnEnter)&&e.type!=="textarea"&&O(t),e.type==="search"&&k()),n("keypress",t)},F=()=>e.id||`${s}-input`,p=()=>i.status,ee=()=>{const t=u("control",[f("inputAlign"),{error:R.value,custom:!!o.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(o.input)return l("div",{class:t,onClick:L},[o.input()]);const a={id:F(),ref:g,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,disabled:f("disabled"),readonly:f("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${s}-label`:void 0,onBlur:Y,onFocus:U,onInput:H,onClick:L,onChange:W,onKeypress:Z,onCompositionend:W,onCompositionstart:Oe};return e.type==="textarea"?l("textarea",a,null):l("input",Le(De(e.type),a),null)},te=()=>{const t=o["left-icon"];if(e.leftIcon||t)return l("div",{class:u("left-icon"),onClick:J},[t?t():l(E,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},ne=()=>{const t=o["right-icon"];if(e.rightIcon||t)return l("div",{class:u("right-icon"),onClick:G},[t?t():l(E,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},ae=()=>{if(e.showWordLimit&&e.maxlength){const t=T(h());return l("div",{class:u("word-limit")},[l("span",{class:u("word-num")},[t]),Re("/"),e.maxlength])}},re=()=>{if(d&&d.props.showErrorMessage===!1)return;const t=e.errorMessage||i.validateMessage;if(t){const a=o["error-message"],r=f("errorMessageAlign");return l("div",{class:u("error-message",r)},[a?a({message:t}):t])}},ie=()=>{const t=f("colon")?":":"";if(o.label)return[o.label(),t];if(e.label)return l("label",{id:`${s}-label`,for:F()},[e.label+t])},oe=()=>[l("div",{class:u("body")},[ee(),$.value&&l(E,{name:e.clearIcon,class:u("clear"),onTouchstart:Q},null),ne(),o.button&&l("div",{class:u("button")},[o.button()])]),ae(),re()];return Ee({blur:k,focus:K,validate:B,formValue:P,resetValidation:b,getValidationStatus:p}),Pe(ye,{customValue:S,resetValidation:b,validateWithTrigger:V}),Ae(()=>e.modelValue,()=>{y(h()),b(),V("onChange"),I(v)}),Be(()=>{y(h(),e.formatTrigger),I(v)}),()=>{const t=f("disabled"),a=f("labelAlign"),r=ie(),c=te();return l(ke,{size:e.size,icon:e.leftIcon,class:u({error:R.value,disabled:t,[`label-${a}`]:a}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:X.value,valueClass:u("value"),titleClass:[u("label",[a,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:c?()=>c:null,title:r?()=>r:null,value:oe,extra:o.extra})}}}),He=xe(qe),pe=He;export{He as F,pe as V,$e as f};
