/**
 * Created by leung on 2016/11/3.
 */

/**
 * 公共网络响应处理
 */
import {AsyncStorage} from 'react-native';
import BaseError from './BaseError';
const BaseCallback = {
    callback(response){
        console.log("----fecth response---" + JSON.stringify(response));

        // //登陆过期
        // if (response.ret == '20002') {
        //     AsyncStorage.clear();
        //     GOBAL_CURRENT_NAVS().resetTo({id: 'UserLogin'});
        // }
        //
        // if (response.ret != "0") {
        //     BaseError.errorByResponse(response);
        //     return null;
        // }
        return response;
    }
}
export default BaseCallback;