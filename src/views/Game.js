import React, { Fragment } from 'react';
import './App.css';
import SlotContainer from '../containers/SlotContainer';
import DisplayContainer from '../containers/DisplayContainer';

function Game({first, toggleTern}){
    const slots = Array(9).fill(0, 0, 9);
    return <Fragment>
                <div className='slot-container'>
                    {slots.map((slot, index) => <SlotContainer key={index} toggleTern={toggleTern}/>)}
                </div>
                <div className='display'>
                    <DisplayContainer first={first}/>
                </div>
            </Fragment>
}

export default Game;