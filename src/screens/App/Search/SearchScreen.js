import React from 'react';

import AppToolBar from '@components/AppToolbar/AppToolbar';
import {VHCenterContainer, Container, H3} from '@styles/themeStyles';
import {t} from 'i18next';
import Screens from '@constants/Screens';

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
                <H3>{t('Search')}</H3>
            </VHCenterContainer>
        </Container>
    );
};

export default SearchScreen;
