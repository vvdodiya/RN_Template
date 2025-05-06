import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '@constants/index';

import ChatScreen from '@screens/App/Chat/ChatScreen';

const Stack = createNativeStackNavigator();

/**
 * Notification Stack Navigator
 * Handles navigation within the Notification tab
 */
const ChatStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Screens.ChatScreen}
                component={ChatScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default ChatStack;
