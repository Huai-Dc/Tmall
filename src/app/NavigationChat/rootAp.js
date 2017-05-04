/**
 * Created by sujiexu on 17/5/4.
 */
'use strict';
import React, { Component } from 'react';
import {
    Text,View,Button,
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import ChatScreen from './ChatScreen';

class HomeScreen extends Component{
    static navigationOptions = { //设置标题
        title: 'Welcome',
    };
    render(){
        const { navigate } = this.props.navigation;
        return (
            <View>
                <Text>Hello,world</Text>
                <Button //跳转
                    onPress={()=> navigate('Chat',{user:'Lucy'})}
                    title="Chat with Lucy"
                />
            </View>
        )
    }
}

const SimpleApp = StackNavigator({
    Home:{screen:HomeScreen},
    Chat:{screen:ChatScreen}
});

export default SimpleApp;