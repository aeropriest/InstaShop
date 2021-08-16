import CartActionTypes from './cart.types'
import {addItemToCart, removeItemFromCart} from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    console.log(action.payload)
    switch( action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
        }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload) 
            }
        case CartActionTypes.REMOVE_ITEM:
            return {
                    ...state,
                    cartItems: removeItemFromCart(state.cartItems, action.payload) 
                }
            case CartActionTypes.CLEAR_ITEM_FROM_CART:
            console.log("in the reducer, can it remove it?")
                return {
                    ...state,
                    cartItems: state.cartItems.filter(cartItem => cartItem !== action.payload)
                }
        default:
            return state
    }
}

export default cartReducer