import { combineReducers } from 'redux';
import jokesReducer from './jokes';

const rootReducer = combineReducers({
  jokes: jokesReducer,
});

export default rootReducer;
