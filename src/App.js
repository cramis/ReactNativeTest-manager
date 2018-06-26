
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {

  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyC0Tq8n4jPnyaPVdu33_8aOn6iw7PFg6No',
    authDomain: 'manager-f9b52.firebaseapp.com',
    databaseURL: 'https://manager-f9b52.firebaseio.com',
    projectId: 'manager-f9b52',
    storageBucket: 'manager-f9b52.appspot.com',
    messagingSenderId: '621329200624'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }

  
}

export default App;