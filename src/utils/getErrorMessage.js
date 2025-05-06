// utils/getErrorMessage.js

export function getErrorMessage(error) {
    try {
        // HTTP response exists
        if (error?.response) {
            const status = error.response.status;
            const data = error.response.data;

            // Try multiple fallback fields commonly used by APIs
            const serverMessage =
                data?.message || data?.error || data?.errorMessage;

            if (serverMessage && typeof serverMessage === 'string') {
                return serverMessage;
            }

            // Status-code-based fallback
            const fallbackMessages = {
                400: 'Invalid request. Please check your input.',
                401: 'Session expired. Please log in again.',
                403: 'Permission denied. You cannot perform this action.',
                404: 'The requested resource could not be found.',
                408: 'Request timed out. Try again.',
                429: 'Too many requests. Please wait and retry.',
                500: 'A server error occurred. Please try later.',
                502: 'Bad gateway. Try again shortly.',
                503: 'Service is temporarily unavailable.',
                504: 'Server timeout. Try again in a moment.',
            };

            return (
                fallbackMessages[status] || `Error ${status}. Please try again.`
            );
        }

        // Request sent, no response received
        if (error?.request) {
            return 'No response received. Please check your internet connection.';
        }

        // Catch-all fallback
        return error?.message || 'Something went wrong. Please try again.';
    } catch (e) {
        return 'Unknown error occurred.';
    }
}
