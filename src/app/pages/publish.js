/**
 * Created by sujiexu on 17/5/4.
 */
import React,{ Component, TouchableHighlight } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import {
    Actions,
} from 'react-native-router-flux';

export default class publishView extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            hide:false,
        };
        this.dismissModal = this.dismissModal.bind(this);
    }
    dismissModal(){
        this.setState({hide:true})
    }
    render(){
        return (
            <View style={styles.container}>
                <Text onPress={Action.error}>
                    publish 页面
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'#F5F5F5',
   },
    welcome:{
        fontSize:20,
        textAlign:'center',
        margin: 10,
    },
    instructions:{
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    }
});