import React from 'react';
import {Platform, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Colors from '@constants/Color';
import {navigationRef} from '@utils/navigationService';
import Images from '@constants/Images';
import themeStyles from '@styles/themeStyles';
import {t} from 'i18next';
import ThemeText from '@components/Common/ThemeText';

// Styled Components
const SafeAreaContainer = styled.SafeAreaView`
    margin-top: ${({insets}) => (Platform.OS === 'android' ? insets.top : 0)}px;
    background-color: ${Colors.white};
`;

const Container = styled.View`
    height: ${wp(12.5)}px;
`;

const Subcontainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-horizontal: ${themeStyles.commonSpacing / 2};
`;

const IconContainer = styled.TouchableOpacity`
    height: ${hp(5)}px;
    width: ${hp(5)}px;
    align-items: center;
    justify-content: center;
    border-radius: ${wp(2.5)}px;
`;

const Icon = styled.Image`
    height: ${hp(2.5)}px;
    width: ${hp(2.5)}px;
    resize-mode: contain;
`;

const TitleContainer = styled.View`
    flex: 1;
    align-items: ${({isTitleLeft}) => (isTitleLeft ? 'flex-start' : 'center')};
`;

const TitleText = styled(ThemeText)``;

const BgTransparent = styled.View`
    background-color: ${Colors.transparent};
    height: ${hp(5)}px;
    width: ${hp(5)}px;
`;

const AppToolBar = ({
    title = t('AppName'),
    isBackShown = false,
    isRightIconShown = false,
    rightIconSource = Images.notification,
    rightIconResizeMode = 'contain',
    onPressRightIcon = () => {},
    containerStyle,
    isTitleLeft = false,
    titleTextStyle,
}) => {
    // Button Press
    const onPressBack = () => {
        if (navigationRef.current) {
            navigationRef.current.goBack();
        }
    };

    // Render Header Section
    const renderHeaderSection = () => (
        <Subcontainer>
            {isBackShown ? (
                <IconContainer onPress={onPressBack}>
                    <Icon
                        source={Images.backIcon}
                        resizeMode="contain"
                        tintColor={Colors.black}
                    />
                </IconContainer>
            ) : (
                !isTitleLeft && <BgTransparent />
            )}

            <TitleContainer isTitleLeft={isTitleLeft}>
                <TitleText size={22} type="semiBold" style={titleTextStyle}>
                    {title}
                </TitleText>
            </TitleContainer>

            {isRightIconShown ? (
                <IconContainer onPress={onPressRightIcon}>
                    <Icon
                        source={rightIconSource}
                        resizeMode={rightIconResizeMode}
                        tintColor={Colors.black}
                    />
                </IconContainer>
            ) : (
                <BgTransparent />
            )}
        </Subcontainer>
    );

    const insets = useSafeAreaInsets();

    return (
        <SafeAreaContainer insets={insets}>
            {Platform.OS === 'android' && (
                <StatusBar
                    barStyle="light-content"
                    translucent
                    backgroundColor="transparent"
                />
            )}
            <Container style={containerStyle}>
                {renderHeaderSection()}
            </Container>
        </SafeAreaContainer>
    );
};

AppToolBar.propTypes = {
    title: PropTypes.string,
    isBackShown: PropTypes.bool,
    isRightIconShown: PropTypes.bool,
    rightIconSource: PropTypes.any,
    rightIconResizeMode: PropTypes.string,
    containerStyle: PropTypes.any,
    isTitleLeft: PropTypes.bool,
    textStyle: PropTypes.any,
    onPressRightIcon: PropTypes.func,
};

export default AppToolBar;
