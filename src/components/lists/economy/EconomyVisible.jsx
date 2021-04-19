import React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { BOLD } from '../../../constants/commonui';
import { AppText } from '../../text';

const EconomyVisible = ({ left, right, Icon }) => {
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
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  text: {
    color: COLOR.WHITE,
    fontWeight: BOLD,
  },
  textName: {
    flex: 7,
  },
  textRate: {
    flex: 3,
    textAlign: 'right',
    paddingLeft: 5,
  },
});

export default EconomyVisible;
