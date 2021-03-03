import React from 'react';
import { StyleSheet } from 'react-native';
import AppTitle from './AppTitle';

export default AppTitleBold = (props) => {
  return (
    <AppTitle style={{ ...styles.text, ...props.style }}>
      {props.children}
    </AppTitle>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    paddingTop: 10,
    paddingBottom: 20,
  },
});
