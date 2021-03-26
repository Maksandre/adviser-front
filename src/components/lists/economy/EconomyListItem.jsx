import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';

import { COLOR } from '../../../constants/colors';
import { BOLD, RADIUS } from '../../../constants/commonui';
import { SHADOW } from '../../../constants/styles';
import { AppText } from '../../text';

const EconomyListItem = ({ item, drag, isActive, onPress }) => {
  const style = isActive
    ? { ...styles.opacity, ...styles.opacityActive }
    : styles.opacity;

  return (
    <View>
      <TouchableOpacity style={style} onLongPress={drag} onPress={onPress}>
        <View style={styles.container}>
          <AppText style={{ ...styles.text, ...styles.textName }}>
            {item.name}
          </AppText>
          <AppText style={{ ...styles.text, ...styles.textRate }}>
            {item.rate + ' %'}
          </AppText>
        </View>
      </TouchableOpacity>
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
  opacity: {
    backgroundColor: COLOR.BLUE,
    borderRadius: RADIUS,
    marginTop: 10,
    ...SHADOW,
  },
  opacityActive: {
    shadowOpacity: 0.8,
  },
});

export default EconomyListItem;
