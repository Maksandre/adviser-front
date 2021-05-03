import React from 'react';
import AssetEntityForm from '../form/AssetEntityForm';
import EntityModal from './EntityModal';

const AssetEntityModal = ({
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
  onExpenseDelete,
  onExpenseSelect,
  onIncomeDelete,
  onIncomeSelect,
  onLiabilityDelete,
  onLiabilitySelect,
}) => {
  return (
    <EntityModal onSubmit={onSubmit} isVisible={isVisible} onClose={onClose}>
      <AssetEntityForm
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
        onExpenseDelete={onExpenseDelete}
        onExpenseSelect={onExpenseSelect}
        onIncomeDelete={onIncomeDelete}
        onIncomeSelect={onIncomeSelect}
        onLiabilityDelete={onLiabilityDelete}
        onLiabilitySelect={onLiabilitySelect}
      />
    </EntityModal>
  );
};

export default AssetEntityModal;
