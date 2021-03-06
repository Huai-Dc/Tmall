/**
 * Created by sujiexu on 17/5/4.
 */
import React,{ Component } from 'react';
import {
    Text
} from 'react-native';

const propTypes = {
    selected:PropTypes.bool,
    tabTitle:PropTypes.string,
};

const TabIcon = (props) => (
    <Text
        style={{color:props.selected ? 'red':'black'}}
    >
        {props.tabTitle}
    </Text>
);

TabIcon.propTypes = propTypes;

export default TabIcon;
