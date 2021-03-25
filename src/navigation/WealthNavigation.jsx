import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AppTabBar from '../components/AppTabBar';
import AssetsScreen from '../screens/AssetsScreen';
import LiabilitiesScreen from '../screens/LiabilitiesScreen';
import WealthSummaryScreen from '../screens/WealthSummaryScreen';
import { ROUTES } from '../constants/routes';

const Tab = createMaterialTopTabNavigator();

function WealthNavigation() {
  return (
    <Tab.Navigator tabBar={AppTabBar} tabBarOptions={{ title: 'Wealth' }}>
      <Tab.Screen
        name={ROUTES.WEALTH_SUMMARY}
        component={WealthSummaryScreen}
        options={{ tabBarLabel: 'Summary' }}
      />
      <Tab.Screen name={ROUTES.ASSETS} component={AssetsScreen} />
      <Tab.Screen name={ROUTES.LIABILITIES} component={LiabilitiesScreen} />
    </Tab.Navigator>
  );
}

export default WealthNavigation;
