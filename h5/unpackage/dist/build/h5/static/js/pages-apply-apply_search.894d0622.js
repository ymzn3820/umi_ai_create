(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-apply-apply_search"],{"0e58":function(t,e,a){"use strict";var i=a("c6f3"),n=a.n(i);n.a},3510:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return s})),a.d(e,"a",(function(){return i}));var i={uIcon:a("0289").default},n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"head_index"},[a("v-uni-view",{staticClass:"top_cont"},[a("v-uni-view",{staticClass:"search_cont"},[a("v-uni-view",{staticClass:"search"},[a("u-icon",{attrs:{name:"search",color:"#ccc",size:"28"}}),a("v-uni-input",{staticClass:"search_input",attrs:{placeholder:"请输入搜索内容",type:"text"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}}),""!=t.searchValue?a("u-icon",{attrs:{name:"close-circle",color:"#666",size:"24"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearInput.apply(void 0,arguments)}}}):t._e()],1)],1)],1),a("v-uni-view",{staticClass:"chat_cont",staticStyle:{"margin-top":"100rpx"}},[t.promptsList.length>0?a("v-uni-scroll-view",{staticClass:"list_ul",staticStyle:{"margin-top":"100rpx"},attrs:{"scroll-y":"true"}},[a("v-uni-view",{staticClass:"hotWrods"},[t.promptsList.length>0?a("v-uni-view",{staticClass:"hot_cont"},t._l(t.promptsList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"box",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.eidtContent(e)}}},[a("v-uni-view",{staticClass:"text"},[a("v-uni-view",{staticClass:"textInfo"},["1003"==e.industry_id?a("v-uni-image",{staticClass:"li_avatar",attrs:{src:t.getImgUrl(e.character_avatar),mode:""}}):"1001"==e.industry_id?a("v-uni-view",{staticClass:"li_avatar",staticStyle:{background:"#40DE9F"}},[t._v(t._s(e.title.slice(0,1)))]):"1000"==e.industry_id?a("v-uni-view",{staticClass:"li_avatar",staticStyle:{background:"#7F48FF"}},[t._v(t._s(e.title.slice(0,1)))]):"1005"==e.industry_id?a("v-uni-view",{staticClass:"li_avatar",staticStyle:{background:"#FF8E8E"}},[t._v(t._s(e.title.slice(0,1)))]):a("v-uni-view",{staticClass:"li_avatar",staticStyle:{background:"#FFB833"}},[t._v(t._s(e.title.slice(0,1)))]),a("v-uni-view",{staticClass:"li_text"},[t._v(t._s(e.title))])],1),a("v-uni-view",{staticClass:"tips"})],1),a("v-uni-view",{staticClass:"text_cont"},[a("v-uni-text",{staticClass:"text_li"},[t._v(t._s(e.content))])],1),a("v-uni-image",{staticClass:"back_img",attrs:{src:t.backImg,mode:""}})],1)})),1):t._e()],1)],1):t._e(),0==t.promptsList.length?a("v-uni-view",{staticClass:"on_order_list"},[t._v("暂无相关内容")]):t._e(),1==t.loadingType&&t.promptsList.length>0?a("v-uni-view",{staticClass:"on_order_list"},[t._v("没有更多内容了!")]):t._e()],1)],1)},s=[]},"502b":function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,"uni-page-body[data-v-1e797cda]{background:#f6f8fb}body.?%PAGE?%[data-v-1e797cda]{background:#f6f8fb}.top_cont[data-v-1e797cda]{width:100%;height:%?100?%;background:#fff;position:fixed;top:0;z-index:10}.search_cont[data-v-1e797cda]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:0 %?25?%;background:#fff}.search[data-v-1e797cda]{width:100%;height:%?72?%;border-radius:8px;border:1px solid #1f64ff;background:#fff;display:flex;align-items:center;justify-content:center;padding:0 %?25?%;margin-bottom:%?20?%;margin-top:%?20?%}.search_input[data-v-1e797cda]{flex:1}.on_order[data-v-1e797cda]{display:flex;align-items:center;justify-content:center;height:100vh;width:100vw}.order_img[data-v-1e797cda]{width:%?450?%;height:%?450?%}.on_order_list[data-v-1e797cda]{display:flex;align-items:center;justify-content:center;font-size:%?28?%;height:%?100?%;line-height:%?100?%;width:100vw;color:#c0c4cc;margin-top:%?150?%}.hotWrods[data-v-1e797cda]{padding:%?30?% %?18?% %?18?% %?18?%}.hotWrods .hot_cont[data-v-1e797cda]{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap}.hotWrods .box[data-v-1e797cda]{background:#fff;box-shadow:0 2.23993px 7.83975px rgba(51,51,51,.1);border-radius:8px;margin-bottom:10px;width:48%;padding:%?12?%;position:relative}.hotWrods .box .text[data-v-1e797cda]{display:flex;align-items:center;justify-content:space-between}.hotWrods .box .text_cont[data-v-1e797cda]{padding:%?10?%;max-height:%?140?%}.hotWrods .box .text_cont .text_li[data-v-1e797cda]{font-size:%?26?%;color:#888;line-height:%?40?%;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.hotWrods .box .textInfo[data-v-1e797cda]{display:flex;align-items:center}.hotWrods .box .textInfo .li_avatar[data-v-1e797cda]{width:%?80?%;height:%?80?%;border-radius:%?7?%;color:#fff;display:flex;align-items:center;justify-content:center}.hotWrods .box .textInfo .li_text[data-v-1e797cda]{max-width:%?200?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:inline-block;color:#333;font-size:15px;font-weight:550;padding-left:10px}.hotWrods .box .tips[data-v-1e797cda]{display:flex;border-radius:0 8px;width:108px;height:33px;font-size:13px;color:#1f64ff;line-height:26px;text-align:center;justify-content:center;align-items:center}.hotWrods .box .tips .content[data-v-1e797cda]{margin-left:5px}.hotWrods .back_img[data-v-1e797cda]{width:%?110?%;height:%?110?%;position:absolute;top:%?0?%;right:%?0?%}",""]),t.exports=e},"61f8":function(t,e,a){"use strict";a.r(e);var i=a("65ac"),n=a.n(i);for(var s in i)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(s);e["default"]=n.a},6433:function(t,e,a){"use strict";a.r(e);var i=a("3510"),n=a("61f8");for(var s in n)["default"].indexOf(s)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(s);a("0e58");var c=a("f0c5"),o=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"1e797cda",null,!1,i["a"],void 0);e["default"]=o.exports},"65ac":function(t,e,a){"use strict";(function(t){a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("ac1f"),a("841c"),a("e9c4"),a("fb6a");var i=a("2d63"),n={data:function(){return{searchValue:"",loadingType:0,page_no:1,page_count:15,promptsList:[],pageTotal:0,backImg:t.baseImg+"/xcx/9cbaf339-29fe-47d1-9685-0dabe4d5a00d.jpg"}},components:{},onLoad:function(t){},onShow:function(){this.search()},methods:{search:function(){this.loadingType=0,this.getQuestions()},getQuestions:function(){var t=this,e={keywords:this.searchValue};(0,i.searchList)(e).then((function(e){2e4==e.code?(t.promptsList=e.data,t.$forceUpdate()):(t.$api.msg(e.msg),t.loading=!1)})).catch((function(e){t.loading=!1}))},eidtContent:function(e){if("1003"!=e.industry_id)uni.navigateTo({url:"/pages/apply/apply_ask?item="+JSON.stringify(e)});else{var a=e;a.character_name=a.title,a.character_greetings=a.content;var i=a.character_avatar.slice(0,1);a.character_avatar="/"!=i?t.baseImg+"/"+a.character_avatar:t.baseImg+a.character_avatar,uni.navigateTo({url:"/pages/user/role/user_chat?item="+JSON.stringify(a)})}},getImgUrl:function(e){return t.baseImg+"/"+e},clearInput:function(){this.searchValue="",this.getQuestions()}}};e.default=n}).call(this,a("c8ba"))},c6f3:function(t,e,a){var i=a("502b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("c9aff336",i,!0,{sourceMap:!1,shadowMode:!1})}}]);