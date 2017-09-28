/**
 * Created by liuml on 2017/9/18.
 */

import React from 'react';
import {
    AppRegistry,
    Button,
    View,
    Text,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
class ChatScreen extends React.Component {
    static navigationOptions = {
        title: 'Chat with Lucy',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Text>Chat with Lucy</Text>
                <Button
                    onPress={() => navigate('Chat')}
                    title="Chat with Lucy"
                />
            </View>

        );
    }
}

module.exports = ChatScreen;