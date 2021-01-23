import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/Shop/ShopPage'
import SignInAndSignUp from './pages/SignIn-And-SignUp/SignIn-And-SignUp'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import './App.css'

class App extends Component {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userR = await createUserProfileDocument(userAuth) 
       userR.onSnapshot(snapShot => {
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
             <Route path='/signin' component = {SignInAndSignUp}></Route>
          </Switch>
    </>
    )
  }
}

export default App
