import React, { useState } from 'react';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';

import RootNavigation from './src/navigation';
import store from './src/store';
import { bootstrap } from './src/bootstrap';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={bootstrap}
        onFinish={() => setIsReady(true)}
        onError={(e) => console.error(e)}
      />
    );
  }

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}
