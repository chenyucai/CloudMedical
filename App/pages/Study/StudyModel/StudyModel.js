/**
 * Created by chenYc on 2017/4/15.
 * 专门用来写请求的
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
    getSearchColumn(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.GetSearchColumn, FetchUtil.toQueryString(params), response, error);
    },
    getListDetialColumn(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.GetListDetial, FetchUtil.toQueryString(params), response, error);
    },
    /**
     * 获取药圈模块
     */
    getMedicineMenu(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.GetMedicineMenu, FetchUtil.toQueryString(params), response, error);
    },
    /**
     * 获取新闻列表
     */
    getNewsList(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.GetNewsList, FetchUtil.toQueryString(params), response, error);
    },
    /**
     * 获取新闻列表
     */
    getListNews(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.getListNews, FetchUtil.toQueryString(params), response, error);
    },
    /**
     * 获取新闻详情
     */
    getNewsDetail(pa, response, error){
        var	params = {
            ...pa,
        };
        FetchUtil.fetchPostJson(ApiConst.Versions().BaseUrl + ApiInterface.GetNewsDetail, FetchUtil.toQueryString(params), response, error);
    },
};
export default Model;
