/* eslint-disable no-shadow */
import APIConfig from '@config/APIConfig';
import Axios from 'axios';

const axiosInstance = Axios.create({
    baseURL: APIConfig.baseURL, // Ensure baseURL is valid and correctly formatted
    headers: {
        'Cache-Control': 'no-cache', // Correct header for cache prevention
        'Content-Type': 'application/json',
    },
    withCredentials: true, // Include credentials for cross-origin requests if required
    timeout: 10000, // Timeout in milliseconds (10 seconds)
});

axiosInstance.interceptors.request.use(
    config => {
        console.log('axios request =>', config);
        return config;
    },
    error => {
        console.log('axios err =>', error);

        return Promise.reject(error);
    },
);

axiosInstance.interceptors.response.use(
    config => {
        // console.log('axios response =>', config);

        return config;
    },
    error => {
        // console.log('axios error =>', error);

        return Promise.reject(error);
    },
);

const getFormData = object => {
    const formData = new FormData();

    Object.keys(object).forEach(key => {
        formData.append(key, object[key]);
    });
    return formData;
};

const APICall = async (
    method = 'post',
    body,
    url = null,
    headers = null,
    formData = false,
    cancelToken = null,
) => {
    const config = {
        method: method.toLowerCase(),
        timeout: 1000 * 60 * 2,
    };

    if (global.authToken) {
        config.headers = {
            Authorization: `Bearer ` + global.authToken,
        };
    } else {
        console.log('token not found API----', url);
    }

    if (url) {
        config.url = url;
    }
    if (body && method.toLowerCase() === 'get') {
        config.params = body;
    } else if (body && method.toLowerCase() === 'post' && !formData) {
        config.data = body;
    } else if (body && method.toLowerCase() === 'post' && formData) {
        config.data = getFormData(body);
    } else {
        config.data = body || undefined;
    }

    if (formData) {
        config.headers = {
            ...config.headers,
            'Content-Type': 'multipart/form-data',
        };
        config.transformRequest = (data, headers) => {
            return config.data;
        };
    }
    if (headers) {
        config.headers = {...config.headers, ...headers};
    }
    if (cancelToken) {
        config.cancelToken = cancelToken;
    }
    // config.data = config.data || undefined;

    console.log('config.headers ======', config.headers);

    return new Promise((resolve, reject) => {
        axiosInstance(config)
            .then(res => {
                resolve(res.data);
            })
            .catch(error => {
                reject(error); // Handles Axios errors
            });
    });
};

export default APICall;
