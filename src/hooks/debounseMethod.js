// Import necessary hooks from React and debounce function from lodash
const {useEffect, useRef, useMemo} = require('react');
const {debounce} = require('lodash');

// Custom hook `useDebounce` to create a debounced version of a callback function
export const useDebounce = callback => {
    const ref = useRef(); // Create a ref to store the latest version of the callback function

    // Update the ref with the current callback whenever it changes
    useEffect(() => {
        ref.current = callback;
    }, [callback]);

    // Memoize the debounced function to avoid recreating it on every render
    const debouncedCallback = useMemo(() => {
        // Function that calls the current callback stored in the ref

        const func = () => {
            ref.current?.();
        };

        // Return a debounced version of the `func` using lodash's debounce
        return debounce(func, 250);
    }, []);

    // Return the debounced callback function to be used elsewhere
    return debouncedCallback;
};
