import React from 'react';
import Display from '../views/Display';
import { connect } from 'react-redux';

class DisplayContainer extends React.Component{
    render() {
        return <Display first={this.props.first}/>;
    }
}
export default connect( state => ({
	first: state.firstTern
}), null)(DisplayContainer);