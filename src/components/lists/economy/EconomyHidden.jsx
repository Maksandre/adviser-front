import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { BOLD } from '../../../constants/commonui';
import { AppText } from '../../text';

const EconomyHidden = ({ left, right, counter, Icon }) => {
  return (
    <View style={styles.container}>
      {Icon && <Icon />}
      <View style={styles.textName}>
        <AppText style={{ ...styles.text }}>{left}</AppText>
        {counter && (
          <View style={styles.counter}>
            <Text style={styles.counterText}>{counter.toString()}</Text>
          </View>
        )}
      </View>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRate: {
    flex: 1,
    textAlign: 'right',
    paddingLeft: 5,
  },
  counter: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLOR.ORANGE,
    marginLeft: 5,
  },
  counterText: {
    fontSize: 12,
    color: COLOR.WHITE,
    fontWeight: BOLD,
  },
});

export default EconomyHidden;
