(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childPage-vision-stretch"],{"12b9":function(e,t,i){"use strict";(function(e){i("7a82");var a=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("c7eb")),o=a(i("1da1"));i("d3b7"),i("159b");var s=i("2d63"),c={data:function(){return{active:0,blur:0,src:e.baseImg+"/xcx/com/message_center/%E4%BA%BA%E7%89%A912.png",origin_image:"/xcx/com/message_center/%E4%BA%BA%E7%89%A912.png",icon_img:e.baseImg+"/xcx/com/message_center/Frame%20427320251.png",icon_img1:e.baseImg+"/xcx/com/message_center/Frame%20427319637.png",default:e.baseImg+"/xcx/com/message_center/%E7%BE%8E%E5%A5%B31.png",list:[{src:e.baseImg+"/xcx/com/message_center/默认.png",name:"关闭特效"},{src:e.baseImg+"/xcx/com/message_center/%E5%8F%98%E5%B9%B4%E8%BD%BB.png",name:"开启特效"}]}},onShow:function(){""!=uni.getStorageSync("vison_code")&&this.historySession(uni.getStorageSync("vison_code"))},methods:{historySession:function(t){var i=this;(0,s.getImgDetail)(t).then((function(t){if(2e4==t.code){var a=t.data;a.forEach((function(t,n){n==a.length-2&&("hkcartoon"==t.style&&(i.active=2),"jpcartoon"==t.style&&(i.active=1)),n==a.length-1&&(i.src=e.baseImg+"/"+t.result_image)})),uni.setStorageSync("vison_code","")}else i.$api.msg(t.msg)})).catch((function(e){i.$api.msg("获取历史记录失败！")}))},mergeChange:function(t){var i=this;return(0,o.default)((0,n.default)().mark((function a(){return(0,n.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:i.active=t,uni.showLoading({title:"生成中..."}),0===t?i.src=e.baseImg+"/"+i.origin_image:i.$api.msg("开发中"),uni.hideLoading();case 4:case"end":return a.stop()}}),a)})))()},savePhoto:function(e){uni.showLoading({mask:!0,title:"下载中..."}),uni.downloadFile({url:e,success:function(e){if(200===e.statusCode){var t=document.createElement("a");t.download="",t.href=e.tempFilePath,document.body.appendChild(t),t.click(),t.remove(),uni.hideLoading()}else uni.hideLoading()},fail:function(e){console.log(e),uni.hideLoading()}})},previewImage:function(){uni.previewImage({urls:[this.src],current:this.src,loop:!0})},historyText:function(){uni.navigateTo({url:"/childPage/vision/history_text?chat_type=24"})},toSlove:function(){var t=this;return(0,o.default)((0,n.default)().mark((function i(){var a;return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:a=t,uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){console.log(t,589);var i=t.tempFilePaths[0],n=t.tempFiles[0].size;n>5242880?a.$api.msg("该文件已超过5M，不能上传"):(uni.showLoading({title:"上传中"}),uni.uploadFile({url:e.loginUrl+"/api/user/oss_upload",filePath:i,name:"image",formData:{image:i,oss_dir:"static",cate:"create_character"},success:function(t){var i=JSON.parse(t.data);2e4==i.code?(a.list[0].src=e.baseImg+"/"+i.data.new_url,a.src=e.baseImg+"/"+i.data.new_url,a.origin_image=i.data.new_url,console.log(i,333),uni.hideLoading()):(a.$api.msg(i.msg),uni.hideLoading())}}))}});case 2:case"end":return i.stop()}}),i)})))()}}};t.default=c}).call(this,i("c8ba"))},4134:function(e,t,i){"use strict";i.r(t);var a=i("9dac"),n=i("a545");for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("4fc1");var s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"3a97886f",null,!1,a["a"],void 0);t["default"]=c.exports},"4fc1":function(e,t,i){"use strict";var a=i("f88b"),n=i.n(a);n.a},"76b8":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'.bigBox[data-v-3a97886f]{position:relative;text-align:center;width:100%}.bigBox .bigImg[data-v-3a97886f]{width:100%}.bigBox .downImg[data-v-3a97886f]{width:%?55?%;height:%?55?%;position:absolute;bottom:%?20?%;right:%?20?%}.bigBox .upImg[data-v-3a97886f]{width:%?55?%;height:%?55?%;position:absolute;bottom:%?95?%;right:%?20?%}.slider[data-v-3a97886f]{width:80%;margin-top:%?40?%;margin-left:%?80?%}.bottom[data-v-3a97886f]{display:flex;color:"#86909C";font-size:%?24?%;margin-left:%?40?%;margin-top:%?50?%}.bottom .item[data-v-3a97886f]{margin-right:%?32?%;text-align:center}.bottom .item img[data-v-3a97886f]{width:%?134?%;height:%?134?%;border-radius:4px}.activeColor[data-v-3a97886f]{color:"#1F64FF";z-index:999}.footer[data-v-3a97886f]{position:fixed;bottom:%?30?%;display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%}.footer .text[data-v-3a97886f]{font-size:%?30?%;color:#333;line-height:%?50?%}.footer .record[data-v-3a97886f]{font-size:%?26?%;color:#0e39de;width:80%;text-align:right;line-height:%?50?%}.footer .btn[data-v-3a97886f]{width:80%;height:%?75?%;line-height:200%}',""]),e.exports=t},"9dac":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticStyle:{"background-color":"#FEFEFE"}},[i("v-uni-view",{staticClass:"bigBox"},[i("v-uni-image",{staticClass:"bigImg",attrs:{mode:"aspectFit",src:e.src}}),i("v-uni-image",{staticClass:"upImg",attrs:{src:e.icon_img,mode:"aspectFit"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}}),i("v-uni-image",{staticClass:"downImg",attrs:{src:e.icon_img1,mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.savePhoto(e.src)}}})],1),i("v-uni-view",{staticClass:"bottom"},e._l(e.list,(function(t,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.mergeChange(a)}}},[i("img",{style:[{border:e.active==a?"1rpx solid #1F64FF":"3rpx solid #F3F3F3"}],attrs:{src:t.src,alt:""}}),i("v-uni-view",{style:[{color:e.active==a?"#1F64FF":"#333"}]},[e._v(e._s(t.name))])],1)})),1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"text"},[e._v("本次生成将消耗30w算力")]),i("v-uni-view",{staticClass:"record",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.historyText.apply(void 0,arguments)}}},[e._v("历史记录")]),i("v-uni-button",{staticClass:"btn",staticStyle:{"background-color":"#1F64FF",color:"#fff"},attrs:{size:"default",type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toSlove.apply(void 0,arguments)}}},[e._v("上传图片")])],1)],1)},n=[]},a545:function(e,t,i){"use strict";i.r(t);var a=i("12b9"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},f88b:function(e,t,i){var a=i("76b8");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("432e3bb7",a,!0,{sourceMap:!1,shadowMode:!1})}}]);