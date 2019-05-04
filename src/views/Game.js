import React, { Fragment } from 'react';
import './App.css';
import SlotContainer from '../containers/SlotContainer';
import DisplayContainer from '../containers/DisplayContainer';

function Game({first, toggleTern, stat, winner, resetGame}){
    const slots = Array(9).fill(0, 0, 9);
    return <Fragment>
                <div className="navigation">
                    <button className="btn" onClick={resetGame} disabled={winner.length > 0 ? null : 'disabled'}>NEW GAME</button>
                </div>
                <div className='slot-container'>
                    {slots.map((slot, index) => <SlotContainer first={first} 
                                                                winner={winner} 
                                                                stat={stat} 
                                                                id={index} 
                                                                key={index} 
                                                                toggleTern={toggleTern}/>)}
                </div>
                <div className='display'>
                    <DisplayContainer first={first}/>
                </div>
            </Fragment>
}

export default Game;