import React from "react";

import {connect} from 'react-redux';
import {selectCollectionForPreview} from '../../redux/shop/shop.selector'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

const CollectionOverview = ({collections}) => {
    return(
        <div className="collection-overview">
            {collections.map(({id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))}
        </div>
    )
}

const mapStateToProps = state =>({
    collections: selectCollectionForPreview(state)
})

export default connect(mapStateToProps, null)(CollectionOverview);