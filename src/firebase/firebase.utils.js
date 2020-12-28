import firebase from 'firebase/app'
import 'firebase/firestore'
import  'firebase/auth'

const config = {
    apiKey: "AIzaSyDtEfx74ezmUXc6FFCnERYJ8-GsQU_rECc",
    authDomain: "testsone-db.firebaseapp.com",
    projectId: "testsone-db",
    storageBucket: "testsone-db.appspot.com",
    messagingSenderId: "755784102792",
    appId: "1:755784102792:web:64d94892d6026a5db0803d",
    measurementId: "G-TKEGBZRGMF"
  };

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;