import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { CashFlowScreen } from '../screens/CashFlowScreen';
import MainScreen from '../screens/MainScreen';
import { GoalScreen } from '../screens/GoalScreen';
import { ROUTES } from '../constants/routes';
import CashFlowNavigation from './CashFlowNavigation';

const Tab = createBottomTabNavigator();

export const AppNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === ROUTES.ASSETS_AND_LIABILITIES)
            iconName = focused ? 'cube' : 'cube-outline';
          else if (route.name === ROUTES.CASH_FLOW)
            iconName = focused ? 'cash-usd' : 'cash-usd-outline';
          else if (route.name === ROUTES.GOALS) iconName = 'target';

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      initialRouteName={ROUTES.ASSETS_AND_LIABILITIES}
    >
      <Tab.Screen
        name={ROUTES.ASSETS_AND_LIABILITIES}
        component={MainScreen}
      ></Tab.Screen>
      <Tab.Screen
        name={ROUTES.CASH_FLOW}
        component={CashFlowNavigation}
      ></Tab.Screen>
      <Tab.Screen name={ROUTES.GOALS} component={GoalScreen}></Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
);
