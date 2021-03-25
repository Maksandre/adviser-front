import React from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import { AppText } from './text';
import { COLOR } from '../constants/colors';
import { BOLD, RADIUS } from '../constants/commonui';
import AppSectionTitle from './text/AppSectionTitle';

function AppTabBar({ state, descriptors, navigation, title }) {
  return (
    <View style={{ backgroundColor: COLOR.WHITE, paddingBottom: 10 }}>
      <AppSectionTitle style={styles.title}>{title}</AppSectionTitle>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.bar}
      >
        <View style={styles.tabsWrapper}>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 30,
  },
  bar: {
    flexDirection: 'row',
    backgroundColor: COLOR.WHITE,
  },
  tabsWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 20,
  },
  opacity: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RADIUS,
    padding: 10,
    marginRight: 10,
    borderWidth: 2,
    borderColor: COLOR.WHITE,
  },
  selectedOpacity: {
    borderColor: COLOR.ORANGE,
  },
  text: {
    color: COLOR.GRAY,
    fontWeight: BOLD,
  },
  selectedText: {
    color: COLOR.BLACK,
    fontWeight: BOLD,
  },
});

export default AppTabBar;
