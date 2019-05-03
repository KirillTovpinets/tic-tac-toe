import React from 'react';
import Slot from '../views/Slot';

class SlotContainer extends React.Component{
    render() {
        return <Slot clickHandler={this.props.toggleTern}/>;
    }
}

export default SlotContainer;