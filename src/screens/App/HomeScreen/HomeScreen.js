import {View} from 'react-native';
import React from 'react';
import Text from '@components/Common/Text';
import {Container} from '@styles/themeStyles';
import {styles} from './styles';

const HomeScreen = () => {
    return (
        <Container style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.headerContainer}>
                    <Text type="title" style={styles.headerTitle}>
                        Welcome to Home Screen
                    </Text>

                    <Text
                        type="subTitle"
                        color="#666"
                        style={styles.headerSubtitle}>
                        This is a subtitle example
                    </Text>
                </View>

                <View style={styles.contentSection}>
                    <Text
                        type="description"
                        style={styles.descriptionContainer}>
                        This is a regular description text with default styling
                    </Text>

                    <Text
                        type="descriptionSmall"
                        color="#888"
                        style={styles.descriptionContainer}>
                        This is a smaller description text
                    </Text>

                    <Text
                        type="button"
                        color="#007AFF"
                        style={styles.buttonContainer}>
                        This looks like a button text
                    </Text>

                    <Text
                        type="label"
                        color="#666"
                        style={styles.labelContainer}>
                        This is a label text
                    </Text>
                </View>
            </View>
        </Container>
    );
};

export default HomeScreen;
