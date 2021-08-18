import './collection.component'
import { connect } from 'react-redux'
//import CollectionItem from '../../components/collection-item/collection-item.components'
import {selectCollection} from '../../redux/shop/shop.selector'


const CollectionPage = ({ collection }) => {
    console.log("=====category page=====")
    console.log(collection)
    return(
        <div className='category'>
            <h2>CollectionPage Page</h2>
        </div>
    )

}
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
  });
  
  export default connect(mapStateToProps)(CollectionPage)
