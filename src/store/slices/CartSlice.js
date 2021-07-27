import {ADD_PRODUCT, SET_COUNT, REMOVE_PRODUCT} from '../types/CartType';

const initialState = {
    cartItems: [],
    numberProduct: 0,
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
                state.numberProduct += action.payload.count;
                return {
                    ...state,
                    cartItems: state.cartItems,
                    numberProduct: state.numberProduct
                }
            }
            state.numberProduct += action.payload.count;
            return {
                ...state,
                cartItems: [...state.cartItems, {...action.payload}],
                numberProduct: state.numberProduct
            }
        case REMOVE_PRODUCT: 
            state.cartItems.splice(indexSameProduct(state, action.payload), 1);
            state.numberProduct -= action.payload.count;
            return {
                ...state,
                cartItems: state.cartItems,
                
            }
        case SET_COUNT:
            const indexItem = indexSameProduct(state, action.payload);
            const beforeNumber = action.payload.count - state.cartItems[indexItem].count;
            state.cartItems[indexItem].count = action.payload.count;
            state.numberProduct += beforeNumber;
            return {
                ...state,
                cartItems: state.cartItems,
                numberProduct: state.numberProduct
            }
        default: 
            return state;
    }
}

export default CartSlice;