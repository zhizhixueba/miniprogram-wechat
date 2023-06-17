/**
 * Author: Meng
 * Date: 2022-04
 * Desc: 我的
 */
Page({
  data: {
    isLogin: false,
    user: {
      headPicUrl: '',
      nickName: '立即登录',
      phone: '',
    },
    integrate: 0, // 积分
    couponNum: 0, // 优惠券
    footprint: 0, // 足迹
    banners: [
      'https://cn.bing.com/th?id=OHR.LesserAntilles_ZH-CN3012679657_1920x1200.jpg',
      'https://cn.bing.com/th?id=OHR.GrahamAdelie_ZH-CN2945763969_1920x1200.jpg',
      'https://cn.bing.com/th?id=OHR.HuggingDay_ZH-CN2984681593_1920x1200.jpg',
    ],
    tabList: [
      { name: '待支付', tag: 1, num: 2 },
      { name: '已支付', tag: 2, num: 3 },
      { name: '已取消', tag: 3, num: 1 },
    ],
    orderTab: [
      { name: '待支付', icon: '/assets/icon/m_feedback.png', num: 2 },
      { name: '已支付', icon: '/assets/icon/m_feedback.png', num: 3 },
      { name: '已取消', icon: '/assets/icon/m_feedback.png', num: 1 },
      { name: '全部', icon: '/assets/icon/m_feedback.png', num: 2 },
    ],
    menulist: [
      {
        name: '分享好友',
        key: '',
        icon: '/assets/icon/m_share.png',
        path: '/pages/my/share/share',
      },
      {
        name: '意见反馈',
        key: '',
        icon: '/assets/icon/m_feedback.png',
        path: '/pack_sub/pages/feedback/feedback',
      },
      {
        name: '团购',
        key: '',
        icon: '/assets/icon/m_gift.png',
        path: '/pages/my/donate/donate',
      },
      {
        name: '关于',
        key: '',
        icon: '/assets/icon/m_about.png',
        path: '/pages/my/about/about',
      },
      {
        name: '设置',
        key: '',
        icon: '/assets/icon/m_setting.png',
        path: '/pack_sub/pages/setting/setting',
      },
    ],
  },

  onLoad: function (options) {},

  onReady: function () {},

  onShow: function () {
    let that = this;
  },

  onPullDownRefresh: function () {},

  onUserInfo: function () {
    let that = this;
    let url = '/pages/my/info/info';
    if (!that.data.isLogin) {
      url = '/pages/my/login/login';
    }
    wx.navigateTo({
      url,
    });
  },

  onTapTab: function (e) {
    let that = this;
    let index = e.currentTarget.dataset.index;
    let url = '/pages/my/order/order';
    if (!that.data.isLogin) {
      url = '/pages/my/login/login';
    }
    wx.navigateTo({
      url,
    });
  },

  onTapMenu: function (e) {
    // let that = this;
    let url = e.currentTarget.dataset.path;
    wx.navigateTo({ url });
  },

  showLogin: function () {
    let that = this;
    if (!that.data.isLogin) {
      wx.showModal({
        title: '请先登录',
        content: '您还未登录请先登录',
        success: (e) => {
          if (e.confirm) {
            wx.navigateTo({
              url: '/pages/my/login/login',
            });
          }
        },
      });
      return true;
    }
    return false;
  },
});
