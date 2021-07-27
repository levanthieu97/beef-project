import {CHECK_GIFT_ORDER, UPDATE_INFO_GIFT, UPDATE_SHIPPING_ADDRESS, UPDATE_SHIPPING_COST} from '../types/OrderType';

export const isCheckGiftOrder = (isChecked = false) => ({
    type: CHECK_GIFT_ORDER,
    payload: isChecked
});

export const updateInfoGift = (infoGift = {}) => ({
    type: UPDATE_INFO_GIFT,
    payload: {...infoGift}
})

export const updateShippingAddress = (shippingAddress = {}) => ({
    type: UPDATE_SHIPPING_ADDRESS,
    payload: {...shippingAddress}
})

export const updateShippingCost = (shippingCost = "") => ({
    type: UPDATE_SHIPPING_COST,
    payload: {...shippingCost}
})
