import './collection-overview.styles.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../collection-overview/collection-overview.component'

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';


const CollectionOverview = ({collections}) => {
    console.log('----collection overview-----')
//    console.log(collections)
    return (<div className='collection-overview'> Collection Overview
        {
            //collections.map( ({id, ...otherCollectionProps}) => (
            //<CollectionPreview key={id} {...otherCollectionProps}/>
            //))

        }
    </div>)
}


const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)