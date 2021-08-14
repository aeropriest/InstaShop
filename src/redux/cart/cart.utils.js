const addItemToCart = (cartItems, itemToAdd) => {
    console.log('add items to ')
    console.log(cartItems)
    console.log(itemToAdd)
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === itemToAdd.id
        )

    if( existingCartItem ){
        console.log('---item eists, increment ---')
        return cartItems.map(cartItem => 
            cartItem.id === itemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity+1 }
            : { cartItem }
            )
    }

    return [...cartItems, { ...itemToAdd, quantity: 1}]
}

export default addItemToCart