/**
 * Created by leung on 2016/10/18.
 */

/**
 ----用法事例----
 BaseParamsUtil((params)=> {
	//通过回调拿到公共参数，操作你的网络请求
	//如果需要调用原生，把params.sessionKey传给原生
 },nav)

 -----nav------参数是个路由，用于处理登录sessionkey获取异常的状态

 */

import {AsyncStorage} from 'react-native';
const APP_KEY = "S00101";
function BaseParamsUtil(callback, nav) {
	AsyncStorage.getItem("sessionKey", (err, res)=> {
		var params = {
			appKey: APP_KEY,
			// sessionKey: "d4cf1408655bdcaf8aa767b57fb933ee",
			signMethod: "01",
			timestamp: parseInt(new Date().getTime() / 100),
			version: "1.0",
			sign: "",
			format: 'json'
		}
		if (err) {
			AsyncStorage.clear();
			//需要重新登录
			// GOBAL_CURRENT_NAVS().immediatelyResetRouteStack([{id: 'IndexPageNew'}, {id: 'LoginWithPsw'}])
			if (nav != null)
				nav.push({
					id: 'UserLogin'
				});
			else {
				params = {
					...params,
					sessionKey: "",
				}
				callback(params);
			}
		} else {
			if (res != null) {
				res = res.replace(/^\"|\"$/g, '');
				params = {
					...params,
					sessionKey: res,
				}
				callback(params);
			} else {
				AsyncStorage.clear();
				//需要重新登录
				if (nav != null){
					nav.push({
						id: 'UserLogin'
					});
				} else {
					params = {
						...params,
						sessionKey: "",
					}
					callback(params);
				}
				// if (GOBAL_CURRENT_NAVS().getCurrentRoutes().length == 1
				// 	&& GOBAL_CURRENT_NAVS().getCurrentRoutes()[0].id == 'IndexPageNew') {
				// 	params = {
				// 		...params,
				// 		sessionKey: "",
				// 	}
				// 	callback(params);
				// } else if (GOBAL_CURRENT_NAVS().getCurrentRoutes().length == 2
				// 	&& GOBAL_CURRENT_NAVS().getCurrentRoutes()[0].id == 'IndexPageNew'
				// 	&& GOBAL_CURRENT_NAVS().getCurrentRoutes()[1].id.indexOf('LoginWith') >= 0) {
				// 	params = {
				// 		...params,
				// 		sessionKey: "",
				// 	}
				// 	callback(params);
				// }
				// else {
				// 	GOBAL_CURRENT_NAVS().immediatelyResetRouteStack([{id: 'IndexPageNew'}, {id: 'LoginWithPsw'}])
				// }
			}
		}
	});
}

export default BaseParamsUtil;