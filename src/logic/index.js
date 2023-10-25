function checkField(state, data) {
  const state_copy = { ...state };
  state_copy.game[data.mark].push(data.index);
  state_copy.game.times.sort();
  state_copy.game.circle.sort();

  const checkTimes = checkWinner(state_copy.game.times);
  const checkCircle = checkWinner(state_copy.game.circle);
  const times =
    checkTimes('inrow').length > 0
      ? checkTimes('inrow')
      : checkTimes('incolumn').length > 0
      ? checkTimes('incolumn')
      : checkTimes('indiag').length > 0
      ? checkTimes('indiag')
      : [];

  const circles =
    checkCircle('inrow').length > 0
      ? checkCircle('inrow')
      : checkCircle('incolumn').length > 0
      ? checkCircle('incolumn')
      : checkCircle('indiag').length > 0
      ? checkCircle('indiag')
      : [];
  let history = state_copy.history;
  if (times.length > 0) {
    history[0] += 1;
  } else if (circles.length > 0) {
    history[1] += 1;
  }
  return {
    ...state_copy,
    winner: times.length > 0 ? times : circles,
    firstTern:
      times.length > 0 || circles.length > 0
        ? state_copy.firstTern
        : !state_copy.firstTern,
    history: history,
  };
}
function checkWinner(values) {
  return function (how) {
    let step = 0;
    let checkFunc;
    switch (how) {
      case 'inrow':
        step = 1;
        checkFunc = function (element, values, step) {
          if (
            element % 3 === 0 &&
            values.includes(element + step) &&
            values.includes(element + step * 2)
          ) {
            return [element, element + step, element + step * 2];
          }
          return [];
        };
        break;
      case 'incolumn':
        step = 3;
        checkFunc = function (element, values, step) {
          if (
            values.includes(element + step) &&
            values.includes(element + step * 2)
          ) {
            return [element, element + step, element + step * 2];
          }
          return [];
        };
        break;
      case 'indiag':
        step = 4;
        checkFunc = function (element, values) {
          if (
            element === 0 &&
            values.includes(element + 4) &&
            values.includes(element + 8)
          ) {
            return [element, element + 4, element + 8];
          }
          if (
            element === 2 &&
            values.includes(element + 2) &&
            values.includes(element + 4)
          ) {
            return [element, element + 2, element + 4];
          }
          return [];
        };
        break;
      default:
        return new ErrorEvent();
    }
    let result = [];
    values.forEach((element) => {
      let winner = checkFunc(element, values, step);
      if (winner.length > 0) {
        result = winner;
      }
    });
    return result;
  };
}

export default checkField;
