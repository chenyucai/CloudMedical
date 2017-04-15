let ParseJSON_Safe_Util = {
	parseJSON_Safe(data, params){
		var source:'';
		source = data;
		try {
			for (var i = 0; i < params.length; i++) {
				source = source[params[i]];
			}
			if (!source) {
				source = "";
			}
		} catch (e) {
			source = "";
		}
		return source;
	},
	parseJSON_Safe_withDefaultValue(data, params, defaultValue){
		var source:'';
		source = data;
		try {
			for (var i = 0; i < params.length; i++) {
				source = source[params[i]];
			}
			if (!source) {
				source = defaultValue;
			}
		} catch (e) {
			source = defaultValue;
		}
		return source;
	}
}
export default ParseJSON_Safe_Util;