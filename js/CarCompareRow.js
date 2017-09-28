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
            <View style={styles.firstOneItem}>

                <Text style={styles.title}> --- 未知</Text>
                <Text style={styles.title}>{item.id}</Text>
                <TouchableOpacity style={styles.button} onPress={this.LookDiff}>
                    <Text style={styles.btnTv}>查看不同</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.firstOneItem}>

                <Text style={styles.title}>{item.id}</Text>
                <Text style={styles.title}>{item.id}</Text>
                <Text style={styles.title}>{item.id}</Text>
            </View>
            <View style={styles.firstOneItem}>

                <Text style={styles.title}>{item.id}</Text>
                <Text style={styles.title}>{item.id}</Text>
                <Text style={styles.title}>{item.id}</Text>
            </View>
        </View>
    }

    LookDiff = ()=>{
        console.log("lookdiff");
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },
    firstOneItem: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'gray',
        width: 50,
        height: 25,
        marginTop:5,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: '#ff0000',
        borderRadius: 5
    },
    title: {
        fontSize: 16,
        marginTop:5,

    },
    btnTv: {
        fontSize: 12,

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