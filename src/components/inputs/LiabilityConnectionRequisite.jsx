import React from 'react';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { AppText } from '../text';
import ConnectionRequisite from './ConnectionRequisite';
import { SelectedEntitiesContext } from '../../context/Selected';
import { BOLD } from '../../constants/commonui';

const LiabilityConnectionRequisite = ({
  item,
  onAssetDelete,
  onAssetSelect,
  onExpenseSelect,
  onExpenseDelete,
  assets,
  expenses,
}) => {
  const connected = useContext(SelectedEntitiesContext);
  const selectedAssets = assets.filter((a) => a.id === item.assetId);

  const lockedExpenses = expenses.filter((exp) => {
    const hasAnotherLiabilityId = Boolean(
      exp.liabilityId && exp.liabilityId !== item?.id,
    );
    const hasAssetId = Boolean(exp.assetId);
    return hasAnotherLiabilityId || hasAssetId;
  });

  return (
    <View>
      <View style={styles.requisite}>
        <AppText style={styles.text}>
          {selectedAssets.length > 0
            ? 'Connected assets: '
            : 'You could connect parent '}
        </AppText>
        <ConnectionRequisite
          buttonText="Asset"
          title="Assets"
          elements={assets}
          selectedElements={selectedAssets}
          multiple={false}
          onSelect={onAssetSelect}
          onDelete={onAssetDelete}
        />
      </View>
      <View style={styles.requisite}>
        <AppText style={styles.text}>
          {connected.expenses.length === 0
            ? 'You could define child '
            : 'Connected expenses: '}
        </AppText>
        <ConnectionRequisite
          buttonText="Expenses"
          title="Expenses"
          elements={expenses}
          selectedElements={connected.expenses}
          lockedElements={lockedExpenses}
          multiple={true}
          onSelect={onExpenseSelect}
          onDelete={onExpenseDelete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  requisite: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 15,
  },
  text: {
    fontWeight: BOLD,
    paddingVertical: 5,
  },
});

function mapStateToProps(state) {
  return {
    assets: state.assets,
    expenses: state.expenses,
  };
}

export default connect(mapStateToProps)(LiabilityConnectionRequisite);
