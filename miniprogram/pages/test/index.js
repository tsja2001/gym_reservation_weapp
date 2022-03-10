// pages/test/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    getData:''
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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  get(){
    var that = this
    wx.startLocationUpdateBackground({
      success(res) {
        that.getPos()
      },
      fail(res) {
        wx.showModal({
          cancelColor: 'cancelColor',
          cancelText: '取消',
          confirmColor: 'confirmColor',
          confirmText: '确定',
          content: '请点击右上角...,进入设置,设置定位权限为 使用时与离开后',
          editable: true,
          placeholderText: 'placeholderText',
          showCancel: false,
          title: '权限不足',
          success: (result) => {},
          fail: (res) => {},
          complete: (res) => {},
        })
      }
    })
  },

  getPos(){

    var that = this
    var { getData } = this.data
    wx.onLocationChange(function (res) {

      var item = 
      '(' +
      res.latitude +
      ',' +
      res.longitude +
      '),'


      getData += item

      that.setData({
        getData: getData,
        res: res
      })
    })
  },


  stop(){
    wx.stopLocationUpdate({
      success: (res) => {},
    })
  },

  clear(){
    this.setData({
      getData: ''
    })
  },

  copy(){
    var { getData } = this.data
    // getData.length = getData.length - 1
    getData = '[' + getData + ']'
    // var getData = 'aaaaaa\naaaaaaa\nbbbbbbbbb'


    // const searchRegExp = /\)\(/g

    // const result = getData.replace(searchRegExp,'),(')


    wx.setClipboardData({
      data: getData,
      success: function (res) {
        wx.getClipboardData({
          success: function (res) {
            wx.showToast({
              title: '复制成功'
            })
          }
        })
      }
    })
  },

  textarea(e){
    console.log(e)
    // / 1.获取input 框的元素
      var input = e.target
// 2.获取input 框的值
      var value = input.value
// 3.通过setSelectionRange 选中文字
      input.setSelectionRange(0, value.length)
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