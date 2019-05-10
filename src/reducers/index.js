import * as constants from '../constants';
import * as _ from 'lodash';
import checkField from '../logic';

const initialState = {
	firstTern: true,
	game: {
			times: [],
			circle: []
	},
	winner:[],
	history:[0, 0]
};
export default function gameReducer(state = _.cloneDeep(initialState), action) {
	switch (action.type) {
		case constants.PLACE_MARK:
			return checkField(state, action.payload);
		case constants.NEW_GAME:
			const init = _.cloneDeep(initialState);
			return {
				...init,
				history: state.history
			};
		default:
			return state;
	}
}