import React from 'react';
import {Scene, Router} from 'react-native-router-flux'
import LoginForm from './components/LoginForm';
import MainScreen from './components/MainScreen'
import ModuleScreen from './components/ModuleScreen'
import Header from './components/Header'


const RouterComponent =() => {
    return (
        <Router>
            <Scene key="root" hideNavBar>

                <Scene key="login" hideNavBar initial >
                    <Scene key="LoginForm" component={LoginForm} />
                </Scene>

                <Scene key="main" renderTitle={() => { return <Header/>; }}>
                    <Scene key="MainScreen" component={MainScreen} 
                    title="Home"/>
                    <Scene key="ModuleScreen" component={ModuleScreen}/>
                </Scene>

            </Scene>
        </Router>

    );
}

export default RouterComponent;