import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/Shop/ShopPage'
import './App.css'
import Auth from './pages/Auth/Auth'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // this.setState({currentUser:user}); 
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth) 
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        }) 
      }
      this.setState({ currentUser: userAuth})
      
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
