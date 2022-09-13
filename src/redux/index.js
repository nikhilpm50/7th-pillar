import { combineReducers } from 'redux';
import { reducer } from './reducers';

const reducers = combineReducers({
    allPosters: reducer,
})

export default reducers;