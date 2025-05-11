// Import necessary modules from React Native and fbemitter

import {Dimensions, Platform} from 'react-native';
import {EventEmitter} from 'fbemitter';

// Get screen width and height
const {width, height} = Dimensions.get('window');

// Define common constants for the app
export const commonConstant = {
    emitter: new EventEmitter(),
    internetConnected: null,
    scrWidth: width,
    scrHeight: height,
    alertTitle: 'BeamMe',
    appName: 'BeamMe',
    deviceType: Platform.select({ios: 'iOS', android: 'Android'}),
    yes: 'yes',
    cancel: 'cancel',
    no: 'No',
    userID: '',
    userData: '',
    authToken: '',
};

// Define constants related to authentication keys
export const authKeys = {
    kiOSClientId: '',
    kAndroidClientId: '',
    kWebClientId: '',

    kAndroidAppleServiceId: '',
};

// Define action types used in Redux reducer
export const reducerActionKeys = {
    auth: 'auth',
    internetStatus: 'internetStatus',
};

// Define async storage keys for persistent storage
export const asyncStorageKeys = {
    UserData: 'userData',
    UserID: 'userID',
    AuthToken: 'authToken',
    keyCurrentAppLanguage: 'currentAppLang',
};

export const emiterKey = {};

// Define error messages for different scenarios
export const errorMessage = {
    k500SeriesErrorCode:
        'Server is not responding. Please try again in sometime.',
    kNoMoreData: '',
    kUnKnownRequest: 'Undefined Model', // Only for developer
    kSomethingWentWrong: 'Something went wrong. Please try again in sometime.',
    KNoNetwork:
        'Sorry your request couldn’t be processed because of a server issue. Please try again.',
    kBadRequest: 'Please check the inputs then try again.',
    kUnauthorized: 'Your session has expired. Please log in again.',
    Forbidden: "You don't have permission for this request.",
    NotFound: 'The request you are looking for is unavailable.',
    InternalServerError:
        'Currently, the server is down. Please try after some time.',
    NotImplemented:
        "Currently, Server can't accept these request. Please change the request.",
    kNoInternetConnection: 'No internet connection. Please try again.',
};

// Consolidate all constants into a single object for easy export
const Constants = {
    commonConstant,
    authKeys,
    reducerActionKeys,
    asyncStorageKeys,
    errorMessage,
    emiterKey,
};

export default Constants; // Export all constants as a default export
