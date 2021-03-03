import React from 'react';
import { StyleSheet, Text } from 'react-native';

import AppView from '../components/AppView';

const LiabilitiesScreen = () => {
  return (
    <AppView style={styles.container}>
      <Text>Liabilities Screen</Text>
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

export default LiabilitiesScreen;
