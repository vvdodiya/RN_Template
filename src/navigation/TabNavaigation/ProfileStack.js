import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '@constants/index';
import ProfileScreen from '@screens/App/Profile/ProfileScreen';
// import EditProfileScreen from '@screens/Profile/EditProfileScreen';
// import SettingsScreen from '@screens/Profile/SettingsScreen';
import AppToolbar from '@components/AppToolbar/AppToolbar';

const Stack = createNativeStackNavigator();

/**
 * Profile Stack Navigator
 * Handles navigation within the Profile tab
 */
const ProfileStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
            {/* <Stack.Screen
                name="EditProfileScreen"
                component={EditProfileScreen}
                options={{
                    title: 'Edit Profile',
                }}
            />
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                }}
            /> */}
        </Stack.Navigator>
    );
};

export default ProfileStack;
