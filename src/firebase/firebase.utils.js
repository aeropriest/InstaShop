import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBDDLmfz8i-c6BdqYftG_PVy7rPnWquhtw",
    authDomain: "instashop-db-affd4.firebaseapp.com",
    projectId: "instashop-db-affd4",
    storageBucket: "instashop-db-affd4.appspot.com",
    messagingSenderId: "323424343126",
    appId: "1:323424343126:web:d00e698f811edc9692d7f7",
    measurementId: "G-SQL90J6BCN"
  }

firebase.initializeApp(config)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return


  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
      console.log('user does not eist')
      console.log(userAuth)
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

export const addCollectionAndDocuments = async (collectionKey, objecsToAdd) => {
  console.log('addCollectionAndDocuments')
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()

  console.log(objecsToAdd)
  objecsToAdd.forEach( obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })

  return await batch.commit()

}

export const convertCollectionsSnapshotToMap = ( collections ) => {
   const transformedCollectoion = collections.docs.map( doc => {
     const { title, items } = doc.data()
     return {
       routeName: encodeURI(title.toLowerCase()),
       id: doc.id,
       title,
       items
     }
   })

   console.log(transformedCollectoion)
   return transformedCollectoion.reduce((accumulator, collection) =>{
     accumulator[collection.title.toLowerCase()] = collection
     return accumulator
   }, {})
}

export const getCurrentUser = () => {
  return new Promise((resolve, reject)=>{
    const unsubscribe = auth.onAuthStateChanged(userAuth=>{
      unsubscribe()
      resolve(userAuth)
    }, reject)
  })
}


export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export default firebase