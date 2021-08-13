import firebase from 'firebase/app'

import 'firebase/firestore'
import 'firebase/auth'
require('firebase/auth')

const config = {
    apiKey: "AIzaSyBDDLmfz8i-c6BdqYftG_PVy7rPnWquhtw",
    authDomain: "instashop-db-affd4.firebaseapp.com",
    projectId: "instashop-db-affd4",
    storageBucket: "instashop-db-affd4.appspot.com",
    messagingSenderId: "323424343126",
    appId: "1:323424343126:web:d00e698f811edc9692d7f7",
    measurementId: "G-SQL90J6BCN"
};

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase