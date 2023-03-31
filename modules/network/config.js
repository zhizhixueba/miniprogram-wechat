/**
 * Author: Meng
 * Date: 2022-03
 * 网络配置项
 */

export const net_config = {
  // env: 'prod',
  env: 'test',
};

// 获取地址
export function getWebPath(host, env = net_config.env) {
  const url = env_hosts[env][host];
  return url;
}

// 设置环境 0prod, 1test, 2dev
export function setAppEnv(num = 0) {
  const index = num > 2 ? 0 : num;
  net_config.env = index == 0 ? 'prod' : index == 1 ? 'test' : 'dev';
}

// 获取对应请求地址
export function requestHost(host = 'def', env = 'prod') {
  const url = env_hosts[env][host];
  return url;
}

// 请求头设置
export function mergeHeaders(header = {}) {
  header.token = 'asdadsa';
  return header;
}

// 请求参数设置
export function mergeParams(params = {}, host) {
  return params;
}

// 数据服务地址
const env_hosts = {
  prod: {
    def: 'https://location.com', //
    auth: 'https://192.168.253.89.location.com',
  },
  test: {
    def: 'http://192.168.253.89:8097',
    auth: 'https://192.168.0.105.location.com',
  },
};
