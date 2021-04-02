import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLOR } from '../../constants/colors';
import { BOLD, RADIUS } from '../../constants/commonui';
import AppDateInput from './AppDateInput';
import AppRequisite from './AppRequisite';

const DateRequisite = ({ name, placeholder, value, onChangeText, measure }) => {
  const Input = () => {
    return <AppDateInput onChangeText={onChangeText} />;
  };

  return <AppRequisite name={name} measure={measure} Input={Input} />;
};

const styles = StyleSheet.create({
  input: {
    flex: 2,
    fontSize: 16,
    fontWeight: BOLD,
    color: COLOR.ORANGE,
    backgroundColor: COLOR.ORANGE_LITE,
    borderRadius: RADIUS,
    paddingVertical: 10,
    paddingRight: 10,
    borderRadius: RADIUS,
    textAlign: 'right',
  },
});
export default DateRequisite;
