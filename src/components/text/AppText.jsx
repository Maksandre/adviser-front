import React from 'react';
import { StyleSheet } from 'react-native';
import AppBaseText from './AppBaseText';

export default AppText = (props) => {
  return (
    <AppBaseText style={{ ...styles.text, ...props.style }}>
      {props.children}
    </AppBaseText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
});
