import React from 'react';
import Slot from '../views/Slot';

class SlotContainer extends React.Component{
    clickHandler(){
        console.log('click');
    }
    render() {
        return <Slot clickHandler={this.clickHandler.bind(this)}/>;
    }
}

export default SlotContainer;