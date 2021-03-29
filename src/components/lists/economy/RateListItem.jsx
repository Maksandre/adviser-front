import React from 'react';
import { StyleSheet } from 'react-native';

import { COLOR } from '../../../constants/colors';
import { RADIUS } from '../../../constants/commonui';
import { SHADOW } from '../../../constants/styles';
import AppListItem from '../AppListItem';
import EconomyVisible from './EconomyVisible';

const RateListItem = ({ item, onLongPress, isActive, onPress }) => {
  const style = isActive
    ? { ...styles.opacity, ...styles.opacityActive }
    : styles.opacity;

  return (
    <AppListItem
      onPress={onPress}
      onLongPress={onLongPress}
      opacityStyle={style}
    >
      <EconomyVisible left={item.name} right={item.rate + ' %'} />
    </AppListItem>
  );
};

const styles = StyleSheet.create({
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

export default RateListItem;
