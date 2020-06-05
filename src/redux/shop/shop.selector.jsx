import {createSelector} from 'reselect';

// const COLLECTION_ID_MAP ={
//     hats : 1,
//     sneakers : 2,
//     jackets : 3,
//     women : 4,
//     men : 5
    
// }

const selectShop = state => state.shop;

export const selectCollectionFromShop = createSelector(
    [selectShop],
    (shop) => shop.collections
)


export const selectCollectionForPreview = createSelector(
    [selectCollectionFromShop],
    collections => collections ? Object.keys(collections).map(key =>collections[key]) : []
)

export const selectCollection = collectionUrlParm => createSelector(
    [selectCollectionFromShop],
    collections => (collections ? collections[collectionUrlParm] : null)
)


export const selectIsCollectionFetching = createSelector(
    [selectShop],
    shop => shop.isFetching
)

export const selectisCollectionsLoaded = createSelector(
    [selectShop],
    shop => !!shop.collections
)