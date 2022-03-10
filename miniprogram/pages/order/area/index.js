// pages/order/area/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 可选场地
    placeList: [
      {
        place: '场地1',
        able: true
      },
      {
        place: '场地2',
        able: true
      },
      {
        place: '场地3',
        able: false
      },
      {
        place: '场地4',
        able: true
      },
      {
        place: '场地5',
        able: true
      },
      {
        place: '场地6',
        able: true
      },
      {
        place: '场地7',
        able: false
      },
      {
        place: '场地8',
        able: false
      },
      {
        place: '场地9',
        able: false
      },
      {
        place: '场地10',
        able: false
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 预约地点
   */
  placeItemHandler(e) {
    var index = e.currentTarget.dataset.index
    var { placeList } = this.data
    wx.showModal({
      title: '提示',
      content: '确认要预定' + placeList[index].place + '吗？',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#0A73FF',
      success: (result) => {
        // console.log(1)
          wx.showToast({
            title: '预定成功',
            icon: 'success',
            image: '',
            duration: 1500,
            mask: false,
          })
          // console.log(2)
          // wx.switchTab({
          //   url: '/pages/index/index',
          //   success: (result) => {
          //     ;
          //   },
          // });

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