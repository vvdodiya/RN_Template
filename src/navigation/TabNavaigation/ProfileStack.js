import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '@constants/index';
import ProfileScreen from '@screens/App/Profile/ProfileScreen';
import HelpScreen from '@screens/App/Profile/Help/Help';
import SettingScreen from '@screens/App/Profile/Setting/Setting';

const Stack = createNativeStackNavigator();

/**
 * Profile Stack Navigator
 * Handles navigation within the Profile tab
 */
const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Screens.ProfileScreen}
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={Screens.HelpAndSupportScreen}
                component={HelpScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name={Screens.SettingScreen}
                component={SettingScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default ProfileStack;
