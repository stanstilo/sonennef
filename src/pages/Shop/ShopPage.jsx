import React from 'react'
import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview'
import CollectionPage from '../Collection/Collection'
import { Route } from 'react-router-dom'

const shopPage = ({match}) =>  {
    console.log(match);
        return (
            <div className='shop-page'>
               <Route exact path={`${match.path}`} component={CollectionsOverview}  />
               <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    }


export default shopPage;