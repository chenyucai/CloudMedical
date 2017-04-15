/**
 * 接口信息，每个功能要注释
 */
let ApiInterface = {
  // 登陆
  UserLogin: '/Cloudm/pub/admin/login1.do',
  UserRegister: '/Cloudm/pub/admin/registerUser.do',
  GetCode: '/Cloudm/pub/admin/information/Infohtml/sendmessage.do',
  UpdatePsw: '/jlJavaPlat/pub/admin/information/Infohtml/resetpassword.do',
  FindPsw: '/jlJavaPlat/pub/admin/information/Infohtml/selectpassword.do',

  // 获取广告
  GetInfoList: '/Cloudm/pub/admin/information/Infohtml/findInfoList.do',

};
export default ApiInterface;
