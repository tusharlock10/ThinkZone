import React from 'react';
import {Scene, Router} from 'react-native-router-flux'
import LoginForm from './src/components/LoginForm';
import MainScreen from './src/components/MainScreen'

const RouterComponent =() => {
    return (
        <Router>
            <Scene key="root">

                <Scene key="LoginForm" component={LoginForm}/>

            </Scene>
        </Router>

    );
}

export default RouterComponent;