import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLOR } from '../../constants/colors';
import { RADIUS } from '../../constants/commonui';
import { SHADOW } from '../../constants/styles';

const AppHiddenInput = ({
  value,
  onChangeText,
  onBlur,
  onFocus,
  placeholder,
  placeholderTextColor,
  style,
  textAlign,
  autoFocus,
  keyboardType,
  multiline,
  selectTextOnFocus,
  disabled,
}) => {
  const [focused, setFocused] = useState(false);

  const handleBlur = () => {
    if (onBlur) onBlur();
    setFocused(false);
  };

  const handleFocus = () => {
    if (onFocus) onFocus();
    setFocused(true);
  };

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
      onFocus={handleFocus}
      onBlur={handleBlur}
      multiline={multiline}
      selectTextOnFocus={selectTextOnFocus}
      editable={!disabled}
    />
  );
};

const styles = StyleSheet.create({
  input: {
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
