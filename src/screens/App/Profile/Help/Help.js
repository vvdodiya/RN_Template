import React from 'react';
import AppToolBar from '@components/AppToolbar/AppToolbar';
import {VHCenterContainer, Container} from '@styles/themeStyles';
import {t} from 'i18next';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ThemeText from '@components/Common/ThemeText';

const HelpScreen = () => {
    return (
        <Container>
            <AppToolBar title={t('HelpSupport')} isBackShown isRightIconShown />
            <VHCenterContainer>
                <ThemeText align={'center'} size={26}>
                    {t('HelpSupport')}
                </ThemeText>
            </VHCenterContainer>
        </Container>
    );
};

export default HelpScreen;
