// import { store } from 'react-redux'
import { createStore } from 'redux';

export const counterReducer = ( state = {counter:0},action) => {
    
    if (action.type === 'increment') {
        return{ counter : state.counter +1}
    }

    if (action.type === 'decrement') {
        if (state.counter === 0) {
        return{ counter : state.counter -1}       
        }
    }

    if (action.type === 'reset') {
        return{ counter :0}
    }

    return state;
}

const store = createStore(counterReducer);

export default store;