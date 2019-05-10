import * as constants from '../constants';

export const place_mark = ( index, mark ) => ({ type: constants.PLACE_MARK, payload: { index, mark } });
export const endgame = winner => ({ type: constants.END_GAME, payload: winner });
export const newgame = () => ({ type: constants.NEW_GAME });
export const keyPress = (e) => ({ type: constants.KEY_PRESS });