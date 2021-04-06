import React from 'react';
import AppButtonWithIcon from './AppButtonWithIcon';
import { MaterialIcons } from '@expo/vector-icons';
import { COLOR } from '../../constants/colors';

const AppEditButton = ({ text, onPress }) => {
  const icon = <MaterialIcons name="edit" size={18} color={COLOR.ORANGE} />;
  return (
    <AppButtonWithIcon text={text || ' Edit'} onPress={onPress} icon={icon} />
  );
};

export default AppEditButton;
