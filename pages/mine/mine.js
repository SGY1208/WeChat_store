// pages/mine/mine.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{}
  },
  //跳转至全部订单页面
  goToAllList:function(currentType){
    wx.navigateTo({
      url:'/pages/order/order?currentType=0',
    })
  },

  //跳转至待支付页面
  goToPaying: function (currentType) {
    wx.navigateTo({
      url: '/pages/order/order?currentType=1',
    })
  },

  //跳转至待取货页面
  goToGetting: function (currentType) {
    wx. navigateTo({
      url: '/pages/order/order?currentType=2',
    })
  },

  //跳转至个人设置页面
  goToSetting: function (currentType) {
    wx. navigateTo({
      url: '/pages/setting/setting',
    })
  },

  //跳转至关于我们页面
  goToMine: function (currentType) {
    wx. navigateTo({
      url: '/pages/my/my',
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.getUserInfo) {
      this.setData({
        userInfo: app.globalData.getUserInfo
      })
    }else{
      var that = this;
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          that.setData({
            userInfo:res.userInfo,
            hasUserInfo:true
          })
          }
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