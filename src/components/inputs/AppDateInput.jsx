import React from 'react';
import { StyleSheet, View } from 'react-native';

import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react/cjs/react.development';

import { COLOR } from '../../constants/colors';
import { RADIUS } from '../../constants/commonui';
import { AppText } from '../text';
import AppPicker from './AppPicker';

const months = [
  '. . .',
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const AppDateInput = ({ onChangeText }) => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleMonthChange = (text) => {
    setMonth(text);
    const digit = months.indexOf(text);
    const twoDigitMonth = digit < 10 ? `0${digit}` : `${digit}`;
    onChangeText(`${year}-${twoDigitMonth}`);
  };

  const handleYearChange = (text) => {
    const validText = text.replace(/\D/gi, '');
    setYear(validText.substring(0, 4));
    const digitMonth = months.indexOf(month);
    const twoDigitMonth = digitMonth < 10 ? `0${digitMonth}` : `${digitMonth}`;
    onChangeText(`${validText}-${twoDigitMonth}`);
  };

  return (
    <View style={styles.wrapper}>
      <View style={{ marginRight: 3 }}>
        <AppPicker
          value={month}
          elements={months}
          onChange={(text) => setMonth(text)}
          height={40}
          pickerWidth={100}
          fontSize={16}
          textColor={COLOR.BLACK}
          markColor={COLOR.PURE_WHITE}
          markHeight={40}
          markWidth={100}
          pickerHeight={40}
        />
      </View>
      <AppText style={styles.divider}>–</AppText>
      <View>
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
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
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
  inputLong: {
    width: 70,
    height: '100%',
  },
  divider: {
    color: COLOR.GRAY,
  },
});

export default AppDateInput;
