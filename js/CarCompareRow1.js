/**
 * Created by liuml on 2017/9/20.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Platform,
    Image,
    TouchableOpacity
} from 'react-native';

export default class CarCompareRow extends Component {

    static defaultProps = {
        item: {}
    }


    render() {
        var item = this.props.item;
        return <View style={styles.container}>
            <Text style={styles.title}>test111</Text>
        </View>
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 5,
        backgroundColor: '#FFF',
        flexDirection: 'column',
        borderColor: '#dddddd',
        borderWidth: 0.5,
        borderRadius: 2,
        shadowColor: 'gray',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowRadius: 1, //阴影半径
        shadowOpacity: 0.4,
        elevation: 2 //Android 投影

    },
    title: {
        fontSize: 16

    },
    description: {
        fontSize: 14,
        marginBottom: 2,
        color: '#757575'

    },
    bottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    bottomTextWrapper: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})