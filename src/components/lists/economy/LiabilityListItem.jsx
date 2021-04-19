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
import { toMonthAndYear } from '../../../utils/dates';

const LiabilityListItem = ({
  item,
  connectedExpenses,
  onPressEdit,
  onLongPress,
  isActive,
}) => {
  const opacityStyle = isActive
    ? { ...styles.opacity, ...styles.opacityActive }
    : styles.opacity;

  const CalendarIcon = () => (
    <Feather
      name="calendar"
      size={18}
      color={COLOR.WHITE}
      style={styles.icon}
    />
  );

  const CreditIcon = () => (
    <Feather
      name="credit-card"
      size={18}
      color={COLOR.WHITE}
      style={styles.icon}
    />
  );

  const expensesSum = connectedExpenses?.reduce((prev, item) => {
    return prev + Number.parseFloat(item.amount);
  }, 0);

  return (
    <AppCollapsibleListItem
      onLongPress={onLongPress}
      opacityStyle={opacityStyle}
      expandedOpacityStyle={styles.expandedOpacityStyle}
    >
      <EconomyVisible left={item.name} right={item.amount + ' $'} />
      <View style={styles.hiddenContainer}>
        <EconomyHidden
          Icon={CreditIcon}
          left="Expenses"
          counter={connectedExpenses && connectedExpenses.length.toString()}
          right={`${expensesSum} $`}
        />
        {item.dateBegin !== undefined && (
          <EconomyHidden
            Icon={CalendarIcon}
            left="Begin"
            right={toMonthAndYear(item.dateBegin)}
          />
        )}
        {item.dateEnd !== undefined && (
          <EconomyHidden
            Icon={CalendarIcon}
            left="End"
            right={toMonthAndYear(item.dateEnd)}
          />
        )}
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
  icon: {
    paddingRight: 10,
  },
  withIcon: { flexDirection: 'row', alignItems: 'center' },
});

export default LiabilityListItem;
