import React from 'react';
import AppToolBar from '@components/AppToolbar/AppToolbar';
import {VHCenterContainer, Container, H3} from '@styles/themeStyles';
import {t} from 'i18next';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const HelpScreen = () => {
    return (
        <Container>
            <AppToolBar title={t('HelpSupport')} isBackShown isRightIconShown />
            <VHCenterContainer>
                <H3 align={'center'}>{t('HelpSupport')}</H3>
            </VHCenterContainer>
        </Container>
    );
};

export default HelpScreen;
