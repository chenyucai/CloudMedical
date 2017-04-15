/**
 * Created by leung on 2016/10/10.
 */
import {
    Platform,
    NativeModules
} from 'react-native';
var CalendarManager = NativeModules.CalendarManager;
let MyDialog = {
    //显示dialog
    showMyDialogProgress(data){
        if (Platform.OS == 'ios') {
            if (CalendarManager) {
                CalendarManager.showLoading(data);
            }
        } else {
            NativeModules.MyDialog.showMyDialogProgress(data);
        }
    },
    // /*
    //  param title:标题
    //  */
    // showMyDialogOnlyTitle(data){
    //     NativeModules.MyDialog.showMyDialogOnlyTitle(data);
    // },
    // /*
    //  param title:标题  desc：内容 callback按钮通过leftBtn = true ,rightBtn = true响应
    //  */
    // showMyDialogTitleBtn(data, callback){
    //     NativeModules.MyDialog.showMyDialogTitleBtn(data, callback);
    // },
    // /*
    //  param title:标题  callback按钮通过leftBtn = true ,rightBtn = true响应
    //  */
    // showMyDialogWithTwoBtn(data, callback){
    //     NativeModules.MyDialog.showMyDialogTitleBtn(data, callback);
    // },
    //隐藏dialog
    cancelMyDialog(){
        if (Platform.OS == 'ios') {
            if (CalendarManager) {
                CalendarManager.dismiss('');
            }
        } else {
            NativeModules.MyDialog.cancel();
        }
    },
    //普通toast
    showText(src){
        if (Platform.OS == 'ios') {
            if (CalendarManager) {
                CalendarManager.showInfo(src);
            }
        } else {
            NativeModules.MyDialog.showText(src);
        }
    },
    //正确信息toast
    showSuccessToast(src){
        if (Platform.OS == 'ios') {
            if (CalendarManager) {
                CalendarManager.showInfo(src);
            }
        } else {
            NativeModules.MyDialog.showSuccessToast(src);
        }

    },
    //错误信息toast
    showErrorToast(src){
        if (Platform.OS == 'ios') {
            if (CalendarManager) {
                CalendarManager.showInfo(src);
            }
        } else {
            NativeModules.MyDialog.showErrorToast(src);
        }

    },

};

export default MyDialog;