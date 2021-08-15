import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
)

export const selectCartItemsCount = createStructuredSelector(
    [selectCartItems],
    cartItem =>
        cartItems.reduce(
            (accQty, cartItem) => accQty + cartItem.quantity,
            0)
)

