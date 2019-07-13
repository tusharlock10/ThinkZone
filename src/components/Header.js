import React, {Component} from 'react';
import { View, Image,Text } from 'react-native';
import {connect} from 'react-redux'

class Header extends Component{
    render(){
        return (
            <View style={styles.ViewStyling}>
            <View style={{flex:1}}>
                <Text style={styles.TextStyling}>{this.props.text}</Text>
            </View>
            
            <Image source={require('../../assets/icon.png')}
                    style={{ width: 50, height: 50 }} />
            </View>
        
        )
    }
}

const styles = {
    ViewStyling:{
        alignItems: 'center',
        flex:1,
        justifyContent:'space-between',
        paddingHorizontal:15,
        flexDirection:'row',
        bottom:8
    },
    TextStyling:{
        fontSize:20,
        color: 'rgb(70,70,70)',
        fontFamily:'Product Sans Bold'
    }

  }

const mapStateToProps = (state) => {
    return {
        text: state.mainScreen.text
    }
}

export default connect(mapStateToProps, {})(Header);