import SHOP_DATA from "../../../pages/Shop/shop_data"
import * as actionTypes from '../../actions/actionTypes'

const INITIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    case actionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections:action.payload
      }
      default:
          return state
  }
}

export default shopReducer