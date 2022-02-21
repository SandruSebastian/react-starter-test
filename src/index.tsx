import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { SingleUserNoAuth } from 'one.models/lib/models/Authenticator';
import Ui from './ui/Ui';
import { generateDynamicManifest } from './utils/utils';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4473C5',
    },
  },
});

/**
 * Renders the main application.
 *
 * @param commServerUrl
 */
// eslint-disable-next-line no-unused-vars
function renderApplicationUI(commServerUrl: string): void {
  // Instantiate the models
  const one = new SingleUserNoAuth({});
  one.loginOrRegister().catch(console.error);
  ReactDOM.render(
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Ui one={one} />
      </ThemeProvider>
    </StyledEngineProvider>,
    document.getElementById('root'),
  );
}

/**
 * Starts the whole application.
 */
function startApplication(): void {
  const commServerUrl = 'wss://comm9.dev.refinio.one';

  renderApplicationUI(commServerUrl);
}

generateDynamicManifest();

// Just keep this unhandled, so when initialization fails we just get the unhandled rejection
// message that displays nice errors (at least for developers!)
startApplication();
