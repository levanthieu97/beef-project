import {UPDATE_PAGE_LOADING, UPDATE_LOCALE, SET_FILTER_OPEN} from '../types/GlobalType';

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