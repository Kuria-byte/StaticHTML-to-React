import { addItemToCart, removeItemFromCart } from './cart.utils'

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const CartReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case 'TOGGLE_CART_HIDDEN':
            return {
                ...state,
                hidden: !state.hidden
            }

        case 'ADD_CART_ITEM':
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }

        case 'REMOVE_ITEM':
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)

            }

        //The filter() method creates a new array with all elements that pass the test implemented by the provided function.
        case 'CLEAR_CART_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    cartItem => cartItem.id !== action.payload.id
                )
            }



        default:
            return state;
    }

}

export default CartReducer;