import React, { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';

import AppView from '../components/AppView';
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

  return (
    <AppView style={styles.container}>
      <Text>{incomes[0].name}</Text>
    </AppView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
