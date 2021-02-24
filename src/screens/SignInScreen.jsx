import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import AppTextButton from '../components/buttons/AppTextButton';
import { AppText, AppTitleBold } from '../components/text';
import { loginUser, createUser } from '../store/actions/user';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppTitleBold>Log In</AppTitleBold>
      <View style={styles.switch}>
        <AppText>I'm new user. </AppText>
        <AppTextButton
          title="Create new account"
          onPress={() => navigation.popToTop()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    flexDirection: 'row',
  },
});

const mapDispatchToProps = {
  loginUser,
  createUser,
};

export default connect(null, mapDispatchToProps)(SignInScreen);
