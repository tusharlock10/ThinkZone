import React from 'react';
import { View, TextInput, Dimensions, Text } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width - 20

const Input = (props) => {
    return (
        <View style={styles.ViewStying}>
            <TextInput style={styles.TextInputStyling} placeholder={props.placeholder}
            placeholderTextColor="rgb(198,219, 211)" 
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText}
            selectionColor="rgb(168,189, 181)" 
            value={props.value}/>
        </View>
    )
}

const styles = {
    ViewStying:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderBottomWidth:2,
        borderColor:"#ffffff",
        height:45,
        width:SCREEN_WIDTH,
    },
    TextInputStyling:{
        flex:1,
        fontSize:18,
        paddingHorizontal:5,
        color:"#ffffff",
        height:45,
        fontFamily:'manrope-medium'
    },
}

export default Input;