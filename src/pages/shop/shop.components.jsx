import {Route} from 'react-router-dom'
import CollectionPageContainer from '../collection/collection.container'
import { connect } from 'react-redux'
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container'
import React from 'react';



class ShopPage extends React.Component {

  componentDidMount() {
    console.log("Shope page did mount")
    const { fetchCollectionsStartAsync } = this.props
    console.log(fetchCollectionsStartAsync)
    fetchCollectionsStartAsync()

  }

  render() {
    const { match } = this.props;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync)
})

export default connect(
  null,
  mapDispatchToProps
)(ShopPage)

