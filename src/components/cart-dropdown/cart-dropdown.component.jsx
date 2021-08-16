import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../redux/cart/cart.selector'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

import { withRouter } from 'react-router'

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
              cartItems.length 
                ? cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                :  <span className='empty-message'> Empty Cart </span>                 
            }
        </div>
        <CustomButton onClick={()=>{
          history.push('/checkout');
          //dispatch(toggleCartHidden);
          }}>CHECKOUT NOW</CustomButton>
    </div>
    )
}


//const mapStateToProps = ({ cart: {cartItems}}) => ({
const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
})

export default  withRouter(connect(mapStateToProps, null)(CartDropdown))