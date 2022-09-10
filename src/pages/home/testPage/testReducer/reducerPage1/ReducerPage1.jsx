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

class ReducerPage1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.storevalue
    };
  }

  changeHandle(e) {
    this.setState({
      // inputValue: this.input.value
      inputValue: e.target.value
    });
  }

  confirm() {
    let { inputValue } = this.state;
    if (inputValue !== 0 && !inputValue) return alert('请在输入框有值时再提交');
    this.props.clickHandle(inputValue);
    this.setState({
      inputValue: ''
    });
  }

  render() {
    return (
      <div>
        <br />
        <div>这里是组件ReducerPage1</div>
        <div>
          从reducer中取的值为:
          {this.props.storevalue}
        </div>
        <div>
          请在输入框中输入要修改reducer的值:
          <input
            value={this.state.inputValue}
            type="text"
            onChange={this.changeHandle.bind(this)}
            // ref={(input) => this.input = input}
          />
          <button onClick={this.confirm.bind(this)}>确认</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReducerPage1);
