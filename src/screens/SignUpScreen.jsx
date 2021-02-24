import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppTextButton from '../components/buttons/AppTextButton';
import { AppText, AppTitleBold } from '../components/text';
import { ROUTES } from '../constants/routes';

export default SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AppTitleBold>Create Account</AppTitleBold>
      <View style={styles.switch}>
        <AppText>I allready have an account. </AppText>
        <AppTextButton
          title="Log in here"
          onPress={() => navigation.navigate(ROUTES.SIGN_IN)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switch: {
    flexDirection: 'row',
  },
});
