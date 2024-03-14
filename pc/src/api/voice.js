import { loginreq, req, jsonreq, picturess } from './axiosFun';
import httpUrls from './requestURL'
let {httpUrl, memberUrl, loginUrl} = httpUrls;

//获取引擎
export const getEngine = (params) => {
  return jsonreq('get', httpUrl + 'api/sv_voice/get_speech_engine?'+params)
}

// 获取音色
export const getTimbre = (params) => {
  return jsonreq('get', httpUrl + 'api/sv_voice/get_speech_voice?' + params)
}
//合成历史
export const getVoiceHistory = (params) => {
  return jsonreq('get', httpUrl + 'api/sv_voice/text_to_speech?' + params)
}
//语音合成
export const voiceSynthesis = (data) => {
  return jsonreq('post', httpUrl + 'api/sv_voice/text_to_speech', data)
}
//语音合成结果查询
export const getVoiceResult = (params) => {
  return jsonreq('get', httpUrl + 'api/sv_voice/get_speech_result?' + params)
}
//语音合成详情
export const getVoiceDetail = (params) => {
  return jsonreq('get', httpUrl + 'api/sv_voice/text_to_speech/' + params)
}
//语音合成详情
export const deleteVoiceDetail = (params) => {
  return jsonreq('delete', httpUrl + 'api/sv_voice/text_to_speech/' + params)
}
