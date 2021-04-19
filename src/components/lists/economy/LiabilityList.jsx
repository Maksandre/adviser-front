import React from 'react';
import { StyleSheet } from 'react-native';
import AppGhostButton from '../../buttons/AppGhostButton';
import AppDraggableList from '../AppDraggableList';
import LiabilityListItem from './LiabilityListItem';

const LiabilityList = ({
  data,
  expenses,
  onDragEnd,
  onPressEdit,
  onAddPress,
}) => {
  const renderItem = ({ item, drag, isActive }) => (
    <LiabilityListItem
      item={item}
      connectedExpenses={expenses?.filter((e) => e.liabilityId === item.id)}
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

export default LiabilityList;
