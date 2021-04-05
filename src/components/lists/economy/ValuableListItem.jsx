import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { COLOR } from '../../../constants/colors';
import { RADIUS } from '../../../constants/commonui';
import { SHADOW } from '../../../constants/styles';
import AppCollapsibleListItem from '../AppCollapsibleListItem';
import AppEditButton from '../../buttons/AppEditButton';
import EconomyVisible from './EconomyVisible';
import EconomyHidden from './EconomyHidden';

const ValuableListItem = ({ item, onPressEdit, onLongPress, isActive }) => {
  const opacityStyle = isActive
    ? { ...styles.opacity, ...styles.opacityActive }
    : styles.opacity;

  const Icon = () => (
    <Feather
      name="calendar"
      size={18}
      color={COLOR.WHITE}
      style={styles.calendar}
    />
  );

  return (
    <AppCollapsibleListItem
      onLongPress={onLongPress}
      opacityStyle={opacityStyle}
      expandedOpacityStyle={styles.expandedOpacityStyle}
    >
      <EconomyVisible left={item.name} right={item.amount + ' $'} />
      <View style={styles.hiddenContainer}>
        <EconomyHidden
          Icon={Icon}
          left="Begin"
          right={new Date(item.dateBegin).toLocaleDateString()}
        />
        <EconomyHidden
          Icon={Icon}
          left="End"
          right={new Date(item.dateEnd).toLocaleDateString()}
        />
        <View style={styles.button}>
          <AppEditButton onPress={onPressEdit} />
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
  },
  opacityActive: {
    ...SHADOW,
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
  },
  button: {
    alignItems: 'flex-end',
    padding: 20,
  },
  calendar: {
    paddingRight: 10,
  },
});

export default ValuableListItem;
