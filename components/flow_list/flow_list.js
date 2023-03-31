/**
 *
 */
let windowWidth = 0;

Component({
  properties: {
    flowItems: {
      type: Array,
      value: [],
    },
  },

  data: {
    itemList: [],
  },
  lifetimes: {
    attached: function () {
      const that = this;
      const itemList = that.data.flowItems;
      wx.getSystemInfo({
        success: (res) => {
          windowWidth = res.windowWidth / 2 - 8;
          console.log(res);
        },
      });

      that.setData({ itemList });
    },
  },
  observers: {
    flowItems: function (itemList) {
      this.handleListData(itemList);
    },
  },

  methods: {
    handleListData: function (itemList) {
      let leftSize = 0;
      let rightSize = 0;
      itemList.forEach((e, index) => {
        const scale = Math.round((e.width * 100) / windowWidth) / 100;
        const height = Math.round(e.height / scale);
        // console.log(windowWidth, height, scale, e.width, e.height);
        if (rightSize >= leftSize) {
          leftSize += height;
          e.tag = 'left';
        } else {
          rightSize += height;
          e.tag = 'right';
        }
        e.index = index;
        e.height = height;
      });
      this.setData({ itemList });
    },
  },
});
