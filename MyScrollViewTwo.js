/**
 * Created by liuml on 2017/8/31.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

class MyScrollViewTwo extends Component {


    renderChilds = () => {
        var data = ['green', 'red', 'blue', 'yellow'];
        return data.map((item, i) => {
            return <View key={`item${i}`} style={{backgroundColor: item, width: ScreenWidth, height: 200}}>
                <Text style={{backgroundColor: 'white'}}>scrollveiw这是第{i}个</Text>
            </View>
        });
    }

    render() {
        return <View>
            <ScrollView
                pagingEnabled={true}/*是否是翻页模式*/
                showsHorizontalScrollIndicator={true}/*显示滚动条*/
                horizontal={true}/*是否是横向*/>
                {this.renderChilds()}
            </ScrollView>
        </View>
    }
    /*render() {
        return <View>
            <ScrollView
                pagingEnabled={true}/!*是否是翻页模式*!/
                showsHorizontalScrollIndicator={true}/!*显示滚动条*!/
                horizontal={true}/!*是否是横向*!/>
                {this.renderChilds()}
            </ScrollView>
        </View>
    }*/
}

module.exports = MyScrollViewTwo;