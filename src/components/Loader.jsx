import React from 'react';
import { ActivityIndicator, Dimensions, StyleSheet, View } from 'react-native';
import { COLOR } from '../constants/colors';

export default Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.loader} size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: COLOR.BLACK,
    opacity: 0.7,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  loader: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
