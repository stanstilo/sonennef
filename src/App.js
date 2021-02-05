import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/Shop/ShopPage";
import SignInAndSignUp from "./pages/SignIn-And-SignUp/SignIn-And-SignUp";
import { auth, createUserProfileDocument, addCollectionAndDocuments } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./store/actions/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./store/reducers/selector";
import CheckoutPage from "./pages/Checkout/Checkout";

import { selectCollectionsForPreview } from "./store/reducers/shop/shop.selector";
import "./App.css";


class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userR = await createUserProfileDocument(userAuth);
        userR.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route exact path='/checkout' component={CheckoutPage}></Route>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : SignInAndSignUp
            }
          ></Route>
        </Switch>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
