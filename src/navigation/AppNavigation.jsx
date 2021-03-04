import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { GoalScreen } from '../screens/GoalScreen';
import { ROUTES } from '../constants/routes';
import CashFlowNavigation from './CashFlowNavigation';
import ALNavigation from './ALNavigation';

const Tab = createBottomTabNavigator();

export const AppNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === ROUTES.ASSETS_AND_LIABILITIES_SECTION)
            iconName = focused ? 'cube' : 'cube-outline';
          else if (route.name === ROUTES.CASH_FLOW_SECTION)
            iconName = focused ? 'cash-usd' : 'cash-usd-outline';
          else if (route.name === ROUTES.GOALS_SECTION) iconName = 'target';

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      initialRouteName={ROUTES.ASSETS_AND_LIABILITIES_SECTION}
    >
      <Tab.Screen
        name={ROUTES.ASSETS_AND_LIABILITIES_SECTION}
        component={ALNavigation}
      ></Tab.Screen>
      <Tab.Screen
        name={ROUTES.CASH_FLOW_SECTION}
        component={CashFlowNavigation}
      ></Tab.Screen>
      <Tab.Screen
        name={ROUTES.GOALS_SECTION}
        component={GoalScreen}
      ></Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
);
