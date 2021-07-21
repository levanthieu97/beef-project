import {combineReducers} from 'redux';
import GlobalSlice from './GlobalSlice';
import ProductsSlice from './ProductsSlice';
import CartSlice from './CartSlice';
import OrderSlice from './OrderSlice';


const rootReducers = combineReducers({
    globalSlice: GlobalSlice,
    productsSlice: ProductsSlice,
    cartSlice: CartSlice,
    orderSlice: OrderSlice,
})

export default rootReducers;