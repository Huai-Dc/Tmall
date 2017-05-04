/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
//import ImageShow from './src/app/ImageShow/index';
//import GuidShow from './src/app/GuidView/index';
//import Movie from './src/app/MovieDemo/Movie/index';
//import FlexDemo from './src/app/DemoView/FlexDemo_3';
//import Pizza from './src/app/DemoView/InputText';
//import ScrollViewDemo from './src/app/DemoView/ScrollViewDemo';
import NavigatorDemo from './src/app/NavigationChat/rootAp';
//import RouterScene from './src/Router';

export default class Tmall extends Component {
  render() {
    return (
      <NavigatorDemo />
    );
  }
}



AppRegistry.registerComponent('Tmall', () => Tmall);
