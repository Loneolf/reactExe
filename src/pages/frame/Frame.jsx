import React, { Component } from 'react';
import { Layout } from 'antd';
import Home from 'pages/home/HomeRouter';
import FrameHeade from './frameHeade/FrameHeade';
// import {browserVersion} from 'utils/universal'
import './Frame.scss';

const { Header, Content } = Layout;
class Frame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuCollasped: false,
    };
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    let height = document.documentElement.clientHeight;
    let box = document.querySelector('#datatist-wolf-app');
    let mainContent = document.querySelector('.app-bottom-layout');
    box.style.minHeight = `${height}px`;
    mainContent.style.minHeight = `${height - 60}px`;
    window.addEventListener('resize', resizeHandle);
    function resizeHandle() {
      let height2 = document.documentElement.clientHeight;
      box.style.minHeight = `${height2}px`;
      mainContent.style.minHeight = `${height2 - 60}px`;
    }
  }

  toggle() {
    const { isMenuCollasped } = this.state;
    this.setState({ isMenuCollasped: !isMenuCollasped });
  }

  render() {
    let { isMenuCollasped } = this.state;
    return (
      <Layout id="datatist-wolf-app" className="app">
        <Header className={`frame-header`}>
          <FrameHeade
            collapsed={isMenuCollasped}
            toggle={this.toggle}
          />
        </Header>
        <Layout className="app-bottom-layout">
          <Content className="frame-content">
            <Home />
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default Frame;
