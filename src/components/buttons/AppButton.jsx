import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { COLOR } from '../../constants/colors';
import { OPACITY, RADIUS } from '../../constants/commonui';
import { AppText } from '../text';

export default AppButton = (props) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.container,
        pressed && styles.containerPressed,
        props.style,
      ]}
      onPress={props.onPress}
    >
      <AppText style={styles.text}>{props.title}</AppText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.BLUE,
    paddingVertical: 25,
    borderRadius: RADIUS,
  },
  containerPressed: {
    opacity: OPACITY,
  },
  text: {
    textAlign: 'center',
    color: COLOR.WHITE,
  },
});
