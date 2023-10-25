import React from 'react';
import { connect } from 'react-redux';
import Display from '../views/Display';

class DisplayContainer extends React.Component {
  render() {
    return <Display first={this.props.first} />;
  }
}
export default connect(
  (state) => ({
    first: state.gameReducer.firstTern,
  }),
  null
)(DisplayContainer);
