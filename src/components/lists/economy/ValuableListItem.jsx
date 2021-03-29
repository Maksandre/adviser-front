import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLOR } from '../../../constants/colors';
import { BOLD, RADIUS } from '../../../constants/commonui';
import { SHADOW } from '../../../constants/styles';
import AppCollapsibleListItem from '../AppCollapsibleListItem';
import EconomyVisible from './EconomyVisible';

const ValuableListItem = ({ item, onLongPress, isActive }) => {
  const style = isActive
    ? { ...styles.opacity, ...styles.opacityActive }
    : styles.opacity;

  return (
    <AppCollapsibleListItem onLongPress={onLongPress} opacityStyle={style}>
      <EconomyVisible left={item.name} right={item.amount + ' $'} />
      <View>
        <Text>Collapsed</Text>
      </View>
    </AppCollapsibleListItem>
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

export default ValuableListItem;
