import {createStore, applyMiddleware} from 'redux';
import AppReducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger'



const initialState = { 
    notes: []
};

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, AppReducer);

const store = createStore(persistedReducer, initialState, applyMiddleware(logger));
const persistor = persistStore(store);

export {store, persistor};
