import React from 'react'
import {FaShoppingBag} from 'react-icons/fa';
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../store/actions/cart/cart.actions';
import {selectCartItemsCount} from '../../store/reducers/selector'
import { createStructuredSelector} from 'reselect'

import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden, itemCount}) =>  {
    return (
        <div className = 'cart-icon' onClick={toggleCartHidden}>
            <FaShoppingBag className = 'shopping-bag' />
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
   itemCount:selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)