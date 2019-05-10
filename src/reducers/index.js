import { combineReducers } from 'redux';
import gameReducer from './game';
import keyboardReducer from './keyboard';

export default combineReducers({
	gameReducer,
	keyboardReducer
})
