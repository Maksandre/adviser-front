import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AppTabBar from '../components/AppTabBar';
import { ROUTES } from '../constants/routes';
import ProfileScreen from '../screens/ProfileScreen';
import YieldsScreen from '../screens/YieldsScreen';
import InflationScreen from '../screens/InflationScreen';

const Tab = createMaterialTopTabNavigator();

function SettingsNavigation() {
  return (
    <Tab.Navigator tabBar={AppTabBar} tabBarOptions={{ title: 'Account' }}>
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{ tabBarLabel: 'Profile' }}
      />
      <Tab.Screen
        name={ROUTES.YIELDS}
        component={YieldsScreen}
        options={{ tabBarLabel: 'Yields' }}
      />
      <Tab.Screen
        name={ROUTES.INFLATION}
        component={InflationScreen}
        options={{ tabBarLabel: 'Inflation' }}
      />
    </Tab.Navigator>
  );
}

export default SettingsNavigation;
