// pages/mine/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 是否显示消息提示框
    displayPointBox: {
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 解除绑定
   */
  jiebangHandler() {
    wx.showModal({
      title: '提示',
      content: '确认要解除绑定吗',
      showCancel: true,
      cancelText: '取消',
      cancelColor: '#000000',
      confirmText: '确定',
      confirmColor: '#3769F4',
      success: (result) => {
        if (result.confirm) {

        }
      },
      fail: () => { },
      complete: () => { }
    });
  },

  /**
   * 关于我们
   */
  aboutHandler() {
    this.setData({
      displayPointBox: {
        display: true,
        title: '关于我们',
        value: '<div>开发成员xxx</div><div></div><div>联系方式xxx</div>',
      }
    })
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