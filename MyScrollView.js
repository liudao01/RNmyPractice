/**
 * Created by liuml on 2017/8/31.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;

class MyScrollView extends Component {


    renderChilds = () => {
        var data = ['red', 'green', 'blue', 'yellow'];
        return data.map((item, i) => {
            return <View key={`item${i}`} style={{backgroundColor: item, width: ScreenWidth, height: 200}}>
                <Text>{i}</Text>
            </View>
        });
    }

    render() {
        return <ScrollView>
            {this.renderChilds()}
        </ScrollView>;
    }
}


module.exports = MyScrollView;