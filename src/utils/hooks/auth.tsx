import Authenticator, { AuthState } from 'one.models/lib/models/Authenticator/Authenticator';
import React from 'react';

/**
 * Provides the current authentication state from the SingleUserNoAuth
 *
 * @param one - The one instance model
 * @returns the current authentication state
 */
export function useAuthenticationState(one: Authenticator): AuthState | undefined {
  const [authenticationState, setAuthenticationState] = React.useState<AuthState>();

  React.useEffect(() => {
    function fetchCurrentAuthenticationState(): void {
      setAuthenticationState(one.authState.currentState);
    }

    const disconnectOnAuthStateChanged = one.authState.onEnterState(
      fetchCurrentAuthenticationState,
    );
    fetchCurrentAuthenticationState();

    return () => {
      disconnectOnAuthStateChanged();
    };
  }, [one]);

  return authenticationState;
}

export default { useAuthenticationState };
