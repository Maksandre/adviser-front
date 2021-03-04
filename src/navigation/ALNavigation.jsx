import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AppTabBar from '../components/AppTabBar';
import AssetsScreen from '../screens/AssetsScreen';
import LiabilitiesScreen from '../screens/LiabilitiesScreen';
import ALSummaryScreen from '../screens/ALSummaryScreen';
import { ROUTES } from '../constants/routes';

const Tab = createMaterialTopTabNavigator();

function ALNavigation() {
  return (
    <Tab.Navigator
      tabBar={AppTabBar}
      tabBarOptions={{ title: 'Assets and Liabilities' }}
    >
      <Tab.Screen
        name={ROUTES.ASSETS_AND_LIABILITIES_SUMMARY}
        component={ALSummaryScreen}
        options={{ tabBarLabel: 'Summary' }}
      />
      <Tab.Screen name={ROUTES.ASSETS} component={AssetsScreen} />
      <Tab.Screen name={ROUTES.LIABILITIES} component={LiabilitiesScreen} />
    </Tab.Navigator>
  );
}

export default ALNavigation;
