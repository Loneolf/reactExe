import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ReducerTitle extends Component {
  render() {
    return (
      <div>
        <Link to="/wolf/home/testpage/testRedux/reducerPage1"><span>reducePage1</span></Link>
        <span>/</span>
        <Link to="/wolf/home/testpage/testRedux/reducerPage2"><span>reducePage2</span></Link>
        <span>/</span>
        <Link to="/wolf/home/testpage/testRedux/reducerChangeList"><span>reducerchangeList</span></Link>
        <br />
      </div>
    );
  }
}
