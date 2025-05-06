import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {ActivityIndicator, Image} from 'react-native';
import FastImage from '@d11/react-native-fast-image';
import {Colors, Images} from '@constants/index';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

/**
 * AsyncImage Component
 *
 * A reusable image component that handles loading states, errors, and placeholders.
 * Built on top of FastImage for better performance and caching.
 *
 * @example
 * // Basic usage with URL
 * <AsyncImage
 *   source={{ uri: 'https://example.com/image.jpg' }}
 *   width={200}
 *   height={200}
 * />
 *
 * @example
 * // With custom styling
 * <AsyncImage
 *   source={{ uri: 'https://example.com/image.jpg' }}
 *   width={200}
 *   height={200}
 *   style={{ borderRadius: 10 }}
 *   imageStyle={{ opacity: 0.8 }}
 * />
 *
 * @example
 * // With loading and error callbacks
 * <AsyncImage
 *   source={{ uri: 'https://example.com/image.jpg' }}
 *   width={200}
 *   height={200}
 *   onLoadStart={() => console.log('Loading started')}
 *   onLoadEnd={() => console.log('Loading finished')}
 *   onError={() => console.log('Error loading image')}
 * />
 *
 * @param {Object} props
 * @param {Object|string|number} props.source - Image source (URL, require, or number)
 * @param {Object|Array} [props.style] - Style for the container
 * @param {Object|Array} [props.imageStyle] - Style for the image
 * @param {number} props.width - Width of the image container
 * @param {number} props.height - Height of the image container
 * @param {string} [props.resizeMode='cover'] - Resize mode for the image
 * @param {string} [props.placeholder='Image not available'] - Placeholder text
 * @param {Function} [props.onLoadStart] - Callback when image starts loading
 * @param {Function} [props.onLoadEnd] - Callback when image finishes loading
 * @param {Function} [props.onError] - Callback when image fails to load
 *
 * @returns {React.Component} AsyncImage component
 */

const Container = styled.View`
    width: ${props => props.width || wp(100)}px;
    height: ${props => props.height || hp(20)}px;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.color};
    overflow: hidden;
`;

const StyledFastImage = styled(FastImage)`
    width: 100%;
    height: 100%;
`;

const LoadingContainer = styled.View`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    align-items: center;
`;

const AsyncImage = ({
    source,
    style,
    imageStyle,
    width,
    height,
    resizeMode = FastImage.resizeMode.cover,

    onLoadStart,
    onLoadEnd,
    onError,
    ...props
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [imageSource, setImageSource] = useState(null);

    useEffect(() => {
        if (source) {
            setImageSource(source);
            setIsLoading(true);
            setHasError(false);
        }
    }, [source]);

    const handleLoadStart = () => {
        setIsLoading(true);
        setHasError(false);
        onLoadStart?.();
    };

    const handleLoadEnd = () => {
        setIsLoading(false);
        onLoadEnd?.();
    };

    const handleError = () => {
        setIsLoading(false);
        setHasError(true);
        onError?.();
    };

    const renderPlaceholder = () => (
        <Container style={style}>
            <Image
                source={Images.logo}
                resizeMode={resizeMode}
                style={[{width: '100%', height: '100%'}, imageStyle]}
                {...props}
            />
        </Container>
    );

    if (!imageSource || hasError) {
        return renderPlaceholder();
    }
    if (typeof imageSource === 'number') {
        console.log('Image source is a number');
        return (
            <Container width={width} height={height} style={style}>
                <Image
                    source={imageSource}
                    resizeMode={resizeMode}
                    style={[{width: '100%', height: '100%'}, imageStyle]}
                    {...props}
                />
            </Container>
        );
    }
    return (
        <Container
            width={width}
            height={height}
            style={style}
            color={Colors.gray}>
            <StyledFastImage
                source={imageSource}
                resizeMode={resizeMode}
                onLoadStart={handleLoadStart}
                onLoadEnd={handleLoadEnd}
                onError={handleError}
                fallback={true}
                style={imageStyle}
                {...props}
            />
            {isLoading && (
                <LoadingContainer>
                    <ActivityIndicator size="large" color={Colors.primary} />
                </LoadingContainer>
            )}
        </Container>
    );
};

AsyncImage.propTypes = {
    source: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.number,
    ]),
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    imageStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    width: PropTypes.number,
    height: PropTypes.number,
    resizeMode: PropTypes.any,
    placeholder: PropTypes.string,
    onLoadStart: PropTypes.func,
    onLoadEnd: PropTypes.func,
    onError: PropTypes.func,
};

export default AsyncImage;
