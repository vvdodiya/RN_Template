// components/CustomButton.js
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import styled from 'styled-components/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '@constants/Color';
import ThemeText from './ThemeText';

const ThemeButton = ({
    title,
    onPress,
    isBorderButton = false, // If true, button will have border and no fill
    leftIcon,
    rightIcon,
    buttonStyle = {}, // Custom button styles
    textStyle = {}, // Custom text styles
    marginHorizontal,
    bgColor,
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
            bgColor={bgColor}
            radius={radius}
            style={buttonStyle} // Apply custom button style
            disabled={disabled}>
            <ButtonContent>
                <IconWrapper>
                    {leftIcon && (
                        <Icon source={leftIcon} resizeMode={'contain'} />
                    )}
                </IconWrapper>
                <TextContainer>
                    <ThemeText
                        size={16}
                        type="semiBold"
                        color={isBorderButton ? Colors.primary : Colors.white}>
                        {title}
                    </ThemeText>
                </TextContainer>
                <IconWrapper>
                    {rightIcon && (
                        <Icon source={rightIcon} resizeMode={'contain'} />
                    )}
                </IconWrapper>
            </ButtonContent>
        </ButtonContainer>
    );
};

// Styled components
const ButtonContainer = styled(TouchableOpacity)`
    background-color: ${({isBorderButton, bgColor}) =>
        bgColor ? bgColor : isBorderButton ? 'transparent' : Colors.primary};
    border-color: ${({isBorderButton}) =>
        isBorderButton ? Colors.primary : 'transparent'};
    border-width: ${({isBorderButton}) => (isBorderButton ? '1px' : '0px')};
    margin-left: ${({ml}) => ml || 0}px;
    margin-right: ${({mr}) => mr || 0}px;
    margin-top: ${({mt}) => mt || 0}px;
    margin-bottom: ${({mb}) => mb || 0}px;
    height: ${({ht}) => ht || wp(12.5)}px;
    border-radius: ${({radius}) => radius || wp(7)}px;
    align-items: center;
    justify-content: center;
    opacity: ${({disabled}) => (disabled ? 0.5 : 1)};
`;

const Icon = styled.Image`
    width: 100%;
    height: 100%;
`;
const ButtonContent = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const TextContainer = styled.View`
    flex: 1;
    align-items: center;
`;
const IconWrapper = styled(View)`
    margin: 0 ${wp(2)}px;
    width: ${wp(7.73)};
    height: ${wp(7.73)};
`;

export default ThemeButton;
