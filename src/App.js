import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import Frame from 'pages/frame/Frame';
import Login from 'pages/login/Login';
import NotFind from 'components/notFind/NotFind';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/wolf/login" component={Login} />
        <Route path="/wolf/home" component={Frame} />
        <Redirect exact from="/" to="/wolf/login" />
        <Route component={NotFind} />
      </Switch>
    );
  }
}

export default withRouter(App);
