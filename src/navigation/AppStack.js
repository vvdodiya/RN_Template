import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavaigation/TabNavigator';
import {Colors} from '@constants/index';

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
            <Stack.Screen name="MainTabs" component={TabNavigator} />
            {/* Add other app screens here */}
        </Stack.Navigator>
    );
};

export default AppStack;
