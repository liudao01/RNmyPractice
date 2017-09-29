/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
//导入stack导航组件
import {StackNavigator} from 'react-navigation';

import {
    Image,
    StyleSheet,
    Text,
    View,
    Button,
    AsyncStorage
} from 'react-native';
import CityList from './js/CityList';
/*class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',//标题
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="Chat with Lucy"
                />
            </View>
        );
    }
}*/
//导航注册
/*const RootNavigator = StackNavigator({
 Home: {screen: HomeScreen},
 Chat: {screen: ChatScreen},//新添加的页面
 }, {
 initialRouteName: 'Home', // 默认显示界面
 });*/
/*
//各个页面路由配置
const RouteConfigs = {
    Home: {
        screen: HomeScreen,
    },
    Chat: {
        screen: ChatScreen,
    },//新添加的页面
}

//导航器的配置，包括导航器的初始页面、各个页面之间导航的动画、页面的配置选项等等
const NavigatorConfig = {
    initialRouteName: 'Home', // 默认显示界面
    headerMode :'none',//https://reactnavigation.org/docs/navigators/stack#StackNavigatorConfig

}
//导航注册
const RootNavigator = StackNavigator(RouteConfigs, NavigatorConfig);
export default RootNavigator;*/

//各个页面路由配置
const RouteConfigs = {
    Home: {//首页
        screen: CityList,
    },
   /* MyPage: {//我的
        screen: MyPage,
    },
    CustomKeyPage: {//自定义分类
        screen: CustomKeyPage,
    },*/
}

//导航器的配置，包括导航器的初始页面、各个页面之间导航的动画、页面的配置选项等等
const NavigatorConfig = {
    initialRouteName: 'Home', // 默认显示界面
    headerMode: 'none',//https://reactnavigation.org/docs/navigators/stack#StackNavigatorConfig

}

//导航注册
const RootNavigator = StackNavigator(RouteConfigs, NavigatorConfig);
export default RootNavigator;