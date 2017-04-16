/**
 * 个人中心请求
 */

import FetchUtil from '../../../Base/Network/FetchUtil';
import ApiConst from '../../../Base/Urls/ApiConst';
import ApiInterface from '../../../Base/Urls/ApiInterface';

let Model = {
    // getInfoList(pa, response, error){
    //     var	params = {
    //         ...pa,
    //     };
    //     FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.GetInfoList, FetchUtil.toQueryString(params), response, error);
    // },
    GetPersonCenter(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.GetPersonCenter, FetchUtil.toQueryString(params), response, error);
    },
    getInfoList(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.GetInfoList, FetchUtil.toQueryString(params), response, error);
    },
};
export default Model;
