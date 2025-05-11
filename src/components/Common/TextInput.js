import React, {useState} from 'react';
import styled from 'styled-components/native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Fonts from '@constants/Fonts';
import Colors from '@constants/Color';
import ThemeText from './ThemeText';
import Images from '@constants/Images';
import {getResponsiveFontSize} from '@utils/commonUtil';

const Container = styled.View`
    width: 100%;
    margin-vertical: ${hp(1)}px;
`;

const LeftTextButtom = styled.TouchableOpacity`
    width: ${wp(9)};
    align-items: center;
    justify-content: center;
`;

const LineSeprator = styled.View`
    background-color: ${Colors.ThemeBorderColor};
    width: 1;
    height: 100%;
`;
const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    ${props =>
        props.variant === 'border'
            ? `border-width:1px;
        border-color:${Colors.ThemeBorderColor};
        border-radius: ${wp(10)}px;`
            : props.variant === 'underline'
            ? `
    border-bottom-width: 1px;
    border-bottom-color: ${props.error ? Colors.errorColor : Colors.gray};
  `
            : `
    border-radius: ${wp(10)}px;
    background-color:${Colors.blackOpacity.black10};
  `}
`;

const StyledTextInput = styled.TextInput`
    flex: 1;
    height: ${wp(10.15)}px;
    font-family: ${Fonts.PoppinsRegular};
    font-size: ${props => props.size}px;
    color: ${Colors.primary};
    padding: 0px ${wp(4)}px;
`;

const IconContainer = styled.TouchableOpacity`
    padding-horizontal: ${wp(3)}px;
    height: ${wp(10.15)}px;
    justify-content: center;
    align-items: center;
`;

const IconImage = styled.Image`
    width: ${wp(5)}px;
    height: ${wp(5)}px;
    tint-color: ${Colors.gray};
`;

const TextInput = ({
    containerStyle,
    inputStyle,
    variant, //background, underline, border
    error,
    label,
    leftIcon,
    rightIcon,
    secureTextEntry,
    disabled,
    size = 14,
    leftButton,
    leftText,
    onLeftButtonPress,
    ...props
}) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        if (!disabled) {
            setIsPasswordVisible(!isPasswordVisible);
        }
    };

    const renderRightIcon = () => {
        if (secureTextEntry) {
            return (
                <IconContainer
                    onPress={togglePasswordVisibility}
                    disabled={disabled}>
                    <IconImage
                        source={
                            isPasswordVisible ? Images.eyeOff : Images.eyeOn
                        }
                        resizeMode="contain"
                    />
                </IconContainer>
            );
        }
        if (rightIcon) {
            return (
                <IconContainer disabled={disabled}>
                    <IconImage source={rightIcon} resizeMode="contain" />
                </IconContainer>
            );
        }
        return null;
    };
    const responsiveSize = getResponsiveFontSize(size);

    return (
        <Container style={containerStyle}>
            {label && (
                <ThemeText mb={hp(0.5)} size={responsiveSize}>
                    {label}
                </ThemeText>
            )}
            <InputContainer variant={variant} error={error} disabled={disabled}>
                {leftButton && (
                    <LeftTextButtom onLeftButtonPress>
                        <ThemeText>{leftText}</ThemeText>
                    </LeftTextButtom>
                )}
                {leftButton && <LineSeprator />}
                {leftIcon && (
                    <IconContainer disabled={disabled}>
                        <IconImage source={leftIcon} resizeMode="contain" />
                    </IconContainer>
                )}
                <StyledTextInput
                    size={responsiveSize}
                    style={inputStyle}
                    placeholderTextColor={Colors.themeBlack}
                    secureTextEntry={secureTextEntry && !isPasswordVisible}
                    editable={!disabled}
                    {...props}
                />
                {renderRightIcon()}
            </InputContainer>
            {error && (
                <ThemeText color={Colors.error} mt={hp(0.5)}>
                    {error}
                </ThemeText>
            )}
        </Container>
    );
};

export default TextInput;
