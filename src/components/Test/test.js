import firebase from 'firebase/app'
import 'firebase/firestore'


const firestore = firebase.firestore()

firestore.collection('users').doc('Msn9gFTuo7rD6J1TNQya').collection('cartItems').doc('JGBRU4gAjMZDujtrF0wq')

firestore.doc('/users/Msn9gFTuo7rD6J1TNQya/cartItems/JGBRU4gAjMZDujtrF0wq')