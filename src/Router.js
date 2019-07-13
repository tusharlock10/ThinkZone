import React, {Component} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux'
import { TouchableOpacity, View, Image } from 'react-native';
import {connect} from 'react-redux'
import {OpenModuleAction} from './actions'
import LoginForm from './components/LoginForm';
import MainScreen from './components/MainScreen'
import ModuleScreen from './components/ModuleScreen'
import Header from './components/Header'



const BackButton = (props) => {
    return (
    <TouchableOpacity
        onPress={props.onPress}
    >
        <View style={{ alignItems: 'center', padding:10, justifyContent:'center' }}>
            <Image
                source={require('../assets/images/back.png')}
                style={{ width: 24, height: 24 }}
            />
        </View>
    </TouchableOpacity>
);
}
class RouterComponent extends Component {

    onPress(){
        Actions.pop()
        this.props.OpenModuleAction('Home')
    }
    render(){
    return (
        <Router>
            <Scene key="root" hideNavBar>

                <Scene key="login" hideNavBar initial >
                    <Scene key="LoginForm" component={LoginForm} />
                </Scene>

                <Scene key="main" renderTitle={() => { return <Header/>; }}>
                    <Scene key="MainScreen" component={MainScreen} 
                    title="Home"/>
                    <Scene key="ModuleScreen" component={ModuleScreen}
                    renderBackButton={() => <BackButton onPress={this.onPress.bind(this)}
                    />}/>
                </Scene>

            </Scene>
        </Router>

    );
    }
}

export default connect(null, {OpenModuleAction})(RouterComponent);