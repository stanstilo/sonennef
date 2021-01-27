import React from 'react'
import { Link } from 'react-router-dom'
import './header.styles.scss'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
import {createStructuredSelector} from 'reselect'
import { selectCartHidden, selectCurrentUser } from '../../store/reducers/selector';


const Header = ({currentUser, hidden}) => {
    return (
        <div className = 'header'>
            <Link className = 'logo-container' to='/'>
                <img src ="g" alt="" className = 'logo' />
            </Link>
            <div className = 'options'>
              <Link className='option' to='/shop'>
                  SHOP
              </Link>
              <Link className='option' to='/contact'>
                  CONTACT
              </Link>
              {
                  currentUser ? <div className = 'option' onClick={()=> auth.signOut()}>SIGN OUT</div>: 
                  <Link className='option' to='/signin'>
                   SIGN IN
                </Link>
              } 
              <CartIcon />
            </div>
            { hidden ? null :
            <CartDropdown />
           }
        </div>
    )
}

 const mapStateToProps = createStructuredSelector({
 currentUser:selectCurrentUser,
 hidden:selectCartHidden
})

export default connect(mapStateToProps)(Header)
