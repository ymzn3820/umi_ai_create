(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childCont-chest-enhance"],{"073c":function(e,t,a){"use strict";var i=a("5a9e"),n=a.n(i);n.a},"0f9d":function(e,t,a){"use strict";a.r(t);var i=a("227c"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"13e7":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'.bigBox[data-v-ba45d412]{position:relative;text-align:center;width:100%;height:%?512?%;background:#000;padding:%?32?% 0}.bigBox .bigImg[data-v-ba45d412]{height:%?512?%;width:100%}.bigBox .downImg[data-v-ba45d412]{width:%?55?%;height:%?55?%;position:absolute;top:%?-4?%;right:%?4?%}.bigBox .upImg[data-v-ba45d412]{width:%?55?%;height:%?55?%;position:absolute;bottom:%?95?%;right:%?20?%}.slider[data-v-ba45d412]{width:80%;margin-top:%?40?%;margin-left:%?80?%}.bottom[data-v-ba45d412]{display:flex;color:"#86909C";font-size:%?24?%;margin-left:%?40?%;margin-top:%?50?%}.bottom .item[data-v-ba45d412]{margin-right:%?32?%;text-align:center}.bottom .item img[data-v-ba45d412]{width:%?134?%;height:%?134?%;border-radius:%?8?%;border:%?1?% solid #f3f3f3}.bottom .item .btn_content[data-v-ba45d412]{color:#888f9b;font-size:%?24?%}.bottom .active_item[data-v-ba45d412]{margin-right:%?32?%;text-align:center}.bottom .active_item img[data-v-ba45d412]{width:%?134?%;height:%?134?%;border-radius:%?8?%;border:%?1?% solid #1f64ff}.bottom .active_item .btn_content[data-v-ba45d412]{color:#1f64ff;font-size:%?24?%}.bottom .clearItem[data-v-ba45d412]{margin-right:%?32?%;text-align:center}.bottom .clearItem img[data-v-ba45d412]{width:%?310?%;height:%?134?%;border-radius:%?8?%;border:%?1?% solid #f3f3f3}.bottom .clearItem .btn_content[data-v-ba45d412]{color:#888f9b;font-size:%?24?%}.bottom .activeClearItem[data-v-ba45d412]{margin-right:%?32?%;text-align:center}.bottom .activeClearItem img[data-v-ba45d412]{width:%?310?%;height:%?134?%;border-radius:%?8?%;border:%?1?% solid #1f64ff}.bottom .activeClearItem .btn_content[data-v-ba45d412]{color:#1f64ff;font-size:%?24?%}.activeColor[data-v-ba45d412]{color:"#1F64FF";z-index:999}.footer[data-v-ba45d412]{position:fixed;bottom:%?30?%;display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%}.footer .text[data-v-ba45d412]{font-size:%?30?%;color:#333;line-height:%?50?%}.footer .record[data-v-ba45d412]{font-size:%?26?%;color:#0e39de;width:80%;text-align:right;line-height:%?50?%}.footer .btn[data-v-ba45d412]{width:80%;height:%?75?%;line-height:%?75?%}',""]),e.exports=t},"1a84":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticStyle:{"background-color":"#FEFEFE",height:"100vh"}},[a("v-uni-view",{staticClass:"bigBox"},[a("v-uni-video",{staticClass:"bigImg",attrs:{"object-fit":"contain",src:e.src}}),a("v-uni-image",{staticClass:"downImg",attrs:{src:e.icon_img1,mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.savePhoto(e.src)}}})],1),a("v-uni-view",{staticClass:"bottom"},[a("v-uni-view",{class:0==e.active?"active_item":"item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.mergeChange(0)}}},[a("img",{attrs:{src:e.defaultSrc,alt:""}}),a("v-uni-view",{staticClass:"btn_content"},[e._v("默认")])],1),a("v-uni-view",{class:1==e.active?"activeClearItem":"clearItem",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.mergeChange(1)}}},[a("img",{attrs:{src:e.clearSrc,alt:""}}),a("v-uni-view",{staticClass:"btn_content"},[e._v("视频增强")])],1)],1),a("v-uni-view",{staticClass:"footer"},[a("v-uni-view",{staticClass:"record",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.historyText.apply(void 0,arguments)}}},[e._v("历史记录")]),a("v-uni-button",{staticClass:"btn",staticStyle:{"background-color":"#1F64FF",color:"#fff"},attrs:{size:"default",type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toSlove.apply(void 0,arguments)}}},[e._v("上传视频")])],1)],1)},n=[]},"227c":function(e,t,a){"use strict";(function(e){a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("c7eb")),o=i(a("1da1"));a("d3b7"),a("159b");var c=a("2d63"),r={data:function(){return{ideaImg:e.baseImg+"/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png",active:0,blur:0,src:e.baseImg+"/xcx/com/message_center/bbxspzq.mp4",origin_image:"/xcx/com/message_center/bbxspzq.mp4",icon_img:e.baseImg+"/xcx/com/message_center/Frame%20427320251.png",icon_img1:e.baseImg+"/xcx/com/message_center/Frame%20427319637.png",default:e.baseImg+"/xcx/com/message_center/%E7%BE%8E%E5%A5%B31.png",defaultSrc:e.baseImg+"/xcx/com/message_center/默认.png",clearSrc:e.baseImg+"/xcx/com/message_center/百宝箱示例.png"}},onShow:function(){""!=uni.getStorageSync("vison_code")&&this.historySession(uni.getStorageSync("vison_code"))},methods:{historySession:function(t){var a=this;(0,c.getImgDetail)(t).then((function(t){if(2e4==t.code){var i=t.data;i.forEach((function(t,n){n==i.length-2&&("hkcartoon"==t.style&&(a.active=2),"jpcartoon"==t.style&&(a.active=1)),n==i.length-1&&(a.src=e.baseImg+"/"+t.result_image)})),uni.setStorageSync("vison_code","")}else a.$api.msg(t.msg)})).catch((function(e){a.$api.msg("获取历史记录失败！")}))},mergeChange:function(t){var a=this;return(0,o.default)((0,n.default)().mark((function i(){var r,s,d,l;return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a.active=t,uni.showLoading({title:"生成中..."}),0===t?(a.src=e.baseImg+"/"+a.origin_image,uni.hideLoading()):r={chat_type:"37",action_type:6,file_extension:"mp4",prompt:"视频增强",origin_image:a.origin_image},0===t){i.next=8;break}return i.next=6,(0,c.asyncImg)(r);case 6:s=i.sent,2e4==s.code?(d=0,l=setInterval((0,o.default)((0,n.default)().mark((function t(){var i;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(d<51)){t.next=7;break}return t.next=3,(0,c.getTextImg)(s.data);case 3:i=t.sent,2e4===i.code?(d+=1,null!=i.data&&(1!=i.data[0].status?(a.src=e.baseImg+"/"+i.data[0].result_image,clearInterval(l),uni.hideLoading()):(clearInterval(l),that.$api.msg("生成图片失败，稍后重试"),uni.hideLoading()))):40022==i.code?(clearInterval(l),uni.hideLoading(),uni.showModal({content:i.msg,confirmText:"购买算力",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/vip/vip"}):e.cancel&&console.log("用户点击取消")}})):(clearInterval(l),a.active=0,a.$api.msg(i.msg),uni.hideLoading()),t.next=10;break;case 7:a.$api.msg("请到历史记录查询"),uni.hideLoading(),clearInterval(l);case 10:case"end":return t.stop()}}),t)}))),2e3)):(console.log(s.msg),uni.hideLoading(),clearInterval(stopTime));case 8:case"end":return i.stop()}}),i)})))()},savePhoto:function(e){uni.showLoading({mask:!0,title:"下载中..."}),uni.downloadFile({url:e,success:function(e){if(200===e.statusCode){var t=document.createElement("a");t.download="",t.href=e.tempFilePath,document.body.appendChild(t),t.click(),t.remove(),uni.hideLoading()}else uni.hideLoading()},fail:function(e){console.log(e),uni.hideLoading()}})},previewImage:function(){uni.previewImage({urls:[this.src],current:this.src,loop:!0})},historyText:function(){uni.navigateTo({url:"/childCont/chest/history_chest?chat_type=37"})},toSlove:function(){var t=this;return(0,o.default)((0,n.default)().mark((function a(){var i;return(0,n.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:i=t,uni.chooseVideo({sourceType:["album"],extension:[".mp4",".avi",".mkv",".flv",".mov",".mpg",".ts",".mxf"],success:function(t){var a=t.size;if(a>1073741824)i.$api.msg("该视频已超过1GB，不能上传");else{var n=t.tempFilePath;uni.showLoading({title:"上传中"}),uni.uploadFile({url:e.loginUrl+"/api/user/oss_upload",filePath:n,name:"image",formData:{image:n,image_name:"视频",oss_dir:"static",cate:"create_character"},success:function(t){var a=JSON.parse(t.data);console.log(a,333),uni.hideLoading(),2e4==a.code?(i.src=e.baseImg+"/"+a.data.new_url,console.log(i.src)):(i.$api.msg(a.msg),uni.hideLoading())},fail:function(e){i.$api.msg("上传失败"),uni.hideLoading()}})}}});case 2:case"end":return a.stop()}}),a)})))()},toIdea:function(){uni.navigateTo({url:"/childPage/answer/answer"})}}};t.default=r}).call(this,a("c8ba"))},"5a9e":function(e,t,a){var i=a("13e7");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("42b71bae",i,!0,{sourceMap:!1,shadowMode:!1})},f4c6:function(e,t,a){"use strict";a.r(t);var i=a("1a84"),n=a("0f9d");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("073c");var c=a("f0c5"),r=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"ba45d412",null,!1,i["a"],void 0);t["default"]=r.exports}}]);