import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR } from '../../constants/colors';
import { BOLD } from '../../constants/commonui';
import { AppText } from '../text';
import AppHiddenInput from './AppHiddenInput';

const AppRequisite = ({ name, placeholder, value, onChangeText, measure }) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.name}>{name}</AppText>
      <View style={styles.value}>
        <AppHiddenInput
          value={value}
          style={styles.input}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType="numeric"
          textAlign="right"
        />
        {measure && <AppText style={styles.measure}>{measure}</AppText>}
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
  input: {
    flex: 2,
    fontWeight: BOLD,
    color: COLOR.ORANGE,
    backgroundColor: COLOR.ORANGE_LITE,
  },
  measure: {
    fontSize: 20,
    flex: 3,
  },
});

export default AppRequisite;
