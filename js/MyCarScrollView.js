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
import CarCompareRow from '../js/CarCompareRow';
import data1 from './MyData.json'
var items = data1.items;
class MyCarScrollView extends Component {

    /* renderChilds = () => {
     var data = ['red', 'green', 'blue', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
     return data.map((item, i) => {
     if (i === 0) {
     return <View key={`item${i}`} style={styles.firstItem}>
     <CarCompareRow item={data}/>
     </View>
     } else {
     return <View key={`item${i}`} style={styles.Item}>
     <Text>{i}</Text>
     </View>
     }
     });
     }*/
    renderChilds = () => {
        var data = ['red', 'green', 'blue', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow', 'yellow'];
        return items.map((item, i) => {
            if (i === 0) {
                return <View key={`item${i}`} style={styles.firstItem}>
                    <CarCompareRow item={item}/>
                </View>
            } else {
                return <View key={`item${i}`} style={styles.Item}>
                    <Text>{i}</Text>
                </View>
            }
        });
    }

    render() {
        return <ScrollView style={styles.container}>
            {this.renderChilds()}
        </ScrollView>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    firstItem: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: ScreenWidth,
        alignItems:'stretch',
        height: 150,
    },
    Item: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: ScreenWidth,
        height: 50
    }
});
module.exports = MyCarScrollView;