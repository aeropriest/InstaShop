import React from 'react'
import './cart-icon.styles.scss'
import { connect } from 'react-redux'

import { ReactComponent as ShoppinIcon } from '../../assets/cart.svg'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
//import { selectCartItemsCount  } from '../../redux/cart/cart.selector'

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className="cart-icon" onClick={ toggleCartHidden }>
        <ShoppinIcon className="shopping-icon"/>
        <span className="item-count">{ itemCount }</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = ({cart: {cartItems}}) => ({
//    const mapStateToProps = state => ({
    itemCount: cartItems.reduce((qQty, cartItem) => qQty+cartItem.quantity,0)
    //itemCount: selectCartItemsCount
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon)