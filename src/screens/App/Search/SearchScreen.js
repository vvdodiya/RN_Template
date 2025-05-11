import React from 'react';

import AppToolBar from '@components/AppToolbar/AppToolbar';
import {VHCenterContainer, Container} from '@styles/themeStyles';
import {t} from 'i18next';
import Screens from '@constants/Screens';
import ThemeText from '@components/Common/ThemeText';

const SearchScreen = ({navigation}) => {
    const handleNotification = () => {
        navigation.push(Screens.NotificationScreen);
    };

    return (
        <Container>
            <AppToolBar
                title={t('Search')}
                isRightIconShown
                onPressRightIcon={handleNotification}
            />
            <VHCenterContainer>
                <ThemeText size={26}>{t('Search')}</ThemeText>
            </VHCenterContainer>
        </Container>
    );
};

export default SearchScreen;
