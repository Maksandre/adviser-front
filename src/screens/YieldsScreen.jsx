import React from 'react';
import { connect } from 'react-redux';
import {
  createYield,
  deleteYield,
  getYields,
  updateYield,
} from '../store/actions/economy';
import WithRateList from './WithRateList';

const YieldsScreen = ({
  yields,
  getYields,
  createYield,
  updateYield,
  deleteYield,
}) => {
  return (
    <WithRateList
      data={yields}
      onLoad={getYields}
      createFunction={createYield}
      updateFunction={updateYield}
      deleteFunction={deleteYield}
      title="Yield rates"
      modalTitlePlaceholder="Yield name"
      modalSubtitle="Yield rate"
    />
  );
};

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
