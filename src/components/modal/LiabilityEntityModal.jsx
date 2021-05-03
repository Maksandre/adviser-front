import React from 'react';
import EntityModal from './EntityModal';
import LiabilityEntityForm from '../form/LiabilityEntityForm';

const LiabilityEntityModal = ({
  onSubmit,
  isVisible,
  onClose,
  item,
  titlePlaceholder,
  subtitle,
  onTitleChange,
  onAmountChange,
  onDateBeginChange,
  onDateEndChange,
  onDelete,
  hasParent,
  onAssetSelect,
  onAssetDelete,
  onExpenseSelect,
  onExpenseDelete,
}) => {
  return (
    <EntityModal onSubmit={onSubmit} isVisible={isVisible} onClose={onClose}>
      <LiabilityEntityForm
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
        onAssetSelect={onAssetSelect}
        onAssetDelete={onAssetDelete}
        onExpenseSelect={onExpenseSelect}
        onExpenseDelete={onExpenseDelete}
      />
    </EntityModal>
  );
};

export default LiabilityEntityModal;
