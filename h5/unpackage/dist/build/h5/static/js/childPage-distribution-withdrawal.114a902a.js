(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childPage-distribution-withdrawal"],{"07e6":function(t,a,i){"use strict";i.r(a);var e=i("d1d1"),s=i.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return e[t]}))}(o);a["default"]=s.a},"68c6":function(t,a,i){var e=i("6956");e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=i("4f06").default;s("70fa6f89",e,!0,{sourceMap:!1,shadowMode:!1})},6956:function(t,a,i){var e=i("24fb");a=e(!1),a.push([t.i,".container[data-v-1b68116a]{padding:%?20?%}.list[data-v-1b68116a]{padding:%?25?%;margin-bottom:%?20?%;background:#fff}.list .list_top[data-v-1b68116a]{display:flex;flex-direction:column}.list .list_top .top_cont[data-v-1b68116a]{display:flex;flex-direction:row;align-items:center;justify-content:space-between}.list .list_top .top_cont .top_l[data-v-1b68116a]{font-style:normal;font-weight:400;font-size:%?24?%;line-height:150%}.list .list_top .top_cont .top_l .l_name[data-v-1b68116a]{color:#666}.list .list_top .top_cont .top_l .r_name[data-v-1b68116a]{color:#333}.list .list_top .top_cont .top_r[data-v-1b68116a]{font-style:normal;font-weight:400;line-height:150%;display:flex;align-items:flex-start}.list .list_top .top_cont .top_r .r_text[data-v-1b68116a]{font-size:%?24?%;color:#333;padding-right:%?10?%}.list .list_top .top_cont .top_r .r_tip[data-v-1b68116a]{font-size:%?22?%;color:#faad14}.list .list_top .top_cont .top_r .r_tip_g[data-v-1b68116a]{font-size:%?22?%;color:#52c41a}.list .list_top .top_cont .top_r .r_tip_b[data-v-1b68116a]{font-size:%?22?%;color:#fb423f}.list .list_top .top_text[data-v-1b68116a]{font-style:normal;font-weight:400;font-size:%?24?%;line-height:150%;padding:%?10?% 0 %?10?% 0}.list .list_top .top_text .text_l[data-v-1b68116a]{color:#666}.list .list_top .top_text .text_r[data-v-1b68116a]{color:#fb423f}.list .list_top .top_text .text_p[data-v-1b68116a]{color:#fb423f}.on_order[data-v-1b68116a]{display:flex;align-items:center;justify-content:center;height:90vh;width:100vw}.order_img[data-v-1b68116a]{width:%?450?%;height:%?450?%}.on_order_list[data-v-1b68116a]{display:flex;align-items:center;justify-content:center;font-size:%?28?%;height:%?100?%;line-height:%?100?%;width:100vw;color:#c0c4cc}",""]),t.exports=a},ac77:function(t,a,i){"use strict";var e=i("68c6"),s=i.n(e);s.a},d1d1:function(t,a,i){"use strict";(function(t){i("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,i("e25e"),i("d3b7"),i("159b"),i("14d9");var e=i("2d63"),s={data:function(){return{rightImg:t.baseImg+"/avatar/user/9cfd1b8b-2305-4fad-8846-8db33fd32ac3.jpg",page_no:1,page_count:10,pageTotal:0,loadingType:0,cashList:[],backImg:t.baseImg+"/xcx/8a3fda0a-67b9-4545-a297-2b516055f560.jpg"}},components:{},onLoad:function(){},onShow:function(){this.getWithdrawalList()},methods:{getWithdrawalList:function(){var t=this,a={page_size:this.page_count,page:this.page_no};(0,e.getWithdrawal)(a).then((function(a){if(2e4==a.code){t.cashList=a.data.data;var i=a.data.total;i%t.page_count==0?t.pageTotal=i/t.page_count:t.pageTotal=parseInt(i/t.page_count)+1,1==t.pageTotal&&(t.loadingType=1)}else t.$api.msg(a.msg)})).catch((function(a){t.$api.msg("获取信息失败")}))},onReachBottom:function(){var t=this;if(1!=this.loadingType){this.page_no++;var a={page_size:this.page_count,page:this.page_no};(0,e.getWithdrawal)(a).then((function(a){if(2e4==a.code){var i=a.data.total;if(0==i)return;var e=a.data.data,s=t.cashList;e.forEach((function(t){s.push(t)})),i%t.page_count==0?t.pageTotal=i/t.page_count:t.pageTotal=parseInt(i/t.page_count)+1,t.pageTotal<=t.page_no&&(t.loadingType=1)}else t.$api.msg(a.msg)})).catch((function(a){t.$api.msg("获取信息失败")}))}}}};a.default=s}).call(this,i("c8ba"))},da72:function(t,a,i){"use strict";i.r(a);var e=i("fe27"),s=i("07e6");for(var o in s)["default"].indexOf(o)<0&&function(t){i.d(a,t,(function(){return s[t]}))}(o);i("ac77");var n=i("f0c5"),l=Object(n["a"])(s["default"],e["b"],e["c"],!1,null,"1b68116a",null,!1,e["a"],void 0);a["default"]=l.exports},fe27:function(t,a,i){"use strict";i.d(a,"b",(function(){return e})),i.d(a,"c",(function(){return s})),i.d(a,"a",(function(){}));var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"container"},[t.cashList.length>0?i("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},t._l(t.cashList,(function(a,e){return i("v-uni-view",{key:e,staticClass:"list"},[i("v-uni-view",{staticClass:"list_top"},[i("v-uni-view",{staticClass:"top_cont"},[i("v-uni-view",{staticClass:"top_l"},[i("v-uni-text",{staticClass:"l_name"},[t._v("提现单号：")]),i("v-uni-text",{staticClass:"r_name"},[t._v(t._s(a.order_no))])],1),i("v-uni-view",{staticClass:"top_r"},[i("v-uni-text",{staticClass:"r_text"},[t._v(t._s(a.bank))]),1==a.w_status?i("v-uni-text",{staticClass:"r_tip_g"},[t._v("审核中")]):t._e(),2==a.w_status?i("v-uni-text",{staticClass:"r_tip"},[t._v("已提现")]):t._e(),3==a.w_status?i("v-uni-text",{staticClass:"r_tip_b"},[t._v("已驳回")]):t._e()],1)],1),i("v-uni-view",{staticClass:"top_text"},[i("v-uni-text",{staticClass:"text_l"},[t._v("提现金额：")]),i("v-uni-text",{staticClass:"text_r"},[t._v("￥"+t._s(a.withdrawal_amount))])],1),i("v-uni-view",{staticClass:"top_text"},[i("v-uni-text",{staticClass:"text_l"},[t._v("提现时间：")]),i("v-uni-text",{staticClass:"text_l"},[t._v(t._s(a.create_time))])],1),3==a.w_status?i("v-uni-view",{staticClass:"top_text"},[i("v-uni-text",{staticClass:"text_p"},[t._v("驳回原因：")]),i("v-uni-text",{staticClass:"text_p"},[t._v(t._s(a.reason))])],1):t._e()],1)],1)})),1):i("v-uni-view",{staticClass:"on_order"},[i("v-uni-image",{staticClass:"order_img",attrs:{src:t.backImg}})],1),1==t.loadingType?i("v-uni-view",{staticClass:"on_order_list"},[t._v("没有更多内容了!")]):t._e()],1)},s=[]}}]);