import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { COLOR } from '../../constants/colors';
import { BOLD } from '../../constants/commonui';
import AppHiddenInput from '../inputs/AppHiddenInput';
import ConnectionRequisite from '../inputs/ConnectionRequisite';
import DateRequisite from '../inputs/DateRequisite';
import TextRequisite from '../inputs/TextRequisite';
import { AppText } from '../text';
import { AppBaseForm } from './AppBaseForm';

const CashFlowForm = ({
  item,
  connectLiabilities,
  onLiabilitySelect,
  onLiabilityDelete,
  connectExpenses,
  titlePlaceholder,
  subtitle,
  onTitleChange,
  onAmountChange,
  onDateBeginChange,
  onDateEndChange,
  onDelete,
  hasParent,
  isNew,
  liabilities,
  expenses,
}) => {
  return (
    <AppBaseForm style={{ marginTop: '10%' }}>
      <View style={styles.top}>
        <View style={styles.titleWrapper}>
          <AppHiddenInput
            value={item.name}
            placeholder={titlePlaceholder}
            style={styles.title}
            onChangeText={onTitleChange}
            autoFocus={isNew}
            multiline={true}
          />
          {!isNew && (
            <TouchableOpacity onPress={onDelete}>
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={36}
                color={COLOR.ORANGE}
              />
            </TouchableOpacity>
          )}
        </View>
        {!isNew && <AppText style={styles.subtitle}>{subtitle}</AppText>}
      </View>
      <TextRequisite
        value={item.amount.toString()}
        name="Amount"
        placeholder="Empty"
        onChangeText={onAmountChange}
        measure=" $"
      />
      <DateRequisite
        name="Date begin"
        placeholder="Empty"
        value={item.dateBegin}
        onChangeText={onDateBeginChange}
        disabled={hasParent}
      />
      <DateRequisite
        name="Date end"
        placeholder="Empty"
        value={item.dateEnd}
        onChangeText={onDateEndChange}
        disabled={hasParent}
      />
      {connectLiabilities && (
        <ConnectionRequisite
          title="Connected liabilities"
          buttonText="Liability"
          elements={liabilities}
          selectedElements={connectLiabilities}
          onSelect={onLiabilitySelect}
          onDelete={onLiabilityDelete}
          multiple={false}
        />
      )}
      {connectExpenses && (
        <ConnectionRequisite
          title="Connected expenses"
          buttonText="Expenses"
          elements={expenses}
          selectedElements={connectExpenses.connected}
          lockedElements={connectExpenses.locked}
          onSelect={connectExpenses.onSelect}
          onDelete={(item) => connectExpenses.onDelete(item)}
          multiple={true}
        />
      )}
    </AppBaseForm>
  );
};

const styles = StyleSheet.create({
  top: {
    paddingBottom: 30,
  },
  titleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    fontWeight: BOLD,
    flex: 4,
  },
  subtitle: {
    color: COLOR.GRAY,
  },
  connectionWrapper: {
    paddingVertical: 10,
  },
  connectionsTitle: {
    fontWeight: BOLD,
    color: COLOR.GRAY,
    marginBottom: 20,
  },
});

function mapStateToProps(state) {
  return {
    liabilities: state.liabilities,
    expenses: state.expenses,
  };
}

export default connect(mapStateToProps)(CashFlowForm);
