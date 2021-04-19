import { LinearGradient } from 'expo-linear-gradient';
import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLOR } from '../../constants/colors';
import { DISABLED_OPACITY, RADIUS } from '../../constants/commonui';
import { getMonth, getYear, isValid } from '../../utils/dates';
import { AppText } from '../text';
import AppPicker from './AppPicker';
import AppHiddenInput from '../inputs/AppHiddenInput';

const months = [
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

const AppDateInput = ({ date, onChangeText, disabled }) => {
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    if (isValid(date)) {
      setMonth(months[getMonth(date) - 1]);
      setYear(getYear(date).toString());
    }
  }, [date]);

  const handleMonthChange = (text) => {
    setMonth(text);
    const digit = months.indexOf(text) + 1;
    const twoDigitMonth = digit < 10 ? `0${digit}` : `${digit}`;
    onChangeText(`${year}-${twoDigitMonth}`);
  };

  const handleYearChange = (text) => {
    const validText = text.replace(/\D/gi, '');
    setYear(validText.substring(0, 4));
    const digitMonth = months.indexOf(month) + 1;
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
          textStyle={{
            alignSelf: 'flex-end',
            marginRight: 10,
            opacity: disabled ? DISABLED_OPACITY : 1,
          }}
          height={40}
          elementHeight={40}
          disabled={disabled}
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
          style={{
            ...styles.input,
            ...styles.inputYear,
            color: !disabled ? COLOR.BLACK : 'rgba(0, 0, 0, 0.3);',
          }}
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
          disabled={disabled}
        />
      </View>
      {
        <TouchableOpacity
          onPress={disabled ? () => {} : () => onChangeText('')}
        >
          <MaterialCommunityIcons
            name={disabled ? 'link' : 'close'}
            size={24}
            color={COLOR.BLACK}
          />
        </TouchableOpacity>
      }
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
