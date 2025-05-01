import React from 'react';
import styled from 'styled-components/native';
import {Colors} from '@constants/index';
import AppToolBar from '@components/AppToolbar/AppToolbar';

const Container = styled.View`
    flex: 1;
    background-color: ${Colors.secondary};
`;

const NotificationScreen = () => {
    return (
        <Container>
            <AppToolBar title="Notification" isRightIconShown />
        </Container>
    );
};

export default NotificationScreen;
