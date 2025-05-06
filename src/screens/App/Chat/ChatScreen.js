import React from 'react';
import AppToolBar from '@components/AppToolbar/AppToolbar';
import {VHCenterContainer, Container, H3} from '@styles/themeStyles';
import {t} from 'i18next';
import Screens from '@constants/Screens';

const ChatScreen = ({navigation}) => {
    const handleNotification = () => {
        navigation.push(Screens.NotificationScreen);
    };
    return (
        <Container>
            <AppToolBar
                title={t('Chat')}
                isRightIconShown
                onPressRightIcon={handleNotification}
            />
            <VHCenterContainer>
                <H3>{t('Chat')}</H3>
            </VHCenterContainer>
        </Container>
    );
};

export default ChatScreen;
