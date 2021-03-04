import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

import { AppText } from './text';
import { COLOR } from '../constants/colors';
import { BOLD, RADIUS } from '../constants/commonui';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppSectionTitle from './text/AppSectionTitle';

function AppTabBar({ state, descriptors, navigation, title }) {
  return (
    <SafeAreaView style={{ backgroundColor: COLOR.WHITE }}>
      <AppSectionTitle style={styles.title}>{title}</AppSectionTitle>

      <View style={styles.bar}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              key={route.name}
              onPress={onPress}
              onLongPress={onLongPress}
              style={
                isFocused
                  ? { ...styles.opacity, ...styles.selectedOpacity }
                  : styles.opacity
              }
            >
              <AppText style={isFocused ? styles.selectedText : styles.text}>
                {label}
              </AppText>
            </TouchableOpacity>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingLeft: 30,
    paddingVertical: 20,
  },
  bar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: COLOR.WHITE,
    paddingTop: 10,
    paddingHorizontal: 30,
  },
  opacity: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS,
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginLeft: 10,
  },
  selectedOpacity: {
    backgroundColor: COLOR.PURE_WHITE,
  },
  text: {
    color: COLOR.GRAY,
  },
  selectedText: {
    color: COLOR.BLACK,
    fontWeight: BOLD,
  },
});

export default AppTabBar;
