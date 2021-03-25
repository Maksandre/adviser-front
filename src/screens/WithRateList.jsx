import React, { useEffect, useState } from 'react';
import { Alert, LogBox, StyleSheet, View } from 'react-native';
import AppView from '../components/AppView';
import AppCreateButton from '../components/buttons/AppCreateButton';
import EconomyList from '../components/lists/economy/EconomyList';
import RateModal from '../components/modal/RateModal';
import { AppSubtitle } from '../components/text';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']); // TODO wait for fix on github

const itemInitialState = { name: '', rate: '' };

const WithRateList = ({
  data,
  onLoad,
  createFunction,
  updateFunction,
  deleteFunction,
  title,
  modalTitlePlaceholder,
  modalSubtitle,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState(itemInitialState);

  useEffect(() => {
    onLoad();
  }, []);

  const handleClose = () => {
    setModalVisible(false);
    setItem(itemInitialState);
  };

  const handleItemPress = (item) => {
    setModalVisible(true);
    setItem(item);
  };

  const handleSubmit = () => {
    if (item.id) {
      updateFunction(item);
    } else {
      createFunction({
        ...item,
        position:
          data.length > 0
            ? data.sort((a, b) => b.position - a.position)[0].position + 1
            : 0,
      });
    }
    handleClose();
  };

  const handleDelete = () => {
    Alert.alert('Attention!', `You want to delete «${item.name}»?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          deleteFunction(item.id);
          handleClose();
        },
      },
    ]);
  };

  const handleDragEnd = (data) => {
    updateFunction(data);
  };

  return (
    <AppView style={styles.container}>
      <RateModal
        item={item}
        titlePlaceholder={modalTitlePlaceholder}
        subtitle={modalSubtitle}
        onTitleChange={(value) => setItem({ ...item, name: value })}
        onRateChange={(value) => setItem({ ...item, rate: value.trim() })}
        onDelete={handleDelete}
        isVisible={modalVisible}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
      <View style={styles.titleContainer}>
        <AppSubtitle>{title}</AppSubtitle>
        <AppCreateButton onPress={() => handleItemPress(itemInitialState)} />
      </View>
      <EconomyList
        data={data.sort((a, b) => b.position - a.position)}
        onPress={handleItemPress}
        onDragEnd={handleDragEnd}
        onAddPress={() => handleItemPress(itemInitialState)}
      />
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 10,
  },
});

export default WithRateList;
