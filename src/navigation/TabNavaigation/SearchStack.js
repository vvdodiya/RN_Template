import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '@constants/index';
import SearchScreen from '@screens/App/Search/SearchScreen';

const Stack = createNativeStackNavigator();

/**
 * Search Stack Navigator
 * Handles navigation within the Search tab
 */
const SearchStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={Screens.SearchScreen}
                component={SearchScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
};

export default SearchStack;
