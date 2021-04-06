import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useState } from 'react/cjs/react.development';

import { COLOR } from '../../constants/colors';
import { RADIUS } from '../../constants/commonui';
import { getMonth, getYear } from '../../utils/dates';
import { AppText } from '../text';
import AppPicker from './AppPicker';
import AppHiddenInput from '../inputs/AppHiddenInput';

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

const AppDateInput = ({ date, onChangeText }) => {
  const [month, setMonth] = useState(months[getMonth(date)]);
  const [year, setYear] = useState('');

  useEffect(() => {
    if (date) {
      setYear(getYear(date).toString());
    }
  }, []);

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
      <View style={styles.inputMonth}>
        <AppPicker
          value={month}
          elements={months}
          onChange={handleMonthChange}
          markStyle={{
            height: 40,
            borderRadius: RADIUS,
            backgroundColor: COLOR.PURE_WHITE,
          }}
          textStyle={{ alignSelf: 'flex-end', marginRight: 10 }}
          height={40}
          elementHeight={40}
        />
        <LinearGradient
          style={[styles.gradient, { bottom: 0, height: 10 }]}
          colors={['rgba(255, 255, 255, 0)', 'rgba(255, 255, 255, 1)']}
          pointerEvents={'none'}
        />
        <LinearGradient
          style={[styles.gradient, { top: 0, height: 10 }]}
          colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0)']}
          pointerEvents={'none'}
        />
      </View>
      <AppText style={styles.divider}>–</AppText>
      <View>
        <AppHiddenInput
          style={{ ...styles.input, ...styles.inputYear }}
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
          placeholder="year"
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
  inputYear: {
    width: 70,
    height: 40,
  },
  inputMonth: {
    width: 100,
    marginRight: 3,
  },
  divider: {
    color: COLOR.GRAY,
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    borderRadius: RADIUS,
  },
});

export default AppDateInput;
