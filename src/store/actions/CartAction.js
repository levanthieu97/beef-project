import {ADD_PRODUCT, SET_COUNT, REMOVE_PRODUCT} from '../types/CartType';

export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: {...product}
});

export const setCount = (product) => ({
    type: SET_COUNT,
    payload: {...product}
});

export const removeProduct = (product) => ({
    type: REMOVE_PRODUCT,
    payload: {...product}
});