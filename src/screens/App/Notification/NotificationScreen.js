import React from 'react';
import AppToolBar from '@components/AppToolbar/AppToolbar';
import {VHCenterContainer, Container} from '@styles/themeStyles';
import {t} from 'i18next';
import ThemeText from '@components/Common/ThemeText';

const NotificationScreen = () => {
    return (
        <Container>
            <AppToolBar title={t('Notification')} isBackShown />
            <VHCenterContainer>
                <ThemeText size={26}>{t('Notification')}</ThemeText>
            </VHCenterContainer>
        </Container>
    );
};

export default NotificationScreen;
