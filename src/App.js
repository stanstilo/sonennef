import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/Shop/ShopPage'
import './App.css'
import Auth from './pages/Auth/Auth'

class App extends Component {
  render() {
    return ( 
    <>
    <Header />
          <Switch>
            <Route path='/' exact component={HomePage}></Route>
             <Route path='/shop' component = {ShopPage}></Route>
             <Route path='/signin' component = {Auth}></Route>
          </Switch>
          
   
    </>
    )
  }
}

export default App
