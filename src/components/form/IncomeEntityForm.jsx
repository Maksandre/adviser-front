import React from 'react';
import IncomeConnectionRequisite from '../inputs/IncomeConnectionRequisite';
import EntityForm from './EntityForm';

const IncomeEntityForm = ({
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
      <IncomeConnectionRequisite
        item={item}
        onAssetDelete={onAssetDelete}
        onAssetSelect={onAssetAdd}
      />
    </EntityForm>
  );
};

export default IncomeEntityForm;
