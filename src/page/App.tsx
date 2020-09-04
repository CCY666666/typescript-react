import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Link
  } from 'react-router-dom';
  import { Button, Slider } from 'antd';
  import routes from '@/router'
  import { RouteWithSubRoutes } from '@/router/router'
  import { RouteInterface } from '@/router/interface'
  import './App.css'
  
  
  const App: React.FC = () =>{
      return(
          <Router>
              <div className='App'>
                  <div className='content-left'>
                        <ul>
                            <li><Link to="/home">Home 首页</Link></li>
                            <li><Link to="/persion">persion 关于</Link></li>
                        </ul>
                        <div>
                            <Button type="primary">Button</Button>
                            <Slider defaultValue={30} />
                        </div>
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