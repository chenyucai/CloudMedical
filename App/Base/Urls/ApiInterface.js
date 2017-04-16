/**
 * 接口信息，每个功能要注释
 */
let ApiInterface = {
  // 登陆
  UserLogin: '/Cloudm/pub/admin/login1.do',
  // 注册
  UserRegister: '/Cloudm/pub/admin/registerUser.do',
  GetCode: '/Cloudm/pub/admin/information/Infohtml/sendmessage.do',
  UpdatePsw: '/jlJavaPlat/pub/admin/information/Infohtml/resetpassword.do',
  FindPsw: '/jlJavaPlat/pub/admin/information/Infohtml/selectpassword.do',

  // 获取广告、获取快捷菜单下的列表、我的收藏
  GetInfoList: '/Cloudm/pub/admin/information/Infohtml/findInfoList.do',

  //获取快捷菜单
  GetSearchColumn: '/Cloudm/pub/admin/column/manageColumn/searchColumn.do',

  //快捷菜单下的列表详情
  GetListDetial: '/Cloudm/pub/admin/information/Infohtml/findUpdateInfo.do',

  //获取个人中心
  GetPersonCenter: "/Cloudm/pub/admin/information/Infohtml/findUpdateInfo.do",

  //获取药圈菜单
  GetMedicineMenu: "/Cloudm/pub/admin/column/manageColumn/searchColumn.do",

  // 获取新闻资讯列表
  GetNewsList: "/Cloudm/pub/admin/information/Infohtml/findInfoList.do",

  // 新闻详情
  GetNewsDetail: '/Cloudm/pub/admin/information/Infohtml/findUpdateInfo.do',

};
export default ApiInterface;
