import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ExpensesScreen from '../screens/ExpensesScreen';
import IncomesScreen from '../screens/IncomesScreen';
import AppTabBar from '../components/AppTabBar';
import CashFlowSummaryScreen from '../screens/CashFlowSummaryScreen';
import { ROUTES } from '../constants/routes';

const Tab = createMaterialTopTabNavigator();

function CashFlowNavigation() {
  return (
    <Tab.Navigator tabBar={AppTabBar} tabBarOptions={{ title: 'Cash Flow' }}>
      <Tab.Screen
        name={ROUTES.CASH_FLOW_SUMMARY}
        component={CashFlowSummaryScreen}
        options={{ tabBarLabel: 'Summary' }}
      />
      <Tab.Screen name={ROUTES.EXPENSES} component={ExpensesScreen} />
      <Tab.Screen name={ROUTES.INCOMES} component={IncomesScreen} />
    </Tab.Navigator>
  );
}

export default CashFlowNavigation;
