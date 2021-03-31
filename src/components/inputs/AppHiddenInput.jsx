import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLOR } from '../../constants/colors';
import { RADIUS } from '../../constants/commonui';
import { SHADOW } from '../../constants/styles';

export const AppHiddenInput = ({
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  style,
  textAlign,
  autoFocus,
  keyboardType,
  multiline,
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <TextInput
      textAlign={textAlign}
      value={value}
      style={
        focused
          ? { ...styles.input, ...styles.inputActive, ...style }
          : { ...styles.input, ...style }
      }
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      autoCorrect={false}
      autoFocus={autoFocus}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      multiline={multiline}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: RADIUS,
    color: COLOR.BLACK,
    fontSize: 16,
    paddingVertical: 10,
    paddingRight: 10,
    borderRadius: RADIUS,
  },
  inputActive: {
    backgroundColor: COLOR.PURE_WHITE,
    ...SHADOW,
  },
});

export default AppHiddenInput;
