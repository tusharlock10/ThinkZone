import React, {Component} from 'react';
import { View, TextInput, ImageBackground } from 'react-native';
import {connect} from 'react-redux'

class ModuleScreen extends Component{

    render(){
    return (
        <ImageBackground style={{flex:1, justifyContent:'center',
        alignItems:'center',}} source={require('../../assets/images/main_back.png')}>
            <View style={styles.ViewStyling}>
                <TextInput editable={false} multiline textAlign={'center'}
                style={styles.TextStyling}>{this.props.text}</TextInput>
            </View>
        </ImageBackground>
    )
    }
}

const mapStateToProps =(state) => {
    return {
        text: state.mainScreen.text
    }
}

const styles={
    ViewStyling:{
        height:250,
        width:250,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'rgba(120, 120, 120, 0.6)',
        borderRadius:10,
        padding:8
    },
    TextStyling:{
        fontFamily: 'manrope-medium',
        fontSize:26,
        color:'#ffffff'

    }
}


export default connect(mapStateToProps, {})(ModuleScreen);