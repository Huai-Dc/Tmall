/**
 * Created by sujiexu on 17/5/3.
 */
import React,{ Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

export default class FlexDimensionsBasics extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render(){// 试试去掉父View中的`flex: 1`。填满父容器的所有空白
        // 则父View不再具有尺寸，因此子组件也无法再撑开。
        // 然后再用`height: 300`来代替父View的`flex: 1`试试看
        return (
            <View style={{flex: 1,flexDirection:'row'}}>
                <View style={{flex: 1, backgroundColor: 'powderblue'}}><Text>子元素撒打算的撒焦点科技卡死了就打开了暗示1</Text></View>
                <View style={{flex: 2, backgroundColor: 'skyblue'}} ><Text>子元素2</Text></View>
                <View style={{flex: 3, backgroundColor: 'steelblue'}} ><Text>子元素3</Text></View>
            </View>
        );
    }
}