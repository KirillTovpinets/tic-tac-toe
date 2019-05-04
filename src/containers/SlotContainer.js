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
        return !this.state.clicked;
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
        return <Slot clickHandler={this.clickAction.bind(this)} first={this.props.first} disable={this.state.clicked}/>;
    }
}

export default SlotContainer;