import {UPDATE_PAGE_LOADING, UPDATE_LOCALE, SET_FILTER_OPEN, IS_EMPTY_CART, IS_SMALL_LAYOUT} from '../types/GlobalType';

const initialState = {
    isWait: true,
    isEmptyCart: true,
    locale: 'us',
    filterOpen: false,
    isSmallLayout: window.innerWidth <= 767,
}

const GlobalSlice = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_PAGE_LOADING:
            return {
                ...state, isWait: action.payload
            };
        case UPDATE_LOCALE:
            return {
                ...state, locale: action.payload
            };
        case SET_FILTER_OPEN:
            return {
                ...state, filterOpen: action.payload
            }
        case IS_EMPTY_CART:
            return {
                ...state, isEmptyCart: action.payload
            }
        case IS_SMALL_LAYOUT:
            return {
                ...state, isSmallLayout: action.payload
            }
        default:
            return state;
    }
}

export default GlobalSlice;