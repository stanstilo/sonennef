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

 export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapShot = await userRef.get(); 
      console.log(snapShot);
     if(!snapShot.exists){
      const {displayName, email} = userAuth;
       const createdAt = new Date()
      try{
        await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData  
        })
      }catch(error){
        console.log('error creating user', error.message);
      }
    }
    return userRef
  }
 
  firebase.initializeApp(config)
  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt: 'select_account'})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

  export default firebase;