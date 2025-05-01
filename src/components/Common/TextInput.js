import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Colors, Fonts, Images} from '../../constants';
import {LabelText} from '../../styles/themeStyles';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Container = styled.View`
    width: 100%;
    margin-vertical: ${hp(1)}px;
`;

const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    opacity: ${props => (props.disabled ? 0.5 : 1)};
    ${props =>
        props.variant === 'underline'
            ? `
    border-bottom-width: 1px;
    border-bottom-color: ${props.error ? Colors.error : Colors.gray};
  `
            : `
    background-color: ${Colors.blackOpacity.black10};
    border-radius: ${wp(3)}px;
  `}
`;

const StyledTextInput = styled.TextInput`
    flex: 1;
    height: ${hp(6)}px;
    padding-horizontal: ${wp(4)}px;
    font-family: ${Fonts.PoppinsRegular};
    font-size: ${hp(1.8)}px;
    color: ${Colors.black};
`;

const IconContainer = styled.TouchableOpacity`
    padding-horizontal: ${wp(3)}px;
    height: ${hp(6)}px;
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
    variant = 'underline', //background, underline
    error,
    label,
    leftIcon,
    rightIcon,
    secureTextEntry,
    disabled,
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

    return (
        <Container style={containerStyle}>
            {label && <LabelText mb={hp(0.5)}>{label}</LabelText>}
            <InputContainer variant={variant} error={error} disabled={disabled}>
                {leftIcon && (
                    <IconContainer disabled={disabled}>
                        <IconImage source={leftIcon} resizeMode="contain" />
                    </IconContainer>
                )}
                <StyledTextInput
                    style={inputStyle}
                    placeholderTextColor={Colors.gray}
                    secureTextEntry={secureTextEntry && !isPasswordVisible}
                    editable={!disabled}
                    {...props}
                />
                {renderRightIcon()}
            </InputContainer>
            {error && (
                <LabelText color={Colors.error} mt={hp(0.5)}>
                    {error}
                </LabelText>
            )}
        </Container>
    );
};

export default TextInput;
