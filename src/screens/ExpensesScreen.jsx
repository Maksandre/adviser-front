import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import AppView from '../components/AppView';
import ValuableList from '../components/lists/economy/ValuableList';
import CashFlowModal from '../components/modal/CashFlowModal';
import { AppSubtitle } from '../components/text';
import AppCreateButton from '../components/buttons/AppCreateButton';
import {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
} from '../store/actions/expense';
import { removeItemAlert } from '../components/alerts/removeItemAlert';

const itemInitialState = {
  name: '',
  amount: '',
};

const ExpensesScreen = ({
  expenses,
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
}) => {
  const [selectedItem, setSelectedItem] = useState(itemInitialState);
  const [modalVisible, setModalVisisble] = useState(false);
  // console.log(selectedItem);

  useEffect(() => {
    getExpenses();
  }, [setSelectedItem]);

  const handleClose = () => {
    setModalVisisble(false);
    setSelectedItem(itemInitialState);
  };

  const handleDragEnd = (data) => {
    updateExpense(data);
  };

  const handleSubmit = () => {
    if (selectedItem.id) {
      updateExpense(selectedItem);
    } else {
      createExpense({
        ...selectedItem,
        position:
          expenses.length > 0
            ? expenses.sort((a, b) => b.position - a.position)[0].position + 1
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
      deleteExpense(selectedItem.id);
      handleClose();
    });
  };

  return (
    <AppView>
      <CashFlowModal
        item={selectedItem}
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
        <AppSubtitle>Monthly expenses</AppSubtitle>
        <AppCreateButton onPress={handleAddPress} />
      </View>
      <ValuableList
        data={expenses.sort((a, b) => b.position - a.position)}
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
    expenses: state.expenses,
  };
}

const mapDispatchToProps = {
  getExpenses,
  createExpense,
  updateExpense,
  deleteExpense,
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpensesScreen);
