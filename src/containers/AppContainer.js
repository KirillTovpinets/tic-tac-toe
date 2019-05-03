import React, { Fragment } from 'react';
import App from '../views/App';
import GameContainer from '../containers/GameContainer';

import { BrowserRouter, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

library.add(faTimes)

export default class AppContainer extends React.Component{
    constructor(){
        super();
        this.state = {
            firstUser: '',
            secondUser: ''
        };
    }
    updateUsers(firstUser, secondUser){
        this.setState({firstUser, secondUser});
        document.location.href = 'game';
    }
    render(){
        return <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Fragment>
                        <Route exact path="/" render={ route =>  <App startAct={this.updateUsers.bind(this)}/>}/>
                        <Route exact path="/game" render={ route =>  <GameContainer />}/>
                    </Fragment>
                </BrowserRouter>;
    }
}