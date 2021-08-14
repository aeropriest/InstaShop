import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBDDLmfz8i-c6BdqYftG_PVy7rPnWquhtw",
    authDomain: "instashop-db-affd4.firebaseapp.com",
    projectId: "instashop-db-affd4",
    storageBucket: "instashop-db-affd4.appspot.com",
    messagingSenderId: "323424343126",
    appId: "1:323424343126:web:d00e698f811edc9692d7f7",
    measurementId: "G-SQL90J6BCN"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
      console.log('user does not eist')
      console.log(userAuth)
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;