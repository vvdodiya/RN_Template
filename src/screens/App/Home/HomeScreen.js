import React from 'react';
import styled from 'styled-components/native';
import {Colors, Images} from '@constants/index';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import AppToolBar from '@components/AppToolbar/AppToolbar';

const Container = styled.View`
    flex: 1;
    background-color: ${Colors.primary};
`;

const HomeScreen = () => {
    return (
        <Container>
            <AppToolBar
                title="Home"
                isRightIconShown
                onPressRightIcon={() => {}}
            />
        </Container>
    );
};

export default HomeScreen;
