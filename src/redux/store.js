// store.js

// Importing configureStore from Redux Toolkit to create the Redux store
import {configureStore} from '@reduxjs/toolkit';

// Importing the authReducer from authSlice to manage authentication-related state
import authReducer from './authSlice';
import loaderReducer from './loaderSlice';
import networkReducer from './networkSlice';

// Creating and configuring the Redux store
const store = configureStore({
    reducer: {
        // Adding the auth slice to the store with 'auth' as its key
        auth: authReducer,
        loader: loaderReducer,
        network: networkReducer,
    },
});

// Exporting the store to be used throughout the app
export default store;
