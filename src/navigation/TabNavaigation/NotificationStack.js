import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '@constants/index';
import NotificationScreen from '@screens/App/Notification/NotificationScreen';
// import NotificationDetailScreen from '@screens/App/Notification/NotificationDetailScreen';
import AppToolbar from '@components/AppToolbar/AppToolbar';

const Stack = createNativeStackNavigator();

/**
 * Notification Stack Navigator
 * Handles navigation within the Notification tab
 */
const NotificationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
                options={{
                    headerShown: false,
                }}
            />
            {/* <Stack.Screen
                name="NotificationDetailScreen"
                component={NotificationDetailScreen}
                options={{
                    title: 'Notification Details',
                }}
            /> */}
        </Stack.Navigator>
    );
};

export default NotificationStack;
