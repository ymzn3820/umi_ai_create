(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childCont-chest-faceRepair"],{"0da2":function(e,t,a){var i=a("ce8b");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("698aa44c",i,!0,{sourceMap:!1,shadowMode:!1})},5492:function(e,t,a){"use strict";(function(e){a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("c7eb")),o=i(a("1da1"));a("d3b7"),a("159b"),a("baa5");var c=a("2d63"),s={data:function(){return{ideaImg:e.baseImg+"/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png",active:0,blur:0,src:e.baseImg+"/xcx/com/message_center/%E4%BA%BA%E7%89%A912.png",origin_image:"/xcx/com/message_center/%E4%BA%BA%E7%89%A912.png",icon_img:e.baseImg+"/xcx/com/message_center/Frame%20427320251.png",icon_img1:e.baseImg+"/xcx/com/message_center/Frame%20427319637.png",default:e.baseImg+"/xcx/com/message_center/%E7%BE%8E%E5%A5%B31.png",list:[{src:e.baseImg+"/xcx/com/message_center/默认.png",name:"默认"},{src:e.baseImg+"/xcx/com/message_center/%E5%8F%98%E5%B9%B4%E8%BD%BB.png",name:"修复人脸"}]}},onShow:function(){""!=uni.getStorageSync("vison_code")&&this.historySession(uni.getStorageSync("vison_code"))},methods:{historySession:function(t){var a=this;(0,c.getImgDetail)(t).then((function(t){if(2e4==t.code){var i=t.data;i.forEach((function(t,n){n==i.length-2&&("hkcartoon"==t.style&&(a.active=2),"jpcartoon"==t.style&&(a.active=1)),n==i.length-1&&(a.src=e.baseImg+"/"+t.result_image)})),uni.setStorageSync("vison_code","")}else a.$api.msg(t.msg)})).catch((function(e){a.$api.msg("获取历史记录失败！")}))},mergeChange:function(t){var a=this;return(0,o.default)((0,n.default)().mark((function i(){var o,s;return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(a.active=t,uni.showLoading({title:"生成中..."}),0===t?a.src=e.baseImg+"/"+a.origin_image:o={chat_type:"39",action_type:3,prompt:"人脸修复",origin_image:a.origin_image},0===t){i.next=8;break}return i.next=6,(0,c.createImg)(o);case 6:s=i.sent,2e4==s.code?a.src=e.baseImg+"/"+s.data.results[0].result_image:40022==s.code?uni.showModal({content:s.msg,confirmText:"购买算力",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/vip/vip"}):e.cancel&&console.log("用户点击取消")}}):(a.active=0,a.$api.msg(s.msg));case 8:uni.hideLoading();case 9:case"end":return i.stop()}}),i)})))()},savePhoto:function(e){uni.showLoading({mask:!0,title:"下载中..."}),uni.downloadFile({url:e,success:function(e){if(200===e.statusCode){var t=document.createElement("a");t.download="",t.href=e.tempFilePath,document.body.appendChild(t),t.click(),t.remove(),uni.hideLoading()}else uni.hideLoading()},fail:function(e){console.log(e),uni.hideLoading()}})},previewImage:function(){uni.previewImage({urls:[this.src],current:this.src,loop:!0})},historyText:function(){uni.navigateTo({url:"/childCont/chest/history_chest?chat_type=39"})},toSlove:function(){var t=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(a){var i=a.tempFilePaths[0],n=a.tempFiles[0].name.substring(a.tempFiles[0].name.lastIndexOf(".")+1),o=a.tempFiles[0].size;o>3145728?t.$api.msg("该文件已超过3M，不能上传"):"jpg"===n||"jpeg"===n||"bmp"===n||"png"===n?(uni.showLoading({title:"上传中"}),uni.uploadFile({url:e.loginUrl+"/api/user/oss_upload",filePath:i,name:"image",formData:{image:i,oss_dir:"static",cate:"create_character"},success:function(a){var i=JSON.parse(a.data);2e4==i.code?(t.src=e.baseImg+"/"+i.data.new_url,t.origin_image=i.data.new_url,t.active=0,uni.hideLoading()):(t.$api.msg(i.msg),uni.hideLoading())}})):t.$api.msg("只允许上传 .jpg、.png、.jpeg、.bmp格式的图片")}})},toIdea:function(){uni.navigateTo({url:"/childPage/answer/answer"})}}};t.default=s}).call(this,a("c8ba"))},"9d8a":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticStyle:{"background-color":"#FEFEFE",height:"100vh"}},[a("v-uni-view",{staticClass:"bigBox"},[a("v-uni-image",{staticClass:"bigImg",attrs:{mode:"aspectFit",src:e.src}}),a("v-uni-image",{staticClass:"upImg",attrs:{src:e.icon_img,mode:"aspectFit"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}}),a("v-uni-image",{staticClass:"downImg",attrs:{src:e.icon_img1,mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.savePhoto(e.src)}}})],1),a("v-uni-view",{staticClass:"bottom"},e._l(e.list,(function(t,i){return a("v-uni-view",{key:i,staticClass:"item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.mergeChange(i)}}},[a("img",{style:[{border:e.active==i?"1rpx solid #1F64FF":"3rpx solid #F3F3F3"}],attrs:{src:t.src,alt:""}}),a("v-uni-view",{style:[{color:e.active==i?"#1F64FF":"#333"}]},[e._v(e._s(t.name))])],1)})),1),a("v-uni-view",{staticClass:"footer"},[a("v-uni-view",{staticClass:"text"},[e._v("本次生成将消耗90w算力/次")]),a("v-uni-view",{staticClass:"record",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.historyText.apply(void 0,arguments)}}},[e._v("历史记录")]),a("v-uni-button",{staticClass:"btn",staticStyle:{"background-color":"#1F64FF",color:"#fff"},attrs:{size:"default",type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toSlove.apply(void 0,arguments)}}},[e._v("上传图片")])],1)],1)},n=[]},b591:function(e,t,a){"use strict";a.r(t);var i=a("9d8a"),n=a("d44d");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("d28c");var c=a("f0c5"),s=Object(c["a"])(n["default"],i["b"],i["c"],!1,null,"5ac4be0a",null,!1,i["a"],void 0);t["default"]=s.exports},baa5:function(e,t,a){var i=a("23e7"),n=a("e58c");i({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})},ce8b:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,'.bigBox[data-v-5ac4be0a]{position:relative;text-align:center;width:100%}.bigBox .bigImg[data-v-5ac4be0a]{width:%?580?%;height:%?580?%}.bigBox .downImg[data-v-5ac4be0a]{width:%?55?%;height:%?55?%;position:absolute;bottom:%?20?%;right:%?20?%}.bigBox .upImg[data-v-5ac4be0a]{width:%?55?%;height:%?55?%;position:absolute;bottom:%?95?%;right:%?20?%}.slider[data-v-5ac4be0a]{width:80%;margin-top:%?40?%;margin-left:%?80?%}.bottom[data-v-5ac4be0a]{display:flex;color:"#86909C";font-size:%?24?%;margin-left:%?40?%;margin-top:%?50?%}.bottom .item[data-v-5ac4be0a]{margin-right:%?32?%;text-align:center}.bottom .item img[data-v-5ac4be0a]{width:%?134?%;height:%?134?%;border-radius:4px}.activeColor[data-v-5ac4be0a]{color:"#1F64FF";z-index:999}.footer[data-v-5ac4be0a]{position:fixed;bottom:%?30?%;display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%}.footer .text[data-v-5ac4be0a]{font-size:%?30?%;color:#333;line-height:%?50?%}.footer .record[data-v-5ac4be0a]{font-size:%?26?%;color:#0e39de;width:80%;text-align:right;line-height:%?50?%}.footer .btn[data-v-5ac4be0a]{width:80%;height:%?75?%;line-height:%?75?%}',""]),e.exports=t},d28c:function(e,t,a){"use strict";var i=a("0da2"),n=a.n(i);n.a},d44d:function(e,t,a){"use strict";a.r(t);var i=a("5492"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a}}]);