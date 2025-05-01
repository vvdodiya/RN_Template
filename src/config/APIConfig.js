const urls = {
    staging: 'http://3.22.232.250:8000/', // Staging server
    local: 'https://f408-103-90-46-227.ngrok-free.app/',
    live: '', //Live server
    termOfServiceLive: '',
    privacyPolicyLive: '',
    helpURLLive: '',
    termOfServiceStaging: '',
    privacyPolicyStaging: '',
};

export default {
    baseURL: `${urls.staging}`, // Base URL
    termServiceURL: `${urls.termOfServiceLive}`, // Base URL
    privacyPolicyURL: `${urls.privacyPolicyLive}`, // Base URL
    helpURL: `${urls.helpURLLive}`, // Base URL
    headers: {
        Accept: 'application/json',
        Authorization: global.userToken,
        ContentType: 'application/json',
    },
    urls,
};
