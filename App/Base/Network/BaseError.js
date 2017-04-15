/**
 * Created by leung on 2016/11/3.
 */
import {Platform, ToastAndroid} from 'react-native';
import LoadingUtil from '../Loading/LoadingUtil';

const err_network = "网络解析错误";

function checkErr(json) {
	var msg = json.msg;
	return msg;
}
/**
 * 输出信息
 * android以toast形式展现
 * ios以alert形式展现
 * @param msg
 */
function showLog(msg) {
	//输出
	// if (Platform.OS == "android")
	// 	ToastAndroid.show(msg, ToastAndroid.SHORT);
	// else
	// 	alert(msg);
    LoadingUtil.showInfoMessage(msg);
}
/**
 * 网络义务数据处理
 */
const BaseError = {
	/**
	 * 网络错误处理
	 */
	errorByNetwork(){
		// if (Platform.OS == "android")
		// 	ToastAndroid.show(err_network, ToastAndroid.SHORT);
		// else
		// 	alert(err_network);
        LoadingUtil.showInfoMessage(err_network);
	},
	/**
	 * 义务信息错误处理
	 */
	errorByResponse(json){
		if (json != null) {
			showLog(checkErr(json));
		}
	},
}
export default BaseError;