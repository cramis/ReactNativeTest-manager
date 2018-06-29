
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

import { firebaseConfig } from './config';


class App extends Component {

  componentWillMount() {
    //const config = firebaseConfig;

    //console.log('firebase config : ' + firebaseConfig.apiKey);

    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }

  
}

export default App;
