import { createContext, useEffect, useState } from "react"

import { 
    addItemToCart, 
    removeItemFromCart, 
    filterItemFromCart, 
    getCartItemsCount,
    getCartTotal
} from "./cart.utils"

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartTotal: 0,
    cartItemsCount: 0
})

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true)
    const [cartItems, setCartItems] = useState([])
    const [cartItemsCount, setCartItemsCount] = useState(0)
    const [cartTotal, setCartTotal] = useState(0)
    
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item))    
    const addItem = item => setCartItems(addItemToCart(cartItems, item))    
    const toggleHidden = () => setHidden(!hidden)
    const clearItemFromCart = item => setCartItems(filterItemFromCart(cartItems, item))

    useEffect(()=> {
        setCartItemsCount(getCartItemsCount(cartItems))
        setCartTotal(getCartTotal(cartItems))
    },[cartItems])
   return(
        <CartContext.Provider
        value={{
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            removeItem,
            clearItemFromCart,
            cartTotal,
            cartItemsCount
        }}>{children}</CartContext.Provider>
    )
}

export default CartProvider