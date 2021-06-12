import {combineReducers} from 'redux';
import GlobalSlice from './GlobalSlice';
import ProductsSlice from './ProductsSlice';

const rootReducers = combineReducers({
    globalSlice: GlobalSlice,
    productsSlice: ProductsSlice
})

export default rootReducers;