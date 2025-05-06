import React from 'react';
import AppToolBar from '@components/AppToolbar/AppToolbar';
import {VHCenterContainer, Container, H3} from '@styles/themeStyles';
import {t} from 'i18next';

const SettingScreen = () => {
    return (
        <Container>
            <AppToolBar title={t('Settings')} isBackShown />
            <VHCenterContainer>
                <H3>{t('Settings')}</H3>
            </VHCenterContainer>
        </Container>
    );
};

export default SettingScreen;
