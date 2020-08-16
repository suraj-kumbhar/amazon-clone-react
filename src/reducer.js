export const initialState = {
    cart: [],
    user: null,
};

export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            // logic for adding item to cart
            return { ...state, user:action.user };
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
            case 'SET_USER':
                return state;
        default:
            return state;
    }
}

export default reducer;
