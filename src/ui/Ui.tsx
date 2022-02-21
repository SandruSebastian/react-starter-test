import React from 'react';

import {AppRouter} from '../routes/AppRouter';
import Authenticator from 'one.models/lib/models/Authenticator/Authenticator';
import './Ui.css'
/**
 * Builds the UI component which is the main component of the application
 */
export default function Ui(props: {one: Authenticator}) {
    return (
        <div className="container6">
            <AppRouter one={props.one} />
        </div>
    );
}
