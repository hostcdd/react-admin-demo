import React,{useState} from 'react'
import { Layout, Menu,Dropdown } from 'antd';
import {DownOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import {clearToken} from '../../utils/auth.js'
import './layout.css';

const { Header } = Layout;


function MyHeader(props) {
    const [visible,setVisible] = useState(false)
    const handleVisibleChange = flag => {
      setVisible(flag)
    };
    const loginOut = () => {
      clearToken()
      props.history.push('/login')
    }

    const menu = (
      <Menu>
        <Menu.Item key="1">重置密码</Menu.Item>
        <Menu.Item key="2" onClick={loginOut}>退出登录</Menu.Item>
      </Menu>
    );
    return (
        <Header className="header">
            <div className="logo" />
            <div style={{color: '#fff'}}>你好，{props.userName}</div>
            <Dropdown
            overlay={menu}
            onVisibleChange={handleVisibleChange}
            visible={visible}
            >
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            个人中心 <DownOutlined />
            </a>
            </Dropdown>
            {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
            </Menu> */}
        </Header>
    )
}

const CounterMapStateToProps = (state) => ({
  userName:state.userReducer.userName    
})

const mapDispatchToProps = (dispatch) => ({
  dispatch
})
MyHeader = connect(CounterMapStateToProps, mapDispatchToProps)(MyHeader)

export default withRouter(MyHeader)
