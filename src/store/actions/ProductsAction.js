import {SELECTED_PRODUCT, CLEAR_PRODUCT} from '../types/ProductsType';

export const selectedProduct = (product) => ({
    type: SELECTED_PRODUCT,
    payload: {...product}
})

export const clearProduct = () => ({
    type: CLEAR_PRODUCT,
})