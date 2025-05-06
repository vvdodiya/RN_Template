import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Screens} from '@constants/index';
import HomeScreen from '@screens/App/Home/HomeScreen';

const Stack = createNativeStackNavigator();

/**
 * Home Stack Navigator
 * Handles navigation within the Home tab
 */
const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Screens.HomeScreen}
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default HomeStack;
