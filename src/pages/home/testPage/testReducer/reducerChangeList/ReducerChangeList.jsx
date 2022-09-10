import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteToTestList } from './actionCreator';

const mapState = (state) => {
  return {
    list: state.testList
  };
};

const mapDispatch = (dispatch) => {
  return {
    clickHandle: (item) => {
      dispatch(deleteToTestList(item));
    }
  };
};

class ReducerChangeList extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    if (this.props.list.length === 0) return <div>无提交记录</div>;
    return (
      <div>
        输入框提交值记录
        {
          this.props.list.map((item, index) => {
            return (
              <div key={index} style={{ width: '150px', height: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>{item}</span>
                <button
                  onClick={() => { return this.props.clickHandle({ item, index }); }}
                >
                  删除
                </button>
              </div>
            );
          })
      }
      </div>
    );
  }
}

export default connect(mapState, mapDispatch)(ReducerChangeList);
