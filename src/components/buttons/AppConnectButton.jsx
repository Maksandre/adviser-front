import React from 'react';
import AppButtonWithIcon from './AppButtonWithIcon';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLOR } from '../../constants/colors';

const AppConnectButton = ({ text, onPress, style, disabled }) => {
  const icon = (
    <MaterialCommunityIcons name="link-plus" size={20} color={COLOR.ORANGE} />
  );
  return (
    <AppButtonWithIcon
      style={style}
      text={text || 'Connect'}
      onPress={onPress}
      icon={icon}
      disabled={disabled}
    />
  );
};

export default AppConnectButton;
