// pages/order/time/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 当前选中的日期
    currentSelectDate: {},
    // 可选校区
    xiaoqu: [
      {
        name: '旅顺口校区'
      },
      {
        name: '沙河口校区'
      },
    ],
    // 当前选中
    pickerSelectIndex: 0,
    // 可选时间
    timeList: [
      {
        time: '10:00-11:00',
        able: true
      },
      {
        time: '11:00-12:00',
        able: true
      },
      {
        time: '12:00-13:00',
        able: true
      },
      {
        time: '13:00-14:00',
        able: true
      },
      {
        time: '14:00-14:00',
        able: true
      },
      {
        time: '15:00-16:00',
        able: false
      },
      {
        time: '16:00-17:00',
        able: true
      },
      {
        time: '17:00-18:00',
        able: true
      },
      {
        time: '18:00-19:00',
        able: true
      },
      {
        time: '19:00-20:00',
        able: false
      },
    ],
    // 运动类型
    sportType: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      sportType: options.type
    })

    wx.setNavigationBarTitle({
      title: options.type + '预约'
    });
  },

  /**
   * picker
   */
  pickerHandler(e) {
    this.setData({
      pickerSelectIndex: e.detail.value
    })
  },

  /**
   * 接受日期选择回掉
   */
  dateHandler(e) {
    this.setData({
      currentSelectDate: e.detail
    })
  },

  /**
   * 点击时间
   */
  timeItemHandler(e) {
    var index = e.currentTarget.dataset.index

    wx.navigateTo({
      url: '/pages/order/area/index',
      success: (result) => {

      },
      fail: () => { },
      complete: () => { }
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