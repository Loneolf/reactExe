import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { MenuConfigCol } from '../menuConfig';
import './HeadeNav.scss';

const { SubMenu } = Menu;

class HeadeNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedNav: ''
    };
  }

  static getDerivedStateFromProps(props) {
    return { selectedNav: props.location.pathname };
  }

  render() {
    const { selectedNav } = this.state;
    return (
      <div className="headeNavInner">
        <Menu
          selectedKeys={[selectedNav]}
          mode="horizontal"
        >
          {
            MenuConfigCol.map((item) => {
              if (item.menu && item.menu.length > 0) {
                return (
                  <SubMenu
                    key={item.name}
                    title={
                      <span className="submenu-title">
                        {item.icon && <Icon type={item.icon} />}
                        {item.name}
                      </span>
                    }
                  >
                    {
                      item.menu.map((subItem) => {
                        return (
                          <Menu.Item key={subItem.router}>
                            <Link to={subItem.router}>
                              {subItem.name}
                            </Link>
                          </Menu.Item>
                        );
                      })
                    }
                  </SubMenu>
                );
              } else {
                return (
                  <Menu.Item key={item.router}>
                    <Link to={item.router}>
                      {item.icon && <Icon type={item.icon} />}
                      <span>{item.name}</span>
                    </Link>
                  </Menu.Item>
                );
              }
            })
          }
        </Menu>
      </div>

    );
  }
}

export default withRouter(HeadeNav);
