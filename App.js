import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux'
import reducers from './src/reducers'
import LoginForm from './src/components/LoginForm';
import MainScreen from './src/components/MainScreen'
import Router from './src/Router'


class App extends Component{

  render(){
    const store = createStore(reducers, {})


    return (
      <Provider store={store}>
        <Router/>
      </Provider>
    )
  }
}

export default App;