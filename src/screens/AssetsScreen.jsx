import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import AppView from '../components/AppView';
import AssetEntityModal from '../components/modal/AssetEntityModal';
import { AppSubtitle } from '../components/text';
import AppCreateButton from '../components/buttons/AppCreateButton';
import { createAsset, updateAsset, deleteAsset } from '../store/actions/asset';
import { getLiabilities, updateLiability } from '../store/actions/liability';
import { getIncomes, updateIncome } from '../store/actions/income';
import { getExpenses, updateExpense } from '../store/actions/expense';
import { removeItemAlert } from '../components/alerts/removeItemAlert';
import LiabilityList from '../components/lists/economy/LiabilityList';
import { SelectedEntitiesContext } from '../context/Selected';

const itemInitialState = {
  name: '',
  amount: '',
};

const AssetsScreen = ({
  assets,
  liabilities,
  expenses,
  incomes,
  createAsset,
  updateAsset,
  deleteAsset,
  updateExpense,
  getExpenses,
  updateLiability,
  getLiabilities,
  updateIncome,
  getIncomes,
}) => {
  const [selectedItem, setSelectedItem] = useState(itemInitialState);
  const [connectedExpenses, setConnectedExpenses] = useState([]);
  const [connectedLiabilities, setConnectedLiabilities] = useState([]);
  const [connectedIncomes, setConnectedIncomes] = useState([]);
  const [modalVisible, setModalVisisble] = useState(false);

  console.log('connectedExpenses', connectedExpenses);
  console.log('connectedLiabilities', connectedLiabilities);
  console.log('connectedIncomes', connectedIncomes);

  const handleClose = () => {
    setModalVisisble(false);
    setSelectedItem(itemInitialState);
    setConnectedExpenses([]);
  };

  const handleDragEnd = (data) => {
    updateAsset(data);
  };

  const handleSubmit = async () => {
    // TODO refactor this shit
    let id = selectedItem.id;
    if (id) {
      updateAsset(selectedItem);
    } else {
      id = await createAsset({
        ...selectedItem,
        position:
          assets.length > 0
            ? assets.sort((a, b) => b.position - a.position)[0].position + 1
            : 0,
      });
    }
    const actualExpenses = expenses.filter(
      (exp) => exp.assetId === selectedItem.id,
    );
    actualExpenses.forEach((ae) => {
      if (!connectedExpenses.some((ce) => ce.id === ae.id)) {
        updateExpense({ ...ae, assetId: null });
      }
    });
    connectedExpenses.forEach((cExpense) => {
      updateExpense({
        ...cExpense,
        dateBegin: selectedItem.dateBegin,
        dateEnd: selectedItem.dateEnd,
        assetId: id,
      });
    });
    const actualLiabilities = liabilities.filter(
      (l) => l.assetId === selectedItem.id,
    );
    actualLiabilities.forEach((al) => {
      if (!connectedLiabilities.some((cl) => cl.id === al.id)) {
        updateLiability({ ...al, assetId: null });
      }
    });
    connectedLiabilities.forEach((cl) => {
      updateLiability({
        ...cl,
        dateBegin: selectedItem.dateBegin,
        dateEnd: selectedItem.dateEnd,
        assetId: id,
      });
    });
    const actualIncomes = incomes.filter((i) => i.assetId === selectedItem.id);
    actualIncomes.forEach((ai) => {
      if (!connectedIncomes.some((ci) => ci.id === ai.id)) {
        updateIncome({ ...ai, assetId: null });
      }
    });
    connectedIncomes.forEach((ci) => {
      updateIncome({
        ...ci,
        dateBegin: selectedItem.dateBegin,
        dateEnd: selectedItem.dateEnd,
        assetId: id,
      });
    });
    handleClose();
  };

  const handleEditClick = (item) => {
    setSelectedItem(item);
    setConnectedExpenses(expenses.filter((exp) => exp.assetId === item.id));
    setConnectedLiabilities(liabilities.filter((l) => l.assetId === item.id));
    setConnectedIncomes(incomes.filter((i) => i.assetId === item.id));
    setModalVisisble(true);
  };

  const handleAddPress = () => {
    setSelectedItem(itemInitialState);
    setModalVisisble(true);
  };

  const handleDelete = () => {
    removeItemAlert(selectedItem, () => {
      deleteAsset(selectedItem.id);
      getExpenses(); // TODO wait for asset deleted?
      getLiabilities();
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

  const handleLiabilitySelect = (liability) => {
    if (connectedLiabilities.some((l) => l.id === liability.id)) {
      setConnectedLiabilities(
        connectedLiabilities.filter((l) => l.id !== liability.id),
      );
    } else {
      setConnectedLiabilities([...connectedLiabilities, liability]);
    }
  };

  const handleLiabilityDelete = (liability) => {
    setConnectedLiabilities(
      connectedLiabilities.filter((l) => l.id !== liability.id),
    );
  };

  const handleIncomeSelect = (income) => {
    if (connectedIncomes.some((i) => i.id === income.id)) {
      setConnectedIncomes(connectedIncomes.filter((i) => i.id !== income.id));
    } else {
      setConnectedIncomes([...connectedIncomes, income]);
    }
  };

  const handleIncomeDelete = (income) => {
    setConnectedIncomes(connectedIncomes.filter((i) => i.id !== income.id));
  };

  return (
    <AppView>
      <SelectedEntitiesContext.Provider
        value={{
          expenses: connectedExpenses,
          liabilities: connectedLiabilities,
          incomes: connectedIncomes,
        }}
      >
        <AssetEntityModal
          item={selectedItem}
          onExpenseSelect={handleExpenseSelect}
          onExpenseDelete={handleExpenseDelete}
          onLiabilitySelect={handleLiabilitySelect}
          onLiabilityDelete={handleLiabilityDelete}
          onIncomeSelect={handleIncomeSelect}
          onIncomeDelete={handleIncomeDelete}
          titlePlaceholder="Asset name"
          subtitle="Asset"
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
          <AppSubtitle>Assets</AppSubtitle>
          <AppCreateButton onPress={handleAddPress} />
        </View>
        <LiabilityList
          data={assets.sort((a, b) => b.position - a.position)}
          connectExpensesBy={(expense) => expense.assetId}
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
    assets: state.assets,
    liabilities: state.liabilities,
    expenses: state.expenses,
    incomes: state.incomes,
  };
}

const mapDispatchToProps = {
  createAsset,
  updateAsset,
  deleteAsset,
  getLiabilities,
  updateLiability,
  getIncomes,
  updateIncome,
  updateExpense,
  getExpenses,
};

export default connect(mapStateToProps, mapDispatchToProps)(AssetsScreen);
