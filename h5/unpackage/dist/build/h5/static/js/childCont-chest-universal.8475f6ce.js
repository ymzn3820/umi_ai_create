(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childCont-chest-universal"],{"247a":function(e,t,i){var a=i("24fb");t=a(!1),t.push([e.i,"uni-page-body[data-v-4a68ffcb]{background:#fff}body.?%PAGE?%[data-v-4a68ffcb]{background:#fff}.bigBox[data-v-4a68ffcb]{position:relative;text-align:center;width:100%;height:%?512?%;background:#000;padding:%?32?% 0}.bigBox .bigImg[data-v-4a68ffcb]{height:%?512?%;width:100%}.bigBox .downImg[data-v-4a68ffcb]{width:%?55?%;height:%?55?%;position:absolute;bottom:%?-65?%;right:%?15?%}.bigBox .upImg[data-v-4a68ffcb]{width:%?55?%;height:%?55?%;position:absolute;bottom:%?95?%;right:%?20?%}.noImg[data-v-4a68ffcb]{width:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;padding:%?70?% 0}.noImg .defaultImg[data-v-4a68ffcb]{width:%?200?%;height:%?200?%}.noImg .img_text[data-v-4a68ffcb]{color:#9e9e9e;font-size:%?28?%;padding:%?20?% 0}.material[data-v-4a68ffcb]{margin-top:%?86?%}.material .tips[data-v-4a68ffcb]{padding:%?10?% %?30?%;display:flex;align-items:center;justify-content:center;background:#e8f3ff;width:100%}.material .tips .tip_l[data-v-4a68ffcb]{width:%?42?%;height:%?42?%}.material .tips .tip_m[data-v-4a68ffcb]{flex:1;color:#1d2129;font-size:%?24?%;padding-left:%?20?%}.material .tip_select[data-v-4a68ffcb]{color:#86909c;font-size:%?24?%;padding:%?20?% 0}.material .select[data-v-4a68ffcb]{margin-top:%?40?%;padding-left:%?32?%}.material .select .top[data-v-4a68ffcb]{margin-bottom:%?20?%}.material .select .top .text1[data-v-4a68ffcb]{color:#1d2129;text-align:center;font-size:%?30?%;font-weight:500;margin-right:%?32?%}.material .select .bottom[data-v-4a68ffcb]{display:flex;color:#86909c;font-size:%?24?%}.material .select .bottom .item[data-v-4a68ffcb]{margin-right:%?50?%;text-align:center}.material .select .bottom .item img[data-v-4a68ffcb]{width:%?120?%;height:%?120?%;border-radius:4px}.activeColor[data-v-4a68ffcb]{font-size:%?24?%}.footer[data-v-4a68ffcb]{position:fixed;bottom:%?0?%;padding-bottom:%?30?%;display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;background:#fff}.footer .text[data-v-4a68ffcb]{font-size:%?30?%;color:#333;line-height:%?50?%;display:flex}.footer .record[data-v-4a68ffcb]{font-size:%?26?%;color:#0e39de;width:80%;text-align:right;line-height:%?50?%}.footer .btn[data-v-4a68ffcb]{width:80%;height:%?75?%;line-height:%?75?%}",""]),e.exports=t},"3079f":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var a={uIcon:i("0289").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticStyle:{"background-color":"#FEFEFE",height:"100vh","padding-bottom":"190rpx"}},[""!=e.src?i("v-uni-view",{staticClass:"bigBox"},[i("v-uni-video",{staticClass:"bigImg",attrs:{"object-fit":"contain",src:e.src}}),i("v-uni-image",{staticClass:"downImg",attrs:{src:e.icon_img1,mode:""},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.savePhoto(e.src)}}})],1):i("v-uni-view",{staticClass:"noImg"},[i("v-uni-image",{staticClass:"defaultImg",attrs:{src:e.backImg,mode:"aspectFit"}}),i("v-uni-view",{staticClass:"img_text"},[e._v("暂无融合图")])],1),i("v-uni-view",{staticClass:"material"},[i("v-uni-view",{staticClass:"select"},[i("v-uni-view",{staticClass:"bottom"},e._l(e.picList,(function(t,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.mergeChange_backdrop(a)}}},[i("img",{style:[{border:e.active_backdrop==a?"1rpx solid #1F64FF":""}],attrs:{src:e.getImgUrl(t.src),alt:""}}),i("v-uni-view",{staticClass:"activeColor",style:[{color:e.active_backdrop==a?"#1F64FF":"#333"}]},[e._v(e._s(t.name))])],1)})),1)],1),i("v-uni-view",{staticClass:"select"},[i("v-uni-view",{staticClass:"bottom"},e._l(e.list,(function(t,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.mergeChange(a)}}},[i("img",{style:[{border:e.active==a?"1rpx solid #1F64FF":""}],attrs:{src:e.getImgUrl(t.src),alt:""}}),i("v-uni-view",{staticClass:"activeColor",style:[{color:e.active==a?"#1F64FF":"#333"}]},[e._v(e._s(t.name))])],1)})),1)],1),i("v-uni-view",{staticClass:"select",staticStyle:{"padding-bottom":"118px"}},[i("v-uni-view",{staticClass:"bottom"},e._l(e.voiceList,(function(t,a){return i("v-uni-view",{key:a,staticClass:"item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.voiceChange(a)}}},[i("img",{style:[{border:e.active_voice==a?"1rpx solid #1F64FF":""}],attrs:{src:e.getImgUrl(t.src),alt:""}}),i("v-uni-view",{staticClass:"activeColor",style:[{color:e.active_voice==a?"#1F64FF":"#333"}]},[e._v(e._s(t.name))])],1)})),1)],1),i("v-uni-view",{staticClass:"footer"},[i("v-uni-view",{staticClass:"text"},[e._v("本次生成将消耗120w算力/分钟"),i("u-icon",{attrs:{name:"question-circle-fill"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.quesChange.apply(void 0,arguments)}}})],1),i("v-uni-view",{staticClass:"record",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.historyText.apply(void 0,arguments)}}},[e._v("历史记录")]),i("v-uni-button",{staticClass:"btn",staticStyle:{"background-color":"#1F64FF",color:"#fff"},attrs:{size:"default",type:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toSlove.apply(void 0,arguments)}}},[e._v("一键生成")])],1)],1)],1)},s=[]},7299:function(e,t,i){"use strict";i.r(t);var a=i("3079f"),n=i("e2d2");for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("eb40");var c=i("f0c5"),o=Object(c["a"])(n["default"],a["b"],a["c"],!1,null,"4a68ffcb",null,!1,a["a"],void 0);t["default"]=o.exports},8522:function(e,t,i){"use strict";(function(e){i("7a82");var a=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(i("c7eb")),s=a(i("1da1"));i("d3b7"),i("159b"),i("baa5");var c=i("2d63"),o={data:function(){return{ideaImg:e.baseImg+"/xcx/com/message_center/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.png",show:!0,src:e.baseImg+"/xcx/com/message_center/bbxtysp.mp4",tipImg:e.baseImg+"/xcx/com/message_center/alert-circle.png",backImg:e.baseImg+"/xcx/com/message_center/%E7%BC%BA%E7%9C%81%E9%A1%B5.png",icon_img:e.baseImg+"/xcx/com/message_center/Frame%20427320251.png",icon_img1:e.baseImg+"/xcx/com/message_center/Frame%20427319637.png",picList:[{src:"cxc/com/message_center/Frame%20427320254.png",name:"素材视频"},{src:"/xcx/com/message_center/生成1.png",url:"xcx/com/message_center/bbxtysp.mp4",name:"示例1"},{src:"/xcx/com/message_center/生成2.png",url:"xcx/com/message_center/bbxtysp2.mp4",name:"示例2"},{src:"/xcx/com/message_center/生成3.png",url:"xcx/com/message_center/bbxtysp3.mp4",name:"示例3"}],list:[{src:"cxc/com/message_center/Frame%20427320254.png",name:"背景图"},{src:"xcx/com/message_center/bbxspscPic.png",name:"图例1"},{src:"xcx/com/message_center/bbxspscPic2.png",name:"图例2"},{src:"xcx/com/message_center/bbxspscPic3.png",name:"图例3"}],voiceList:[{src:"cxc/com/message_center/Frame%20427320254.png",name:"音频",url:""},{src:"xcx/com/message_center/Rectangle%20346253495252.png",name:"示例1",url:"xcx/com/message_center/y2332.mp3"},{src:"xcx/com/message_center/Rectangle%203462535255.png",name:"示例2",url:"xcx/com/message_center/y2332.mp3"},{src:"xcx/com/message_center/Rectangle%2034625353.png",name:"示例3",url:"xcx/com/message_center/y2332.mp3"}],active:1,video_url:"",video_name:"",img_url:"",img_name:"",audio_url:"",audio_name:"",active_backdrop:1,active_voice:1}},onLoad:function(){this.video_url=this.src.substring(54),this.video_name=this.src.substring(77),this.img_url=this.list[1].src,this.img_name=this.list[1].src.substring(23),this.audio_url=this.voiceList[1].url,this.audio_name=this.voiceList[1].url.substring(23)},onShow:function(){""!=uni.getStorageSync("vison_code")&&this.historySession(uni.getStorageSync("vison_code"))},methods:{historySession:function(t){var i=this;(0,c.getImgDetail)(t).then((function(t){if(console.log(t,6666666666666666e5),2e4==t.code){var a=t.data;a.forEach((function(t,n){n==a.length-2&&(i.active=0,i.active_backdrop=0,i.active_voice=0,i.list[0].src=t.origin_image,i.origin_image=t.origin_image,i.picList[0].src=t.refer_image,i.refer_image=t.refer_image),n==a.length-1&&(i.src=e.baseImg+"/"+t.result_image)})),uni.setStorageSync("vison_code","")}else i.$api.msg(t.msg)})).catch((function(e){i.$api.msg("获取历史记录失败！")}))},mergeChange_backdrop:function(t){if(this.active_backdrop=t,0===t){var i=this;uni.chooseVideo({sourceType:["album"],extension:[".mp4",".avi",".mkv",".flv",".mov",".mpg",".ts",".mxf"],success:function(t){var a=t.size;if(a>1073741824)i.$api.msg("该视频已超过1GB，不能上传");else{var n=t.tempFilePath;uni.showLoading({title:"上传中"}),uni.uploadFile({url:e.loginUrl+"/api/user/oss_upload",filePath:n,name:"image",formData:{image:n,image_name:"视频",oss_dir:"static",cate:"create_character"},success:function(t){var a=JSON.parse(t.data);console.log(a,333),uni.hideLoading(),2e4==a.code?(i.src=e.baseImg+"/"+a.data.new_url,i.video_url=a.data.new_url,i.video_name=i.video_url.substring(24),i.active_backdrop=0,uni.hideLoading()):(i.$api.msg(a.msg),uni.hideLoading())},fail:function(e){i.$api.msg("上传失败"),uni.hideLoading()}})}}})}else this.video_url=this.picList[t].url,this.video_name=this.picList[t].url.substring(53),this.src=e.baseImg+"/"+this.picList[t].url,console.log(this.video_url,this.video_name)},mergeChange:function(t){if(this.active=t,0===t){var i=this;uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){console.log(t,589);var a=t.tempFilePaths[0],n=t.tempFiles[0].name.substring(t.tempFiles[0].name.lastIndexOf(".")+1),s=t.tempFiles[0].size;s<30720||s>104857600?i.$api.msg("请上传大于30 KB，小于100 MB的图片"):"jpg"==n||"png"==n?(uni.showLoading({title:"上传中"}),uni.uploadFile({url:e.loginUrl+"/api/user/oss_upload",filePath:a,name:"image",formData:{image:a,oss_dir:"static",cate:"create_character"},success:function(e){var t=JSON.parse(e.data);2e4==t.code?(i.list[0].src=t.data.new_url,i.img_url=t.data.new_url,i.img_name=i.img_url.substring(24),console.log(t,333),uni.hideLoading()):(i.$api.msg(t.msg),uni.hideLoading())}})):i.$api.msg("只允许上传 .jpg、.png、格式的图片")}})}else this.img_url=this.list[t].src,this.img_name=this.list[t].src.substring(53)},voiceChange:function(t){if(this.active_voice=t,0===t){var i=this;uni.chooseFile({count:1,type:"all",extension:[".mp3",".wav"],success:function(t){var a=t.tempFiles[0].size,n=t.tempFiles[0].name;if(a>1073741824)i.$api.msg("该文件已超过1GB，不能上传");else{var s=t.tempFilePaths[0],c={source:e.source},o=JSON.parse(uni.getStorageSync("userInfo"));o.token&&(c.Authorization=o.token),o.role&&(c.role=o.role),uni.uploadFile({url:e.baseUrl+"/api/sv_voice/audio_conversion",filePath:s,header:c,name:"image",formData:{image:s,image_name:n,oss_dir:"static",cate:"create_character"},success:function(e){var t=JSON.parse(e.data);2e4==t.code?(i.audio_url=t.data.oss_url,i.audio_name=i.audio_url.substring(24),i.active_voice=0):i.$api.msg(t.msg)},fail:function(e){i.$api.msg("上传失败")}})}}})}else this.audio_url=this.voiceList[t].url,this.audio_name=this.voiceList[t].url.substring(53),console.log(this.audio_url,this.audio_name)},historyText:function(){uni.navigateTo({url:"/childCont/chest/history_chest?chat_type=29"})},toSlove:function(){var t=this;return(0,s.default)((0,n.default)().mark((function i(){var a,o,r,l;return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(uni.showLoading({title:"生成中..."}),""!=t.origin_image){i.next=3;break}return i.abrupt("return",t.$api.msg("请上传人物照片"));case 3:if(""!=t.refer_image){i.next=5;break}return i.abrupt("return",t.$api.msg("请上传背景照片"));case 5:return a={chat_type:"29",action_type:6,file_extension:"mp4",prompt:"通用视频生成",style:"normal",size:"750*750",scene:"costume",transition_style:"basic",file_list:[{file_url:t.video_url,file_type:"video",file_name:t.video_name},{file_url:t.img_url,file_type:"image",file_name:t.img_name},{file_url:t.audio_url,file_type:"audio",file_name:t.audio_name}]},i.prev=6,i.next=9,(0,c.asyncImg)(a);case 9:o=i.sent,2e4==o.code?(r=0,l=setInterval((0,s.default)((0,n.default)().mark((function i(){var a;return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(!(r<51)){i.next=7;break}return i.next=3,(0,c.getTextImg)(o.data);case 3:a=i.sent,2e4===a.code?(r+=1,null!=a.data&&(1!=a.data[0].status?(t.src=e.baseImg+"/"+a.data[0].result_image,clearInterval(l),uni.hideLoading()):(clearInterval(l),that.$api.msg("生成图片失败，稍后重试"),uni.hideLoading()))):40022==a.code?(clearInterval(l),uni.hideLoading(),uni.showModal({content:a.msg,confirmText:"购买算力",success:function(e){e.confirm?uni.navigateTo({url:"/pages/user/vip/vip"}):e.cancel&&console.log("用户点击取消")}})):(clearInterval(l),t.active=0,t.$api.msg(a.msg),uni.hideLoading()),i.next=10;break;case 7:uni.hideLoading(),t.$api.msg("请前往历史记录查看"),clearInterval(l);case 10:case"end":return i.stop()}}),i)}))),2e3)):(console.log(o.msg),uni.hideLoading()),i.next=17;break;case 13:i.prev=13,i.t0=i["catch"](6),t.$api.msg("生成失败"),clearInterval(stopTime);case 17:case"end":return i.stop()}}),i,null,[[6,13]])})))()},getImgUrl:function(t){return e.baseImg+"/"+t},previewImage:function(){uni.previewImage({urls:[this.src],current:this.src,loop:!0})},savePhoto:function(e){uni.showLoading({mask:!0,title:"下载中..."}),uni.downloadFile({url:e,success:function(e){if(200===e.statusCode){var t=document.createElement("a");t.download="",t.href=e.tempFilePath,document.body.appendChild(t),t.click(),t.remove(),uni.hideLoading()}else uni.hideLoading()},fail:function(e){console.log(e),uni.hideLoading()}})},toIdea:function(){uni.navigateTo({url:"/childPage/answer/answer"})},quesChange:function(){uni.showModal({content:"视频素材总时长不超过3分钟，超过部分会被自动截断丢弃（按输入视频顺序保留前3分钟)",success:function(){}})}}};t.default=o}).call(this,i("c8ba"))},baa5:function(e,t,i){var a=i("23e7"),n=i("e58c");a({target:"Array",proto:!0,forced:n!==[].lastIndexOf},{lastIndexOf:n})},d1fa:function(e,t,i){var a=i("247a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("4f06").default;n("30e08b2b",a,!0,{sourceMap:!1,shadowMode:!1})},e2d2:function(e,t,i){"use strict";i.r(t);var a=i("8522"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},eb40:function(e,t,i){"use strict";var a=i("d1fa"),n=i.n(a);n.a}}]);