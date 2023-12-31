import React from 'react';
import AppButtonWithIcon from './AppButtonWithIcon';
import { MaterialIcons } from '@expo/vector-icons';
import { COLOR } from '../../constants/colors';

const AppCreateButton = ({ text, onPress, style, disabled }) => {
  const icon = <MaterialIcons name="add" size={20} color={COLOR.ORANGE} />;
  return (
    <AppButtonWithIcon
      text={text || 'Add'}
      onPress={onPress}
      icon={icon}
      style={style}
      disabled={disabled}
    />
  );
};

export default AppCreateButton;
