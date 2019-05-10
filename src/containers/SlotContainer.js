import React from 'react';
import Slot from '../views/Slot';
import * as actions from '../actions';
import { connect } from 'react-redux';

class SlotContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.stat.times.length === 0 && nextProps.stat.circle.length === 0){
            this.setState({clicked: false});
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        return !this.state.clicked || nextProps.winner.includes(this.props.id) || !nextState.clicked;
    }
    clickAction(){
				this.props.placeMark(this.props.id, this.props.first ? 'times' : 'circle' );
				this.setState({
					clicked: true
				})
    }
    render() {
				return <Slot id={this.props.id} 
										clickHandler={this.clickAction.bind(this)}
										first={this.props.first}
										winner={this.props.winner}
                    disable={this.state.clicked}/>;
    }
}

export default connect( state => ({
	first: state.firstTern,
	winner: state.winner,
	stat: state.game
}), {
	placeMark: actions.place_mark
})(SlotContainer);