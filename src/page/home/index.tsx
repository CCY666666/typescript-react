  import React from 'react';
  import {
    Switch,
    Link
  } from 'react-router-dom';
  import { Menu } from 'antd';
  import { DesktopOutlined } from '@ant-design/icons'
  import { RouteWithSubRoutes } from '@/router/router';
  import { RouteInterface } from '@/router/interface';
  import './index.less'

  const { SubMenu } = Menu;

  interface IState {
    collapsed: boolean
  }

  interface ISProps {
    routes: any,
    history: any
  }
  let isLogin: any
  
  function outLogin(el:any){
    localStorage.setItem('isLogin', JSON.stringify(false))
    el.props.history.push('/login')
  }

  class Home extends React.Component<ISProps,IState>{
    constructor(props:ISProps){
      super(props);
      this.state={
        collapsed:false
      }
    }
    UNSAFE_componentWillMount(){
      window.addEventListener('resize', this.handleResize.bind(this)) //监听窗口大小改变
    }
    componentDidMount(){
      isLogin = localStorage.getItem('isLogin')
      if(!JSON.parse(isLogin)){
        this.props.history.push('/login')
      } else{
        this.props.history.push('/persion')
      }
    }
    componentWillUnmount(){
      window.removeEventListener('resize', this.handleResize.bind(this)) //移除监听
    }

    //监听窗口大小改变
    handleResize = async(e:any) => {
      if(e.target.innerWidth*0.2 <= 170){
          this.setState({ collapsed: true })
      }else{
          this.setState({ collapsed: false })
      }
    }
    
    render(){
      const { collapsed } = this.state
      const { routes } = this.props
      return (
        <div className='mainly'>
        <div className='content-left'>
        <Menu
          defaultSelectedKeys={['2']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          style={{width:'100%',height:'100%'}}
          theme="dark"
          inlineCollapsed={collapsed}
          >
          <Menu.Item key="1" onClick={()=> outLogin(this)}>
              <DesktopOutlined />
              <span>退出登陆</span>
          </Menu.Item>
          <Menu.Item key="2">
              <DesktopOutlined />
              <span><Link to="/persion">persion 首页</Link></span>
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
      )
    }
  }

 export default Home;