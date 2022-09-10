import React, { Component } from 'react';
import { Divider, Icon } from 'antd';
import logo from 'assets/images/logo_datatist@2x.png';
import HeadeNav from '../frameNav/headeNav/HeadeNav';
import './FrameHeade.scss';

export default class FrameHeade extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="headerBox">
        <div className="logoBox">
          <img className="logo" src={logo} alt="logo" />
          <span className="logoFont">业务管理平台</span>
        </div>
        <div className="headNav">
        <HeadeNav />
        </div>
        <div className="userAndSetting">
          <span>欢迎您：admin</span>
          <Divider type="vertical" />
          <span className="exit">
            <Icon type="poweroff" />
              退出
          </span>
        </div>
      </div>
    );
  }
}
