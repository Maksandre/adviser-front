import React, { useState, useEffect } from 'react';
import { LogBox, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { removeItemAlert } from '../components/alerts/removeItemAlert';
import AppView from '../components/AppView';
import AppCreateButton from '../components/buttons/AppCreateButton';
import RateList from '../components/lists/economy/RateList';
import RateModal from '../components/modal/RateModal';
import { AppSubtitle } from '../components/text';
import {
  createInflationRate,
  deleteInflationRate,
  updateInflationRate,
} from '../store/actions/inflation';

LogBox.ignoreLogs(['VirtualizedLists should never be nested']); // TODO wait for fix on github

const itemInitialState = { name: '', rate: '' };

const InflationScreen = ({
  inflationRates,
  createInflationRate,
  updateInflationRate,
  deleteInflationRate,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(itemInitialState);

  const handleClose = () => {
    setModalVisible(false);
    setSelectedItem(itemInitialState);
  };

  const handleSubmit = () => {
    if (selectedItem.id) {
      updateInflationRate(selectedItem);
    } else {
      createInflationRate({
        ...selectedItem,
        position:
          inflationRates.length > 0
            ? inflationRates.sort((a, b) => b.position - a.position)[0]
                .position + 1
            : 0,
      });
    }
    handleClose();
  };

  const handleDelete = () => {
    removeItemAlert(selectedItem, () => {
      deleteInflationRate(selectedItem.id);
      handleClose();
    });
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleDragEnd = (data) => {
    updateInflationRate(data);
  };

  return (
    <AppView>
      <RateModal
        item={selectedItem}
        titlePlaceholder={'Inflation rate name'}
        subtitle={'Inflation rate'}
        onTitleChange={(value) =>
          setSelectedItem({ ...selectedItem, name: value })
        }
        onRateChange={(value) =>
          setSelectedItem({ ...selectedItem, rate: value.trim() })
        }
        onDelete={handleDelete}
        isVisible={modalVisible}
        onClose={handleClose}
        onSubmit={handleSubmit}
      />
      <View style={styles.titleContainer}>
        <AppSubtitle>Inflation rates</AppSubtitle>
        <AppCreateButton onPress={() => handleItemPress(itemInitialState)} />
      </View>
      <RateList
        data={inflationRates.sort((a, b) => b.position - a.position)}
        onPress={handleItemPress}
        onDragEnd={handleDragEnd}
        onAddPress={() => handleItemPress(itemInitialState)}
      />
    </AppView>
  );
};

const styles = StyleSheet.create({
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
  createInflationRate,
  updateInflationRate,
  deleteInflationRate,
};

export default connect(mapStateToProps, mapDispatchToProps)(InflationScreen);
