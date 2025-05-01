export const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        return 'Email is required';
    }
    if (!emailRegex.test(email)) {
        return 'Please enter a valid email';
    }
    return '';
};

export const validatePassword = password => {
    if (!password) {
        return 'Password is required';
    }
    if (password.length < 6) {
        return 'Password must be at least 6 characters';
    }
    return '';
};

export const validateLoginForm = (email, password) => {
    const emailError = validateEmail(email);
    const passwordError = validatePassword(password);

    return {
        emailError,
        passwordError,
        isValid: !emailError && !passwordError,
    };
};
