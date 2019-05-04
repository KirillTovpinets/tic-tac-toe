import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import './App.css';

class App extends React.Component {
  start(){
    const { _firstUser, _secondUser } = this.refs;
    this.props.startAct(_firstUser, _secondUser);
  }
  keyPressAct(e) {
    if(e.key === 'Enter') {
      console.log(e.key);
    }
  }
  render() {
    return (<div className="App">
      <header className="App-header">
        <div className="cross user">
          <FontAwesomeIcon icon="times" />
          <input className="form-control" type="text" ref="_firstUser" onKeyPress={this.keyPressAct}/>
        </div>
        <button className="btn" onClick={this.start.bind(this)} onKeyPress={this.keyPressAct}>Start</button>
        <div className="zero user">
          <FontAwesomeIcon icon={faCircle} />
          <input className="form-control" type="text" ref="_secondUser" onKeyPress={this.keyPressAct}/>
        </div>
      </header>
    </div>);
  };
}

export default App;
