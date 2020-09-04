import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link
  } from 'react-router-dom';
  import { Button, Slider, Menu } from 'antd';
  import { DesktopOutlined } from '@ant-design/icons'
  import routes from '@/router'
  import { RouteWithSubRoutes } from '@/router/router'
  import { RouteInterface } from '@/router/interface'
  import './App.less'
  
  const { SubMenu } = Menu;

  const App: React.FC = () =>{
      return(
          <Router>
              <div className='App'>
                  <div className='content-left'>
                  <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    style={{width:'100%',height:'100%'}}
                    theme="dark"
                    inlineCollapsed={false}
                    >
                    <Menu.Item key="1">
                        <DesktopOutlined />
                        <span><Link to="/home">Home 首页</Link></span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <DesktopOutlined />
                        <span><Link to="/persion">persion 关于</Link></span>
                    </Menu.Item>
                    <Menu.Item key="3">
                    <DesktopOutlined />
                        <span>Option 3</span>
                    </Menu.Item>
                    <SubMenu
                        key="sub1"
                        title={
                        <span>
                        <DesktopOutlined />
                            <span>Navigation One</span>
                        </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                        <span>
                        <DesktopOutlined />
                            <span>Navigation Two</span>
                        </span>
                        }
                    >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    </Menu>
                  </div>
                  <div className='content-right'>
                    <Switch>
                        {routes.map((route: RouteInterface, i:number)=>{
                            return RouteWithSubRoutes(route,i)
                        })}
                    </Switch>
                  </div>
              </div>
          </Router>
      )
  }

  export default App;