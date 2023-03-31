// index.js

import { queryHomeList } from '../../modules/api/index';

Page({
  data: {
    pageNum: 1,
    pageSize: 20,
    items: [],
  },

  onLoad: function () {
    const that = this;
    that._queryPhotoList();
  },
  onReady() {},

  onPullDownRefresh: function () {
    const that = this;
    leftSize = 0;
    rightSize = 0;
    that.setData({ pageNum: 1, items: [] });
    that._queryPhotoList();
    wx.stopPullDownRefresh();
  },

  onReachBottom: function () {
    const that = this;
    that._queryPhotoList();
  },

  _queryPhotoList: async function () {
    const that = this;
    const { pageNum, pageSize } = that.data;
    const { code, data } = await queryHomeList({ pageNum, pageSize });
    if (code == 0) {
      const list = data.photos;
      let items = that.data.items;
      if (pageNum > 1) {
        items = items.concat(list);
      } else {
        items = list;
      }
      that.setData({ items, pageNum: pageNum + 1 });
    }
  },
});
