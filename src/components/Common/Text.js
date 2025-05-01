/**
 * Common Text Component
 * A reusable text component that supports all text styles defined in themeStyles
 *
 * Props:
 * @param {string} type - The type of text style to use (h1-h6, textXXL-textXXS, button, input, label)
 * @param {string} color - Text color
 * @param {number} size - Custom font size (overrides default size for the type)
 * @param {string} align - Text alignment ('left', 'center', 'right')
 * @param {number} mt - Margin top
 * @param {number} mb - Margin bottom
 * @param {number} ml - Margin left
 * @param {number} mr - Margin right
 * @param {string} fontFamily - Custom font family
 * @param {number} lh - Line height (for description text)
 */
import React from 'react';
import {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    TextXXL,
    TextXL,
    TextL,
    TextM,
    TextS,
    TextXS,
    TextXXS,
    ButtonText,
    InputText,
    LabelText,
    InnerLabelText,
} from '@styles/themeStyles';

const Text = ({
    type = 'textM',
    children,
    color,
    size,
    align,
    mt,
    mb,
    ml,
    mr,
    fontFamily,
    lh,
    ...props
}) => {
    // Common props for all text types
    const commonProps = {
        color,
        size,
        align,
        mt,
        mb,
        ml,
        mr,
        fontFamily,
        lh,
        ...props,
    };

    // Map text types to their corresponding components
    const textComponents = {
        // Heading styles
        h1: H1,
        h2: H2,
        h3: H3,
        h4: H4,
        h5: H5,
        h6: H6,

        // Text size styles
        textXXL: TextXXL,
        textXL: TextXL,
        textL: TextL,
        textM: TextM,
        textS: TextS,
        textXS: TextXS,
        textXXS: TextXXS,

        // Special text styles
        button: ButtonText,
        input: InputText,
        label: LabelText,
        innerLabel: InnerLabelText,
    };

    // Get the appropriate text component based on type
    const TextComponent = textComponents[type.toLowerCase()] || TextM;

    return <TextComponent {...commonProps}>{children}</TextComponent>;
};

export default Text;

/**
 * Usage Examples:
 *
 * 1. Basic Usage:
 * ```jsx
 * <Text type="h1">Main Title</Text>
 * <Text type="textM">Regular text content</Text>
 * <Text type="button">Click Me</Text>
 * ```
 *
 * 2. Headings:
 * ```jsx
 * <Text type="h1">Page Title</Text>
 * <Text type="h2">Section Title</Text>
 * <Text type="h3">Subsection Title</Text>
 * <Text type="h4">Card Title</Text>
 * <Text type="h5">Small Title</Text>
 * <Text type="h6">Tiny Title</Text>
 * ```
 *
 * 3. Text Sizes:
 * ```jsx
 * <Text type="textXXL">Extra Extra Large Text</Text>
 * <Text type="textXL">Extra Large Text</Text>
 * <Text type="textL">Large Text</Text>
 * <Text type="textM">Medium Text</Text>
 * <Text type="textS">Small Text</Text>
 * <Text type="textXS">Extra Small Text</Text>
 * <Text type="textXXS">Extra Extra Small Text</Text>
 * ```
 *
 * 4. Special Text Types:
 * ```jsx
 * <Text type="button">Submit</Text>
 * <Text type="input">Enter your name</Text>
 * <Text type="label">Username</Text>
 * <Text type="innerLabel">Required</Text>
 * ```
 *
 * 5. With Custom Styling:
 * ```jsx
 * <Text
 *     type="h1"
 *     color="red"
 *     size={24}
 *     align="center"
 *     mt={10}
 *     mb={5}
 * >
 *     Custom Styled Title
 * </Text>
 *
 * <Text
 *     type="textM"
 *     color="#666666"
 *     align="right"
 *     lh={20}
 * >
 *     Custom styled paragraph with line height
 * </Text>
 * ```
 *
 * 6. With Margins:
 * ```jsx
 * <Text
 *     type="textM"
 *     mt={10}  // margin top
 *     mb={5}   // margin bottom
 *     ml={15}  // margin left
 *     mr={15}  // margin right
 * >
 *     Text with custom margins
 * </Text>
 * ```
 *
 * 7. With Custom Font:
 * ```jsx
 * <Text
 *     type="h1"
 *     fontFamily="CustomFont-Bold"
 * >
 *     Custom Font Title
 * </Text>
 * ```
 */
