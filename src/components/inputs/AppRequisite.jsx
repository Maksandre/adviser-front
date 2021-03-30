import React from 'react';
import { StyleSheet, View } from 'react-native';

import { BOLD } from '../../constants/commonui';
import { AppText } from '../text';

const AppRequisite = ({ name, measure, Input }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.name}>{name}</AppText>
      <View style={styles.value}>
        {Input()}
        <AppText style={styles.measure}>{measure}</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  name: {
    flex: 2,
    fontSize: 20,
    fontWeight: BOLD,
  },
  value: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 4,
  },
  measure: {
    fontSize: 20,
    flex: 1,
  },
});

export default AppRequisite;
