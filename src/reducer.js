import { act } from 'react-dom/test-utils';

export const initialState = {
    cart: [],
    user: null,
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            // logic for adding item to cart
            return { ...state, cart: [...state.cart, action.item] };
        case 'REMOVE_FROM_CART':
            let newCart = [...state.cart];

            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            if (index >= 0) {
                newCart.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id :${action.id}) as it is not in the cart`
                );
            }
            return { ...state, cart: newCart };
        default:
            return state;
    }
}

export default reducer;
