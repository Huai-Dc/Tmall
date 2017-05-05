/**
 * Created by sujiexu on 17/5/4.
 */
'use strict';


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Dimensions,
    Image,
    Text,
    View,
    Platform
} from 'react-native';
import {
    Scene,
    Reducer,
    Router,
    Modal,
    Actions,
    ActionConst
}from'react-native-router-flux';

import HomeView from './app/pages/home';
import PublishView from './app/pages/publish';
import ProfileView from './app/pages/profile';
import MessageView from './app/pages/message';
import DiscroverView from './app/pages/discorver';
import TabIcon from './app/components/TabIcon';
import Error from './app/components/Error';

const px = 1 / PixelRatio.get();
const screentWidth = Dimensions.get('window').width;
const screentHeight = Dimensions.get('window').height;
var statusBarHeight = Platform.OS == 'android' ? 25 : 0;
var postButtonWidth = 40;
var postButtonHeight = 40;
var tabbarHeight = 60;

/**
 * 包装reducer构造函数返回一个闭包
 * @param params
 * @returns {function(*=, *=)}
 */
const reducerCreate = (params) => {
    const defaultReducer = new Reducer(params);
    return (state, action) => {
        console.log('ACTION:', action);
        return defaultReducer(state, action);
    }
};
/**
 * 定义基本的样式
 * @param props
 * @param computedProps
 * @returns {{flex: number, backgroundColor: string, shadowColor: null, shadowOffset: null, shadowOpacity: null, shadowRadius: null}}
 */
const getSceneStyle = (props, computedProps) => {
    const style = {
        flex: 1,
        backgroundColor: '#fff',
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
    };
    if (computedProps.isActive) {

        console.log(computedProps)
        style.marginTop = computedProps.hideNavBar ? 0 : 64;
        style.marginBottom = computedProps.hideTabBar ? 0 : 50;
    }
    return style;
};

export default class RootView extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            selectedTab: 'home',
        };
    }


    render() {
        return (
            <Router createReducer={reducerCreate} getSceneStyle={getSceneStyle}>
                <Scene key="modal"
                       component={Modal}>
                    <Scene key="root">
                        <Scene
                            key="main"
                            tabs={true}
                            hideNavBar={false}
                            tabBarStyle={styles.tabBarStyle}>
                            <Scene
                                key="home"
                                title="Home title"
                                hideNavBar={false}
                                tabTitle="微博"
                                component={HomeView}
                                initial={true}
                                icon={TabIcon}

                            />
                            <Scene
                                key="message"
                                hideNavBar={false}
                                tabTitle="信息"
                                title="Message title"
                                component={MessageView}
                                icon={TabIcon}
                            />
                            <Scene
                                key="tabbarpublish"
                                tabTitle="发布"
                                title=" title"
                                component={PublishView}
                                icon={TabIcon}
                            />
                            <Scene
                                key="discrover"
                                tabTitle="发现"
                                hideNavBar={false}

                                title="Discrover title"
                                component={DiscroverView}
                                icon={TabIcon}
                            />
                            <Scene
                                key="profile"
                                title="Profile title"
                                tabTitle="我的"
                                hideNavBar={false}
                                component={ProfileView}
                                icon={TabIcon}

                            />
                        </Scene>
                        <Scene key="error" component={Error}/>

                    </Scene>

                </Scene>
            </Router>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    tab_image: {
        height: 28,
        width: 28,
    },
    tabBarStyle: {
        borderTopWidth: 0.5,
        borderColor: '#b7b7b7',
        backgroundColor: 'white',
        opacity: 1
    },
    post: {
        width: postButtonWidth,
        height: postButtonHeight,
        backgroundColor: 'red',
        top: screentHeight - tabbarHeight - statusBarHeight + ((tabbarHeight - postButtonHeight) / 2),
        left: (screentWidth - postButtonWidth) / 2,

        position: 'absolute',
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
