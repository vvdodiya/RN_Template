// Import necessary functions and components from '@react-navigation/native' for navigation management
import {
    createNavigationContainerRef, // Function to create a ref to control navigation
    StackActions, // StackActions provides methods to interact with the stack navigator (push, replace, etc.)
} from '@react-navigation/native';

// Create a navigation reference that allows you to control the navigation state programmatically
export const navigationRef = createNavigationContainerRef();

// Function to go back to the previous screen in the navigation stack
export function goBack() {
    return navigationRef?.goBack();
}

// Function to navigate to a specific screen, passing optional parameters
export function navigate(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(name, params);
    }
}

// Function to push a new screen onto the navigation stack
function push(name, params) {
    if (navigationRef.isReady()) {
        navigationRef.push(name, params);
    }
}

// Function to replace the current screen in the stack with a new one
function replaceStack(name, params = {}) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.replace(name, params));
    }
}

// Function to get the current route name from the navigation state
const getRouteName = () => {
    return navigationRef.getCurrentRoute()?.name ?? '';
};

// Define a NavigationService object to centralize navigation-related methods

const NavigationService = {
    navigationRef,
    navigate,
    push,
    goBack,
    getRouteName,
    replaceStack,
};

export default NavigationService;
