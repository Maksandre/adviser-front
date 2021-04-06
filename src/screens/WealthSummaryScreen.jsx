import React from 'react';
import { Text, StyleSheet } from 'react-native';
import AppView from '../components/AppView';

const WealthSummaryScreen = () => {
  return (
    <AppView style={styles.container}>
      <Text>Wealth screen</Text>
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WealthSummaryScreen;
