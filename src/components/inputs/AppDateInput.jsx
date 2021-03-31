import React from 'react';
import { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';

import { COLOR } from '../../constants/colors';
import { RADIUS } from '../../constants/commonui';
import { AppText } from '../text';

const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const AppDateInput = () => {
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const monthElement = useRef(null);
  const yearElement = useRef(null);

  try {
    console.log(date);
    console.log(new Date(date).toISOString());
  } catch (error) {
    console.log('Invalid date');
  }

  const handleMonthChange = (text) => {
    let validText = text.replace(/\D/gi, '');
    if (validText > 12) validText = validText[0];
    setMonth(validText.substring(0, 2));
    setDate(`${year}-${validText}`);
    if (validText.length === 2) {
      yearElement.current.focus();
    }
  };

  const handleYearChange = (text) => {
    const validText = text.replace(/\D/gi, '');
    setYear(validText.substring(0, 4));
    let monthNumber = (months.indexOf(month) + 1).toString();
    if (monthNumber.length === 1) monthNumber = `0${monthNumber}`;
    setDate(`${validText}-${monthNumber}`);
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={{ ...styles.input, ...styles.inputShort }}
        value={month}
        onChangeText={handleMonthChange}
        onBlur={() => {
          if (month.length === 1) {
            handleMonthChange(`0${month}`);
          }
          if (month.length !== 3) setMonth(months[month - 1]);
        }}
        maxLength={2}
        placeholder=". ."
        selectTextOnFocus={true}
        keyboardType="number-pad"
        ref={monthElement}
      />
      <AppText style={styles.divider}>–</AppText>
      <TextInput
        style={{ ...styles.input, ...styles.inputLong }}
        value={year}
        onChangeText={handleYearChange}
        onBlur={() => {
          if (year.length === 1) handleYearChange(`200${year}`);
          else if (year.length === 2 && year < 90)
            handleYearChange(`20${year}`);
          else if (year.length === 2 && year >= 90)
            handleYearChange(`19${year}`);
          else if (year.length === 3) handleYearChange(`2${year}`);
        }}
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
  },
  input: {
    padding: 5,
    marginHorizontal: 3,
    fontSize: 16,
    borderRadius: RADIUS,
    textAlign: 'center',
    backgroundColor: COLOR.PURE_WHITE,
  },
  inputShort: {
    width: 50,
  },
  inputLong: {
    width: 70,
  },
  divider: {
    color: COLOR.GRAY,
  },
});

export default AppDateInput;
