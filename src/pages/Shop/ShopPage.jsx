import React from 'react'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import CollectionPage from '../Collection/Collection'
import { Route } from 'react-router-dom'
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
 import { updateCollections} from '../../store/actions/shop/shop.actions'

    class shopPage extends React.Component{
        unsubscribeFromSnapshot = null

        componentDidMount(){
            const {updateCollections} = this.props
          const collectionRef = firestore.collection('collections')
         this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap)
          })
        }
        render() {
          const {match} = this.props
            return (
                <div className='shop-page'>
                   <Route exact path={`${match.path}`} component={CollectionsOverview}  />
                   <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
                </div>
            )
        }
    }
   
    
const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(shopPage);