import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';
import routes from '@/router'
import { RouteWithSubRoutes } from '@/router/router'
import { RouteInterface } from '@/router/interface'
  
  
  const App: React.FC = () =>{
      return(
          <Router>
            <Switch>
                {routes.map((route: RouteInterface, i:number)=>{
                    return RouteWithSubRoutes(route,i)
                })}
                <Redirect to='/home' />
            </Switch>
          </Router>
      )
  }

  export default App;