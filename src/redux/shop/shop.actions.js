import ShopActionTypes from './shop.types'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'


export const fetchCollectionsStart = () => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_START,
})


export const fetchCollectionsSuccess = collectionsMap => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap

})

export const fetchCollectionsFailure = errorMessage => ({
    type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => {
    console.log('in fetchCollectionsStartAsync ')
    return dispatch => {
        console.log('call firestore')
        const collectionRef = firestore.collection('collections');
        dispatch(fetchCollectionsStart())

        collectionRef.get().then(snapshot => {
            console.log("snpashot is")
            console.log(snapshot)
          const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
          console.log("collection map is")
          console.log(collectionsMap)


          console.log("log of collectionsMap")
          console.log(collectionsMap)
    
          dispatch(fetchCollectionsSuccess(collectionsMap))
        }).catch(error => dispatch(fetchCollectionsFailure(error.message)))
    
    }

}
