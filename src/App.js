import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/Shop/ShopPage'
import SignInAndSignUp from './pages/SignIn-And-SignUp/SignIn-And-SignUp'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import {setCurrentUser} from  './store/actions/user.actions'
import './App.css'

class App extends Component {
 
  unsubscribeFromAuth = null

  componentDidMount() {
     const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userR = await createUserProfileDocument(userAuth) 
       userR.onSnapshot(snapShot => {
          setCurrentUser({ 
              id:snapShot.id,
              ...snapShot.data() 
          })
        }) 
      }
      setCurrentUser(userAuth)  
    }) 
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }


render() {
    return ( 
    <>
         <Header />
          <Switch>
            <Route path='/' exact component={HomePage}></Route>
             <Route path='/shop' component = {ShopPage}></Route>
             <Route path='/signin' component = {SignInAndSignUp}></Route>
          </Switch>
    </>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App)
