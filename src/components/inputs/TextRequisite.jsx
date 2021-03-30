import React from 'react';
import { StyleSheet } from 'react-native';

import { COLOR } from '../../constants/colors';
import { BOLD } from '../../constants/commonui';
import AppHiddenInput from './AppHiddenInput';
import AppRequisite from './AppRequisite';

const TextRequisite = ({ name, placeholder, value, onChangeText, measure }) => {
  const Input = () => {
    return (
      <AppHiddenInput
        value={value}
        style={styles.input}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType="numeric"
        textAlign="right"
      />
    );
  };

  return <AppRequisite name={name} measure={measure} Input={Input} />;
};

const styles = StyleSheet.create({
  input: {
    flex: 2,
    fontWeight: BOLD,
    color: COLOR.ORANGE,
    backgroundColor: COLOR.ORANGE_LITE,
  },
});

export default TextRequisite;
