import React from 'react';
import { useEffect } from 'react';
import { Provider, useSelector } from 'react-redux';

import { AppNavigation } from './src/navigation/AppNavigation';
import { LoginNavigation } from './src/navigation/LoginNavigation';
import store from './src/store';

export default function AppWrapper() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

const App = () => {
  const user = useSelector((store) => store.user);
  console.log(user);

  return !user ? <AppNavigation /> : <LoginNavigation />; // TODO reverse for testing
};
