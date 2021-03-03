import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppView from '../components/AppView';
import AppTextButton from '../components/buttons/AppTextButton';
import SignInForm from '../components/form/SignInForm';
import { AppText, AppTitleBold } from '../components/text';
import { ROUTES } from '../constants/routes';

export default SignUpScreen = ({ navigation }) => {
  return (
    <AppView>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={require('../../assets/logo.png')} />
      </View>
      <View style={styles.title}>
        <AppTitleBold>Log In</AppTitleBold>
        <View style={styles.switch}>
          <AppText>I'm new user. </AppText>
          <AppTextButton
            title="Register"
            onPress={() => navigation.navigate(ROUTES.SIGN_UP)}
          />
        </View>
      </View>
      <SignInForm style={styles.form} />
    </AppView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginBottom: 30,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switch: {
    flexDirection: 'row',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  logoWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 4,
  },
});
