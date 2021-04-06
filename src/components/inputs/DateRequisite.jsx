import React from 'react';

import AppDateInput from './AppDateInput';
import AppRequisite from './AppRequisite';

const DateRequisite = ({ name, placeholder, value, onChangeText, measure }) => {
  const Input = () => {
    return <AppDateInput date={value} onChangeText={onChangeText} />;
  };

  return <AppRequisite name={name} measure={measure} Input={Input} />;
};

export default DateRequisite;
