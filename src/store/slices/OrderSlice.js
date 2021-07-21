import {CHECK_GIFT_ORDER, UPDATE_INFO_GIFT, UPDATE_SHIPPING_ADDRESS} from '../types/OrderType';

const initialState = {
    isGiftOrder: false,
    giftMessage: {
        fromName: "",
        toName: "",
        message: "",
    },
    infoShippingAddress: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        apartment: "",
        address: "",
        city: "",
        country: "",
        state: "",
        zipCode: "",
    }
}

const OrderSlice = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_GIFT_ORDER:
            return {
                ...state, isGiftOrder: action.payload
            }
        case UPDATE_INFO_GIFT:
            return {
                ...state, giftMessage: action.payload
            }
        case UPDATE_SHIPPING_ADDRESS: 
            return {
                ...state, infoShippingAddress : action.payload
            }
        default:
            return state;
    }
}

export default OrderSlice;