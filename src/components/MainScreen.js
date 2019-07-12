import Reac, {Component} from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux'
import {} from '../actions'


class MainScreen extends Component{
    render(){
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text>Main Screen</Text>
            </View>
        )
    }
}

export default connect()(MainScreen);