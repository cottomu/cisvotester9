(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["setting"],{3267:function(e,a,r){"use strict";var t=r("5c06");a["a"]=new t["a"]([{key:"CAPTCHA",name:"短信验证码",value:"captcha"},{key:"ORDER_PAY",name:"新付款订单",value:"order_pay"}])},"447d":function(e,a,r){"use strict";r("f533")},"5c06":function(e,a,r){"use strict";var t=r("d4ec"),l=r("bee2"),n=(r("d81d"),r("b0c0"),r("dca8"),function(){function e(a){var r=this;Object(t["a"])(this,e);var l=[],n=[];if(!Array.isArray(a))throw new Error("param is not an array!");a.map((function(e){e.key&&e.name&&(l.push(e.key),n.push(e.value),r[e.key]=e,e.key!==e.value&&(r[e.value]=e))})),this.data=a,this.keyArr=l,this.valueArr=n,Object.freeze(this)}return Object(l["a"])(e,[{key:"keyOf",value:function(e){return this.data[this.keyArr.indexOf(e)]}},{key:"valueOf",value:function(e){return this.data[this.valueArr.indexOf(e)]}},{key:"getNameByKey",value:function(e){var a=this.keyOf(e);if(!a)throw new Error("No enum constant"+e);return a.name}},{key:"getNameByValue",value:function(e){var a=this.valueOf(e);if(!a)throw new Error("No enum constant"+e);return a.name}},{key:"getValueByKey",value:function(e){var a=this.keyOf(e);if(!a)throw new Error("No enum constant"+e);return a.key}},{key:"getData",value:function(){return this.data}}]),e}());a["a"]=n},"71b5":function(e,a,r){"use strict";var t=r("5c06");a["a"]=new t["a"]([{key:"LOCAL",name:"本地",value:"local"},{key:"QINIU",name:"七牛云",value:"qiniu"},{key:"ALIYUN",name:"阿里云",value:"aliyun"},{key:"QCLOUD",name:"腾讯云",value:"qcloud"}])},"88bc":function(e,a,r){(function(a){var r=1/0,t=9007199254740991,l="[object Arguments]",n="[object Function]",i="[object GeneratorFunction]",o="[object Symbol]",s="object"==typeof a&&a&&a.Object===Object&&a,u="object"==typeof self&&self&&self.Object===Object&&self,c=s||u||Function("return this")();function d(e,a,r){switch(r.length){case 0:return e.call(a);case 1:return e.call(a,r[0]);case 2:return e.call(a,r[0],r[1]);case 3:return e.call(a,r[0],r[1],r[2])}return e.apply(a,r)}function m(e,a){var r=-1,t=e?e.length:0,l=Array(t);while(++r<t)l[r]=a(e[r],r,e);return l}function p(e,a){var r=-1,t=a.length,l=e.length;while(++r<t)e[l+r]=a[r];return e}var v=Object.prototype,f=v.hasOwnProperty,b=v.toString,g=c.Symbol,C=v.propertyIsEnumerable,w=g?g.isConcatSpreadable:void 0,h=Math.max;function y(e,a,r,t,l){var n=-1,i=e.length;r||(r=x),l||(l=[]);while(++n<i){var o=e[n];a>0&&r(o)?a>1?y(o,a-1,r,t,l):p(l,o):t||(l[l.length]=o)}return l}function _(e,a){return e=Object(e),S(e,a,(function(a,r){return r in e}))}function S(e,a,r){var t=-1,l=a.length,n={};while(++t<l){var i=a[t],o=e[i];r(o,i)&&(n[i]=o)}return n}function k(e,a){return a=h(void 0===a?e.length-1:a,0),function(){var r=arguments,t=-1,l=h(r.length-a,0),n=Array(l);while(++t<l)n[t]=r[a+t];t=-1;var i=Array(a+1);while(++t<a)i[t]=r[t];return i[a]=n,d(e,this,i)}}function x(e){return A(e)||E(e)||!!(w&&e&&e[w])}function N(e){if("string"==typeof e||V(e))return e;var a=e+"";return"0"==a&&1/e==-r?"-0":a}function E(e){return L(e)&&f.call(e,"callee")&&(!C.call(e,"callee")||b.call(e)==l)}var A=Array.isArray;function I(e){return null!=e&&q(e.length)&&!O(e)}function L(e){return U(e)&&I(e)}function O(e){var a=F(e)?b.call(e):"";return a==n||a==i}function q(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=t}function F(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}function U(e){return!!e&&"object"==typeof e}function V(e){return"symbol"==typeof e||U(e)&&b.call(e)==o}var $=k((function(e,a){return null==e?{}:_(e,m(y(a,1),N))}));e.exports=$}).call(this,r("c8ba"))},"9aa4":function(e,a,r){"use strict";r("cad6")},a6b6:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),r("a-spin",{attrs:{spinning:e.isLoading}},[r("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[r("a-form-item",{attrs:{label:"未支付订单",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("div",{staticClass:"clearfix"},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["order.close_days",{rules:[{required:!0,message:"不能为空"}]}],expression:"['order.close_days', { rules: [{required: true, message: '不能为空'}] }]"}],staticClass:"fl-l",attrs:{min:0}}),r("span",{staticClass:"input-text_right"},[e._v("天后自动关闭")])],1),r("div",{staticClass:"form-item-help"},[r("p",{staticClass:"extra"},[e._v("如果在期间订单未付款，系统自动关闭，设置0天不自动关闭")])])]),r("a-form-item",{attrs:{label:"已发货订单",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("div",{staticClass:"clearfix"},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["order.receive_days",{rules:[{required:!0,message:"不能为空"}]}],expression:"['order.receive_days', { rules: [{required: true, message: '不能为空'}] }]"}],staticClass:"fl-l",attrs:{min:0}}),r("span",{staticClass:"input-text_right"},[e._v("天后自动确认收货")])],1),r("div",{staticClass:"form-item-help"},[r("p",{staticClass:"extra"},[e._v("如果在期间未确认收货，系统自动完成收货，设置0天不自动收货")])])]),r("a-form-item",{attrs:{label:"已完成订单",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("div",{staticClass:"clearfix"},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["order.refund_days",{rules:[{required:!0,message:"不能为空"}]}],expression:"['order.refund_days', { rules: [{required: true, message: '不能为空'}] }]"}],staticClass:"fl-l",attrs:{min:0}}),r("span",{staticClass:"input-text_right"},[e._v("天内允许申请售后")])],1),r("div",{staticClass:"form-item-help"},[r("p",{staticClass:"extra"},[e._v("订单完成后，用户在指定期限内可申请售后，设置0天不允许申请")])])]),r("a-divider",{attrs:{orientation:"left"}},[e._v("运费设置")]),r("a-form-item",{attrs:{label:"运费组合策略",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["freight_rule",{rules:[{required:!0}]}],expression:"['freight_rule', { rules: [{required: true}] }]"}]},[r("div",{staticClass:"radio-item"},[r("a-radio",{style:e.radioStyle,attrs:{value:"10"}},[e._v("叠加")]),r("div",{staticClass:"form-item-help"},[r("p",{staticClass:"extra"},[e._v("订单中的商品有多个运费模板时，将每个商品的运费之和订为订单总运费")])])],1),r("div",{staticClass:"radio-item"},[r("a-radio",{style:e.radioStyle,attrs:{value:"20"}},[e._v("以最低运费结算")]),r("div",{staticClass:"form-item-help"},[r("p",{staticClass:"extra"},[e._v("订单中的商品有多个运费模板时，取订单中运费最少的商品的运费计为订单总运费")])])],1),r("div",{staticClass:"radio-item"},[r("a-radio",{style:e.radioStyle,attrs:{value:"30"}},[e._v("以最高运费结算")]),r("div",{staticClass:"form-item-help"},[r("p",{staticClass:"extra"},[e._v("订单中的商品有多个运费模板时，取订单中运费最多的商品的运费计为订单总运费")])])],1)])],1),r("a-form-item",{attrs:{"wrapper-col":{span:e.wrapperCol.span,offset:e.labelCol.span}}},[r("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},l=[],n=(r("d3b7"),r("ddb0"),r("88bc")),i=r.n(n),o=r("f585"),s=r("ca00"),u={data:function(){return{key:"trade",labelCol:{span:4},wrapperCol:{span:10},isLoading:!1,form:this.$form.createForm(this),radioStyle:{display:"block",height:"30px",lineHeight:"30px"},record:{}}},created:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.isLoading=!0,o["a"](this.key).then((function(a){e.record=a.data.values,e.setFieldsValue()})).finally((function(a){e.isLoading=!1}))},setFieldsValue:function(){var e=this.record,a=this.$nextTick,r=this.form;!Object(s["e"])(r.getFieldsValue())&&a((function(){r.setFieldsValue(i()(e,["order","freight_rule"]))}))},handleSubmit:function(e){var a=this;e.preventDefault();var r=this.form.validateFields;r((function(e,r){!e&&a.onFormSubmit(r)}))},onFormSubmit:function(e){var a=this;this.isLoading=!0,o["b"](this.key,{form:e}).then((function(e){a.$message.success(e.message,1.5)})).finally((function(e){a.isLoading=!1}))}}},c=u,d=(r("447d"),r("2877")),m=Object(d["a"])(c,t,l,!1,null,"aa90f864",null);a["default"]=m.exports},a85e:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),r("a-spin",{attrs:{spinning:e.isLoading}},[r("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[r("a-form-item",{staticClass:"mb-20",attrs:{label:"短信平台",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["default",{rules:[{required:!0}]}],expression:"['default', { rules: [{ required: true }] }]"}],on:{change:e.onChangeEngine}},e._l(e.record.engine,(function(a,t){return r("a-radio",{key:t,attrs:{value:t}},[e._v(e._s(a.name))])})),1),e.form.getFieldValue("default")?r("div",{staticClass:"form-item-help"},[r("small",[e._v("短信平台管理地址：")]),r("a",{attrs:{href:e.record.engine[e.form.getFieldValue("default")].website,target:"_blank"}},[e._v(e._s(e.record.engine[e.form.getFieldValue("default")].website))])]):e._e()],1),r("div",{directives:[{name:"show",rawName:"v-show",value:"aliyun"===e.form.getFieldValue("default"),expression:"form.getFieldValue('default') === 'aliyun'"}]},[r("a-form-item",{attrs:{label:"AccessKeyId",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine.aliyun.AccessKeyId"],expression:"[`engine.aliyun.AccessKeyId`]"}]})],1),r("a-form-item",{attrs:{label:"AccessKeySecret",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine.aliyun.AccessKeySecret"],expression:"[`engine.aliyun.AccessKeySecret`]"}]})],1),r("a-form-item",{attrs:{label:"短信签名 Sign",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine.aliyun.sign"],expression:"[`engine.aliyun.sign`]"}]})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:"qcloud"===e.form.getFieldValue("default"),expression:"form.getFieldValue('default') === 'qcloud'"}]},[r("a-form-item",{attrs:{label:"SdkAppID",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine.qcloud.SdkAppID"],expression:"[`engine.qcloud.SdkAppID`]"}]})],1),r("a-form-item",{attrs:{label:"AccessKeyId",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine.qcloud.AccessKeyId"],expression:"[`engine.qcloud.AccessKeyId`]"}]})],1),r("a-form-item",{attrs:{label:"AccessKeySecret",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine.qcloud.AccessKeySecret"],expression:"[`engine.qcloud.AccessKeySecret`]"}]})],1),r("a-form-item",{attrs:{label:"短信签名 Sign",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine.qcloud.sign"],expression:"[`engine.qcloud.sign`]"}]})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:"qiniu"===e.form.getFieldValue("default"),expression:"form.getFieldValue('default') === 'qiniu'"}]},[r("a-form-item",{attrs:{label:"AccessKey",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine.qiniu.AccessKey"],expression:"[`engine.qiniu.AccessKey`]"}]})],1),r("a-form-item",{attrs:{label:"SecretKey",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine.qiniu.SecretKey"],expression:"[`engine.qiniu.SecretKey`]"}]})],1)],1),e._l(e.record["scene"],(function(a,t){return r("div",{key:t},[r("a-divider",{attrs:{orientation:"left"}},[e._v(e._s(a.name))]),r("a-form-item",{attrs:{label:"是否开启",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["scene."+t+".isEnable",{rules:[{required:!0}]}],expression:"[`scene.${index}.isEnable`, { rules: [{ required: true }] }]"}]},[r("a-radio",{attrs:{value:!0}},[e._v("开启")]),r("a-radio",{attrs:{value:!1}},[e._v("关闭")])],1)],1),r("a-form-item",{attrs:{label:"模板内容",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:""}},[r("span",[e._v(e._s(e.record.scene[t].contentPractical))])]),r("a-form-item",{attrs:{label:"模板ID/Code",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["scene."+t+".templateCode"],expression:"[`scene.${index}.templateCode`]"}]}),r("div",{staticClass:"form-item-help"},[r("small",[e._v("例如：SMS_139800030")])])],1),void 0!==e.record.scene[t].acceptPhone?r("a-form-item",{attrs:{label:"接收手机号",labelCol:e.labelCol,wrapperCol:e.wrapperCol,required:""}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["scene."+t+".acceptPhone"],expression:"[`scene.${index}.acceptPhone`]"}]}),r("div",{staticClass:"form-item-help"},[r("small",[e._v(" 注：如需填写多个手机号，请用英文逗号 "),r("a-tag",[e._v(",")]),e._v("隔开 ")],1)])],1):e._e()],1)})),r("a-form-item",{attrs:{"wrapper-col":{span:e.wrapperCol.span,offset:e.labelCol.span}}},[r("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("提交")])],1)],2)],1)],1)},l=[],n=(r("d3b7"),r("ddb0"),r("4d63"),r("ac1f"),r("25f0"),r("5319"),r("2ef0")),i=r("ca00"),o=r("f585"),s=r("3267"),u={data:function(){return{SettingSmsSceneEnum:s["a"],key:"sms",labelCol:{span:3},wrapperCol:{span:10},isLoading:!1,form:this.$form.createForm(this),record:{}}},created:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.isLoading=!0,o["a"](this.key).then((function(a){e.record=a.data.values,e.setFieldsValue()})).finally((function(a){e.isLoading=!1}))},onChangeEngine:function(e){var a=this,r=e.target.value;for(var t in a.record.scene){var l=a.record.scene[t];l.contentPractical=a.onVsprintf(l.content,l.variables[r])}},onVsprintf:function(e,a){for(var r=new RegExp("%s"),t=0;t<a.length;t++)e=e.replace(r,a[t]);return e},setFieldsValue:function(){var e=this,a=e.record,r=e.$nextTick,t=e.form;!Object(i["e"])(t.getFieldsValue())&&r((function(){var r={};for(var l in a.scene){var i=a.scene[l],o=e.onVsprintf(i.content,i.variables[a.default]);e.$set(i,"contentPractical",o),r[l]=Object(n["pick"])(i,["isEnable","templateCode","acceptPhone"])}var s={};for(var u in a.engine)s[u]=Object(n["omit"])(a.engine[u],["name","website"]);t.setFieldsValue({default:a.default,engine:s,scene:r})}))},handleSubmit:function(e){var a=this;e.preventDefault();var r=this.form.validateFields;r((function(e,r){!e&&a.onFormSubmit(r)}))},onFormSubmit:function(e){var a=this;this.isLoading=!0,o["b"](this.key,{form:e}).then((function(e){a.$message.success(e.message,1.5)})).finally((function(e){a.isLoading=!1}))}}},c=u,d=(r("fcb7"),r("2877")),m=Object(d["a"])(c,t,l,!1,null,"1986fd91",null);a["default"]=m.exports},bee2:function(e,a,r){"use strict";function t(e,a){for(var r=0;r<a.length;r++){var t=a[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function l(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}r.d(a,"a",(function(){return l}))},c5b8:function(e,a,r){"use strict";r.r(a);var t=function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("a-card",{attrs:{bordered:!1}},[r("div",{staticClass:"card-title"},[e._v(e._s(e.$route.meta.title))]),r("a-spin",{attrs:{spinning:e.isLoading}},[r("a-form",{attrs:{form:e.form},on:{submit:e.handleSubmit}},[r("a-form-item",{attrs:{label:"默认上传方式",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["default",{rules:[{required:!0}]}],expression:"['default', { rules: [{ required: true }] }]"}]},e._l(e.StorageEnum.data,(function(a,t){return r("a-radio",{key:t,attrs:{value:a.value}},[e._v(e._s(a.name)+" "+e._s(a.value==e.StorageEnum.LOCAL.value?"(不推荐)":""))])})),1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.form.getFieldValue("default")==e.StorageEnum.QINIU.value,expression:"form.getFieldValue('default') == StorageEnum.QINIU.value"}]},[r("a-form-item",{attrs:{label:"存储空间名称 Bucket",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine."+e.StorageEnum.QINIU.value+".bucket"],expression:"[`engine.${StorageEnum.QINIU.value}.bucket`]"}]})],1),r("a-form-item",{attrs:{label:"ACCESS_KEY AK",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine."+e.StorageEnum.QINIU.value+".access_key"],expression:"[`engine.${StorageEnum.QINIU.value}.access_key`]"}]})],1),r("a-form-item",{attrs:{label:"SECRET_KEY SK",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine."+e.StorageEnum.QINIU.value+".secret_key"],expression:"[`engine.${StorageEnum.QINIU.value}.secret_key`]"}]})],1),r("a-form-item",{attrs:{label:"空间域名 Domain",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine."+e.StorageEnum.QINIU.value+".domain"],expression:"[`engine.${StorageEnum.QINIU.value}.domain`]"}]})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.form.getFieldValue("default")==e.StorageEnum.ALIYUN.value,expression:"form.getFieldValue('default') == StorageEnum.ALIYUN.value"}]},[r("a-form-item",{attrs:{label:"存储空间名称 Bucket",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine."+e.StorageEnum.ALIYUN.value+".bucket"],expression:"[`engine.${StorageEnum.ALIYUN.value}.bucket`]"}]})],1),r("a-form-item",{attrs:{label:"AccessKeyId",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine."+e.StorageEnum.ALIYUN.value+".access_key_id"],expression:"[`engine.${StorageEnum.ALIYUN.value}.access_key_id`]"}]})],1),r("a-form-item",{attrs:{label:"AccessKeySecret",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine."+e.StorageEnum.ALIYUN.value+".access_key_secret"],expression:"[`engine.${StorageEnum.ALIYUN.value}.access_key_secret`]"}]})],1),r("a-form-item",{attrs:{label:"空间域名 Domain",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine."+e.StorageEnum.ALIYUN.value+".domain"],expression:"[`engine.${StorageEnum.ALIYUN.value}.domain`]"}]})],1)],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.form.getFieldValue("default")==e.StorageEnum.QCLOUD.value,expression:"form.getFieldValue('default') == StorageEnum.QCLOUD.value"}]},[r("a-form-item",{attrs:{label:"存储空间名称 Bucket",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine."+e.StorageEnum.QCLOUD.value+".bucket"],expression:"[`engine.${StorageEnum.QCLOUD.value}.bucket`]"}]})],1),r("a-form-item",{attrs:{label:"所属地域 Region",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine."+e.StorageEnum.QCLOUD.value+".region"],expression:"[`engine.${StorageEnum.QCLOUD.value}.region`]"}]})],1),r("a-form-item",{attrs:{label:"SecretId",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine."+e.StorageEnum.QCLOUD.value+".secret_id"],expression:"[`engine.${StorageEnum.QCLOUD.value}.secret_id`]"}]})],1),r("a-form-item",{attrs:{label:"SecretKey",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine."+e.StorageEnum.QCLOUD.value+".secret_key"],expression:"[`engine.${StorageEnum.QCLOUD.value}.secret_key`]"}]})],1),r("a-form-item",{attrs:{label:"空间域名 Domain",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["engine."+e.StorageEnum.QCLOUD.value+".domain"],expression:"[`engine.${StorageEnum.QCLOUD.value}.domain`]"}]})],1)],1),r("a-form-item",{attrs:{"wrapper-col":{span:e.wrapperCol.span,offset:e.labelCol.span}}},[r("a-button",{attrs:{type:"primary","html-type":"submit"}},[e._v("提交")])],1)],1)],1)],1)},l=[],n=(r("d3b7"),r("ddb0"),r("88bc")),i=r.n(n),o=r("f585"),s=r("71b5"),u=r("ca00"),c={data:function(){return{key:"storage",labelCol:{span:4},wrapperCol:{span:10},isLoading:!1,form:this.$form.createForm(this),record:{},StorageEnum:s["a"]}},created:function(){this.getDetail()},methods:{getDetail:function(){var e=this;this.isLoading=!0,o["a"](this.key).then((function(a){e.record=a.data.values,e.setFieldsValue()})).finally((function(a){e.isLoading=!1}))},setFieldsValue:function(){var e=this.record,a=this.$nextTick,r=this.form;!Object(u["e"])(r.getFieldsValue())&&a((function(){r.setFieldsValue(i()(e,["default","engine"]))}))},handleSubmit:function(e){var a=this;e.preventDefault();var r=this.form.validateFields;r((function(e,r){!e&&a.onFormSubmit(r)}))},onFormSubmit:function(e){var a=this;this.isLoading=!0,o["b"](this.key,{form:e}).then((function(e){a.$message.success(e.message,1.5)})).finally((function(e){a.isLoading=!1}))}}},d=c,m=(r("9aa4"),r("2877")),p=Object(m["a"])(d,t,l,!1,null,"dd6519b2",null);a["default"]=p.exports},cad6:function(e,a,r){},d4ec:function(e,a,r){"use strict";function t(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}r.d(a,"a",(function(){return t}))},f533:function(e,a,r){},f533a:function(e,a,r){},f585:function(e,a,r){"use strict";r.d(a,"a",(function(){return i})),r.d(a,"b",(function(){return o}));var t=r("5530"),l=r("b775"),n={detail:"/setting/detail",update:"/setting/update"};function i(e){return Object(l["b"])({url:n.detail,method:"get",params:{key:e}})}function o(e,a){return Object(l["b"])({url:n.update,method:"post",data:Object(t["a"])({key:e},a)})}},fcb7:function(e,a,r){"use strict";r("f533a")}}]);