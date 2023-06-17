/**
 * 
 */

import { queryHomeList } from '../../modules/api/index';

Page({
  data: {
    pageNum: 1,
    pageSize: 20,
    banners: [
        'https://cn.bing.com/th?id=OHR.LesserAntilles_ZH-CN3012679657_1920x1200.jpg',
        'https://cn.bing.com/th?id=OHR.GrahamAdelie_ZH-CN2945763969_1920x1200.jpg',
        'https://cn.bing.com/th?id=OHR.HuggingDay_ZH-CN2984681593_1920x1200.jpg',
      ],
    items: [
      {id: 0, title: '及卡就是大空间', cover: 'https://cn.bing.com/th?id=OHR.LesserAntilles_ZH-CN3012679657_1920x1200.jpg', price: 12.3, sales: 78},
      {id: 0, title: '是的哈就是等哈就收到哈记得哈时间', cover: 'https://cn.bing.com/th?id=OHR.GrahamAdelie_ZH-CN2945763969_1920x1200.jpg', price: 12.3, sales: 78},
      {id: 0, title: '撒上的撒都是垃圾啊看了看', cover: 'https://cn.bing.com/th?id=OHR.HuggingDay_ZH-CN2984681593_1920x1200.jpg', price: 12.3, sales: 78},
      {id: 0, title: '撒打算大的卡框', cover: 'https://cn.bing.com/th?id=OHR.GrahamAdelie_ZH-CN2945763969_1920x1200.jpg', price: 12.3, sales: 78},
      {id: 0, title: '萨达客户端上看剧', cover: 'https://cn.bing.com/th?id=OHR.HuggingDay_ZH-CN2984681593_1920x1200.jpg', price: 12.3, sales: 78},
      {id: 0, title: '撒打卡结束的那空间', cover: 'https://cn.bing.com/th?id=OHR.HuggingDay_ZH-CN2984681593_1920x1200.jpg', price: 12.3, sales: 78},
      {id: 0, title: '阿斯顿及案例快乐了', cover: 'https://cn.bing.com/th?id=OHR.LesserAntilles_ZH-CN3012679657_1920x1200.jpg', price: 12.3, sales: 78},
    ],
  },

  onLoad: function () {
    const that = this;
    // that._queryPhotoList();
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
    // that._queryPhotoList();
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
