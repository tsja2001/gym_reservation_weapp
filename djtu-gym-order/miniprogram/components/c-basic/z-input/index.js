// components/c-form/z-input/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '标题'
    },
    placehoder: {
      type: String,
      value: "请输入内容"
    },
    // 是否显示右侧小蓝杠杠
    ifLeftBorder: {
      type: Boolean,
      value: true
    },
    // 是否显示底部边框
    ifBottomBorder: {
      type: Boolean,
      value: true
    }
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
    inputHandler(e) {
      this.triggerEvent('inputHandler', e.detail)
    }
  }
})
