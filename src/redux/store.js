import {createStore} from 'redux';
import AppReducer from './reducers';

const initialState = { 
    notes: [{key: 'x'},{key: 'b'},{key: 'a'}, {key: 'b'},{key: 'b'},{key: 'a'},{key: 'b'},{key: 'a'}, {key: 'b'},{key: 'b'},{key: 'a'},{key: 'b'},{key: 'a'}, {key: 'b'},{key: 'b'},{key: 'a'} ]
};

const store = createStore(AppReducer, initialState);

export default store;


