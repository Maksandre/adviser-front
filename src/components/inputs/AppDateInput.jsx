import React from 'react';
import { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';

import { COLOR } from '../../constants/colors';
import { RADIUS } from '../../constants/commonui';

const DateInput = () => {
  const [date, setDate] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const dayElement = useRef(null);
  const monthElement = useRef(null);
  const yearElement = useRef(null);

  const handleDayChange = (text) => {
    const validText = text.replace(/\D/gi, '');
    setDay(validText.substring(0, 2));
    setDate(`${month}/${validText}/${year}`);
    if (validText.length === 2) yearElement.current.focus();
  };

  const handleMonthChange = (text) => {
    const validText = text.replace(/\D/gi, '');
    setMonth(validText.substring(0, 2));
    setDate(`${validText}/${day}/${year}`);
    if (validText.length === 2) dayElement.current.focus();
  };

  const handleYearChange = (text) => {
    const validText = text.replace(/\D/gi, '');
    setYear(validText.substring(0, 4));
    setDate(`${month}/${day}/${validText}`);
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={{ ...styles.input, ...styles.inputShort }}
        value={month}
        onChangeText={handleMonthChange}
        maxLength={2}
        placeholder=". ."
        selectTextOnFocus={true}
        keyboardType="number-pad"
        ref={monthElement}
      />
      <Text>/</Text>
      <TextInput
        value={day}
        style={{ ...styles.input, ...styles.inputShort }}
        onChangeText={handleDayChange}
        maxLength={2}
        placeholder=". ."
        selectTextOnFocus={true}
        keyboardType="number-pad"
        ref={dayElement}
      />
      <Text>/</Text>
      <TextInput
        style={{ ...styles.input, ...styles.inputLong }}
        value={year}
        onChangeText={handleYearChange}
        maxLength={4}
        placeholder=". . . ."
        selectTextOnFocus={true}
        keyboardType="number-pad"
        ref={yearElement}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLOR.BLUE_LIGHT,
  },
  input: {
    padding: 5,
    marginHorizontal: 3,
    fontSize: 16,
    borderRadius: RADIUS,
    textAlign: 'center',
  },
  inputShort: {
    width: 35,
  },
  inputLong: {
    width: 70,
  },
});

export default DateInput;
