//import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import {Route} from 'react-router-dom'
import CollectionPage from '../collection/collection.component'

const ShopPage = ({match, param}) => {
    console.log('--shop page---')
    console.log(match)
    return(
    <div className='shop-page'>
        <Route exact path={`${match.path}`}/>
        <Route path={`${match.path}/:categoryId`} component={CollectionPage} />
    </div>
    )
}

export default ShopPage