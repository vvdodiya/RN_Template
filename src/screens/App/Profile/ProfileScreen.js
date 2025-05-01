import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {Colors, Images} from '@constants/index';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {H2, TextM} from '@styles/themeStyles';
import AsyncImage from '@components/AsyncImage';
import ThemeButton from '@components/Common/ThemeButton';
import AppToolBar from '@components/AppToolbar/AppToolbar';

const Container = styled.View`
    flex: 1;
    background-color: ${Colors.white};
`;

const HeaderContainer = styled.View`
    align-items: center;
    padding: ${hp(3)}px;
    background-color: ${Colors.primary};
`;

const ProfileImage = styled(AsyncImage)`
    border-radius: ${wp(15)}px;
    border-width: 3px;
    border-color: ${Colors.white};
`;

const UserName = styled(H2)`
    color: ${Colors.white};
    margin-top: ${hp(1)}px;
`;

const UserEmail = styled(TextM)`
    color: ${Colors.white};
    opacity: 0.8;
`;

const ContentContainer = styled.View`
    padding: ${hp(2)}px;
`;

const Section = styled.View`
    margin-bottom: ${hp(3)}px;
`;

const MenuItem = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding: ${hp(1.5)}px;
    border-bottom-width: 1px;
    border-bottom-color: ${Colors.border};
`;

const MenuText = styled(TextM)`
    margin-left: ${wp(3)}px;
`;

const ProfileScreen = () => {
    const menuItems = [
        {
            id: '1',
            title: 'Edit Profile',
            icon: 'edit',
            screen: 'EditProfileScreen',
        },
        {
            id: '2',
            title: 'Settings',
            icon: 'settings',
            screen: 'SettingsScreen',
        },
        {
            id: '3',
            title: 'Help & Support',
            icon: 'help',
            screen: 'HelpScreen',
        },
    ];

    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AppToolBar title="Profile" isRightIconShown />
                <HeaderContainer>
                    <ProfileImage
                        source={Images.profile}
                        width={wp(30)}
                        height={wp(30)}
                    />
                    <UserName>John Doe</UserName>
                    <UserEmail>john.doe@example.com</UserEmail>
                </HeaderContainer>

                <ContentContainer>
                    <Section>
                        {menuItems.map(item => (
                            <MenuItem key={item.id}>
                                <AsyncImage
                                    source={item.icon}
                                    width={wp(5)}
                                    height={wp(5)}
                                />
                                <MenuText>{item.title}</MenuText>
                            </MenuItem>
                        ))}
                    </Section>

                    <ThemeButton
                        title="Logout"
                        onPress={() => {
                            // TODO: Implement logout
                        }}
                        variant="secondary"
                    />
                </ContentContainer>
            </ScrollView>
        </Container>
    );
};

export default ProfileScreen;
