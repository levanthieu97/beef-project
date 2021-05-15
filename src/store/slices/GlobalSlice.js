import _ from 'lodash';
import {UPDATE_PAGE_LOADING, UPDATE_LOCALE, SET_FILTER_OPEN} from '../types/GlobalType';

const initialState = {
    isWait: true,
    locale: 'us',
    filterOpen: false
}

export default (state = initialState, action) => {
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
        default:
            return state;
    }
}