import React from 'react';
import { StyleSheet } from 'react-native';
import { BOLD } from '../../constants/commonui';
import AppBaseText from './AppBaseText';

export default AppSectionTitle = (props) => {
  return (
    <AppBaseText style={{ ...styles.text, ...props.style }}>
      {props.children}
    </AppBaseText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: BOLD,
  },
});
