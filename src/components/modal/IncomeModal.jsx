import React from 'react';

import IncomeForm from '../form/IncomeForm';
import AppModal from './AppModal';

const IncomeModal = ({
  item,
  onTitleChange,
  onAmountChange,
  onDateBeginChange,
  onDateEndChange,
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
        onDateBeginChange={onDateBeginChange}
        onDateEndChange={onDateEndChange}
        onDelete={onDelete}
        isNew={item.id ? false : true}
      />
    </AppModal>
  );
};

export default IncomeModal;
