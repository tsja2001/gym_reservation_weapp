// components/z-bottom-button/index.js
/**
 * 回调事件
 * btnHandle 单个按钮
 * leftBtnHandle 左按钮
 * rightBtnHandle 右按钮
 * 
 * 若页面内容不足一屏幕，按钮自动沉底
 * 若页面内柔超过一屏幕，按钮显示在内容最后
 * 注：为了计算高度，需要用class为.out的容器包住所有内容，此组件放在.out容器外
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /**
     * 当传入content时，显示一个按钮，颜色为紫色
     * 同时传入leftContent和rightContent显示两个按钮
     *    两个按钮默认左白色右紫色
     */
    // 单个按钮时内容
    content: {
      type: String,
    },
    // 左边按钮内容
    leftContent: {
      type: String,
      value: '取消'
    },
    // 右边按钮内容
    rightContent: {
      type: String,
      value: '确认'
    },
    // 按钮主题色
    color: {
      type: String,
      value: '#DE2C3F'
    },
    // 当显示两个按钮时，哪个按钮有背景色（默认左白色，右紫色）
    hasBackgroundColor: {
      type: String,
      value: 'right'
    },
    // 是否重新计算显示位置 (每当传入值变为true时，重新计算定位位置)
    regetPosition: {
      type: Boolean,
      value: true,
      observer: function (newVal, oldVal, change) {  // 监听传入数据变化
        if (newVal == true) {
          this.setPosition()
        }
      },
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 按钮样式
    buttonStyle: '',
    // 颜色
    rightStyle: '',
    leftStyle: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 单个按钮的点击
     */
    btnHandle() {
      // TODO 这个位置click参数无用
      this.triggerEvent('btnHandle', 'click')
    },

    /**
     * 左侧按钮的点击
     */
    leftHandle() {
      // TODO 这个位置click参数无用
      this.triggerEvent('leftBtnHandle', 'left')
    },

    /**
     * 右侧按钮的点击
     */
    rightHandle() {
      // TODO 这个位置click参数无用
      this.triggerEvent('rightBtnHandle', 'right')
    },

    /**
     * 获取page高度与窗口高度，用于定位按钮
     */
    setPosition() {
      setTimeout(() => {
        var height = ''
        var screenHeight = ''

        let query = wx.createSelectorQuery()

        wx.getSystemInfo({
          success: function (res) {
            screenHeight = res.windowHeight
          }
        })

        query.select('.out').boundingClientRect(rect => {
          height = rect.height

          if (height <= screenHeight - 40 * 2) {
            this.setData({
              buttonStyle: 'position: absolute; bottom: 20rpx;'
            })
          } else {
            this.setData({
              buttonStyle: ''
            })
          }
        }).exec()
      }, 100);
    }
  },

  lifetimes: {
    attached: function () {
      // 获取page高度与窗口高度，用于定位按钮
      var height = ''
      var screenHeight = ''

      let query = wx.createSelectorQuery()

      wx.getSystemInfo({
        success: function (res) {
          screenHeight = res.windowHeight
        }
      })

      query.select('.out').boundingClientRect(rect => {
        height = rect.height

        if (height <= screenHeight - 40 * 2) {
          this.setData({
            buttonStyle: 'position: absolute;bottom: 20rpx;'
          })
        } else {
          this.setData({
            buttonStyle: ''
          })
        }
      }).exec()

      /**
       * 设置按钮颜色
       */
      var { color, hasBackgroundColor, content } = this.data

      var rightStyle = ''
      var leftStyle = ''

      switch (hasBackgroundColor) {
        case 'left':
          leftStyle = "background-color:" + color + "; color:#ffffff;"
          rightStyle = "background-color: none; color:" + color

          break
        case 'right':
          leftStyle = "background-color:none;color:" + color
          rightStyle = "background-color:" + color + ";color:#ffffff;"

          break
        default:
          leftStyle = "background-color:" + color + "; color:#ffffff;"
          rightStyle = "background-color: none; color:" + color
      }

      this.setData({
        rightStyle: rightStyle,
        leftStyle: leftStyle,
      })
    },
  }
})
