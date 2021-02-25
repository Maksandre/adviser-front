import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

export default Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});
