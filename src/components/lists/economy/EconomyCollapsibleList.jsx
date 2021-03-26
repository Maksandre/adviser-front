import React from 'react';
import { StyleSheet } from 'react-native';
import AppGhostButton from '../../buttons/AppGhostButton';
import AppDraggableList from '../AppDraggableList';
import EconomyCollapsibleListItem from './EconomyCollapsibleListItem';

const EconomyCollapsibleList = ({ data, onDragEnd, onAddPress }) => {
  const renderItem = ({ item, drag, isActive }) => (
    <EconomyCollapsibleListItem item={item} drag={drag} isActive={isActive} />
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

export default EconomyCollapsibleList;
