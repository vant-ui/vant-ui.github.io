import{c as Pe,Y as Ae,p as Te,e as Re,a as De}from"./use-translate.21aea044.js";import{m as ne,b as Ie,n as Le,t as G,u as je,w as Me}from"./with-install.9b509712.js";import{f as Ve}from"./constant.80c6de18.js";import{I as Be}from"./index.4a104a44.js";import{P as _e,V as Ne}from"./index.4997d76a.js";import{z as be,C as N,N as Fe,R as qe,J as We,x as Ue,e as d,A as Ye,F as re,q as He,r as Xe,o as le,a as fe,w as g,B as f,h as H,t as X,d as ge,b as $e}from"./vue-libs.a65f1bfc.js";import{V as $}from"./index.fd5f847e.js";import{V as ze}from"./index.25f94fa4.js";import{V as Ge}from"./index.d5e16d08.js";import{V as Je,a as Ke}from"./index.c49387f7.js";import{T as Qe}from"./function-call.88cba24e.js";import"./interceptor.29bfb20c.js";import"./use-expose.34524b4d.js";import"./use-touch.ffb74f5c.js";import"./use-lazy-render.965a094b.js";import"./on-popup-reopen.76ccb88c.js";import"./index.fb779d6b.js";import"./use-route.985ba6da.js";import"./index.27a7a674.js";import"./index.d1d24bb1.js";import"./use-id.8a05d67e.js";import"./Picker.2d9abd78.js";import"./deep-clone.4b95c500.js";import"./mount-component.23be9238.js";function P(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function se(t){var e=P(t).Element;return t instanceof e||t instanceof Element}function C(t){var e=P(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function ye(t){if(typeof ShadowRoot>"u")return!1;var e=P(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}var q=Math.round;function ae(){var t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Ze(){return!/^((?!chrome|android).)*safari/i.test(ae())}function Q(t,e,o){e===void 0&&(e=!1),o===void 0&&(o=!1);var n=t.getBoundingClientRect(),r=1,i=1;e&&C(t)&&(r=t.offsetWidth>0&&q(n.width)/t.offsetWidth||1,i=t.offsetHeight>0&&q(n.height)/t.offsetHeight||1);var u=se(t)?P(t):window,c=u.visualViewport,s=!Ze()&&o,l=(n.left+(s&&c?c.offsetLeft:0))/r,a=(n.top+(s&&c?c.offsetTop:0))/i,m=n.width/r,v=n.height/i;return{width:m,height:v,top:a,right:l+m,bottom:a+v,left:l,x:l,y:a}}function Oe(t){var e=P(t),o=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:o,scrollTop:n}}function et(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function tt(t){return t===P(t)||!C(t)?Oe(t):et(t)}function A(t){return t?(t.nodeName||"").toLowerCase():null}function te(t){return((se(t)?t.ownerDocument:t.document)||window.document).documentElement}function ot(t){return Q(te(t)).left+Oe(t).scrollLeft}function T(t){return P(t).getComputedStyle(t)}function ce(t){var e=T(t),o=e.overflow,n=e.overflowX,r=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function nt(t){var e=t.getBoundingClientRect(),o=q(e.width)/t.offsetWidth||1,n=q(e.height)/t.offsetHeight||1;return o!==1||n!==1}function rt(t,e,o){o===void 0&&(o=!1);var n=C(e),r=C(e)&&nt(e),i=te(e),u=Q(t,r,o),c={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(n||!n&&!o)&&((A(e)!=="body"||ce(i))&&(c=tt(e)),C(e)?(s=Q(e,!0),s.x+=e.clientLeft,s.y+=e.clientTop):i&&(s.x=ot(i))),{x:u.left+c.scrollLeft-s.x,y:u.top+c.scrollTop-s.y,width:u.width,height:u.height}}function at(t){var e=Q(t),o=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:n}}function ue(t){return A(t)==="html"?t:t.assignedSlot||t.parentNode||(ye(t)?t.host:null)||te(t)}function xe(t){return["html","body","#document"].indexOf(A(t))>=0?t.ownerDocument.body:C(t)&&ce(t)?t:xe(ue(t))}function K(t,e){var o;e===void 0&&(e=[]);var n=xe(t),r=n===((o=t.ownerDocument)==null?void 0:o.body),i=P(n),u=r?[i].concat(i.visualViewport||[],ce(n)?n:[]):n,c=e.concat(u);return r?c:c.concat(K(ue(u)))}function it(t){return["table","td","th"].indexOf(A(t))>=0}function pe(t){return!C(t)||T(t).position==="fixed"?null:t.offsetParent}function st(t){var e=/firefox/i.test(ae()),o=/Trident/i.test(ae());if(o&&C(t)){var n=T(t);if(n.position==="fixed")return null}var r=ue(t);for(ye(r)&&(r=r.host);C(r)&&["html","body"].indexOf(A(r))<0;){var i=T(r);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return r;r=r.parentNode}return null}function Ee(t){for(var e=P(t),o=pe(t);o&&it(o)&&T(o).position==="static";)o=pe(o);return o&&(A(o)==="html"||A(o)==="body"&&T(o).position==="static")?e:o||st(t)||e}var F="top",Z="bottom",z="right",M="left",Se="auto",ct=[F,Z,z,M],ke="start",ee="end",ut=[].concat(ct,[Se]).reduce(function(t,e){return t.concat([e,e+"-"+ke,e+"-"+ee])},[]),lt="beforeRead",ft="read",pt="afterRead",dt="beforeMain",vt="main",mt="afterMain",ht="beforeWrite",wt="write",bt="afterWrite",ie=[lt,ft,pt,dt,vt,mt,ht,wt,bt];function gt(t){var e=new Map,o=new Set,n=[];t.forEach(function(i){e.set(i.name,i)});function r(i){o.add(i.name);var u=[].concat(i.requires||[],i.requiresIfExists||[]);u.forEach(function(c){if(!o.has(c)){var s=e.get(c);s&&r(s)}}),n.push(i)}return t.forEach(function(i){o.has(i.name)||r(i)}),n}function yt(t){var e=gt(t);return ie.reduce(function(o,n){return o.concat(e.filter(function(r){return r.phase===n}))},[])}function Ot(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function D(t){for(var e=arguments.length,o=new Array(e>1?e-1:0),n=1;n<e;n++)o[n-1]=arguments[n];return[].concat(o).reduce(function(r,i){return r.replace(/%s/,i)},t)}var L='Popper: modifier "%s" provided an invalid %s property, expected %s but got %s',xt='Popper: modifier "%s" requires "%s", but "%s" modifier is not available',de=["name","enabled","phase","fn","effect","requires","options"];function Et(t){t.forEach(function(e){[].concat(Object.keys(e),de).filter(function(o,n,r){return r.indexOf(o)===n}).forEach(function(o){switch(o){case"name":typeof e.name!="string"&&console.error(D(L,String(e.name),'"name"','"string"','"'+String(e.name)+'"'));break;case"enabled":typeof e.enabled!="boolean"&&console.error(D(L,e.name,'"enabled"','"boolean"','"'+String(e.enabled)+'"'));break;case"phase":ie.indexOf(e.phase)<0&&console.error(D(L,e.name,'"phase"',"either "+ie.join(", "),'"'+String(e.phase)+'"'));break;case"fn":typeof e.fn!="function"&&console.error(D(L,e.name,'"fn"','"function"','"'+String(e.fn)+'"'));break;case"effect":e.effect!=null&&typeof e.effect!="function"&&console.error(D(L,e.name,'"effect"','"function"','"'+String(e.fn)+'"'));break;case"requires":e.requires!=null&&!Array.isArray(e.requires)&&console.error(D(L,e.name,'"requires"','"array"','"'+String(e.requires)+'"'));break;case"requiresIfExists":Array.isArray(e.requiresIfExists)||console.error(D(L,e.name,'"requiresIfExists"','"array"','"'+String(e.requiresIfExists)+'"'));break;case"options":case"data":break;default:console.error('PopperJS: an invalid property has been provided to the "'+e.name+'" modifier, valid properties are '+de.map(function(n){return'"'+n+'"'}).join(", ")+'; but "'+o+'" was provided.')}e.requires&&e.requires.forEach(function(n){t.find(function(r){return r.name===n})==null&&console.error(D(xt,String(e.name),n,n))})})})}function St(t,e){var o=new Set;return t.filter(function(n){var r=e(n);if(!o.has(r))return o.add(r),!0})}function oe(t){return t.split("-")[0]}function kt(t){var e=t.reduce(function(o,n){var r=o[n.name];return o[n.name]=r?Object.assign({},r,n,{options:Object.assign({},r.options,n.options),data:Object.assign({},r.data,n.data)}):n,o},{});return Object.keys(e).map(function(o){return e[o]})}function Ce(t){return t.split("-")[1]}function Ct(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function Pt(t){var e=t.reference,o=t.element,n=t.placement,r=n?oe(n):null,i=n?Ce(n):null,u=e.x+e.width/2-o.width/2,c=e.y+e.height/2-o.height/2,s;switch(r){case F:s={x:u,y:e.y-o.height};break;case Z:s={x:u,y:e.y+e.height};break;case z:s={x:e.x+e.width,y:c};break;case M:s={x:e.x-o.width,y:c};break;default:s={x:e.x,y:e.y}}var l=r?Ct(r):null;if(l!=null){var a=l==="y"?"height":"width";switch(i){case ke:s[l]=s[l]-(e[a]/2-o[a]/2);break;case ee:s[l]=s[l]+(e[a]/2-o[a]/2);break}}return s}var ve="Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.",At="Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.",me={placement:"bottom",modifiers:[],strategy:"absolute"};function he(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Tt(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,n=o===void 0?[]:o,r=e.defaultOptions,i=r===void 0?me:r;return function(c,s,l){l===void 0&&(l=i);var a={placement:"bottom",orderedModifiers:[],options:Object.assign({},me,i),modifiersData:{},elements:{reference:c,popper:s},attributes:{},styles:{}},m=[],v=!1,h={state:a,setOptions:function(p){var O=typeof p=="function"?p(a.options):p;x(),a.options=Object.assign({},i,a.options,O),a.scrollParents={reference:se(c)?K(c):c.contextElement?K(c.contextElement):[],popper:K(s)};var E=yt(kt([].concat(n,a.options.modifiers)));a.orderedModifiers=E.filter(function(k){return k.enabled});{var S=St([].concat(E,a.options.modifiers),function(k){var B=k.name;return B});if(Et(S),oe(a.options.placement)===Se){var b=a.orderedModifiers.find(function(k){var B=k.name;return B==="flip"});b||console.error(['Popper: "auto" placements require the "flip" modifier be',"present and enabled to work."].join(" "))}var w=T(s),R=w.marginTop,I=w.marginRight,W=w.marginBottom,U=w.marginLeft;[R,I,W,U].some(function(k){return parseFloat(k)})&&console.warn(['Popper: CSS "margin" styles cannot be used to apply padding',"between the popper and its reference element or boundary.","To replicate margin, use the `offset` modifier, as well as","the `padding` option in the `preventOverflow` and `flip`","modifiers."].join(" "))}return V(),h.update()},forceUpdate:function(){if(!v){var p=a.elements,O=p.reference,E=p.popper;if(!he(O,E)){console.error(ve);return}a.rects={reference:rt(O,Ee(E),a.options.strategy==="fixed"),popper:at(E)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach(function(k){return a.modifiersData[k.name]=Object.assign({},k.data)});for(var S=0,b=0;b<a.orderedModifiers.length;b++){if(S+=1,S>100){console.error(At);break}if(a.reset===!0){a.reset=!1,b=-1;continue}var w=a.orderedModifiers[b],R=w.fn,I=w.options,W=I===void 0?{}:I,U=w.name;typeof R=="function"&&(a=R({state:a,options:W,name:U,instance:h})||a)}}},update:Ot(function(){return new Promise(function(y){h.forceUpdate(),y(a)})}),destroy:function(){x(),v=!0}};if(!he(c,s))return console.error(ve),h;h.setOptions(l).then(function(y){!v&&l.onFirstUpdate&&l.onFirstUpdate(y)});function V(){a.orderedModifiers.forEach(function(y){var p=y.name,O=y.options,E=O===void 0?{}:O,S=y.effect;if(typeof S=="function"){var b=S({state:a,name:p,instance:h,options:E}),w=function(){};m.push(b||w)}})}function x(){m.forEach(function(y){return y()}),m=[]}return h}}var J={passive:!0};function Rt(t){var e=t.state,o=t.instance,n=t.options,r=n.scroll,i=r===void 0?!0:r,u=n.resize,c=u===void 0?!0:u,s=P(e.elements.popper),l=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&l.forEach(function(a){a.addEventListener("scroll",o.update,J)}),c&&s.addEventListener("resize",o.update,J),function(){i&&l.forEach(function(a){a.removeEventListener("scroll",o.update,J)}),c&&s.removeEventListener("resize",o.update,J)}}var Dt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Rt,data:{}};function It(t){var e=t.state,o=t.name;e.modifiersData[o]=Pt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Lt={name:"popperOffsets",enabled:!0,phase:"read",fn:It,data:{}},jt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Mt(t){var e=t.x,o=t.y,n=window,r=n.devicePixelRatio||1;return{x:q(e*r)/r||0,y:q(o*r)/r||0}}function we(t){var e,o=t.popper,n=t.popperRect,r=t.placement,i=t.variation,u=t.offsets,c=t.position,s=t.gpuAcceleration,l=t.adaptive,a=t.roundOffsets,m=t.isFixed,v=u.x,h=v===void 0?0:v,V=u.y,x=V===void 0?0:V,y=typeof a=="function"?a({x:h,y:x}):{x:h,y:x};h=y.x,x=y.y;var p=u.hasOwnProperty("x"),O=u.hasOwnProperty("y"),E=M,S=F,b=window;if(l){var w=Ee(o),R="clientHeight",I="clientWidth";if(w===P(o)&&(w=te(o),T(w).position!=="static"&&c==="absolute"&&(R="scrollHeight",I="scrollWidth")),w=w,r===F||(r===M||r===z)&&i===ee){S=Z;var W=m&&w===b&&b.visualViewport?b.visualViewport.height:w[R];x-=W-n.height,x*=s?1:-1}if(r===M||(r===F||r===Z)&&i===ee){E=z;var U=m&&w===b&&b.visualViewport?b.visualViewport.width:w[I];h-=U-n.width,h*=s?1:-1}}var k=Object.assign({position:c},l&&jt),B=a===!0?Mt({x:h,y:x}):{x:h,y:x};if(h=B.x,x=B.y,s){var Y;return Object.assign({},k,(Y={},Y[S]=O?"0":"",Y[E]=p?"0":"",Y.transform=(b.devicePixelRatio||1)<=1?"translate("+h+"px, "+x+"px)":"translate3d("+h+"px, "+x+"px, 0)",Y))}return Object.assign({},k,(e={},e[S]=O?x+"px":"",e[E]=p?h+"px":"",e.transform="",e))}function Vt(t){var e=t.state,o=t.options,n=o.gpuAcceleration,r=n===void 0?!0:n,i=o.adaptive,u=i===void 0?!0:i,c=o.roundOffsets,s=c===void 0?!0:c;{var l=T(e.elements.popper).transitionProperty||"";u&&["transform","top","right","bottom","left"].some(function(m){return l.indexOf(m)>=0})&&console.warn(["Popper: Detected CSS transitions on at least one of the following",'CSS properties: "transform", "top", "right", "bottom", "left".',`

`,'Disable the "computeStyles" modifier\'s `adaptive` option to allow',"for smooth transitions, or remove these properties from the CSS","transition declaration on the popper element if only transitioning","opacity or background-color for example.",`

`,"We recommend using the popper element as a wrapper around an inner","element that can have any CSS property transitioned for animations."].join(" "))}var a={placement:oe(e.placement),variation:Ce(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:r,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,we(Object.assign({},a,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:u,roundOffsets:s})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,we(Object.assign({},a,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var Bt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Vt,data:{}};function _t(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var n=e.styles[o]||{},r=e.attributes[o]||{},i=e.elements[o];!C(i)||!A(i)||(Object.assign(i.style,n),Object.keys(r).forEach(function(u){var c=r[u];c===!1?i.removeAttribute(u):i.setAttribute(u,c===!0?"":c)}))})}function Nt(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(n){var r=e.elements[n],i=e.attributes[n]||{},u=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:o[n]),c=u.reduce(function(s,l){return s[l]="",s},{});!C(r)||!A(r)||(Object.assign(r.style,c),Object.keys(i).forEach(function(s){r.removeAttribute(s)}))})}}var Ft={name:"applyStyles",enabled:!0,phase:"write",fn:_t,effect:Nt,requires:["computeStyles"]},qt=[Dt,Lt,Bt,Ft],Wt=Tt({defaultModifiers:qt});function Ut(t,e,o){var n=oe(t),r=[M,F].indexOf(n)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,u=i[0],c=i[1];return u=u||0,c=(c||0)*r,[M,z].indexOf(n)>=0?{x:c,y:u}:{x:u,y:c}}function Yt(t){var e=t.state,o=t.options,n=t.name,r=o.offset,i=r===void 0?[0,0]:r,u=ut.reduce(function(a,m){return a[m]=Ut(m,e.rects,i),a},{}),c=u[e.placement],s=c.x,l=c.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=s,e.modifiersData.popperOffsets.y+=l),e.modifiersData[n]=u}var Ht={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Yt};const[Xt,j]=Pe("popover"),$t=["show","overlay","duration","teleport","overlayStyle","overlayClass","closeOnClickOverlay"],zt={show:Boolean,theme:ne("light"),overlay:Boolean,actions:Ie(),trigger:ne("click"),duration:Le,showArrow:G,placement:ne("bottom"),iconPrefix:String,overlayClass:je,overlayStyle:Object,closeOnClickAction:G,closeOnClickOverlay:G,closeOnClickOutside:G,offset:{type:Array,default:()=>[0,8]},teleport:{type:[String,Object],default:"body"}},Gt=be({name:Xt,props:zt,emits:["select","touchstart","update:show"],setup(t,{emit:e,slots:o,attrs:n}){let r;const i=N(),u=N(),c=N(),s=()=>({placement:t.placement,modifiers:[{name:"computeStyles",options:{adaptive:!1,gpuAcceleration:!1}},Re({},Ht,{options:{offset:t.offset}})]}),l=()=>u.value&&c.value?Wt(u.value,c.value.popupRef.value,s()):null,a=()=>{He(()=>{!t.show||(r?r.setOptions(s()):r=l())})},m=p=>e("update:show",p),v=()=>{t.trigger==="click"&&m(!t.show)},h=(p,O)=>{p.disabled||(e("select",p,O),t.closeOnClickAction&&m(!1))},V=()=>{t.show&&t.closeOnClickOutside&&(!t.overlay||t.closeOnClickOverlay)&&m(!1)},x=(p,O)=>o.action?o.action({action:p,index:O}):[p.icon&&d(Be,{name:p.icon,classPrefix:t.iconPrefix,class:j("action-icon")},null),d("div",{class:[j("action-text"),Ve]},[p.text])],y=(p,O)=>{const{icon:E,color:S,disabled:b,className:w}=p;return d("div",{role:"menuitem",class:[j("action",{disabled:b,"with-icon":E}),w],style:{color:S},tabindex:b?void 0:0,"aria-disabled":b||void 0,onClick:()=>h(p,O)},[x(p,O)])};return Fe(()=>{a(),qe(()=>{var p;i.value=(p=c.value)==null?void 0:p.popupRef.value})}),We(()=>{r&&(r.destroy(),r=null)}),Ue(()=>[t.show,t.offset,t.placement],a),Ae([u,i],V,{eventName:"touchstart"}),()=>{var p;return d(re,null,[d("span",{ref:u,class:j("wrapper"),onClick:v},[(p=o.reference)==null?void 0:p.call(o)]),d(_e,Ye({ref:c,class:j([t.theme]),position:"",transition:"van-popover-zoom",lockScroll:!1,"onUpdate:show":m},n,Te(t,$t)),{default:()=>[t.showArrow&&d("div",{class:j("arrow")},null),d("div",{role:"menu",class:j("content")},[o.default?o.default():t.actions.map(y)])]})])}}}),Jt=Me(Gt),_=Jt,Kt={class:"demo-popover-box"},Qt=ge("div",{class:"demo-popover-refer"},null,-1),So=be({__name:"index",setup(t){const e=De({"zh-CN":{actions:[{text:"\u9009\u9879\u4E00"},{text:"\u9009\u9879\u4E8C"},{text:"\u9009\u9879\u4E09"}],shortActions:[{text:"\u9009\u9879\u4E00"},{text:"\u9009\u9879\u4E8C"}],actionsWithIcon:[{text:"\u9009\u9879\u4E00",icon:"add-o"},{text:"\u9009\u9879\u4E8C",icon:"music-o"},{text:"\u9009\u9879\u4E09",icon:"more-o"}],actionsDisabled:[{text:"\u9009\u9879\u4E00",disabled:!0},{text:"\u9009\u9879\u4E8C",disabled:!0},{text:"\u9009\u9879\u4E09"}],showIcon:"\u5C55\u793A\u56FE\u6807",placement:"\u5F39\u51FA\u4F4D\u7F6E",darkTheme:"\u6DF1\u8272\u98CE\u683C",lightTheme:"\u6D45\u8272\u98CE\u683C",showPopover:"\u70B9\u51FB\u5F39\u51FA\u6C14\u6CE1",actionOptions:"\u9009\u9879\u914D\u7F6E",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9",disableAction:"\u7981\u7528\u9009\u9879",choosePlacement:"\u9009\u62E9\u5F39\u51FA\u4F4D\u7F6E"},"en-US":{actions:[{text:"Option 1"},{text:"Option 2"},{text:"Option 3"}],shortActions:[{text:"Option 1"},{text:"Option 2"}],actionsWithIcon:[{text:"Option 1",icon:"add-o"},{text:"Option 2",icon:"music-o"},{text:"Option 3",icon:"more-o"}],actionsDisabled:[{text:"Option 1",disabled:!0},{text:"Option 2",disabled:!0},{text:"Option 3"}],showIcon:"Show Icon",placement:"Placement",darkTheme:"Dark Theme",lightTheme:"Light Theme",showPopover:"Show Popover",actionOptions:"Action Options",customContent:"Custom Content",disableAction:"Disable Action",choosePlacement:"Placement"}}),o=["top","top-start","top-end","left","left-start","left-end","right","right-start","right-end","bottom","bottom-start","bottom-end"],n=N({showIcon:!1,placement:!1,darkTheme:!1,lightTheme:!1,customContent:!1,disableAction:!1}),r=N(!1),i=N("top"),u=()=>{r.value=!0,setTimeout(()=>{n.value={...n.value,placement:!0}},300)},c=l=>{setTimeout(()=>{n.value.placement=!0,i.value=l})},s=l=>Qe(l.text);return(l,a)=>{const m=Xe("demo-block");return le(),fe(re,null,[d(m,{title:f(e)("basicUsage")},{default:g(()=>[d(f(_),{show:n.value.lightTheme,"onUpdate:show":a[0]||(a[0]=v=>n.value.lightTheme=v),actions:f(e)("actions"),placement:"bottom-start",onSelect:s},{reference:g(()=>[d(f($),{type:"primary"},{default:g(()=>[H(X(f(e)("lightTheme")),1)]),_:1})]),_:1},8,["show","actions"]),d(f(_),{show:n.value.darkTheme,"onUpdate:show":a[1]||(a[1]=v=>n.value.darkTheme=v),theme:"dark",actions:f(e)("actions"),onSelect:s},{reference:g(()=>[d(f($),{type:"primary"},{default:g(()=>[H(X(f(e)("darkTheme")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),d(m,{title:f(e)("placement")},{default:g(()=>[d(f(ze),{"is-link":"",readonly:"",name:"picker",label:f(e)("choosePlacement"),onClick:u},null,8,["label"]),d(f(Ne),{show:r.value,"onUpdate:show":a[3]||(a[3]=v=>r.value=v),round:"",position:"bottom",teleport:"body"},{default:g(()=>[ge("div",Kt,[d(f(_),{show:n.value.placement,"onUpdate:show":a[2]||(a[2]=v=>n.value.placement=v),theme:"dark",actions:f(e)("shortActions"),placement:i.value,onSelect:s},{reference:g(()=>[Qt]),_:1},8,["show","actions","placement"])]),d(f(Ge),{columns:o,"show-toolbar":!1,onChange:c})]),_:1},8,["show"])]),_:1},8,["title"]),d(m,{title:f(e)("actionOptions")},{default:g(()=>[d(f(_),{show:n.value.showIcon,"onUpdate:show":a[4]||(a[4]=v=>n.value.showIcon=v),actions:f(e)("actionsWithIcon"),placement:"bottom-start",onSelect:s},{reference:g(()=>[d(f($),{type:"primary"},{default:g(()=>[H(X(f(e)("showIcon")),1)]),_:1})]),_:1},8,["show","actions"]),d(f(_),{show:n.value.disableAction,"onUpdate:show":a[5]||(a[5]=v=>n.value.disableAction=v),actions:f(e)("actionsDisabled"),onSelect:s},{reference:g(()=>[d(f($),{type:"primary"},{default:g(()=>[H(X(f(e)("disableAction")),1)]),_:1})]),_:1},8,["show","actions"])]),_:1},8,["title"]),d(m,{title:f(e)("customContent")},{default:g(()=>[d(f(_),{show:n.value.customContent,"onUpdate:show":a[7]||(a[7]=v=>n.value.customContent=v),placement:"top-start",onSelect:s},{reference:g(()=>[d(f($),{type:"primary"},{default:g(()=>[H(X(f(e)("customContent")),1)]),_:1})]),default:g(()=>[d(f(Je),{square:"",clickable:"",border:!1,"column-num":"3",style:{width:"240px"}},{default:g(()=>[(le(),fe(re,null,$e(6,v=>d(f(Ke),{key:v,icon:"photo-o",text:f(e)("option"),onClick:a[6]||(a[6]=h=>n.value.customContent=!1)},null,8,["text"])),64))]),_:1})]),_:1},8,["show"])]),_:1},8,["title"])],64)}}});export{So as default};
