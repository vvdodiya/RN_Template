import React from 'react';
import {ScrollView} from 'react-native';

import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import {Images, Screens} from '@constants/index';

import AppToolBar from '@components/AppToolbar/AppToolbar';
import AsyncImage from '@components/AsyncImage';
import ThemeButton from '@components/Common/ThemeButton';

import {Container} from '@styles/themeStyles';
import {
    ContentContainer,
    HeaderContainer,
    MenuItem,
    MenuText,
    ProfileImage,
    Section,
    UserEmail,
    UserName,
} from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {logout} from '@redux/authSlice';
import {useDispatch} from 'react-redux';
import {t} from 'i18next';
import {useActionSheet} from '@components/Dialog/ActionSheet/ActionSheet';
import {showAlertWithTwoCallback} from '@utils/alerts';

const ProfileScreen = ({navigation}) => {
    const dispatch = useDispatch();

    const {showActionSheet, modalContent} = useActionSheet();
    const menuItems = [
        {
            id: 'editProfile',
            title: t('EditProfile'),
            icon: Images.edit,
            screen: 'EditProfileScreen',
        },
        {
            id: 'settings',
            title: t('Settings'),
            icon: Images.settings,
            screen: 'SettingsScreen',
        },
        {
            id: 'helpSupport',
            title: t('HelpSupport'),
            icon: Images.help,
            screen: 'HelpScreen',
        },
    ];
    const handleSettings = () => {
        navigation.navigate(Screens.SettingScreen);
        console.log('Handle Settings');
    };

    const handleHelp = () => {
        navigation.navigate(Screens.HelpAndSupportScreen);
        console.log('Handle Help');
    };

    const handleShowImageOptions = () => {
        console.log('Handle Show Image Options');

        showActionSheet({
            title: 'Edit Profile',
            options: [
                {key: 'Take Photo', title: t('TakePhoto')},
                {key: 'Choose from Gallery', title: t('ChooseFromGallery')},
                {key: 'Remove Photo', title: t('RemovePhoto')},
            ],
            cancelText: t('Cancel'),
            destructiveIndex: 2,
            onOptionSelect: key => {
                console.log('Selected:', key);
            },
        });
    };

    const handleLogutYes = () => {
        AsyncStorage.clear();
        dispatch(logout());
    };

    const handleLogout = () => {
        showAlertWithTwoCallback(
            'Are you sure you want to logout?',
            t('Logout'),
            t('Yes'),
            t('No'),
            handleLogutYes,
            () => {},
            // handleCancelLogout,
        );
        console.log('Handle Logout');
    };

    const handleMenuItemPress = item => {
        console.log('Handle Menu Item Press', item);
        if (item.id === 'editProfile') {
            handleShowImageOptions();
        } else if (item.id === 'settings') {
            handleSettings();
        } else if (item.id === 'helpSupport') {
            handleHelp();
        }
    };
    const handleNotification = () => {
        navigation.push(Screens.NotificationScreen);
    };
    return (
        <Container>
            <ScrollView showsVerticalScrollIndicator={false}>
                <AppToolBar
                    title={t('Profile')}
                    isRightIconShown
                    onPressRightIcon={handleNotification}
                />
                <HeaderContainer>
                    <ProfileImage
                        source={{
                            uri: 'http://18.216.100.56:1337/uploads/post/d1b80f13-ae61-4135-a3ba-785af2fe2c58.jpg',
                        }}
                        width={wp(30)}
                        height={wp(30)}
                    />

                    <UserName>John Doe</UserName>
                    <UserEmail>john.doe@example.com</UserEmail>
                </HeaderContainer>

                <ContentContainer>
                    <Section>
                        {menuItems.map(item => (
                            <MenuItem
                                key={item.id}
                                onPress={() => handleMenuItemPress(item)}>
                                <AsyncImage
                                    source={item.icon}
                                    width={wp(5)}
                                    height={wp(5)}
                                />
                                <MenuText size={16}>{item.title}</MenuText>
                            </MenuItem>
                        ))}
                    </Section>

                    <ThemeButton
                        title={t('Logout')}
                        variant="secondary"
                        onPress={handleLogout}
                    />
                </ContentContainer>
            </ScrollView>
            {modalContent}
        </Container>
    );
};

export default ProfileScreen;
