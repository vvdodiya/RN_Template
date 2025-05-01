import {StyleSheet} from 'react-native';
import {Colors} from '@constants';

export const styles = StyleSheet.create({
    // Container styles
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    contentContainer: {
        padding: 20,
    },

    // Header styles
    headerContainer: {
        marginBottom: 20,
    },
    headerTitle: {
        marginBottom: 20,
    },
    headerSubtitle: {
        marginBottom: 15,
    },

    // Content styles
    contentSection: {
        marginBottom: 20,
    },
    descriptionContainer: {
        marginBottom: 10,
    },
    buttonContainer: {
        marginBottom: 20,
    },
    labelContainer: {
        marginBottom: 10,
    },
});
