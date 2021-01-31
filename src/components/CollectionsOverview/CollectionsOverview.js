import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import { selectCollectionsForPreview } from '../../store/reducers/shop/shop.selector'
import CollectionPreview from '../CollectionPreview/CollectionPreview'
import './collections-overview.styles.scss'


const collectionsOverview = ({collections}) => (
    <div className='collections-overview'>
         {
                   collections.map(({id, ...otherCollectionProps}) => (
                       <CollectionPreview key={id} {...otherCollectionProps}/>
                   ))
                }
    </div>
)

const mapStateToProps = () => createStructuredSelector({
    collections:selectCollectionsForPreview 
  })
  
  export default connect(mapStateToProps)(collectionsOverview)