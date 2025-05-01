// components/CustomButton.js
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '@constants/Color';
import {ButtonText} from '@styles/themeStyles';

const ThemeButton = ({
    title,
    onPress,
    isBorderButton = false, // If true, button will have border and no fill
    leftIcon,
    rightIcon,
    buttonStyle = {}, // Custom button styles
    textStyle = {}, // Custom text styles
    marginHorizontal,
    mt,
    ml,
    mr,
    mb,
    ht,
    radius,
    disabled = false,
}) => {
    return (
        <ButtonContainer
            onPress={onPress}
            isBorderButton={isBorderButton}
            marginHorizontal={marginHorizontal}
            mt={mt}
            ml={ml}
            mr={mr}
            mb={mb}
            ht={ht}
            radius={radius}
            style={buttonStyle} // Apply custom button style
            disabled={disabled}>
            <ButtonContent>
                {leftIcon && (
                    <IconWrapper>
                        <Icon source={leftIcon} resizeMode={'contain'} />
                    </IconWrapper>
                )}
                <ButtonText
                    color={isBorderButton ? Colors.primary : Colors.white}
                    style={textStyle}>
                    {title}
                </ButtonText>
                {rightIcon && (
                    <IconWrapper>
                        <Icon source={rightIcon} resizeMode={'contain'} />
                    </IconWrapper>
                )}
            </ButtonContent>
        </ButtonContainer>
    );
};

// Styled components
const ButtonContainer = styled(TouchableOpacity)`
    background-color: ${({isBorderButton}) =>
        isBorderButton ? 'transparent' : Colors.primary};
    border-color: ${({isBorderButton}) =>
        isBorderButton ? Colors.primary : 'transparent'};
    border-width: ${({isBorderButton}) => (isBorderButton ? '1px' : '0px')};
    margin-left: ${({ml}) => ml || 0}px;
    margin-right: ${({mr}) => mr || 0}px;
    margin-top: ${({mt}) => mt || 0}px;
    margin-bottom: ${({mb}) => mb || 0}px;
    height: ${({ht}) => ht || hp(6)}px;
    border-radius: ${({radius}) => radius || wp(3)}px;
    align-items: center;
    justify-content: center;
    opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
`;

const Icon = styled.Image`
    width: ${wp(5.6)};
    height: ${wp(5.6)};
`;
const ButtonContent = styled(View)`
    flex-direction: row;
    align-items: center;
`;

const IconWrapper = styled(View)`
    margin: 0 ${wp(1)}px;
`;

export default ThemeButton;
