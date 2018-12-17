import {createStore} from 'redux';
import AppReducer from './reducers';

const initialState = { 
    notes: [{id: 1, note: 'helloo'},{id: 2, note: 'dsfdsf'},{id: 3, note: 'fdsfjs'},{id: 4, note: 'vvsdfww'},{id: 5, note: 'nnweeef'},
            {id: 6, note: 'helloo'},{id: 7, note: 'dsfdsf'},{id: 8, note: 'fdsfjs'},{id: 9, note: 'vvsdfww'},{id: 11, note: 'nnweeef'} ]
};

const store = createStore(AppReducer, initialState);

export default store;


