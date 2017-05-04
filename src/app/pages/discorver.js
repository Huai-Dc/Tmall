/**
 * Created by sujiexu on 17/5/4.
 */
import React,{ Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} from 'react-native';

let TAG  = 'DiscoverView';
export default class DiscroverView extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate',TAG);
    }

    componentWillMount() {
        console.log('componentWillMount',TAG);
    }

    componentDidMount() {
        console.log('componentDidMount',TAG);
    }

    componentWillReceiveProps(nextProps) {
        console.log('componentWillReceiveProps',TAG);
    }

    componentWillUnMount() {
        console.log('componentWillUnMount',TAG);
    }

    componentDidUnMount() {
        console.log('componentDidUnMount',TAG);
    }

    render(){
        return (
            <View style={styles.container}>
                <Text>
                    Discover页面
                </Text>
            </View>
        );
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