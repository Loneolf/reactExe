import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NotFind from 'components/notFind/NotFind';
import ReducerTitle from './reducerTitle/ReducerTitle';
import ReducerPage1 from './reducerPage1/ReducerPage1';
import ReducerPage2 from './reducerPage2/ReducerPage2';
import ReducerChangeList from './reducerChangeList/ReducerChangeList';

export default class TestReducer extends Component {
  render() {
    return (
      <div>
        <ReducerTitle />
        <div>
          <Switch>
            <Route exact path="/wolf/home/testpage/testRedux" component={ReducerPage1} />
            <Route exact path="/wolf/home/testpage/testRedux/reducerPage1" component={ReducerPage1} />
            <Route exact path="/wolf/home/testpage/testRedux/reducerPage2" component={ReducerPage2} />
            <Route exact path="/wolf/home/testpage/testRedux/reducerchangeList" component={ReducerChangeList} />
            {/* <Redirect exact from="/wolf/testpage/testRedux/" to="/wolf/testpage/testRedux/reducerPage1" /> */}
            <Route component={NotFind} />
          </Switch>
        </div>
      </div>
    );
  }
}
