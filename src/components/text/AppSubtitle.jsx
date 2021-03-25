import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR } from '../../constants/colors';
import { BOLD } from '../../constants/commonui';
import AppBaseText from './AppBaseText';

export default AppSubtitle = (props) => {
  return (
    <AppBaseText style={{ ...styles.text, ...props.style }}>
      {props.children}
    </AppBaseText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: BOLD,
    color: COLOR.GRAY,
  },
});
