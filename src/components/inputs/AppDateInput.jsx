import React from 'react';
import { useRef } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Picker, PickerIOS } from '@react-native-picker/picker';

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

const AppDateInput = ({ onChangeText }) => {
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
    onChangeText(date);
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
      <View style={{ ...styles.input }}>
        <Picker
          style={{ ...styles.inputShort }}
          selectedValue={month}
          onValueChange={(item) => setMonth(item)}
          mode="dropdown"
          prompt="Select month"
          itemStyle={styles.itemIOS}
        >
          <Picker.Item label="January" value={'1'} />
          <Picker.Item label="February" value={'2'} />
          <Picker.Item label="Marh" value={'3'} />
          <Picker.Item label="April" value={'4'} />
          <Picker.Item label="May" value={'5'} />
          <Picker.Item label="June" value={'6'} />
          <Picker.Item label="July" value={'7'} />
          <Picker.Item label="August" value={'8'} />
          <Picker.Item label="September" value={'9'} />
          <Picker.Item label="October" value={'10'} />
          <Picker.Item label="November" value={'11'} />
          <Picker.Item label="December" value={'12'} />
        </Picker>
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
          ref={yearElement}
        />
      </View>
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
    width: 100,
    height: '100%', // TODO если размеры поехали в андроид то причина здесь
    backgroundColor: 'transparent',
    padding: 0,
  },
  inputLong: {
    width: 70,
    height: '100%',
  },
  inputItemAndroid: {
    padding: 0,
    margin: 0,
    fontSize: 30,
  },
  itemIOS: {
    // backgroundColor: 'red',
    height: '100%',
    padding: 0,
    margin: 0,
    backgroundColor: 'transparent',
  },
  divider: {
    color: COLOR.GRAY,
  },
});

export default AppDateInput;
