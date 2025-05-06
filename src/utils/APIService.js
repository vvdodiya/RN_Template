// apiService.js
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import APIConfig from '@config/APIConfig';
import Constants from '@constants/Constant';
import {useDispatch} from 'react-redux';
import {logout} from '@redux/authSlice';
import {t} from 'i18next';

// Base URL of your API
const BASE_URL = APIConfig.baseURL; // replace with your API

const apiClient = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

// Set up request interceptor to attach token
apiClient.interceptors.request.use(
    async config => {
        const token = await AsyncStorage.getItem(
            Constants.asyncStorageKeys.AuthToken,
        ); // Adjust key name as needed

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error),
);

// Response error logging
apiClient.interceptors.response.use(
    response => {
        // If the response is successful, return only the data and status code
        return {
            data: response.data,
            statusCode: response.status,
        };
    },
    async error => {
        if (axios.isCancel(error)) {
            console.log('Request canceled:', error.message);
        } else if (error.response) {
            const {status} = error.response;

            // Handle Unauthorized (401)
            if (status === 401) {
                console.warn('Unauthorized. Logging out...');
                await AsyncStorage.removeItem(
                    Constants.asyncStorageKeys.AuthToken,
                );

                let dispatch = useDispatch();
                dispatch(logout());
            }

            console.log('Server error:', status, error.response.data);
        } else {
            console.log('Network error:', error.message);
        }

        return Promise.reject(error);
    },
);

// Cancel token factory
export const createCancelToken = () => {
    const controller = new AbortController();
    return {
        signal: controller.signal,
        cancel: () => controller.abort(),
    };
};

// Main API methods
const apiService = {
    get: (url, params = {}, config = {}) =>
        apiClient.get(url, {...config, params}),

    post: (url, data = {}, config = {}) => apiClient.post(url, data, config),

    put: (url, data = {}, config = {}) => apiClient.put(url, data, config),

    delete: (url, config = {}) => apiClient.delete(url, config),

    // Upload using FormData
    postFormData: (url, formData, config = {}) =>
        apiClient.post(url, formData, {
            ...config,
            headers: {
                'Content-Type': 'multipart/form-data',
                ...(config.headers || {}),
            },
        }),
};

export default apiService;
