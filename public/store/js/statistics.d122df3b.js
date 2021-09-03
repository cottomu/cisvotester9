(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["statistics"],{29543:function(t,a,s){"use strict";s.r(a);var e={};s.r(e),s.d(e,"overview",(function(){return D})),s.d(e,"statistics",(function(){return I}));var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a-spin",{attrs:{spinning:t.isLoading}},[s("div",{staticClass:"container"},[s("a-card",{staticClass:"overview",attrs:{bordered:!1}},[s("div",{staticClass:"card-title"},[s("span",[t._v("数据概况")])]),s("div",{staticClass:"screen flex flex-x-center"},[s("a-range-picker",{attrs:{format:"YYYY-MM-DD"},model:{value:t.dateValue,callback:function(a){t.dateValue=a},expression:"dateValue"}}),s("div",{staticClass:"shortcut"},[s("div",{staticClass:"shortcut-days"},[s("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.onFastDate(7)}}},[t._v("7天")]),s("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.onFastDate(30)}}},[t._v("30天")]),s("a",{attrs:{href:"javascript:void(0);"},on:{click:function(a){return t.onFastDate(0)}}},[t._v("清空")])])])],1),s("a-row",{staticClass:"mt-20",attrs:{gutter:32}},[s("a-col",{attrs:{span:8}},[s("div",{staticClass:"item flex"},[s("div",{staticClass:"col-left"},[s("div",{staticClass:"icon-body flex flex-x-center flex-y-center"},[s("a-icon",{attrs:{component:t.Icons.overview.sale}})],1)]),s("div",{staticClass:"col-right"},[s("p",{staticClass:"name"},[t._v("销售额 (元)")]),s("p",{staticClass:"value"},[t._v(t._s(t.data.overview.orderTotalPrice))])])])]),s("a-col",{attrs:{span:8}},[s("div",{staticClass:"item flex"},[s("div",{staticClass:"col-left small"},[s("div",{staticClass:"icon-body flex flex-x-center flex-y-center"},[s("a-icon",{attrs:{component:t.Icons.statistics.order}})],1)]),s("div",{staticClass:"col-right"},[s("p",{staticClass:"name"},[t._v("支付订单数 (笔)")]),s("p",{staticClass:"value"},[t._v(t._s(t.data.overview.orderTotal))])])])]),s("a-col",{attrs:{span:8}},[s("div",{staticClass:"item flex"},[s("div",{staticClass:"col-left small"},[s("div",{staticClass:"icon-body flex flex-x-center flex-y-center"},[s("a-icon",{attrs:{component:t.Icons.statistics.goods}})],1)]),s("div",{staticClass:"col-right"},[s("p",{staticClass:"name"},[t._v("商品数量 (件)")]),s("p",{staticClass:"value"},[t._v(t._s(t.data.overview.goodsTotal))])])])])],1),s("a-row",{staticClass:"mt-20",attrs:{gutter:32}},[s("a-col",{attrs:{span:8}},[s("div",{staticClass:"item flex"},[s("div",{staticClass:"col-left"},[s("div",{staticClass:"icon-body flex flex-x-center flex-y-center"},[s("a-icon",{attrs:{component:t.Icons.statistics.user}})],1)]),s("div",{staticClass:"col-right"},[s("p",{staticClass:"name"},[t._v("会员数量")]),s("p",{staticClass:"value"},[t._v(t._s(t.data.overview.userTotal))])])])]),s("a-col",{attrs:{span:8}},[s("div",{staticClass:"item flex"},[s("div",{staticClass:"col-left"},[s("div",{staticClass:"icon-body flex flex-x-center flex-y-center"},[s("a-icon",{attrs:{component:t.Icons.statistics.consume}})],1)]),s("div",{staticClass:"col-right"},[s("p",{staticClass:"name"},[t._v("消费人数")]),s("p",{staticClass:"value"},[t._v(t._s(t.data.overview.consumeUsers))])])])]),s("a-col",{attrs:{span:8}},[s("div",{staticClass:"item flex"},[s("div",{staticClass:"col-left"},[s("div",{staticClass:"icon-body flex flex-x-center flex-y-center"},[s("a-icon",{attrs:{component:t.Icons.statistics.recharge}})],1)]),s("div",{staticClass:"col-right"},[s("p",{staticClass:"name"},[t._v("用户充值总额 (元)")]),s("p",{staticClass:"value"},[t._v(t._s(t.data.overview.rechargeTotalMoney))])])])])],1)],1),s("a-card",{staticClass:"trade-trend mt-20",attrs:{bordered:!1}},[s("div",{staticClass:"card-title"},[s("span",[t._v("近七日交易走势")])]),s("div",{staticClass:"echarts-body"},[s("div",{staticStyle:{width:"100%",height:"400px"},attrs:{id:"main"}})])]),s("a-row",{staticClass:"ranking mt-20",attrs:{gutter:32}},[s("a-col",{staticClass:"ranking-item",attrs:{span:12}},[s("a-card",{attrs:{bordered:!1}},[s("div",{staticClass:"card-title"},[s("span",[t._v("商品销售榜")])]),s("a-table",{attrs:{rowKey:"goods_id",columns:t.goodsRankingColumns,dataSource:t.data.goodsRanking,pagination:!1},scopedSlots:t._u([{key:"index",fn:function(a,e,i){return[i<3&&e.total_sales_num>0?s("div",{staticClass:"ranking-img"},[s("img",{attrs:{src:"static/img/statistics/ranking/0"+(i+1)+".png",alt:""}})]):s("span",[t._v(t._s(i+1))])]}},{key:"goods_name",fn:function(a){return[s("p",{staticClass:"oneline-hide",staticStyle:{width:"240px"}},[t._v(t._s(a))])]}}])})],1)],1),s("a-col",{staticClass:"ranking-item",attrs:{span:12}},[s("a-card",{attrs:{bordered:!1}},[s("div",{staticClass:"card-title"},[s("span",[t._v("用户消费榜")])]),s("a-table",{attrs:{rowKey:"user_id",columns:t.userRankingColumns,dataSource:t.data.userExpendRanking,pagination:!1},scopedSlots:t._u([{key:"index",fn:function(a,e,i){return[i<3&&e.expend_money>0?s("div",{staticClass:"ranking-img"},[s("img",{attrs:{src:"static/img/statistics/ranking/0"+(i+1)+".png",alt:""}})]):s("span",[t._v(t._s(i+1))])]}}])})],1)],1)],1)],1)])},n=[],c=(s("d3b7"),s("313e")),r=s.n(c),o=(s("a59f"),s("b775")),l={data:"/statistics.data/data",survey:"/statistics.data/survey"};function d(t){return Object(o["b"])({url:l.data,method:"get",params:t})}function v(t){return Object(o["b"])({url:l.survey,method:"get",params:t})}var u=s("193c"),g=s.n(u),f=s("ba7a"),p=s.n(f),m=s("19c2"),x=s.n(m),C=s("5ef6"),h=s.n(C),_=s("f4f6"),y=s.n(_),b=s("f08d"),w=s.n(b),k=s("8a6c"),T=s.n(k),D={sale:g.a,increase:p.a},I={goods:x.a,order:h.a,user:y.a,consume:w.a,recharge:T.a},M=s("ca00"),R=s("c1df"),S=s.n(R),Y=[{title:"排名",dataIndex:"index",align:"center",scopedSlots:{customRender:"index"}},{title:"商品名称",dataIndex:"goods_name",scopedSlots:{customRender:"goods_name"}},{title:"销量 (件)",align:"center",dataIndex:"total_sales_num"},{title:"销售额 (元)",align:"center",dataIndex:"sales_volume"}],L=[{title:"排名",dataIndex:"index",align:"center",scopedSlots:{customRender:"index"}},{title:"会员昵称",dataIndex:"nick_name",scopedSlots:{customRender:"nick_name"}},{title:"实际消费金额 (元)",align:"center",dataIndex:"expend_money"}],j={overview:{userTotal:"0",consumeUsers:"0",orderTotal:"0",orderTotalPrice:"0.00",goodsTotal:"0",rechargeTotalMoney:"0"},tradeTrend:{date:[],orderTotal:[],orderTotalPrice:[]},goodsRanking:[],userExpendRanking:[]},H={name:"Index",data:function(){return{Icons:e,isLoading:!1,data:j,dateValue:[],goodsRankingColumns:Y,userRankingColumns:L}},created:function(){this.getData()},methods:{onFastDate:function(t){this.dateValue=0===t?[]:[S()(Object(M["c"])(-t)),S()(Object(M["c"])(0))],this.getSurvey()},getSurvey:function(){var t=this;this.isLoading=!0;var a=this.dateValue,s={startDate:null,endDate:null};a.length&&(s.startDate=a[0].format("YYYY-MM-DD"),s.endDate=a[1].format("YYYY-MM-DD")),v(s).then((function(a){t.data.overview=a.data})).finally((function(){t.isLoading=!1}))},getData:function(){var t=this;this.isLoading=!0,d().then((function(a){t.data=a.data.data,t.$nextTick((function(){t.myEcharts()}))})).finally((function(){t.isLoading=!1}))},myEcharts:function(){var t=this.data,a=r.a.init(document.getElementById("main"),"fresh-cut"),s={tooltip:{trigger:"axis"},legend:{data:["成交量","成交额"]},toolbox:{show:!0,showTitle:!1,feature:{mark:{show:!0},magicType:{show:!0,type:["line","bar"]}}},calculable:!0,xAxis:{type:"category",boundaryGap:!1,data:t.tradeTrend.date},yAxis:{type:"value"},series:[{name:"成交额",type:"line",data:t.tradeTrend.orderTotalPrice},{name:"成交量",type:"line",data:t.tradeTrend.orderTotal}]};a.setOption(s)}}},E=H,O=(s("9451"),s("2877")),V=Object(O["a"])(E,i,n,!1,null,"0cd3a791",null);a["default"]=V.exports},"8a6c":function(t,a,s){var e=s("b2b7");t.exports={__esModule:!0,default:e.svgComponent({tag:"svg",attrsMap:{t:"1600598056712",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"8246",width:"200",height:"200"},children:[{tag:"path",attrsMap:{d:"M829.797514 641.926675c19.058897 0 31.786147 12.72725 31.786147 31.786147v127.080633h127.080632c19.122853 0 31.786147 12.791206 31.786147 31.850103s-19.058897 31.786147-31.786147 31.786147l-127.080632-0.063956v127.144588c0 12.72725-19.058897 31.786147-31.786147 31.786147-19.058897 0-31.786147-12.72725-31.786147-31.786147v-127.144588h-127.144588c-19.058897 0-31.722191-12.663294-31.722191-31.722191 0-19.122853 12.663294-31.786147 31.722191-31.786147l127.144588-0.063956v-127.080633c0-19.058897 12.72725-31.786147 31.786147-31.786147zM512 0c279.67972 0 508.45044 228.834676 508.45044 508.45044 0 25.4545 0 50.845044-6.395603 82.631191 0 19.058897-18.994941 31.786147-38.053838 25.4545-19.058897 0-31.786147-19.058897-25.4545-38.18175 6.395603-25.390544 6.395603-44.449441 6.395603-69.903941A442.191993 442.191993 0 0 0 512 63.572294c-247.893573 0-444.942102 203.380176-444.942102 451.273749A442.191993 442.191993 0 0 0 512 959.72419c25.4545 0 57.176691 0 82.631191-6.395603 19.058897-6.331647 31.786147 6.395603 38.117794 25.4545 6.395603 19.058897-6.395603 31.786147-25.390544 38.18175H512C232.32028 1016.900881 3.54956 788.130161 3.54956 508.45044 3.54956 228.77072 232.32028 0 512 0z m92.416464 262.859284a30.059334 30.059334 0 0 1 39.908563-14.454063 30.059334 30.059334 0 0 1 14.454062 39.908563L574.67691 468.797702h131.173818a30.059334 30.059334 0 0 1 0 60.054712H542.059334v63.95603h92.416464c20.593842 0 37.478234 13.430766 37.478234 29.995378 0 16.4367-16.884392 29.931422-37.478234 29.931423H542.059334v94.974704a30.059334 30.059334 0 0 1-29.995378 29.931423 30.059334 30.059334 0 0 1-29.995378-29.931423v-94.974704H389.588158c-20.593842 0-37.478234-13.430766-37.478234-29.931423s16.884392-30.059334 37.478234-30.059334H481.940666v-63.95603H318.213228A30.059334 30.059334 0 0 1 288.153894 498.857036a30.059334 30.059334 0 0 1 29.995378-29.995378H449.32309L365.220911 288.441696a30.059334 30.059334 0 0 1 54.362625-25.390544L512 461.25089z","p-id":"8247"}}]})}},"8b7c":function(t,a,s){},9451:function(t,a,s){"use strict";var e=s("8b7c"),i=s.n(e);i.a}}]);