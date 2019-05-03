import React from 'react';
import Game from '../views/Game';

class GameContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstTern: true
        }
    }
    toggleTern(){
        this.setState({
            firstTern: !this.state.firstTern
        });
        console.log(this.state.firstTern);
    }
    render(){
        return <div className='board'>
                    <Game first={this.state.firstTern} toggleTern={this.toggleTern.bind(this)}/>
                </div>
    }
}

export default GameContainer;