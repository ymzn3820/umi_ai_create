(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["childPage-voice-video_result"],{"0adb":function(e,t,n){"use strict";var a=n("fa78"),i=n.n(a);i.a},"191b":function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-1ba40ab6], uni-scroll-view[data-v-1ba40ab6], uni-swiper-item[data-v-1ba40ab6]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-textarea[data-v-1ba40ab6]{border-radius:4px;background-color:#fff;position:relative;display:flex;flex-direction:row;flex:1;padding:9px}.u-textarea--radius[data-v-1ba40ab6]{border-radius:4px}.u-textarea--no-radius[data-v-1ba40ab6]{border-radius:0}.u-textarea--disabled[data-v-1ba40ab6]{background-color:#f5f7fa}.u-textarea__field[data-v-1ba40ab6]{flex:1;font-size:15px;color:#606266;width:100%}.u-textarea__count[data-v-1ba40ab6]{position:absolute;right:5px;bottom:2px;font-size:12px;color:#909193;background-color:#fff;padding:1px 4px}',""]),e.exports=t},"243c":function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("bed4")),o=a(n("0444")),r={name:"u--input",mixins:[uni.$u.mpMixin,o.default,uni.$u.mixin],components:{uvInput:i.default}};t.default=r},"384e1":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var a={"u-Input":n("d072").default,uTextarea:n("fede").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticStyle:{height:"100vh"}},[n("v-uni-view",{staticStyle:{padding:"30upx","margin-bottom":"100upx"}},[n("v-uni-view",{staticClass:"voice_title"},[e._v("音频标题")]),n("v-uni-view",{staticClass:"voice_cont"},[n("u--input",{attrs:{placeholder:"请输入录音标题",border:"surround",maxlength:"50"},model:{value:e.messageTitle,callback:function(t){e.messageTitle=t},expression:"messageTitle"}})],1),n("v-uni-view",{staticClass:"voice_title"},[e._v("音频内容")]),n("v-uni-view",{staticClass:"voice_cont"},[n("u-textarea",{attrs:{placeholder:"在此输入您想了解的内容",autoHeight:!0,showConfirmBar:!1,adjustPosition:!1,maxlength:"-1",disableDefaultPadding:!0},model:{value:e.stResult,callback:function(t){e.stResult=t},expression:"stResult"}})],1)],1),n("v-uni-view",{staticClass:"bottom"},[n("v-uni-view",{staticClass:"bottom_cont"},[n("v-uni-view",{staticClass:"bottom_buy",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.save.apply(void 0,arguments)}}},[e._v("保存")])],1)],1)],1)},o=[]},"4b38":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("uvInput",{attrs:{value:e.value,type:e.type,fixed:e.fixed,disabled:e.disabled,disabledColor:e.disabledColor,clearable:e.clearable,password:e.password,maxlength:e.maxlength,placeholder:e.placeholder,placeholderClass:e.placeholderClass,placeholderStyle:e.placeholderStyle,showWordLimit:e.showWordLimit,confirmType:e.confirmType,confirmHold:e.confirmHold,holdKeyboard:e.holdKeyboard,focus:e.focus,autoBlur:e.autoBlur,disableDefaultPadding:e.disableDefaultPadding,cursor:e.cursor,cursorSpacing:e.cursorSpacing,selectionStart:e.selectionStart,selectionEnd:e.selectionEnd,adjustPosition:e.adjustPosition,inputAlign:e.inputAlign,fontSize:e.fontSize,color:e.color,prefixIcon:e.prefixIcon,suffixIcon:e.suffixIcon,suffixIconStyle:e.suffixIconStyle,prefixIconStyle:e.prefixIconStyle,border:e.border,readonly:e.readonly,shape:e.shape,customStyle:e.customStyle,formatter:e.formatter,ignoreCompositionEvent:e.ignoreCompositionEvent},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("focus")},blur:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("blur",t)}.apply(void 0,arguments)},keyboardheightchange:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("keyboardheightchange")},change:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("change",t)}.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("input",t)}.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.$emit("confirm",t)}.apply(void 0,arguments)},clear:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("clear")},click:function(t){arguments[0]=t=e.$handleEvent(t),e.$emit("click")}}},[e._t("prefix",null,{slot:"prefix"}),e._t("suffix",null,{slot:"suffix"})],2)},i=[]},"673f":function(e,t,n){var a=n("191b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("d8f14e72",a,!0,{sourceMap:!1,shadowMode:!1})},"76f0":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("a9e3");var a={props:{value:{type:[String,Number],default:uni.$u.props.textarea.value},placeholder:{type:[String,Number],default:uni.$u.props.textarea.placeholder},placeholderClass:{type:String,default:uni.$u.props.input.placeholderClass},placeholderStyle:{type:[String,Object],default:uni.$u.props.input.placeholderStyle},height:{type:[String,Number],default:uni.$u.props.textarea.height},confirmType:{type:String,default:uni.$u.props.textarea.confirmType},disabled:{type:Boolean,default:uni.$u.props.textarea.disabled},count:{type:Boolean,default:uni.$u.props.textarea.count},focus:{type:Boolean,default:uni.$u.props.textarea.focus},autoHeight:{type:Boolean,default:uni.$u.props.textarea.autoHeight},fixed:{type:Boolean,default:uni.$u.props.textarea.fixed},cursorSpacing:{type:Number,default:uni.$u.props.textarea.cursorSpacing},cursor:{type:[String,Number],default:uni.$u.props.textarea.cursor},showConfirmBar:{type:Boolean,default:uni.$u.props.textarea.showConfirmBar},selectionStart:{type:Number,default:uni.$u.props.textarea.selectionStart},selectionEnd:{type:Number,default:uni.$u.props.textarea.selectionEnd},adjustPosition:{type:Boolean,default:uni.$u.props.textarea.adjustPosition},disableDefaultPadding:{type:Boolean,default:uni.$u.props.textarea.disableDefaultPadding},holdKeyboard:{type:Boolean,default:uni.$u.props.textarea.holdKeyboard},maxlength:{type:[String,Number],default:uni.$u.props.textarea.maxlength},border:{type:String,default:uni.$u.props.textarea.border},formatter:{type:[Function,null],default:uni.$u.props.textarea.formatter},ignoreCompositionEvent:{type:Boolean,default:!0}}};t.default=a},"78be":function(e,t,n){"use strict";n.r(t);var a=n("384e1"),i=n("dd8e");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("0adb");var r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"23937214",null,!1,a["a"],void 0);t["default"]=u.exports},"7da1":function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"u-textarea",class:e.textareaClass,style:[e.textareaStyle]},[n("v-uni-textarea",{staticClass:"u-textarea__field",style:{height:e.$u.addUnit(e.height)},attrs:{value:e.innerValue,placeholder:e.placeholder,"placeholder-style":e.$u.addStyle(e.placeholderStyle,"string"),"placeholder-class":e.placeholderClass,disabled:e.disabled,focus:e.focus,autoHeight:e.autoHeight,fixed:e.fixed,cursorSpacing:e.cursorSpacing,cursor:e.cursor,showConfirmBar:e.showConfirmBar,selectionStart:e.selectionStart,selectionEnd:e.selectionEnd,adjustPosition:e.adjustPosition,disableDefaultPadding:e.disableDefaultPadding,holdKeyboard:e.holdKeyboard,maxlength:e.maxlength,confirmType:e.confirmType,ignoreCompositionEvent:e.ignoreCompositionEvent},on:{focus:function(t){arguments[0]=t=e.$handleEvent(t),e.onFocus.apply(void 0,arguments)},blur:function(t){arguments[0]=t=e.$handleEvent(t),e.onBlur.apply(void 0,arguments)},linechange:function(t){arguments[0]=t=e.$handleEvent(t),e.onLinechange.apply(void 0,arguments)},input:function(t){arguments[0]=t=e.$handleEvent(t),e.onInput.apply(void 0,arguments)},confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.onConfirm.apply(void 0,arguments)},keyboardheightchange:function(t){arguments[0]=t=e.$handleEvent(t),e.onKeyboardheightchange.apply(void 0,arguments)}}}),e.count?n("v-uni-text",{staticClass:"u-textarea__count",style:{"background-color":e.disabled?"transparent":"#fff"}},[e._v(e._s(e.innerValue.length)+"/"+e._s(e.maxlength))]):e._e()],1)},i=[]},b011:function(e,t,n){"use strict";n.r(t);var a=n("243c"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},bb32:function(e,t,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("99af"),n("14d9");var i=a(n("76f0")),o={name:"u-textarea",mixins:[uni.$u.mpMixin,uni.$u.mixin,i.default],data:function(){return{innerValue:"",focused:!1,firstChange:!0,changeFromInner:!1,innerFormatter:function(e){return e}}},watch:{value:{immediate:!0,handler:function(e,t){this.innerValue=e,!1===this.firstChange&&!1===this.changeFromInner&&this.valueChange(),this.firstChange=!1,this.changeFromInner=!1}}},computed:{textareaClass:function(){var e=[],t=this.border,n=this.disabled;this.shape;return"surround"===t&&(e=e.concat(["u-border","u-textarea--radius"])),"bottom"===t&&(e=e.concat(["u-border-bottom","u-textarea--no-radius"])),n&&e.push("u-textarea--disabled"),e.join(" ")},textareaStyle:function(){return uni.$u.deepMerge({},uni.$u.addStyle(this.customStyle))}},methods:{setFormatter:function(e){this.innerFormatter=e},onFocus:function(e){this.$emit("focus",e)},onBlur:function(e){this.$emit("blur",e),uni.$u.formValidate(this,"blur")},onLinechange:function(e){this.$emit("linechange",e)},onInput:function(e){var t=this,n=e.detail||{},a=n.value,i=void 0===a?"":a,o=this.formatter||this.innerFormatter,r=o(i);this.innerValue=i,this.$nextTick((function(){t.innerValue=r,t.valueChange()}))},valueChange:function(){var e=this,t=this.innerValue;this.$nextTick((function(){e.$emit("input",t),e.changeFromInner=!0,e.$emit("change",t),uni.$u.formValidate(e,"change")}))},onConfirm:function(e){this.$emit("confirm",e)},onKeyboardheightchange:function(e){this.$emit("keyboardheightchange",e)}}};t.default=o},bd6b:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".voice_cont[data-v-23937214]{background:#fff}.bottom[data-v-23937214]{width:100%;background:#fff;position:fixed;bottom:0}.bottom_cont[data-v-23937214]{display:flex;justify-content:center;flex-direction:column;padding-bottom:%?25?%}.bottom_buy[data-v-23937214]{width:90%;height:%?80?%;background:#1f64ff;border-radius:6px;font-style:normal;font-weight:500;font-size:14px;line-height:20px;color:#fff;display:flex;justify-content:center;align-items:center;margin:%?20?% auto 0}.voice_title[data-v-23937214]{color:#333;text-align:center;font-size:%?26?%;font-style:normal;font-weight:530;line-height:%?60?%;text-align:left}",""]),e.exports=t},d072:function(e,t,n){"use strict";n.r(t);var a=n("4b38"),i=n("b011");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);t["default"]=u.exports},d338:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d3b7"),n("159b");var a=n("2d63"),i={data:function(){return{stResult:"",messageTitle:"",timer:0,voice_url:"",recordTime:0,file_type:1,isClick:!0}},components:{},onLoad:function(e){var t=e.task_id;this.voice_url=e.voice_url,this.file_type=e.file_type,this.getResult(t),this.getTime()},onShow:function(){},methods:{getTime:function(){var e=new Date,t=e.getFullYear(),n=e.getMonth()+1,a=e.getDate(),i=n>9?n:"0"+n,o=a<10?"0"+a:a;this.messageTitle=t+"年"+i+"月"+o+"记录"},getResult:function(e){var t=this,n={task_id:e},i=this;uni.showLoading({title:"识别中..."}),i.timer=setInterval((function(){(0,a.getFile)(n).then((function(e){if(2e4==e.code)if("21050000"==e.data.StatusCode){clearInterval(i.timer);var n=e.data.Result.Sentences;n.forEach((function(e){i.stResult+=e.Text})),t.recordTime=e.data.BizDuration,uni.hideLoading(),i.$api.msg("识别完成")}else"21050000"==e.data.StatusCode||"21050000"==e.data.StatusCode||(clearInterval(i.timer),uni.hideLoading(),i.$api.msg("识别失败"));else clearInterval(i.timer),uni.hideLoading(),i.$api.msg(e.msg)})).catch((function(e){clearInterval(i.timer),uni.hideLoading(),i.$api.msg("获取结果失败")}))}),5e3)},save:function(){var e=this,t=Math.floor(this.recordTime/1e3),n={title:this.messageTitle,audio_url:this.voice_url,speech_text:this.stResult,r_status:2,r_type:2,biz_duration:t,file_type:this.file_type};this.isClick&&(this.isClick=!1,(0,a.saveRecord)(n).then((function(t){if(2e4==t.code){e.$api.msg("保存成功"),setTimeout((function(){uni.redirectTo({url:"/childPage/voice/voice_index"})}),1500),e.isClick=!0;var n={type_name:"录音文件",type_code:"real_file",title:t.data.title,eid:t.data.speech_code};e.saveFootprint(n)}else e.isClick=!0,e.$api.msg(t.msg)})).catch((function(t){e.isClick=!0,e.$api.msg("保存失败")})))},saveFootprint:function(e){var t=this;(0,a.saveFootprint)(e).then((function(e){2e4==e.code||t.$api.msg(e.msg)})).catch((function(e){t.$api.msg("保存失败！")}))}}};t.default=i},dd8e:function(e,t,n){"use strict";n.r(t);var a=n("d338"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},e3f8:function(e,t,n){"use strict";n.r(t);var a=n("bb32"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},e652:function(e,t,n){"use strict";var a=n("673f"),i=n.n(a);i.a},fa78:function(e,t,n){var a=n("bd6b");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("3595e295",a,!0,{sourceMap:!1,shadowMode:!1})},fede:function(e,t,n){"use strict";n.r(t);var a=n("7da1"),i=n("e3f8");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("e652");var r=n("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"1ba40ab6",null,!1,a["a"],void 0);t["default"]=u.exports}}]);