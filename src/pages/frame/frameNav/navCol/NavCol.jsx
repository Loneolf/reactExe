import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { MenuConfigCol } from '../menuConfig';
import './NavCol.scss';

const { SubMenu } = Menu;

class NavCol extends Component {
  state = {
    selectedKey: ''
  };

  componentDidMount() {
    // 从url中获取路由，并设置菜单中与之对应的菜单项被选中
    const { pathname } = this.props.location;
    this.setState({ selectedKey: pathname });
  }

  selectMenu = (e) => {
    this.setState({
      selectedKey: e.key
    });
  };

  configToMenu(arr) {
    if (!arr || arr.length === 0) return null;
    return arr.map((item) => {
      if (item.menu) {
        return (
          <SubMenu
            key={item.name}
            title={
              <span>
                <Icon type={item.icon_col} />
                <span>{item.name}</span>
              </span>
          }
          >
            {
              item.menu.map((subItem) => {
                if (arr.length === 0) return null;
                return (
                  <Menu.Item key={subItem.name}>
                    <Link to={subItem.router}>
                      <Icon type={subItem.icon} />
                      <span>{subItem.name}</span>
                    </Link>
                  </Menu.Item>
                );
              })
            }
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item key={item.name}>
            <Link to={item.router}>
              <Icon type={item.icon_col} />
              <span>{item.name}</span>
            </Link>
          </Menu.Item>
        );
      }
    });
  }

  render() {
    const { selectedKey } = this.state;
    return (
      <Menu
        className="left-menu"
        mode="inline"
        theme="dark"
        onClick={this.selectMenu}
        selectedKeys={[selectedKey]}
      >
        {this.configToMenu(MenuConfigCol)}
      </Menu>
    );
  }
}

export default withRouter(NavCol);
