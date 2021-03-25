import React from 'react';
import { connect } from 'react-redux';
import {
  createInflationRate,
  deleteInflationRate,
  getInflationRates,
  updateInflationRate,
} from '../store/actions/inflation';
import WithRateList from './WithRateList';

const InflationScreen = ({
  inflationRates,
  getInflationRates,
  createInflationRate,
  updateInflationRate,
  deleteInflationRate,
}) => {
  return (
    <WithRateList
      data={inflationRates}
      onLoad={getInflationRates}
      createFunction={createInflationRate}
      updateFunction={updateInflationRate}
      deleteFunction={deleteInflationRate}
      title="Inflation rates"
      modalTitlePlaceholder="Inflation rate name"
      modalSubtitle="Inflation rate"
    />
  );
};

function mapStateToProps(state) {
  return {
    inflationRates: state.economy.inflation,
  };
}

const mapDispatchToProps = {
  getInflationRates,
  createInflationRate,
  updateInflationRate,
  deleteInflationRate,
};

export default connect(mapStateToProps, mapDispatchToProps)(InflationScreen);
