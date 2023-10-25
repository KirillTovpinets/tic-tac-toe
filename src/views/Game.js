import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import DisplayContainer from '../containers/DisplayContainer';
import SlotContainer from '../containers/SlotContainer';
import * as selectors from '../selectors';
import './App.css';

function Game({ history, winner, stat, newGame, keyPress, onExit }) {
  const slots = Array(9).fill(0, 0, 9);
  return (
    <div className="board" onKeyPress={keyPress}>
      <div className="navigation">
        <h1 className="status">
          <span>{history[0]}</span>:<span>{history[1]}</span>
        </h1>
        <button
          className="btn"
          onClick={() => newGame()}
          disabled={
            winner.length > 0 || stat.times.length + stat.circle.length === 9
              ? null
              : 'disabled'
          }
        >
          NEW GAME
        </button>
        <button className="btn btn-back" onClick={() => onExit()}>
          EXIT
        </button>
      </div>
      <div className="slot-container">
        {slots.map((slot, index) => (
          <SlotContainer id={index} key={index} />
        ))}
      </div>
      <div className="display">
        <DisplayContainer />
      </div>
    </div>
  );
}

export default connect(
  (state) => ({
    history: selectors.selectGame(state).history,
    winner: selectors.selectGame(state).winner,
    stat: selectors.selectGame(state).game,
  }),
  {
    newGame: actions.newgame,
    keyPress: actions.keyPress,
  }
)(Game);
