(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{140:function(o,n,t){"use strict";var i=t(70);t.n(i).a},141:function(o,n,t){(o.exports=t(12)(!1)).push([o.i,".demo-popup .van-button {\n  margin: 10px 0 10px 15px;\n}\n.demo-popup .van-popup {\n  width: 60%;\n  padding: 20px;\n  box-sizing: border-box;\n}\n.demo-popup .van-popup--bottom {\n  width: 100%;\n  padding: 0;\n  border-radius: 0;\n}\n.demo-popup .van-popup .van-tabs__content {\n  height: 156px;\n  overflow-y: scroll;\n  -webkit-overflow-scrolling: touch;\n}\n.demo-popup .van-popup .van-tab__pane:not(:first-child) {\n  padding: 10px;\n  line-height: 1.4;\n  color: #7d7e80;\n}\n.demo-popup .van-popup--top {\n  color: #fff;\n  width: 100%;\n  border-radius: 0;\n  line-height: 20px;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n.demo-popup .van-popup--left,\n.demo-popup .van-popup--right {\n  width: 100%;\n  height: 100%;\n}\n",""])},197:function(o,n,t){"use strict";t.r(n);var i={i18n:{"zh-CN":{position:"弹出位置",button1:"弹出 Popup",button2:"底部弹出",button3:"弹出 Dialog",button4:"顶部弹出",button5:"右侧弹出",button6:"关闭弹层",columns:["杭州","宁波","温州","嘉兴","湖州"]},"en-US":{position:"Position",button1:"Show Popup",button2:"From Bottom",button3:"Show Dialog",button4:"From Top",button5:"From Right",button6:"Close Popup",columns:["Delaware","Florida","Georqia","Indiana","Maine"]}},data:function(){return{show1:!1,show2:!1,show3:!1,show4:!1,show5:!1}},watch:{show3:function(o){var n=this;o&&setTimeout(function(){n.show3=!1},2e3)}},methods:{showDialog:function(){this.$dialog.confirm({title:"confirm标题",message:"弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。弹窗提示文字，左右始终距离边20PX，上下距离20PX，文字左对齐。"})}}},s=(t(140),t(7)),p=Object(s.a)(i,function(){var o=this,n=o.$createElement,t=o._self._c||n;return t("demo-section",[t("demo-block",{attrs:{title:o.$t("basicUsage")}},[t("van-button",{on:{click:function(n){o.show1=!0}}},[o._v(o._s(o.$t("button1")))]),t("van-popup",{model:{value:o.show1,callback:function(n){o.show1=n},expression:"show1"}},[o._v(o._s(o.$t("content")))])],1),t("demo-block",{attrs:{title:o.$t("position")}},[t("van-button",{on:{click:function(n){o.show2=!0}}},[o._v(o._s(o.$t("button2")))]),t("van-popup",{attrs:{position:"bottom"},model:{value:o.show2,callback:function(n){o.show2=n},expression:"show2"}},[t("van-picker",{attrs:{"show-toolbar":"",columns:o.$t("columns")},on:{confirm:function(n){o.show2=!1},cancel:function(n){o.show2=!1}}})],1),t("van-button",{on:{click:function(n){o.show3=!0}}},[o._v(o._s(o.$t("button4")))]),t("van-popup",{attrs:{position:"top",overlay:!1},model:{value:o.show3,callback:function(n){o.show3=n},expression:"show3"}},[o._v("\n      "+o._s(o.$t("content"))+"\n    ")]),t("van-button",{on:{click:function(n){o.show4=!0}}},[o._v(o._s(o.$t("button5")))]),t("van-popup",{attrs:{position:"right"},model:{value:o.show4,callback:function(n){o.show4=n},expression:"show4"}},[t("van-button",{on:{click:function(n){o.show4=!1}}},[o._v(o._s(o.$t("button6")))]),t("van-button",{on:{click:function(n){o.show5=!0}}},[o._v(o._s(o.$t("button5")))]),t("van-popup",{attrs:{position:"right"},model:{value:o.show5,callback:function(n){o.show5=n},expression:"show5"}},[t("van-button",{on:{click:function(n){o.show5=!1}}},[o._v(o._s(o.$t("button6")))])],1)],1)],1)],1)},[],!1,null,null,null);n.default=p.exports},70:function(o,n,t){var i=t(141);"string"==typeof i&&(i=[[o.i,i,""]]);var s={hmr:!0,transform:void 0,insertInto:void 0};t(13)(i,s);i.locals&&(o.exports=i.locals)}}]);