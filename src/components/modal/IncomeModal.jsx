import React from 'react';
import { Text } from 'react-native';
import IncomeForm from '../form/IncomeForm';
import AppModal from './AppModal';

const IncomeModal = ({
  item,
  onTitleChange,
  onAmountChange,
  onSubmit,
  onDelete,
  isVisible,
  onClose,
}) => {
  return (
    <AppModal
      isVisible={isVisible}
      onClose={onClose}
      firstButton={{ title: 'Submit', onPress: onSubmit }}
      closeButton={{ title: 'Close' }}
      closeByX={false}
    >
      <IncomeForm
        item={item}
        subtitle={'Monthly income'}
        onTitleChange={onTitleChange}
        onAmountChange={onAmountChange}
        onDelete={onDelete}
        isNew={item.id ? false : true}
      />
    </AppModal>
  );
};

export default IncomeModal;
