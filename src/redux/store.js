import {createStore} from 'redux';
import AppReducer from './reducers';

const initialState = { 
    notes: [{id: 1, note: 'testn'},{id: 2, note: 'estv'},{id: 3, note: 'test'},{id: 4, note: 'hi'},{id: 5, note: 'you'},
            {id: 6, note: 'iffd'},{id: 7, note: 'hfdsf'},{id: 8, note: 'adfd'},{id: 9, note: 'how'},{id: 11, note: 'are'} ]
};

const store = createStore(AppReducer, initialState);

export default store;


