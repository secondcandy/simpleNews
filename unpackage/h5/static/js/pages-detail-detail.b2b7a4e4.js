(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{"1fce":function(t,n,e){var i=e("8dd6");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=e("4f06").default;a("5a0294f6",i,!0,{sourceMap:!1,shadowMode:!1})},"3c3f":function(t,n,e){"use strict";e("7a82"),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,e("ac1f"),e("5319"),e("c740"),e("a434"),e("3c65");var i=e("7cc0"),a={data:function(){return{options:null,information:{}}},onLoad:function(t){this.options=t,this.getDetail()},methods:{getDetail:function(){var t=this;uni.request({url:"https://ku.qingnian8.com/dataApi/news/detail.php",data:{cid:this.options.cid,id:this.options.id},success:function(n){n.data.posttime=(0,i.parseTime)(n.data.posttime),n.data.content=n.data.content.replace(/<img/gi,'<img style="max-width:100%"'),t.information=n.data,t.saveHistory(),uni.setNavigationBarTitle({title:t.information.title})},fail:function(t){console.log("连接失败")}})},saveHistory:function(){var t=this,n=uni.getStorageSync("historyArr")||[],e={cid:this.information.classid,id:this.information.id,picurl:this.information.picurl,title:this.information.title,looktime:(0,i.parseTime)(Date.now())},a=n.findIndex((function(n){return n.id==t.information.id}));a>=0&&n.splice(a,1),n.unshift(e),n=n.splice(0,10),uni.setStorageSync("historyArr",n)}}};n.default=a},"7cc0":function(t,n,e){"use strict";e("7a82");var i=e("4ea4").default;Object.defineProperty(n,"__esModule",{value:!0}),n.parseTime=function(t,n){if(0===arguments.length||!t)return null;var e,i=n||"{y}-{m}-{d} {h}:{i}:{s}";"object"===(0,a.default)(t)?e=t:("string"===typeof t&&/^[0-9]+$/.test(t)?t=parseInt(t):"string"===typeof t&&(t=t.replace(new RegExp(/-/gm),"/").replace("T"," ").replace(new RegExp(/\.[\d]{3}/gm),"")),"number"===typeof t&&10===t.toString().length&&(t*=1e3),e=new Date(t));var r={y:e.getFullYear(),m:e.getMonth()+1,d:e.getDate(),h:e.getHours(),i:e.getMinutes(),s:e.getSeconds(),a:e.getDay()},o=i.replace(/{(y|m|d|h|i|s|a)+}/g,(function(t,n){var e=r[n];return"a"===n?["日","一","二","三","四","五","六"][e]:(t.length>0&&e<10&&(e="0"+e),e||0)}));return o},n.timeInterval=function(t){var n=t,e=new Date,i=Math.abs(e.getTime()-n),a=Math.floor(i/31536e6),r=Math.floor(i/864e5),o=i%864e5,s=Math.floor(o/36e5),c=o%36e5,d=Math.floor(c/6e4),u=c%6e4,f=Math.round(u/1e3),l="";0!=a?l=a+"年前":0==a&&0!=r?l=r+"天前":0==r&&0!=s?l=s+"小时前":0==s&&0!=d?l=d+"分钟前":0==d&&f<60&&(l="刚刚");return l},e("ac1f"),e("00b4"),e("e25e"),e("5319"),e("4d63"),e("c607"),e("2c3e"),e("25f0"),e("d401"),e("d3b7");var a=i(e("53ca"))},"8dd6":function(t,n,e){var i=e("24fb");n=i(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.detail[data-v-11897773]{padding:%?30?%}.detail .title[data-v-11897773]{font-size:%?30?%;color:#333}.detail .info[data-v-11897773]{background:#f6f6f6;padding:%?20?%;font-size:%?25?%;color:#666;display:flex;justify-content:space-between;margin:%?40?% 0}.detail .content[data-v-11897773]{padding-bottom:%?50?%}.detail .description[data-v-11897773]{background:#fef0f0;font-size:%?26?%;padding:%?20?%;color:#f89898;line-height:1.8rem}',""]),t.exports=n},"9d52":function(t,n,e){"use strict";var i=e("1fce"),a=e.n(i);a.a},be39:function(t,n,e){"use strict";e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){}));var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"detail"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.information.title))]),e("v-uni-view",{staticClass:"info"},[e("v-uni-view",{staticClass:"author"},[t._v("编辑："+t._s(t.information.author))]),e("v-uni-view",{staticClass:"time"},[t._v("发布日期："+t._s(t.information.posttime))])],1),e("v-uni-view",{staticClass:"content"},[e("v-uni-rich-text",{attrs:{nodes:t.information.content}})],1),e("v-uni-view",{staticClass:"description"},[t._v("声明：本站的内容均采集于腾讯新闻，如果侵权请联系管理（1197590647@qq.com）进行整改删除，本站进行了内容采集不代表本站及作者观点，若有\n\t\t侵犯请及时联系管理员，谢谢您的支持。")])],1)},a=[]},e2ea:function(t,n,e){"use strict";e.r(n);var i=e("3c3f"),a=e.n(i);for(var r in i)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},fa48:function(t,n,e){"use strict";e.r(n);var i=e("be39"),a=e("e2ea");for(var r in a)["default"].indexOf(r)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("9d52");var o=e("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"11897773",null,!1,i["a"],void 0);n["default"]=s.exports}}]);