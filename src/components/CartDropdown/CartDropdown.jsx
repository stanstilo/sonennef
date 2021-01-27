import React from 'react'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import {connect} from 'react-redux'
import {selectCartItems} from '../../store/reducers/selector'
import {createStructuredSelector} from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../store/actions/cart/cart.actions'
import './cart-dropdown.styles.scss'

 const CartDropdown = ({cartItems, history, dispatch}) => { 
         
    const cartItemsMap = 
         cartItems.length ? (
       cartItems.map(cartItem =>  
       {
        return( 
        <CartItem key={cartItem.id} item={cartItem}/>
       )  
    }
)):(<span className='empty-message'>Your Cart is empty</span>)
        

    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
               {cartItemsMap}
            </div>
            <CustomButton onClick={   
                ()=>{history.push('/checkout');
                dispatch(toggleCartHidden())
                }}
                >
                    GO TO CHECKOUT
            </CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
   cartItems:selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown))