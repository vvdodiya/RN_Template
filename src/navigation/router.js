/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {navigationRef} from '@utils/NavigationService';
import Constants from '@constants/Constant';
import Colors from '@constants/Color';
import useAuthData from '@hooks/useAuthData';
import {useDispatch} from 'react-redux';
import {login} from '@redux/authSlice';

const Router = props => {
    const {isAuthenticated} = useAuthData();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [isSplash, setIsSplash] = useState(true);

    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: Colors.transparent,
        },
    };

    useEffect(() => {
        setTimeout(() => {
            setIsSplash(false);
        }, 3000);
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const token = await AsyncStorage.getItem(
                Constants.asyncStorageKeys.AuthToken,
            );
            const userData = JSON.parse(
                await AsyncStorage.getItem(Constants.asyncStorageKeys.UserData),
            );
            global.authToken = token;
            Constants.commonConstant.authToken = token;

            if (userData && token) {
                dispatch(
                    login({
                        user: userData,
                        token: token,
                    }),
                );
            } else {
                console.log('No auth token found.');
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    return (
        <NavigationContainer theme={MyTheme} ref={navigationRef}>
            {!isAuthenticated ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};
export default Router;
