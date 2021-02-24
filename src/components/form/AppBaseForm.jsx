import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLOR } from '../../constants/colors';

export const AppBaseForm = (props) => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 5,
    // backgroundColor: '#a3a3a3',
  },
});
