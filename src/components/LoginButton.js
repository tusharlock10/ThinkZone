import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const LoginButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.ViewStyle}>
                <Text style={styles.TextStyling}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = {
    ViewStyle:{
        height:50,
        width:89,
        borderRadius:10,
        borderWidth:3,
        borderColor: 'rgb(255, 255, 255)',
        justifyContent:'center',
        alignItems: 'center',
        margin:25,
        borderRadius: 15
    },
    TextStyling:{
        fontSize:20,
        color:'rgb(255, 255, 255)',
        fontFamily:'manrope-medium'
    }
}

export default LoginButton;