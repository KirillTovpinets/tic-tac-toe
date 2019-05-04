import React from 'react';
import Game from '../views/Game';

class GameContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstTern: true,
            game: {
                times: [],
                circle: []
            },
            winner:[],
            history:[0, 0]
        }
    }
    checkField(){
        this.state.game.times.sort();
        this.state.game.circle.sort();

        const checkTimes = this.checkWinner(this.state.game.times);
        const checkCircle = this.checkWinner(this.state.game.circle);
        const times = checkTimes('inrow').length > 0 ? 
                            checkTimes('inrow') :
                            checkTimes('incolumn').length > 0 ?
                                checkTimes('incolumn') :
                                checkTimes('indiag').length > 0 ?
                                    checkTimes('indiag') : [];

        const circles = checkCircle('inrow').length > 0 ? 
                            checkCircle('inrow') :
                            checkCircle('incolumn').length > 0 ?
                                checkCircle('incolumn') :
                                checkCircle('indiag').length > 0 ?
                                    checkCircle('indiag') : [];
        let history = this.state.history;
        if(times.length > 0) {
            history[0] += 1;
        } else if(circles.length > 0) {
            history[1] += 1;
        }
        this.setState({
            ...this.state,
            winner: times.length > 0 ? times : circles,
            firstTern: !this.state.firstTern,
            history: history
        });
    }
    checkWinner(values){
        return function(how) {
            let step = 0;
            let checkFunc;
            switch (how) {
                case 'inrow':
                    step = 1;
                    checkFunc = function (element, values, step) {
                        if (element % 3 === 0 && values.includes(element + step) && values.includes(element + step*2)) {
                            return [element, element + step, element + step*2];
                        }
                        return [];
                    }
                    break;
                case 'incolumn':
                    step = 3;
                    checkFunc = function (element, values, step) {
                        if (values.includes(element + step) && values.includes(element + step*2)) {
                            return [element, element + step, element + step*2];
                        }
                        return [];
                    }
                    break;
                case 'indiag':
                    step = 4;
                    checkFunc = function (element, values) {
                        if (element === 0 && values.includes(element + 4) && values.includes(element + 8)) {
                            return [element, element + 4, element + 8];
                        }
                        if (element === 2 && values.includes(element + 2) && values.includes(element + 4)) {
                            return [element, element + 2, element + 4];;
                        }
                        return [];
                    }
                    break;
            }
            let result = [];
            values.forEach(element => {
                let winner = checkFunc(element, values, step);
                if (winner.length > 0) {
                    result = winner;
                }
            });
            return result;
        }
    }
    reset(){
        this.setState({
            firstTern: true,
            game: {
                times: [],
                circle: []
            },
            winner:[]
        })
    }
    render(){
        return <div className='board'>
                    <Game first={this.state.firstTern} 
                            winner={this.state.winner} 
                            stat={this.state.game}
                            history={this.state.history}
                            toggleTern={this.checkField.bind(this)}
                            resetGame={this.reset.bind(this)}/>
                </div>
    }
}

export default GameContainer;