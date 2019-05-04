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
            }
        }
    }
    checkField(){
        this.state.game.times.sort();
        this.state.game.circle.sort();

        const checkTimes = this.checkWinner(this.state.game.times);
        const checkCircle = this.checkWinner(this.state.game.circle);
        const times = [checkTimes('inrow'), checkTimes('incolumn'), checkTimes('indiag')];
        const circles = [checkCircle('inrow'), checkCircle('incolumn'), checkCircle('indiag')];
        if(times.includes(true)){
            console.log('times is winner');
        } else if (circles.includes(true)) {
            console.log('circle is winner');
        }
        this.setState({
            ...this.state,
            firstTern: !this.state.firstTern
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
                            return true;
                        }
                        return false;
                    }
                    break;
                case 'incolumn':
                    step = 3;
                    checkFunc = function (element, values, step) {
                        if (values.includes(element + step) && values.includes(element + step*2)) {
                            return true;
                        }
                        return false;
                    }
                    break;
                case 'indiag':
                    step = 4;
                    checkFunc = function (element, values) {
                        if (values.includes(element + 4) && values.includes(element + 8)) {
                            return true;
                        }
                        if (values.includes(element + 2) && values.includes(element + 4)) {
                            return true;
                        }
                        return false;
                    }
                    break;
            }
            let result = false;
            values.forEach(element => {
                if (checkFunc(element, values, step)) {
                    result = true;
                }
            });
            return result;
        }
    }

    render(){
        return <div className='board'>
                    <Game first={this.state.firstTern} stat={this.state.game} toggleTern={this.checkField.bind(this)}/>
                </div>
    }
}

export default GameContainer;