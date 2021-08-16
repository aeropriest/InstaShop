import React from 'react'
import { connect } from 'react-redux'
import CustomButton from '../custom-button/custom-button.component'

import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'

import { selectCartItems } from '../../redux/cart/cart.selector'

import { withRouter } from 'react-router'

const CartDropdown = ({ cartItems, history }) => {
    return(
    <div className="cart-dropdown">
        <div className="cart-items">
            {
              cartItems.length 
                ? cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />))
                :  <span className='empty-message'> Empty Cart </span>                 
            }
        </div>
        <CustomButton onClick={()=>history.push('/checkout')}>CHECKOUT NOW</CustomButton>
    </div>
    )
}


//const mapStateToProps = ({ cart: {cartItems}}) => ({
const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
})

export default  withRouter(connect(mapStateToProps, null)(CartDropdown))