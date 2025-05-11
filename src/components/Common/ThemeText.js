import React from 'react';
import styled from 'styled-components/native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native';
import Colors from '@constants/Color';
import Fonts from '@constants/Fonts';

// Reference screen width size your Figma is based on (example: iPhone 11 width)
const REFERENCE_SCREEN_WIDTH = 414;

// Mapping from type prop to your Poppins font family strings
const fontFamilies = {
    black: Fonts.PoppinsBlack,
    bold: Fonts.PoppinsBold,
    extraBold: Fonts.PoppinsExtraBold,
    light: Fonts.PoppinsLight,
    medium: Fonts.PoppinsMedium,
    regular: Fonts.PoppinsRegular,
    semiBold: Fonts.PoppinsSemiBold,
    thin: Fonts.PoppinsThin,
};

const StyledText = styled.Text`
    color: ${({color}) => color || Colors.black};
    font-size: ${({size}) => size}px;
    font-family: ${({type}) => fontFamilies[type] || fontFamilies.regular};
    font-weight: ${({weight}) => weight || 'normal'};
    margin-top: ${({mt}) => mt || 0}px;
    margin-left: ${({ml}) => ml || 0}px;
    margin-right: ${({mr}) => mr || 0}px;
    margin-bottom: ${({mb}) => mb || 0}px;
    text-align: ${({align}) => align || 'left'};
`;

// Optional wrapping TouchableOpacity for onPress
const TouchableWrapper = styled(TouchableOpacity)`
    /* No additional styles by default; can be customized */
`;

const ThemeText = ({
    children,
    type = 'regular',
    size = 14,
    weight,
    color = Colors.black,
    style,
    onPress,
    ...rest
}) => {
    const responsiveSize = wp((size / REFERENCE_SCREEN_WIDTH) * 100);

    if (onPress) {
        return (
            <TouchableWrapper onPress={onPress} activeOpacity={0.7} {...rest}>
                <StyledText
                    type={type}
                    size={responsiveSize}
                    weight={weight}
                    color={color}
                    style={style}>
                    {children}
                </StyledText>
            </TouchableWrapper>
        );
    }

    return (
        <StyledText
            type={type}
            size={responsiveSize}
            weight={weight}
            color={color}
            style={style}
            {...rest}>
            {children}
        </StyledText>
    );
};

export default ThemeText;
