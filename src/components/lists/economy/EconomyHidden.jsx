import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { AppText } from '../../text';

const EconomyHidden = ({ left, right, Icon }) => {
  return (
    <View style={styles.container}>
      {Icon && <Icon />}
      <AppText style={{ ...styles.text, ...styles.textName }}>{left}</AppText>
      <AppText style={{ ...styles.text, ...styles.textRate }}>{right}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  text: {
    color: COLOR.WHITE,
  },
  textName: {
    flex: 1,
  },
  textRate: {
    flex: 1,
    textAlign: 'right',
    paddingLeft: 5,
  },
});

export default EconomyHidden;
