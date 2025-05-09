import React from 'react';
import AppToolBar from '@components/AppToolbar/AppToolbar';
import {VHCenterContainer, Container, H3} from '@styles/themeStyles';
import {t} from 'i18next';

const NotificationScreen = () => {
    return (
        <Container>
            <AppToolBar title={t('Notification')} isBackShown />
            <VHCenterContainer>
                <H3>{t('Notification')}</H3>
            </VHCenterContainer>
        </Container>
    );
};

export default NotificationScreen;
