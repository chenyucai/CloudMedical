/**
 * 对话框工具类
 *
 * 需要MyDialog.js提供原生接口支持
 * Dialog
 *  显示showLoading
 *  消失dissmiss
 * Toast
 *  显示showInfoMessage
 */

import {
    Platform,
} from 'react-native';
import MyDialog from '../../BaseView/Dialog/MyDialog';

let LoadingUtil = {
    //Loading显示
    showLoading(message) {
        MyDialog.showMyDialogProgress({title: message});
    },
    //Loading消失
    dissmiss() {
        MyDialog.cancelMyDialog();
    },
    //Toast消息
    showInfoMessage(message) {
        MyDialog.showText(message);
    },
};

module.exports = LoadingUtil;
