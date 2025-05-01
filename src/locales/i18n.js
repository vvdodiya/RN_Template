import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {I18nManager} from 'react-native';

// Import translations
import en from './english';
import Constants from '@constants/Constants';

// Initialize i18n
i18n.use(initReactI18next) // Passes i18n instance to react-i18next
    .init({
        fallbackLng: 'en', // Default fallback language
        lng: 'en', // Default language
        resources: {
            en: {translation: en},
        },
        compatibilityJSON: 'v3', // Ensures compatibility with older JSON structures
        interpolation: {
            escapeValue: false, // React already prevents XSS
        },
    });

// 📝 **Set Language with RTL Support**
export const setAppLanguage = async language => {
    try {
        await AsyncStorage.setItem(
            Constants.asyncStorageKeys.keyCurrentAppLanguage,
            language,
        );
        await i18n.changeLanguage(language).then(() => {
            global.currentLanguage = language;
            // I18nManager.forceRTL(language === 'ar'); //ForceRTL
        });
    } catch (error) {
        console.error('Failed to change language:', error);
    }
};

// 📝 **Load Language from Storage**
export const loadAppLanguage = async () => {
    try {
        global.currentLanguage = 'en';
        const storedLanguage = await AsyncStorage.getItem(
            Constants.asyncStorageKeys.keyCurrentAppLanguage,
        );
        if (storedLanguage) {
            global.currentLanguage = storedLanguage;
            await setAppLanguage(storedLanguage);
        }
    } catch (error) {
        console.error('Failed to load language:', error);
    }
};

export default i18n;
