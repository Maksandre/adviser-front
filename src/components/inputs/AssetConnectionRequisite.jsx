import React from 'react';
import { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { AppText } from '../text';
import ConnectionRequisite from './ConnectionRequisite';
import { SelectedEntitiesContext } from '../../context/Selected';
import { BOLD } from '../../constants/commonui';

const AssetConnectionRequisite = ({
  item,
  onLiabilitySelect,
  onLiabilityDelete,
  onExpenseSelect,
  onExpenseDelete,
  onIncomeSelect,
  onIncomeDelete,
  liabilities,
  expenses,
  incomes,
}) => {
  const connected = useContext(SelectedEntitiesContext);

  const lockedExpenses = expenses.filter((exp) => {
    const hasAnotherAssetId = Boolean(exp.assetId && exp.assetId !== item?.id);
    const hasLiabilityId = Boolean(exp.liabilityId);
    return hasAnotherAssetId || hasLiabilityId;
  });

  const lockedLiabilities = liabilities.filter(
    (l) => l.assetId && l.assetId !== item?.id,
  );

  const lockedIncomes = incomes.filter(
    (i) => i.assetId && i.assetId !== item?.id,
  );

  return (
    <View>
      <View style={styles.requisite}>
        <AppText style={styles.text}>
          {connected.liabilities.length === 0
            ? 'You could define child '
            : 'Connected liabilities: '}
        </AppText>
        <ConnectionRequisite
          buttonText="Liabilities"
          title="Liabilities"
          elements={liabilities}
          selectedElements={connected.liabilities}
          lockedElements={lockedLiabilities}
          multiple={true}
          onSelect={onLiabilitySelect}
          onDelete={onLiabilityDelete}
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
      <View style={styles.requisite}>
        <AppText style={styles.text}>
          {connected.incomes.length === 0
            ? 'You could define child '
            : 'Connected incomes: '}
        </AppText>
        <ConnectionRequisite
          buttonText="Incomes"
          title="Incomes"
          elements={incomes}
          selectedElements={connected.incomes}
          lockedElements={lockedIncomes}
          multiple={true}
          onSelect={onIncomeSelect}
          onDelete={onIncomeDelete}
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
    liabilities: state.liabilities,
    expenses: state.expenses,
    incomes: state.incomes,
  };
}

export default connect(mapStateToProps)(AssetConnectionRequisite);
