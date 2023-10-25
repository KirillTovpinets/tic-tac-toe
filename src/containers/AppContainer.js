import React from 'react';
import App from '../views/App';
import Game from '../views/Game';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes);

export default class AppContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      firstUser: '',
      secondUser: '',
      start: false,
    };
  }
  updateUsers(firstUser, secondUser) {
    this.setState({ firstUser, secondUser, start: true });
  }
  render() {
    const { start } = this.state;
    return (
      <>
        {!start && <App startAct={this.updateUsers.bind(this)} />}
        {start && (
          <Game onExit={() => this.setState({ ...this.state, start: false })} />
        )}
      </>
    );
  }
}
