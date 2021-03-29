import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import AppView from '../components/AppView';
import ValuableList from '../components/lists/economy/ValuableList';
import IncomeModal from '../components/modal/IncomeModal';
import {
  getIncomes,
  createIncome,
  updateIncome,
  deleteIncome,
} from '../store/actions/income';

const itemInitialState = {
  name: '',
  amount: null,
  dateBegin: '',
  dateEnd: '',
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

  useEffect(() => {
    getIncomes().then(console.log(incomes));
  }, []);

  const handleDragEnd = (data) => {
    updateIncome(data);
  };

  const handleSubmit = () => {
    setModalVisisble(false);
  };

  const handleClose = () => {
    setModalVisisble(false);
  };

  const handleEditClick = () => {
    setModalVisisble(true);
  };

  return (
    <AppView>
      <IncomeModal
        isVisible={modalVisible}
        onSubmit={handleSubmit}
        onClose={handleClose}
      />
      <ValuableList
        data={incomes.sort((a, b) => b.position - a.position)}
        onDragEnd={handleDragEnd}
        onAddPress={handleEditClick}
      />
    </AppView>
  );
};

const styles = StyleSheet.create({});

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
