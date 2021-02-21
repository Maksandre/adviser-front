import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { loginUser, createUser } from '../store/actions/user';

const SignInScreen = ({ loginUser, createUser }) => {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
      <Button
        title="Sign Up"
        onPress={() => {
          createUser({ email: 'testfromapi@test.tt', password: '123' });
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          loginUser();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapDispatchToProps = {
  loginUser,
  createUser,
};

export default connect(null, mapDispatchToProps)(SignInScreen);
