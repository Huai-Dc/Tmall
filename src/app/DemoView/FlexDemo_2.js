/**
 * Created by sujiexu on 17/5/3.
 */
import React, { Component } from 'react';
import {
    View,

} from 'react-native';

export default class JustifyContentBasics extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render(){
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',//行排列 row 列排列
                justifyContent: 'space-between',
            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        )
    }
}