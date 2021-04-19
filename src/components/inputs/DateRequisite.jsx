import React from 'react';
import { COLOR } from '../../constants/colors';
import { today } from '../../utils/dates';
import AppCreateButton from '../buttons/AppCreateButton';

import AppDateInput from './AppDateInput';
import AppRequisite from './AppRequisite';

const DateRequisite = ({
  name,
  placeholder,
  value,
  onChangeText,
  measure,
  disabled,
}) => {
  const Input = () => {
    if (value) {
      return (
        <AppDateInput
          date={value}
          onChangeText={onChangeText}
          disabled={disabled}
        />
      );
    }
    return (
      <AppCreateButton
        onPress={() => onChangeText(today())}
        style={{ backgroundColor: COLOR.PURE_WHITE }}
        disabled={disabled}
      />
    );
  };

  return <AppRequisite name={name} measure={measure} Input={Input} />;
};

export default DateRequisite;
