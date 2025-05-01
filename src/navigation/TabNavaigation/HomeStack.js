import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Colors} from '@constants/index';
// import HomeScreen from '@screens/Home/HomeScreen';
// import HomeDetailScreen from '@screens/Home/HomeDetailScreen';
import HomeScreen from '@screens/App/Home/HomeScreen';
import AppToolBar from '@components/AppToolbar/AppToolbar';

const Stack = createNativeStackNavigator();

/**
 * Home Stack Navigator
 * Handles navigation within the Home tab
 */
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
            {/* <Stack.Screen
                name="HomeDetailScreen"
                component={HomeDetailScreen}
                options={{
                    title: 'Details',
                }}
            /> */}
        </Stack.Navigator>
    );
};

export default HomeStack;
