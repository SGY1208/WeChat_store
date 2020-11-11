// pages/start/start.js
//获取小程序的实例
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      remind:"加载中",
      userInfo:{},
      canIUse:wx.canIUse("button.open-type.getUserInfo")
  },
  //函数
  goToOnline:function(){
    wx.switchTab({
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //判断
    if (app.globalData.getUserInfo) {
      this.setData({
        userInfo:app.globalData.userInfo
      })
    }else if(this.data.canIUse){
      //由于getUserInfo是网络请求，肯能会出现Page.onLoad之后才返回
      //所以在这个地方添加callback防止这种情况
      app.userInfopReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo
        })
    }
    }else{
      //版本兼容
      wx.getUserInfo({
        success:res=>{
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo :res.userInfo,
            hasUserInfo:true
          })
        }
      })
    }

  },
  //点击按钮获取用户信息
  getUserInfo:function(e){
    //输出
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo
    //如果存在 e.detail.userInfo 就下一个页面（index）
    if(e.detail.userInfo){
      wx.switchTab({
        url: '/pages/index/index',
      })
    }else{
      wx.showModal({
        title: '提示',
        content: '你将无法正常使用小程序',
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})