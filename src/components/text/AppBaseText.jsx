import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLOR } from '../../constants/colors';

export default AppBaseText = (props) => {
  return <Text style={[styles.text, props.style]}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    color: COLOR.BLACK,
  },
});
