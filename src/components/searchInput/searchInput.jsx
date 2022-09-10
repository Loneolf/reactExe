import React, { Component } from 'react';
import { Select, Spin } from 'antd';
import _ from 'lodash';
import UserService from 'service/userService';
import DataFormService from 'service/dataFormService';

const userService = new UserService();
const dataFormService = new DataFormService();

const { Option } = Select;

let timeout;
let currentValue;

/** 获取数据表列表 */
const queryTableList = (parmas, value) => {
  return dataFormService.pageQuery(parmas, []).then((data) => {
    if (currentValue === value) {
      const list = [];
      _.forEach(data.content, (v) => {
        list.push({
          value: v.id,
          text: v.name
        });
      });
      return list;
    }
    return [];
  });
};

/** 获取用户列表 */
const queryUserList = (value) => {
  const params = {
    name: value
  };
  return userService.queryUserList(params).then((data) => {
    if (currentValue === value) {
      const list = [];
      _.forEach(data.content, (v) => {
        list.push({
          value: v.id,
          text: v.name
        });
      });
      return list;
    }
    return [];
  });
};

function fetch(value, callback, searchType) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;
  function fake() {
    if (!value) {
      callback([], false);
      return;
    }
    callback([], true);
    switch (searchType) {
      case 'tableName':
        const parmas = {
          content: [{
            name: value
          }],
          page: 1
        };
        queryTableList(parmas, value).then((data) => {
          callback(data, false);
        });
        break;
      case 'userName':
      case 'updateUserName':
        queryUserList(value).then((data) => {
          callback(data, false);
        });
        break;
      default:
    }
  }
  timeout = setTimeout(fake, 300);
}

export default class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      value: undefined,
      fetching: false,
      searchType: ''
    };
  }

    /** 搜索 */
    handleSearch = (value) => {
      const { searchType } = this.props;
      this.setState({ searchType });
      fetch(value, (data, fetching) => this.setState({ data, fetching }), searchType);
    };

    /** 选中 */
    handleChange = (value) => {
      this.setState({ value });
      this.props.submit(value, this.state.searchType);
    };

    render() {
      const { data, value, fetching } = this.state;
      const { placeholder, style } = this.props;
      const options = data && data.map((d) => <Option key={d.value}>{d.text}</Option>);
      return (
        <Select
          className="DTSelect"
          showSearch
          value={value}
          placeholder={placeholder}
          style={{ ...style, minWidth: '150px' }}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          onSearch={this.handleSearch}
          onChange={this.handleChange}
          allowClear
          notFoundContent={fetching ? <Spin size="small" /> : null}
          getPopupContainer={(triggerNode) => triggerNode.parentNode}
        >
          {options}
        </Select>
      );
    }
}
