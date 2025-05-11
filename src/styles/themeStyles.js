/**
 * Theme Styles Configuration
 * This file contains the base styling configuration for the entire application.
 * It includes responsive utilities, base components, text styles, and theme constants.
 */

// @ts-nocheck
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import {Colors, Fonts} from '../constants';
import {
    widthPercentageToDP as wp, // Converts width percentage to device pixels
    heightPercentageToDP as hp, // Converts height percentage to device pixels
} from 'react-native-responsive-screen';

/**
 * Base Components
 * These are the fundamental styled components used throughout the application.
 * They provide consistent layout and styling patterns.
 */

// Gradient background container with dark theme colors
export const BgContainer = styled(LinearGradient).attrs({
    colors: ['#00213E', Colors.black],
    start: {x: 0, y: 0},
    end: {x: 0, y: 1},
})`
    flex: 1;
`;

// Safe area container for iOS notch handling
export const SafeAreaContainer = styled.SafeAreaView`
    flex: 1;
`;

// Basic container with flex
export const Container = styled.View`
    flex: 1;
    background-color: ${Colors.white};
`;
export const VHCenterContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ChildContainer = styled.View`
    flex: 1;
`;

// Row container for horizontal layouts
export const RowContainer = styled.View`
    flex-direction: row;
`;

// Spacer component for consistent spacing
export const Spacer = styled.View`
    width: ${wp(10)}px;
`;

// Vertical pipe view for visual separators
export const PipeView = styled.View`
    height: ${wp(20)}px;
    width: ${wp(2)}px;
    background-color: ${Colors.primary};
`;

// Horizontal separator line
export const SeparatorLine = styled.View`
    height: ${StyleSheet.hairlineWidth};
    background-color: ${({color}) => color || Colors.gray};
`;

// Scrollable container
export const ScrollContainer = styled.ScrollView``;

// /**
//  * Text Components
//  * Base text component with default styling and customizable props
//  */
// const BaseText = styled.Text`
//     font-size: ${props => props.size || hp(1.8)}px;
//     font-family: ${props => props.fontFamily || Fonts.PoppinsRegular};
//     color: ${props => props.color || Colors.black};
//     margin-top: ${({mt}) => mt || 0}px;
//     margin-left: ${({ml}) => ml || 0}px;
//     margin-right: ${({mr}) => mr || 0}px;
//     margin-bottom: ${({mb}) => mb || 0}px;
//     text-align: ${({align}) => align || 'left'};
// `;

// /**
//  * Heading Styles (H1-H6)
//  * Hierarchical heading components with different sizes and weights
//  * Usage: <H1>Main Title</H1>, <H2>Section Title</H2>, etc.
//  */
// export const H1 = styled(BaseText)`
//     font-size: ${props => props.size || hp(4)}px;
//     font-family: ${Fonts.PoppinsBold};
// `;

// export const H2 = styled(BaseText)`
//     font-size: ${props => props.size || hp(3.5)}px;
//     font-family: ${Fonts.PoppinsBold};
// `;

// export const H3 = styled(BaseText)`
//     font-size: ${props => props.size || hp(3)}px;
//     font-family: ${Fonts.PoppinsMedium};
// `;

// export const H4 = styled(BaseText)`
//     font-size: ${props => props.size || hp(2.5)}px;
//     font-family: ${Fonts.PoppinsMedium};
// `;

// export const H5 = styled(BaseText)`
//     font-size: ${props => props.size || hp(2.2)}px;
//     font-family: ${Fonts.PoppinsMedium};
// `;

// export const H6 = styled(BaseText)`
//     font-size: ${props => props.size || hp(2)}px;
//     font-family: ${Fonts.PoppinsMedium};
// `;

// /**
//  * Text Size Styles
//  * Regular text components with different sizes
//  * Usage: <TextXXL>Large Text</TextXXL>, <TextM>Medium Text</TextM>, etc.
//  */
// export const TextXXL = styled(BaseText)`
//     font-size: ${props => props.size || hp(3.5)}px;
//     font-family: ${Fonts.PoppinsRegular};
// `;

// export const TextXL = styled(BaseText)`
//     font-size: ${props => props.size || hp(3)}px;
//     font-family: ${Fonts.PoppinsRegular};
// `;

// export const TextL = styled(BaseText)`
//     font-size: ${props => props.size || hp(2.5)}px;
//     font-family: ${Fonts.PoppinsRegular};
// `;

// export const TextM = styled(BaseText)`
//     font-size: ${props => props.size || hp(2)}px;
//     font-family: ${Fonts.PoppinsRegular};
// `;

// export const TextS = styled(BaseText)`
//     font-size: ${props => props.size || hp(1.8)}px;
//     font-family: ${Fonts.PoppinsRegular};
// `;

// export const TextXS = styled(BaseText)`
//     font-size: ${props => props.size || hp(1.5)}px;
//     font-family: ${Fonts.PoppinsRegular};
// `;

// export const TextXXS = styled(BaseText)`
//     font-size: ${props => props.size || hp(1.2)}px;
//     font-family: ${Fonts.PoppinsRegular};
// `;

/**
 * Special Text Styles
 * Components for specific use cases like buttons, inputs, and labels
 * Usage: <ButtonText>Click Me</ButtonText>, <LabelText>Username</LabelText>, etc.
 */
// export const ButtonText = styled(BaseText)`
//     font-size: ${props => props.size || hp(2)}px;
//     font-family: ${Fonts.PoppinsMedium};
// `;

// export const InputText = styled(BaseText)`
//     font-size: ${props => props.size || hp(1.8)}px;
//     font-family: ${Fonts.PoppinsMedium};
// `;

// export const LabelText = styled(BaseText)`
//     font-size: ${props => props.size || hp(1.5)}px;
//     font-family: ${Fonts.PoppinsRegular};
//     color: ${props => (props.color ? props.color : Colors.gray)};
//     line-height: ${hp(2.2)}px;
// `;

// export const InnerLabelText = styled(BaseText)`
//     font-size: ${props => props.size || hp(1.5)}px;
//     font-family: ${Fonts.PoppinsRegular};
//     color: ${props => (props.color ? props.color : Colors.gray)};
//     line-height: ${hp(2.2)}px;
//     width: ${wp(55)}px;
// `;

/**
 * Theme Constants
 * Common style values used throughout the application
 * Usage: themeStyles.flexOne, themeStyles.commonSpacing, etc.
 */
const themeStyles = {
    flexOne: {
        flex: 1,
    },
    flexGrowOne: {
        flexGrow: 1,
    },
    commonSpacing: wp(5),
};

export default themeStyles;
