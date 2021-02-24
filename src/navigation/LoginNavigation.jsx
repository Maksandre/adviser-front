import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTES } from '../constants/routes';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();

export const LoginNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
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
);
