import * as React from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { ReactElement } from 'react';

export interface IProtectedRouteProps extends RouteProps {
    isAuth: boolean; // is authenticate route
}

export default function ProtectedRoute(props: IProtectedRouteProps): ReactElement | null {
  const { children, isAuth } = props;

  return isAuth ? <Route {...props}>{children}</Route> : null;
}
