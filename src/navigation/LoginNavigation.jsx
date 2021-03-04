import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { ROUTES } from '../constants/routes';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

export const LoginNavigation = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name={ROUTES.SIGN_UP}
          component={SignUpScreen}
        ></Stack.Screen>
        <Stack.Screen
          name={ROUTES.SIGN_IN}
          component={SignInScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
