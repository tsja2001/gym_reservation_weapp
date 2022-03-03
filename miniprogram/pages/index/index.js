// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderHistoryList: [
      {
        icon: 'icon-yumaoqiu',
        name: '羽毛球',
        color: '#F49837',
        time: '3-10 10:00-12:00',
        place: '7号馆',
      },
      {
        icon: 'icon-yumaoqiu',
        name: '羽毛球',
        color: '#F49837',
        time: '3-10 10:00-12:00',
        place: '7号馆',
      },
      {
        icon: 'icon-pingpangqiu',
        name: '兵乓球',
        color: '#DE2C3F',
        time: '3-10 10:00-12:00',
        place: '1号馆',
      },
      {
        icon: 'icon-lanqiu',
        name: '篮球',
        color: '#0A73FF',
        time: '3-10 10:00-12:00',
        place: '2号馆',
      },
      {
        icon: 'icon-pingpangqiu',
        name: '兵乓球',
        color: '#DE2C3F',
        time: '3-10 10:00-12:00',
        place: '6号馆',
      },
      {
        icon: 'icon-yumaoqiu',
        name: '羽毛球',
        color: '#F49837',
        time: '3-10 10:00-12:00',
        place: '7号馆',
      },
      {
        icon: 'icon-jianshen',
        name: '器械健身',
        color: '#933396',
        time: '3-10 10:00-12:00',
        place: '9号馆',
      },
      {
        icon: 'icon-lanqiu',
        name: '篮球',
        color: '#0A73FF',
        time: '3-10 10:00-12:00',
        place: '2号馆',
      },
      {
        icon: 'icon-pingpangqiu',
        name: '兵乓球',
        color: '#DE2C3F',
        time: '3-10 10:00-12:00',
        place: '6号馆',
      },
      {
        icon: 'icon-yumaoqiu',
        name: '羽毛球',
        color: '#F49837',
        time: '3-10 10:00-12:00',
        place: '7号馆',
      },
      {
        icon: 'icon-yumaoqiu',
        name: '羽毛球',
        color: '#F49837',
        time: '3-10 10:00-12:00',
        place: '7号馆',
      },
      {
        icon: 'icon-jianshen',
        name: '器械健身',
        color: '#933396',
        time: '3-10 10:00-12:00',
        place: '9号馆',
      },
    ],
    displayPointBox: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 关闭提示信息
   */
  closePointHandler() {
    this.setData({
      displayPointBox: {}
    })
  },

  /**
   * 预约须知
   */
  xuzhiHandler() {
    this.setData({
      displayPointBox: {
        display: true,
        title: '预约须知',
        value: '<div>开放时间xxxx</div><div>预约须知xxxx</div>',
      }
    })
  },
  /**
   * 跳转到预约页面
   */
  orderItemHandler(e) {
    var type = e.currentTarget.dataset.type
    wx.navigateTo({
      url: '/pages/order/time/index?type=' + type,
    });
  },

  /**
   * 跳转到预约历史详情
   */
  orderHistoryItemHandler(e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/order/detail/index?id=' + id,
    });
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