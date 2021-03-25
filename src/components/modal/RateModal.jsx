import React from 'react';
import RateForm from '../form/RateForm';
import AppModal from './AppModal';

const RateModal = ({
  item,
  titlePlaceholder,
  subtitle,
  onTitleChange,
  onRateChange,
  isVisible,
  onClose,
  onSubmit,
  onDelete,
}) => {
  return (
    <AppModal
      isVisible={isVisible}
      onClose={onClose}
      firstButton={{ title: 'Submit', onPress: onSubmit }}
      closeButton={{ title: 'Close' }}
      closeByX={false}
    >
      <RateForm
        title={item.name}
        titlePlaceholder={titlePlaceholder}
        subtitle={subtitle}
        onTitleChange={onTitleChange}
        rate={item.rate.toString()}
        onRateChange={onRateChange}
        onDelete={onDelete}
        isNew={item.id ? false : true}
      />
    </AppModal>
  );
};

export default RateModal;
