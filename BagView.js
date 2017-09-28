/**
 * Created by liuml on 2017/5/10.
 */
import React, {Component} from "react";
import {
    StyleSheet,
    View,
    Text,
    Image

} from 'react-native'
//获取屏幕的宽度
var Dimensions = require('Dimensions');
var width = Dimensions.get('window').width;
var boxWidth = width / 3;
console.log(width);
//获取json数据
var JsonData = require('./test.json');
class BagView extends Component {

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
        flexWrap:'wrap' //换行
    },
    wrapperStyle: {
        flexDirection:'column', //主轴，垂直方向
        alignItems:'center', //交叉轴，居中对齐
        width: 100
    },
    imageStyle: {
        width: 80,
        height: 80
    }
});

module.exports = BagView;