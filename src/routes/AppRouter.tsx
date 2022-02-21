import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Authenticator from 'one.models/lib/models/Authenticator/Authenticator';
import AppRootRouter from './AppRootRouter';
import { useAuthenticationState } from '../utils/hooks/auth';
import ProtectedRoute from './ProtectedRoute';
import oneSvg from '../resources/svgs/one.svg';

function DummyComponent(): React.ReactElement {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <img style={{ width: '100px' }} src={oneSvg} alt="one-svg" />
      <h4>ONE Instance is running! 😻</h4>
      <p>
        👉 Learn more about the API from the
        {' '}
        <a
          style={{
            cursor: 'pointer',
            textDecoration: 'underline',
            color: 'black',
          }}
          target="_blank"
          href="https://docs.refinio.one/"
          rel="noreferrer"
        >
          documentation
        </a>
        .
      </p>
    </div>
  );
}

/**
 * App Router
 * @param props
 * @constructor
 */
export default function AppRouter(props: {one: Authenticator}): React.ReactElement {
  const { one } = props;
  const authenticationState = useAuthenticationState(one);

  const isLoggedIn = authenticationState === 'logged_in';

  /**
     * Renders the menu
     */
  function renderMenu() {
    return null;
  }

  /**
     * Renders the footer
     */
  function renderFooter() {
    return null;
  }

  return (
    <BrowserRouter>
      {renderMenu()}
      <AppRootRouter authenticationState={authenticationState} />
      <div className="leute-app-container">
        <ProtectedRoute isAuth={isLoggedIn} path="/">
          <DummyComponent />
        </ProtectedRoute>
      </div>
      {renderFooter()}
    </BrowserRouter>
  );
}
