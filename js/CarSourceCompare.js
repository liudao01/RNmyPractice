/**
 * Created by liuml on 2017/9/20.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    ListView
} from 'react-native';
import CarCompareRow from '../js/CarCompareRow';
var data = ['first', 'second', 'three', 'three', 'three', 'three', 'three', 'three', 'three'];
export default class CarSourceCompare extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})//是一个优化，节省无用的UI渲染 判断前后数据是否改变 如果改变就更新
        };
    }


    componentDidMount() {
        this.setState({
                dataSource: this.state.dataSource.cloneWithRows(data)
            }
        )
    };

    renderRow = (obj,rowID) => {
        console.log(`值${obj}`)
        console.log(`位置${rowID}`)
        return <CarCompareRow/>
    }

    render() {
        return <View style={styles.container}>
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            ></ListView>
        </View>
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})