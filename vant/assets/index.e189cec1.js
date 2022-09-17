import{c as w,M as y,n as v,l as R,L as _}from"./use-translate.4af05b41.js";import{c as g,n as $,w as A}from"./with-install.bc951e22.js";import{u as M}from"./use-touch.79e2b006.js";import{L as N}from"./index.3b9bd9d1.js";import{z as B,C as x,H as C,x as I,e as l,q as U}from"./vue-libs.7ad34eae.js";const[Y,r,q]=w("pull-refresh"),H=50,z=["pulling","loosing","success"],F={disabled:Boolean,modelValue:Boolean,headHeight:g(H),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:$,successDuration:g(500),animationDuration:g(300)},G=B({name:Y,props:F,emits:["change","refresh","update:modelValue"],setup(a,{emit:h,slots:n}){let u;const m=x(),d=x(),P=y(m),e=C({status:"normal",distance:0,duration:0}),i=M(),V=()=>{if(a.headHeight!==H)return{height:`${a.headHeight}px`}},f=()=>e.status!=="loading"&&e.status!=="success"&&!a.disabled,p=t=>{const s=+(a.pullDistance||a.headHeight);return t>s&&(t<s*2?t=s+(t-s)/2:t=s*1.5+(t-s*2)/4),Math.round(t)},o=(t,s)=>{const c=+(a.pullDistance||a.headHeight);e.distance=t,s?e.status="loading":t===0?e.status="normal":t<c?e.status="pulling":e.status="loosing",h("change",{status:e.status,distance:t})},T=()=>{const{status:t}=e;return t==="normal"?"":a[`${t}Text`]||q(t)},k=()=>{const{status:t,distance:s}=e;if(n[t])return n[t]({distance:s});const c=[];return z.includes(t)&&c.push(l("div",{class:r("text")},[T()])),t==="loading"&&c.push(l(N,{class:r("loading")},{default:T})),c},E=()=>{e.status="success",setTimeout(()=>{o(0)},+a.successDuration)},S=t=>{u=_(P.value)===0,u&&(e.duration=0,i.start(t))},L=t=>{f()&&S(t)},b=t=>{if(f()){u||S(t);const{deltaY:s}=i;i.move(t),u&&s.value>=0&&i.isVertical()&&(R(t),o(p(s.value)))}},D=()=>{u&&i.deltaY.value&&f()&&(e.duration=+a.animationDuration,e.status==="loosing"?(o(+a.headHeight,!0),h("update:modelValue",!0),U(()=>h("refresh"))):o(0))};return I(()=>a.modelValue,t=>{e.duration=+a.animationDuration,t?o(+a.headHeight,!0):n.success||a.successText?E():o(0,!1)}),v("touchstart",L,{target:d,passive:!0}),v("touchmove",b,{target:d}),()=>{var s;const t={transitionDuration:`${e.duration}ms`,transform:e.distance?`translate3d(0,${e.distance}px, 0)`:""};return l("div",{ref:m,class:r()},[l("div",{ref:d,class:r("track"),style:t,onTouchend:D,onTouchcancel:D},[l("div",{class:r("head"),style:V()},[k()]),(s=n.default)==null?void 0:s.call(n)])])}}}),X=A(G),W=X;export{W as V};
