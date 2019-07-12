import React, {Component} from 'react';
import { View, Text, ImageBackground, StatusBar, ActivityIndicator } from 'react-native';
import {connect} from 'react-redux'
import * as Font from 'expo-font';
import Input from './Input'
import LoginButton from './LoginButton'
import {
    EmailChangeAction,
    PasswordChangeAction,
    LoginButtonAction
} from '../actions'

class LoginForm extends Component{

    constructor(){
        super();
        this.state={
            fontLoaded: false
        }
    }

    async componentDidMount(){
        await Font.loadAsync({
            'Gotham-Black':require('../../assets/fonts/Gotham-Black.ttf'),
            'manrope-medium':require('../../assets/fonts/manrope-medium.ttf')
        })

        this.setState({fontLoaded:true})
    }

    Message(){
        var jsx = <Text></Text>

        if (this.props.loggedin){
            if (this.props.loggedin==='passed'){
                jsx = <Text style={[styles.MessageTextStyling, {color:'rgb(100,170,100)'}]}>
                    Successfuly Logged In
                </Text>
            }
            else{
                jsx = <Text style={[styles.MessageTextStyling, {color:'rgb(240,100,100)'}]}>
                    {this.props.loggedin}
                </Text>
            }

        }
        return jsx
    }

    renderForm(){
        
        if (this.state.fontLoaded){
            return (
                <View style={{flex:1}}>

                    <View style={styles.TopViewStyle}>
                        <Text style={styles.TextStyling}>WELCOME</Text>

                        <Input placeholder='Email' text='Email'
                        onChangeText={this.props.EmailChangeAction.bind(this)}
                        value={this.props.email}/>
                        <Input placeholder='Password' secureTextEntry
                        onChangeText={this.props.PasswordChangeAction.bind(this)}
                        value={this.props.password}/>

                        <LoginButton text='Login' onPress={this.props.LoginButtonAction.bind(this)}/>
                    </View>

                    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                        {this.Message()}
                    </View>

                </View>

            )
        }

        return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size='large' color='#add8e6'/>
            </View>
        )
    }
    render(){
        console.log(this.props.loggedin)
        return(
            <ImageBackground style={{flex:1}} source={require('../../assets/images/login_back.png')}>
                <StatusBar hidden={true}/>
                {this.renderForm()}
            </ImageBackground>
        )
    }
}

const styles={
    TextStyling:{
        fontSize:48,
        color:'#ffffff',
        marginBottom:20,
        fontFamily:'Gotham-Black'
    },
    TopViewStyle:{
        justifyContent:'center',
        alignItems:'center',
        flex:5
    },
    MessageTextStyling:{
        fontSize:20,
        fontFamily:'manrope-medium',
        margin:10,
        backgroundColor:'rgba(235, 255, 230, 0.7)',
        padding:10,
        borderRadius:10,
    }
}

const mapStateToProps =(state)=>{
    return {
        email: state.login.email,
        password: state.login.password,
        loggedin: state.login.loggedin
    }

}

export default connect(
    mapStateToProps, {
        EmailChangeAction,
        PasswordChangeAction,
        LoginButtonAction
    }
)(LoginForm);