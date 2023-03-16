import { request } from '../network/index';

// 获取首页列表
export function queryHomeList(data = {}) {
  return request({
    url: '/photo/homeList',
    method: 'POST',
    data,
  });
}
