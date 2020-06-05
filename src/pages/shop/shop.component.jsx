import React, {useEffect} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from "../collection/collection.component";
import {fetchCollectionsSucessAsync} from '../../redux/shop/shop.actions';
import {selectIsCollectionFetching, selectisCollectionsLoaded} from '../../redux/shop/shop.selector';
import WithSpinner from '../../components/with-spinner/with-spinner.component';




const WithSpinnerCollectionOverview = WithSpinner(CollectionOverview);
const WithSpinnerCollectionPage = WithSpinner(CollectionPage);


const ShopPage = ({fetchCollectionsSucessAsync, match, isCollectionFetching, isCollectionLoaded}) => {
   
    useEffect( () => {
        console.log("hello")
        fetchCollectionsSucessAsync()
    }, [fetchCollectionsSucessAsync])

    
        
     
    return(
        <div className="shop-page">
            <Route exact path={`${match.path}`} render = {(props) => (<WithSpinnerCollectionOverview isLoading={isCollectionFetching} {...props} />)} />
            <Route exact path={`${match.path}/:collectionId`} render = {(props) =>(<WithSpinnerCollectionPage isLoading={!isCollectionLoaded} {...props} />)} />
        </div>
    )
    
}

const mapStateToProps = state => ({
    isCollectionFetching : selectIsCollectionFetching(state),
    isCollectionLoaded: selectisCollectionsLoaded(state)
})

const mapDispatchToState = dispatch => ({
    fetchCollectionsSucessAsync: () => dispatch(fetchCollectionsSucessAsync())
})

export default connect(mapStateToProps, mapDispatchToState)(ShopPage);