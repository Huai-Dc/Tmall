/**
 * Created by sujiexu on 17/4/19.
 */
'use strict';

import React, { Component } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
} from 'react-native';

import screen from '../../utils/screen';

let img_1 = require('../../static/Image/Guid/guid_1.png');
let img_2 = require('../../static/Image/Guid/guid_2.png');
let img_3 = require('../../static/Image/Guid/guid_3.png');
/**
 * 启动页后的引导图 例子
 */
export default class extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render(){
        return (
            <ScrollView
                contentContainerStyle={styles.content}
                bounces={false}
                pagingEnabled={true}
                horizontal={true}
            >
                <Image source={img_1} style={styles.backgroundImg}/>
                <Image source={img_2} style={styles.backgroundImg}/>
                <Image source={img_3} style={styles.backgroundImg}/>
            </ScrollView>
        );
    }
}

var styles = StyleSheet.create({
    content:{
        width:screen.width*3,
        height:screen.height,
    },
    backgroundImg:{
        width:screen.width,
        height:screen.height,
    }
});
