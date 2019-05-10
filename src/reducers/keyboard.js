import * as constants from '../constants';
import { cloneDeep } from 'lodash';
const initialState = {
	activeField: 0
}
export default function keyboardReducer(state = cloneDeep(initialState), action){
	switch (action.type) {
		case constants.ARROW_PRESS:
			return {
				...state,
				activeField: action.payload
			};
		default:
			return state;
	}

}