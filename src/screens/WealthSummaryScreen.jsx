import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useState } from 'react/cjs/react.development';
import AppView from '../components/AppView';
import AppPicker from '../components/inputs/AppPicker';
import { COLOR } from '../constants/colors';

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

const WealthSummaryScreen = () => {
  const [value, setValue] = useState('May');

  return (
    <AppView style={styles.container}>
      <AppPicker
        value={value}
        elements={months}
        onChange={(text) => setValue(text)}
        height={40}
        pickerHeight={40}
        pickerWidth={100}
        fontSize={16}
        textColor={COLOR.BLACK}
        markColor={COLOR.PURE_WHITE}
        markHeight={40}
        markWidth={100}
      />
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WealthSummaryScreen;
