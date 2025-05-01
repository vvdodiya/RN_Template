import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {Colors, Fonts, Images, Screens} from '@constants/index';
import AsyncImage from '@components/AsyncImage';
import HomeStack from './HomeStack';
import SearchStack from './SearchStack';
import NotificationStack from './NotificationStack';
import ProfileStack from './ProfileStack';
import {Image} from 'react-native';
import styles from './styles/styles';

const Tab = createBottomTabNavigator();

/**
 * Custom tab bar icon component
 * @param {Object} props - Component props
 * @param {boolean} props.focused - Whether the tab is focused
 * @param {string} props.icon - Icon source
 * @returns {React.Component} Tab bar icon
 */

export const routes = [
    {
        name: Screens.HomeTab,
        title: 'Home',
        icon: Images.home,
        ScreenComponent: HomeStack,
    },
    {
        name: Screens.SearchTab,
        title: 'Search',
        icon: Images.search,
        ScreenComponent: SearchStack,
    },
    {
        name: Screens.NotificationTab,
        title: 'Notification',
        icon: Images.notification,
        ScreenComponent: NotificationStack,
    },
    {
        name: Screens.ProfileTab,
        title: 'Profile',
        icon: Images.profile,
        ScreenComponent: ProfileStack,
    },
];
const TabBarIcon = ({focused, icon}) => (
    <Image
        source={icon}
        style={{
            width: wp(6),
            height: wp(6),
            opacity: focused ? 1 : 0.5,
            tintColor: focused ? Colors.primary : Colors.gray,
        }}
    />
);

/**
 * Render tab section
 * @returns {React.Component} Tab section
 */

const renderTabSection = () => {
    return (
        <>
            {routes.map(screenRoute => {
                return (
                    <Tab.Screen
                        key={screenRoute.name}
                        name={screenRoute.title}
                        component={screenRoute.ScreenComponent}
                        options={({route}) => ({
                            // tabBarStyle: {
                            //     ...styles.myTabBarStyle,
                            //     ...globalStyle.shadowView,
                            // },
                            tabBarIcon: ({focused}) => {
                                return (
                                    <TabBarIcon
                                        focused={focused}
                                        icon={screenRoute.icon}
                                    />
                                );
                            },
                        })}
                    />
                );
            })}
        </>
    );
};

/**
 * Tab Navigator Component
 * Handles bottom tab navigation with custom styling and icons
 */
const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    ...styles.tabBarStyle,
                },
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: Colors.gray,
                tabBarLabelStyle: {
                    fontSize: hp(1.5),
                    fontFamily: Fonts.PoppinsMedium,
                    fontWeight: '500',
                },
            }}>
            {renderTabSection()}
        </Tab.Navigator>
    );
};

export default TabNavigator;
