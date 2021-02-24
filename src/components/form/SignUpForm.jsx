import React from 'react';
import { StyleSheet, View } from 'react-native';
import AppButton from '../buttons/AppButton';
import AppInput from '../inputs/AppInput';
import { AppBaseForm } from './AppBaseForm';

export default SignUpForm = () => {
  return (
    <AppBaseForm style={styles.container}>
      <View style={styles.top}>
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
      </View>
      <View style={styles.bottom}>
        <AppButton title="Create account" />
      </View>
    </AppBaseForm>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 1,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
