import { createSelector } from "reselect";
//import memoize from 'lodash.memoize'

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  women: 4,
  men: 5
}

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key])
  );
  

  export const selectCollection = (collectionUrlParam) => {
    console.log('selecor')
    console.log(collectionUrlParam)
    return(
      createSelector(
        [selectCollections],
        collections =>
          collections.find(
            collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
          )
      )
    )
  }
  /*
  export const selectCollection = (collectionUrlParam) => {
    console.log('selecor')
    console.log(collectionUrlParam)
  return (
    createSelector(
    [selectCollections],
    (collections) => collections)
  )
  }
  */