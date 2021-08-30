import { takeEvery, call, put } from 'redux-saga/effects'

import ShopActionTypes from './shop.types'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

import {
    fetchCollectionsFailure,
    fetchCollectionsSuccess
} from './shop.actions'

export function* fetchCollectionsStart() {
    yield console.log("saga is integreated")
    try{
        const collectionRef = firestore.collection('collections')
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap, 
            snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    }catch(error){

        yield put(fetchCollectionsFailure(error.message))
    }

}

export function* fetchCollectionsStartAsync(){
    yield takeEvery(
        ShopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsStartAsync
    )
}