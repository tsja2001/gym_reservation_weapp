// components/z-oneweek-select/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0,
    dateList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 点击日期
    itemHandler(e) {
      var index = e.currentTarget.dataset.index

      this.setData({
        currentIndex: index
      })

      var { dateList } = this.data

      this.triggerEvent('dateHandle', dateList[index].raw)
    }
  },

  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      var nowdate = new Date


      var dateList = []
      for (var i = 0; i < 7; i++) {
        var dateItem = new Date
        dateItem.setTime(nowdate.getTime() + i * 24 * 60 * 60 * 1000)

        var day = ''

        // 将周几的数字转化为汉字
        switch (dateItem.getDay() + '') {
          case '0':
            day = '周日'
            break;
          case '1':
            day = '周一'
            break;
          case '2':
            day = '周二'
            break;
          case '3':
            day = '周三'
            break;
          case '4':
            day = '周四'
            break;
          case '5':
            day = '周五'
            break;
          case '6':
            day = '周六'
            break;
        }

        dateList[i] = {
          year: dateItem.getFullYear(),
          month: dateItem.getMonth() + 1,
          date: dateItem.getDate(),
          day: day,
          raw: dateItem
        }
      }

      this.setData({
        dateList: dateList
      })

      this.triggerEvent('dateHandle', dateList[0].raw)
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
