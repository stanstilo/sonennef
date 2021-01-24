import React from 'react'
import {FaShoppingBag} from 'react-icons/fa';
import { connect } from 'react-redux'
import { toggleCartHidden } from '../../store/actions/cart.actions';
import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden}) =>  {
    return (
        <div className = 'cart-icon' onClick={toggleCartHidden}>
            <FaShoppingBag classNAME = 'shopping-bag' />
            <span className='item-count'>0</span>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon)