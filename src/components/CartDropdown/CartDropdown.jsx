import React from 'react'
import CartItem from '../CartItem/CartItem'
import CustomButton from '../CustomButton/CustomButton'
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss'

 const CartDropdown = ({cartItems}) => {
    
    const cartItemsMap =  cartItems.map(cartItem =>  
     {
        return( 
        <CartItem key={cartItem.id} item={cartItem}/>
    )    
})
         
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
               {cartItemsMap}
            </div>
            <CustomButton>GO TO CHECKOUT </CustomButton>
        </div>
    )
}

const mapStateToProps = ({ cart: {cartItems}}) => ({
   cartItems
})

export default connect(mapStateToProps)(CartDropdown)