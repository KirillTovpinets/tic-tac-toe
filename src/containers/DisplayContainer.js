import React from 'react';
import Display from '../views/Display';

class DisplayContainer extends React.Component{
    render() {
        return <Display first={this.props.first}/>;
    }
}

export default DisplayContainer;