(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childPage-vision-matting"],{"004d":function(e,t,i){"use strict";i.r(t);var a=i("acd3"),n=i("2274");for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);i("23eb");var s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"381dd238",null,!1,a["a"],void 0);t["default"]=c.exports},2274:function(e,t,i){"use strict";i.r(t);var a=i("7fbd"),n=i.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);t["default"]=n.a},"23eb":function(e,t,i){"use strict";var a=i("5d33"),n=i.n(a);n.a},"5d33":function(e,t,i){var a=i("c484");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("9a8163b4",a,!0,{sourceMap:!1,shadowMode:!1})},"7fbd":function(e,t,i){"use strict";(function(e){i("7a82");var a=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("c7eb")),o=a(i("1da1"));i("d3b7"),i("159b");var s=i("2d63"),c={data:function(){return{active:1,active_backdrop:1,blur:0,src:e.baseImg+"/xcx/com/message_center/rect.png",origin_image:"xcx/com/message_center/rect.png",refer_image:"xcx/com/message_center/Rectangle%2034625353333.png",icon_img:e.baseImg+"/xcx/com/message_center/Frame%20427320251.png",icon_img1:e.baseImg+"/xcx/com/message_center/Frame%20427319637.png",list:[{src:"cxc/com/message_center/Frame%20427320254.png",name:"人物照"},{src:"xcx/com/message_center/rect.png",name:"示例1"},{src:"xcx/com/message_center/Vega%20AI%20%E5%88%9B%E4%BD%9C%E5%B9%B3%E5%8F%B0%201.png",name:"示例2"},{src:"xcx/com/message_center/Vega%20AI%20%E5%88%9B%E4%BD%9C%E5%B9%B3%E5%8F%B0%202.png",name:"示例3"}],picList:[{src:"cxc/com/message_center/Frame%20427320254.png",name:"背景图"},{src:"xcx/com/message_center/白底.png",name:"示例1"},{src:"xcx/com/message_center/Rectangle%203462535233.png",name:"示例2"},{src:"xcx/com/message_center/Rectangle%2034625353333.png",name:"示例3"}]}},onShow:function(){""!=uni.getStorageSync("vison_code")&&this.historySession(uni.getStorageSync("vison_code"))},methods:{historySession:function(t){var i=this;(0,s.getImgDetail)(t).then((function(t){if(2e4==t.code){var a=t.data;a.forEach((function(t,n){n==a.length-2&&(i.active=0,i.active_backdrop=0,i.list[0].src=t.origin_image,i.origin_image=t.origin_image,i.picList[0].src=t.refer_image,i.refer_image=t.refer_image),n==a.length-1&&(i.src=e.baseImg+"/"+t.result_image)})),uni.setStorageSync("vison_code","")}else i.$api.msg(t.msg)})).catch((function(e){i.$api.msg("获取历史记录失败！")}))},mergeChange:function(t){if(this.active=t,0===t){var i=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){console.log(t,589);var a=t.tempFilePaths[0],n=t.tempFiles[0].size;n>5242880?i.$api.msg("该文件已超过5M，不能上传"):(uni.showLoading({title:"上传中"}),uni.uploadFile({url:e.loginUrl+"/api/user/oss_upload",filePath:a,name:"image",formData:{image:a,oss_dir:"static",cate:"create_character"},success:function(t){var a=JSON.parse(t.data);2e4==a.code?(i.list[0].src=a.data.new_url,i.src=e.baseImg+"/"+a.data.new_url,i.origin_image=a.data.new_url,console.log(a,333),uni.hideLoading()):(i.$api.msg(a.msg),uni.hideLoading())}}))}})}else this.origin_image=this.list[t].src,this.src=e.baseImg+"/"+this.list[t].src},mergeChange_backdrop:function(t){if(this.active_backdrop=t,0===t){var i=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){console.log(t,589);var a=t.tempFilePaths[0],n=t.tempFiles[0].size;n>5242880?i.$api.msg("该文件已超过5M，不能上传"):(uni.showLoading({title:"上传中"}),uni.uploadFile({url:e.loginUrl+"/api/user/oss_upload",filePath:a,name:"image",formData:{image:a,oss_dir:"static",cate:"create_character"},success:function(e){var t=JSON.parse(e.data);2e4==t.code?(i.picList[0].src=t.data.new_url,i.refer_image=t.data.new_url,console.log(t,333),uni.hideLoading()):(i.$api.msg(t.msg),uni.hideLoading())}}))}})}else this.refer_image=this.list[t].src},savePhoto:function(e){uni.showLoading({mask:!0,title:"下载中..."}),uni.downloadFile({url:e,success:function(e){if(200===e.statusCode){var t=document.createElement("a");t.download="",t.href=e.tempFilePath,document.body.appendChild(t),t.click(),t.remove(),uni.hideLoading()}else uni.hideLoading()},fail:function(e){console.log(e),uni.hideLoading()}})},previewImage:function(){uni.previewImage({urls:[this.src],current:this.src,loop:!0})},historyText:function(){uni.navigateTo({url:"/childPage/vision/history_text?chat_type=20"})},toSlove:function(){var t=this;return(0,o.default)((0,n.default)().mark((function i(){var a,o;return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(uni.showLoading({title:"生成中..."}),""!=t.origin_image){i.next=3;break}return i.abrupt("return",t.$api.msg("请上传人物照片"));case 3:if(""!=t.refer_image){i.next=5;break}return i.abrupt("return",t.$api.msg("请上传背景照片"));case 5:return a={chat_type:"20",action_type:3,prompt:"人像抠图",quality:1,origin_image:t.origin_image,refer_image:t.refer_image,model:"human_segment"},i.next=8,(0,s.createImg)(a);case 8:o=i.sent,2e4==o.code?t.src=e.baseImg+"/"+o.data.results[0].result_image:40022==o.code?uni.showModal({content:o.msg,confirmText:"购买算力",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/vip/vip"}):e.cancel&&console.log("用户点击取消")}}):t.$api.msg(o.msg),uni.hideLoading();case 11:case"end":return i.stop()}}),i)})))()},getImgUrl:function(t){return e.baseImg+"/"+t}}};t.default=c}).call(this,i("c8ba"))},acd3:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return n})),i.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"bigBox"},[i("v-uni-image",{staticClass:"bigImg",attrs:{mode:"aspectFit",src:e.src}}),i("v-uni-image",{staticClass:"upImg",attrs:{src:e.icon_img,mode:"aspectFit"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.previewImage.apply(void 0,arguments)}}}),i("v-uni-image",{staticClass:"downImg",attrs:{src:e.icon_img1,mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.savePhoto(e.src)}}})],1),i("v-uni-view",{staticClass:"bottom"},e._l(e.list,(function(t,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.mergeChange(a)}}},[i("img",{style:[{border:e.active==a?"1rpx solid #1F64FF":""}],attrs:{src:e.getImgUrl(t.src),alt:""}}),i("v-uni-view",{style:[{color:e.active==a?"#1F64FF":"#333"}]},[e._v(e._s(t.name))])],1)})),1),i("v-uni-view",{staticClass:"bottom"},e._l(e.picList,(function(t,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.mergeChange_backdrop(a)}}},[i("img",{style:[{border:e.active_backdrop==a?"1rpx solid #1F64FF":""}],attrs:{src:e.getImgUrl(t.src),alt:""}}),i("v-uni-view",{style:[{color:e.active_backdrop==a?"#1F64FF":"#333"}]},[e._v(e._s(t.name))])],1)})),1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"text"},[e._v("本次生成将消耗12w算力")]),i("v-uni-view",{staticClass:"record",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.historyText.apply(void 0,arguments)}}},[e._v("历史记录")]),i("v-uni-button",{staticClass:"btn",staticStyle:{"background-color":"#1F64FF",color:"#fff"},attrs:{size:"default",type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toSlove.apply(void 0,arguments)}}},[e._v("一键生成")])],1)],1)},n=[]},c484:function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,'.bigBox[data-v-381dd238]{position:relative;text-align:center;width:100%;padding-bottom:%?40?%}.bigBox .bigImg[data-v-381dd238]{width:100%}.bigBox .downImg[data-v-381dd238]{width:%?55?%;height:%?55?%;position:absolute;bottom:%?60?%;right:%?20?%}.bigBox .upImg[data-v-381dd238]{width:%?55?%;height:%?55?%;position:absolute;bottom:%?155?%;right:%?20?%}.slider[data-v-381dd238]{width:80%;margin-top:%?40?%;margin-left:%?80?%}.bottom[data-v-381dd238]{display:flex;color:"#86909C";font-size:%?24?%;margin:%?48?%}.bottom .item[data-v-381dd238]{margin-right:%?55?%;text-align:center}.bottom .item img[data-v-381dd238]{width:%?120?%;height:%?120?%;border-radius:4px}.activeColor[data-v-381dd238]{color:"#1F64FF";z-index:999}.text[data-v-381dd238]{position:fixed;bottom:%?172?%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.footer[data-v-381dd238]{position:fixed;bottom:%?30?%;display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%}.footer .text[data-v-381dd238]{font-size:%?30?%;color:#333;line-height:%?50?%}.footer .record[data-v-381dd238]{font-size:%?26?%;color:#0e39de;width:80%;text-align:right;line-height:%?50?%}.footer .btn[data-v-381dd238]{width:80%;height:%?75?%;line-height:200%}',""]),e.exports=t}}]);