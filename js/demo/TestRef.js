/**
 * Created by liuml on 2017/10/5.
 */

import {
    View,
    Image,
    TouchableOpacity,
    Modal,
    Text,
    ListView,
    Platform,
    Dimensions,
    StyleSheet,
    RefreshControl,
    Alert,
    TextInput,
    PanResponder
} from 'react-native';
import React, {Component} from 'react';
export default class TestRef extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.changeStyle = this.changeStyle.bind(this);

    }

    render() {
        return (
            <View ref="ref_test" style={{flex: 1, height: 50, width: 200, backgroundColor: 'orange'}}
                  onLayout={(e) => this.rowlayouts = e.nativeEvent.layout}>
                <Text ref={(e) => {
                    this._myText = e
                }}
                      onPress={this.changeStyle}>change style
                </Text>
            </View>
        )
    }

    changeStyle() {
        console.log('高度:\n'+this.rowlayouts.height);
        this.refs.ref_test.setNativeProps({
            style: {
                backgroundColor: 'red', width: 200, height: 100
            }
        });

        this._myText.setNativeProps({
            style: {
                color: 'yellow',
            }
        });
    }
}