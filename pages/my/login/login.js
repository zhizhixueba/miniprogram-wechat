/**
 * Author: Meng
 * Date: 2022-04
 * Desc: 登录
 */

import { Scope, authorize } from '../../../modules/auth/index';

Page({
  data: {
    account: '',
    password: '',
    canIUseProfile: false,
    nextPage: { event: '', path: '', params: '' },
  },
  onLoad: function (options) {
    let that = this;
    let _dataObj = {};
    if (wx.getUserProfile) {
      _dataObj.canIUseProfile = true;
    }

    if (options.action) {
      try {
        const action = JSON.parse(decodeURIComponent(options.action));
        // if(action.path) { action.path = decodeURIComponent(action.path); }
        _dataObj.nextPage = action;
      } catch (error) {
        console.log('-------> login action parse Error:', options.account);
      }
    }

    that.setData(_dataObj);
  },
  bindInputPhone: function (e) {
    this.data.account = e.detail.value;
  },
  bindInputPwd: function (e) {
    this.data.password = e.detail.value;
  },
  getUserInfo: function (e) {
    console.log('getUserInfo');
    authorize(Scope.userInfo).then((res) => {
      console.log(res);
      wx.getUserInfo({
        desc: '用于完善会员资料',
        success: (res) => {
          console.log(res);
        },
      });
    });
  },
  getUserProfile: function (e) {
    console.log('getUserProfile');
    wx.getUserProfile({
      desc: '用于完善会员资料',
      success: (res) => {
        console.log(res);
      },
    });
  },


  onLogin: async function () {
    console.log(this.data);
  },

  setUserInfo: function(user) {
    const that = this;
    const nextPage = that.data.nextPage;

    if(nextPage.event == 'skip') {
      const url = nextPage.path;
      wx.redirectTo({ url });
    }else {
      wx.navigateBack();
    }
  }
});
