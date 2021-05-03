import React from 'react';

import AppModal from './AppModal';

const EntityModal = ({ onSubmit, isVisible, onClose, children }) => {
  return (
    <AppModal
      isVisible={isVisible}
      onClose={onClose}
      firstButton={{ title: 'Submit', onPress: onSubmit }}
      closeButton={{ title: 'Close' }}
      closeByX={false}
    >
      {children}
    </AppModal>
  );
};

export default EntityModal;
