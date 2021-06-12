import _ from 'lodash';
import {SELECTED_PRODUCT, CLEAR_PRODUCT} from '../types/ProductsType';

const initialState = {
    selectedProduct: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECTED_PRODUCT: 
            return {
                ...state, selectedProduct: action.payload
            }
        case CLEAR_PRODUCT: 
            return {
                ...state, selectedProduct: {}
            }
        default: 
            return state;
    }
}