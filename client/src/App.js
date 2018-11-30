import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import Home from './pages/Home';
import Exhibitions from './pages/Exhibitions';
import Programs from './pages/Programs';
import Floor from './pages/Floor';
import ProgramToAdd from './pages/ProgramToAdd';
import ProgramEditAndRemoval from './pages/ProgramEditAndRemoval'
import LearnMore from './pages/LearnMore';
import LearnMoreEdit from './pages/LearnMoreEdit';
import Signup from './components/Auth/Signup';
import Signout from './components/Auth/Signout';
import Signin from './components/Auth/Signin';
import Root from './pages/Root';

export default class App extends Component {
  render() {
    const store = createStore(
      reducers, 
      {
        auth: { authenticated: localStorage.getItem('token')}
      },
      applyMiddleware(ReduxThunk, logger));

    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Root} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signout" component={Signout} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/home" component={Home}/>
            <Route exact path="/exhibitions" component={Exhibitions}/>
            <Route exact path="/exhibitionFloor:floor" component={Floor} />
            <Route exact path="/programs" component={Programs}/>
            <Route exact path="/programs/toAdd" component={ProgramToAdd}/>
            <Route exact path="/programs/:id" component={ProgramEditAndRemoval}/>
            <Route exact path="/exhibitionFloor:floor/learnMore" component={LearnMore}/>
            <Route exact path="/exhibitionFloor:floor/learnMore/:id" component={LearnMoreEdit}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

// <Route exact path="/exhibitionFloor:floor/learnMore" component={LearnMore}/>