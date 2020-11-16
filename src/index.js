import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route, Switch ,Redirect} from "react-router-dom";   //history模式,部署时候刷新页面找不到，需要特殊配置
import { HashRouter as Router, Route, Switch ,Redirect} from "react-router-dom";   //哈希模式
import {Provider} from 'react-redux';
import store from './store/index'
import App from './App';
import {adminRouter,mainRouter} from './routerMap'
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Provider store={store}>
    <Router>
        <Switch>
          {/* 登录之后路由 */}
         <Route path="/admin" render={routeProps => <App {...routeProps}/>}/>
           {/* 不需要登录 */}
          {
            mainRouter.map(item => {
              return <Route key={item.path} {...item}/>
            })
          }
          <Redirect to={adminRouter[0].path} from="/"/>
          <Redirect to='/404'/>
        </Switch>
    </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
