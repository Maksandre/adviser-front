import React from 'react';
import LiabilityConnectionRequisite from '../inputs/LiabilityConnectionRequisite';
import EntityForm from './EntityForm';

const LiabilityEntityForm = ({
  item,
  titlePlaceholder,
  subtitle,
  onTitleChange,
  onAmountChange,
  onDateBeginChange,
  onDateEndChange,
  onDelete,
  hasParent,
  isNew,
  onAssetSelect,
  onAssetDelete,
  onExpenseSelect,
  onExpenseDelete,
}) => {
  return (
    <EntityForm
      item={item}
      titlePlaceholder={titlePlaceholder}
      subtitle={subtitle}
      onTitleChange={onTitleChange}
      onAmountChange={onAmountChange}
      onDateBeginChange={onDateBeginChange}
      onDateEndChange={onDateEndChange}
      onDelete={onDelete}
      hasParent={hasParent}
      isNew={isNew}
    >
      <LiabilityConnectionRequisite
        item={item}
        onAssetDelete={onAssetDelete}
        onAssetSelect={onAssetSelect}
        onExpenseSelect={onExpenseSelect}
        onExpenseDelete={onExpenseDelete}
      />
    </EntityForm>
  );
};

export default LiabilityEntityForm;
