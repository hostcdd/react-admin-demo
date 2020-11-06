import React,{useEffect,useState} from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {menuList} from '../../menuList.js'
import {Link,withRouter} from "react-router-dom";
import MyHeader from './MyHeader'
// 动态渲染路由如果报错，用wintRouter包裹一下

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function Index(props) {
  //页面刷新激活点击效果
  const [selectedKeys,setSelectedKeys] = useState('1-1')
  useEffect(() => {  
    menuList.map(menu => {
      menu.children.filter(item => {
        if(item.url == props.location.pathname){
          // console.log('key',item.key)
          setSelectedKeys(item.key)
        }
      })
    })
  },[props.location.pathname])    //监听路由变化

  //菜单渲染
  let menuStr = menuList.map((subMenu,index) => {
      let itemStr = subMenu.children.map((item,index) => {
        return (
          <Menu.Item key={item.key} >
            <Link to={item.url}/>
            {item.name}
          </Menu.Item>
        )
      })
    return <SubMenu key={subMenu.key} icon={<UserOutlined />} title={subMenu.title}>{itemStr}</SubMenu>
  })
  
    return (
        <Layout>
          <MyHeader />
          <Layout>
            <Sider width={200} className="site-layout-background">
              <Menu
                mode="inline"
                defaultSelectedKeys={['1-1']}
                selectedKeys={selectedKeys}
                defaultOpenKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
              >
                {menuStr}
              </Menu>
            </Sider>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content
                className="site-layout-background"
                style={{
                  padding: 24,
                  margin: 0,
                  minHeight: 280,
                }}
              >
                {props.children}
              </Content>
            </Layout>
          </Layout>
        </Layout>
    )
}

export default withRouter(Index)

