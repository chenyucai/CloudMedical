/**
 * Created by chenYc on 2017/4/15.
 */

import FetchUtil from '../../../Base/Network/FetchUtil';
import ApiConst from '../../../Base/Urls/ApiConst';
import ApiInterface from '../../../Base/Urls/ApiInterface';

let Model = {
    getInfoList(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.GetInfoList, FetchUtil.toQueryString(params), response, error);
    },
    getCode(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.GetCode, FetchUtil.toQueryString(params), response, error);
    },
    UserRegister(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.UserRegister, FetchUtil.toQueryString(params), response, error);
    },
    updatePsw(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.UpdatePsw, FetchUtil.toQueryString(params), response, error);
    },
    findPsw(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.UpdatePsw, FetchUtil.toQueryString(params), response, error);
    },
};
export default Model;
