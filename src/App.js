import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/Shop/ShopPage'



class App extends Component {
  render() {
    return ( 
    <>
          <Switch>
            <Route path='/' exact component={HomePage}></Route>
             <Route path='/shop' component = {ShopPage}></Route>
          </Switch>
          
   
    </>
    )
  }
}

export default App
