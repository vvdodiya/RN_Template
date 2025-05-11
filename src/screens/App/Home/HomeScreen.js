import React from 'react';

import {Screens} from '@constants/index';

import AppToolBar from '@components/AppToolbar/AppToolbar';
import {VHCenterContainer, Container} from '@styles/themeStyles';
import {t} from 'i18next';
import ThemeText from '@components/Common/ThemeText';

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
                <ThemeText size={26}>{t('Home')}</ThemeText>
            </VHCenterContainer>
        </Container>
    );
};

export default HomeScreen;
