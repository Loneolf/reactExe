import axios from 'axios';
import { message } from 'antd';
// import { setCookie, getCookie } from 'utils/universal';
/** 是否开启请求本地json文件 */
const DEBUG = true;
/**
 * 处理http请求的基类，所有请求必须经过这个类
 */
// if (process.env.NODE_ENV === 'development') {
//     axios.defaults.baseURL = '/apiwolf';
// }
// if (process.env.NODE_ENV === 'production') {
axios.defaults.baseURL = '/wolf';
// }
class BaseService {
  constructor() {
    this.name = 'apiwolf';
    this.axios = axios.create({
      timeout: 30000
    });
    // 请求拦截
    this.axios.interceptors.request.use(
      (request) => {
        if (DEBUG && request.url.indexOf('.json') >= 0) {
          request.method = 'GET';
          request.url = `/mock${request.url}`;
        }
        // 所有get请求后面加上时间戳，解决IE浏览器缓存get请求数据问题。
        if (request.method === 'get' || request.method === 'GET') {
          request.url += `${~request.url.indexOf('=') ? '&' : '?'}time=${new Date().getTime()}`;
        }
        request.url = encodeURI(request.url);
        // 所有请求头加入登录信息
        request.headers['PRODUCT-ID'] = 'BMS';
        let logInfo = localStorage.getItem('authorization');
        // 仅当是登录请求时不用判断是否有登录成功后的信息，
        // 其它任何请求判断是否有成功登录的信息，有登录信息在请求头中加入登录信息
        // 没有的话跳转到登录页面并强制刷新实现到达登录页面
        // console.log(~request.url.indexOf('login.json'), !logInfo);
        if (!~request.url.indexOf('/login.do') && !logInfo) {
          message.error('登录已过期或未登录，请重新登录', 1);
          setTimeout(() => {
            window.history.pushState(null, '', '/wolf/login');
            window.location.reload();
          }, 1000);
        }
        // console.log((new Date()).getTime(), 'request', request.url);、
        if (logInfo) request.headers.authorization = logInfo;
        // if (!~request.url.indexOf('login.do') && logInfo) {
        // }
        // console.log(request);
        return request;
      }, (error) => {
        return error;
      }
    );

    // 响应拦截
    this.axios.interceptors.response.use(
      (response) => {
        // console.log((new Date()).getTime(), 'response', response.config.url);
        if (response.headers.authorization) {
          // 当请求头携带有登录信息，将其设置到cookie中。
          localStorage.removeItem('authorization');
          localStorage.setItem('authorization', response.headers.authorization);
        }
        // 自动登录失败后，清除本地登录信息
        if (~response.config.url.indexOf('autologin.do') && !response.headers.authorization) localStorage.removeItem('authorization');
        const { code, message } = response.data.header;
        if (code >= 0 && code < 100) { return response; }
        this.__showCodeError(code, message);
        return Promise.reject(message);
      }, (error) => {
        this.__showError(error);
        return Promise.reject(error);
      }
    );
  }

  __showCodeError(code, myMessage) {
    switch (code) {
      case 100:
        message.error(`服务错误:${myMessage}[${code}]`);
        break;
      case 101:
        message.warn(`参数错误:${myMessage}[${code}]`);
        break;
      case 200:
        message.warn(`系统维护中，请稍后再试:${myMessage}[${code}]`);
        break;
      case 302:
        this.deal302(myMessage);
        break;
      case 400:
        message.warn(`请求错误:${myMessage}[${code}]`);
        break;
      case 401:
        message.warn(`没有操作权限:${myMessage}[${code}]`);
        break;
      case 402:
        message.warn(`没有登录:${myMessage}[${code}]`);
        break;
      case 403:
        message.warn(`没有操作权限:${myMessage}[${code}]`);
        break;
      case 404:
        message.warn(`服务未找到:${myMessage}[${code}]`);
        break;
      case 405:
        message.warn(`操作不允许:${myMessage}[${code}]`);
        break;
      case 500:
        message.warn(`系统错误，请稍后再试:${myMessage}[${code}]`);
        break;
      case 501:
        message.warn(`数据库连接异常，请稍后再试:${myMessage}[${code}]`);
        break;
      case 502:
        message.warn(`数据库访问错误，请稍后再试:${myMessage}[${code}]`);
        break;
      case 504:
        message.warn(`请求超时:${myMessage}[${code}]`);
        break;
      case 505:
        message.warn(`系统异常，请稍后再试:${myMessage}[${code}]`);
        break;
      case 600:
        message.error(`${myMessage}`);
        break;
      default:
        message.warn(`未知错误:${myMessage}[${code}]`);
        break;
    }
  }

  __showError() {
    message.error('系统繁忙，请稍后再试');
  }

  /**
     * 基础调用，调用的基类
     * @param {object} config 详见https://www.kancloud.cn/yunye/axios/234845
     */
  async __makeCall(config) {
    try {
      const response = await this.axios.request(config);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  }

  /**
     * 发送request请求
     * @param {object} config
     * @returns promise call back
     */
  _request(config) {
    return this.__makeCall(config);
  }

  /**
     * get 请求
     * @param {string} url
     * @param {object} config
     */
  _get(url, config) {
    return this.__makeCall({
      method: 'get',
      url,
      ...config
    });
  }

  _post(url, data, config) {
    return this.__makeCall({
      method: 'get',
      url,
      data,
      ...config
    });
  }

  _delete(url, config) {
    return this.__makeCall({
      method: 'get',
      url,
      ...config
    });
  }

  _head(url, config) {
    return this.__makeCall({
      method: 'get',
      url,
      ...config
    });
  }

  // 处理302
  deal302(value) {
    let url = encodeURIComponent(encodeURI(`${window.location.origin}/wolf/sso.json`));
    let str = `${value.split('?service=')[0]}?service=${url}`;
    window.location.href = str;
  }
}

export default BaseService;
