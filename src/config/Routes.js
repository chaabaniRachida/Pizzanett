import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Async from '../components/Async'
import Connected from '../Connected'


const Home = Async(() => import('../screens/Home'))
const ProductPizza = Async(() => import('../screens/ProductPizza'))
const ProductDessert = Async(() => import('../screens/ProductDessert'))
const Menu = Async(() => import('../screens/Menu'))
const Login = Async(() => import('../screens/Login'))



const publicRoutes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }
  
]

const privateRoutes = [
 
  {
    path: '/Home',
    name: 'home',
    component: Home
  },
  {
    path: '/ProductPizza',
    name: 'ProductPizza',
    component: ProductPizza
  },
  {
    path: '/ProductDessert',
    name: 'ProductDessert',
    component: ProductDessert
  },
  {
    path: '/Menu',
    name: 'Menu',
    component: Menu
  }

]

const Routes = () => (
  <Router>
    <Switch>
      {privateRoutes.map(({ path, component: Component }, index) => (
        <Connected key={index} path={path} exact component={Component} />
      ))}
      {publicRoutes.map(({ path, component: Component }, index) => (
        <Route
          key={index}
          path={path}
          exact
          render={props => <Component {...props} />}
        />
      ))}
       <Redirect to ='/Login'/>
    </Switch>
  </Router>
)

export default Routes;