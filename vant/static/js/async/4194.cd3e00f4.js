/*! For license information please see 4194.cd3e00f4.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([["4194"],{87530:function(e,t,n){"use strict";n.r(t);var l=n("24785");n.es(l,t),n("91661");let o=l.default;t.default=o},24785:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l.default}});var l=n("85198");n.es(l,t)},85198:function(e,t,n){"use strict";n.r(t),n("72846");var l=n("69298"),o=n("99742"),i=n("64911"),r=n("24647"),u=["src"];t.default=(0,l.defineComponent)({__name:"index",setup(e){var t=(0,r.useTranslate)({"zh-CN":{title:"\u6807\u9898",alert1:"\u63D0\u793A\u5F39\u7A97",alert2:"\u63D0\u793A\u5F39\u7A97\uFF08\u65E0\u6807\u9898\uFF09",confirm:"\u786E\u8BA4\u5F39\u7A97",content1:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C\u3002",content2:"\u751F\u547D\u8FDC\u4E0D\u6B62\u8FDE\u8F74\u8F6C\u548C\u5FD9\u5230\u6781\u9650\uFF0C\u4EBA\u7C7B\u7684\u4F53\u9A8C\u8FDC\u6BD4\u8FD9\u8FBD\u9614\u3001\u4E30\u5BCC\u5F97\u591A\u3002",content3:"\u5982\u679C\u89E3\u51B3\u65B9\u6CD5\u662F\u4E11\u964B\u7684\uFF0C\u90A3\u5C31\u80AF\u5B9A\u8FD8\u6709\u66F4\u597D\u7684\u89E3\u51B3\u65B9\u6CD5\uFF0C\u53EA\u662F\u8FD8\u6CA1\u6709\u53D1\u73B0\u800C\u5DF2\u3002",beforeClose:"\u5F02\u6B65\u5173\u95ED",roundButton:"\u5706\u89D2\u6309\u94AE\u6837\u5F0F",useComponent:"\u4F7F\u7528 Dialog \u7EC4\u4EF6"},"en-US":{title:"Title",alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",content1:"The frequency of people swearing during code reading is the only measure of code quality.",content2:"Life is far more than just spinning and busy to the limit, and human experiences are much broader and richer than this.",content3:"If the solution is ugly, then there must be a better solution, but it has not been discovered yet.",beforeClose:"Before Close",roundButton:"Round Button Style",useComponent:"Use Dialog Component"}}),n=(0,l.ref)(!1),a=(0,r.cdnURL)("apple-3.jpeg"),s=()=>{(0,i.showDialog)({title:t("title"),message:t("content1")})},c=()=>{(0,i.showDialog)({message:t("content2")})},f=()=>{(0,i.showDialog)({theme:"round-button",title:t("title"),message:t("content1")})},d=()=>{(0,i.showDialog)({theme:"round-button",message:t("content2")})},m=()=>{(0,i.showConfirmDialog)({title:t("title"),message:t("content3")})},h=()=>{(0,i.showConfirmDialog)({title:t("title"),message:t("content3"),beforeClose:e=>new Promise(t=>{setTimeout(()=>t("confirm"===e),1e3)})})};return(e,r)=>{var C=(0,l.resolveComponent)("demo-block");return(0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,null,[(0,l.createVNode)(C,{card:"",title:(0,l.unref)(t)("basicUsage")},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(o.default),{"is-link":"",title:(0,l.unref)(t)("alert1"),onClick:s},null,8,["title"]),(0,l.createVNode)((0,l.unref)(o.default),{"is-link":"",title:(0,l.unref)(t)("alert2"),onClick:c},null,8,["title"]),(0,l.createVNode)((0,l.unref)(o.default),{"is-link":"",title:(0,l.unref)(t)("confirm"),onClick:m},null,8,["title"])]),_:1},8,["title"]),(0,l.createVNode)(C,{card:"",title:(0,l.unref)(t)("roundButton")},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(o.default),{"is-link":"",title:(0,l.unref)(t)("alert1"),onClick:f},null,8,["title"]),(0,l.createVNode)((0,l.unref)(o.default),{"is-link":"",title:(0,l.unref)(t)("alert2"),onClick:d},null,8,["title"])]),_:1},8,["title"]),(0,l.createVNode)(C,{card:"",title:(0,l.unref)(t)("beforeClose")},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(o.default),{"is-link":"",title:(0,l.unref)(t)("beforeClose"),onClick:h},null,8,["title"])]),_:1},8,["title"]),(0,l.createVNode)(C,{card:"",title:(0,l.unref)(t)("useComponent")},{default:(0,l.withCtx)(()=>[(0,l.createVNode)((0,l.unref)(o.default),{"is-link":"",title:(0,l.unref)(t)("useComponent"),onClick:r[0]||(r[0]=e=>n.value=!0)},null,8,["title"]),(0,l.createVNode)((0,l.unref)(i.Dialog),{show:n.value,"onUpdate:show":r[1]||(r[1]=e=>n.value=e),title:(0,l.unref)(t)("title"),"show-cancel-button":"","lazy-render":!1},{default:(0,l.withCtx)(()=>[(0,l.createElementVNode)("img",{src:(0,l.unref)(a)},null,8,u)]),_:1},8,["show","title"])]),_:1},8,["title"])],64)}}})},91661:function(e){},66973:function(e){}}]);