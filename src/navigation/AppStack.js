import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@screens/App/HomeScreen/HomeScreen';
import Screens from '@constants/Screens';

const Stack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator
            initialRouteName={Screens.HomeScreen}
            screenOptions={{
                headerShown: false,
                fullScreenGestureEnabled: false,
                animation: 'slide_from_right',
            }}>
            <Stack.Screen
                name={Screens.HomeScreen}
                component={HomeScreen}
                options={{
                    gestureEnabled: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default AppStack;
