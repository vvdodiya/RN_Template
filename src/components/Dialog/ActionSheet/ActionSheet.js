import React, {useCallback, useRef, useState} from 'react';
import {
    TouchableWithoutFeedback,
    TouchableOpacity,
    View,
    Animated,
    StyleSheet,
    Dimensions,
    Modal,
    Platform,
} from 'react-native';
import styled from 'styled-components/native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Colors from '@constants/Color';

import {H6, TextM} from '@styles/themeStyles';

const {height: SCREEN_HEIGHT} = Dimensions.get('window');

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: ${Colors.blackOpacity.black40};
    justify-content: flex-end;
`;

const ActionSheetContainer = styled(Animated.View)`
    background-color: ${Colors.white};
    border-radius: ${wp(3)}px;
    margin: 0 ${wp(2)}px;
    ${Platform.OS === 'android' ? 'elevation: 8;' : ''}
    shadow-color: #000;
    shadow-offset: 0px ${wp(2)}px;
    shadow-opacity: 0.15;
    shadow-radius: 8px;
`;

const OptionContainer = styled.View`
    padding: 0 0;
`;

const OptionTitle = styled(TextM)`
    text-align: center;
    color: ${Colors.gray};
`;
const OptionItem = styled(H6)`
    text-align: center;
    color: ${props => (props.isDestructive ? Colors.iosRed : Colors.iosBlue)};
`;
const OptionButton = styled(TouchableOpacity)`
    background-color: ${Colors.white};
    align-items: center;
    justify-content: center;
    min-height: ${hp(6)}px;
    border-bottom-width: ${StyleSheet.hairlineWidth}px;
    border-bottom-color: #e0e0e0;
`;

const CancelGap = styled.View`
    height: ${hp(1)}px;
`;

const CancelButton = styled(TouchableOpacity)`
    background-color: ${Colors.white};
    align-items: center;
    justify-content: center;
    min-height: ${hp(6)}px;
    border-radius: ${wp(3)}px;
    margin: 0 ${wp(2)}px ${hp(1)}px ${wp(2)}px;
    ${Platform.OS === 'android' ? 'elevation: 8;' : ''}
    shadow-color: #000;
    shadow-offset: 0px ${wp(2)}px;
    shadow-opacity: 0.15;
    shadow-radius: 8px;
`;

const styles = StyleSheet.create({
    handle: {
        width: wp(10),
        height: hp(0.5),
        backgroundColor: '#ccc',
        borderRadius: wp(1),
        alignSelf: 'center',
        marginTop: hp(1),
        marginBottom: hp(1),
        opacity: 0.5,
    },
});

const ActionSheetContent = React.memo(
    ({
        options,
        title,
        cancelText,
        destructiveIndex,
        onOptionPress,
        onClose,
        translateY,
    }) => {
        return (
            <TouchableWithoutFeedback onPress={onClose}>
                <Container>
                    <Animated.View
                        style={{
                            transform: [{translateY}],
                        }}>
                        <ActionSheetContainer>
                            <View style={styles.handle} />
                            {title && <OptionTitle>{title}</OptionTitle>}
                            <OptionContainer>
                                {options.map((option, index) => {
                                    const isLast = index === options.length - 1;
                                    const borderRadiusStyle =
                                        Platform.OS === 'ios' && isLast
                                            ? {
                                                  borderBottomLeftRadius: wp(3),
                                                  borderBottomRightRadius:
                                                      wp(3),
                                              }
                                            : {};
                                    const borderBottomWidth = isLast
                                        ? 0
                                        : StyleSheet.hairlineWidth;
                                    return (
                                        <OptionButton
                                            key={option.key}
                                            onPress={() =>
                                                onOptionPress(option.key)
                                            }
                                            style={{
                                                borderBottomWidth,
                                                ...borderRadiusStyle,
                                            }}>
                                            <OptionItem
                                                isDestructive={
                                                    index === destructiveIndex
                                                }>
                                                {option.title}
                                            </OptionItem>
                                        </OptionButton>
                                    );
                                })}
                            </OptionContainer>
                        </ActionSheetContainer>
                        <CancelGap />
                        <CancelButton onPress={onClose}>
                            <OptionItem isDestructive={true}>
                                {cancelText}
                            </OptionItem>
                        </CancelButton>
                    </Animated.View>
                </Container>
            </TouchableWithoutFeedback>
        );
    },
);

export const useActionSheet = () => {
    const [visible, setVisible] = useState(false);
    const [config, setConfig] = useState(null);
    const translateY = useRef(new Animated.Value(SCREEN_HEIGHT)).current;

    const showActionSheet = useCallback(
        ({
            options = [],
            title,
            cancelText = 'Cancel',
            destructiveIndex = -1,
            onOptionSelect,
        }) => {
            setConfig({
                options,
                title,
                cancelText,
                destructiveIndex,
                onOptionSelect,
            });
            setVisible(true);
            translateY.setValue(SCREEN_HEIGHT);
            Animated.timing(translateY, {
                toValue: 0,
                useNativeDriver: true,
                duration: 250,
                easing: undefined,
            }).start();
        },
        [translateY],
    );

    const hideActionSheet = useCallback(() => {
        Animated.timing(translateY, {
            toValue: SCREEN_HEIGHT,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {
            setVisible(false);
            setConfig(null);
        });
    }, [translateY]);

    const handleOptionPress = useCallback(
        key => {
            if (config?.onOptionSelect) {
                config.onOptionSelect(key);
            }
            hideActionSheet();
        },
        [config, hideActionSheet],
    );

    return {
        showActionSheet,
        hideActionSheet,
        modalContent: visible && config && (
            <Modal
                visible={visible}
                transparent
                animationType="none"
                onRequestClose={hideActionSheet}>
                <ActionSheetContent
                    options={config.options}
                    title={config.title}
                    cancelText={config.cancelText}
                    destructiveIndex={config.destructiveIndex}
                    onOptionPress={handleOptionPress}
                    onClose={hideActionSheet}
                    translateY={translateY}
                />
            </Modal>
        ),
    };
};
