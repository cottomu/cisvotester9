(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-index~pages-comment-index~pages-goods-list~pages-help-index~pages-my-coupon-index~page~1498f260"],{"010e":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={};function i(t){n.optDown=t.optDown,n.scrollTop=t.scrollTop,n.isDownScrolling=t.isDownScrolling,n.isUpScrolling=t.isUpScrolling,n.isUpBoth=t.isUpBoth}window&&!window.$mescrollRenderInit&&(window.$mescrollRenderInit=!0,window.addEventListener("touchstart",(function(t){n.disabled()||(n.startPoint=n.getPoint(t))}),{passive:!0}),window.addEventListener("touchmove",(function(t){if(!n.disabled()&&!(n.getScrollTop()>0)){var o=n.getPoint(t),e=o.y-n.startPoint.y;if(e>0&&!n.isDownScrolling&&!n.optDown.isLock&&(!n.isUpScrolling||n.isUpScrolling&&n.isUpBoth)){var i=t.target,r=!1;while(i&&i.tagName&&"UNI-PAGE-BODY"!==i.tagName&&"BODY"!=i.tagName){var s=i.classList;if(s&&s.contains("mescroll-render-touch")){r=!0;break}i=i.parentNode}r&&t.cancelable&&!t.defaultPrevented&&t.preventDefault()}}}),{passive:!1})),n.getScrollTop=function(){return n.scrollTop||0},n.disabled=function(){return!n.optDown||!n.optDown.use||n.optDown.native},n.getPoint=function(t){return t?t.touches&&t.touches[0]?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.changedTouches&&t.changedTouches[0]?{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY}:{x:t.clientX,y:t.clientY}:{x:0,y:0}};var r={data:function(){return{propObserver:i}}},s=r;o.default=s},"0716":function(t,o,e){"use strict";var n=e("c5f9"),i=e.n(n);i.a},"0d34":function(t,o,e){var n=e("24fb");o=n(!1),o.push([t.i,".mescroll-body[data-v-4cc6b119]{position:relative; /* 下拉刷新区域相对自身定位 */height:auto; /* 不可固定高度,否则overflow:hidden导致无法滑动; 同时使设置的最小高生效,实现列表不满屏仍可下拉*/overflow:hidden; /* 当有元素写在mescroll-body标签前面时,可遮住下拉刷新区域 */box-sizing:border-box /* 避免设置padding出现双滚动条的问题 */}\r\n\r\n/* 使sticky生效: 父元素不能overflow:hidden或者overflow:auto属性 */.mescroll-body.mescorll-sticky[data-v-4cc6b119]{overflow:unset!important}\r\n\r\n/* 适配 iPhoneX */@supports (bottom:constant(safe-area-inset-bottom)) or (bottom:env(safe-area-inset-bottom)){.mescroll-safearea[data-v-4cc6b119]{padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}}\r\n\r\n/* 下拉刷新区域 */.mescroll-downwarp[data-v-4cc6b119]{position:absolute;top:-100%;left:0;width:100%;height:100%;text-align:center}\r\n\r\n/* 下拉刷新--内容区,定位于区域底部 */.mescroll-downwarp .downwarp-content[data-v-4cc6b119]{position:absolute;left:0;bottom:0;width:100%;min-height:%?60?%;padding:%?20?% 0;text-align:center}\r\n\r\n/* 下拉刷新--提示文本 */.mescroll-downwarp .downwarp-tip[data-v-4cc6b119]{display:inline-block;font-size:%?28?%;vertical-align:middle;margin-left:%?16?%\r\n\t/* color: gray; 已在style设置color,此处删去*/}\r\n\r\n/* 下拉刷新--旋转进度条 */.mescroll-downwarp .downwarp-progress[data-v-4cc6b119]{display:inline-block;width:%?32?%;height:%?32?%;border-radius:50%;border:%?2?% solid grey;border-bottom-color:transparent!important; /*已在style设置border-color,此处需加 !important*/vertical-align:middle}\r\n\r\n/* 旋转动画 */.mescroll-downwarp .mescroll-rotate[data-v-4cc6b119]{-webkit-animation:mescrollDownRotate-data-v-4cc6b119 .6s linear infinite;animation:mescrollDownRotate-data-v-4cc6b119 .6s linear infinite}@-webkit-keyframes mescrollDownRotate-data-v-4cc6b119{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes mescrollDownRotate-data-v-4cc6b119{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\r\n\r\n/* 上拉加载区域 */.mescroll-upwarp[data-v-4cc6b119]{box-sizing:border-box;min-height:%?110?%;padding:%?30?% 0;text-align:center;clear:both}\r\n\r\n/*提示文本 */.mescroll-upwarp .upwarp-tip[data-v-4cc6b119],\r\n.mescroll-upwarp .upwarp-nodata[data-v-4cc6b119]{display:inline-block;font-size:%?28?%;vertical-align:middle\r\n\t/* color: gray; 已在style设置color,此处删去*/}.mescroll-upwarp .upwarp-tip[data-v-4cc6b119]{margin-left:%?16?%}\r\n\r\n/*旋转进度条 */.mescroll-upwarp .upwarp-progress[data-v-4cc6b119]{display:inline-block;width:%?32?%;height:%?32?%;border-radius:50%;border:%?2?% solid grey;border-bottom-color:transparent!important; /*已在style设置border-color,此处需加 !important*/vertical-align:middle}\r\n\r\n/* 旋转动画 */.mescroll-upwarp .mescroll-rotate[data-v-4cc6b119]{-webkit-animation:mescrollUpRotate-data-v-4cc6b119 .6s linear infinite;animation:mescrollUpRotate-data-v-4cc6b119 .6s linear infinite}@-webkit-keyframes mescrollUpRotate-data-v-4cc6b119{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes mescrollUpRotate-data-v-4cc6b119{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}",""]),t.exports=o},"25d5":function(t,o,e){"use strict";e.r(o);var n=e("8857"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(o,t,(function(){return n[t]}))}(r);o["default"]=i.a},"2f8a":function(t,o,e){var n=e("0d34");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("5e364a72",n,!0,{sourceMap:!1,shadowMode:!1})},"3e9a":function(t,o,e){"use strict";var n=e("4ea4");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=n(e("a0f6")),r={props:{option:{type:Object,default:function(){return{}}}},computed:{icon:function(){return null==this.option.icon?i.default.up.empty.icon:this.option.icon},tip:function(){return null==this.option.tip?i.default.up.empty.tip:this.option.tip}},methods:{emptyClick:function(){this.$emit("emptyclick")}}};o.default=r},4394:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={data:function(){return{wxsProp:{optDown:{},scrollTop:0,bodyHeight:0,isDownScrolling:!1,isUpScrolling:!1,isScrollBody:!0,isUpBoth:!0,t:0},callProp:{callType:"",t:0}}},methods:{wxsCall:function(t){"setWxsProp"===t.type?this.wxsProp={optDown:this.mescroll.optDown,scrollTop:this.mescroll.getScrollTop(),bodyHeight:this.mescroll.getBodyHeight(),isDownScrolling:this.mescroll.isDownScrolling,isUpScrolling:this.mescroll.isUpScrolling,isUpBoth:this.mescroll.optUp.isBoth,isScrollBody:this.mescroll.isScrollBody,t:Date.now()}:"setLoadType"===t.type?(this.downLoadType=t.downLoadType,this.$set(this.mescroll,"downLoadType",this.downLoadType),this.$set(this.mescroll,"isDownEndSuccess",null)):"triggerDownScroll"===t.type?this.mescroll.triggerDownScroll():"endDownScroll"===t.type?this.mescroll.endDownScroll():"triggerUpScroll"===t.type&&this.mescroll.triggerUpScroll(!0)}},mounted:function(){var t=this;this.mescroll.optDown.afterLoading=function(){t.callProp={callType:"showLoading",t:Date.now()}},this.mescroll.optDown.afterEndDownScroll=function(){t.callProp={callType:"endDownScroll",t:Date.now()};var o=300+(t.mescroll.optDown.beforeEndDelay||0);setTimeout((function(){4!==t.downLoadType&&0!==t.downLoadType||(t.callProp={callType:"clearTransform",t:Date.now()}),t.$set(t.mescroll,"downLoadType",t.downLoadType)}),o)},this.wxsCall({type:"setWxsProp"})}},i=n;o.default=i},"4ca6":function(t,o,e){"use strict";var n=e("4ea4");e("c975"),e("a9e3"),e("ac1f"),e("5319"),e("1276"),e("498a"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=n(e("dc23")),r=n(e("a0f6")),s=n(e("5d4f")),l=n(e("c3f5")),a=n(e("4394")),c={mixins:[a.default],components:{MescrollEmpty:s.default,MescrollTop:l.default},data:function(){return{mescroll:{optDown:{},optUp:{}},downHight:0,downRate:0,downLoadType:0,upLoadType:0,isShowEmpty:!1,isShowToTop:!1,windowHeight:0,windowBottom:0,statusBarHeight:0}},props:{down:Object,up:Object,top:[String,Number],topbar:[Boolean,String],bottom:[String,Number],safearea:Boolean,height:[String,Number],bottombar:{type:Boolean,default:!0},sticky:Boolean},computed:{minHeight:function(){return this.toPx(this.height||"100%")+"px"},numTop:function(){return this.toPx(this.top)},padTop:function(){return this.numTop+"px"},numBottom:function(){return this.toPx(this.bottom)},padBottom:function(){return this.numBottom+"px"},isDownReset:function(){return 3===this.downLoadType||4===this.downLoadType},transition:function(){return this.isDownReset?"transform 300ms":""},translateY:function(){return this.downHight>0?"translateY("+this.downHight+"px)":""},isDownLoading:function(){return 3===this.downLoadType},downRotate:function(){return"rotate("+360*this.downRate+"deg)"},downText:function(){if(!this.mescroll)return"";switch(this.downLoadType){case 1:return this.mescroll.optDown.textInOffset;case 2:return this.mescroll.optDown.textOutOffset;case 3:return this.mescroll.optDown.textLoading;case 4:return this.mescroll.isDownEndSuccess?this.mescroll.optDown.textSuccess:0==this.mescroll.isDownEndSuccess?this.mescroll.optDown.textErr:this.mescroll.optDown.textInOffset;default:return this.mescroll.optDown.textInOffset}}},methods:{toPx:function(t){if("string"===typeof t)if(-1!==t.indexOf("px"))if(-1!==t.indexOf("rpx"))t=t.replace("rpx","");else{if(-1===t.indexOf("upx"))return Number(t.replace("px",""));t=t.replace("upx","")}else if(-1!==t.indexOf("%")){var o=Number(t.replace("%",""))/100;return this.windowHeight*o}return t?uni.upx2px(Number(t)):0},emptyClick:function(){this.$emit("emptyclick",this.mescroll)},toTopClick:function(){this.mescroll.scrollTo(0,this.mescroll.optUp.toTop.duration),this.$emit("topclick",this.mescroll)}},created:function(){var t=this,o={down:{inOffset:function(){t.downLoadType=1},outOffset:function(){t.downLoadType=2},onMoving:function(o,e,n){t.downHight=n,t.downRate=e},showLoading:function(o,e){t.downLoadType=3,t.downHight=e},beforeEndDownScroll:function(o){return t.downLoadType=4,o.optDown.beforeEndDelay},endDownScroll:function(){t.downLoadType=4,t.downHight=0,t.downResetTimer&&(clearTimeout(t.downResetTimer),t.downResetTimer=null),t.downResetTimer=setTimeout((function(){4===t.downLoadType&&(t.downLoadType=0)}),300)},callback:function(o){t.$emit("down",o)}},up:{showLoading:function(){t.upLoadType=1},showNoMore:function(){t.upLoadType=2},hideUpScroll:function(o){t.upLoadType=o.optUp.hasNext?0:3},empty:{onShow:function(o){t.isShowEmpty=o}},toTop:{onShow:function(o){t.isShowToTop=o}},callback:function(o){t.$emit("up",o)}}};i.default.extend(o,r.default);var e=JSON.parse(JSON.stringify({down:t.down,up:t.up}));i.default.extend(e,o),t.mescroll=new i.default(e,!0),t.$emit("init",t.mescroll);var n=uni.getSystemInfoSync();n.windowHeight&&(t.windowHeight=n.windowHeight),n.windowBottom&&(t.windowBottom=n.windowBottom),n.statusBarHeight&&(t.statusBarHeight=n.statusBarHeight),t.mescroll.setBodyHeight(n.windowHeight),t.mescroll.resetScrollTo((function(o,e){"string"===typeof o?setTimeout((function(){var n;-1==o.indexOf("#")&&-1==o.indexOf(".")?n="#"+o:(n=o,-1!=o.indexOf(">>>")&&(n=o.split(">>>")[1].trim())),uni.createSelectorQuery().select(n).boundingClientRect((function(o){if(o){var i=o.top;i+=t.mescroll.getScrollTop(),uni.pageScrollTo({scrollTop:i,duration:e})}else console.error(n+" does not exist")})).exec()}),30):uni.pageScrollTo({scrollTop:o,duration:e})})),t.up&&t.up.toTop&&null!=t.up.toTop.safearea||(t.mescroll.optUp.toTop.safearea=t.safearea)}};o.default=c},"5d27":function(t,o,e){var n=e("24fb");o=n(!1),o.push([t.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 无任何数据的空布局 */.mescroll-empty[data-v-742fe77c]{box-sizing:border-box;width:100%;padding:%?100?% %?50?%;text-align:center}.mescroll-empty.empty-fixed[data-v-742fe77c]{z-index:99;position:absolute; /*transform会使fixed失效,最终会降级为absolute */top:%?100?%;left:0}.mescroll-empty .empty-icon[data-v-742fe77c]{width:%?280?%;height:%?280?%}.mescroll-empty .empty-tip[data-v-742fe77c]{margin-top:%?30?%;font-size:%?26?%;color:grey}.mescroll-empty .empty-btn[data-v-742fe77c]{display:inline-block;margin-top:%?40?%;min-width:%?200?%;padding:%?18?%;font-size:%?28?%;border:%?1?% solid #e04b28;border-radius:%?60?%;color:#e04b28}.mescroll-empty .empty-btn[data-v-742fe77c]:active{opacity:.75}",""]),t.exports=o},"5d4f":function(t,o,e){"use strict";e.r(o);var n=e("bd3d"),i=e("c5cb");for(var r in i)"default"!==r&&function(t){e.d(o,t,(function(){return i[t]}))}(r);e("0716");var s,l=e("f0c5"),a=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"742fe77c",null,!1,n["a"],s);o["default"]=a.exports},"5f07":function(t,o,e){"use strict";var n;e.d(o,"b",(function(){return i})),e.d(o,"c",(function(){return r})),e.d(o,"a",(function(){return n}));var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return t.mOption.src?e("v-uni-image",{staticClass:"mescroll-totop",class:[t.value?"mescroll-totop-in":"mescroll-totop-out",{"mescroll-totop-safearea":t.mOption.safearea}],style:{"z-index":t.mOption.zIndex,left:t.left,right:t.right,bottom:t.addUnit(t.mOption.bottom),width:t.addUnit(t.mOption.width),"border-radius":t.addUnit(t.mOption.radius)},attrs:{src:t.mOption.src,mode:"widthFix"},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.toTopClick.apply(void 0,arguments)}}}):t._e()},r=[]},6139:function(t,o,e){"use strict";e.r(o);var n=e("4ca6"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(o,t,(function(){return n[t]}))}(r);o["default"]=i.a},"61a0":function(t,o,e){var n=e("24fb");o=n(!1),o.push([t.i,"\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* 回到顶部的按钮 */.mescroll-totop[data-v-6d51c2b6]{z-index:9990;position:fixed!important; /* 加上important避免编译到H5,在多mescroll中定位失效 */right:%?20?%;bottom:%?120?%;width:%?72?%;height:auto;border-radius:50%;opacity:0;transition:opacity .5s; /* 过渡 */margin-bottom:var(--window-bottom) /* css变量 */}\r\n/* 适配 iPhoneX */@supports (bottom:constant(safe-area-inset-bottom)) or (bottom:env(safe-area-inset-bottom)){.mescroll-totop-safearea[data-v-6d51c2b6]{margin-bottom:calc(var(--window-bottom) + constant(safe-area-inset-bottom)); /* window-bottom + 适配 iPhoneX */margin-bottom:calc(var(--window-bottom) + env(safe-area-inset-bottom))}}\r\n/* 显示 -- 淡入 */.mescroll-totop-in[data-v-6d51c2b6]{opacity:1}\r\n/* 隐藏 -- 淡出且不接收事件*/.mescroll-totop-out[data-v-6d51c2b6]{opacity:0;pointer-events:none}",""]),t.exports=o},8857:function(t,o,e){"use strict";var n=e("4ea4");Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=n(e("010e")),r={mixins:[i.default]};o.default=r},"8dee":function(t,o,e){"use strict";var n=e("ed51"),i=e.n(n);i.a},a0f6:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={down:{textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",textSuccess:"加载成功",textErr:"加载失败",beforeEndDelay:100,offset:80,native:!1},up:{textLoading:"加载中 ...",textNoMore:"亲, 没有更多了",offset:150,toTop:{src:"https://www.mescroll.com/img/mescroll-totop.png",offset:1e3,right:20,bottom:120,width:72},empty:{use:!0,icon:"/static/empty.png",tip:"亲，暂无相关数据"}}},i=n;o.default=i},b7f6:function(t,o,e){"use strict";e.r(o);var n=e("d54f"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(o,t,(function(){return n[t]}))}(r);o["default"]=i.a},bd3d:function(t,o,e){"use strict";var n;e.d(o,"b",(function(){return i})),e.d(o,"c",(function(){return r})),e.d(o,"a",(function(){return n}));var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",{staticClass:"mescroll-empty",class:{"empty-fixed":t.option.fixed},style:{"z-index":t.option.zIndex,top:t.option.top}},[e("v-uni-view",[t.icon?e("v-uni-image",{staticClass:"empty-icon",attrs:{src:t.icon,mode:"widthFix"}}):t._e()],1),t.tip?e("v-uni-view",{staticClass:"empty-tip"},[t._v(t._s(t.tip))]):t._e(),t.option.btnText?e("v-uni-view",{staticClass:"empty-btn",on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.emptyClick.apply(void 0,arguments)}}},[t._v(t._s(t.option.btnText))]):t._e()],1)},r=[]},c3f5:function(t,o,e){"use strict";e.r(o);var n=e("5f07"),i=e("b7f6");for(var r in i)"default"!==r&&function(t){e.d(o,t,(function(){return i[t]}))}(r);e("8dee");var s,l=e("f0c5"),a=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"6d51c2b6",null,!1,n["a"],s);o["default"]=a.exports},c5cb:function(t,o,e){"use strict";e.r(o);var n=e("3e9a"),i=e.n(n);for(var r in n)"default"!==r&&function(t){e.d(o,t,(function(){return n[t]}))}(r);o["default"]=i.a},c5f9:function(t,o,e){var n=e("5d27");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("c7470eae",n,!0,{sourceMap:!1,shadowMode:!1})},d54f:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={props:{option:Object,value:!1},computed:{mOption:function(){return this.option||{}},left:function(){return this.mOption.left?this.addUnit(this.mOption.left):"auto"},right:function(){return this.mOption.left?"auto":this.addUnit(this.mOption.right)}},methods:{addUnit:function(t){return t?"number"===typeof t?t+"rpx":t:0},toTopClick:function(){this.$emit("input",!1),this.$emit("click")}}};o.default=n},dc05:function(t,o,e){"use strict";e.r(o);var n=e("e8c4"),i=e("25d5");for(var r in i)"default"!==r&&function(t){e.d(o,t,(function(){return i[t]}))}(r);var s=e("6139");for(var r in s)"default"!==r&&function(t){e.d(o,t,(function(){return s[t]}))}(r);e("e0e5");var l=e("f0c5"),a=e("ec8b");i["default"].__module="renderBiz";var c=Object(l["a"])(s["default"],n["b"],n["c"],!1,null,"4cc6b119",null,!1,n["a"],i["default"]);"function"===typeof a["a"]&&Object(a["a"])(c),o["default"]=c.exports},dc23:function(t,o,e){"use strict";function n(t,o){var e=this;e.version="1.3.3",e.options=t||{},e.isScrollBody=o||!1,e.isDownScrolling=!1,e.isUpScrolling=!1;var n=e.options.down&&e.options.down.callback;e.initDownScroll(),e.initUpScroll(),setTimeout((function(){(e.optDown.use||e.optDown.native)&&e.optDown.auto&&n&&(e.optDown.autoShowLoading?e.triggerDownScroll():e.optDown.callback&&e.optDown.callback(e)),e.isUpAutoLoad||setTimeout((function(){e.optUp.use&&e.optUp.auto&&!e.isUpAutoLoad&&e.triggerUpScroll()}),100)}),30)}Object.defineProperty(o,"__esModule",{value:!0}),o.default=n,n.prototype.extendDownScroll=function(t){n.extend(t,{use:!0,auto:!0,native:!1,autoShowLoading:!1,isLock:!1,offset:80,startTop:100,inOffsetRate:1,outOffsetRate:.2,bottomOffset:20,minAngle:45,textInOffset:"下拉刷新",textOutOffset:"释放更新",textLoading:"加载中 ...",textSuccess:"加载成功",textErr:"加载失败",beforeEndDelay:100,bgColor:"transparent",textColor:"gray",inited:null,inOffset:null,outOffset:null,onMoving:null,beforeLoading:null,showLoading:null,afterLoading:null,beforeEndDownScroll:null,endDownScroll:null,afterEndDownScroll:null,callback:function(t){t.resetUpScroll()}})},n.prototype.extendUpScroll=function(t){n.extend(t,{use:!0,auto:!0,isLock:!1,isBoth:!0,callback:null,page:{num:0,size:10,time:null},noMoreSize:5,offset:150,textLoading:"加载中 ...",textNoMore:"-- END --",bgColor:"transparent",textColor:"gray",inited:null,showLoading:null,showNoMore:null,hideUpScroll:null,errDistance:60,toTop:{src:null,offset:1e3,duration:300,btnClick:null,onShow:null,zIndex:9990,left:null,right:20,bottom:120,safearea:!1,width:72,radius:"50%"},empty:{use:!0,icon:null,tip:"~ 暂无相关数据 ~",btnText:"",btnClick:null,onShow:null,fixed:!1,top:"100rpx",zIndex:99},onScroll:!1})},n.extend=function(t,o){if(!t)return o;for(var e in o)if(null==t[e]){var i=o[e];t[e]=null!=i&&"object"===typeof i?n.extend({},i):i}else"object"===typeof t[e]&&n.extend(t[e],o[e]);return t},n.prototype.hasColor=function(t){if(!t)return!1;var o=t.toLowerCase();return"#fff"!=o&&"#ffffff"!=o&&"transparent"!=o&&"white"!=o},n.prototype.initDownScroll=function(){var t=this;t.optDown=t.options.down||{},!t.optDown.textColor&&t.hasColor(t.optDown.bgColor)&&(t.optDown.textColor="#fff"),t.extendDownScroll(t.optDown),t.isScrollBody&&t.optDown.native?t.optDown.use=!1:t.optDown.native=!1,t.downHight=0,t.optDown.use&&t.optDown.inited&&setTimeout((function(){t.optDown.inited(t)}),0)},n.prototype.touchstartEvent=function(t){this.optDown.use&&(this.startPoint=this.getPoint(t),this.startTop=this.getScrollTop(),this.startAngle=0,this.lastPoint=this.startPoint,this.maxTouchmoveY=this.getBodyHeight()-this.optDown.bottomOffset,this.inTouchend=!1)},n.prototype.touchmoveEvent=function(t){if(this.optDown.use){var o=this,e=o.getScrollTop(),n=o.getPoint(t),i=n.y-o.startPoint.y;if(i>0&&(o.isScrollBody&&e<=0||!o.isScrollBody&&(e<=0||e<=o.optDown.startTop&&e===o.startTop))&&!o.inTouchend&&!o.isDownScrolling&&!o.optDown.isLock&&(!o.isUpScrolling||o.isUpScrolling&&o.optUp.isBoth)){if(o.startAngle||(o.startAngle=o.getAngle(o.lastPoint,n)),o.startAngle<o.optDown.minAngle)return;if(o.maxTouchmoveY>0&&n.y>=o.maxTouchmoveY)return o.inTouchend=!0,void o.touchendEvent();o.preventDefault(t);var r=n.y-o.lastPoint.y;o.downHight<o.optDown.offset?(1!==o.movetype&&(o.movetype=1,o.isDownEndSuccess=null,o.optDown.inOffset&&o.optDown.inOffset(o),o.isMoveDown=!0),o.downHight+=r*o.optDown.inOffsetRate):(2!==o.movetype&&(o.movetype=2,o.optDown.outOffset&&o.optDown.outOffset(o),o.isMoveDown=!0),o.downHight+=r>0?r*o.optDown.outOffsetRate:r),o.downHight=Math.round(o.downHight);var s=o.downHight/o.optDown.offset;o.optDown.onMoving&&o.optDown.onMoving(o,s,o.downHight)}o.lastPoint=n}},n.prototype.touchendEvent=function(t){if(this.optDown.use)if(this.isMoveDown)this.downHight>=this.optDown.offset?this.triggerDownScroll():(this.downHight=0,this.endDownScrollCall(this)),this.movetype=0,this.isMoveDown=!1;else if(!this.isScrollBody&&this.getScrollTop()===this.startTop){var o=this.getPoint(t).y-this.startPoint.y<0;if(o){var e=this.getAngle(this.getPoint(t),this.startPoint);e>80&&this.triggerUpScroll(!0)}}},n.prototype.getPoint=function(t){return t?t.touches&&t.touches[0]?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.changedTouches&&t.changedTouches[0]?{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY}:{x:t.clientX,y:t.clientY}:{x:0,y:0}},n.prototype.getAngle=function(t,o){var e=Math.abs(t.x-o.x),n=Math.abs(t.y-o.y),i=Math.sqrt(e*e+n*n),r=0;return 0!==i&&(r=Math.asin(n/i)/Math.PI*180),r},n.prototype.triggerDownScroll=function(){this.optDown.beforeLoading&&this.optDown.beforeLoading(this)||(this.showDownScroll(),!this.optDown.native&&this.optDown.callback&&this.optDown.callback(this))},n.prototype.showDownScroll=function(){this.isDownScrolling=!0,this.optDown.native?(uni.startPullDownRefresh(),this.showDownLoadingCall(0)):(this.downHight=this.optDown.offset,this.showDownLoadingCall(this.downHight))},n.prototype.showDownLoadingCall=function(t){this.optDown.showLoading&&this.optDown.showLoading(this,t),this.optDown.afterLoading&&this.optDown.afterLoading(this,t)},n.prototype.onPullDownRefresh=function(){this.isDownScrolling=!0,this.showDownLoadingCall(0),this.optDown.callback&&this.optDown.callback(this)},n.prototype.endDownScroll=function(){if(this.optDown.native)return this.isDownScrolling=!1,this.endDownScrollCall(this),void uni.stopPullDownRefresh();var t=this,o=function(){t.downHight=0,t.isDownScrolling=!1,t.endDownScrollCall(t),t.isScrollBody||(t.setScrollHeight(0),t.scrollTo(0,0))},e=0;t.optDown.beforeEndDownScroll&&(e=t.optDown.beforeEndDownScroll(t),null==t.isDownEndSuccess&&(e=0)),"number"===typeof e&&e>0?setTimeout(o,e):o()},n.prototype.endDownScrollCall=function(){this.optDown.endDownScroll&&this.optDown.endDownScroll(this),this.optDown.afterEndDownScroll&&this.optDown.afterEndDownScroll(this)},n.prototype.lockDownScroll=function(t){null==t&&(t=!0),this.optDown.isLock=t},n.prototype.lockUpScroll=function(t){null==t&&(t=!0),this.optUp.isLock=t},n.prototype.initUpScroll=function(){var t=this;t.optUp=t.options.up||{use:!1},!t.optUp.textColor&&t.hasColor(t.optUp.bgColor)&&(t.optUp.textColor="#fff"),t.extendUpScroll(t.optUp),!1!==t.optUp.use&&(t.optUp.hasNext=!0,t.startNum=t.optUp.page.num+1,t.optUp.inited&&setTimeout((function(){t.optUp.inited(t)}),0))},n.prototype.onReachBottom=function(){this.isScrollBody&&!this.isUpScrolling&&!this.optUp.isLock&&this.optUp.hasNext&&this.triggerUpScroll()},n.prototype.onPageScroll=function(t){this.isScrollBody&&(this.setScrollTop(t.scrollTop),t.scrollTop>=this.optUp.toTop.offset?this.showTopBtn():this.hideTopBtn())},n.prototype.scroll=function(t,o){this.setScrollTop(t.scrollTop),this.setScrollHeight(t.scrollHeight),null==this.preScrollY&&(this.preScrollY=0),this.isScrollUp=t.scrollTop-this.preScrollY>0,this.preScrollY=t.scrollTop,this.isScrollUp&&this.triggerUpScroll(!0),t.scrollTop>=this.optUp.toTop.offset?this.showTopBtn():this.hideTopBtn(),this.optUp.onScroll&&o&&o()},n.prototype.triggerUpScroll=function(t){if(!this.isUpScrolling&&this.optUp.use&&this.optUp.callback){if(!0===t){var o=!1;if(!this.optUp.hasNext||this.optUp.isLock||this.isDownScrolling||this.getScrollBottom()<=this.optUp.offset&&(o=!0),!1===o)return}this.showUpScroll(),this.optUp.page.num++,this.isUpAutoLoad=!0,this.num=this.optUp.page.num,this.size=this.optUp.page.size,this.time=this.optUp.page.time,this.optUp.callback(this)}},n.prototype.showUpScroll=function(){this.isUpScrolling=!0,this.optUp.showLoading&&this.optUp.showLoading(this)},n.prototype.showNoMore=function(){this.optUp.hasNext=!1,this.optUp.showNoMore&&this.optUp.showNoMore(this)},n.prototype.hideUpScroll=function(){this.optUp.hideUpScroll&&this.optUp.hideUpScroll(this)},n.prototype.endUpScroll=function(t){null!=t&&(t?this.showNoMore():this.hideUpScroll()),this.isUpScrolling=!1},n.prototype.resetUpScroll=function(t){if(this.optUp&&this.optUp.use){var o=this.optUp.page;this.prePageNum=o.num,this.prePageTime=o.time,o.num=this.startNum,o.time=null,this.isDownScrolling||!1===t||(null==t?(this.removeEmpty(),this.showUpScroll()):this.showDownScroll()),this.isUpAutoLoad=!0,this.num=o.num,this.size=o.size,this.time=o.time,this.optUp.callback&&this.optUp.callback(this)}},n.prototype.setPageNum=function(t){this.optUp.page.num=t-1},n.prototype.setPageSize=function(t){this.optUp.page.size=t},n.prototype.endByPage=function(t,o,e){var n;this.optUp.use&&null!=o&&(n=this.optUp.page.num<o),this.endSuccess(t,n,e)},n.prototype.endBySize=function(t,o,e){var n;if(this.optUp.use&&null!=o){var i=(this.optUp.page.num-1)*this.optUp.page.size+t;n=i<o}this.endSuccess(t,n,e)},n.prototype.endSuccess=function(t,o,e){var n=this;if(n.isDownScrolling&&(n.isDownEndSuccess=!0,n.endDownScroll()),n.optUp.use){var i;if(null!=t){var r=n.optUp.page.num,s=n.optUp.page.size;if(1===r&&e&&(n.optUp.page.time=e),t<s||!1===o)if(n.optUp.hasNext=!1,0===t&&1===r)i=!1,n.showEmpty();else{var l=(r-1)*s+t;i=!(l<n.optUp.noMoreSize),n.removeEmpty()}else i=!1,n.optUp.hasNext=!0,n.removeEmpty()}n.endUpScroll(i)}},n.prototype.endErr=function(t){if(this.isDownScrolling){this.isDownEndSuccess=!1;var o=this.optUp.page;o&&this.prePageNum&&(o.num=this.prePageNum,o.time=this.prePageTime),this.endDownScroll()}this.isUpScrolling&&(this.optUp.page.num--,this.endUpScroll(!1),this.isScrollBody&&0!==t&&(t||(t=this.optUp.errDistance),this.scrollTo(this.getScrollTop()-t,0)))},n.prototype.showEmpty=function(){this.optUp.empty.use&&this.optUp.empty.onShow&&this.optUp.empty.onShow(!0)},n.prototype.removeEmpty=function(){this.optUp.empty.use&&this.optUp.empty.onShow&&this.optUp.empty.onShow(!1)},n.prototype.showTopBtn=function(){this.topBtnShow||(this.topBtnShow=!0,this.optUp.toTop.onShow&&this.optUp.toTop.onShow(!0))},n.prototype.hideTopBtn=function(){this.topBtnShow&&(this.topBtnShow=!1,this.optUp.toTop.onShow&&this.optUp.toTop.onShow(!1))},n.prototype.getScrollTop=function(){return this.scrollTop||0},n.prototype.setScrollTop=function(t){this.scrollTop=t},n.prototype.scrollTo=function(t,o){this.myScrollTo&&this.myScrollTo(t,o)},n.prototype.resetScrollTo=function(t){this.myScrollTo=t},n.prototype.getScrollBottom=function(){return this.getScrollHeight()-this.getClientHeight()-this.getScrollTop()},n.prototype.getStep=function(t,o,e,n,i){var r=o-t;if(0!==n&&0!==r){n=n||300,i=i||30;var s=n/i,l=r/s,a=0,c=setInterval((function(){a<s-1?(t+=l,e&&e(t,c),a++):(e&&e(o,c),clearInterval(c))}),i)}else e&&e(o)},n.prototype.getClientHeight=function(t){var o=this.clientHeight||0;return 0===o&&!0!==t&&(o=this.getBodyHeight()),o},n.prototype.setClientHeight=function(t){this.clientHeight=t},n.prototype.getScrollHeight=function(){return this.scrollHeight||0},n.prototype.setScrollHeight=function(t){this.scrollHeight=t},n.prototype.getBodyHeight=function(){return this.bodyHeight||0},n.prototype.setBodyHeight=function(t){this.bodyHeight=t},n.prototype.preventDefault=function(t){t&&t.cancelable&&!t.defaultPrevented&&t.preventDefault()}},e0e5:function(t,o,e){"use strict";var n=e("2f8a"),i=e.n(n);i.a},e8c4:function(t,o,e){"use strict";var n;e.d(o,"b",(function(){return i})),e.d(o,"c",(function(){return r})),e.d(o,"a",(function(){return n}));var i=function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-uni-view",{wxsProps:{"change:prop":"wxsProp"},staticClass:"mescroll-body mescroll-render-touch",class:{"mescorll-sticky":t.sticky},style:{minHeight:t.minHeight,"padding-top":t.padTop,"padding-bottom":t.padBottom},attrs:{"change:prop":t.wxsBiz.propObserver,prop:t.wxsProp},on:{touchstart:function(o){o=t.$handleWxsEvent(o),t.wxsBiz.touchstartEvent(o,t.$getComponentDescriptor())},touchmove:function(o){o=t.$handleWxsEvent(o),t.wxsBiz.touchmoveEvent(o,t.$getComponentDescriptor())},touchend:function(o){o=t.$handleWxsEvent(o),t.wxsBiz.touchendEvent(o,t.$getComponentDescriptor())},touchcancel:function(o){o=t.$handleWxsEvent(o),t.wxsBiz.touchendEvent(o,t.$getComponentDescriptor())}}},[t.topbar&&t.statusBarHeight?e("v-uni-view",{staticClass:"mescroll-topbar",style:{height:t.statusBarHeight+"px",background:t.topbar}}):t._e(),e("v-uni-view",{wxsProps:{"change:prop":"callProp"},staticClass:"mescroll-body-content mescroll-wxs-content",style:{transform:t.translateY,transition:t.transition},attrs:{"change:prop":t.wxsBiz.callObserver,prop:t.callProp}},[t.mescroll.optDown.use?e("v-uni-view",{staticClass:"mescroll-downwarp",style:{background:t.mescroll.optDown.bgColor,color:t.mescroll.optDown.textColor}},[e("v-uni-view",{staticClass:"downwarp-content"},[e("v-uni-view",{staticClass:"downwarp-progress mescroll-wxs-progress",class:{"mescroll-rotate":t.isDownLoading},style:{"border-color":t.mescroll.optDown.textColor,transform:t.downRotate}}),e("v-uni-view",{staticClass:"downwarp-tip"},[t._v(t._s(t.downText))])],1)],1):t._e(),t._t("default"),t.isShowEmpty?e("mescroll-empty",{attrs:{option:t.mescroll.optUp.empty},on:{emptyclick:function(o){arguments[0]=o=t.$handleEvent(o),t.emptyClick.apply(void 0,arguments)}}}):t._e(),t.mescroll.optUp.use&&!t.isDownLoading&&3!==t.upLoadType?e("v-uni-view",{staticClass:"mescroll-upwarp",style:{background:t.mescroll.optUp.bgColor,color:t.mescroll.optUp.textColor}},[e("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.upLoadType,expression:"upLoadType===1"}]},[e("v-uni-view",{staticClass:"upwarp-progress mescroll-rotate",style:{"border-color":t.mescroll.optUp.textColor}}),e("v-uni-view",{staticClass:"upwarp-tip"},[t._v(t._s(t.mescroll.optUp.textLoading))])],1),2===t.upLoadType?e("v-uni-view",{staticClass:"upwarp-nodata"},[t._v(t._s(t.mescroll.optUp.textNoMore))]):t._e()],1):t._e()],2),t.bottombar&&t.windowBottom>0?e("v-uni-view",{staticClass:"mescroll-bottombar",style:{height:t.windowBottom+"px"}}):t._e(),t.safearea?e("v-uni-view",{staticClass:"mescroll-safearea"}):t._e(),e("mescroll-top",{attrs:{option:t.mescroll.optUp.toTop},on:{click:function(o){arguments[0]=o=t.$handleEvent(o),t.toTopClick.apply(void 0,arguments)}},model:{value:t.isShowToTop,callback:function(o){t.isShowToTop=o},expression:"isShowToTop"}}),e("v-uni-view",{wxsProps:{"change:prop":"wxsProp"},attrs:{"change:prop":t.renderBiz.propObserver,prop:t.wxsProp}})],1)},r=[]},ec8b:function(t,o,e){"use strict";var n=function(t){(t.options.wxs||(t.options.wxs={}))["wxsBiz"]=function(t){var o={};function e(t){o.optDown=t.optDown,o.scrollTop=t.scrollTop,o.bodyHeight=t.bodyHeight,o.isDownScrolling=t.isDownScrolling,o.isUpScrolling=t.isUpScrolling,o.isUpBoth=t.isUpBoth,o.isScrollBody=t.isScrollBody,o.startTop=t.scrollTop}function n(t,e,n){o.disabled()||t.callType&&("showLoading"===t.callType?o.showLoading(n):"endDownScroll"===t.callType?o.endDownScroll(n):"clearTransform"===t.callType&&o.clearTransform(n))}function i(t,e){o.downHight=0,o.startPoint=o.getPoint(t),o.startTop=o.getScrollTop(),o.startAngle=0,o.lastPoint=o.startPoint,o.maxTouchmoveY=o.getBodyHeight()-o.optDown.bottomOffset,o.inTouchend=!1,o.callMethod(e,{type:"setWxsProp"})}function r(t,e){var n=!0;if(o.disabled())return n;var i=o.getScrollTop(),r=o.getPoint(t),l=r.y-o.startPoint.y;if(l>0&&(o.isScrollBody&&i<=0||!o.isScrollBody&&(i<=0||i<=o.optDown.startTop&&i===o.startTop))&&!o.inTouchend&&!o.isDownScrolling&&!o.optDown.isLock&&(!o.isUpScrolling||o.isUpScrolling&&o.isUpBoth)){if(o.startAngle||(o.startAngle=o.getAngle(o.lastPoint,r)),o.startAngle<o.optDown.minAngle)return n;if(o.maxTouchmoveY>0&&r.y>=o.maxTouchmoveY)return o.inTouchend=!0,s(t,e),n;n=!1;var a=r.y-o.lastPoint.y;o.downHight<o.optDown.offset?(1!==o.movetype&&(o.movetype=1,o.callMethod(e,{type:"setLoadType",downLoadType:1}),o.isMoveDown=!0),o.downHight+=a*o.optDown.inOffsetRate):(2!==o.movetype&&(o.movetype=2,o.callMethod(e,{type:"setLoadType",downLoadType:2}),o.isMoveDown=!0),o.downHight+=a>0?a*o.optDown.outOffsetRate:a),o.downHight=Math.round(o.downHight);var c=o.downHight/o.optDown.offset;o.onMoving(e,c,o.downHight)}return o.lastPoint=r,n}function s(t,e){if(o.isMoveDown)o.downHight>=o.optDown.offset?(o.downHight=o.optDown.offset,o.callMethod(e,{type:"triggerDownScroll"})):(o.downHight=0,o.callMethod(e,{type:"endDownScroll"})),o.movetype=0,o.isMoveDown=!1;else if(!o.isScrollBody&&o.getScrollTop()===o.startTop){var n=o.getPoint(t).y-o.startPoint.y<0;if(n){var i=o.getAngle(o.getPoint(t),o.startPoint);i>80&&o.callMethod(e,{type:"triggerUpScroll"})}}o.callMethod(e,{type:"setWxsProp"})}return o.onMoving=function(t,o,e){t.requestAnimationFrame((function(){t.selectComponent(".mescroll-wxs-content").setStyle({"will-change":"transform",transform:"translateY("+e+"px)",transition:""});var n=t.selectComponent(".mescroll-wxs-progress");n&&n.setStyle({transform:"rotate("+360*o+"deg)"})}))},o.showLoading=function(t){o.downHight=o.optDown.offset,t.requestAnimationFrame((function(){t.selectComponent(".mescroll-wxs-content").setStyle({"will-change":"auto",transform:"translateY("+o.downHight+"px)",transition:"transform 300ms"})}))},o.endDownScroll=function(t){o.downHight=0,o.isDownScrolling=!1,t.requestAnimationFrame((function(){t.selectComponent(".mescroll-wxs-content").setStyle({"will-change":"auto",transform:"translateY(0)",transition:"transform 300ms"})}))},o.clearTransform=function(t){t.requestAnimationFrame((function(){t.selectComponent(".mescroll-wxs-content").setStyle({"will-change":"",transform:"",transition:""})}))},o.disabled=function(){return!o.optDown||!o.optDown.use||o.optDown.native},o.getPoint=function(t){return t?t.touches&&t.touches[0]?{x:t.touches[0].pageX,y:t.touches[0].pageY}:t.changedTouches&&t.changedTouches[0]?{x:t.changedTouches[0].pageX,y:t.changedTouches[0].pageY}:{x:t.clientX,y:t.clientY}:{x:0,y:0}},o.getAngle=function(t,o){var e=Math.abs(t.x-o.x),n=Math.abs(t.y-o.y),i=Math.sqrt(e*e+n*n),r=0;return 0!==i&&(r=Math.asin(n/i)/Math.PI*180),r},o.getScrollTop=function(){return o.scrollTop||0},o.getBodyHeight=function(){return o.bodyHeight||0},o.callMethod=function(t,o){t&&t.callMethod("wxsCall",o)},t.exports={propObserver:e,callObserver:n,touchstartEvent:i,touchmoveEvent:r,touchendEvent:s},t.exports}({exports:{}})};o["a"]=n},ed51:function(t,o,e){var n=e("61a0");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("74501032",n,!0,{sourceMap:!1,shadowMode:!1})},f8d1:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={data:function(){return{mescroll:null}},onPullDownRefresh:function(){this.mescroll&&this.mescroll.onPullDownRefresh()},onPageScroll:function(t){this.mescroll&&this.mescroll.onPageScroll(t)},onReachBottom:function(){this.mescroll&&this.mescroll.onReachBottom()},methods:{mescrollInit:function(t){this.mescroll=t,this.mescrollInitByRef()},mescrollInitByRef:function(){if(!this.mescroll||!this.mescroll.resetUpScroll){var t=this.$refs.mescrollRef;t&&(this.mescroll=t.mescroll)}},downCallback:function(){var t=this;this.mescroll.optUp.use?this.mescroll.resetUpScroll():setTimeout((function(){t.mescroll.endSuccess()}),500)},upCallback:function(){var t=this;setTimeout((function(){t.mescroll.endErr()}),500)}},mounted:function(){this.mescrollInitByRef()}},i=n;o.default=i}}]);