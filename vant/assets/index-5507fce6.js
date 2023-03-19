import{z as ge,A as me,f as he,v as be,B as ye,u as Ie,h as ve,n as Ce,c as Se,e as Ve,i as v,C as j,D as xe,l as q,E as Ee,F as Me}from"./use-translate-f5915e0e.js";import{C as ke,c as we}from"./index-99011cf0.js";import{u as Te}from"./use-id-2cc12458.js";import{u as Le}from"./use-expose-74d6f7e3.js";import{I as P}from"./index-f40ec2de.js";import{A as Pe,H as Ae,y as A,D as C,P as Re,u as Be,q as M,M as Fe,e as u,B as De,g as Ne}from"./vue-libs-12a1683e.js";import{n as B,m as k,u as Oe,c as ze,w as We}from"./with-install-e688503b.js";import{F as _e}from"./constant-a81ffd37.js";function U(t){return Array.isArray(t)?!t.length:t===0?!1:!t}function $e(t,a){if(U(t)){if(a.required)return!1;if(a.validateEmpty===!1)return!0}return!(a.pattern&&!a.pattern.test(String(t)))}function je(t,a){return new Promise(o=>{const f=a.validator(t,a);if(be(f)){f.then(o);return}o(f)})}function H(t,a){const{message:o}=a;return ye(o)?o(t,a):o||""}function qe({target:t}){t.composing=!0}function K({target:t}){t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}function He(t,a){const o=ge();t.style.height="auto";let f=t.scrollHeight;if(he(a)){const{maxHeight:r,minHeight:c}=a;r!==void 0&&(f=Math.min(f,r)),c!==void 0&&(f=Math.max(f,c))}f&&(t.style.height=`${f}px`,me(o))}function Ke(t){return t==="number"?{type:"text",inputmode:"decimal"}:t==="digit"?{type:"tel",inputmode:"numeric"}:{type:t}}function y(t){return[...t].length}function R(t,a){return[...t].slice(0,a).join("")}const[Ue,g]=Se("field"),Ye={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:B,formatter:Function,clearIcon:k("clear"),modelValue:ze(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:k("focus"),formatTrigger:k("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},Je=Ve({},we,Ye,{rows:B,type:k("text"),rules:Array,autosize:[Boolean,Object],labelWidth:B,labelClass:Oe,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}}),Ge=Pe({name:Ue,props:Je,emits:["blur","focus","clear","keypress","clickInput","endValidate","startValidate","clickLeftIcon","clickRightIcon","update:modelValue"],setup(t,{emit:a,slots:o}){const f=Te(),r=Ae({status:"unvalidated",focused:!1,validateMessage:""}),c=A(),F=A(),w=A(),{parent:m}=Ie(_e),I=()=>String(t.modelValue??""),h=e=>{if(v(t[e]))return t[e];if(m&&v(m.props[e]))return m.props[e]},Y=C(()=>{const e=h("readonly");if(t.clearable&&!e){const n=I()!=="",i=t.clearTrigger==="always"||t.clearTrigger==="focus"&&r.focused;return n&&i}return!1}),D=C(()=>w.value&&o.input?w.value():t.modelValue),J=e=>e.reduce((n,i)=>n.then(()=>{if(r.status==="failed")return;let{value:l}=D;if(i.formatter&&(l=i.formatter(l,i)),!$e(l,i)){r.status="failed",r.validateMessage=H(l,i);return}if(i.validator)return U(l)&&i.validateEmpty===!1?void 0:je(l,i).then(s=>{s&&typeof s=="string"?(r.status="failed",r.validateMessage=s):s===!1&&(r.status="failed",r.validateMessage=H(l,i))})}),Promise.resolve()),S=()=>{r.status="unvalidated",r.validateMessage=""},N=()=>a("endValidate",{status:r.status,message:r.validateMessage}),O=(e=t.rules)=>new Promise(n=>{S(),e?(a("startValidate"),J(e).then(()=>{r.status==="failed"?(n({name:t.name,message:r.validateMessage}),N()):(r.status="passed",n(),N())})):n()}),T=e=>{if(m&&t.rules){const{validateTrigger:n}=m.props,i=j(n).includes(e),l=t.rules.filter(s=>s.trigger?j(s.trigger).includes(e):i);l.length&&O(l)}},G=e=>{var i;const{maxlength:n}=t;if(v(n)&&y(e)>+n){const l=I();if(l&&y(l)===+n)return l;const s=(i=c.value)==null?void 0:i.selectionEnd;if(r.focused&&s){const d=[...e],b=d.length-+n;return d.splice(s-b,b),d.join("")}return R(e,+n)}return e},V=(e,n="onChange")=>{const i=e;e=G(e);const l=y(i)-y(e);if(t.type==="number"||t.type==="digit"){const d=t.type==="number";e=xe(e,d,d)}let s=0;if(t.formatter&&n===t.formatTrigger){const{formatter:d,maxlength:b}=t;if(e=d(e),v(b)&&y(e)>+b&&(e=R(e,+b)),c.value&&r.focused){const{selectionEnd:E}=c.value,$=R(i,E);s=y(d($))-y($)}}if(c.value&&c.value.value!==e)if(r.focused){let{selectionStart:d,selectionEnd:b}=c.value;if(c.value.value=e,v(d)&&v(b)){const E=y(e);l?(d-=l,b-=l):s&&(d+=s,b+=s),c.value.setSelectionRange(Math.min(d,E),Math.min(b,E))}}else c.value.value=e;e!==t.modelValue&&a("update:modelValue",e)},Q=e=>{e.target.composing||V(e.target.value)},L=()=>{var e;return(e=c.value)==null?void 0:e.blur()},X=()=>{var e;return(e=c.value)==null?void 0:e.focus()},x=()=>{const e=c.value;t.type==="textarea"&&t.autosize&&e&&He(e,t.autosize)},Z=e=>{r.focused=!0,a("focus",e),M(x),h("readonly")&&L()},p=e=>{h("readonly")||(r.focused=!1,V(I(),"onBlur"),a("blur",e),T("onBlur"),M(x),Me())},z=e=>a("clickInput",e),ee=e=>a("clickLeftIcon",e),te=e=>a("clickRightIcon",e),ne=e=>{q(e),a("update:modelValue",""),a("clear",e)},W=C(()=>{if(typeof t.error=="boolean")return t.error;if(m&&m.props.showError&&r.status==="failed")return!0}),ae=C(()=>{const e=h("labelWidth");if(e)return{width:ve(e)}}),re=e=>{e.keyCode===13&&(!(m&&m.props.submitOnEnter)&&t.type!=="textarea"&&q(e),t.type==="search"&&L()),a("keypress",e)},_=()=>t.id||`${f}-input`,ie=()=>r.status,oe=()=>{const e=g("control",[h("inputAlign"),{error:W.value,custom:!!o.input,"min-height":t.type==="textarea"&&!t.autosize}]);if(o.input)return u("div",{class:e,onClick:z},[o.input()]);const n={id:_(),ref:c,name:t.name,rows:t.rows!==void 0?+t.rows:void 0,class:e,disabled:h("disabled"),readonly:h("readonly"),autofocus:t.autofocus,placeholder:t.placeholder,autocomplete:t.autocomplete,enterkeyhint:t.enterkeyhint,"aria-labelledby":t.label?`${f}-label`:void 0,onBlur:p,onFocus:Z,onInput:Q,onClick:z,onChange:K,onKeypress:re,onCompositionend:K,onCompositionstart:qe};return t.type==="textarea"?u("textarea",n,null):u("input",De(Ke(t.type),n),null)},le=()=>{const e=o["left-icon"];if(t.leftIcon||e)return u("div",{class:g("left-icon"),onClick:ee},[e?e():u(P,{name:t.leftIcon,classPrefix:t.iconPrefix},null)])},se=()=>{const e=o["right-icon"];if(t.rightIcon||e)return u("div",{class:g("right-icon"),onClick:te},[e?e():u(P,{name:t.rightIcon,classPrefix:t.iconPrefix},null)])},ce=()=>{if(t.showWordLimit&&t.maxlength){const e=y(I());return u("div",{class:g("word-limit")},[u("span",{class:g("word-num")},[e]),Ne("/"),t.maxlength])}},ue=()=>{if(m&&m.props.showErrorMessage===!1)return;const e=t.errorMessage||r.validateMessage;if(e){const n=o["error-message"],i=h("errorMessageAlign");return u("div",{class:g("error-message",i)},[n?n({message:e}):e])}},fe=()=>{const e=h("colon")?":":"";if(o.label)return[o.label(),e];if(t.label)return u("label",{id:`${f}-label`,for:_()},[t.label+e])},de=()=>[u("div",{class:g("body")},[oe(),Y.value&&u(P,{ref:F,name:t.clearIcon,class:g("clear")},null),se(),o.button&&u("div",{class:g("button")},[o.button()])]),ce(),ue()];return Le({blur:L,focus:X,validate:O,formValue:D,resetValidation:S,getValidationStatus:ie}),Re(Ee,{customValue:w,resetValidation:S,validateWithTrigger:T}),Be(()=>t.modelValue,()=>{V(I()),S(),T("onChange"),M(x)}),Fe(()=>{V(I(),t.formatTrigger),M(x)}),Ce("touchstart",ne,{target:C(()=>{var e;return(e=F.value)==null?void 0:e.$el})}),()=>{const e=h("disabled"),n=h("labelAlign"),i=le(),l=()=>{const s=fe();return n==="top"?[i,s].filter(Boolean):s||[]};return u(ke,{size:t.size,class:g({error:W.value,disabled:e,[`label-${n}`]:n}),center:t.center,border:t.border,isLink:t.isLink,clickable:t.clickable,titleStyle:ae.value,valueClass:g("value"),titleClass:[g("label",[n,{required:t.required}]),t.labelClass],arrowDirection:t.arrowDirection},{icon:i&&n!=="top"?()=>i:null,title:l,value:de,extra:o.extra})}}}),Qe=We(Ge),it=Qe;export{Qe as F,it as V,Ye as f};
