import React from 'react';

import EntityModal from './EntityModal';
import ExpenseEntityForm from '../form/ExpenseEntityForm';
import IncomeEntityForm from '../form/IncomeEntityForm';

const IncomeEntityModal = ({
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
}) => {
  return (
    <EntityModal onSubmit={onSubmit} isVisible={isVisible} onClose={onClose}>
      <IncomeEntityForm
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
        // TODO onLiabilityAdd={}
        // onLiabilityDelete={}
      />
    </EntityModal>
  );
};

export default IncomeEntityModal;
