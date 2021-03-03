import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { COLOR } from '../../constants/colors';
import { OPACITY } from '../../constants/commonui';
import AppBaseText from '../text/AppBaseText';

export default AppTextButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <AppBaseText style={[styles.text, pressed && styles.pressedText]}>
          {title}
        </AppBaseText>
      )}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: COLOR.BLUE,
  },
  pressedText: {
    opacity: OPACITY,
  },
});
