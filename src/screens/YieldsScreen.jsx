import React, { useEffect, useState } from 'react';
import { Alert, LogBox, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { removeItemAlert } from '../components/alerts/RemoveItemAlert';
import AppView from '../components/AppView';
import AppCreateButton from '../components/buttons/AppCreateButton';
import EconomyList from '../components/lists/economy/EconomyList';
import RateModal from '../components/modal/RateModal';
import { AppSubtitle } from '../components/text';
import {
  createYield,
  deleteYield,
  getYields,
  updateYield,
} from '../store/actions/economy';

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
  const [selectedItem, setSelectedItem] = useState(itemInitialState);

  useEffect(() => {
    getYields();
  }, []);

  const handleClose = () => {
    setModalVisible(false);
    setSelectedItem(itemInitialState);
  };

  const handleSubmit = () => {
    if (selectedItem.id) {
      updateYield(selectedItem);
    } else {
      createYield({
        ...selectedItem,
        position:
          yields.length > 0
            ? yields.sort((a, b) => b.position - a.position)[0].position + 1
            : 0,
      });
    }
    handleClose();
  };

  const handleDelete = () => {
    removeItemAlert(selectedItem, () => {
      deleteYield(selectedItem.id);
      handleClose();
    });
  };

  const handleItemPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleDragEnd = (data) => {
    updateYield(data);
  };

  return (
    <AppView>
      <RateModal
        item={selectedItem}
        titlePlaceholder={'Yield name'}
        subtitle={'Yield rate'}
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
        <AppSubtitle>Yield rates</AppSubtitle>
        <AppCreateButton onPress={() => handleItemPress(itemInitialState)} />
      </View>
      <EconomyList
        data={yields.sort((a, b) => b.position - a.position)}
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
