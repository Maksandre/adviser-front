import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTextButton from '../components/buttons/AppTextButton';
import SignUpForm from '../components/form/SignUpForm';
import { AppText, AppTitleBold } from '../components/text';
import { ROUTES } from '../constants/routes';

export default SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <AppTitleBold>Create Account</AppTitleBold>
        <View style={styles.switch}>
          <AppText>I already have an account. </AppText>
          <AppTextButton
            title="Log in here"
            onPress={() => navigation.navigate(ROUTES.SIGN_IN)}
          />
        </View>
      </View>
      <SignUpForm />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: '15%',
  },
  title: {
    marginBottom: 40,
  },
  switch: {
    flexDirection: 'row',
  },
});
