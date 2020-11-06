import React from 'react';
import { Button } from 'antd';
import { Route, Link, Switch ,Redirect} from "react-router-dom";
import {isLogin} from './utils/auth.js'
import logo from './logo.svg';
import './App.css';
import {adminRouter} from './routerMap'
import Layout from './components/layout/Index'


function App({match}) {
  return (
    isLogin()
    ?<Layout>
      <Switch>
           {
           adminRouter.map((item, index) => {
              return <Route key={index} path={item.path} exact render={props => (<item.component {...props} />)} />
             })
          }

          <Redirect to={adminRouter[0].path} from="/admin"/>
          <Redirect to='/404'/>
        </Switch>
    </Layout>
    :<Redirect to='/login'/>
  );
}


export default App;
