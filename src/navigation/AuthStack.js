import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from '@screens/Auth/SplashScreen/SplashScreen';
import Screens from '@constants/Screens';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            name={Screens.SplashScreen}
            initialRouteName={Screens.SplashScreen}
            screenOptions={{
                headerShown: false,
                fullScreenGestureEnabled: false,
            }}>
            <Stack.Screen
                name={Screens.SplashScreen}
                component={SplashScreen}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
