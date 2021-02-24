import React from 'react';
import AppInput from '../inputs/AppInput';
import { AppBaseForm } from './AppBaseForm';

export default SignUpForm = () => {
  return (
    <AppBaseForm>
      <AppInput
        onChangeText={() => {}}
        placeholder="Email"
        autoCompleteType="email"
      />
      <AppInput
        onChangeText={() => {}}
        placeholder="Password"
        autoCompleteType="password"
        secureTextEntry={true}
      />
    </AppBaseForm>
  );
};
