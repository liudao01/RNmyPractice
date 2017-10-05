/*
 import React, {Component} from 'react';
 import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 Image
 } from 'react-native';



 // var BagView = require('./BagView');
 // var MyBagView = require('./MyBagViewTest');
 //如果引入错误的控件那么 运行会报错
 var MyScrollView1 = require('./MyScrollView01');
 var MyScrollViewTwo = require('./MyScrollViewTwo');
 var MyScrollViewThree = require('./MyScrollViewThree');
 var MyScrollViewFour = require('./MyScrollViewFour');
 var MyScrollViewFour = require('./MyScrollViewFour');

 // var LoginView = require('./LoginView');
 // export const BagView = require('./BagView');
 export default class second extends Component {
 render() {
 return <MyScrollViewFour/>
 }
 }
 AppRegistry.registerComponent('second', () => second);*/

import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View, Button,
} from 'react-native';
import App from './App';

import CityList from './js/CityList';
import List from './js/List';
import Root from './js/Root'
import DemoReact from './js/demo/DemoReact'
import Login from './js/demo/Login'
import TestRef from './js/demo/TestRef'

export default class MyApp extends Component {
    render() {
        return (
            <CityList/>
        );
    }
}
AppRegistry.registerComponent('second', () => MyApp);

