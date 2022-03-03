// 单行元素 左key 右value
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    key: {
      type: String,
      value: '标题'
    },
    value: {
      type: String,
      value: '值'
    },
    ifLeftBorder: {
      type: Boolean,
      value: false
    },
    ifBottomBorder: {
      type: Boolean,
      value: true
    },
    ifMoreIcon: {
      type: Boolean,
      value: false
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

  }
})
