(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-detail"],{"0b4c":function(t,a,r){"use strict";var o=r("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.list=i,a.detail=s;var e=o(r("c05a")),n={list:"article/list",detail:"article/detail"};function i(t,a){return e.default.get(n.list,t,a)}function s(t){return e.default.get(n.detail,{articleId:t})}},"13dd":function(t,a,r){"use strict";r("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var o=r("c824"),e={props:{right:{type:Number,default:30},bottom:{type:Number,default:100}},data:function(){return{isShow:!1,transparent:!0}},computed:{rightPx:function(){return uni.upx2px(this.right)},bottomPx:function(){return uni.upx2px(this.bottom)}},methods:{onToggleShow:function(){var t=this;t.isShow=!t.isShow,t.transparent=!1},onTargetPage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=(0,o.getTabBarLinks)();this.$navTo(a[t])}}};a.default=e},1867:function(t,a,r){"use strict";r.r(a);var o=r("6645"),e=r("66a0");for(var n in e)"default"!==n&&function(t){r.d(a,t,(function(){return e[t]}))}(n);r("711d");var i,s=r("f0c5"),d=Object(s["a"])(e["default"],o["b"],o["c"],!1,null,"6d010dd5",null,!1,o["a"],i);a["default"]=d.exports},"25b2":function(t,a,r){"use strict";r.r(a);var o=r("13dd"),e=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(a,t,(function(){return o[t]}))}(n);a["default"]=e.a},"29e2":function(t,a,r){var o=r("2eb1");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var e=r("4f06").default;e("021da7b0",o,!0,{sourceMap:!1,shadowMode:!1})},"2eb1":function(t,a,r){var o=r("24fb");a=o(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */\r\n/* 快捷导航 */.shortcut[data-v-c0d8f984]{position:fixed;right:calc(var(--window-right) + var(--right));bottom:calc(var(--window-bottom) + var(--bottom));width:%?76?%;height:%?76?%;line-height:1;z-index:5;border-radius:50%}\r\n/* 导航菜单元素 */.nav-item[data-v-c0d8f984]{position:absolute;bottom:0;padding:0;width:%?76?%;height:%?76?%;line-height:%?76?%;color:#fff;background:rgba(0,0,0,.4);border-radius:50%;text-align:center;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}.nav-item .iconfont[data-v-c0d8f984]{font-size:%?40?%}\r\n/* 导航开关 */.nav-item__switch[data-v-c0d8f984]{opacity:1}.shortcut_click_show[data-v-c0d8f984]{margin-bottom:0;background:#ff5454}\r\n/* 显示动画 */.show_80[data-v-c0d8f984]{bottom:%?384?%;-webkit-animation:show_80-data-v-c0d8f984 .3s forwards;animation:show_80-data-v-c0d8f984 .3s forwards}.show_60[data-v-c0d8f984]{bottom:%?288?%;-webkit-animation:show_60-data-v-c0d8f984 .3s forwards;animation:show_60-data-v-c0d8f984 .3s forwards}.show_40[data-v-c0d8f984]{bottom:%?192?%;-webkit-animation:show_40-data-v-c0d8f984 .3s forwards;animation:show_40-data-v-c0d8f984 .3s forwards}.show_20[data-v-c0d8f984]{bottom:%?96?%;-webkit-animation:show_20-data-v-c0d8f984 .3s forwards;animation:show_20-data-v-c0d8f984 .3s forwards}@-webkit-keyframes show_20-data-v-c0d8f984{from{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}to{bottom:%?96?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}}@keyframes show_20-data-v-c0d8f984{from{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}to{bottom:%?96?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}}@-webkit-keyframes show_40-data-v-c0d8f984{from{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}to{bottom:%?192?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}}@keyframes show_40-data-v-c0d8f984{from{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}to{bottom:%?192?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}}@-webkit-keyframes show_60-data-v-c0d8f984{from{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}to{bottom:%?288?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}}@keyframes show_60-data-v-c0d8f984{from{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}to{bottom:%?288?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}}@-webkit-keyframes show_80-data-v-c0d8f984{from{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}to{bottom:%?384?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}}@keyframes show_80-data-v-c0d8f984{from{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}to{bottom:%?384?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}}\r\n/* 隐藏动画 */.hide_80[data-v-c0d8f984]{bottom:0;-webkit-animation:hide_80-data-v-c0d8f984 .3s;animation:hide_80-data-v-c0d8f984 .3s;opacity:0}.hide_60[data-v-c0d8f984]{bottom:0;-webkit-animation:hide_60-data-v-c0d8f984 .3s;animation:hide_60-data-v-c0d8f984 .3s;opacity:0}.hide_40[data-v-c0d8f984]{bottom:0;-webkit-animation:hide_40-data-v-c0d8f984 .3s;animation:hide_40-data-v-c0d8f984 .3s;opacity:0}.hide_20[data-v-c0d8f984]{bottom:0;-webkit-animation:hide_20-data-v-c0d8f984 .3s;animation:hide_20-data-v-c0d8f984 .3s;opacity:0}@-webkit-keyframes hide_20-data-v-c0d8f984{from{bottom:%?96?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}to{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}}@keyframes hide_20-data-v-c0d8f984{from{bottom:%?96?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}to{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}}@-webkit-keyframes hide_40-data-v-c0d8f984{from{bottom:%?192?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}to{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}}@keyframes hide_40-data-v-c0d8f984{from{bottom:%?192?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}to{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}}@-webkit-keyframes hide_60-data-v-c0d8f984{from{bottom:%?288?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}to{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}}@keyframes hide_60-data-v-c0d8f984{from{bottom:%?288?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}to{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}}@-webkit-keyframes hide_80-data-v-c0d8f984{from{bottom:%?384?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}to{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}}@keyframes hide_80-data-v-c0d8f984{from{bottom:%?384?%;-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:1}to{bottom:0;-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:0}}',""]),t.exports=a},"2efd":function(t,a,r){var o=r("24fb");a=o(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 引入uView全局scss变量文件 */.container[data-v-6d010dd5]{min-height:100vh;padding:%?20?%;background:#fff}.article-content[data-v-6d010dd5]{font-size:%?28?%}',""]),t.exports=a},6645:function(t,a,r){"use strict";r.d(a,"b",(function(){return e})),r.d(a,"c",(function(){return n})),r.d(a,"a",(function(){return o}));var o={mpHtml:r("b3c7").default},e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return t.isLoading?t._e():r("v-uni-view",{staticClass:"container b-f p-b"},[r("v-uni-view",{staticClass:"article-title"},[r("v-uni-text",{staticClass:"f-32"},[t._v(t._s(t.detail.title))])],1),r("v-uni-view",{staticClass:"article-little dis-flex flex-x-between m-top10"},[r("v-uni-view",{staticClass:"article-little__left"},[r("v-uni-text",{staticClass:"article-views f-24 col-8"},[t._v(t._s(t.detail.show_views)+"次浏览")])],1),r("v-uni-view",{staticClass:"article-little__right"},[r("v-uni-text",{staticClass:"article-views f-24 col-8"},[t._v(t._s(t.detail.view_time))])],1)],1),r("v-uni-view",{staticClass:"article-content m-top20"},[r("mp-html",{attrs:{content:t.detail.content}})],1),r("shortcut")],1)},n=[]},"66a0":function(t,a,r){"use strict";r.r(a);var o=r("f5e8"),e=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(a,t,(function(){return o[t]}))}(n);a["default"]=e.a},"711d":function(t,a,r){"use strict";var o=r("ffc7"),e=r.n(o);e.a},8994:function(t,a,r){"use strict";var o=r("29e2"),e=r.n(o);e.a},"8b90":function(t,a,r){"use strict";var o;r.d(a,"b",(function(){return e})),r.d(a,"c",(function(){return n})),r.d(a,"a",(function(){return o}));var e=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("v-uni-view",{staticClass:"shortcut",style:{"--right":t.rightPx+"px","--bottom":t.bottomPx+"px"}},[r("v-uni-view",{staticClass:"nav-item",class:[t.isShow?"show_80":t.transparent?"":"hide_80"],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onTargetPage(0)}}},[r("v-uni-text",{staticClass:"iconfont icon-home"})],1),r("v-uni-view",{staticClass:"nav-item",class:[t.isShow?"show_60":t.transparent?"":"hide_60"],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onTargetPage(1)}}},[r("v-uni-text",{staticClass:"iconfont icon-cate"})],1),r("v-uni-view",{staticClass:"nav-item",class:[t.isShow?"show_40":t.transparent?"":"hide_40"],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onTargetPage(2)}}},[r("v-uni-text",{staticClass:"iconfont icon-cart"})],1),r("v-uni-view",{staticClass:"nav-item",class:[t.isShow?"show_20":t.transparent?"":"hide_20"],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onTargetPage(3)}}},[r("v-uni-text",{staticClass:"iconfont icon-profile"})],1),r("v-uni-view",{staticClass:"nav-item nav-item__switch",class:{shortcut_click_show:t.isShow},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.onToggleShow()}}},[r("v-uni-text",{staticClass:"iconfont icon-daohang"})],1)],1)},n=[]},f2d9:function(t,a,r){"use strict";r.r(a);var o=r("8b90"),e=r("25b2");for(var n in e)"default"!==n&&function(t){r.d(a,t,(function(){return e[t]}))}(n);r("8994");var i,s=r("f0c5"),d=Object(s["a"])(e["default"],o["b"],o["c"],!1,null,"c0d8f984",null,!1,o["a"],i);a["default"]=d.exports},f5e8:function(t,a,r){"use strict";var o=r("dbce"),e=r("4ea4");r("d3b7"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(r("f2d9")),i=o(r("0b4c")),s={components:{Shortcut:n.default},data:function(){return{articleId:null,isLoading:!0,detail:null}},onLoad:function(t){this.articleId=t.articleId,this.getArticleDetail()},methods:{getArticleDetail:function(){var t=this;t.isLoading=!0,i.detail(t.articleId).then((function(a){t.detail=a.data.detail})).finally((function(){return t.isLoading=!1}))}},onShareAppMessage:function(){var t=this,a=t.$getShareUrlParams({articleId:t.articleId});return{title:t.detail.title,path:"/pages/article/detail?"+a}},onShareTimeline:function(){var t=this,a=t.$getShareUrlParams({articleId:t.articleId});return{title:t.detail.title,path:"/pages/article/detail?"+a}}};a.default=s},ffc7:function(t,a,r){var o=r("2efd");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var e=r("4f06").default;e("6d5f7aa0",o,!0,{sourceMap:!1,shadowMode:!1})}}]);