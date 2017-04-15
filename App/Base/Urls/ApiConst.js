/**
 * Created by leung on 2016/9/29.
 */

const DEVELOP = 1; // 开发版
const TEST = 2; // 测试版
const PRODUCT = 3; // 生产版
/**
 *    这里是服务器版本切换，下面是开发版，
 *    切换到测试版 var developeType = TEST;
 */
var developeType = DEVELOP;
let ApiConst = {
	DEVELOP: {
		/**
		 * 网址都写在这里,如下
		 */
        BaseUrl: "http://english.xuexicheng.cn",
		ImageBaseUrl:"http://english.xuexicheng.cn/jlJavaPlat/pub/admin/upload/"
	},
	TEST: {
		/**
		 * 网址都写在这里,如下
		 */
        BaseUrl: "http://channeltest.sunaw.com:35",
	},
	PRODUCT: {
		/**
		 * 网址都写在这里,如下
		 */
		// BaseUrl: "http://www.sunaw.com/product",
	},

	Versions()
	{
		switch (developeType) {
			case DEVELOP:
				return ApiConst.DEVELOP;
			case TEST:
				return ApiConst.TEST;
			case PRODUCT:
				return ApiConst.PRODUCT;
		}
	}
};

export default ApiConst;
