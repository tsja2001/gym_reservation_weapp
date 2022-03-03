// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */  
  onShow: function() {
    let sInfo = wx.getSystemInfoSync();
    console.log(sInfo);
    this.setData({
      locationEnabled: sInfo.locationEnabled + "",
      locationAuthorized: sInfo.locationAuthorized + ""
    })

    let that = this;
    wx.getLocation({
      type: 'wgs84',
      isHighAccuracy: true,
      altitude: true,
      success(res) {
        that.setData({
          locationMini: "true",
          location: res
          // location: JSON.stringify(res)
        })
        console.log(res);
      },
      fail(err) {
        that.setData({
          locationMini: "false",
          location: "小程序未开启授权"
        })
        console.log(err);
      }
    })
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