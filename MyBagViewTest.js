/**
 * Created by liuml on 2017/9/3.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var boxWidth = width / 3;
console.log(width);
var JsonData = require('./test.json');


class MyBagViewTest extends Component {

    renderBags = () => {
        return JsonData.data.map((item, i) => {
            return <View key={'wrap' + i} style={style.wrapperStyle}>
                <Image style={style.imageStyle} source={require('./images/danjianbao.png')}/>
                <Text >{item.title}</Text>
            </View>
        })
    }

    render() {
        return <View style={style.container}>
            {this.renderBags()}
        </View>;
    }
}

const style = StyleSheet.create({

    container: {
        flexDirection: 'row',
        flexWrap:'wrap'
    },
    wrapperStyle: {
        flexDirection:'column',
        alignItems:'center',
        width: 100
    },
    imageStyle: {
        width: 80,
        height: 80
    }
});

module.exports = MyBagViewTest;
