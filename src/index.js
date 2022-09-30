import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import moment from 'moment';
import store from './store';
import App from './App';
import 'assets/css/reset.scss';
import * as serviceWorker from './serviceWorker';
// 日期选择框中文需要单独设置moment
import 'moment/locale/zh-cn';

moment.locale('zh-cn');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <ConfigProvider locale={zhCN}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ConfigProvider>,
  // </React.StrictMode>
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
