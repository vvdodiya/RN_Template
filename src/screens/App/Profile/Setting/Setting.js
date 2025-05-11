import React from 'react';
import AppToolBar from '@components/AppToolbar/AppToolbar';
import {VHCenterContainer, Container} from '@styles/themeStyles';
import {t} from 'i18next';
import ThemeText from '@components/Common/ThemeText';

const SettingScreen = () => {
    return (
        <Container>
            <AppToolBar title={t('Settings')} isBackShown />
            <VHCenterContainer>
                <ThemeText size={26}>{t('Settings')}</ThemeText>
            </VHCenterContainer>
        </Container>
    );
};

export default SettingScreen;
