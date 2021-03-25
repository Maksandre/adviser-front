import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ROUTES } from '../constants/routes';
import CashFlowNavigation from './CashFlowNavigation';
import WealthNavigation from './WealthNavigation';
import { Platform, StyleSheet } from 'react-native';
import GoalScreen from '../screens/GoalScreen';
import SettingsNavigation from './SettingsNavigation';

const Tab = createBottomTabNavigator();

export const AppNavigation = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === ROUTES.WEALTH_SECTION)
            iconName = focused ? 'cube' : 'cube-outline';
          else if (route.name === ROUTES.CASH_FLOW_SECTION)
            iconName = focused ? 'cash-usd' : 'cash-usd-outline';
          else if (route.name === ROUTES.SETTINGS_SECTION)
            iconName = focused ? 'account-circle' : 'account-circle-outline';
          else if (route.name === ROUTES.GOALS_SECTION) iconName = 'target';

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        style: Platform.OS === 'android' && styles.androidBar,
      }}
      initialRouteName={ROUTES.WEALTH_SECTION}
    >
      <Tab.Screen
        name={ROUTES.WEALTH_SECTION}
        component={WealthNavigation}
      ></Tab.Screen>
      <Tab.Screen
        name={ROUTES.CASH_FLOW_SECTION}
        component={CashFlowNavigation}
      ></Tab.Screen>
      <Tab.Screen
        name={ROUTES.GOALS_SECTION}
        component={GoalScreen}
      ></Tab.Screen>
      <Tab.Screen
        name={ROUTES.SETTINGS_SECTION}
        component={SettingsNavigation}
      ></Tab.Screen>
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  androidBar: {
    minHeight: 60,
    paddingBottom: 10,
  },
});
