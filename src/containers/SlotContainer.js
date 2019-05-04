import React from 'react';
import Slot from '../views/Slot';

class SlotContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
    }
    shouldComponentUpdate(nextProps, nextState){
        return !this.state.clicked || nextProps.winner.includes(this.props.id);
    }
    clickAction(){
        this.setState({
            clicked: true
        });
        if (this.props.first) {
            this.props.stat.times.push(this.props.id);
        } else {
            this.props.stat.circle.push(this.props.id);
        }
        this.props.toggleTern();
    }
    render() {
        return <Slot clickHandler={this.props.winner.length === 0 ? this.clickAction.bind(this) : null} id={this.props.id} winner={this.props.winner} first={this.props.first} disable={this.state.clicked}/>;
    }
}

export default SlotContainer;