
import Login from './pages/Login';
import Signin from './pages/Signin';

import Notfind from './pages/Notfind';
import List from './pages/admin/products/List';
import Editor from './pages/admin/products/Editor';
import User from './pages/admin/authoritycontrol/userControl/User';






//不需要权限
export const mainRouter = [
    { path: "/login", name: "Login", component: Login },
    { path: "/signin", name: "Login", component: Signin },
    { path: "/404", name: "Notfind", component: Notfind },
    
  ]

  //需要登录
  export const adminRouter = [
    { path: "/admin/list", name: "List", component: List },
    { path: "/admin/editor", name: "Editor", component: Editor },
    { path: "/admin/User", name: "User", component: User },
    
  ]