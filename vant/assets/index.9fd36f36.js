import{c as p,b as P,E as b,e as G,u as v,p as _}from"./use-translate.fec5be1c.js";import{n as h,b as E,t as O,w as S}from"./with-install.6c9f4f06.js";import{u as f}from"./use-expose.9edd25e2.js";import{z as k,x as V,e as x,D as y,A}from"./vue-libs.7ad34eae.js";import{c as w,C as z}from"./Checker.92c3e531.js";const[C,B]=p("checkbox-group"),D={max:h,disabled:Boolean,iconSize:h,direction:String,modelValue:E(),checkedColor:String},g=Symbol(C),Y=k({name:C,props:D,emits:["change","update:modelValue"],setup(a,{emit:r,slots:u}){const{children:c,linkChildren:i}=P(g),l=e=>r("update:modelValue",e),s=(e={})=>{typeof e=="boolean"&&(e={checked:e});const{checked:t,skipDisabled:d}=e,n=c.filter(o=>o.props.bindGroup?o.props.disabled&&d?o.checked.value:t!=null?t:!o.checked.value:!1).map(o=>o.name);l(n)};return V(()=>a.modelValue,e=>r("change",e)),f({toggleAll:s}),b(()=>a.modelValue),i({props:a,updateValue:l}),()=>{var e;return x("div",{class:B([a.direction])},[(e=u.default)==null?void 0:e.call(u)])}}}),[K,N]=p("checkbox"),$=G({},w,{bindGroup:O}),F=k({name:K,props:$,emits:["change","update:modelValue"],setup(a,{emit:r,slots:u}){const{parent:c}=v(g),i=e=>{const{name:t}=a,{max:d,modelValue:m}=c.props,n=m.slice();if(e)!(d&&n.length>=d)&&!n.includes(t)&&(n.push(t),a.bindGroup&&c.updateValue(n));else{const o=n.indexOf(t);o!==-1&&(n.splice(o,1),a.bindGroup&&c.updateValue(n))}},l=y(()=>c&&a.bindGroup?c.props.modelValue.indexOf(a.name)!==-1:!!a.modelValue),s=(e=!l.value)=>{c&&a.bindGroup?i(e):r("update:modelValue",e)};return V(()=>a.modelValue,e=>r("change",e)),f({toggle:s,props:a,checked:l}),b(()=>a.modelValue),()=>x(z,A({bem:N,role:"checkbox",parent:c,checked:l.value,onToggle:s},a),_(u,["default","icon"]))}}),H=S(F),j=H;export{H as C,j as V,Y as _};
