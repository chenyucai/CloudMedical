/**
 * Created by leung on 2016/12/23.
 */

import {AsyncStorage} from 'react-native';

function BaseParamsCustId(callback, nav) {
	AsyncStorage.getItem("customerId", (err, res)=> {
		var params = {};
		if (err) {
			AsyncStorage.clear();
			//需要重新登录
			if (nav != null)
				nav.push({
					id: 'UserLogin'
				});
			else {
				params = {
					...params,
					customerId: "",
				}
				callback(params);
			}
		} else {
			if (res != null) {
				res = res.replace(/^\"|\"$/g, '');
				params = {
					...params,
					customerId: res,
				}
				callback(params);
			} else {
				AsyncStorage.clear();
				//需要重新登录
				if (nav != null)
					nav.push({
						id: 'UserLogin'
					});
			}
		}
	});
}
export default BaseParamsCustId;