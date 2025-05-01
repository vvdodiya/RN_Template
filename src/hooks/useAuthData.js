import {useSelector} from 'react-redux';
import {shallowEqual} from 'react-redux';

const useAuthData = () => {
    // Use shallowEqual to perform a shallow comparison for userData
    const isAuthenticated = useSelector(
        state => state.auth.isAuthenticated,
        shallowEqual,
    );
    const authToken = useSelector(state => state.auth.authToken, shallowEqual);
    const userData = useSelector(state => state.auth.userData, shallowEqual);

    return {isAuthenticated, authToken, userData};
};

export default useAuthData;
