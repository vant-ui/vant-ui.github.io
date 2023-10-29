import{A as _,y as w,e as r,F as W,H as X,D as A,u as Z,q as ee,j as p,v as x,r as ae,o as te,c as le,w as se,C as y}from"./vue-libs-83dbabed.js";import{u as oe}from"./use-expose-efcfdee3.js";import{A as T,a as re}from"./index-bf119be3.js";import{C as M}from"./index-3124e750.js";import{F as ne}from"./index-1869f856.js";import{F as S}from"./index-f5629326.js";import{P as ue}from"./index-4c6d2d8c.js";import{B as L}from"./index-33a62985.js";import{S as ce}from"./index-50a8c299.js";import{n as R,t as U,c as I,b as de,w as ie}from"./with-install-a78877b5.js";import{c as k,e as O,y as me,f as he,a as fe}from"./use-translate-0400f29b.js";import{s as B}from"./function-call-b65aa903.js";import{a as ve}from"./index.esm-6f3b090d.js";import"./Picker-c1509dc8.js";import"./index-e6476cbd.js";import"./use-touch-8cd17a21.js";import"./constant-ee6e27d7.js";import"./use-sync-prop-ref-60eae172.js";import"./index-3bb89b35.js";import"./use-id-c5eb2431.js";import"./use-route-b1061918.js";import"./index-c916422a.js";import"./index-d928a42a.js";import"./on-popup-reopen-bcf43cef.js";import"./use-refs-374c0fba.js";import"./index-e72b81d7.js";import"./interceptor-3c3c2616.js";import"./index-94895153.js";import"./index-5a7b6df9.js";import"./use-lock-scroll-1eff2e8c.js";import"./use-lazy-render-2383afef.js";import"./use-scope-id-e548748d.js";import"./index-b7134fb7.js";import"./mount-component-94eea14a.js";const[ge,N]=k("address-edit-detail"),j=k("address-edit")[2],we=_({name:ge,props:{show:Boolean,rows:R,value:String,rules:Array,focused:Boolean,maxlength:R,searchResult:Array,showSearchResult:Boolean},emits:["blur","focus","input","selectSearch"],setup(e,{emit:s}){const m=w(),h=()=>e.focused&&e.searchResult&&e.showSearchResult,l=u=>{s("selectSearch",u),s("input",`${u.address||""} ${u.name||""}`.trim())},d=()=>{if(!h())return;const{searchResult:u}=e;return u.map(c=>r(M,{clickable:!0,key:(c.name||"")+(c.address||""),icon:"location-o",title:c.name,label:c.address,class:N("search-item"),border:!1,onClick:()=>l(c)},null))},i=u=>s("blur",u),D=u=>s("focus",u),g=u=>s("input",u);return()=>{if(e.show)return r(W,null,[r(S,{autosize:!0,clearable:!0,ref:m,class:N(),rows:e.rows,type:"textarea",rules:e.rules,label:j("addressDetail"),border:!h(),maxlength:e.maxlength,modelValue:e.value,placeholder:j("addressDetail"),onBlur:i,onFocus:D,"onUpdate:modelValue":g},null),d()])}}}),[De,v,n]=k("address-edit"),$={name:"",tel:"",city:"",county:"",country:"",province:"",areaCode:"",isDefault:!1,addressDetail:""},Ce={areaList:Object,isSaving:Boolean,isDeleting:Boolean,validator:Function,showArea:U,showDetail:U,showDelete:Boolean,disableArea:Boolean,searchResult:Array,telMaxlength:R,showSetDefault:Boolean,saveButtonText:String,areaPlaceholder:String,deleteButtonText:String,showSearchResult:Boolean,detailRows:I(1),detailMaxlength:I(200),areaColumnsPlaceholder:de(),addressInfo:{type:Object,default:()=>O({},$)},telValidator:{type:Function,default:me}},be=_({name:De,props:Ce,emits:["save","focus","change","delete","clickArea","changeArea","changeDetail","selectSearch","changeDefault"],setup(e,{emit:s,slots:m}){const h=w(),l=X({}),d=w(!1),i=w(!1),D=A(()=>he(e.areaList)&&Object.keys(e.areaList).length),g=A(()=>{const{province:a,city:o,county:t,areaCode:f}=l;if(f){const b=[a,o,t];return a&&a===o&&b.splice(1,1),b.filter(Boolean).join("/")}return""}),u=A(()=>{var a;return((a=e.searchResult)==null?void 0:a.length)&&i.value}),c=a=>{i.value=a==="addressDetail",s("focus",a)},F=(a,o)=>{s("change",{key:a,value:o})},C=A(()=>{const{validator:a,telValidator:o}=e,t=(f,b)=>({validator:V=>{if(a){const E=a(f,V);if(E)return E}return V?!0:b}});return{name:[t("name",n("nameEmpty"))],tel:[t("tel",n("telInvalid")),{validator:o,message:n("telInvalid")}],areaCode:[t("areaCode",n("areaEmpty"))],addressDetail:[t("addressDetail",n("addressEmpty"))]}}),z=()=>s("save",l),H=a=>{l.addressDetail=a,s("changeDetail",a)},P=a=>{l.province=a[0].text,l.city=a[1].text,l.county=a[2].text},q=({selectedValues:a,selectedOptions:o})=>{a.some(t=>t===T)?B(n("areaEmpty")):(d.value=!1,P(o),s("changeArea",o))},G=()=>s("delete",l),Y=a=>{l.areaCode=a||""},J=()=>{setTimeout(()=>{i.value=!1})},K=a=>{l.addressDetail=a},Q=()=>{if(e.showSetDefault){const a={"right-icon":()=>r(ce,{modelValue:l.isDefault,"onUpdate:modelValue":o=>l.isDefault=o,onChange:o=>s("changeDefault",o)},null)};return p(r(M,{center:!0,border:!1,title:n("defaultAddress"),class:v("default")},a),[[x,!u.value]])}};return oe({setAreaCode:Y,setAddressDetail:K}),Z(()=>e.addressInfo,a=>{O(l,$,a),ee(()=>{var t;const o=(t=h.value)==null?void 0:t.getSelectedOptions();o&&o.every(f=>f&&f.value!==T)&&P(o)})},{deep:!0,immediate:!0}),()=>{const{disableArea:a}=e;return r(ne,{class:v(),onSubmit:z},{default:()=>{var o;return[r("div",{class:v("fields")},[r(S,{modelValue:l.name,"onUpdate:modelValue":[t=>l.name=t,t=>F("name",t)],clearable:!0,label:n("name"),rules:C.value.name,placeholder:n("name"),onFocus:()=>c("name")},null),r(S,{modelValue:l.tel,"onUpdate:modelValue":[t=>l.tel=t,t=>F("tel",t)],clearable:!0,type:"tel",label:n("tel"),rules:C.value.tel,maxlength:e.telMaxlength,placeholder:n("tel"),onFocus:()=>c("tel")},null),p(r(S,{readonly:!0,label:n("area"),"is-link":!a,modelValue:g.value,rules:e.showArea?C.value.areaCode:void 0,placeholder:e.areaPlaceholder||n("area"),onFocus:()=>c("areaCode"),onClick:()=>{s("clickArea"),d.value=!a}},null),[[x,e.showArea]]),r(we,{show:e.showDetail,rows:e.detailRows,rules:C.value.addressDetail,value:l.addressDetail,focused:i.value,maxlength:e.detailMaxlength,searchResult:e.searchResult,showSearchResult:e.showSearchResult,onBlur:J,onFocus:()=>c("addressDetail"),onInput:H,onSelectSearch:t=>s("selectSearch",t)},null),(o=m.default)==null?void 0:o.call(m)]),Q(),p(r("div",{class:v("buttons")},[r(L,{block:!0,round:!0,type:"primary",text:e.saveButtonText||n("save"),class:v("button"),loading:e.isSaving,nativeType:"submit"},null),e.showDelete&&r(L,{block:!0,round:!0,class:v("button"),loading:e.isDeleting,text:e.deleteButtonText||n("delete"),onClick:G},null)]),[[x,!u.value]]),r(ue,{show:d.value,"onUpdate:show":t=>d.value=t,round:!0,teleport:"body",position:"bottom",lazyRender:!1},{default:()=>[r(re,{modelValue:l.areaCode,"onUpdate:modelValue":t=>l.areaCode=t,ref:h,loading:!D.value,areaList:e.areaList,columnsPlaceholder:e.areaColumnsPlaceholder,onConfirm:q,onCancel:()=>{d.value=!1}},null)]})]}})}}}),Ae=ie(be),ye=Ae,la=_({__name:"index",setup(e){const s=fe({"zh-CN":{areaColumnsPlaceholder:["请选择","请选择","请选择"],searchResult:[{name:"黄龙万科中心",address:"杭州市西湖区"},{name:"黄龙万科中心G座"},{name:"黄龙万科中心H座",address:"杭州市西湖区"}]},"en-US":{areaColumnsPlaceholder:["Choose","Choose","Choose"],searchResult:[{name:"Name1",address:"Address"},{name:"Name2"},{name:"Name3",address:"Address"}]}}),m=w([]),h=()=>B(s("save")),l=()=>B(s("delete")),d=i=>{m.value=i?s("searchResult"):[]};return(i,D)=>{const g=ae("demo-block");return te(),le(g,{title:y(s)("basicUsage")},{default:se(()=>[r(y(ye),{"area-list":y(ve),"show-delete":"","show-set-default":"","show-search-result":"","search-result":m.value,"area-columns-placeholder":y(s)("areaColumnsPlaceholder"),onSave:h,onDelete:l,onChangeDetail:d},null,8,["area-list","search-result","area-columns-placeholder"])]),_:1},8,["title"])}}});export{la as default};