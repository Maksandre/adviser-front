import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { loginUser } from '../store/actions/user';

const SignInScreen = ({ loginUser }) => {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
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
};

export default connect(null, mapDispatchToProps)(SignInScreen);
