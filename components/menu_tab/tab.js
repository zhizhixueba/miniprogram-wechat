/**
 * Author: Meng
 * Date: 2022-04
 * Desc: 优惠券 TabLayout
 */
Component({
  properties: {
    index: {
      type: Number,
      value: 0,
    },
    tabItems: {
      type: Array,
      value: [], // '咦，没有内容哦！'
    },
  },

  data: {
    tabIdx: 0,
    tabs: ['食材', '步骤', '要点'],
  },
  methods: {
    onClick: function (e) {
      const idx = parseInt(e.currentTarget.dataset.idx);
      const that = this;
      that.setData({
        tabIdx: idx,
      });
      that.triggerEvent('change', { idx });
    },
  },
});
