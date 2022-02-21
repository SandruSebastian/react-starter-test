import React from 'react';
import {Route} from 'react-router-dom';
import {CircularProgress} from '@mui/material';
import {isIOS, isMobile, isSafari} from 'react-device-detect';
import {AuthState} from 'one.models/lib/models/Authenticator/Authenticator';
import {isStandalone} from '../utils/utils';
import HomeScreen from '../ui/homescreen/HomeScreen';

/**
 * App root route
 * @param props
 * @constructor
 */
export function AppRootRouter(props: {
    authenticationState: AuthState | undefined;
}): React.ReactElement {
    const {authenticationState} = props;

    /**
     * Renders the root component based on the auth & on boarding state
     */
    function renderRootComponent(): React.ReactElement | null {
        if (authenticationState === 'logging_in' || authenticationState === 'logging_out') {
            return <CircularProgress className="circular-progress" size={35} />;
        }

        if (
            isIOS &&
            isMobile &&
            isSafari &&
            !isStandalone() &&
            localStorage.getItem('skipAddToHomeScreen') !== 'true'
        ) {
            return <HomeScreen />;
        }

        return null;
    }

    return <Route path="/">{renderRootComponent()}</Route>;
}
