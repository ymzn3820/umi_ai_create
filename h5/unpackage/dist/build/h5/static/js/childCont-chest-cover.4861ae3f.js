(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childCont-chest-cover"],{"323f":function(e,t,i){"use strict";var a=i("6553"),n=i.n(a);n.a},"40ea":function(e,t,i){"use strict";(function(e){i("7a82");var a=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("c7eb")),o=a(i("1da1"));i("d3b7"),i("159b");var s=i("2d63"),c={data:function(){return{ideaImg:e.baseImg+"/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png",active:0,blur:0,src:e.baseImg+"/xcx/com/message_center/bbxspfmsc.mp4",origin_image:"/xcx/com/message_center/bbxspfmsc.mp4",icon_img:e.baseImg+"/xcx/com/message_center/Frame%20427320251.png",icon_img1:e.baseImg+"/xcx/com/message_center/Frame%20427319637.png",default:e.baseImg+"/xcx/com/message_center/%E7%BE%8E%E5%A5%B31.png",list:[{src:e.baseImg+"/xcx/com/message_center/默认.png",name:"默认"},{src:e.baseImg+"/xcx/com/message_center/百宝箱示例.png",name:"图片封面"},{src:e.baseImg+"/xcx/com/message_center/百宝箱示例.png",name:"GIF封面"}]}},onShow:function(){""!=uni.getStorageSync("vison_code")&&this.historySession(uni.getStorageSync("vison_code"))},methods:{historySession:function(t){var i=this;(0,s.getImgDetail)(t).then((function(t){if(2e4==t.code){var a=t.data;a.forEach((function(t,n){n==a.length-2&&("hkcartoon"==t.style&&(i.active=2),"jpcartoon"==t.style&&(i.active=1)),n==a.length-1&&(i.src=e.baseImg+"/"+t.result_image)})),uni.setStorageSync("vison_code","")}else i.$api.msg(t.msg)})).catch((function(e){i.$api.msg("获取历史记录失败！")}))},mergeChange:function(t){var i=this;return(0,o.default)((0,n.default)().mark((function a(){var c,r,l,u;return(0,n.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(i.active=t,uni.showLoading({title:"生成中..."}),0===t?(i.src=e.baseImg+"/"+i.origin_image,uni.hideLoading()):c=1==t?{chat_type:"36",action_type:6,file_extension:"mp4",prompt:"视频降噪",origin_image:i.origin_image,style:"False"}:{chat_type:"36",action_type:6,file_extension:"mp4",prompt:"视频降噪",origin_image:i.origin_image,style:"True"},0===t){a.next=8;break}return a.next=6,(0,s.asyncImg)(c);case 6:r=a.sent,2e4==r.code?(l=0,u=setInterval((0,o.default)((0,n.default)().mark((function t(){var a;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!(l<51)){t.next=7;break}return t.next=3,(0,s.getTextImg)(r.data);case 3:a=t.sent,2e4===a.code?(l+=1,null!=a.data&&(1!=a.data[0].status?(i.src=e.baseImg+"/"+a.data[0].result_image,clearInterval(u),uni.hideLoading()):(clearInterval(u),that.$api.msg("生成图片失败，稍后重试"),uni.hideLoading()))):40022==a.code?(clearInterval(u),uni.hideLoading(),uni.showModal({content:a.msg,confirmText:"购买算力",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/vip/vip"}):e.cancel&&console.log("用户点击取消")}})):(clearInterval(u),i.active=0,i.$api.msg(a.msg),uni.hideLoading()),t.next=10;break;case 7:i.$api.msg("请到历史记录查询"),uni.hideLoading(),clearInterval(u);case 10:case"end":return t.stop()}}),t)}))),2e3)):(console.log(r.msg),uni.hideLoading(),clearInterval(stopTime));case 8:case"end":return a.stop()}}),a)})))()},savePhoto:function(e){uni.showLoading({mask:!0,title:"下载中..."}),uni.downloadFile({url:e,success:function(e){if(200===e.statusCode){var t=document.createElement("a");t.download="",t.href=e.tempFilePath,document.body.appendChild(t),t.click(),t.remove(),uni.hideLoading()}else uni.hideLoading()},fail:function(e){console.log(e),uni.hideLoading()}})},previewImage:function(){uni.previewImage({urls:[this.src],current:this.src,loop:!0})},historyText:function(){uni.navigateTo({url:"/childCont/chest/history_chest?chat_type=38"})},toSlove:function(){var t=this;return(0,o.default)((0,n.default)().mark((function i(){var a;return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:a=t,uni.chooseVideo({sourceType:["album"],extension:[".mp4",".flv",".ts",".rmvb"],success:function(t){var i=t.size;if(i>1073741824)a.$api.msg("该视频已超过1GB，不能上传");else{var n=t.tempFilePath;uni.showLoading({title:"上传中"}),uni.uploadFile({url:e.loginUrl+"/api/user/oss_upload",filePath:n,name:"image",formData:{image:n,image_name:"视频",oss_dir:"static",cate:"create_character"},success:function(t){var i=JSON.parse(t.data);console.log(i,333),uni.hideLoading(),2e4==i.code?(a.src=e.baseImg+"/"+i.data.new_url,console.log(a.src)):(a.$api.msg(i.msg),uni.hideLoading())},fail:function(e){a.$api.msg("上传失败"),uni.hideLoading()}})}}});case 2:case"end":return i.stop()}}),i)})))()},toIdea:function(){uni.navigateTo({url:"/childPage/answer/answer"})}}};t.default=c}).call(this,i("c8ba"))},6553:function(e,t,i){var a=i("86d9");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("36835a46",a,!0,{sourceMap:!1,shadowMode:!1})},"711e":function(e,t,i){"use strict";i.r(t);var a=i("40ea"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"86d9":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'.bigBox[data-v-b36a76b2]{position:relative;text-align:center;width:100%;height:%?512?%;background:#000;padding:%?32?% 0}.bigBox .bigImg[data-v-b36a76b2]{height:%?512?%;width:100%}.bigBox .downImg[data-v-b36a76b2]{width:%?55?%;height:%?55?%;position:absolute;top:%?-4?%;right:%?4?%}.bigBox .upImg[data-v-b36a76b2]{width:%?55?%;height:%?55?%;position:absolute;bottom:%?95?%;right:%?20?%}.slider[data-v-b36a76b2]{width:80%;margin-top:%?40?%;margin-left:%?80?%}.bottom[data-v-b36a76b2]{display:flex;color:"#86909C";font-size:%?24?%;margin-left:%?40?%;margin-top:%?50?%}.bottom .item[data-v-b36a76b2]{margin-right:%?32?%;text-align:center}.bottom .item img[data-v-b36a76b2]{width:%?134?%;height:%?134?%;border-radius:4px}.activeColor[data-v-b36a76b2]{color:"#1F64FF";z-index:999}.footer[data-v-b36a76b2]{position:fixed;bottom:%?30?%;display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%}.footer .text[data-v-b36a76b2]{font-size:%?30?%;color:#333;line-height:%?50?%}.footer .record[data-v-b36a76b2]{font-size:%?26?%;color:#0e39de;width:80%;text-align:right;line-height:%?50?%}.footer .btn[data-v-b36a76b2]{width:80%;height:%?75?%;line-height:%?75?%}',""]),e.exports=t},a075:function(e,t,i){"use strict";i.r(t);var a=i("b390"),n=i("711e");for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("323f");var s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"b36a76b2",null,!1,a["a"],void 0);t["default"]=c.exports},b390:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticStyle:{"background-color":"#FEFEFE",height:"100vh"}},[i("v-uni-view",{staticClass:"bigBox"},[i("v-uni-video",{staticClass:"bigImg",attrs:{"object-fit":"contain",src:e.src}}),i("v-uni-image",{staticClass:"downImg",attrs:{src:e.icon_img1,mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.savePhoto(e.src)}}})],1),i("v-uni-view",{staticClass:"bottom"},e._l(e.list,(function(t,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.mergeChange(a)}}},[i("img",{style:[{border:e.active==a?"1rpx solid #1F64FF":"3rpx solid #F3F3F3"}],attrs:{src:t.src,alt:""}}),i("v-uni-view",{style:[{color:e.active==a?"#1F64FF":"#333"}]},[e._v(e._s(t.name))])],1)})),1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"text"},[e._v("本次生成将消耗12w算力/分钟")]),i("v-uni-view",{staticClass:"record",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.historyText.apply(void 0,arguments)}}},[e._v("历史记录")]),i("v-uni-button",{staticClass:"btn",staticStyle:{"background-color":"#1F64FF",color:"#fff"},attrs:{size:"default",type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toSlove.apply(void 0,arguments)}}},[e._v("上传视频")])],1)],1)},n=[]}}]);