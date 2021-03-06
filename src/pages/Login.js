import React from 'react'
import {setToken} from '../utils/auth'
import { Form, Input, Button, Checkbox,message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import store from '../store/index'
import {setUser} from '../store/Action'
import { withRouter } from "react-router-dom";
import {requst} from '../utils/fetch'

 function Login(props) {
    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        var result = await requst.get('/userList/login',{userName:values.userName,password:values.password}).then(res => {
            if(res.data.status == 200){
                return res.data
            }else{
                message.error(res.data.msg)
                throw {err:res.data.msg}
            }
        })
        message.success(result.msg)
        setToken(values.password)
        store.dispatch(setUser('登录用户'))
        // 路由跳转
        props.history.push("/admin/list");
      }
    return (
        <Form
            style={{width: '230px',margin: '20px auto'}}
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            >
            <Form.Item
                name="userName"
                rules={[
                {
                    required: true,
                    message: '请输入用户名',
                },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: '请输入密码',
                },
                ]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住密码</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
               忘记密码
                </a>
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
               登录
                </Button>
                或者 <a href="#/signin">注册</a>
            </Form.Item>
        </Form>
    )
}

  
export default withRouter(Login)
