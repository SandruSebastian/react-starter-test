import React from 'react';

import Authenticator from 'one.models/lib/models/Authenticator/Authenticator';
import AppRouter from '../routes/AppRouter';
import './Ui.css';
/**
 * Builds the UI component which is the main component of the application
 */
export default function Ui(props: {one: Authenticator}) {
  const { one } = props;

  return (
    <div className="container6">
      <AppRouter one={one} />
    </div>
  );
}
