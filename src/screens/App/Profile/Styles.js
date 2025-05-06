import AsyncImage from '@components/AsyncImage';
import {Colors} from '@constants/index';
import {H2, TextM} from '@styles/themeStyles';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.white};
`;

export const HeaderContainer = styled.View`
    align-items: center;
    padding: ${hp(3)}px;
    background-color: ${Colors.primary};
`;

export const ProfileImage = styled(AsyncImage)`
    border-radius: ${wp(15)}px;
    border-width: 3px;
    border-color: ${Colors.white};
`;

export const UserName = styled(H2)`
    color: ${Colors.white};
    margin-top: ${hp(1)}px;
`;

export const UserEmail = styled(TextM)`
    color: ${Colors.white};
    opacity: 0.8;
`;

export const ContentContainer = styled.View`
    padding: ${hp(2)}px;
`;

export const Section = styled.View`
    margin-bottom: ${hp(3)}px;
`;

export const MenuItem = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding: ${hp(1.5)}px;
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.border};
`;

export const MenuText = styled(TextM)`
    margin-left: ${wp(3)}px;
`;
