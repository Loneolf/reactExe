import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import TestRedux from './testReducer';
import TestPageTem from './testPageTem/testPageTem';
import Hooks from './hooks/Hooks';
import './testPageNav.scss';

export default class TestPageNav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  tabPaneChange(key) {
    switch (key) {
      case '2':
        this.props.history.replace('/wolf/testpage/redux');
        break;
      default:
        break;
    }
  }

  render() {
    let arr = this.props.location.pathname.split('/');
    // router斜杠后的字符串，用来给link起class类名，匹配对应的路由。
    let urlLast = arr[arr.length - 1];
    return <div className="testPageBox">
      <div className="navLink">
        <Link to="/wolf/home/testPage/testPageTem" className={`${urlLast === 'testPageTem' && 'active'}`}><span>临时测试页面</span></Link>
        <Link to="/wolf/home/testPage/hooks" className={`${urlLast === 'hooks' && 'active'}`}><span>hooks测试</span></Link>
        <Link to="/wolf/home/testPage/testRedux" className={`${urlLast === 'testRedux' && 'active'}`}><span>redux测试</span></Link>
        <br />
      </div>
      <div className="routerArea">
        <Switch>
          <Route exact path="/wolf/home/testpage/testPageTem" component={TestPageTem} />
          <Route path="/wolf/home/testPage/testRedux" component={TestRedux} />
          <Route path="/wolf/home/testPage/hooks" component={Hooks} />
          <Redirect exact from="/wolf/home/testPage" to="/wolf/home/testPage/testPageTem" />
        </Switch>
      </div>
    </div>;
  }
}
