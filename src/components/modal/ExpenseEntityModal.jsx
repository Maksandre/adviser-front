import React from 'react';

import EntityModal from './EntityModal';
import ExpenseEntityForm from '../form/ExpenseEntityForm';

const ExpenseEntityModal = ({
  item,
  onSubmit,
  isVisible,
  onClose,
  titlePlaceholder,
  subtitle,
  onTitleChange,
  onAmountChange,
  onDateBeginChange,
  onDateEndChange,
  onDelete,
  hasParent,
  onAssetAdd,
  onAssetDelete,
  onLiabilityAdd,
  onLiabilityDelete,
}) => {
  return (
    <EntityModal onSubmit={onSubmit} isVisible={isVisible} onClose={onClose}>
      <ExpenseEntityForm
        item={item}
        titlePlaceholder={titlePlaceholder}
        subtitle={subtitle}
        onTitleChange={onTitleChange}
        onAmountChange={onAmountChange}
        onDateBeginChange={onDateBeginChange}
        onDateEndChange={onDateEndChange}
        onDelete={onDelete}
        hasParent={hasParent}
        isNew={item.id ? false : true}
        onAssetAdd={onAssetAdd}
        onAssetDelete={onAssetDelete}
        onLiabilityAdd={onLiabilityAdd}
        onLiabilityDelete={onLiabilityDelete}
      />
    </EntityModal>
  );
};

export default ExpenseEntityModal;
