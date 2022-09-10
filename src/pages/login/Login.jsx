import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Spin, message } from 'antd';
import TextLogo from 'assets/images/textlogo@2x.png';
import loginSideImg from 'assets/images/loginSideImg.png';
import UserService from 'service/UserService';
import './Login.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.userService = new UserService();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let loginInfo = localStorage.getItem('authorization');
    if (loginInfo) localStorage.removeItem('authorization');
  }

  handleSubmit() {
    return this.props.history.push('/wolf/home');
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        this.setState({ loading: true });
        try {
          await this.userService.login(values);
          this.setState({ loading: false });
          message.success('登录成功', 1);
          setTimeout(() => {
            this.props.history.push('/wolf/home');
          }, 1000);
        } catch (error) {
          // message.error('登录失败，请重新尝试', 1);
          this.setState({ loading: false });
        }
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Spin spinning={this.state.loading}>
        <div className="loginWrap">
          <div className="login">
            <div className="heade">
              <img src={TextLogo} alt="" />
            </div>
            <div className="main">
              <div className="mainLeft">
                <h3>登录Datatist后台管理系统</h3>
                <Form onSubmit={this.handleSubmit} hideRequiredMark className="login-form">
                  <Form.Item label="邮箱">
                    {getFieldDecorator('username', {
                      rules: [{ required: true, message: '请输入登录邮箱!' }]
                    })(
                      <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="用户名"
                      />
                    )}
                  </Form.Item>
                  <Form.Item label="密码">
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: '请输入密码!' }]
                    })(
                      <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="密码"
                      />,
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('rememberMe', {
                      valuePropName: 'checked',
                      initialValue: true
                    })(<Checkbox>记住密码</Checkbox>)}
                    <br />
                    <Button type="primary" onClick={this.handleSubmit} className="login-form-button">
                    登录
                    </Button>
                  </Form.Item>
                </Form>
                <p className="reminder">还没有账号？请联系管理员</p>
              </div>
              <div className="mainRight">
                <img src={loginSideImg} alt="" />
              </div>
            </div>
            <p className="copyRight">
              Copyright &copy;2019 Datatist Inc. All Rights Reserved
            </p>
          </div>
        </div>
      </Spin>
    );
  }
}

export default Form.create({ name: 'login' })(Login);
