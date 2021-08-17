import './collection.styles.scss'
import {connect} from 'react-redux'
import CollectionItem from '../../components/collection-item/collection-item.components'

import { selectCollection } from '../../redux/shop/shop.selector'

const CollectionPage = ({ collection }) => (
    <div className='category'>
        <h2>category page</h2>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage)