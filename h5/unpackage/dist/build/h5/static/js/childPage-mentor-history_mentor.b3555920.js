(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childPage-mentor-history_mentor"],{"56b7":function(t,e,i){"use strict";i.r(e);var a=i("ed58"),n=i.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(c);e["default"]=n.a},6705:function(t,e,i){"use strict";i.r(e);var a=i("b368"),n=i("56b7");for(var c in n)["default"].indexOf(c)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(c);i("bdc1");var s=i("f0c5"),o=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"691bb45c",null,!1,a["a"],void 0);e["default"]=o.exports},b368:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"top_cont"},[a("v-uni-view",{staticClass:"search_cont"},[a("v-uni-view",{staticClass:"search"},[a("v-uni-image",{staticClass:"search_img",attrs:{src:i("c02e")}}),a("v-uni-input",{staticClass:"search_input",attrs:{placeholder:"请输入搜索内容",type:"text"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.search.apply(void 0,arguments)}},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1),a("v-uni-view",{staticClass:"chat_type"},[a("v-uni-view",{class:[4==t.active?"active_tabs":"tabs"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.version(4)}}},[t._v("文心一言")]),a("v-uni-view",{class:[8==t.active?"active_tabs":"tabs"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.version(8)}}},[t._v("ChatGLM")]),a("v-uni-view",{class:[5==t.active?"active_tabs":"tabs"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.version(5)}}},[t._v("讯飞星火")]),a("v-uni-view",{class:[10==t.active?"active_tabs":"tabs"],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.version(10)}}},[t._v("通义千问")])],1)],1)],1),a("v-uni-view",{staticClass:"chat_cont",staticStyle:{"margin-top":"240upx"}},[t.chatList.length>0?a("v-uni-scroll-view",{staticClass:"list_ul",attrs:{"scroll-y":"true"}},t._l(t.chatList,(function(e,i){return a("v-uni-view",{key:i,staticClass:"ul_style"},[a("v-uni-view",{staticClass:"li_style"},[a("v-uni-view",{staticClass:"ul_right"},[a("v-uni-view",{staticClass:"li_top"},[a("v-uni-text",{staticClass:"top_l"},[t._v(t._s(e.title))])],1),a("v-uni-view",{staticClass:"li_btn"},[a("v-uni-view",{staticClass:"btn_l"},[t._v("提问者")]),a("v-uni-view",{staticClass:"btn_r"},[t._v(t._s(e.nick_name))])],1),a("v-uni-view",{staticClass:"li_btn"},[a("v-uni-view",{staticClass:"btn_l"},[t._v("创建时间")]),a("v-uni-view",{staticClass:"btn_r"},[t._v(t._s(e.create_time))])],1),a("v-uni-view",{staticClass:"li_edit"},[a("v-uni-view",{staticClass:"edit_l",on:{click:function(i){i.stopPropagation(),arguments[0]=i=t.$handleEvent(i),t.delPhoto(e.session_code)}}},[t._v("删除")]),a("v-uni-view",{staticClass:"edit_r",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checkDetail(e.session_code,e.question_id)}}},[t._v("继续对话")])],1)],1)],1)],1)})),1):a("v-uni-view",{staticClass:"on_order"},[a("v-uni-image",{staticClass:"order_img",attrs:{src:t.backImg}})],1),1==t.loadingType?a("v-uni-view",{staticClass:"on_order_list"},[t._v("没有更多内容了!")]):t._e()],1)],1)},n=[]},bdc1:function(t,e,i){"use strict";var a=i("d1d8"),n=i.n(a);n.a},c02e:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJiSURBVHgB7ZfRUeMwEIbXqSBXwfkquFwFUSoAKrhcBQcV4FRAqIDQAVQQ5yHPhA5cQnjNQ8K/sAqLEqyV44FhJv+MJrJiyd9Kq9WK6Khvpizl5el06jqdzslms3F4zFG68tcCpUL7PX7LwWBQUUOZgAAyzLLsUiAsmgBu1AQsi4DkALlB1VG6lgI1TunUoXqYaQDDH7lGGaD8cM5lXFD/g/IP/5fq3S76X81ms0tKUBaByX0bg+CngMVLqhH7mczqti+ei36/P6KmQGVZ6pnhWTkDSElGAaorUKe+jWfVMka2Z7ChDOYHYpg7aqDAsArL+yvWZ8eHZDd5mFFTGOnPfuWXOGdjY33eAfH609vaVygTOkC87cX3XgRj/8b6hDN0quoHBTglve0d+xdZgWDBb1+HZbfUgmRXlqrJkRUI6qn6gloSjHtUjzklAG2nMxZvErXc9w0L0JcrBKp8ZT6f/6SWpH2TIq4QAm1fXq1WZ9SetG9WZAWC8818HVadUAsKYxt8M2mGJqruZLCDpCM/vd/+cSDeWTr+8JkWC2R1Qurxn1Tc4aMo1mffLitInT+c01ADwZAeAMYK5toS+XeA5PzRlgxxaj9wjkRG8cxIPuXFBhaWvh+msAAogvWv8DxZr9e3H1kqyRn3cTsfMiZpsZw6hPIq0b4A3JN8jGMWH8yhvy11mwUqeuvYl5Ja5FNelHNtVAzKfC+TTJLzGVfzmt+lY72s4UzXQSVdFGVwXoKeFL8cFcqiLuhZoZKBDlEIhdm8CO9tn3ra4+NFEFLy8J1PTz8E6oJej6mkW+1RR1n0DFMuJYmylwERAAAAAElFTkSuQmCC"},d1d8:function(t,e,i){var a=i("f1d3");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("a30fb3f8",a,!0,{sourceMap:!1,shadowMode:!1})},ed58:function(t,e,i){"use strict";(function(t){i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e25e"),i("d3b7"),i("159b"),i("14d9"),i("e9c4");var a=i("2d63"),n=i("0a1b"),c={data:function(){return{active:4,loadingType:0,page_no:1,page_count:10,content:"",chatList:[],pageTotal:0,searchValue:"",backImg:t.baseImg+"/xcx/8a3fda0a-67b9-4545-a297-2b516055f560.jpg",addImg:t.baseImg+"/xcx/01fece57-06c7-4eff-ab60-671230d86f80.jpg"}},components:{},onLoad:function(t){},onShow:function(){this.getChatList()},methods:{version:function(t){this.active=t,this.page_no=1,this.loadingType=0,this.searchValue="",this.getChatList()},search:function(){this.page_no=1,this.loadingType=0,this.getChatList()},getChatList:function(){var t=this,e={chat_type:this.active,scenario_type:"mentor",page_size:this.page_count,title:this.searchValue,page:this.page_no};(0,a.chatList)(e).then((function(e){if(2e4==e.code){t.chatList=e.data.data;var i=e.data.total;i%t.page_count==0?t.pageTotal=i/t.page_count:t.pageTotal=parseInt(i/t.page_count)+1,1==t.pageTotal&&(t.loadingType=1)}else t.$api.msg(e.msg)})).catch((function(e){t.$api.msg("获取对话信息失败")}))},onReachBottom:function(){var t=this;if(1!=this.loadingType){this.page_no++;var e={chat_type:4,scenario_type:"mentor",page_size:this.page_count,title:this.searchValue,page:this.page_no};(0,a.chatList)(e).then((function(e){if(2e4==e.code){var i=e.data.total;if(0==i)return;var a=e.data.data,n=t.chatList;a.forEach((function(t){n.push(t)})),i%t.page_count==0?t.pageTotal=i/t.page_count:t.pageTotal=parseInt(i/t.page_count)+1,t.pageTotal<=t.page_no&&(t.loadingType=1)}else t.$api.msg(e.msg)})).catch((function(e){t.$api.msg("获取对话信息失败")}))}},checkDetail:function(t,e){var i=this;uni.showModal({content:"是否延续当前对话",success:function(a){a.confirm?(uni.setStorageSync("chat_code",JSON.stringify({code:t,type:i.active})),uni.navigateTo({url:"/childPage/mentor/mentor_chat?clerk_id="+e})):a.cancel&&console.log("您点击了取消")}})},delPhoto:function(t){var e=this;uni.showModal({title:"提示",content:"确定删除该记录吗？",success:function(i){i.confirm&&e.delCont(t)}})},delCont:function(t){var e=this,i=[];i.push(t);var a={session_codes:JSON.stringify(i)};(0,n.del_session)(a).then((function(t){2e4==t.code?(e.$api.msg("删除成功"),e.getChatList()):e.$api.msg(t.msg)}))}}};e.default=c}).call(this,i("c8ba"))},f1d3:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,"uni-page-body[data-v-691bb45c]{background:#f6f8fb}body.?%PAGE?%[data-v-691bb45c]{background:#f6f8fb}.cont_title[data-v-691bb45c]{color:#000;font-size:%?30?%;font-style:normal;font-weight:500;text-align:center;padding:%?20?% 0}.list_ul[data-v-691bb45c]{padding:%?15?% %?10?%;margin-bottom:%?30?%}.ul_style[data-v-691bb45c]{display:flex;flex-direction:column;padding:%?15?% %?20?%}.li_style[data-v-691bb45c]{display:flex;align-items:center;box-shadow:%?0?% %?0?% %?10?% rgba(0,0,0,.14);border-radius:%?10?%;padding:%?25?%;width:100%;background:#fff}.li_style .ul_right[data-v-691bb45c]{flex:1}.li_style .ul_img[data-v-691bb45c]{padding:%?10?%}.li_style .ul_img .avatar_img[data-v-691bb45c]{width:%?80?%;height:%?80?%;border-radius:%?8?%}.li_top[data-v-691bb45c]{display:flex;align-items:center;justify-content:space-between;margin-bottom:%?18?%}.top_l[data-v-691bb45c]{font-weight:500;font-size:%?30?%;line-height:%?42?%;color:#000;width:80%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.top_r[data-v-691bb45c]{font-weight:400;font-size:%?24?%;line-height:%?30?%;color:#6e7480}.li_btn[data-v-691bb45c]{font-weight:400;font-size:%?28?%;line-height:%?35?%;display:flex;align-items:center;justify-content:space-between}.li_btn .btn_l[data-v-691bb45c]{color:#a4a4a4;font-size:%?28?%;font-weight:400;line-height:150%;padding:%?5?% %?0?%;line-height:%?48?%}.li_btn .btn_r[data-v-691bb45c]{color:#000;font-size:%?28?%;font-weight:400;line-height:150%;padding:%?5?% %?0?%;line-height:%?48?%}.on_order[data-v-691bb45c]{display:flex;align-items:center;justify-content:center;height:100vh;width:100vw}.order_img[data-v-691bb45c]{width:%?450?%;height:%?450?%}.on_order_list[data-v-691bb45c]{display:flex;align-items:center;justify-content:center;font-size:%?28?%;height:%?100?%;line-height:%?100?%;width:100vw;color:#c0c4cc}.text_conts[data-v-691bb45c]{display:flex;align-items:center;justify-content:space-between;width:100%;padding:%?20?% %?30?% 0 %?30?%}.text_conts .text_u[data-v-691bb45c]{display:flex;align-items:center}.text_conts .text_u .u_li[data-v-691bb45c]{color:#9a9a9a;text-align:center;font-size:%?22?%;font-style:normal;font-weight:400;margin-right:%?10?%}.text_conts .text_u .add_img[data-v-691bb45c]{width:%?38?%;height:%?38?%}.text_conts .text_u .add_li[data-v-691bb45c]{color:#1f64ff;font-size:%?28?%;font-style:normal;font-weight:500;line-height:150%;padding-left:%?10?%}.text_conts .text_u .qs_img[data-v-691bb45c]{width:%?40?%;height:%?40?%;margin-left:%?20?%}.text_conts .text_u .text_r[data-v-691bb45c]{color:#000;font-size:%?32?%;font-weight:500;line-height:%?50?%;margin-right:%?10?%}.li_edit[data-v-691bb45c]{display:flex;align-items:center;justify-content:flex-end;margin-top:%?10?%}.li_edit .edit_l[data-v-691bb45c]{padding:%?10?% %?30?%;border-radius:%?8?%;border:%?1?% solid #1f64ff;color:#1f64ff;text-align:center;font-size:%?28?%;font-style:normal;font-weight:600;margin-right:%?20?%}.li_edit .edit_r[data-v-691bb45c]{padding:%?10?% %?30?%;border-radius:%?8?%;background:#1f64ff;color:#fff;text-align:center;font-size:%?28?%;font-style:normal;font-weight:600}.top_cont[data-v-691bb45c]{width:100%;height:%?142?%;background:#fff;position:fixed;top:0;z-index:10}.search_cont[data-v-691bb45c]{width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;padding:%?25?% %?25?% 0 %?25?%;background:#fff}.search[data-v-691bb45c]{width:100%;height:%?72?%;background:#f6f6f6;border-radius:%?100?%;display:flex;align-items:center;justify-content:center;padding:0 %?32?%;margin-bottom:%?20?%}.search_input[data-v-691bb45c]{flex:1}.search_img[data-v-691bb45c]{width:%?36?%;height:%?36?%}.chat_type[data-v-691bb45c]{display:flex;align-items:center;width:100%;padding:%?15?% 0;flex-wrap:wrap;flex:1}.chat_type .tabs[data-v-691bb45c]{width:22%;background:#f8f8f9;border-radius:%?6?%;padding:%?16?% 0;margin:%?10?% 1.5%;font-style:normal;font-weight:500;font-size:%?28?%;line-height:150%;color:#333;display:flex;align-items:center;justify-content:center}.chat_type .active_tabs[data-v-691bb45c]{width:22%;background:rgba(31,100,255,.15);border-radius:%?6?%;padding:%?16?% 0;margin:%?10?% 1.5%;font-style:normal;font-weight:500;font-size:%?28?%;line-height:150%;color:#1f64ff;display:flex;align-items:center;justify-content:center}",""]),t.exports=e}}]);