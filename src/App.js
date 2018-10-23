import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View, Text } from 'react-native';
import firebase from '@firebase/app';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyChjlHicrVG7PsGg7WhxGUDmnq6W3WZ8QY',
      authDomain: 'manager-e1d53.firebaseapp.com',
      databaseURL: 'https://manager-e1d53.firebaseio.com',
      projectId: 'manager-e1d53',
      storageBucket: 'manager-e1d53.appspot.com',
      messagingSenderId: '589308084877'
    };
    firebase.initializeApp(config);
  }

  render() {
const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
