import React, {useState} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {
    Container,
    LogoContainer,
    Logo,
    FormContainer,
    ForgotPasswordContainer,
    ButtonContainer,
    SignUpContainer,
} from './styles';

import TextInput from '@components/Common/TextInput';
import ThemeButton from '@components/Common/ThemeButton';

import {H2, LabelText} from '@styles/themeStyles';
import Colors from '@constants/Color';
import Images from '@constants/Images';

import Screens from '@constants/Screens';
import {useDispatch} from 'react-redux';
import {login} from '@redux/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constants from '@constants/Constant';
import {t} from 'i18next';
import {
    validateEmail,
    validateLoginForm,
    validatePassword,
} from '@utils/validate';
import apiService from '@utils/apiService';
import {getErrorMessage} from '@utils/getErrorMessage';
import {showAlert} from '@utils/alerts';
import {APIEndpoint} from '@constants/ApiEndPoins';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
    });

    const dispatch = useDispatch();

    const validateField = (field, value) => {
        if (field === 'email') {
            setErrors(prev => ({
                ...prev,
                emailError: validateEmail(value),
            }));
        } else if (field === 'password') {
            setErrors(prev => ({
                ...prev,
                passwordError: validatePassword(value),
            }));
        }
    };

    const handleLogin = () => {
        const validation = validateLoginForm(email, password);
        setErrors({
            emailError: validation.emailError,
            passwordError: validation.passwordError,
        });

        if (validation.isValid) {
            // Handle login logic
            console.log('Login pressed', {email, password});
            let tempUserData = {email, name: 'test'};
            let authToken = 'test_AuthToken';
            AsyncStorage.setItem(
                Constants.asyncStorageKeys.UserData,
                JSON.stringify(tempUserData),
            );
            AsyncStorage.setItem(
                Constants.asyncStorageKeys.AuthToken,
                authToken,
            );

            dispatch(
                login({
                    user: {email: email, name: 'test'},
                    token: authToken,
                    isAuthenticated: true,
                }),
            );
        }
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic
        navigation.push(Screens.ForgotPasswod);
        console.log('Forgot password pressed');
    };

    const handleSignUp = async () => {
        let param = {
            email: email,
            password: password,
            loginType: 'email',
        };
        try {
            let response = await apiService.post(APIEndpoint.login, param);
            console.log('API response---', response);
        } catch (error) {
            console.log('Error', error);
            let err = getErrorMessage(error);
            showAlert(err, t('AppName'));
            console.log('Error msg', err);
        }

        // Handle sign up navigation
        console.log('Sign up pressed');
    };

    return (
        <Container>
            <LogoContainer>
                <Logo source={Images.logo} />
                <H2 mt={hp(2)}>Welcome Back!</H2>
            </LogoContainer>

            <FormContainer>
                <TextInput
                    label={t('Email')}
                    placeholder={t('EnterEmail')}
                    value={email}
                    variant="background"
                    onChangeText={text => {
                        setEmail(text);
                        setErrors(prev => ({
                            ...prev,
                            emailError: '',
                        }));
                    }}
                    onBlur={() => validateField('email', email)}
                    leftIcon={Images.email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    error={errors.emailError}
                />

                <TextInput
                    label={t('Password')}
                    variant="background"
                    placeholder={t('EnterPassword')}
                    value={password}
                    onChangeText={text => {
                        setPassword(text);
                        setErrors(prev => ({
                            ...prev,
                            passwordError: '',
                        }));
                    }}
                    onBlur={() => validateField('password', password)}
                    leftIcon={Images.lock}
                    secureTextEntry
                    error={errors.passwordError}
                />

                <ForgotPasswordContainer onPress={handleForgotPassword}>
                    <LabelText color={Colors.primary}>
                        {t('ForgotPassword')}?
                    </LabelText>
                </ForgotPasswordContainer>

                <ButtonContainer>
                    <ThemeButton
                        title={t('Login')}
                        onPress={handleLogin}
                        disabled={!email || !password}
                    />
                </ButtonContainer>

                <SignUpContainer>
                    <LabelText>{t('DontHaveAccount') + ' '}</LabelText>
                    <LabelText color={Colors.primary} onPress={handleSignUp}>
                        {t('Signup')}
                    </LabelText>
                </SignUpContainer>
            </FormContainer>
        </Container>
    );
};

export default LoginScreen;
