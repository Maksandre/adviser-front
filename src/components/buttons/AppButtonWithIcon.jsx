import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLOR } from '../../constants/colors';
import { BOLD, RADIUS } from '../../constants/commonui';
import { AppText } from '../text';

const AppButtonWithIcon = ({ text, onPress, icon }) => {
  return (
    <TouchableOpacity style={styles.opacity} onPress={onPress}>
      <View style={styles.icon}>{icon}</View>
      <AppText style={styles.text}>{text}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  opacity: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.ORANGE_LITE,
    paddingLeft: 4,
    paddingRight: 10,
    paddingVertical: 5,
    borderRadius: RADIUS,
  },
  text: {
    color: COLOR.ORANGE,
    fontWeight: BOLD,
    opacity: 1,
  },
  icon: {},
});

export default AppButtonWithIcon;
