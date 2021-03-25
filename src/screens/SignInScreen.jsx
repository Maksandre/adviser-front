import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppView from '../components/AppView';
import AppTextButton from '../components/buttons/AppTextButton';
import SignInForm from '../components/form/SignInForm';
import { AppText, AppTitleBold } from '../components/text';
import { ROUTES } from '../constants/routes';

export default SignInScreen = ({ navigation }) => {
  return (
    <AppView style={styles.container}>
      <View style={styles.intro}>
        <View style={styles.logoWrapper}>
          <Image
            style={styles.logo}
            source={require('../../assets/logo.png')}
          />
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
      </View>

      <SignInForm style={styles.form} />
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  intro: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: 3,
  },
  title: {
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
  logoWrapper: {},
  form: {
    flex: 4,
  },
});
