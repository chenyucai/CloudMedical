/**
 * Created by leung on 2016/10/18.
 */

/**
 带上sessionkey和uid的参数
 */

import {AsyncStorage} from 'react-native';
const APP_KEY = "S00101";
function BaseParamsUtilWithUid(callback) {
	AsyncStorage.multiGet(["uid", "sessionKey"], (err, res)=> {
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
				params = {
					...params,
					sessionKey: "",
					uid: "",
				};
				callback(params);
			} else {
				for (var i in res) {
					if (res[i][0] == 'uid') {
						if (res[i][1] != null) {
							var str = res[i][1].replace(/^\"|\"$/g, '');
							params = {
								...params,
								uid: str,
							}
						}
					} else if (res[i][0] == 'sessionKey') {
						if (res[i][1] != null) {
							var str = res[i][1].replace(/^\"|\"$/g, '');
							params = {
								...params,
								sessionKey: str,
							}
						}
					}
				}
				if (!params.hasOwnProperty('uid')) {
					params = {
						...params,
						uid: "",
					}
				}
				if (!params.hasOwnProperty('sessionKey')) {
					params = {
						...params,
						sessionKey: "",
					}
				}
				callback(params);
			}
		}
	);
}

export default BaseParamsUtilWithUid;