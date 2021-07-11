import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from './slices';


// BIND MIDDLEWARE
const bindMiddleware = (middleware) => {
    if(process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension');
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
}

const makeStore = () => {
    const {persistStore, persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;
    const persistConfig = {
        key: 'cart',
        whitelist: 'cartSlice',
        storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducers);

    const store = createStore(
        persistedReducer,
        bindMiddleware([thunkMiddleware])
    );

    store.__persistor = persistStore(store);
    return store;
}

export default makeStore;
