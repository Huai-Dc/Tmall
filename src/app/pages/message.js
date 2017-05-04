/**
 * Created by sujiexu on 17/5/4.
 */
import React,{ Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';

export default class MessageView extends Component{
    render(){
        <View style={styles.container}>
            <Text>
                message 页面
            </Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
    },
    welcome:{
        fontSize:20,
        textAlign: 'center',
        margin:10,
    },
    instructions:{
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
})