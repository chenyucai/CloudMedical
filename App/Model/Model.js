/**
 * Created by chenYc on 2017/4/15.
 * 专门用来写请求的
 */

import FetchUtil from '../Base/Network/FetchUtil';
import ApiConst from '../Base/Urls/ApiConst';
import ApiInterface from '../Base/Urls/ApiInterface';

let Model = {
    /**
     * 同一获取接口1
     */
    FindInfoList(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.FindInfoList, FetchUtil.toQueryString(params), response, error);
    },
    /**
     * 同一获取接口2
     */
    FindUpdateInfo(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.FindUpdateInfo, FetchUtil.toQueryString(params), response, error);
    },

    /**
     * 获取随机练习
     */
    getRandomTest(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.getRandomTest, FetchUtil.toQueryString(params), response, error);
    },
};
export default Model;
