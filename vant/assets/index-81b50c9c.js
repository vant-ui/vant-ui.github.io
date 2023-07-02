import{$ as xt,p as kt,c as Ct,d as st,e as Et,a as Pt}from"./use-translate-00443182.js";import{u as St}from"./use-sync-prop-ref-a0e25dfc.js";import{I as At}from"./index-b2bd89b1.js";import{P as Tt,V as Dt}from"./index-517d7c97.js";import{g as Rt,f as Lt}from"./constant-ee6e27d7.js";import{A as vt,y as B,M as Vt,R as jt,I as Mt,u as _t,e as p,B as Bt,F as Z,q as It,r as Ut,o as lt,a as ct,w as h,C as c,g as D,t as R,d as mt,b as Wt}from"./vue-libs-dcfba01b.js";import{m as $,b as Nt,n as zt,t as X,u as Ht,w as $t}from"./with-install-dbef9c21.js";import{V as L}from"./index-a830d612.js";import{V as Xt}from"./index-b0d82e3b.js";import{V as Yt}from"./index-15bfa333.js";import{V as Ft,a as qt}from"./index-b3667784.js";import{s as Gt}from"./function-call-78e38fb1.js";import"./index-de8b7548.js";import"./use-expose-0d8d1cf9.js";import"./use-lock-scroll-089554f3.js";import"./use-touch-d246739c.js";import"./use-lazy-render-ac91aad5.js";import"./on-popup-reopen-f7cdcc35.js";import"./index-466fc7b5.js";import"./interceptor-85295833.js";import"./use-route-dfd2aa0a.js";import"./index-50f1a2e4.js";import"./index-b3d98cd2.js";import"./use-id-2757e8c9.js";import"./Picker-cb75e00a.js";import"./index-1bd301b4.js";import"./index-3387156f.js";import"./use-refs-041b217f.js";import"./index-73d705a7.js";import"./mount-component-1e01ff48.js";function E(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function et(t){var e=E(t).Element;return t instanceof e||t instanceof Element}function P(t){var e=E(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function ht(t){if(typeof ShadowRoot>"u")return!1;var e=E(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var U=Math.round;function tt(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Jt(){return!/^((?!chrome|android).)*safari/i.test(tt())}function q(t,e,o){e===void 0&&(e=!1),o===void 0&&(o=!1);var n=t.getBoundingClientRect(),r=1,s=1;e&&P(t)&&(r=t.offsetWidth>0&&U(n.width)/t.offsetWidth||1,s=t.offsetHeight>0&&U(n.height)/t.offsetHeight||1);var f=et(t)?E(t):window,l=f.visualViewport,i=!Jt()&&o,u=(n.left+(i&&l?l.offsetLeft:0))/r,a=(n.top+(i&&l?l.offsetTop:0))/s,m=n.width/r,v=n.height/s;return{width:m,height:v,top:a,right:u+m,bottom:a+v,left:u,x:u,y:a}}function wt(t){var e=E(t),o=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:o,scrollTop:n}}function Kt(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Qt(t){return t===E(t)||!P(t)?wt(t):Kt(t)}function A(t){return t?(t.nodeName||"").toLowerCase():null}function K(t){return((et(t)?t.ownerDocument:t.document)||window.document).documentElement}function Zt(t){return q(K(t)).left+wt(t).scrollLeft}function M(t){return E(t).getComputedStyle(t)}function ot(t){var e=M(t),o=e.overflow,n=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function te(t){var e=t.getBoundingClientRect(),o=U(e.width)/t.offsetWidth||1,n=U(e.height)/t.offsetHeight||1;return o!==1||n!==1}function ee(t,e,o){o===void 0&&(o=!1);var n=P(e),r=P(e)&&te(e),s=K(e),f=q(t,r,o),l={scrollLeft:0,scrollTop:0},i={x:0,y:0};return(n||!n&&!o)&&((A(e)!=="body"||ot(s))&&(l=Qt(e)),P(e)?(i=q(e,!0),i.x+=e.clientLeft,i.y+=e.clientTop):s&&(i.x=Zt(s))),{x:f.left+l.scrollLeft-i.x,y:f.top+l.scrollTop-i.y,width:f.width,height:f.height}}function oe(t){var e=q(t),o=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:n}}function nt(t){return A(t)==="html"?t:t.assignedSlot||t.parentNode||(ht(t)?t.host:null)||K(t)}function yt(t){return["html","body","#document"].indexOf(A(t))>=0?t.ownerDocument.body:P(t)&&ot(t)?t:yt(nt(t))}function F(t,e){var o;e===void 0&&(e=[]);var n=yt(t),r=n===((o=t.ownerDocument)==null?void 0:o.body),s=E(n),f=r?[s].concat(s.visualViewport||[],ot(n)?n:[]):n,l=e.concat(f);return r?l:l.concat(F(nt(f)))}function ne(t){return["table","td","th"].indexOf(A(t))>=0}function ft(t){return!P(t)||M(t).position==="fixed"?null:t.offsetParent}function re(t){var e=/firefox/i.test(tt()),o=/Trident/i.test(tt());if(o&&P(t)){var n=M(t);if(n.position==="fixed")return null}var r=nt(t);for(ht(r)&&(r=r.host);P(r)&&["html","body"].indexOf(A(r))<0;){var s=M(r);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return r;r=r.parentNode}return null}function gt(t){for(var e=E(t),o=ft(t);o&&ne(o)&&M(o).position==="static";)o=ft(o);return o&&(A(o)==="html"||A(o)==="body"&&M(o).position==="static")?e:o||re(t)||e}var I="top",G="bottom",N="right",j="left",ae="auto",ie=[I,G,N,j],bt="start",J="end",se=[].concat(ie,[ae]).reduce(function(t,e){return t.concat([e,e+"-"+bt,e+"-"+J])},[]),le="beforeRead",ce="read",fe="afterRead",ue="beforeMain",pe="main",de="afterMain",ve="beforeWrite",me="write",he="afterWrite",we=[le,ce,fe,ue,pe,de,ve,me,he];function ye(t){var e=new Map,o=new Set,n=[];t.forEach(function(s){e.set(s.name,s)});function r(s){o.add(s.name);var f=[].concat(s.requires||[],s.requiresIfExists||[]);f.forEach(function(l){if(!o.has(l)){var i=e.get(l);i&&r(i)}}),n.push(s)}return t.forEach(function(s){o.has(s.name)||r(s)}),n}function ge(t){var e=ye(t);return we.reduce(function(o,n){return o.concat(e.filter(function(r){return r.phase===n}))},[])}function be(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function Oe(t){var e=t.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(e).map(function(o){return e[o]})}function rt(t){return t.split("-")[0]}function Ot(t){return t.split("-")[1]}function xe(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ke(t){var e=t.reference,o=t.element,n=t.placement,r=n?rt(n):null,s=n?Ot(n):null,f=e.x+e.width/2-o.width/2,l=e.y+e.height/2-o.height/2,i;switch(r){case I:i={x:f,y:e.y-o.height};break;case G:i={x:f,y:e.y+e.height};break;case N:i={x:e.x+e.width,y:l};break;case j:i={x:e.x-o.width,y:l};break;default:i={x:e.x,y:e.y}}var u=r?xe(r):null;if(u!=null){var a=u==="y"?"height":"width";switch(s){case bt:i[u]=i[u]-(e[a]/2-o[a]/2);break;case J:i[u]=i[u]+(e[a]/2-o[a]/2);break}}return i}var ut={placement:"bottom",modifiers:[],strategy:"absolute"};function pt(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Ce(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,n=o===void 0?[]:o,r=e.defaultOptions,s=r===void 0?ut:r;return function(l,i,u){u===void 0&&(u=s);var a={placement:"bottom",orderedModifiers:[],options:Object.assign({},ut,s),modifiersData:{},elements:{reference:l,popper:i},attributes:{},styles:{}},m=[],v=!1,w={state:a,setOptions:function(C){var d=typeof C=="function"?C(a.options):C;O(),a.options=Object.assign({},s,a.options,d),a.scrollParents={reference:et(l)?F(l):l.contextElement?F(l.contextElement):[],popper:F(i)};var y=ge(Oe([].concat(n,a.options.modifiers)));return a.orderedModifiers=y.filter(function(x){return x.enabled}),_(),w.update()},forceUpdate:function(){if(!v){var C=a.elements,d=C.reference,y=C.popper;if(pt(d,y)){a.rects={reference:ee(d,gt(y),a.options.strategy==="fixed"),popper:oe(y)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(H){return a.modifiersData[H.name]=Object.assign({},H.data)});for(var x=0;x<a.orderedModifiers.length;x++){if(a.reset===!0){a.reset=!1,x=-1;continue}var k=a.orderedModifiers[x],g=k.fn,T=k.options,z=T===void 0?{}:T,Q=k.name;typeof g=="function"&&(a=g({state:a,options:z,name:Q,instance:w})||a)}}}},update:be(function(){return new Promise(function(b){w.forceUpdate(),b(a)})}),destroy:function(){O(),v=!0}};if(!pt(l,i))return w;w.setOptions(u).then(function(b){!v&&u.onFirstUpdate&&u.onFirstUpdate(b)});function _(){a.orderedModifiers.forEach(function(b){var C=b.name,d=b.options,y=d===void 0?{}:d,x=b.effect;if(typeof x=="function"){var k=x({state:a,name:C,instance:w,options:y}),g=function(){};m.push(k||g)}})}function O(){m.forEach(function(b){return b()}),m=[]}return w}}var Y={passive:!0};function Ee(t){var e=t.state,o=t.instance,n=t.options,r=n.scroll,s=r===void 0?!0:r,f=n.resize,l=f===void 0?!0:f,i=E(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&u.forEach(function(a){a.addEventListener("scroll",o.update,Y)}),l&&i.addEventListener("resize",o.update,Y),function(){s&&u.forEach(function(a){a.removeEventListener("scroll",o.update,Y)}),l&&i.removeEventListener("resize",o.update,Y)}}var Pe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Ee,data:{}};function Se(t){var e=t.state,o=t.name;e.modifiersData[o]=ke({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Ae={name:"popperOffsets",enabled:!0,phase:"read",fn:Se,data:{}},Te={top:"auto",right:"auto",bottom:"auto",left:"auto"};function De(t,e){var o=t.x,n=t.y,r=e.devicePixelRatio||1;return{x:U(o*r)/r||0,y:U(n*r)/r||0}}function dt(t){var e,o=t.popper,n=t.popperRect,r=t.placement,s=t.variation,f=t.offsets,l=t.position,i=t.gpuAcceleration,u=t.adaptive,a=t.roundOffsets,m=t.isFixed,v=f.x,w=v===void 0?0:v,_=f.y,O=_===void 0?0:_,b=typeof a=="function"?a({x:w,y:O}):{x:w,y:O};w=b.x,O=b.y;var C=f.hasOwnProperty("x"),d=f.hasOwnProperty("y"),y=j,x=I,k=window;if(u){var g=gt(o),T="clientHeight",z="clientWidth";if(g===E(o)&&(g=K(o),M(g).position!=="static"&&l==="absolute"&&(T="scrollHeight",z="scrollWidth")),g=g,r===I||(r===j||r===N)&&s===J){x=G;var Q=m&&g===k&&k.visualViewport?k.visualViewport.height:g[T];O-=Q-n.height,O*=i?1:-1}if(r===j||(r===I||r===G)&&s===J){y=N;var H=m&&g===k&&k.visualViewport?k.visualViewport.width:g[z];w-=H-n.width,w*=i?1:-1}}var at=Object.assign({position:l},u&&Te),it=a===!0?De({x:w,y:O},E(o)):{x:w,y:O};if(w=it.x,O=it.y,i){var W;return Object.assign({},at,(W={},W[x]=d?"0":"",W[y]=C?"0":"",W.transform=(k.devicePixelRatio||1)<=1?"translate("+w+"px, "+O+"px)":"translate3d("+w+"px, "+O+"px, 0)",W))}return Object.assign({},at,(e={},e[x]=d?O+"px":"",e[y]=C?w+"px":"",e.transform="",e))}function Re(t){var e=t.state,o=t.options,n=o.gpuAcceleration,r=n===void 0?!0:n,s=o.adaptive,f=s===void 0?!0:s,l=o.roundOffsets,i=l===void 0?!0:l,u={placement:rt(e.placement),variation:Ot(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,dt(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:f,roundOffsets:i})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,dt(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:i})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Le={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Re,data:{}};function Ve(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var n=e.styles[o]||{},r=e.attributes[o]||{},s=e.elements[o];!P(s)||!A(s)||(Object.assign(s.style,n),Object.keys(r).forEach(function(f){var l=r[f];l===!1?s.removeAttribute(f):s.setAttribute(f,l===!0?"":l)}))})}function je(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(n){var r=e.elements[n],s=e.attributes[n]||{},f=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:o[n]),l=f.reduce(function(i,u){return i[u]="",i},{});!P(r)||!A(r)||(Object.assign(r.style,l),Object.keys(s).forEach(function(i){r.removeAttribute(i)}))})}}var Me={name:"applyStyles",enabled:!0,phase:"write",fn:Ve,effect:je,requires:["computeStyles"]},_e=[Pe,Ae,Le,Me],Be=Ce({defaultModifiers:_e});function Ie(t,e,o){var n=rt(t),r=[j,I].indexOf(n)>=0?-1:1,s=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,f=s[0],l=s[1];return f=f||0,l=(l||0)*r,[j,N].indexOf(n)>=0?{x:l,y:f}:{x:f,y:l}}function Ue(t){var e=t.state,o=t.options,n=t.name,r=o.offset,s=r===void 0?[0,0]:r,f=se.reduce(function(a,m){return a[m]=Ie(m,e.rects,s),a},{}),l=f[e.placement],i=l.x,u=l.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=i,e.modifiersData.popperOffsets.y+=u),e.modifiersData[n]=f}var We={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Ue};const[Ne,V]=Ct("popover"),ze=["overlay","duration","teleport","overlayStyle","overlayClass","closeOnClickOverlay"],He={show:Boolean,theme:$("light"),overlay:Boolean,actions:Nt(),actionsDirection:$("vertical"),trigger:$("click"),duration:zt,showArrow:X,placement:$("bottom"),iconPrefix:String,overlayClass:Ht,overlayStyle:Object,closeOnClickAction:X,closeOnClickOverlay:X,closeOnClickOutside:X,offset:{type:Array,default:()=>[0,8]},teleport:{type:[String,Object],default:"body"}},$e=vt({name:Ne,props:He,emits:["select","touchstart","update:show"],setup(t,{emit:e,slots:o,attrs:n}){let r;const s=B(),f=B(),l=B(),i=St(()=>t.show,d=>e("update:show",d)),u=()=>({placement:t.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},Et({},We,{options:{offset:t.offset}})]}),a=()=>f.value&&l.value?Be(f.value,l.value.popupRef.value,u()):null,m=()=>{It(()=>{i.value&&(r?r.setOptions(u()):(r=a(),st&&(window.addEventListener("animationend",m),window.addEventListener("transitionend",m))))})},v=d=>{i.value=d},w=()=>{t.trigger==="click"&&(i.value=!i.value)},_=(d,y)=>{d.disabled||(e("select",d,y),t.closeOnClickAction&&(i.value=!1))},O=()=>{i.value&&t.closeOnClickOutside&&(!t.overlay||t.closeOnClickOverlay)&&(i.value=!1)},b=(d,y)=>o.action?o.action({action:d,index:y}):[d.icon&&p(At,{name:d.icon,classPrefix:t.iconPrefix,class:V("action-icon")},null),p("div",{class:[V("action-text"),{[Lt]:t.actionsDirection==="vertical"}]},[d.text])],C=(d,y)=>{const{icon:x,color:k,disabled:g,className:T}=d;return p("div",{role:"menuitem",class:[V("action",{disabled:g,"with-icon":x}),{[Rt]:t.actionsDirection==="horizontal"},T],style:{color:k},tabindex:g?void 0:0,"aria-disabled":g||void 0,onClick:()=>_(d,y)},[b(d,y)])};return Vt(()=>{m(),jt(()=>{var d;s.value=(d=l.value)==null?void 0:d.popupRef.value})}),Mt(()=>{r&&(st&&(window.removeEventListener("animationend",m),window.removeEventListener("transitionend",m)),r.destroy(),r=null)}),_t(()=>[i.value,t.offset,t.placement],m),xt([f,s],O,{eventName:"touchstart"}),()=>{var d;return p(Z,null,[p("span",{ref:f,class:V("wrapper"),onClick:w},[(d=o.reference)==null?void 0:d.call(o)]),p(Tt,Bt({ref:l,show:i.value,class:V([t.theme]),position:"",transition:"van-popover-zoom",lockScroll:!1,"onUpdate:show":v},n,kt(t,ze)),{default:()=>[t.showArrow&&p("div",{class:V("arrow")},null),p("div",{role:"menu",class:V("content",t.actionsDirection)},[o.default?o.default():t.actions.map(C)])]})])}}}),Xe=$t($e),S=Xe,Ye={class:"demo-popover-box"},Fe=mt("div",{class:"demo-popover-refer"},null,-1),Eo=vt({__name:"index",setup(t){const e=Pt({"zh-CN":{actions:[{text:"选项一"},{text:"选项二"},{text:"选项三"}],shortActions:[{text:"选项一"},{text:"选项二"}],actionsWithIcon:[{text:"选项一",icon:"add-o"},{text:"选项二",icon:"music-o"},{text:"选项三",icon:"more-o"}],actionsDisabled:[{text:"选项一",disabled:!0},{text:"选项二",disabled:!0},{text:"选项三"}],actionsDirection:"排列方向",horizontal:"水平排列",vertical:"垂直排列",showIcon:"展示图标",placement:"弹出位置",darkTheme:"深色风格",lightTheme:"浅色风格",showPopover:"点击弹出气泡",uncontrolled:"非受控模式",actionOptions:"选项配置",customContent:"自定义内容",disableAction:"禁用选项",choosePlacement:"选择弹出位置"},"en-US":{actions:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"}],shortActions:[{text:"Option 1"},{text:"Option 2"}],actionsWithIcon:[{text:"Option 1",icon:"add-o"},{text:"Option 2",icon:"music-o"},{text:"Option 3",icon:"more-o"}],actionsDisabled:[{text:"Option 1",disabled:!0},{text:"Option 2",disabled:!0},{text:"Option 3"}],actionsDirection:"Actions Direction",horizontal:"Horizontal",vertical:"Vertical",showIcon:"Show Icon",placement:"Placement",darkTheme:"Dark Theme",lightTheme:"Light Theme",showPopover:"Show Popover",uncontrolled:"Uncontrolled",actionOptions:"Action Options",customContent:"Custom Content",disableAction:"Disable Action",choosePlacement:"Placement"}}),o=["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"].map(u=>({text:u,value:u})),n=B({horizontal:!1,vertical:!1,showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,customContent:!1,disableAction:!1}),r=B(!1),s=B("top"),f=()=>{r.value=!0,setTimeout(()=>{n.value={...n.value,placement:!0}},300)},l=u=>{setTimeout(()=>{n.value.placement=!0,s.value=u.selectedValues[0]})},i=u=>Gt(u.text);return(u,a)=>{const m=Ut("demo-block");return lt(),ct(Z,null,[p(m,{title:c(e)("basicUsage")},{default:h(()=>[p(c(S),{show:n.value.lightTheme,"onUpdate:show":a[0]||(a[0]=v=>n.value.lightTheme=v),actions:c(e)("actions"),placement:"bottom-start",onSelect:i},{reference:h(()=>[p(c(L),{type:"primary"},{default:h(()=>[D(R(c(e)("lightTheme")),1)]),_:1})]),_:1},8,["show","actions"]),p(c(S),{show:n.value.darkTheme,"onUpdate:show":a[1]||(a[1]=v=>n.value.darkTheme=v),theme:"dark",actions:c(e)("actions"),onSelect:i},{reference:h(()=>[p(c(L),{type:"primary"},{default:h(()=>[D(R(c(e)("darkTheme")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),p(m,{title:c(e)("placement")},{default:h(()=>[p(c(Xt),{"is-link":"",readonly:"",name:"picker",label:c(e)("choosePlacement"),onClick:f},null,8,["label"]),p(c(Dt),{show:r.value,"onUpdate:show":a[3]||(a[3]=v=>r.value=v),round:"",position:"bottom",teleport:"body"},{default:h(()=>[mt("div",Ye,[p(c(S),{show:n.value.placement,"onUpdate:show":a[2]||(a[2]=v=>n.value.placement=v),theme:"dark",actions:c(e)("shortActions"),placement:s.value,onSelect:i},{reference:h(()=>[Fe]),_:1},8,["show","actions","placement"])]),p(c(Yt),{columns:c(o),"show-toolbar":!1,onChange:l},null,8,["columns"])]),_:1},8,["show"])]),_:1},8,["title"]),p(m,{title:c(e)("actionsDirection")},{default:h(()=>[p(c(S),{show:n.value.horizontal,"onUpdate:show":a[4]||(a[4]=v=>n.value.horizontal=v),actions:c(e)("actions"),"actions-direction":"horizontal",placement:"bottom-start",onSelect:i},{reference:h(()=>[p(c(L),{type:"primary"},{default:h(()=>[D(R(c(e)("horizontal")),1)]),_:1})]),_:1},8,["show","actions"]),p(c(S),{show:n.value.vertical,"onUpdate:show":a[5]||(a[5]=v=>n.value.vertical=v),actions:c(e)("actions"),onSelect:i},{reference:h(()=>[p(c(L),{type:"primary"},{default:h(()=>[D(R(c(e)("vertical")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),p(m,{title:c(e)("actionOptions")},{default:h(()=>[p(c(S),{show:n.value.showIcon,"onUpdate:show":a[6]||(a[6]=v=>n.value.showIcon=v),actions:c(e)("actionsWithIcon"),placement:"bottom-start",onSelect:i},{reference:h(()=>[p(c(L),{type:"primary"},{default:h(()=>[D(R(c(e)("showIcon")),1)]),_:1})]),_:1},8,["show","actions"]),p(c(S),{show:n.value.disableAction,"onUpdate:show":a[7]||(a[7]=v=>n.value.disableAction=v),actions:c(e)("actionsDisabled"),onSelect:i},{reference:h(()=>[p(c(L),{type:"primary"},{default:h(()=>[D(R(c(e)("disableAction")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),p(m,{title:c(e)("customContent")},{default:h(()=>[p(c(S),{show:n.value.customContent,"onUpdate:show":a[9]||(a[9]=v=>n.value.customContent=v),placement:"top-start",onSelect:i},{reference:h(()=>[p(c(L),{type:"primary"},{default:h(()=>[D(R(c(e)("customContent")),1)]),_:1})]),default:h(()=>[p(c(Ft),{square:"",clickable:"",border:!1,"column-num":"3",style:{width:"240px"}},{default:h(()=>[(lt(),ct(Z,null,Wt(6,v=>p(c(qt),{key:v,icon:"photo-o",text:c(e)("option"),onClick:a[8]||(a[8]=w=>n.value.customContent=!1)},null,8,["text"])),64))]),_:1})]),_:1},8,["show"])]),_:1},8,["title"]),p(m,{title:c(e)("uncontrolled")},{default:h(()=>[p(c(S),{actions:c(e)("actions"),placement:"top-start",onSelect:i},{reference:h(()=>[p(c(L),{type:"primary"},{default:h(()=>[D(R(c(e)("uncontrolled")),1)]),_:1})]),_:1},8,["actions"])]),_:1},8,["title"])],64)}}});export{Eo as default};
