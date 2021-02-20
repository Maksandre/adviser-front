import React, { useState } from 'react';
import { Provider } from 'react-redux';

import { AppNavigation } from './src/navigation/AppNavigation';
import { LoginNavigation } from './src/navigation/LoginNavigation';
import store from './src/store';

export default function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Provider store={store}>
      {/* {isLoggedIn ? <AppNavigation /> : <LoginNavigation />} */}
      {isLogin ? <LoginNavigation /> : <AppNavigation />}
    </Provider>
  );
}
