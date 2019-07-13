import React from 'react';
import { View, TouchableOpacity, TextInput, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width
const MODULE_WIDTH = Math.round((SCREEN_WIDTH)*0.85/3)

const Module = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.ViewStyling}>
                <TextInput editable={false} multiline textAlign={'center'}
                style={styles.TextStyling}>{props.text}</TextInput>
            </View>
        </TouchableOpacity>
    )
}

const styles={
    ViewStyling:{
        height:MODULE_WIDTH,
        width:MODULE_WIDTH,
        backgroundColor:'rgba(120, 120, 120, 0.6)',
        justifyContent:'center',
        alignItems: 'center',
        flexDirection:'row',
        borderRadius: 10,
        margin:8,
        padding:5
    },
    TextStyling:{
        fontSize: 12,
        justifyContent:'center',
        alignItems:'center',
        fontFamily: 'manrope-medium',
        color:'rgb(255, 255, 255)'

    }
}

export default Module;

