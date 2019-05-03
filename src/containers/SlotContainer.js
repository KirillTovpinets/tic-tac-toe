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
        })
        this.props.toggleTern()
    }
    render() {
        return <Slot clickHandler={this.clickAction.bind(this)} first={this.props.first} disable={this.state.clicked}/>;
    }
}

export default SlotContainer;