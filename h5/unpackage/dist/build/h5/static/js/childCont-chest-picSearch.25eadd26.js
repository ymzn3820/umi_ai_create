(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childCont-chest-picSearch"],{2909:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return(0,a.default)(e)||(0,n.default)(e)||(0,o.default)(e)||(0,c.default)()};var a=r(i("6005")),n=r(i("db90")),o=r(i("06c5")),c=r(i("3427"));function r(e){return e&&e.__esModule?e:{default:e}}},3427:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},i("d9e2"),i("d401")},"50f8":function(e,t,i){"use strict";var a=i("7a10"),n=i.n(a);n.a},6005:function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(Array.isArray(e))return(0,a.default)(e)};var a=function(e){return e&&e.__esModule?e:{default:e}}(i("6b75"))},"6dd8":function(e,t,i){"use strict";(function(e){i("7a82");var a=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("c7eb")),o=a(i("2909")),c=a(i("1da1"));i("d3b7"),i("159b"),i("baa5");var r=i("2d63"),s={components:{},data:function(){return{proShow:!0,ideaImg:e.baseImg+"/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png",src:e.baseImg+"/xcx/com/message_center/%E6%A1%88%E4%BE%8B%E5%9B%BE.png",icon_img:e.baseImg+"/xcx/com/message_center/Frame%20427320251.png",icon_img1:e.baseImg+"/xcx/com/message_center/Frame%20427319637.png",content:"",origin_image:"/xcx/com/message_center/%E6%A1%88%E4%BE%8B%E5%9B%BE.png"}},onShow:function(){""!=uni.getStorageSync("vison_code")&&this.historySession(uni.getStorageSync("vison_code"))},methods:{historySession:function(t){var i=this;(0,r.getImgDetail)(t).then((function(t){if(2e4==t.code){var a=t.data;a.forEach((function(t,n){n==a.length-2&&(i.src=e.baseImg+"/"+t.origin_image,i.origin_image=t.origin_image),n==a.length-1&&(i.content=t.result_list)})),uni.setStorageSync("vison_code","")}else i.$api.msg(t.msg)})).catch((function(e){i.$api.msg("获取历史记录失败！")}))},toSlove:function(){var t=this;uni.chooseImage({count:1,mediaType:["image"],sourceType:["album","camera"],maxDuration:30,camera:"back",success:function(i){var a=i.tempFilePaths[0],n=i.tempFiles[0].name.substring(i.tempFiles[0].name.lastIndexOf(".")+1),o=i.tempFiles[0].size;o>3145728?t.$api.msg("该文件已超过3M，不能上传"):"jpg"===n||"jpeg"===n||"png"===n||"bmp"===n?(uni.showLoading({title:"上传中"}),uni.uploadFile({url:e.loginUrl+"/api/user/oss_upload",filePath:a,name:"image",formData:{image:a,oss_dir:"static",cate:"create_character"},success:function(i){var a=JSON.parse(i.data);2e4==a.code?(t.src=e.baseImg+"/"+a.data.new_url,t.origin_image=a.data.new_url,t.active=0,uni.hideLoading()):(t.$api.msg(a.msg),uni.hideLoading())}})):t.$api.msg("只允许上传 .jpg、.png、.jpeg、.bmp格式的图片")}})},mergeChange:function(){var e=this;return(0,c.default)((0,n.default)().mark((function t(){var i,a;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return uni.showLoading({title:"识别中..."}),i={chat_type:"25",action_type:3,prompt:"图片配文",origin_image:e.origin_image,model:"poem_material"},t.next=4,(0,r.createImg)(i);case 4:a=t.sent,2e4==a.code?e.content=(0,o.default)(a.data.results[0].result_list):40022==a.code?uni.showModal({content:a.msg,confirmText:"购买算力",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/vip/vip"}):e.cancel&&console.log("用户点击取消")}}):e.$api.msg(a.msg),uni.hideLoading();case 7:case"end":return t.stop()}}),t)})))()},previewImage:function(){uni.previewImage({urls:[this.src],current:this.src,loop:!0})},savePhoto:function(e){uni.showLoading({mask:!0,title:"下载中..."}),uni.downloadFile({url:e,success:function(e){if(200===e.statusCode){var t=document.createElement("a");t.download="",t.href=e.tempFilePath,document.body.appendChild(t),t.click(),t.remove(),uni.hideLoading()}else uni.hideLoading()},fail:function(e){console.log(e),uni.hideLoading()}})},historyText:function(){uni.navigateTo({url:"/childPage/vision/history_text?chat_type=25"})},copyText:function(e){wx.setClipboardData({data:e,success:function(){uni.showToast({title:"复制成功"})}})},toIdea:function(){uni.navigateTo({url:"/childPage/answer/answer"})}}};t.default=s}).call(this,i("c8ba"))},"7a10":function(e,t,i){var a=i("8f34");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("1c7b6f09",a,!0,{sourceMap:!1,shadowMode:!1})},"8ad9":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return a}));var a={uIcon:i("0289").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticStyle:{"background-color":"#FEFEFE",height:"100vh"},style:[{backgroundColor:e.proShow?"rgba(0, 0, 0, 0.60)":"#FEFEFE"}],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.proShow=!1}}},[i("v-uni-view",{staticClass:"bigBox"},[i("v-uni-image",{staticClass:"bigImg",attrs:{mode:"aspectFit",src:e.src}}),i("v-uni-image",{staticClass:"upImg",attrs:{src:e.icon_img,mode:"aspectFit"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}}),i("v-uni-image",{staticClass:"downImg",attrs:{src:e.icon_img1,mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.savePhoto(e.src)}}})],1),i("v-uni-view",{staticClass:"footer"},[0==e.proShow?i("v-uni-view",{staticClass:"record",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.historyText.apply(void 0,arguments)}}},[e._v("历史记录")]):e._e(),0==e.proShow?i("v-uni-button",{staticClass:"btn",staticStyle:{"background-color":"#1F64FF",color:"#fff"},attrs:{size:"default",type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toSlove.apply(void 0,arguments)}}},[e._v("上传图片")]):i("v-uni-button",{staticClass:"btn",staticStyle:{"background-color":"#1F64FF",color:"#fff"},attrs:{size:"default",type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.proShow=!1}}},[e._v("返回")])],1),e.proShow?i("v-uni-view",{staticClass:"product"},[i("v-uni-view",{staticClass:"pro_head"},[i("u-icon",{attrs:{name:"search",color:"#000",size:"24"}}),i("v-uni-view",{staticClass:"pro_ht"},[e._v("为你找到以下相识商品")]),i("u-icon",{attrs:{name:"close",color:"#000",size:"24"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.proShow=!1}}})],1),i("v-uni-view",{staticClass:"pro_main"},[i("v-uni-view",{staticClass:"pro_mi"},[i("v-uni-image",{staticClass:"pro_img",attrs:{src:e.src}}),i("v-uni-view",{staticClass:"pro_mit"},[e._v("卡塔尔世界杯阿根廷三星球卡塔尔世界杯阿根廷三星球")])],1)],1)],1):e._e()],1)},o=[]},"8f34":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-4e775bcc]{background:#fff}body.?%PAGE?%[data-v-4e775bcc]{background:#fff}.bigBox[data-v-4e775bcc]{position:relative;text-align:center;width:100%}.bigBox .bigImg[data-v-4e775bcc]{width:100%}.bigBox .downImg[data-v-4e775bcc]{width:%?55?%;height:%?55?%;position:absolute;bottom:%?20?%;right:%?20?%}.bigBox .upImg[data-v-4e775bcc]{width:%?55?%;height:%?55?%;position:absolute;bottom:%?95?%;right:%?20?%}.title[data-v-4e775bcc]{color:#1d2129;font-size:%?30?%;font-weight:500;padding:%?20?%}.copy[data-v-4e775bcc]{font-size:%?26?%;color:#0e39de;text-align:right;line-height:%?70?%;padding-right:%?35?%}.main[data-v-4e775bcc]{padding:%?10?% %?20?%;max-height:%?350?%;overflow:auto;background:#f6f8fb}.main .main_cont[data-v-4e775bcc]{color:#000;font-size:%?26?%;font-weight:400;max-height:%?350?%;padding:%?15?%;line-height:%?50?%}.footer[data-v-4e775bcc]{position:fixed;bottom:%?30?%;display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%}.footer .text[data-v-4e775bcc]{font-size:%?30?%;color:#333;line-height:%?50?%}.footer .record[data-v-4e775bcc]{font-size:%?26?%;color:#0e39de;width:80%;text-align:right;line-height:%?50?%}.footer .btn[data-v-4e775bcc]{width:80%;height:%?75?%;line-height:%?75?%}.product[data-v-4e775bcc]{width:92%;height:95vh;border-radius:%?28?% %?28?% 0 0;background:#fff;padding:%?32?%}.product .pro_head[data-v-4e775bcc]{display:flex;justify-content:space-between;align-items:center}.product .pro_head .pro_ht[data-v-4e775bcc]{color:#000;font-size:%?30?%}.product .pro_main[data-v-4e775bcc]{display:flex;justify-content:space-between;flex-wrap:wrap;margin-top:%?36?%}.product .pro_main .pro_mi[data-v-4e775bcc]{display:flex;width:%?348?%;flex-direction:column;justify-content:center;align-items:flex-start;gap:%?12?%}.product .pro_main .pro_mi .pro_img[data-v-4e775bcc]{width:100%;height:%?360?%}.product .pro_main .pro_mi .pro_mit[data-v-4e775bcc]{width:%?348?%;color:#6b6b6b;font-size:%?26?%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}",""]),e.exports=t},baa5:function(e,t,i){var a=i("23e7"),n=i("e58c");a({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})},cf11:function(e,t,i){"use strict";i.r(t);var a=i("6dd8"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},d8e2:function(e,t,i){"use strict";i.r(t);var a=i("8ad9"),n=i("cf11");for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("50f8");var c=i("f0c5"),r=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"4e775bcc",null,!1,a["a"],void 0);t["default"]=r.exports}}]);