import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      _firstUser: '',
      _secondUser: '',
    };
  }
  start() {
    const { _firstUser, _secondUser } = this.state;
    this.props.startAct(_firstUser, _secondUser);
  }

  handletUser = (field) => (event) => {
    this.setState({ ...this.state, [field]: event.target.value });
  };

  render() {
    return (
      <div className="Tic-Tac-Toe-App">
        <header className="App-header">
          <div className="cross user">
            <FontAwesomeIcon icon="times" />
            <input
              className="form-control"
              type="text"
              placeholder="Enter Your Name"
              onChange={this.handletUser('_secondUser')}
            />
          </div>
          <button className="btn" onClick={this.start.bind(this)}>
            Start
          </button>
          <div className="zero user">
            <FontAwesomeIcon icon={faCircle} />
            <input
              className="form-control"
              type="text"
              placeholder="Enter Your Name"
              onChange={this.handletUser('_firstUser')}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
