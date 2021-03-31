import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import { COLOR } from '../../constants/colors';
import { BOLD, RADIUS } from '../../constants/commonui';
import AppDateInput from './AppDateInput';
import AppRequisite from './AppRequisite';

const DateRequisite = ({ name, placeholder, value, onChangeText, measure }) => {
  const date = new Date(value).toLocaleDateString();
  console.log('Initial date: ', value);
  console.log('Parsed date: ', date);

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
