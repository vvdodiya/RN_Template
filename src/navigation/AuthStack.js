import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screens from '@constants/Screens';
import LoginScreen from '@screens/Auth/Login/LoginScreen';
import ForgotPassword from '@screens/Auth/ForgotPassword/ForgotPassword';

const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator
            name={Screens.LoginScreen}
            initialRouteName={Screens.LoginScreen}
            screenOptions={{
                headerShown: false,
                fullScreenGestureEnabled: false,
            }}>
            <Stack.Screen name={Screens.LoginScreen} component={LoginScreen} />
            <Stack.Screen
                name={Screens.ForgotPasswod}
                component={ForgotPassword}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;
