import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import AppView from '../components/AppView';
import LiabilityList from '../components/lists/economy/LiabilityList';
import LiabilityEntityModal from '../components/modal/LiabilityEntityModal';
import { AppSubtitle } from '../components/text';
import AppCreateButton from '../components/buttons/AppCreateButton';
import {
  createLiability,
  updateLiability,
  deleteLiability,
} from '../store/actions/liability';
import { getExpenses } from '../store/actions/expense';
import { removeItemAlert } from '../components/alerts/removeItemAlert';
import { updateExpense } from '../store/actions/expense';
import { SelectedEntitiesContext } from '../context/Selected';

const itemInitialState = {
  name: '',
  amount: '',
};

const LiabilitiesScreen = ({
  liabilities,
  expenses,
  createLiability,
  updateLiability,
  deleteLiability,
  updateExpense,
  getExpenses,
}) => {
  const [selectedItem, setSelectedItem] = useState(itemInitialState);
  const [connectedExpenses, setConnectedExpenses] = useState([]);
  const [modalVisible, setModalVisisble] = useState(false);

  console.log('selectedItem', selectedItem);

  const handleClose = () => {
    setModalVisisble(false);
    setSelectedItem(itemInitialState);
    setConnectedExpenses([]);
  };

  const handleDragEnd = (data) => {
    updateLiability(data);
  };

  const handleSubmit = async () => {
    let id = selectedItem.id;
    if (id) {
      updateLiability(selectedItem);
    } else {
      id = await createLiability({
        ...selectedItem,
        position:
          liabilities.length > 0
            ? liabilities.sort((a, b) => b.position - a.position)[0].position +
              1
            : 0,
      });
    }
    const actualExpenses = expenses.filter(
      (exp) => exp.liabilityId === selectedItem.id,
    );
    actualExpenses.forEach((ae) => {
      if (!connectedExpenses.some((ce) => ce.id === ae.id)) {
        updateExpense({ ...ae, liabilityId: null });
      }
    });
    connectedExpenses.forEach((cExpense) => {
      updateExpense({
        ...cExpense,
        dateBegin: selectedItem.dateBegin,
        dateEnd: selectedItem.dateEnd,
        liabilityId: id,
      });
    });
    handleClose();
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setConnectedExpenses(expenses.filter((exp) => exp.liabilityId === item.id));
    setModalVisisble(true);
  };

  const handleAddPress = () => {
    setSelectedItem(itemInitialState);
    setModalVisisble(true);
  };

  const handleDelete = () => {
    removeItemAlert(selectedItem, () => {
      deleteLiability(selectedItem.id);
      getExpenses();
      handleClose();
    });
  };

  const handleExpenseDelete = (expense) => {
    setConnectedExpenses(
      connectedExpenses.filter((exp) => exp.id !== expense.id),
    );
  };

  const handleExpenseSelect = (expense) => {
    if (connectedExpenses.some((e) => e.id === expense.id)) {
      setConnectedExpenses(
        connectedExpenses.filter((e) => e.id !== expense.id),
      );
    } else {
      setConnectedExpenses([...connectedExpenses, expense]);
    }
  };

  const handleAssetSelect = (asset) => {
    setSelectedItem({
      ...selectedItem,
      dateBegin: asset.dateBegin,
      dateEnd: asset.dateEnd,
      assetId: asset.id,
    });
  };

  const handleAssetDelete = () => {
    setSelectedItem({ ...selectedItem, assetId: null });
  };

  return (
    <AppView>
      <SelectedEntitiesContext.Provider value={{ expenses: connectedExpenses }}>
        <LiabilityEntityModal
          item={selectedItem}
          onAssetSelect={handleAssetSelect}
          onAssetDelete={handleAssetDelete}
          onExpenseSelect={handleExpenseSelect}
          onExpenseDelete={handleExpenseDelete}
          titlePlaceholder="Liability name"
          subtitle="Liability"
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
          hasParent={selectedItem.assetId}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
          onClose={handleClose}
        />
        <View style={styles.titleContainer}>
          <AppSubtitle>Liabilities and debts</AppSubtitle>
          <AppCreateButton onPress={handleAddPress} />
        </View>
        <LiabilityList
          data={liabilities.sort((a, b) => b.position - a.position)}
          connectExpensesBy={(expense) => expense.liabilityId}
          onDragEnd={handleDragEnd}
          onPressEdit={handleEditClick}
          onAddPress={handleAddPress}
        />
      </SelectedEntitiesContext.Provider>
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
    liabilities: state.liabilities,
    expenses: state.expenses,
  };
}

const mapDispatchToProps = {
  createLiability,
  updateLiability,
  deleteLiability,
  updateExpense,
  getExpenses,
};

export default connect(mapStateToProps, mapDispatchToProps)(LiabilitiesScreen);
