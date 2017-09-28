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
/**
 * 这个js
 */
var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var baseUrl = "http://ovji4jgcd.bkt.clouddn.com/"
var JsonData = require('./test2.json');
class MyScrollViewThree extends Component {


    renderChilds = () => {
        return JsonData.data.map((item, i) => {
            return <Image
                key = {`item${i}`}
                style={style.imageStyle} source={{uri:baseUrl+item.img}}></Image>
        });
    }

    handleScroll = (e) => {
        var x = e.nativeEvent.contentOffset.x;
        console.log(x);
    }

    render() {
        return <View>
            <ScrollView
                pagingEnabled={true}/*是否是翻页模式*/
                showsHorizontalScrollIndicator={true}/*显示滚动条*/
                horizontal={true}/*是否是横向*/
                onscroll={this.handleScroll}
            >
                {this.renderChilds()}
            </ScrollView>
        </View>
    }
}


var style = StyleSheet.create({

    container : {
        flexDirection: 'column'
    },
    imageStyle : {
        width:ScreenWidth,
        height:200
    }


})
module.exports = MyScrollViewThree;