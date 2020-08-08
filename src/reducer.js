export const initialState = {
    cart: [],
    // user: null,
};

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            // logic for adding item to cart
            return { ...state, cart: [...state.cart, action.item] };
            break;
        case 'REMOVE_FROM_CART':
            return { state };
            break;
        default:
            return { state };
            break;
    }
}

export default reducer;
