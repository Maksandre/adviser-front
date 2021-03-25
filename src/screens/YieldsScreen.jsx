import React, { useState, useEffect } from 'react';
import { Alert, LogBox, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import AppView from '../components/AppView';
import { AppSubtitle } from '../components/text';
import EconomyList from '../components/lists/economy/EconomyList';
import {
  getYields,
  updateYield,
  deleteYield,
  createYield,
} from '../store/actions/economy';
import RateModal from '../components/modal/RateModal';
import AppCreateButton from '../components/buttons/AppCreateButton';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']); // TODO wait for fix on github

const itemInitialState = { name: '', rate: '' };

const YieldsScreen = ({
  yields,
  getYields,
  createYield,
  updateYield,
  deleteYield,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState(itemInitialState);

  useEffect(() => {
    getYields();
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
      updateYield(item);
    } else {
      createYield({
        ...item,
        position:
          yields.length > 0
            ? yields.sort((a, b) => b.position - a.position)[0].position + 1
            : 0,
      });
    }
    handleClose();
  };

  const handleDragEnd = (data) => {
    updateYield(data);
  };

  const handleDelete = () => {
    Alert.alert('Attention!', `You want to delete «${item.name}»?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          deleteYield(item.id);
          handleClose();
        },
      },
    ]);
  };

  return (
    <AppView style={styles.container}>
      <RateModal
        item={item}
        titlePlaceholder="Yield name"
        subtitle="Yield rate"
        onTitleChange={(value) => setItem({ ...item, name: value })}
        onRateChange={(value) => setItem({ ...item, rate: value.trim() })}
        onDelete={handleDelete}
        isVisible={modalVisible}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
      <View style={styles.titleContainer}>
        <AppSubtitle>Yield rates</AppSubtitle>
        <AppCreateButton onPress={() => handleItemPress(itemInitialState)} />
      </View>
      <EconomyList
        style={styles.list}
        data={yields.sort((a, b) => b.position - a.position)}
        onPress={handleItemPress}
        onAddPress={() => handleItemPress(itemInitialState)}
        onDragEnd={handleDragEnd}
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
  list: {
    flex: 1,
  },
});

function mapStateToProps(state) {
  return {
    yields: state.economy.yields,
  };
}

const mapDispatchToProps = {
  getYields,
  updateYield,
  deleteYield,
  createYield,
};

export default connect(mapStateToProps, mapDispatchToProps)(YieldsScreen);
