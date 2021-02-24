import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR } from '../../constants/colors';

export const AppBaseForm = (props) => {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
