import {Alert} from 'react-native';

// showAlert('Are you sure you want to logout?', t('Logout'), t('Ok'));
export function showAlert(
    message,
    // title = '',
    title = '',
    buttonTitle,
) {
    setTimeout(() => {
        Alert.alert(title, message, [{text: buttonTitle}]);
    }, 500);
}

// showAlertWithYes(
//     'Are you sure you want to logout?',
//     t('Logout'),
//     t('Ok'),
//     () => {},
// );
export function showAlertWithYes(message, firstButtonTitle, firstCallback) {
    setTimeout(() => {
        Alert.alert(
            '',
            message,
            [
                {
                    text: firstButtonTitle,
                    onPress: () => {
                        firstCallback();
                    },
                },
            ],
            {cancelable: false},
        );
    }, 500);
}

export function showAlertWithTwoCallback(
    message,
    title = '',
    firstButtonTitle,
    secondButtonTitle,
    firstCallback,
    secondCallback,
) {
    setTimeout(() => {
        Alert.alert(
            title,
            message,
            [
                {
                    text: firstButtonTitle,
                    onPress: () => {
                        firstCallback();
                    },
                },
                {
                    text: secondButtonTitle,
                    onPress: () => {
                        secondCallback();
                    },
                },
            ],
            {cancelable: false},
        );
    }, 500);
}
