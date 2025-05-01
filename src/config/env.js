/**
 * Environment Configuration
 * This file handles environment variables and provides secure access to them
 */

import {Platform} from 'react-native';
import {getUniqueId} from 'react-native-device-info';
import EncryptedStorage from 'react-native-encrypted-storage';

// Environment variables
const ENV = {
    // API Configuration
    API_URL: 'https://api.example.com',
    API_VERSION: 'v1',

    // App Configuration
    APP_NAME: 'RN Demo',
    APP_ENV: 'development',

    // Feature Flags
    ENABLE_ANALYTICS: true,
    ENABLE_CRASH_REPORTING: true,

    // Platform specific
    IS_IOS: Platform.OS === 'ios',
    IS_ANDROID: Platform.OS === 'android',
};

// Secure storage keys
const STORAGE_KEYS = {
    AUTH_TOKEN: '@auth_token',
    USER_DATA: '@user_data',
    ENCRYPTION_KEY: '@encryption_key',
};

/**
 * Secure Storage Methods
 */
const secureStorage = {
    /**
     * Store data securely
     * @param {string} key - Storage key
     * @param {any} value - Data to store
     */
    async storeSecureItem(key, value) {
        try {
            await EncryptedStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('Error storing secure item:', error);
        }
    },

    /**
     * Retrieve data securely
     * @param {string} key - Storage key
     * @returns {Promise<any>} Stored data
     */
    async getSecureItem(key) {
        try {
            const data = await EncryptedStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('Error retrieving secure item:', error);
            return null;
        }
    },

    /**
     * Remove data securely
     * @param {string} key - Storage key
     */
    async removeSecureItem(key) {
        try {
            await EncryptedStorage.removeItem(key);
        } catch (error) {
            console.error('Error removing secure item:', error);
        }
    },
};

/**
 * Device Info Methods
 */
const deviceInfo = {
    /**
     * Get unique device identifier
     * @returns {Promise<string>} Device ID
     */
    async getDeviceId() {
        try {
            return await getUniqueId();
        } catch (error) {
            console.error('Error getting device ID:', error);
            return null;
        }
    },
};

/**
 * API Configuration
 */
const apiConfig = {
    baseURL: ENV.API_URL,
    version: ENV.API_VERSION,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
};

export {ENV, STORAGE_KEYS, secureStorage, deviceInfo, apiConfig};
