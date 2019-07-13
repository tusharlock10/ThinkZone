import React, {Component} from 'react';
import { View, Text, ImageBackground } from 'react-native';
import {connect} from 'react-redux'
import {OpenModuleAction} from '../actions'
import Module from './Module'

class MainScreen extends Component{

    onPress(ModuleName){
        this.props.OpenModuleAction(ModuleName)
    }

    getModuleRow(PartialModuleList){
        return <View style={{
            justifyContent:'space-around',
            flexDirection:'row',
            alignItems:'center',
            marginTop:10
            }}>
            {PartialModuleList.map(
                ModuleName => {
                    return <Module text={ModuleName} key={ModuleName}
                    onPress={this.onPress.bind(this, ModuleName)}/>
                }
            )}

        </View>
    }

    getAllModules(){
        ALL_MODULES=[
            ['Student Details','Attendance','Early Childhood Education Activities'],
            ['Primary Grade Education – Maths Activities',
            'Primary Grade Education – English Activities',
            'Primary Grade Education – Odia Activities'] ,

            ['Primary Grade Education – Hindi Activities',
            'Payment',
            'Teacher Training'],

            ['Early Childhood Education Assessments',
            'Primary Grade Education Assessments']
            ]
        
        return (
            <View style={{flex:1}}>
                {this.getModuleRow(ALL_MODULES[0])}
                {this.getModuleRow(ALL_MODULES[1])}
                {this.getModuleRow(ALL_MODULES[2])}
                {this.getModuleRow(ALL_MODULES[3])}
            </View>
        )
    }



    render(){
        return (
            <ImageBackground style={{flex:1}} source={require('../../assets/images/main_back.png')}>
                {this.getAllModules()}
            </ImageBackground>
        )
    }
}


export default connect(
    null, {OpenModuleAction}
)(MainScreen);