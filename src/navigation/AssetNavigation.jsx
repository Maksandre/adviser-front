import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import AppTabBar from '../components/AppTabBar';
import AssetsScreen from '../screens/AssetsScreen';
import LiabilitiesScreen from '../screens/LiabilitiesScreen';

const Tab = createMaterialTopTabNavigator();

function AssetsNavigation() {
  return (
    <Tab.Navigator
      tabBar={AppTabBar}
      tabBarOptions={{ title: 'Assets and Liabilities' }}
    >
      <Tab.Screen name="Assets" component={AssetsScreen} />
      <Tab.Screen name="Liabilities" component={LiabilitiesScreen} />
    </Tab.Navigator>
  );
}

export default AssetsNavigation;
