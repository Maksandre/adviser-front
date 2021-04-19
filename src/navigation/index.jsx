import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { AppNavigation } from './AppNavigation';
import { LoginNavigation } from './LoginNavigation';
import Actions from '../store/actions';

const RootNavigation = (props) => {
  useEffect(() => {
    props.getUser();
    props.getInflation();
    props.getYields();
    props.getIncomes();
    props.getExpenses();
    props.getLiabilities();
  }, []);

  return <AppNavigation />;
  // return props.user ? <AppNavigation /> : <LoginNavigation />; // TODO login
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {
  getUser: Actions.user.getUser,
  getInflation: Actions.inflation.getInflationRates,
  getYields: Actions.yields.getYields,
  getIncomes: Actions.income.getIncomes,
  getExpenses: Actions.expense.getExpenses,
  getLiabilities: Actions.liability.getLiabilities,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigation);
