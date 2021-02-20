import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export const CashFlowScreen = () => {
  return (
    <View style={styles.container}>
      <Text>CashFlow Screen</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
