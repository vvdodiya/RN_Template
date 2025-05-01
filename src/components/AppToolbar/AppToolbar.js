import React from 'react';
import {Platform, StatusBar} from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Text from '@components/Common/Text';
import Colors from '@constants/Color';
import {navigationRef} from '@utils/NavigationService';
import Images from '@constants/Images';
import themeStyles from '@styles/themeStyles';

// Styled Components
const SafeAreaContainer = styled.SafeAreaView`
    margin-top: ${({insets}) => (Platform.OS === 'android' ? insets.top : 0)}px;
    background-color: ${Colors.primaryColor};
`;

const Container = styled.View`
    height: ${wp(12.5)}px;
`;

const Subcontainer = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-horizontal: ${themeStyles.commonSpacing};
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

const BgTransparent = styled.View`
    background-color: ${Colors.transparent};
    height: ${hp(5)}px;
    width: ${hp(5)}px;
`;

const AppToolBar = ({
    title = 'RN Demo',
    isBackShown = true,
    isRightIconShown = true,
    rightIconSource = Images.backIcon,
    rightIconResizeMode = 'contain',
    onPressRightIcon = () => {},
    containerStyle,
    isTitleLeft = false,
    textStyle,
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
                    <Icon source={Images.backIcon} resizeMode="contain" />
                </IconContainer>
            ) : (
                !isTitleLeft && <BgTransparent />
            )}

            <TitleContainer isTitleLeft={isTitleLeft}>
                <Text type="h3" color={Colors.white} style={textStyle}>
                    {title}
                </Text>
            </TitleContainer>

            {isRightIconShown ? (
                <IconContainer onPress={onPressRightIcon}>
                    <Icon
                        source={rightIconSource}
                        resizeMode={rightIconResizeMode}
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
