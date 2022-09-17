import{c as _,e as x,F as q,i as he,u as ne,n as oe,l as ae,b as le,G as be,H as j,p as J}from"./use-translate.c7ada534.js";import{n as K,d as B,b as V,c as U,t as ge,m as pe}from"./with-install.fe59c8e0.js";import{H as W,a as Oe}from"./constant.80c6de18.js";import{u as ce}from"./use-expose.582395af.js";import{L as Te}from"./index.17a6cccd.js";import{u as Ce}from"./use-touch.d7fba47b.js";import{A as I,x as k,R as ye,e as d,B as ie,Q as ke,D as y,y as Y}from"./vue-libs.34a885a4.js";import{T as xe,a as Ee}from"./index.6bd558e8.js";const[Pe,p,X]=_("picker"),se=e=>e.find(o=>!o.disabled)||e[0];function Se(e,o){const t=e[0];if(t){if(Array.isArray(t))return"multiple";if(o.children in t)return"cascade"}return"default"}function z(e,o){o=q(o,0,e.length);for(let t=o;t<e.length;t++)if(!e[t].disabled)return t;for(let t=o-1;t>=0;t--)if(!e[t].disabled)return t;return 0}const Z=(e,o,t)=>o!==void 0&&!!e.find(s=>s[t.value]===o);function Q(e,o,t){const s=e.findIndex(v=>v[t.value]===o),l=z(e,s);return e[l]}function we(e,o,t){const s=[];let l={[o.children]:e},v=0;for(;l&&l[o.children];){const h=l[o.children],u=t.value[v];if(l=he(u)?Q(h,u,o):void 0,!l&&h.length){const i=se(h)[o.value];l=Q(h,i,o)}v++,s.push(h)}return s}function He(e){const{transform:o}=window.getComputedStyle(e),t=o.slice(7,o.length-1).split(", ")[5];return Number(t)}function De(e){return x({text:"text",value:"value",children:"children"},e)}const ee=200,te=300,Me=15,[re,L]=_("picker-column"),ue=Symbol(re),Ne=I({name:re,props:{value:K,fields:B(Object),options:V(),readonly:Boolean,allowHtml:Boolean,optionHeight:B(Number),swipeDuration:B(K),visibleOptionNum:B(K)},emits:["change","clickOption"],setup(e,{emit:o,slots:t}){let s,l,v,h,u;const i=k(),g=k(),f=k(0),b=k(0),T=Ce(),E=()=>e.options.length,C=()=>e.optionHeight*(+e.visibleOptionNum-1)/2,O=c=>{const r=z(e.options,c),n=-r*e.optionHeight,a=()=>{const m=e.options[r][e.fields.value];m!==e.value&&o("change",m)};s&&n!==f.value?u=a:a(),f.value=n},A=c=>{s||e.readonly||(u=null,b.value=ee,O(c),o("clickOption",e.options[c]))},S=c=>q(Math.round(-c/e.optionHeight),0,E()-1),w=(c,r)=>{const n=Math.abs(c/r);c=f.value+n/.003*(c<0?-1:1);const a=S(c);b.value=+e.swipeDuration,O(a)},H=()=>{s=!1,b.value=0,u&&(u(),u=null)},R=c=>{if(!e.readonly){if(T.start(c),s){const r=He(g.value);f.value=Math.min(0,r-C())}b.value=0,l=f.value,v=Date.now(),h=l,u=null}},F=c=>{if(e.readonly)return;T.move(c),T.isVertical()&&(s=!0,ae(c,!0)),f.value=q(l+T.deltaY.value,-(E()*e.optionHeight),e.optionHeight);const r=Date.now();r-v>te&&(v=r,h=f.value)},D=()=>{if(e.readonly)return;const c=f.value-h,r=Date.now()-v;if(r<te&&Math.abs(c)>Me){w(c,r);return}const a=S(f.value);b.value=ee,O(a),setTimeout(()=>{s=!1},0)},M=()=>{const c={height:`${e.optionHeight}px`};return e.options.map((r,n)=>{const a=r[e.fields.text],{disabled:m}=r,N=r[e.fields.value],P={role:"button",style:c,tabindex:m?-1:0,class:[L("item",{disabled:m,selected:N===e.value}),r.className],onClick:()=>A(n)},ve={class:"van-ellipsis",[e.allowHtml?"innerHTML":"textContent"]:a};return d("li",P,[t.option?t.option(r):d("div",ve,null)])})};return ne(ue),ce({stopMomentum:H}),ye(()=>{const c=e.options.findIndex(a=>a[e.fields.value]===e.value),n=-z(e.options,c)*e.optionHeight;f.value=n}),oe("touchmove",F,{target:i}),()=>d("div",{ref:i,class:L(),onTouchstartPassive:R,onTouchend:D,onTouchcancel:D},[d("ul",{ref:g,style:{transform:`translate3d(0, ${f.value+C()}px, 0)`,transitionDuration:`${b.value}ms`,transitionProperty:b.value?"all":"none"},class:L("wrapper"),onTransitionend:H},[M()])])}}),[Be]=_("picker-toolbar"),$={title:String,cancelButtonText:String,confirmButtonText:String},Ve=["cancel","confirm","title","toolbar"],_e=Object.keys($),me=I({name:Be,props:$,emits:["confirm","cancel"],setup(e,{emit:o,slots:t}){const s=()=>{if(t.title)return t.title();if(e.title)return d("div",{class:[p("title"),"van-ellipsis"]},[e.title])},l=()=>o("cancel"),v=()=>o("confirm"),h=()=>{const i=e.cancelButtonText||X("cancel");return d("button",{type:"button",class:[p("cancel"),W],onClick:l},[t.cancel?t.cancel():i])},u=()=>{const i=e.confirmButtonText||X("confirm");return d("button",{type:"button",class:[p("confirm"),W],onClick:v},[t.confirm?t.confirm():i])};return()=>d("div",{class:p("toolbar")},[t.toolbar?t.toolbar():[h(),s(),u()]])}});function Ie(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ke(e)}const[de,G]=_("picker-group"),fe=Symbol(de),$e=x({tabs:V()},$),ze=I({name:de,props:$e,emits:["confirm","cancel"],setup(e,{emit:o,slots:t}){const{children:s,linkChildren:l}=le(fe);l();const v=()=>{o("confirm",s.map(u=>u.confirm()))},h=()=>o("cancel");return()=>{var g;let u;const i=(g=t.default)==null?void 0:g.call(t);return d("div",{class:G()},[d(me,ie(e,{onConfirm:v,onCancel:h}),null),d(xe,{shrink:!0,class:G("tabs"),animated:!0},Ie(u=e.tabs.map((f,b)=>d(Ee,{title:f,titleClass:G("tab-title")},{default:()=>[i==null?void 0:i[b]]})))?u:{default:()=>[u]})])}}}),Ae=x({loading:Boolean,readonly:Boolean,allowHtml:Boolean,optionHeight:U(44),showToolbar:ge,swipeDuration:U(1e3),visibleOptionNum:U(6)},$),Re=x({},Ae,{columns:V(),modelValue:V(),toolbarPosition:pe("top"),columnsFieldNames:Object}),Qe=I({name:Pe,props:Re,emits:["confirm","cancel","change","clickOption","update:modelValue"],setup(e,{emit:o,slots:t}){const s=k(),l=k(e.modelValue.slice(0)),{parent:v}=ne(fe),{children:h,linkChildren:u}=le(ue);u();const i=y(()=>De(e.columnsFieldNames)),g=y(()=>be(e.optionHeight)),f=y(()=>Se(e.columns,i.value)),b=y(()=>{const{columns:n}=e;switch(f.value){case"multiple":return n;case"cascade":return we(n,i.value,l);default:return[n]}}),T=y(()=>b.value.some(n=>n.length)),E=y(()=>b.value.map((n,a)=>Q(n,l.value[a],i.value))),C=(n,a)=>{if(l.value[n]!==a){const m=l.value.slice(0);m[n]=a,l.value=m}},O=()=>({selectedValues:l.value.slice(0),selectedOptions:E.value}),A=(n,a)=>{C(a,n),f.value==="cascade"&&l.value.forEach((m,N)=>{const P=b.value[N];Z(P,m,i.value)||C(N,P.length?P[0][i.value.value]:void 0)}),o("change",x({columnIndex:a},O()))},S=(n,a)=>o("clickOption",x({columnIndex:a,currentOption:n},O())),w=()=>{h.forEach(a=>a.stopMomentum());const n=O();return o("confirm",n),n},H=()=>o("cancel",O()),R=()=>b.value.map((n,a)=>d(Ne,{value:l.value[a],fields:i.value,options:n,readonly:e.readonly,allowHtml:e.allowHtml,optionHeight:g.value,swipeDuration:e.swipeDuration,visibleOptionNum:e.visibleOptionNum,onChange:m=>A(m,a),onClickOption:m=>S(m,a)},{option:t.option})),F=n=>{if(T.value){const a={height:`${g.value}px`},m={backgroundSize:`100% ${(n-g.value)/2}px`};return[d("div",{class:p("mask"),style:m},null),d("div",{class:[Oe,p("frame")],style:a},null)]}},D=()=>{const n=g.value*+e.visibleOptionNum,a={height:`${n}px`};return d("div",{ref:s,class:p("columns"),style:a},[R(),F(n)])},M=()=>{if(e.showToolbar&&!v)return d(me,ie(J(e,_e),{onConfirm:w,onCancel:H}),J(t,Ve))};Y(b,n=>{n.forEach((a,m)=>{a.length&&!Z(a,l.value[m],i.value)&&C(m,se(a)[i.value.value])})},{immediate:!0});let c;return Y(()=>e.modelValue,n=>{!j(n,l.value)&&!j(n,c)&&(l.value=n.slice(0))},{deep:!0}),Y(l,n=>{j(n,e.modelValue)||(c=n.slice(0),o("update:modelValue",c))},{immediate:!0}),oe("touchmove",ae,{target:s}),ce({confirm:w,getSelectedOptions:()=>E.value}),()=>{var n,a;return d("div",{class:p()},[e.toolbarPosition==="top"?M():null,e.loading?d(Te,{class:p("loading")},null):null,(n=t["columns-top"])==null?void 0:n.call(t),D(),(a=t["columns-bottom"])==null?void 0:a.call(t),e.toolbarPosition==="bottom"?M():null])}}});export{Qe as _,ze as a,Ae as p};
