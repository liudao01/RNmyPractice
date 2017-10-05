/**
 * Created by liuml on 2017/10/5.
 */
import React, {Component} from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    View,
    Navigator,
    PanResponder
} from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventName: '',
            pos: '',
        };
        this.myPanResponder = {}
    }

    componentWillMount() {
        this.myPanResponder = PanResponder.create({
            //要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => true,

            //响应对应事件后的处理:
            onPanResponderGrant: (evt, gestureState) => {
                this.state.eventName = '触摸开始';
                this.forceUpdate();
            },
            onPanResponderMove: (evt, gestureState) => {
                var _pos = 'x:' + gestureState.moveX + ',y:' + gestureState.moveY;
                this.setState({eventName: '移动', pos: _pos});
            },
            onPanResponderRelease: (evt, gestureState) => {
                this.setState({eventName: '抬手'});
            },
            onPanResponderTerminate: (evt, gestureState) => {
                this.setState({eventName: '另一个组件已经成为了新的响应者'})
            },
        });
        this.myPanResponder2 = PanResponder.create({
            //要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
            onPanResponderTerminationRequest: (evt, gestureState) => true,

            //响应对应事件后的处理:
            onPanResponderGrant: (evt, gestureState) => {
                this.state.eventName = 'myPanResponder2 触摸开始';
                this.forceUpdate();
            },
            onPanResponderMove: (evt, gestureState) => {
                var _pos = 'x:' + gestureState.moveX + ',y:' + gestureState.moveY;
                this.setState({eventName: 'myPanResponder2 移动', pos: _pos});
            },
            onPanResponderRelease: (evt, gestureState) => {
                this.setState({eventName: 'myPanResponder2 抬手'});
            },
            onPanResponderTerminate: (evt, gestureState) => {
                this.setState({eventName: 'myPanResponder2 另一个组件已经成为了新的响应者'})
            },
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>eventName:{this.state.eventName}|{this.state.pos}</Text>
                <View {...this.myPanResponder.panHandlers}
                      style={{width: 100, height: 100, backgroundColor: 'red'}}></View>
                <View {...this.myPanResponder2.panHandlers}
                      style={{width: 100, height: 100, backgroundColor: 'black'}}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: "#fff",
        flex: 1
    },
    textStyle: {
        width: 100,
        height: 100
    }
});
