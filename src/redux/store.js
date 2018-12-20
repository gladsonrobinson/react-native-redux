import {createStore} from 'redux';
import AppReducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const initialState = { 
    notes: []
};

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, AppReducer);

const store = createStore(persistedReducer, initialState);
const persistor = persistStore(store);

export {store, persistor};
