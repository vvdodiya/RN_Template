import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {validateEmail} from '@utils/Validation';
import TextInput from '@components/Common/TextInput';
import Images from '@constants/Images';
import ThemeButton from '@components/Common/ThemeButton';
import {H3, TextS} from '@styles/themeStyles';

import {
    Container,
    HeaderContainer,
    FormContainer,
    ButtonContainer,
    BackButton,
    BackButtonText,
} from './styles';
import {Colors} from '@constants/index';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ForgotPassword = () => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleSubmit = () => {
        const emailValidation = validateEmail(email);
        setEmailError(emailValidation);

        if (!emailValidation) {
            // TODO: Implement forgot password API call
            console.log('Submit email:', email);
        }
    };

    const handleBackToLogin = () => {
        navigation.goBack();
    };

    return (
        <Container>
            <HeaderContainer>
                <H3 align="center" mt={hp(3)}>
                    Forgot Password
                </H3>
                <TextS align="center" mt={hp(1)}>
                    Enter your email address and we'll send you instructions to
                    reset your password.
                </TextS>
            </HeaderContainer>

            <FormContainer>
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={text => {
                        setEmail(text);
                        setEmailError('');
                    }}
                    placeholder="Enter your email"
                    variant="background"
                    leftIcon={Images.email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    error={emailError}
                />

                <ButtonContainer>
                    <ButtonContainer>
                        <ThemeButton
                            title="Send Reset Link"
                            onPress={handleSubmit}
                            disabled={!email}
                        />
                    </ButtonContainer>

                    <BackButton onPress={handleBackToLogin}>
                        <BackButtonText color={Colors.primary}>
                            Back to Login
                        </BackButtonText>
                    </BackButton>
                </ButtonContainer>
            </FormContainer>
        </Container>
    );
};

export default ForgotPassword;
