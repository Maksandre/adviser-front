import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import AppView from '../components/AppView';
import ValuableList from '../components/lists/economy/ValuableList';
import {
  getIncomes,
  createIncome,
  updateIncome,
  deleteIncome,
} from '../store/actions/income';

const IncomesScreen = ({
  incomes,
  getIncomes,
  createIncome,
  updateIncome,
  deleteIncome,
}) => {
  useEffect(() => {
    getIncomes().then(console.log(incomes));
  }, []);

  const handleDragEnd = (data) => {
    updateIncome(data);
  };

  return (
    <AppView>
      <ValuableList
        data={incomes.sort((a, b) => b.position - a.position)}
        onDragEnd={handleDragEnd}
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
