/**
 * 输入框组件
 * 回掉事件:
 * textContent
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // （必填）文本框标题
    title: {
      type: String,
      value: '标题'
    },
    ifBackIcon: {
      type: Boolean,
      value: false
    }
    // (必填)父容器的外边距
    // parentContainerMargin: {
    //   type: String,
    //   value: '0'
    // }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    getStatusBarPosition() {
      var systemInfo = wx.getSystemInfoSync()

      let gap = "" //胶囊按钮上下间距 使导航内容居中
      let width = 96 //胶囊的宽度，android大部分96，ios为88

      if (systemInfo.platform === "android") {
        gap = 8;
        width = 96;
      } else if (systemInfo.platform === "devtools") {
        if (systemInfo.system.indexOf('iOS') != -1) {
          gap = 5.5; //开发工具中ios手机
        } else {
          gap = 7.5; //开发工具中android和其他手机
        }
      } else {
        gap = 4
        width = 88
      }

      if (!systemInfo.statusBarHeight) {
        //开启wifi的情况下修复statusBarHeight值获取不到
        systemInfo.statusBarHeight = systemInfo.screenHeight - systemInfo.windowHeight - 20
      }

      var rect = {
        //获取不到胶囊信息就自定义重置一个
        bottom: systemInfo.statusBarHeight + gap + 32,
        height: 32,
        left: systemInfo.windowWidth - width - 10,
        right: systemInfo.windowWidth - 10,
        top: systemInfo.statusBarHeight + gap,
        width: width
      }

      return rect
    },

    /**
     * 点击返回
     */
    backHandler() {
      if (this.data.ifBackIcon) {
        wx.navigateBack({
          delta: 1
        });
      }
    }
  },

  lifetimes: {
    attached: function () {
      // 获取右上角小胶囊的数据
      var statusBarPosition = this.getStatusBarPosition()
      console.log(statusBarPosition)
      this.setData({
        statusBarPosition: statusBarPosition
      })
    }
  }
})
