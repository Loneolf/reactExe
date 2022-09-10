import BaseService from './BaseService';

export default class userService extends BaseService {
  // 用户登录
  login(data) {
    return super._request({
      method: 'POST',
      url: '/account/app/account/account/login.do',
      data,
      headers: {
      }
    }).then((response) => {
      const { header, body } = response;
      if (header.code === 0) {
        return body;
      }
    });
  }

  // 安全退出
  logout(data) {
    return super._request({
      method: 'POST',
      url: '/account/app/account/account/logout.do',
      data,
      headers: {
      }
    }).then((response) => {
      const { header, body } = response;
      if (header.code === 0) {
        return body;
      }
    });
  }

  getCurrentUser() {
    return super._request({
      method: 'POST',
      url: '/account/app/account/account/current.do',
      headers: {
      }
    }).then((response) => {
      const { header, body } = response;
      if (header.code === 0) {
        return body;
      }
    });
  }

  autoLogin() {
    return super._request({
      method: 'POST',
      url: '/account/app/account/account/autologin.do',
      headers: {
      }
    }).then((response) => {
      const { header, body } = response;
      if (header.code === 0) {
        return body;
      }
    });
  }

  // 用户列表
  queryUserList(data) {
    return super._request({
      method: 'POST',
      url: '/user/app/user/user/query.do',
      data,
      headers: {}
    }).then((response) => {
      const { header, body } = response;
      if (header.code === 0) {
        return body;
      }
    });
  }
}
