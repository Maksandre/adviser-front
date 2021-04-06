import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import AppView from '../components/AppView';
import ValuableList from '../components/lists/economy/ValuableList';
import CashFlowModal from '../components/modal/CashFlowModal';
import { AppSubtitle } from '../components/text';
import AppCreateButton from '../components/buttons/AppCreateButton';
import {
  getIncomes,
  createIncome,
  updateIncome,
  deleteIncome,
} from '../store/actions/income';
import { removeItemAlert } from '../components/alerts/removeItemAlert';

const itemInitialState = {
  name: '',
  amount: '',
};

const IncomesScreen = ({
  incomes,
  getIncomes,
  createIncome,
  updateIncome,
  deleteIncome,
}) => {
  const [selectedItem, setSelectedItem] = useState(itemInitialState);
  const [modalVisible, setModalVisisble] = useState(false);
  // console.log(selectedItem);

  useEffect(() => {
    getIncomes();
  }, [setSelectedItem]);

  const handleClose = () => {
    setModalVisisble(false);
    setSelectedItem(itemInitialState);
  };

  const handleDragEnd = (data) => {
    updateIncome(data);
  };

  const handleSubmit = () => {
    if (selectedItem.id) {
      updateIncome(selectedItem);
    } else {
      createIncome({
        ...selectedItem,
        position:
          incomes.length > 0
            ? incomes.sort((a, b) => b.position - a.position)[0].position + 1
            : 0,
      });
    }
    handleClose();
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setModalVisisble(true);
  };

  const handleAddPress = () => {
    setSelectedItem(itemInitialState);
    setModalVisisble(true);
  };

  const handleDelete = () => {
    removeItemAlert(selectedItem, () => {
      deleteIncome(selectedItem.id);
      handleClose();
    });
  };

  return (
    <AppView>
      <CashFlowModal
        item={selectedItem}
        titlePlaceholder="Income name"
        subtitle="Monthly income"
        isVisible={modalVisible}
        onTitleChange={(text) =>
          setSelectedItem({ ...selectedItem, name: text })
        }
        onAmountChange={(text) =>
          setSelectedItem({ ...selectedItem, amount: text })
        }
        onDateBeginChange={(text) => {
          setSelectedItem({ ...selectedItem, dateBegin: text });
        }}
        onDateEndChange={(text) => {
          setSelectedItem({ ...selectedItem, dateEnd: text });
        }}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
        onClose={handleClose}
      />
      <View style={styles.titleContainer}>
        <AppSubtitle>Monthly incomes</AppSubtitle>
        <AppCreateButton onPress={handleAddPress} />
      </View>
      <ValuableList
        data={incomes.sort((a, b) => b.position - a.position)}
        onDragEnd={handleDragEnd}
        onPressEdit={handleEditClick}
        onAddPress={handleAddPress}
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
    incomes: state.incomes,
  };
}

const mapDispatchToProps = {
  getIncomes,
  createIncome,
  updateIncome,
  deleteIncome,
};

export default connect(mapStateToProps, mapDispatchToProps)(IncomesScreen);
