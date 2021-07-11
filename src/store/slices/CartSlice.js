import {ADD_PRODUCT, SET_COUNT, REMOVE_PRODUCT} from '../types/CartType';

const initialState = {
    cartItems: [],
}

const indexSameProduct = (state, action) => {
    const sameProduct = (product) => (
        product.id === action.id &&
        product.size === action.size
    );

    return state.cartItems.findIndex(sameProduct);
}

const CartSlice = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            const index = indexSameProduct(state, action.payload);

            if(index !== -1) {
                state.cartItems[index].count += action.payload.count;
                return {
                    ...state,
                    cartItems: state.cartItems,
                }
            }
            
            return {
                ...state,
                cartItems: [...state.cartItems, {...action.payload}],
            }
        case REMOVE_PRODUCT: 
            state.cartItems.splice(indexSameProduct(state, action.payload), 1);
            return {
                ...state,
                cartItems: state.cartItems,
            }
        case SET_COUNT:
            const indexItem = indexSameProduct(state, action.payload);
            state.cartItems[indexItem].count = action.payload.count;
            
            return {
                ...state,
                cartItems: state.cartItems
            }
        default: 
            return state;
    }
}

export default CartSlice;