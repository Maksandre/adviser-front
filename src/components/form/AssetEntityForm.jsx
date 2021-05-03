import React from 'react';
import AssetConnectionRequisite from '../inputs/AssetConnectionRequisite';
import EntityForm from './EntityForm';

const AssetEntityForm = ({
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
      isNew={item.id ? false : true}
    >
      <AssetConnectionRequisite
        item={item}
        onExpenseDelete={onExpenseDelete}
        onExpenseSelect={onExpenseSelect}
        onIncomeDelete={onIncomeDelete}
        onIncomeSelect={onIncomeSelect}
        onLiabilityDelete={onLiabilityDelete}
        onLiabilitySelect={onLiabilitySelect}
      />
    </EntityForm>
  );
};

export default AssetEntityForm;
