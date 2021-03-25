import React from 'react';
import { StyleSheet } from 'react-native';

import AppView from '../components/AppView';
import AppSectionTitle from '../components/text/AppSectionTitle';

const GoalScreen = () => {
  return (
    <AppView style={styles.container}>
      <AppSectionTitle>Goals</AppSectionTitle>
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GoalScreen;
