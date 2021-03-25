import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { BOLD } from '../../constants/commonui';
import AppHiddenInput from '../inputs/AppHiddenInput';
import AppRequisite from '../inputs/AppRequisite';
import { AppBaseForm } from './AppBaseForm';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLOR } from '../../constants/colors';
import { AppText } from '../text';

const RateForm = ({
  title,
  titlePlaceholder,
  subtitle,
  onTitleChange,
  rate,
  onRateChange,
  onDelete,
  isNew,
}) => {
  return (
    <AppBaseForm style={{ marginTop: '10%' }}>
      <View style={styles.titleWrapper}>
        <AppHiddenInput
          value={title}
          placeholder={titlePlaceholder || 'Empty'}
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
        value={rate}
        name="Rate"
        placeholder="Empty"
        onChangeText={onRateChange}
        measure=" %"
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

export default RateForm;
