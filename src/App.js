import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/Shop/ShopPage'
import './App.css'
import Auth from './pages/Auth/Auth'
import { auth } from './firebase/firebase.utils'

class App extends Component {

  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser:user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


  render() {
    return ( 
    <>
    <Header currentUser = {this.state.currentUser}/>
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
