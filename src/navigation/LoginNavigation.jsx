import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { ROUTES } from '../constants/routes';
import SignInScreen from '../screens/SignInScreen';

const Screen = createStackNavigator();

export const LoginNavigation = () => (
  <NavigationContainer>
    <Screen.Navigator>
      <Screen.Screen
        name={ROUTES.SIGN_IN}
        component={SignInScreen}
      ></Screen.Screen>
    </Screen.Navigator>
  </NavigationContainer>
);
