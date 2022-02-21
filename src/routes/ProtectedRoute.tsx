import * as React from 'react';
import {Route, RouteProps} from 'react-router-dom';

export interface IProtectedRouteProps extends RouteProps {
    isAuth: boolean; // is authenticate route
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = props => {
    return props.isAuth ? <Route {...props} children={props.children} /> : null;
};

export default ProtectedRoute;
