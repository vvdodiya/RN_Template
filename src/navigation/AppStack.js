import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavaigation/TabNavigator';
import {Colors, Screens} from '@constants/index';
import NotificationScreen from '@screens/App/Notification/NotificationScreen';

const Stack = createNativeStackNavigator();

/**
 * App Stack Navigator
 * Handles the main app navigation flow including tab navigation
 */
const AppStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {backgroundColor: Colors.white},
            }}>
            <Stack.Screen name={Screens.Tabbar} component={TabNavigator} />
            {/* Other screen outside the tabbar */}
            <Stack.Screen
                name={Screens.NotificationScreen}
                component={NotificationScreen}
            />
            {/* Add other app screens here */}
        </Stack.Navigator>
    );
};

export default AppStack;
