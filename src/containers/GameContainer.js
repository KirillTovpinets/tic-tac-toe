import React from 'react';
import Game from '../views/Game';

class GameContainer extends React.Component{
    render(){
        return <div className='board'>
                    <Game />
                </div>
    }
}

export default GameContainer;