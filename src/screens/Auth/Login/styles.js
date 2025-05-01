import styled from 'styled-components/native';
import {Colors} from '../../../constants';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.white};
    padding-horizontal: ${wp(5)}px;
`;

export const LogoContainer = styled.View`
    align-items: center;
    margin-top: ${hp(10)}px;
`;

export const Logo = styled.Image`
    width: ${wp(40)}px;
    height: ${wp(40)}px;
    resize-mode: contain;
`;

export const FormContainer = styled.View``;

export const ForgotPasswordContainer = styled.TouchableOpacity`
    align-self: flex-end;
    margin-top: ${hp(1)}px;
    margin-bottom: ${hp(3)}px;
`;

export const ButtonContainer = styled.View`
    margin-top: ${hp(3)}px;
`;

export const SignUpContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: ${hp(3)}px;
`;
