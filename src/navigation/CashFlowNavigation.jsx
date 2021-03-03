import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import ExpensesScreen from '../screens/ExpensesScreen';
import IncomesScreen from '../screens/IncomesScreen';

const Tab = createMaterialTopTabNavigator();

function CashFlowNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Expenses" component={ExpensesScreen} />
      <Tab.Screen name="Incomes" component={IncomesScreen} />
    </Tab.Navigator>
  );
}

export default CashFlowNavigation;
