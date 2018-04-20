import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Modal } from 'antd'
import { AccountLogin } from '../../API/Api'
import '../../styles/login.css'
const FormItem = Form.Item;

class Login extends Component {
  componentWillReceiveProps(nextProps) {
    const { auth: nextAuth = {} } = nextProps
    const { history } = this.props
    if (nextAuth.data && nextAuth.data.uid) {   // 判断是否登陆
      localStorage.setItem('user', JSON.stringify(nextAuth.data))
      history.push('/')
    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        localStorage.setItem('username', values.username)
      }
      AccountLogin({username: values.userName, password: values.password})
        .then(res => {
          let modal = Modal.success({
            content: '登录成功'
          })
          setTimeout(() => {
            modal.destroy()
            window.location.href = '/app'
          }, 2000)
        })
        .catch(err => {
          let modal = Modal.info({
            content: '密码错误，请重新输入密码'
          })
          setTimeout(() => {
            modal.destroy()
          }, 2000)
        })
    })
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login">
        <div className="login-form" >
          <div className="login-logo">
            <span>海鲸小红花</span>
          </div>
          <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入用户名!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="请输入密码" />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />
              )}
            </FormItem>
            <FormItem>
              <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>

    );
  }
}


export default (Form.create()(Login));