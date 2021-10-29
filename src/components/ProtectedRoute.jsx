import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export default function ProtectedRoute({ component: Component, ...rest }) {
  const { user } = useAuth();

  return (
    <Route
      {...rest}
      render={props => (user ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
}
