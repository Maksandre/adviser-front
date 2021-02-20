import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';

export const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
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
