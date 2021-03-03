import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import AppButton from '../buttons/AppButton';
import AppInput from '../inputs/AppInput';
import { AppBaseForm } from './AppBaseForm';

export default AuthBaseForm = ({ onSubmit, style, buttonTitle }) => {
  const [user, setUser] = useState({});

  const handleEmailInput = (text) => {
    setUser((usr) => ({ ...usr, email: text }));
  };

  const handlePasswordInput = (text) => {
    setUser((usr) => ({ ...usr, password: text }));
  };

  const handleSubmitForm = async () => {
    onSubmit(user);
  };

  return (
    <AppBaseForm style={style}>
      <View style={styles.top}>
        <AppInput
          onChangeText={handleEmailInput}
          placeholder="Email"
          autoCompleteType="email"
        />
        <AppInput
          onChangeText={handlePasswordInput}
          placeholder="Password"
          autoCompleteType="password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.bottom}>
        <AppButton title={buttonTitle} onPress={handleSubmitForm} />
      </View>
    </AppBaseForm>
  );
};

const styles = StyleSheet.create({
  top: {
    flex: 1,
    marginBottom: 30,
  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
