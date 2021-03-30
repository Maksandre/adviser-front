import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { BOLD } from '../../constants/commonui';
import AppHiddenInput from '../inputs/AppHiddenInput';
import { AppBaseForm } from './AppBaseForm';
import { COLOR } from '../../constants/colors';
import { AppText } from '../text';
import AppRequisite from '../inputs/AppRequisite';

const IncomeForm = ({
  item,
  subtitle,
  onTitleChange,
  onAmountChange,
  onDelete,
  isNew,
}) => {
  return (
    <AppBaseForm style={{ marginTop: '10%' }}>
      <View style={styles.titleWrapper}>
        <AppHiddenInput
          value={item.name}
          placeholder="Income name"
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
      <AppRequisite
        value={item.amount.toString()}
        name="Amount"
        placeholder="Empty"
        onChangeText={onAmountChange}
        measure=" $"
      />
    </AppBaseForm>
  );
};

const styles = StyleSheet.create({
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
});

export default IncomeForm;
