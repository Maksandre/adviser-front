import React from 'react';

import CashFlowForm from '../form/CashFlowForm';
import AppModal from './AppModal';

const CashFlowModal = ({
  item,
  titlePlaceholder,
  subtitle,
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
      <CashFlowForm
        item={item}
        titlePlaceholder={titlePlaceholder}
        subtitle={subtitle}
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

export default CashFlowModal;
