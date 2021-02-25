import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { COLOR } from '../constants/colors';

export default AppView = (props) => {
  return (
    <ScrollView
      contentContainerStyle={{ ...styles.container, ...props.style }}
      keyboardShouldPersistTaps="handled"
    >
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: '15%',
    backgroundColor: COLOR.WHITE,
  },
});
