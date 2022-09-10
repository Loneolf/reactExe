import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import NotFind from 'components/notFind/NotFind';
import Aaaa from './Aaaa';
import Bbbb from './Bbbb';
import C from './C';
import D from './D';
import E from './E';
import TestPage from './testPage/testPageNav';

class HomeRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/wolf/home/testPage" component={TestPage} />
        <Route path="/wolf/home/testPage1" component={Aaaa} />
        <Route path="/wolf/home/testPage2" component={Bbbb} />
        <Route path="/wolf/home/testPage3" component={C} />
        <Route path="/wolf/home/testPage4" component={D} />
        <Route path="/wolf/home/testPage5" component={E} />
        <Redirect exact from="/wolf/home" to="/wolf/home/testPage" />
        <Route component={NotFind} />
      </Switch>
    );
  }
}

export default withRouter(HomeRouter);
