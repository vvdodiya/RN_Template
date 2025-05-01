import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '@constants/index';
import SearchScreen from '@screens/App/Search/SearchScreen';
// import SearchResultScreen from '@screens/App/Search/SearchResultScreen';
// import SearchDetailScreen from '@screens/App/Search/SearchDetailScreen';
import AppToolbar from '@components/AppToolbar/AppToolbar';

const Stack = createNativeStackNavigator();

/**
 * Search Stack Navigator
 * Handles navigation within the Search tab
 */
const SearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    headerShown: false,
                }}
            />
            {/* <Stack.Screen
                name="SearchResultScreen"
                component={SearchResultScreen}
                options={{
                    title: 'Search Results',
                }}
            />
            <Stack.Screen
                name="SearchDetailScreen"
                component={SearchDetailScreen}
                options={{
                    title: 'Details',
                }}
            /> */}
        </Stack.Navigator>
    );
};

export default SearchStack;
