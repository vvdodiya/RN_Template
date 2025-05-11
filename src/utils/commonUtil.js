import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const REFERENCE_SCREEN_WIDTH = 414;
export const getResponsiveFontSize = size => {
    return wp((size / REFERENCE_SCREEN_WIDTH) * 100);
};
