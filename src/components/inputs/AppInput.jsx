import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { COLOR } from '../../constants/colors';

export default AppInput = ({
  style,
  onChangeText,
  placeholder,
  autoCompleteType,
  ...rest
}) => {
  const [extendedStyles, setExtendedStyles] = useState({});

  const onFocus = () => {
    setExtendedStyles(styles.focusedInput);
  };

  const onBlur = () => {
    setExtendedStyles({});
  };

  return (
    <TextInput
      style={{ ...styles.input, ...extendedStyles, ...style }}
      onChangeText={onChangeText}
      placeholder={placeholder}
      autoCompleteType={autoCompleteType}
      autoCapitalize="none"
      autoCorrect={false}
      secureTextEntry={rest.secureTextEntry}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingVertical: 25,
    borderBottomColor: COLOR.GRAY,
    borderBottomWidth: 1,
  },
  focusedInput: {
    borderBottomColor: COLOR.BLACK,
  },
});
