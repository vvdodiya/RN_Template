import React from 'react';

import {Screens} from '@constants/index';

import AppToolBar from '@components/AppToolbar/AppToolbar';
import {VHCenterContainer, Container, H3} from '@styles/themeStyles';
import {t} from 'i18next';

const HomeScreen = ({navigation}) => {
    const handleNotification = () => {
        navigation.push(Screens.NotificationScreen);
    };
    return (
        <Container>
            <AppToolBar
                title={t('Home')}
                isRightIconShown
                onPressRightIcon={handleNotification}
            />
            <VHCenterContainer>
                <H3>{t('Home')}</H3>
            </VHCenterContainer>
        </Container>
    );
};

export default HomeScreen;
