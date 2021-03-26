import React from 'react';
import { StyleSheet } from 'react-native';
import AppGhostButton from '../../buttons/AppGhostButton';

import AppDraggableList from '../AppDraggableList';
import EconomyListItem from './EconomyListItem';

const EconomyList = ({ data, onPress, onDragEnd, onAddPress }) => {
  const renderItem = ({ item, drag, isActive }) => (
    <EconomyListItem
      item={item}
      drag={drag}
      isActive={isActive}
      onPress={() => onPress(item)}
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

export default EconomyList;
