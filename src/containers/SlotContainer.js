import React from 'react';
import Slot from '../views/Slot';

class SlotContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: false
        }
    }
    clickAction(){
        this.setState({
            clicked: !this.state.clicked
        })
        this.props.toggleTern()
    }
    render() {
        return <Slot clickHandler={this.clickAction.bind(this)} disable={this.state.clicked}/>;
    }
}

export default SlotContainer;