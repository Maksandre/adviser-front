import React from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import AppGhostButton from '../../buttons/AppGhostButton';
import AppDraggableList from '../AppDraggableList';
import LiabilityListItem from './LiabilityListItem';

const LiabilityList = ({
  data,
  connectExpensesBy,
  onDragEnd,
  onPressEdit,
  onAddPress,
  expenses,
}) => {
  const renderItem = ({ item, drag, isActive }) => (
    <LiabilityListItem
      item={item}
      connectedExpenses={expenses.filter(
        (e) => connectExpensesBy(e) === item.id,
      )}
      onPressEdit={() => onPressEdit(item)}
      onLongPress={drag}
      isActive={isActive}
    />
  );

  return (
    <AppDraggableList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      onDragEnd={onDragEnd}
      footerComponent={<AppGhostButton onPress={onAddPress} />}
      footerStyle={styles.footer}
    />
  );
};

const styles = StyleSheet.create({
  footer: {
    marginTop: 10,
  },
});

function mapStateToProps(state) {
  return {
    expenses: state.expenses,
  };
}

export default connect(mapStateToProps)(LiabilityList);
