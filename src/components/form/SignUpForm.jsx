import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import AppButton from '../buttons/AppButton';
import AppInput from '../inputs/AppInput';
import { AppBaseForm } from './AppBaseForm';
import { createUser, loginUser } from '../../store/actions/user';

const SignUpForm = (props) => {
  const [user, setUser] = useState({});

  const handleEmailInput = (text) => {
    setUser((usr) => ({ ...usr, email: text }));
  };

  const handlePasswordInput = (text) => {
    setUser((usr) => ({ ...usr, password: text }));
  };

  const handleSubmitForm = async () => {
    if (await props.createUser(user)) {
      await props.loginUser(user);
    }
  };

  return (
    <AppBaseForm style={props.style}>
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
        <AppButton title="Create account" onPress={handleSubmitForm} />
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

const mapDispatchToProps = {
  createUser,
  loginUser,
};

export default connect(null, mapDispatchToProps)(SignUpForm);
