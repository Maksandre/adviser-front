import React from 'react';
import ExpensesConnectionRequisite from '../inputs/ExpensesConnectionRequisite';
import EntityForm from './EntityForm';

const ExpenseEntityForm = ({
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
  onAssetAdd,
  onAssetDelete,
  onLiabilityAdd,
  onLiabilityDelete,
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
      <ExpensesConnectionRequisite
        item={item}
        onAssetAdd={onAssetAdd}
        onAssetDelete={onAssetDelete}
        onLiabilityAdd={onLiabilityAdd}
        onLiabilityDelete={onLiabilityDelete}
      />
    </EntityForm>
  );
};

export default ExpenseEntityForm;
