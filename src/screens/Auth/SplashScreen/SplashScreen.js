import {View, Text} from 'react-native';
import React from 'react';
import AppToolBar from '@components/AppToolbar/AppToolbar';
import Images from '@constants/Images';
import ThemeButton from '@components/Common/ThemeButton';
import themeStyles from '@styles/themeStyles';

const SplashScreen = () => {
    return (
        <View
            style={{
                flex: 1,
            }}>
            <AppToolBar
                title="Home"
                isTitleLeft={true}
                rightIconSource={Images.menuIcon}
            />
            <ThemeButton
                title={'Okay'}
                mt={themeStyles.commonSpacing}
                ml={themeStyles.commonSpacing}
                mr={themeStyles.commonSpacing}
            />
        </View>
    );
};

export default SplashScreen;
