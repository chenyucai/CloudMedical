/**
 * Created by chenYc on 2017/4/15.
 */

import FetchUtil from '../../../Base/Network/FetchUtil';
import ApiConst from '../../../Base/Urls/ApiConst';
import ApiInterface from '../../../Base/Urls/ApiInterface';

let LoginModel = {
    userLogin(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.UserLogin, FetchUtil.toQueryString(params), response, error);
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
    contrastVerity(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.ContrastVerity, FetchUtil.toQueryString(params), response, error);
    },
    retPassWord(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.RetPassWord, FetchUtil.toQueryString(params), response, error);
    },
    getUserId(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.GetInfoList, FetchUtil.toQueryString(params), response, error);
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
export default LoginModel;
