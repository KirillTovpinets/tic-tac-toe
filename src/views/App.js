import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

class App extends React.Component {
  start(){
    const { _firstUser, _secondUser } = this.refs;
    this.props.startAct(_firstUser, _secondUser);
  }
  render() {
    return (<div className="App">
      <header className="App-header">
        <div className="cross user">
          <FontAwesomeIcon icon="times" />
          <input className="form-control" type="text" ref="_firstUser"/>
        </div>
        <button className="btn" onClick={this.start.bind(this)}>Start</button>
        <div className="zero user">
          <FontAwesomeIcon icon="circle" />
          <input className="form-control" type="text" ref="_secondUser"/>
        </div>
      </header>
    </div>);
  };
}

export default App;
