import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ExpensesScreen from '../screens/ExpensesScreen';
import IncomesScreen from '../screens/IncomesScreen';
import AppTabBar from '../components/AppTabBar';

const Tab = createMaterialTopTabNavigator();

function CashFlowNavigation() {
  return (
    <Tab.Navigator tabBar={AppTabBar} tabBarOptions={{ title: 'Cash Flow' }}>
      <Tab.Screen name="Expenses" component={ExpensesScreen} />
      <Tab.Screen name="Incomes" component={IncomesScreen} />
    </Tab.Navigator>
  );
}

export default CashFlowNavigation;
