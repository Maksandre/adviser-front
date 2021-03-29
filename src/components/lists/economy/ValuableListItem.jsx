import React from 'react';
import { StyleSheet, View } from 'react-native';

import { COLOR } from '../../../constants/colors';
import { RADIUS } from '../../../constants/commonui';
import { SHADOW } from '../../../constants/styles';
import AppCollapsibleListItem from '../AppCollapsibleListItem';
import AppEditButton from '../../buttons/AppEditButton';
import EconomyVisible from './EconomyVisible';

const ValuableListItem = ({ item, onLongPress, isActive }) => {
  const opacityStyle = isActive
    ? { ...styles.opacity, ...styles.opacityActive }
    : styles.opacity;

  return (
    <AppCollapsibleListItem
      onLongPress={onLongPress}
      opacityStyle={opacityStyle}
      expandedOpacityStyle={styles.expandedOpacityStyle}
    >
      <EconomyVisible left={item.name} right={item.amount + ' $'} />
      <View style={styles.hiddenContainer}>
        <EconomyVisible left="Date begin" right={item.dateBegin} />
        <EconomyVisible left="Date end" right={item.dateBegin} />
        <View style={styles.button}>
          <AppEditButton onPress={() => console.log('CLICK')} />
        </View>
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
  expandedOpacityStyle: {
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  hiddenContainer: {
    backgroundColor: COLOR.BLUE,
    borderBottomRightRadius: RADIUS,
    borderBottomLeftRadius: RADIUS,
    ...SHADOW,
  },
  button: {
    alignItems: 'flex-end',
    padding: 20,
  },
});

export default ValuableListItem;
