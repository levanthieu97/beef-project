import {UPDATE_PAGE_LOADING, UPDATE_LOCALE, SET_FILTER_OPEN, IS_EMPTY_CART, IS_SMALL_LAYOUT} from '../types/GlobalType';

export const updateWaitLoading = (isWaiting) => ({
    type: UPDATE_PAGE_LOADING,
    payload: isWaiting
})

export const updateLocale = (locale) => ({
    type: UPDATE_LOCALE,
    payload: locale
})

export const setFilterOpen = (filterOpen) => ({
    type: SET_FILTER_OPEN,
    payload: filterOpen
})

export const setEmptyCart = (isEmpty) => ({
    type: IS_EMPTY_CART,
    payload: isEmpty
})

export const isSmallLayout = (isSmall= false) => ({
    type: IS_SMALL_LAYOUT,
    payload: isSmall
}) 