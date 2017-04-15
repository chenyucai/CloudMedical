/**
 * 接口信息，每个功能要注释
 */
let ApiInterface = {
    UserLogin: '/jlJavaPlat/pub/admin/information/Infohtml/jllogin.do',
    GetCode: '/jlJavaPlat/pub/admin/information/Infohtml/sendmessage.do',
    UpdatePsw: '/jlJavaPlat/pub/admin/information/Infohtml/resetpassword.do',
    FindPsw: '/jlJavaPlat/pub/admin/information/Infohtml/selectpassword.do',
    //通知公告列表
    GetLearningPlatformList: '/jlJavaPlat/pub/admin/information/Infohtml/findInfoList.do',
    //通知公告详情
    GetLearningPlatformDetail: '/jlJavaPlat/pub/admin/information/Infohtml/findUpdateInfo.do',
    //生产计划列表
    GetProPlanList: '/jlJavaPlat/pub/admin/information/Infohtml/findInfoList.do',
    //生产计划详情
    GetProPlanDetail: '/jlJavaPlat/pub/admin/information/Infohtml/findUpdateInfo.do',
    //出货统计列表
    GetShipmentStatisticsList: '/jlJavaPlat/pub/admin/information/Infohtml/selectshiplist.do',
    //追踪订单；列表页
    GetOrderTrackingList: '/jlJavaPlat/pub/admin/information/Infohtml/selectorderlist.do',
    //获取纸厂列表
    GetPaperInfoList: '/jlJavaPlat/pub/admin/information/Infohtml/findInfoList.do',
    //前台查询基地下的片区列表接口
    GetSelectpianqu: '/jlJavaPlat/pub/admin/information/Infohtml/selectpianqu.do',

    //获取个人信息
    GetPersonalInfo: '/jlJavaPlat/pub/admin/information/Infohtml/findUpdateInfo.do',

    //销售统计
    SelectUidTarget: '/jlJavaPlat/pub/admin/information/Infohtml/selectuidtarget.do',

    GetSelectpianqu:'/jlJavaPlat/pub/admin/information/Infohtml/selectpianqu.do',
    //修改纸厂信息
    UpdatePaperInfo:'/jlJavaPlat/pub/admin/information/Infohtml/operateInfo.do',
    //取年月的实际销售量
    GetYear:'/jlJavaPlat/pub/admin/information/Infohtml/selectuidtrue.do',
    //获取联系人列表
    GetLinkManList:'/jlJavaPlat/pub/admin/information/Infohtml/findInfoList.do',
    //添加客户
    AddClient:'/jlJavaPlat/pub/admin/information/Infohtml/operateInfo.do',
    //客户列表
    clientList:'/jlJavaPlat/pub/admin/information/Infohtml/findInfoList.do',
    //  1.3.3查找客户信息接口
    clientInfo:'/jlJavaPlat/pub/admin/information/Infohtml/findUpdateInfo.do',
    //获取品牌列表
    GetBrandList:'/jlJavaPlat/pub/admin/information/Infohtml/findInfoList.do',
    //增加/修改品牌接口
    AddOrUpdateBrand:'/jlJavaPlat/pub/admin/information/Infohtml/operateInfo.do',
    //查找纸机列表
    GetMachineList:'/jlJavaPlat/pub/admin/information/Infohtml/findInfoList.do',
    //查找纸机详情
    GetMachineDetail:'/jlJavaPlat/pub/admin/information/Infohtml/findUpdateInfo.do',
    //增加或修改纸机
    AddOrUpdateMachine:'/jlJavaPlat/pub/admin/information/Infohtml/operateInfo.do',
    //删除纸机
    DelMachine:'/jlJavaPlat/pub/admin/information/Infohtml/deleteInfo.do',
    // 1.4.2查找联系人列表接口
    LinkManList:'/jlJavaPlat/pub/admin/information/Infohtml/findInfoList.do',
    //添加或修改联系人
    AddLinkMan:'/jlJavaPlat/pub/admin/information/Infohtml/operateInfo.do',
    //1.5.1.1增加/修改拜访签到接口
    VisitSign:'/jlJavaPlat/pub/admin/information/Infohtml/operateInfo.do',

};
export default ApiInterface;
