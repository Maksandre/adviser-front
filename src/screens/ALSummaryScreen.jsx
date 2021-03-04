import React from 'react';
import { Text, StyleSheet } from 'react-native';
import AppView from '../components/AppView';

const ALSummaryScreen = () => {
  return (
    <AppView style={styles.container}>
      <Text>Assets Liabilities Summary</Text>
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

export default ALSummaryScreen;
