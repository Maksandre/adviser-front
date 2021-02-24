import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { COLOR } from '../../constants/colors';
import AppBaseText from '../text/AppBaseText';

export default AppTextButton = ({ title, onPress }) => {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <AppBaseText style={pressed ? styles.pressedText : styles.text}>
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
    fontSize: 16,
    color: COLOR.BLUE,
    opacity: 0.7,
  },
});
