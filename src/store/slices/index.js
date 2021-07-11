import {combineReducers} from 'redux';
import GlobalSlice from './GlobalSlice';
import ProductsSlice from './ProductsSlice';
import CartSlice from './CartSlice';

const rootReducers = combineReducers({
    globalSlice: GlobalSlice,
    productsSlice: ProductsSlice,
    cartSlice: CartSlice,
})

export default rootReducers;