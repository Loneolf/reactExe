import React, { Component } from 'react';

import { connect } from 'react-redux';
import { changeValueSync, addToTestList } from './actionCreator';


const mapStateToProps = (state) => {
  return {
    storevalue: state.test
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickHandle: (item) => {
      dispatch(changeValueSync(item));
      dispatch(addToTestList(item));
    }
  };
};

class ReducerPage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.storevalue
    };
  }

  changeHandle() {
    this.setState({
      inputValue: this.input.value
    });
  }

  confirm() {
    this.props.clickHandle(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }

  render() {
    return (
      <div>
        <br />
        <div>这里是组件ReducerPage2</div>
        <div>
                    从reducer中取的值为:
          {this.props.storevalue}
        </div>
        <div>
                    请在输入框中输入要修改reducer的值:
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.changeHandle.bind(this)}
            ref={(input) => this.input = input}
          />
          <button onClick={this.confirm.bind(this)}>确认</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReducerPage2);
