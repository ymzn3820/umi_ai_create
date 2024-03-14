import {JsomPost} from './util.js'
// 获取消息列表
export function getapplication(data) {
	return JsomPost( {
		url:global.memberUrl+'/pay/message_center/',
		data:data
	})
}
// 获取列表详情
export function getapplicationContent(data) {
	return JsomPost( {
		url:global.memberUrl+'/pay/message_center_content/',
		data:data
	})
}
