import{_,g as I,p as M,s as B,c as D,a as u,b as E,i as F,d as j,l as O,e as w,f as z,h as x,j as R}from"./locales-d17a2283.js";import{c as L,n as f,a as c,r as m,o as i,F as p,b as S,d as l,t as g,e as v,f as h,g as q,w as b,T as Y,h as y,i as W,j as G,v as J,p as K,k as Q,l as U,m as X,q as Z,s as ee}from"./vue-libs-b2a2f6f9.js";const te={name:"VanDocNavLink",props:{base:String,item:Object},computed:{itemName(){const e=(this.item.title||this.item.name).split(" ");return`${e[0]} <span>${e.slice(1).join(" ")}</span>`},path(){return`${this.base}${this.item.path}`},active(){return this.$route.path===this.path?!0:this.item.path==="home"?this.$route.path===this.base:!1}},watch:{active(){this.scrollIntoView()}},mounted(){this.scrollIntoView()},methods:{scrollIntoView(){this.active&&this.$el&&this.$el.scrollIntoViewIfNeeded&&this.$el.scrollIntoViewIfNeeded()}}},ne=["href","innerHTML"],oe=["innerHTML"];function se(e,n,t,a,s,o){const r=m("router-link");return t.item.path?(i(),L(r,{key:0,class:f({active:o.active}),to:o.path,innerHTML:o.itemName},null,8,["class","to","innerHTML"])):t.item.link?(i(),c("a",{key:1,href:t.item.link,innerHTML:o.itemName},null,8,ne)):(i(),c("a",{key:2,innerHTML:o.itemName},null,8,oe))}const V=_(te,[["render",se]]);const ae={name:"VanDocNav",components:{[V.name]:V},props:{lang:String,navConfig:Array},data(){return{isFixed:!1}},computed:{base(){return this.lang?`/${this.lang}/`:"/"}},created(){window.addEventListener("scroll",this.onScroll),this.onScroll()},methods:{onScroll(){const{pageYOffset:e}=window;this.isFixed=e>64}}},ie={class:"van-doc-nav__title"};function re(e,n,t,a,s,o){const r=m("van-doc-nav-link");return i(),c("div",{class:f(["van-doc-nav",{"van-doc-nav-fixed":s.isFixed}])},[(i(!0),c(p,null,S(t.navConfig,(d,k)=>(i(),c("div",{class:"van-doc-nav__group",key:k},[l("div",ie,g(d.title),1),d.items?(i(!0),c(p,{key:0},S(d.items,($,C)=>(i(),c("div",{key:C,class:"van-doc-nav__item"},[v(r,{item:$,base:o.base},null,8,["item","base"])]))),128)):h("",!0)]))),128))],2)}const ce=_(ae,[["render",re]]);const le={name:"VanDocHeader",props:{lang:String,config:Object,versions:Array,langConfigs:Array,darkModeClass:String},data(){return{currentTheme:I(),packageVersion:M,showVersionPop:!1}},computed:{langLink(){return`#${this.$route.path.replace(this.lang,this.anotherLang.lang)}`},langLabel(){return this.anotherLang.label},anotherLang(){const e=this.langConfigs.filter(n=>n.lang!==this.lang);return e.length?e[0]:{}},themeImg(){return this.currentTheme==="light"?"https://b.yzcdn.cn/vant/dark-theme.svg":"https://b.yzcdn.cn/vant/light-theme.svg"}},watch:{currentTheme:{handler(e,n){window.localStorage.setItem("vantTheme",e),document.documentElement.classList.remove(`van-doc-theme-${n}`),document.documentElement.classList.add(`van-doc-theme-${e}`),B(e)},immediate:!0}},methods:{toggleTheme(){this.currentTheme=this.currentTheme==="light"?"dark":"light"},toggleVersionPop(){const e=!this.showVersionPop,n=e?"add":"remove";document.body[`${n}EventListener`]("click",this.checkHideVersionPop),this.showVersionPop=e},checkHideVersionPop(e){this.$refs.version.contains(e.target)||(this.showVersionPop=!1)},onSwitchLang(e){this.$router.push(this.$route.path.replace(e.from,e.to))},onSwitchVersion(e){e.link&&(location.href=e.link)}}},de={class:"van-doc-header"},ue={class:"van-doc-row"},he={class:"van-doc-header__top"},me={class:"van-doc-header__logo"},_e=["src"],ge={class:"van-doc-header__title"},ve={key:0,class:"van-doc-header__subtitle"},fe={class:"van-doc-header__top-nav"},pe=["href"],ye=["src"],ke={key:1},we={key:0,class:"van-doc-header__top-nav-item"},Se=["src"],be={key:1,ref:"version",class:"van-doc-header__top-nav-item"},Te={key:0,class:"van-doc-header__version-pop"},$e=["onClick"],Ce={key:2,class:"van-doc-header__top-nav-item"},Le=["href"];function xe(e,n,t,a,s,o){return i(),c("div",de,[l("div",ue,[l("div",he,[l("a",me,[l("img",{src:t.config.logo},null,8,_e),l("span",ge,g(t.config.title),1),t.config.subtitle?(i(),c("span",ve,g(t.config.subtitle),1)):h("",!0)]),l("ul",fe,[(i(!0),c(p,null,S(t.config.links,(r,d)=>(i(),c("li",{key:d,class:"van-doc-header__top-nav-item"},[l("a",{class:"van-doc-header__link",target:"_blank",href:r.url},[r.logo?(i(),c("img",{key:0,src:r.logo},null,8,ye)):r.text?(i(),c("span",ke,g(r.text),1)):h("",!0)],8,pe)]))),128)),t.darkModeClass?(i(),c("li",we,[l("a",{class:"van-doc-header__link",target:"_blank",onClick:n[0]||(n[0]=(...r)=>o.toggleTheme&&o.toggleTheme(...r))},[l("img",{src:o.themeImg},null,8,Se)])])):h("",!0),t.versions?(i(),c("li",be,[l("span",{class:"van-doc-header__cube van-doc-header__version",onClick:n[1]||(n[1]=(...r)=>o.toggleVersionPop&&o.toggleVersionPop(...r))},[q(g(s.packageVersion)+" ",1),v(Y,{name:"van-doc-dropdown"},{default:b(()=>[s.showVersionPop?(i(),c("div",Te,[(i(!0),c(p,null,S(t.versions,(r,d)=>(i(),c("div",{key:d,class:"van-doc-header__version-pop-item",onClick:k=>o.onSwitchVersion(r)},g(r.label),9,$e))),128))])):h("",!0)]),_:1})])],512)):h("",!0),o.langLabel&&o.langLink?(i(),c("li",Ce,[l("a",{class:"van-doc-header__cube",href:o.langLink},g(o.langLabel),9,Le)])):h("",!0)])])])])}const Ve=_(le,[["render",xe]]);const He={name:"VanDocContent",computed:{currentPage(){const{path:e}=this.$route;return e?e.split("/").slice(-1)[0]:this.$route.name}},watch:{$route(e,n){n.path!==e.path&&setTimeout(()=>{this.copyAction()})}},mounted(){this.copyAction()},methods:{onClick({target:e}){["H2","H3","H4","H5"].includes(e.tagName)&&this.scrollToAnchor(e)},scrollToAnchor(e){e.id&&this.$router.push({name:this.$route.name,hash:"#"+e.id})},copyAction(){const e=document.querySelectorAll(".van-doc-card pre code");if(!(!e||!e.length))for(let n=0;n<e.length;n++){const t=e[n];let a=null;t.addEventListener("click",()=>{if(a)return;const s=t.innerText;D(s),t.classList.add("code-copy-success"),a=setTimeout(()=>{t.classList.remove("code-copy-success"),a=null},1400)})}}}};function Ne(e,n,t,a,s,o){return i(),c("div",{class:f(["van-doc-content",`van-doc-content--${o.currentPage}`]),onClick:n[0]||(n[0]=(...r)=>o.onClick&&o.onClick(...r))},[y(e.$slots,"default")],2)}const De=_(He,[["render",Ne]]);const Ae={name:"VanDocContainer",props:{hasSimulator:Boolean}};function Pe(e,n,t,a,s,o){return i(),c("div",{class:f(["van-doc-container van-doc-row",{"van-doc-container--with-simulator":t.hasSimulator}])},[y(e.$slots,"default")],2)}const Ie=_(Ae,[["render",Pe]]);const Me={name:"VanDocSimulator",props:{src:String},data(){return{scrollTop:window.scrollY,windowHeight:window.innerHeight}},computed:{isFixed(){return this.scrollTop>60},simulatorStyle(){return{height:Math.min(640,this.windowHeight-90)+"px"}}},mounted(){window.addEventListener("scroll",()=>{this.scrollTop=window.scrollY}),window.addEventListener("resize",()=>{this.windowHeight=window.innerHeight})}},Be=["src"];function Ee(e,n,t,a,s,o){return i(),c("div",{class:f(["van-doc-simulator",{"van-doc-simulator-fixed":o.isFixed}])},[l("iframe",{ref:"iframe",src:t.src,style:W(o.simulatorStyle),frameborder:"0"},null,12,Be)],2)}const Fe=_(Me,[["render",Ee]]),je={name:"VanDoc",components:{DocNav:ce,DocHeader:Ve,DocContent:De,DocContainer:Ie,DocSimulator:Fe},props:{lang:String,versions:Array,simulator:String,langConfigs:Array,hasSimulator:Boolean,darkModeClass:String,config:{type:Object,required:!0},base:{type:String,default:""}},emits:["switch-version"],watch:{$route(){this.setNav()}},created(){this.setNav(),this.keyboardHandler()},methods:{setNav(){const{nav:e}=this.config,n=e.reduce((s,o)=>s.concat(o.items),[]),t=this.$route.path.split("/").pop();let a;for(let s=0,o=n.length;s<o;s++)if(n[s].path===t){a=s;break}this.leftNav=n[a-1],this.rightNav=n[a+1]},keyboardNav(e){if(/win(32|64)/.test(navigator.userAgent.toLocaleLowerCase()))return;const n=e==="prev"?this.leftNav:this.rightNav;n.path&&this.$router.push(this.base+n.path)},keyboardHandler(){window.addEventListener("keyup",e=>{switch(e.keyCode){case 37:this.keyboardNav("prev");break;case 39:this.keyboardNav("next");break}})}}},Oe={class:"van-doc"};function ze(e,n,t,a,s,o){const r=m("doc-header"),d=m("doc-nav"),k=m("doc-content"),$=m("doc-container"),C=m("doc-simulator");return i(),c("div",Oe,[v(r,{lang:t.lang,config:t.config,versions:t.versions,"lang-configs":t.langConfigs,"dark-mode-class":t.darkModeClass,onSwitchVersion:n[0]||(n[0]=P=>e.$emit("switch-version",P))},null,8,["lang","config","versions","lang-configs","dark-mode-class"]),v(d,{lang:t.lang,"nav-config":t.config.nav},null,8,["lang","nav-config"]),v($,{"has-simulator":t.hasSimulator},{default:b(()=>[v(k,null,{default:b(()=>[y(e.$slots,"default")]),_:3})]),_:3},8,["has-simulator"]),t.hasSimulator?(i(),L(C,{key:0,src:t.simulator},null,8,["src"])):h("",!0)])}const Re=_(je,[["render",ze]]);const qe={components:{VanDoc:Re},data(){return{hasSimulator:!0,darkModeClass:u.site.darkModeClass}},computed:{simulator(){var n,t;return(n=u.site.simulator)!=null&&n.url?(t=u.site.simulator)==null?void 0:t.url:`${location.pathname.replace(/\/index(\.html)?/,"/")}mobile.html${location.hash}`},lang(){const{lang:e}=this.$route.meta;return e||""},langConfigs(){const{locales:e={}}=u.site;return Object.keys(e).map(n=>({lang:n,label:e[n].langLabel||""}))},config(){const{locales:e}=u.site;return e?e[this.lang]:u.site},versions(){return u.site.versions||null}},watch:{"$route.path"(){this.setTitleAndToggleSimulator()},lang(e){E(e),this.setTitleAndToggleSimulator()},config:{handler(e){e&&this.setTitleAndToggleSimulator()},immediate:!0}},mounted(){this.$route.hash&&this.$nextTick(()=>{const e=document.querySelector(this.$route.hash);e&&e.scrollIntoView()})},methods:{setTitleAndToggleSimulator(){let{title:e}=this.config;const t=this.config.nav.reduce((a,s)=>[...a,...s.items],[]).find(a=>a.path===this.$route.meta.name);t&&t.title?e=t.title+" - "+e:this.config.description&&(e+=` - ${this.config.description}`),document.title=e,this.hasSimulator=!(u.site.hideSimulator||this.config.hideSimulator||t&&t.hideSimulator)}}},Ye={class:"app"};function We(e,n,t,a,s,o){const r=m("router-view"),d=m("van-doc");return i(),c("div",Ye,[o.config?(i(),L(d,{key:0,lang:o.lang,config:o.config,versions:o.versions,simulator:o.simulator,"has-simulator":s.hasSimulator,"lang-configs":o.langConfigs,"dark-mode-class":s.darkModeClass},{default:b(()=>[v(r)]),_:1},8,["lang","config","versions","simulator","has-simulator","lang-configs","dark-mode-class"])):h("",!0)])}const Ge=_(qe,[["render",We]]);const Je={name:"DemoPlayground",props:{originCode:String,codeSnippet:String,transform:Boolean,compact:Boolean,inline:Boolean},data(){return{showSource:!1,copyStatus:"ready"}},methods:{unescape,toggleSource(){this.showSource=!this.showSource},copySourceCode(){D(unescape(this.originCode)),this.copyStatus="copied",setTimeout(()=>{this.copyStatus="ready"},2e3)}}},Ke=e=>(K("data-v-95763b72"),e=e(),Q(),e),Qe={class:"demo-playground--code"},Ue={class:"demo-playground--code--actions"},Xe=Ke(()=>l("span",null,null,-1)),Ze=["data-status"],et=["innerHTML"];function tt(e,n,t,a,s,o){return i(),c("div",{class:f({"demo-playground":!t.inline,transform:t.transform})},[t.inline?y(e.$slots,"default",{key:0},void 0,!0):(i(),c(p,{key:1},[l("div",{class:f(["demo-playground--previewer",{compact:t.compact}])},[y(e.$slots,"default",{},void 0,!0)],2),l("div",Qe,[l("div",Ue,[Xe,l("button",{title:"Copy source code",class:"action-icon",role:"copy","data-status":s.copyStatus,onClick:n[0]||(n[0]=(...r)=>o.copySourceCode&&o.copySourceCode(...r))},null,8,Ze),l("button",{title:"Toggle source code panel",class:"action-icon",role:"source",onClick:n[1]||(n[1]=(...r)=>o.toggleSource&&o.toggleSource(...r))})]),G(l("div",{innerHTML:o.unescape(t.codeSnippet),class:"demo-playground--code--content"},null,8,et),[[J,s.showSource]])])],64))],2)}const H=_(Je,[["render",tt],["__scopeId","data-v-95763b72"]]);F&&location.replace("mobile.html"+location.hash);const{locales:A,defaultLang:nt}=u.site;j(nt);function ot(e){if(e.indexOf("_")!==-1){const n=e.split("_"),t=n.shift();return{component:`${x(t)}`,lang:n.join("-")}}return{component:`${x(e)}`,lang:""}}function st(e){const n=e.path.split("/")[1];return Object.keys(A).indexOf(n)!==-1?n:R()}function at(){const e=[],n=Object.keys(w);A?e.push({name:"notFound",path:"/:path(.*)+",redirect:a=>({name:st(a)})}):e.push({name:"notFound",path:"/:path(.*)+",redirect:{name:"home"}});function t(a,s){e.push({name:s||"home",path:`/${s||""}`,component:a,meta:{lang:s}})}return n.forEach(a=>{const{component:s,lang:o}=ot(a);s==="home"&&t(w[a],o),o?e.push({name:`${o}/${s}`,path:`/${o}/${s}`,component:w[a],meta:{lang:o,name:s}}):e.push({name:`${s}`,path:`/${s}`,component:w[a],meta:{name:s}})}),e}const T=U({history:X(),routes:at(),scrollBehavior(e){return e.hash?{el:e.hash}:{top:0}}});T.afterEach(()=>{Z(z)});var N;((N=u.site.simulator)==null?void 0:N.syncPathFromSimulator)!==!1&&O(T);window.vueRouter=T;window.app=ee(Ge).use(T).component(H.name,H);setTimeout(()=>{window.app.mount("#app")},0);
