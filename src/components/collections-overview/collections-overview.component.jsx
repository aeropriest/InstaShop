import './collections-overview.styles.scss'

import { selectCollection } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from '../preview-collection/collection-preview.component'

const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
             {
                collections.map( ({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
            }       
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollection
})


export default connect(mapStateToProps)(CollectionOverview)