import React, { useState, useEffect } from 'react';
import { Alert, LogBox, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import AppView from '../components/AppView';
import { AppSubtitle } from '../components/text';
import EconomyList from '../components/lists/economy/EconomyList';
import RateModal from '../components/modal/RateModal';
import {
  getInflationRates,
  createInflationRate,
  deleteInflationRate,
  updateInflationRate,
} from '../store/actions/inflation';
import AppCreateButton from '../components/buttons/AppCreateButton';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']); // TODO wait for fix on github

const itemInitialState = { name: '', rate: '' };

const InflationScreen = ({
  inflationRates,
  getInflationRates,
  createInflationRate,
  updateInflationRate,
  deleteInflationRate,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState(itemInitialState);

  useEffect(() => {
    getInflationRates();
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
      updateInflationRate(item);
    } else {
      createInflationRate({
        ...item,
        position:
          inflationRates.length > 0
            ? inflationRates.sort((a, b) => b.position - a.position)[0]
                .position + 1
            : 0,
      });
    }
    handleClose();
  };

  const handleDragEnd = (data) => {
    updateInflationRate(data);
  };

  const handleDelete = () => {
    // TODO move into module
    Alert.alert('Attention!', `You want to delete «${item.name}»?`, [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: () => {
          deleteInflationRate(item.id);
          handleClose();
        },
      },
    ]);
  };

  return (
    <AppView style={styles.container}>
      <RateModal
        item={item}
        titlePlaceholder="Inflation rate name"
        subtitle="Inflation rate"
        onTitleChange={(value) => setItem({ ...item, name: value })}
        onRateChange={(value) => setItem({ ...item, rate: value.trim() })}
        onDelete={handleDelete}
        isVisible={modalVisible}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
      <View style={styles.titleContainer}>
        <AppSubtitle>Inflation rates</AppSubtitle>
        <AppCreateButton onPress={() => handleItemPress(itemInitialState)} />
      </View>
      <EconomyList
        data={inflationRates.sort((a, b) => b.position - a.position)}
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

function mapStateToProps(state) {
  return {
    inflationRates: state.economy.inflation,
  };
}

const mapDispatchToProps = {
  getInflationRates,
  createInflationRate,
  updateInflationRate,
  deleteInflationRate,
};

export default connect(mapStateToProps, mapDispatchToProps)(InflationScreen);
