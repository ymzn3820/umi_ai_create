(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childPage-distribution-staff"],{5605:function(t,a,e){"use strict";(function(t){e("7a82"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,e("d3b7"),e("159b"),e("e25e"),e("14d9");var n=e("2d63"),i={data:function(){return{page_no:1,page_count:10,staffList:[],pageTotal:0,loadingType:0,memberTotal:0,backImg:t.baseImg+"/xcx/8a3fda0a-67b9-4545-a297-2b516055f560.jpg"}},components:{},onLoad:function(){},onShow:function(){this.getStaffList()},methods:{getStaffList:function(){var a=this,e={page_size:this.page_count,page:this.page_no};(0,n.getStaff)(e).then((function(e){if(2e4==e.code){a.staffList=e.data.data,a.staffList.forEach((function(a){a.avatar_url=t.baseImg+"/"+a.avatar_url}));var n=e.data.total;a.memberTotal=e.data.total,n%a.page_count==0?a.pageTotal=n/a.page_count:a.pageTotal=parseInt(n/a.page_count)+1,1==a.pageTotal&&(a.loadingType=1)}else a.$api.msg(e.msg)})).catch((function(t){a.$api.msg("获取信息失败")}))},onReachBottom:function(){var a=this;if(1!=this.loadingType){this.page_no++;var e={page_size:this.page_count,page:this.page_no};(0,n.getStaff)(e).then((function(e){if(2e4==e.code){var n=e.data.total;if(0==n)return;var i=e.data.data,o=a.staffList;i.forEach((function(a){a.avatar_url=t.baseImg+"/"+a.avatar_url,o.push(a)})),n%a.page_count==0?a.pageTotal=n/a.page_count:a.pageTotal=parseInt(n/a.page_count)+1,console.log(a.pageTotal,158),a.pageTotal<=a.page_no&&(a.loadingType=1)}else a.$api.msg(e.msg)})).catch((function(t){a.$api.msg("获取信息失败")}))}}}};a.default=i}).call(this,e("c8ba"))},"5b55":function(t,a,e){var n=e("d6f5");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("598a0c3a",n,!0,{sourceMap:!1,shadowMode:!1})},"8e57":function(t,a,e){"use strict";e.r(a);var n=e("e066"),i=e("ec81");for(var o in i)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return i[t]}))}(o);e("a2ee");var s=e("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"4294645a",null,!1,n["a"],void 0);a["default"]=c.exports},a2ee:function(t,a,e){"use strict";var n=e("5b55"),i=e.n(n);i.a},d6f5:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,".title[data-v-4294645a]{font-style:normal;font-weight:400;font-size:%?28?%;line-height:%?48?%;color:#888;padding:%?20?% %?30?%}.staff_cont[data-v-4294645a]{background:#fff;padding:0 %?30?%}.staff_cont .cont_text[data-v-4294645a]{padding:%?15?% 0;border-bottom:%?1?% solid #eee;display:flex;align-items:center}.staff_cont .cont_text .avatar[data-v-4294645a]{padding-right:%?20?%}.staff_cont .cont_text .avatar .avatar_img[data-v-4294645a]{width:%?98?%;height:%?98?%;border-radius:50%}.staff_cont .cont_text .info[data-v-4294645a]{display:flex;flex-direction:column}.staff_cont .cont_text .info .info_name[data-v-4294645a]{font-style:normal;font-weight:500;font-size:%?30?%;line-height:150%;color:#333}.staff_cont .cont_text .info .info_time[data-v-4294645a]{font-style:normal;font-weight:400;font-size:%?24?%;line-height:150%;color:rgba(51,51,51,.4)}.on_order[data-v-4294645a]{display:flex;align-items:center;justify-content:center;height:90vh;width:100vw}.order_img[data-v-4294645a]{width:%?450?%;height:%?450?%}.on_order_list[data-v-4294645a]{display:flex;align-items:center;justify-content:center;font-size:%?28?%;height:%?100?%;line-height:%?100?%;width:100vw;color:#c0c4cc}",""]),t.exports=a},e066:function(t,a,e){"use strict";e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return i})),e.d(a,"a",(function(){}));var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"title"},[t._v("成员人数："+t._s(t.memberTotal)+"人")]),e("v-uni-view",{staticClass:"staff_cont"},[t.staffList.length>0?e("v-uni-scroll-view",{attrs:{"scroll-y":"true"}},t._l(t.staffList,(function(a,n){return e("v-uni-view",{key:n,staticClass:"cont_text"},[e("v-uni-view",{staticClass:"avatar"},[e("v-uni-image",{staticClass:"avatar_img",attrs:{src:a.avatar_url,mode:""}})],1),e("v-uni-view",{staticClass:"info"},[e("v-uni-text",{staticClass:"info_name"},[t._v(t._s(a.nick_name))]),e("v-uni-text",{staticClass:"info_time"},[t._v(t._s(a.create_time))])],1)],1)})),1):e("v-uni-view",{staticClass:"on_order"},[e("v-uni-image",{staticClass:"order_img",attrs:{src:t.backImg}})],1),1==t.loadingType?e("v-uni-view",{staticClass:"on_order_list"},[t._v("没有更多人员了!")]):t._e()],1)],1)},i=[]},ec81:function(t,a,e){"use strict";e.r(a);var n=e("5605"),i=e.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){e.d(a,t,(function(){return n[t]}))}(o);a["default"]=i.a}}]);