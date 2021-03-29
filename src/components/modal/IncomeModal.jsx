import React from 'react';
import { Text } from 'react-native';
import AppModal from './AppModal';

const IncomeModal = ({ onSubmit, isVisible, onClose }) => {
  return (
    <AppModal
      firstButton={{ title: 'Submit', onPress: onSubmit }}
      closeButton={{ title: 'Close' }}
      closeByX={false}
      onClose={onClose}
      isVisible={isVisible}
    >
      <Text>Hello</Text>
    </AppModal>
  );
};

export default IncomeModal;
