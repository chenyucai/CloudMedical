/**
 * Created by leung on 2016/9/27.
 */
// import MyDialog from '../../BaseView/Dialog/MyDialog';
import BaseError from './BaseError';
import BaseCallback from './BaseCallback';
import {Platform, ToastAndroid} from 'react-native';
import LoadingUtil from '../Loading/LoadingUtil';
import md5 from '../../utils/Encryption/Md5';
var TimerMixin = require('react-timer-mixin');
import {NativeModules} from 'react-native';
mixins:[TimerMixin];
/**
 * 设置超时时间
 * 秒
 */
const TIME_OUT = 15;
const secret = 'kLnANE';

/**
 * 主要使用是 fetchPostJson方法，其他方法处理得比较简单
 * 平时测试接口时，可抓包或可使用fetchPostText方法查看返回数据的全文
 * */
let FetchUtil = {
	/**
	 * 转换参数
	 */
	toQueryString(obj){
		//    encodeURIComponent(key)
		return obj ? Object.keys(obj).sort().map((key)=> {
			var val = obj[key];
			if (Array.isArray(val)) {
				return val.sort().map(function (val2) {
					return key + '=' + val2;
				}).join('&');
			}
			return key + '=' + val;
		}).join('&') : '';
	},
	/**
	 * 加密参数
	 *
	 */
	signParam(param) {
		var array = new Array();
		for (var p in param) {
			if (p != "sign") {
				array.push(p);
			}
		}
		var keys = array.sort();
		//console.log("*********sort",array.sort());
		var signString = secret;
		for (var i = 0; i < keys.length; i++) {
			signString += (keys[i] + param[keys[i]]);
		}
		signString += secret;
		param["sign"] = md5.hex_md5(signString);
		return param;
	},
	/**
	 * GET
	 * 参数 - URL上
	 * 返回 - String
	 */
	fetchGetText(url, callback, err)
	{
		fetch(
			url,
			{
				method: 'GET',
			}
		).then((response) => {
				if (response.ok)
					return response.text();
				else
					err("error");
			}
		).then((responseText)=> {
			callback(responseText)
		}).catch((error)=> {
			err(error);
		}).done();
		;
	},
	/**
	 * GET
	 * 参数 - URL上
	 * 返回 - Json
	 */
	fetchGetJson(url, callback, err) {
		fetch(
			url,
			{
				method: 'GET',
				headers: {
					'Accept': 'application/json',
				},
			}
		).then((response) => {
				if (response.ok)
					return response.json();
				else
					err("error");
			}
		).then((responseJson) => {
			callback(responseJson);
		}).catch((error) => {
			err(error);
		}).done();
	},
	/**
	 * POST
	 * 参数 - FormData
	 * 返回 - String
	 */
	fetchPostText(url, params, callback, err)
	{
		console.log("----fetchPostText---" + params);
		fetch(
			url,
			{
				method: 'POST',
				headers: {
					'Accept': '*/*',
					'encoding': 'UTF-8',
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: params
			}
		).then((response) => {
				if (response.ok)
					return response.text();
				else
					console.log("err");
			}
		).then((responseText) => {
			callback(responseText);
		}).catch((error)=> {
			err(error);
			console.log("err" + error);
		}).done();
	},
	/**
	 * 主要使用
	 * POST
	 * 参数 - FormData
	 * 返回 - Json
	 */
	loadingTitle: "加载中",
	fetchPostJson(url, params, callback, err) {
		var isDealing = false;
		setTimeout(()=> {
			if (!isDealing) {
				isDealing = true;
				var msg = "网络超时";
				LoadingUtil.dissmiss();
				err && err(msg);
				LoadingUtil.showInfoMessage(msg);
			}
		}, TIME_OUT * 1000);
		console.log("----fecth url---" + url);
		console.log("----fetch params---" + params);
		if (FetchUtil.loadingTitle != 'undefined') {
			LoadingUtil.showLoading(FetchUtil.loadingTitle);
		}
		fetch(
			url,
			{
				method: 'POST',
				headers: {
					'Accept': '*/*',
					'encoding': 'UTF-8',
					'Content-Type': 'application/x-www-form-urlencoded'
				},
				body: params
			}
		).then((response) => {
			LoadingUtil.dissmiss();
			if (!isDealing) {
				isDealing = true;
				if (response.ok) {
					return response.json();
				} else {
					err && err(9999);
					BaseError.errorByNetwork();
				}
			}
            console.log("----fecth response---" + JSON.stringify(response));
		}).then((responseJson) => {
            console.log("----fecth response---" + JSON.stringify(responseJson));
			if (responseJson != null){
				callback(responseJson);
			}else{
				err && err(9999);
			}
		}).catch((error) => {
			if (!isDealing) {
				isDealing = true;
				LoadingUtil.dissmiss();
				BaseError.errorByNetwork();
				// err && err(error);
			}
			err && err(error);
			console.log("----fetch error---" + error);
		});
		FetchUtil.loadingTitle = "加载中";
	},
	/**
	 * POST
	 * 参数 - Json
	 * 返回 - String
	 */
	fetchJsonPostText(url, params, callback, err) {
		console.log("----fetchJsonPostText---" + JSON.stringify(params));
		fetch(
			url,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(params)
			}
		).then((response) => {
			if (response.ok)
				return response.text();
			else
				err("error");
		}).then((responseText) => {
			callback(responseText);
		}).catch((error) => {
			err(error);
		}).done();
	},
	/**
	 * POST
	 * 参数 - Json
	 * 返回 - Json
	 */
	fetchJsonPostJson(url, params, callback, err) {
		console.log("----fetchJsonPostJson---" + JSON.stringify(params));
		fetch(
			url,
			{
				method: 'POST',
				headers: {
					'Accept': '*/*',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(params)
			}
		).then((response) => {
			if (response.ok)
				return response.json();
			else
				err("error");
		}).then((responseJson) => {
			callback(responseJson);
		}).catch((error) => {
			err(error);
		});
	},

	/**
	 * 上传图片
	 */
	upLoadPhoto(params, callback){
		if (Platform.OS == 'android') {
			NativeModules.UploadImg.uploadImg(params, callback);
		} else {
		}
	}
};
export default FetchUtil;
