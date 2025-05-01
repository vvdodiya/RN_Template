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
import {
    validateEmail,
    validateLoginForm,
    validatePassword,
} from '@utils/Validation';

import Screens from '@constants/Screens';

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        emailError: '',
        passwordError: '',
    });

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
        }
    };

    const handleForgotPassword = () => {
        // Handle forgot password logic
        navigation.push(Screens.ForgotPasswod);
        console.log('Forgot password pressed');
    };

    const handleSignUp = () => {
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
                    label="Email"
                    placeholder="Enter your email"
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
                    label="Password"
                    variant="background"
                    placeholder="Enter your password"
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
                        Forgot Password?
                    </LabelText>
                </ForgotPasswordContainer>

                <ButtonContainer>
                    <ThemeButton
                        title="Login"
                        onPress={handleLogin}
                        disabled={!email || !password}
                    />
                </ButtonContainer>

                <SignUpContainer>
                    <LabelText>Don't have an account? </LabelText>
                    <LabelText color={Colors.primary} onPress={handleSignUp}>
                        Sign Up
                    </LabelText>
                </SignUpContainer>
            </FormContainer>
        </Container>
    );
};

export default LoginScreen;
