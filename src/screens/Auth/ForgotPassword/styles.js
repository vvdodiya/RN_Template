import styled from 'styled-components/native';
import {Colors} from '@constants/index';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import ThemeText from '@components/Common/ThemeText';

export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.white};
    padding: ${hp(2)}px;
`;

export const HeaderContainer = styled.View`
    margin-top: ${hp(5)}px;
    margin-bottom: ${hp(3)}px;
`;

export const FormContainer = styled.View`
    margin-top: ${hp(3)}px;
`;
export const Title = styled(ThemeText)`
    margin-top: ${hp(3)};
`;
export const Descriptiion = styled(ThemeText)``;
export const ButtonContainer = styled.View`
    margin-top: ${hp(3)}px;
`;

export const BackButton = styled.TouchableOpacity`
    margin-top: ${hp(2)}px;
    align-items: center;
`;

export const BackButtonText = styled(ThemeText)``;
