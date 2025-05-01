// authSlice.js

// Importing createSlice from Redux Toolkit to help create a slice of the store
import Constants from '@constants/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';

// Defining the initial state for authentication
const initialState = {
    isAuthenticated: false, // Tracks if the user is authenticated
    authToken: null,
    userData: null, // Stores user information if authenticated
};

// Creating an authentication slice with createSlice

const authSlice = createSlice({
    name: 'auth', // Name of the slice
    initialState, // Initial state defined above
    reducers: {
        // Action to log in a user, updating isAuthenticated to true and storing user info

        login: (state, action) => {
            console.log('Action---', action);

            state.authToken = action.payload.token;
            state.userData = action.payload.user;
            state.isAuthenticated = true;
            global.authToken = action.payload.token;
            Constants.commonConstant.authToken = action.payload.token;
        },

        // Action to log out a user, resetting isAuthenticated and clearing user info
        logout: state => {
            state.isAuthenticated = false;
            state.authToken = null;
            state.userData = null;
            AsyncStorage.removeItem(Constants.asyncStorageKeys.AuthToken);
            AsyncStorage.clear();
            global.authToken = null;
            Constants.commonConstant.authToken = null;
        },

        updateToken: (state, action) => {
            console.log('action---', action);
            global.authToken = action.payload;
            Constants.commonConstant.authToken = action.payload;
            state.authToken = action.payload;
        },
        // Action to storing user info
        updateUser: (state, action) => {
            state.userData = action.payload;
        },
    },
});

// Exporting the actions (login and logout) for use in components
export const {login, logout, updateToken, updateUser} = authSlice.actions;

// Selector to access the auth slice from the state
export const selectAuth = state => state.auth;

// Exporting the reducer to be used in the store
export default authSlice.reducer;
