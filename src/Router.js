/**
 * Created by sujiexu on 17/5/4.
 */
import React,{ Component } from 'react';
import {
    Scene,Router
} from 'react-native-router-flux';

import NavigationChat from './app/NavigationChat/rootAp';
import GuidView from './app/GuidView/index';

class App extends Component{
    render(){
        return (
            <Router>
                <Scene key="root">
                    <Scene key="navigationChat" component={NavigationChat} title="聊天"/>
                    <Scene key="guid" component={GuidView} title="引导" />
                </Scene>
            </Router>
        );
    }
}

export default App;
