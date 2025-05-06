import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {validateEmail} from '@utils/validate';
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
    Title,
    Descriptiion,
} from './styles';
import {Colors} from '@constants/index';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {t} from 'i18next';

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
                <Title>{t('ForgotPassword')}</Title>
                <Descriptiion>{t('ForgotPasswordDetail')}</Descriptiion>
            </HeaderContainer>

            <FormContainer>
                <TextInput
                    label={t('Email')}
                    value={email}
                    onChangeText={text => {
                        setEmail(text);
                        setEmailError('');
                    }}
                    placeholder={t('EnterEmail')}
                    variant="background"
                    leftIcon={Images.email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    error={emailError}
                />

                <ButtonContainer>
                    <ButtonContainer>
                        <ThemeButton
                            title={t('SendResetLink')}
                            onPress={handleSubmit}
                            disabled={!email}
                        />
                    </ButtonContainer>

                    <BackButton onPress={handleBackToLogin}>
                        <BackButtonText color={Colors.primary}>
                            {t('BackToLogin')}
                        </BackButtonText>
                    </BackButton>
                </ButtonContainer>
            </FormContainer>
        </Container>
    );
};

export default ForgotPassword;
